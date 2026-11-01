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

test("Elektronischer Widerruf: Pflichtfelder, Eingang, Spam-Falle", async () => {
  assert.equal((await post("/api/widerruf", { name: "X", email: "x@example.com" })).status, 400);
  const r = await post("/api/widerruf", { name: "Maria Test", email: "maria@example.com", vertrag: "basis", vertragText: "Paket Basis", datum: "2026-11-01", sprache: "de" });
  assert.equal(r.status, 200);
  assert.match((await r.json()).eingang, /^\d{4}-\d{2}-\d{2}T/);
  assert.equal((await post("/api/widerruf", { name: "Bot", email: "b@example.com", vertrag: "basis", website: "x" })).status, 200);
  assert.equal((await get("/widerrufen.html")).status, 200);
  assert.equal((await get("/en/widerrufen.html")).status, 200);
});

test("Bestellseite: beide Häkchen Pflicht, Preis nur vom Server, Zustimmung landet beim Kauf", async () => {
  assert.equal((await (await get("/api/bestellen")).json()).aktiv, true);
  assert.equal((await post("/api/bestellen", { paket: "praxis", sprache: "de", agb: true, sofort: false })).status, 400);
  assert.equal((await post("/api/bestellen", { paket: "gratis", sprache: "de", agb: true, sofort: true })).status, 400);
  assert.equal((await post("/api/bestellen", { paket: "praxis", agb: true, sofort: true }, null, { Origin: "https://boese.example" })).status, 403);
  const r = await post("/api/bestellen", { paket: "praxis", sprache: "en", agb: true, sofort: true, preis: 1 });
  assert.equal(r.status, 200);
  const d = await r.json();
  assert.match(d.url, /^https:\/\/checkout\.stripe\.com\//);
  const f = new URLSearchParams(d.dev_formular);
  assert.equal(f.get("line_items[0][price_data][unit_amount]"), "99900");
  assert.equal(f.get("metadata[paket]"), "praxis");
  assert.equal(f.get("locale"), "en");
  assert.match(f.get("success_url"), /\/en\/danke\.html\?bestellung=\{CHECKOUT_SESSION_ID\}$/);
  // Webhook zu dieser Sitzung: Zustimmung kommt aus der Bestellung, nicht aus einem Payment-Link-Feld
  const sid = d.url.split("/").pop();
  const email = "bestellung-" + Date.now() + "@example.com";
  const ev = kauf(email, sid, { amount_total: 99900, locale: "en", metadata: { paket: "praxis", sprache: "en", bestellung: f.get("metadata[bestellung]") }, custom_fields: [] });
  assert.equal((await webhook(ev)).status, 200);
  const c = await (await post("/api/code", { email })).json();
  assert.ok(c.dev_code, "Käufer über die Bestellseite bekommt einen Code");
  assert.equal((await get("/bestellen.html")).status, 200);
  assert.equal((await get("/es/bestellen.html")).status, 200);
});

test("Einzelprodukte: Praxiskit (Versand, Rabatt nach Kursabschluss) und Kursbuch-PDF", async () => {
  // Kit: ohne Sofort-Häkchen erlaubt, Normalpreis, Lieferadresse wird abgefragt
  const k = await post("/api/bestellen", { paket: "kit", sprache: "de", agb: true, sofort: false });
  assert.equal(k.status, 200);
  const kf = new URLSearchParams((await k.json()).dev_formular);
  assert.equal(kf.get("line_items[0][price_data][unit_amount]"), "9900");
  assert.equal(kf.get("shipping_address_collection[allowed_countries][0]"), "DE");
  assert.equal(kf.get("metadata[art]"), "ware");
  // Buch: digitaler Inhalt, Sofort-Häkchen Pflicht
  assert.equal((await post("/api/bestellen", { paket: "buch", sprache: "de", agb: true, sofort: false })).status, 400);
  const b = await post("/api/bestellen", { paket: "buch", sprache: "en", agb: true, sofort: true });
  const bf = new URLSearchParams((await b.json()).dev_formular);
  assert.equal(bf.get("line_items[0][price_data][unit_amount]"), "1990");
  assert.equal(bf.get("shipping_address_collection[allowed_countries][0]"), null);

  // Rabatt: Basis-Kunde ohne bestandene Simulation -> Normalpreis, danach 84,15 €
  const email = "kit-" + Date.now() + "@example.com";
  assert.equal((await webhook(kauf(email, "cs_test_kit_" + Date.now()))).status, 200);
  const { cookie } = await anmelden(email);
  assert.equal((await (await get("/api/bestellen", cookie)).json()).kitRabatt, false);
  const ohne = await post("/api/bestellen", { paket: "kit", sprache: "de", agb: true }, cookie);
  assert.equal(new URLSearchParams((await ohne.json()).dev_formular).get("line_items[0][price_data][unit_amount]"), "9900");
  const fortschritt = await fetch(BASIS + "/api/fortschritt", { method: "PUT", headers: { "Content-Type": "application/json", Cookie: cookie }, body: JSON.stringify({ simulation: { bestanden: true, richtig: 45, gesamt: 50 } }) });
  assert.equal(fortschritt.status, 200);
  assert.equal((await (await get("/api/bestellen", cookie)).json()).kitRabatt, true);
  const mit = await post("/api/bestellen", { paket: "kit", sprache: "de", agb: true }, cookie);
  const mf = new URLSearchParams((await mit.json()).dev_formular);
  assert.equal(mf.get("line_items[0][price_data][unit_amount]"), "8415");
  assert.equal(mf.get("metadata[rabatt]"), "kursteilnehmer");

  // Bezahltes Kit schaltet keinen Kurs frei; doppelte Webhooks werden erkannt
  const kaeufer = "nurkit-" + Date.now() + "@example.com", sid = "cs_test_nurkit_" + Date.now();
  const ev = kauf(kaeufer, sid, { amount_total: 9900, metadata: { paket: "kit", sprache: "de", art: "ware" }, custom_fields: [], shipping_details: { name: "Kit Käufer", address: { line1: "Teststraße 1", postal_code: "49808", city: "Lingen", country: "DE" } } });
  assert.equal((await webhook(ev)).status, 200);
  assert.equal((await (await webhook(ev)).json()).doppelt, true);
  assert.equal((await (await post("/api/code", { email: kaeufer })).json()).dev_code, undefined);

  // Buch: Kauf erzeugt Download, ungültige Links werden abgewiesen, Kursbuch nur mit Anmeldung
  assert.equal((await webhook(kauf("buch-" + Date.now() + "@example.com", "cs_test_buch_" + Date.now(), { amount_total: 1990, metadata: { paket: "buch", sprache: "de", art: "digital" }, custom_fields: [] }))).status, 200);
  assert.equal((await get("/download/abc")).status, 404);
  assert.equal((await get("/download/" + "0".repeat(48))).status, 410);
  assert.equal((await get("/kurs/kursbuch.pdf")).status, 302);
  assert.ok([200, 503].includes((await get("/kurs/kursbuch.pdf", cookie)).status));
});
