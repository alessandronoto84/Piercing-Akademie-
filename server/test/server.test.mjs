// Integrationstest gegen den lokalen Server (npx wrangler dev --local, .dev.vars mit DEV=1 und STRIPE_WEBHOOK_SECRET=whsec_lokaltest)
// Aufruf: BASIS=http://127.0.0.1:8787 node --test test/
import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";

const BASIS = process.env.BASIS || "http://127.0.0.1:8787";
const GEHEIM = process.env.WEBHOOK_SECRET || "whsec_lokaltest";
const LAUF = "cs_test_" + Date.now();
const KAEUFER = "test-" + Date.now() + "@example.com";

// Gültige Wunschtermine für Praxis (1 Praxistag) und Komplett (2): nächste Samstage/Montage ab 8 Tagen, Telefonat übermorgen (kein Sonntag)
function naechster(ab, wochentage) { const d = new Date(); d.setUTCDate(d.getUTCDate() + ab); while (!wochentage.includes(d.getUTCDay())) d.setUTCDate(d.getUTCDate() + 1); return d.toISOString().slice(0, 10); }
function termine(anzahl) {
  const erster = naechster(8, [1, 6]), zweiter = naechster(+((new Date(erster) - new Date()) / 86400000).toFixed(0) + 2, [1, 6]);
  return { telefon: "+49 173 1234567", praxis_termine: anzahl === 2 ? [erster, zweiter] : [erster], telefon_termin: naechster(2, [1, 2, 3, 4, 5, 6]), telefon_zeit: "nachmittags" };
}

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
  assert.equal((await post("/api/bestellen", { paket: "basis", sprache: "de", agb: true, sofort: false })).status, 400);
  assert.equal((await post("/api/bestellen", { paket: "gratis", sprache: "de", agb: true, sofort: true })).status, 400);
  assert.equal((await post("/api/bestellen", { paket: "basis", agb: true, sofort: true }, null, { Origin: "https://boese.example" })).status, 403);
  const r = await post("/api/bestellen", { paket: "basis", sprache: "en", agb: true, sofort: true, preis: 1 });
  assert.equal(r.status, 200);
  const d = await r.json();
  assert.match(d.url, /^https:\/\/checkout\.stripe\.com\//);
  const f = new URLSearchParams(d.dev_formular);
  assert.equal(f.get("line_items[0][price_data][unit_amount]"), "24900");
  assert.equal(f.get("metadata[paket]"), "basis");
  assert.equal(f.get("locale"), "en");
  assert.match(f.get("success_url"), /\/en\/danke\.html\?bestellung=\{CHECKOUT_SESSION_ID\}$/);
  // Webhook zu dieser Sitzung: Zustimmung kommt aus der Bestellung, nicht aus einem Payment-Link-Feld
  const sid = d.url.split("/").pop();
  const email = "bestellung-" + Date.now() + "@example.com";
  const ev = kauf(email, sid, { amount_total: 24900, locale: "en", metadata: { paket: "basis", sprache: "en", bestellung: f.get("metadata[bestellung]") }, custom_fields: [] });
  assert.equal((await webhook(ev)).status, 200);
  const c = await (await post("/api/code", { email })).json();
  assert.ok(c.dev_code, "Käufer über die Bestellseite bekommt einen Code");
  assert.equal((await get("/bestellen.html")).status, 200);
  assert.equal((await get("/es/bestellen.html")).status, 200);
});

test("Einzelprodukte: Kursbuch digital; Praxiskit gibt es nicht mehr, Komplett fragt die Lieferadresse ab", async () => {
  // Praxiskit ist kein Produkt mehr (Material nur im Paket Komplett)
  assert.equal((await post("/api/bestellen", { paket: "kit", sprache: "de", agb: true, sofort: true })).status, 400);
  // Praxis und Komplett gibt es nur auf Anfrage, nicht zum Direktkauf
  assert.equal((await post("/api/bestellen", { paket: "praxis", sprache: "de", agb: true, sofort: true })).status, 400);
  assert.equal((await post("/api/bestellen", { paket: "komplett", sprache: "de", agb: true, sofort: true })).status, 400);
  // Basis: keine Lieferadresse
  const ba = await post("/api/bestellen", { paket: "basis", sprache: "de", agb: true, sofort: true });
  const baf = new URLSearchParams((await ba.json()).dev_formular);
  assert.equal(baf.get("shipping_address_collection[allowed_countries][0]"), null);
  assert.equal(baf.get("adaptive_pricing[enabled]"), "false", "immer in Euro, keine Umrechnung durch Stripe");
  // Buch: digitaler Inhalt, Sofort-Häkchen Pflicht
  assert.equal((await post("/api/bestellen", { paket: "buch", sprache: "de", agb: true, sofort: false })).status, 400);
  const b = await post("/api/bestellen", { paket: "buch", sprache: "en", agb: true, sofort: true });
  const bf = new URLSearchParams((await b.json()).dev_formular);
  assert.equal(bf.get("line_items[0][price_data][unit_amount]"), "1990");
  assert.equal(bf.get("shipping_address_collection[allowed_countries][0]"), null);

  // Komplett-Kauf mit Lieferadresse: Kurs wird freigeschaltet, doppelte Webhooks werden erkannt
  const kunde = "komplett-" + Date.now() + "@example.com", sid = "cs_test_komplett_" + Date.now();
  const ev = kauf(kunde, sid, { amount_total: 249000, metadata: { paket: "komplett", sprache: "de" }, shipping_details: { name: "Komplett Kunde", address: { line1: "Teststraße 1", postal_code: "49808", city: "Lingen", country: "DE" } } });
  assert.equal((await webhook(ev)).status, 200);
  assert.equal((await (await webhook(ev)).json()).doppelt, true);
  assert.ok((await (await post("/api/code", { email: kunde })).json()).dev_code);

  // Buch digital: Kauf legt einen reinen Lesezugang an (kein Kurs, keine Bescheinigung), Seiten und Suche nur angemeldet
  const leser = "buch-" + Date.now() + "@example.com";
  assert.equal((await webhook(kauf(leser, "cs_test_buch_" + Date.now(), { amount_total: 1990, metadata: { paket: "buch", sprache: "de", art: "digital" }, custom_fields: [] }))).status, 200);
  const l = await anmelden(leser);
  assert.equal((await get("/kurs/buch/seite-074.webp")).status, 302);
  const bild = await get("/kurs/buch/seite-074.webp", l.cookie);
  assert.equal(bild.status, 200);
  assert.equal(bild.headers.get("content-type"), "image/webp");
  assert.match(bild.headers.get("cache-control"), /no-store/);
  assert.equal((await get("/kurs/buch/seite-999.webp", l.cookie)).status, 404);
  const suche = await (await get("/api/buch/suche?q=Septum", l.cookie)).json();
  assert.ok(suche.treffer.some((t) => t.seite === 88), "Septum steht auf S. 88");
  assert.equal((await get("/api/buch/suche?q=Septum")).status, 401);
  // Übersetzter Seitentext für englische und spanische Leser, Suche in der jeweiligen Sprache
  for (const sprache of ["en", "es"]) {
    const t = await get("/api/buch/seite?nr=88&sprache=" + sprache, l.cookie);
    assert.equal(t.status, 200);
    assert.match((await t.json()).text, /septum/i);
    const st = await (await get("/api/buch/suche?q=septum&sprache=" + sprache, l.cookie)).json();
    assert.ok(st.treffer.some((x) => x.seite === 88));
  }
  assert.equal((await get("/api/buch/seite?nr=88&sprache=fr", l.cookie)).status, 400);
  assert.equal((await get("/api/buch/seite?nr=999&sprache=en", l.cookie)).status, 404);
  assert.equal((await get("/api/buch/seite?nr=88&sprache=en")).status, 401);
  assert.equal((await post("/api/bescheinigung", { name: "Leser" }, l.cookie)).status, 400);
  assert.equal((await get("/download/" + "0".repeat(48))).status, 404);
});

test("Anfrage Praxis/Komplett: Kontaktdaten und Wunschtermine (Praxistag nur Samstag/Montag) sind Pflicht", async () => {
  const basis = { name: "Anfrage Test", email: "anfrage-" + Date.now() + "@example.com", volljaehrig: true, sprache: "de" };
  assert.equal((await post("/api/anfrage", { ...basis, paket: "basis", ...termine(1) })).status, 400, "Basis wird direkt gebucht");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "praxis" })).status, 400, "ohne Termine");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "komplett", ...termine(1) })).status, 400, "Komplett braucht zwei Praxistage");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "praxis", ...termine(1), praxis_termine: [naechster(10, [0])] })).status, 400, "Sonntag ist kein Praxistag");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "praxis", ...termine(1), telefon: "abc" })).status, 400, "Telefonnummer Pflicht");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "praxis", ...termine(1), volljaehrig: false })).status, 400, "18+ Pflicht");
  assert.equal((await post("/api/anfrage", { ...basis, paket: "komplett", ...termine(2) })).status, 200);
});
