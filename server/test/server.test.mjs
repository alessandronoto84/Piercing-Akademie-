// Integrationstest gegen den lokalen Server (npx wrangler dev --local, .dev.vars mit DEV=1 und STRIPE_WEBHOOK_SECRET=whsec_lokaltest)
// Aufruf: BASIS=http://127.0.0.1:8787 node --test test/
import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";

const BASIS = process.env.BASIS || "http://127.0.0.1:8787";
const GEHEIM = process.env.WEBHOOK_SECRET || "whsec_lokaltest";
const LAUF = "cs_test_" + Date.now();
const KAEUFER = "test-" + Date.now() + "@example.com";

function get(pfad, cookie, opts = {}) {
  return fetch(BASIS + pfad, { redirect: "manual", headers: { ...(cookie ? { Cookie: cookie } : {}), ...(opts.headers || {}) } });
}
function post(pfad, daten, cookie, extra = {}) {
  return fetch(BASIS + pfad, { method: "POST", redirect: "manual", headers: { "Content-Type": "application/json", ...(cookie ? { Cookie: cookie } : {}), ...extra }, body: JSON.stringify(daten) });
}
function webhook(ev, geheim = GEHEIM) {
  const roh = JSON.stringify(ev);
  const t = Math.floor(Date.now() / 1000);
  const sig = crypto.createHmac("sha256", geheim).update(t + "." + roh).digest("hex");
  return fetch(BASIS + "/api/stripe", { method: "POST", headers: { "Stripe-Signature": "t=" + t + ",v1=" + sig, "Content-Type": "application/json" }, body: roh });
}
const kauf = (email, id, extra = {}) => ({
  type: "checkout.session.completed",
  data: { object: { id, payment_status: "paid", created: Math.floor(Date.now() / 1000), amount_total: 24900, currency: "eur", locale: "de",
    customer_details: { email, name: "Test Person" }, metadata: { paket: "basis", sprache: "de" },
    custom_fields: [{ key: "sofortigerkursbeginn", label: { custom: "Sofortiger Kursbeginn" }, dropdown: { value: "Ja: sofort starten, mein Widerrufsrecht für den Online-Kurs erlischt" } }], ...extra } }
});
async function anmelden(email, ua = "Mozilla/5.0 (Windows NT 10.0) Chrome/120") {
  const c = await (await post("/api/code", { email })).json();
  assert.ok(c.dev_code, "Code für " + email);
  const r = await fetch(BASIS + "/api/anmelden", { method: "POST", headers: { "Content-Type": "application/json", "User-Agent": ua }, body: JSON.stringify({ email, code: c.dev_code }) });
  assert.equal(r.status, 200);
  return { cookie: r.headers.get("set-cookie").split(";")[0], antwort: await r.json() };
}

test("Website ist öffentlich, Fahrschule nicht", async () => {
  assert.equal((await get("/")).status, 200);
  assert.equal((await get("/en/")).status, 200);
  const k = await get("/kurs/");
  assert.equal(k.status, 302);
  assert.match(k.headers.get("location"), /\/login\.html\?weiter=%2Fkurs%2F/);
  assert.equal((await get("/kurs/inhalte/bilder/1.webp")).status, 302);
  assert.equal((await get("/kurs/inhalte/modul-01.js")).status, 302);
  assert.equal((await get("/kurs/konto.js")).status, 302);
  assert.equal((await get("/gibtsnicht.html")).status, 404);
});

test("Ohne Kauf kein Code, fremde Herkunft abgewiesen", async () => {
  const c = await (await post("/api/code", { email: "niemand@example.com" })).json();
  assert.equal(c.ok, true);
  assert.equal(c.dev_code, undefined);
  assert.equal((await post("/api/code", { email: KAEUFER }, null, { Origin: "https://boese.example" })).status, 403);
});

test("Stripe-Webhook: Signatur, Freischaltung, keine Doppelanlage", async () => {
  assert.equal((await webhook(kauf(KAEUFER, LAUF + "_1"), "whsec_falsch")).status, 400);
  const r = await webhook(kauf(KAEUFER, LAUF + "_1"));
  assert.equal(r.status, 200);
  assert.equal((await (await webhook(kauf(KAEUFER, LAUF + "_1"))).json()).doppelt, true);
  const offen = await webhook({ type: "checkout.session.completed", data: { object: { ...kauf("sepa@example.com", LAUF + "_2").data.object, payment_status: "unpaid" } } });
  assert.equal((await offen.json()).ignoriert, "checkout.session.completed");
});

test("Login per Code, falscher Code, Zugang zur Fahrschule", async () => {
  const c = await (await post("/api/code", { email: KAEUFER })).json();
  const falsch = await post("/api/anmelden", { email: KAEUFER, code: c.dev_code === "000000" ? "111111" : "000000" });
  assert.equal(falsch.status, 400);
  const r = await post("/api/anmelden", { email: KAEUFER, code: c.dev_code });
  assert.equal(r.status, 200);
  const cookie = r.headers.get("set-cookie").split(";")[0];
  assert.match(r.headers.get("set-cookie"), /HttpOnly/);
  const k = await get("/kurs/", cookie);
  assert.equal(k.status, 200);
  assert.equal(k.headers.get("cache-control"), "private, no-store");
  const konto = await (await get("/kurs/konto.js", cookie)).text();
  assert.match(konto, new RegExp(KAEUFER.replace(/[.+]/g, "\\$&")));
  assert.match(konto, /"admin":false/);
  assert.equal((await get("/kurs/inhalte/bilder/1.webp", cookie)).status, 200);
  // Code ist nur einmal gültig
  assert.equal((await post("/api/anmelden", { email: KAEUFER, code: c.dev_code })).status, 400);
});

test("Höchstens zwei Geräte gleichzeitig", async () => {
  const a = await anmelden(KAEUFER, "Mozilla/5.0 (iPhone) Safari/1");
  const b = await anmelden(KAEUFER, "Mozilla/5.0 (Macintosh; Mac OS X) Safari/1");
  const c = await anmelden(KAEUFER, "Mozilla/5.0 (Linux; Android) Chrome/1");
  assert.ok(c.antwort.beendet >= 1);
  assert.equal((await get("/kurs/", a.cookie)).status, 302, "älteste Anmeldung ist beendet");
  assert.equal((await get("/kurs/", b.cookie)).status, 200);
  assert.equal((await get("/kurs/", c.cookie)).status, 200);
});

test("Fortschritt und prüfbare Bescheinigung", async () => {
  const { cookie } = await anmelden(KAEUFER);
  const ohne = await post("/api/bescheinigung", { name: "Test Person" }, cookie);
  assert.equal(ohne.status, 400);
  const stand = { erledigt: { a: 1 }, bestanden: {}, simulation: { richtig: 40, gesamt: 44, bestanden: true, datum: "2026-11-01" } };
  const put = await fetch(BASIS + "/api/fortschritt", { method: "PUT", headers: { Cookie: cookie, "Content-Type": "application/json" }, body: JSON.stringify(stand) });
  assert.equal(put.status, 200);
  assert.match(await (await get("/kurs/konto.js", cookie)).text(), /"richtig":40/);
  const b = await (await post("/api/bescheinigung", { name: "Test Person" }, cookie)).json();
  assert.match(b.nr, /^PA-2026-[A-F0-9]{6}$/);
  const zweit = await (await post("/api/bescheinigung", { name: "Anderer Name" }, cookie)).json();
  assert.equal(zweit.nr, b.nr);
  assert.equal(zweit.name, "Test Person");
  const p = await get("/pruefen?nr=" + b.nr);
  assert.equal(p.status, 200);
  assert.match(await p.text(), /Gültig[\s\S]*Test Person/);
  assert.equal((await get("/pruefen?nr=PA-2026-000000")).status, 404);
});

test("Abmelden beendet die Sitzung; Code-Anforderungen sind begrenzt", async () => {
  // KAEUFER hat in dieser Stunde schon 5 Codes angefordert: der 6. wird abgelehnt
  assert.equal((await post("/api/code", { email: KAEUFER })).status, 429);
  const zweiter = "zweit-" + Date.now() + "@example.com";
  assert.equal((await webhook(kauf(zweiter, "cs_test_" + Date.now()))).status, 200);
  const { cookie } = await anmelden(zweiter);
  assert.equal((await post("/api/abmelden", {}, cookie)).status, 200);
  assert.equal((await get("/kurs/", cookie)).status, 302);
});

test("Admin kommt ohne Kauf hinein und hat den Prüfmodus", async () => {
  const { cookie } = await anmelden("diepiercingakademie@gmail.com");
  assert.match(await (await get("/kurs/konto.js", cookie)).text(), /"admin":true/);
});

test("Anfrageformular: Pflichtfelder und Spam-Falle", async () => {
  assert.equal((await post("/api/anfrage", { paket: "basis", name: "X" })).status, 400);
  const falle = await post("/api/anfrage", { paket: "basis", name: "Bot", email: "bot@example.com", website: "http://spam" });
  assert.equal(falle.status, 200);
  assert.equal((await post("/api/anfrage", { paket: "basis", name: "X", email: "x@example.com" }, null, { Origin: "https://boese.example" })).status, 403);
});
