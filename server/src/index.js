/* Piercing Akademie – Cloudflare Worker
   - liefert die statische Website aus (ASSETS)
   - schützt /kurs/ (Fahrschule): nur mit gültiger Anmeldung, höchstens MAX_GERAETE gleichzeitig
   - Login ohne Passwort: 6-stelliger Code per E-Mail an die beim Kauf angegebene Adresse
   - Stripe-Webhook: legt nach der Zahlung den Zugang an und schickt Zugang + Vertragsbestätigung (§ 312f BGB)
   - speichert Fortschritt und vergibt prüfbare Bescheinigungsnummern */
import { mailCode, mailWillkommen, mailVerdacht, mailAnfrage, sende } from "./mail.js";

const COOKIE = "pa_sitzung";
const SITZUNG_TAGE = 30;
const CODE_MINUTEN = 10;
const CODE_VERSUCHE = 5;
const CODES_PRO_STUNDE = 5;
const VERDACHT_GERAETE = 6; // verschiedene Geräte in 30 Tagen

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const p = url.pathname;
    try {
      if (p.startsWith("/api/")) return await api(req, env, url, ctx);
      if (p === "/pruefen") return await pruefSeite(env, url);
      if (p === "/kurs" || p.startsWith("/kurs/")) return await kurs(req, env, url, p);
      return env.ASSETS.fetch(req);
    } catch (e) {
      console.error(e);
      return json({ fehler: "server" }, 500);
    }
  },
  // Nächtliche Löschung nach den Fristen der Datenschutzerklärung
  async scheduled(ev, env) {
    await aufraeumen(env);
  }
};

export async function aufraeumen(env) {
  const t = jetzt();
  const frist = new Date(); frist.setMonth(frist.getMonth() - 12);
  const alt = frist.toISOString();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM anmeldungen WHERE zeit < ?").bind(t - 90 * 86400),
    env.DB.prepare("DELETE FROM anfragen WHERE zeit < ?").bind(t - 86400),
    env.DB.prepare("DELETE FROM sitzungen WHERE zuletzt < ?").bind(t - SITZUNG_TAGE * 86400),
    env.DB.prepare("DELETE FROM codes WHERE ablauf < ?").bind(t - 3600), // letzte Anforderung über eine Stunde her
    env.DB.prepare("DELETE FROM fortschritt WHERE email IN (SELECT email FROM kunden WHERE gueltig_bis < ?)").bind(alt),
    env.DB.prepare("DELETE FROM bescheinigungen WHERE email IN (SELECT email FROM kunden WHERE gueltig_bis < ?)").bind(alt),
    env.DB.prepare("DELETE FROM sitzungen WHERE email IN (SELECT email FROM kunden WHERE gueltig_bis < ?)").bind(alt),
    env.DB.prepare("DELETE FROM kunden WHERE gueltig_bis < ? AND paket != 'admin'").bind(alt)
  ]);
}

// ---------- Hilfen ----------
function json(daten, status = 200, extra = {}) {
  return new Response(JSON.stringify(daten), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...extra } });
}
const jetzt = () => Math.floor(Date.now() / 1000);
const normal = (e) => String(e || "").trim().toLowerCase();
const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 200;

async function sha256(text) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function zufall(bytes = 32) {
  const a = crypto.getRandomValues(new Uint8Array(bytes));
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function zufallsCode() {
  const a = crypto.getRandomValues(new Uint32Array(1))[0] % 1000000;
  return String(a).padStart(6, "0");
}
function gleich(a, b) {
  if (a.length !== b.length) return false;
  let x = 0;
  for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return x === 0;
}
function cookieLesen(req) {
  const m = (req.headers.get("Cookie") || "").match(new RegExp("(?:^|;\\s*)" + COOKIE + "=([a-f0-9]{64})"));
  return m ? m[1] : null;
}
function cookieSetzen(token, env) {
  const sicher = env.DEV === "1" ? "" : "; Secure";
  return COOKIE + "=" + token + "; Path=/; HttpOnly; SameSite=Lax; Max-Age=" + SITZUNG_TAGE * 86400 + sicher;
}
const cookieLoeschen = () => COOKIE + "=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0";
function geraet(req) {
  const ua = req.headers.get("User-Agent") || "";
  const system = /iPhone|iPad/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : /Linux/.test(ua) ? "Linux" : "anderes";
  const browser = /Edg\//.test(ua) ? "Edge" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "anderer";
  return system + " · " + browser;
}
function istAdmin(env, email) {
  return String(env.ADMIN_EMAILS || "").split(",").map(normal).filter(Boolean).includes(email);
}
async function kunde(env, email) {
  return env.DB.prepare("SELECT * FROM kunden WHERE email = ?").bind(email).first();
}
function zugangGueltig(k) {
  return k && !k.gesperrt && (!k.gueltig_bis || k.gueltig_bis >= new Date().toISOString());
}

async function sitzung(req, env) {
  const token = cookieLesen(req);
  if (!token) return null;
  const h = await sha256(token);
  const s = await env.DB.prepare("SELECT * FROM sitzungen WHERE token_hash = ?").bind(h).first();
  if (!s || s.zuletzt < jetzt() - SITZUNG_TAGE * 86400) return null;
  const k = await kunde(env, s.email);
  if (!zugangGueltig(k)) return null;
  if (s.zuletzt < jetzt() - 300) await env.DB.prepare("UPDATE sitzungen SET zuletzt = ? WHERE token_hash = ?").bind(jetzt(), h).run();
  return { ...s, token_hash: h, kunde: k, admin: istAdmin(env, s.email) };
}

// ---------- Fahrschule hinter der Bezahlschranke ----------
async function kurs(req, env, url, p) {
  const s = await sitzung(req, env);
  if (!s) {
    const ziel = new URL("/login.html", url);
    ziel.searchParams.set("weiter", p + url.search);
    return Response.redirect(ziel.toString(), 302);
  }
  // Kontodaten und gespeicherter Fortschritt für die Fahrschule
  if (p === "/kurs/konto.js") {
    const f = await env.DB.prepare("SELECT daten FROM fortschritt WHERE email = ?").bind(s.email).first();
    const b = await env.DB.prepare("SELECT nr, datum FROM bescheinigungen WHERE email = ?").bind(s.email).first();
    const konto = { email: s.email, name: s.kunde.name || "", paket: s.kunde.paket, sprache: s.kunde.sprache || "de", admin: s.admin, gueltigBis: s.kunde.gueltig_bis, fortschritt: f ? JSON.parse(f.daten) : null, bescheinigung: b || null };
    return new Response("window.PA_KONTO = " + JSON.stringify(konto).replace(/</g, "\\u003c") + ";", {
      headers: { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "private, no-store" }
    });
  }
  const res = await env.ASSETS.fetch(req);
  const h = new Headers(res.headers);
  h.set("Cache-Control", "private, no-store");
  h.set("X-Robots-Tag", "noindex, nofollow");
  h.set("Referrer-Policy", "same-origin");
  return new Response(res.body, { status: res.status, headers: h });
}

// ---------- API ----------
async function api(req, env, url, ctx) {
  const p = url.pathname;
  if (p === "/api/stripe" && req.method === "POST") return stripeWebhook(req, env, ctx);
  if (req.method === "POST" && !gleicheHerkunft(req, url)) return json({ fehler: "herkunft" }, 403);
  if (p === "/api/anfrage" && req.method === "POST") return anfrage(req, env, ctx);
  if (p === "/api/code" && req.method === "POST") return codeAnfordern(req, env, ctx);
  if (p === "/api/anmelden" && req.method === "POST") return anmelden(req, env, ctx);
  if (p === "/api/abmelden" && req.method === "POST") {
    const token = cookieLesen(req);
    if (token) await env.DB.prepare("DELETE FROM sitzungen WHERE token_hash = ?").bind(await sha256(token)).run();
    return json({ ok: true }, 200, { "Set-Cookie": cookieLoeschen() });
  }
  const s = await sitzung(req, env);
  if (!s) return json({ fehler: "anmeldung" }, 401);
  if (p === "/api/fortschritt" && req.method === "PUT") {
    const text = await req.text();
    if (text.length > 300000) return json({ fehler: "zu_gross" }, 413);
    JSON.parse(text);
    await env.DB.prepare("INSERT INTO fortschritt (email, daten, aktualisiert) VALUES (?, ?, ?) ON CONFLICT(email) DO UPDATE SET daten = excluded.daten, aktualisiert = excluded.aktualisiert").bind(s.email, text, jetzt()).run();
    return json({ ok: true });
  }
  if (p === "/api/bescheinigung" && req.method === "POST") return bescheinigung(req, env, s);
  if (p === "/api/geraete" && req.method === "GET") {
    const r = await env.DB.prepare("SELECT geraet, erstellt, zuletzt, token_hash = ? AS dieses FROM sitzungen WHERE email = ? ORDER BY zuletzt DESC").bind(s.token_hash, s.email).all();
    return json({ geraete: r.results });
  }
  return json({ fehler: "unbekannt" }, 404);
}

// Schutz gegen fremde Seiten, die Formulare an die API schicken
function gleicheHerkunft(req, url) {
  const o = req.headers.get("Origin");
  return !o || o === url.origin;
}

async function codeAnfordern(req, env, ctx) {
  const { email: roh, sprache } = await req.json().catch(() => ({}));
  const email = normal(roh);
  const antwort = json({ ok: true }); // immer gleich, damit niemand prüfen kann, welche Adressen Kunden sind
  if (!emailOk(email)) return json({ fehler: "email" }, 400);
  let k = await kunde(env, email);
  if (!k && istAdmin(env, email)) {
    await env.DB.prepare("INSERT INTO kunden (email, name, paket, sprache, gekauft_am, freigeschaltet_am) VALUES (?, 'Piercing Akademie', 'admin', 'de', ?, ?)").bind(email, new Date().toISOString(), new Date().toISOString()).run();
    k = await kunde(env, email);
  }
  if (!zugangGueltig(k)) return antwort;
  const vorher = await env.DB.prepare("SELECT angefordert FROM codes WHERE email = ?").bind(email).first();
  const liste = JSON.parse((vorher && vorher.angefordert) || "[]").filter((t) => t > jetzt() - 3600);
  if (liste.length >= CODES_PRO_STUNDE) return json({ fehler: "zu_oft" }, 429);
  liste.push(jetzt());
  const code = zufallsCode();
  const h = await sha256(email + ":" + code + ":" + (env.CODE_PFEFFER || ""));
  await env.DB.prepare("INSERT INTO codes (email, code_hash, ablauf, versuche, angefordert) VALUES (?, ?, ?, 0, ?) ON CONFLICT(email) DO UPDATE SET code_hash = excluded.code_hash, ablauf = excluded.ablauf, versuche = 0, angefordert = excluded.angefordert")
    .bind(email, h, jetzt() + CODE_MINUTEN * 60, JSON.stringify(liste)).run();
  const mail = mailCode(code, sprache || k.sprache || "de", CODE_MINUTEN);
  ctx.waitUntil(sende(env, email, mail));
  if (env.DEV === "1") return json({ ok: true, dev_code: code });
  return antwort;
}

async function anmelden(req, env) {
  const { email: roh, code } = await req.json().catch(() => ({}));
  const email = normal(roh);
  const c = await env.DB.prepare("SELECT * FROM codes WHERE email = ?").bind(email).first();
  if (!c || !c.code_hash || c.ablauf < jetzt()) return json({ fehler: "abgelaufen" }, 400);
  if (c.versuche >= CODE_VERSUCHE) return json({ fehler: "zu_oft" }, 429);
  const h = await sha256(email + ":" + String(code || "").trim() + ":" + (env.CODE_PFEFFER || ""));
  if (!gleich(h, c.code_hash)) {
    await env.DB.prepare("UPDATE codes SET versuche = versuche + 1 WHERE email = ?").bind(email).run();
    return json({ fehler: "falsch", rest: CODE_VERSUCHE - c.versuche - 1 }, 400);
  }
  const k = await kunde(env, email);
  if (!zugangGueltig(k)) return json({ fehler: "gesperrt" }, 403);
  await env.DB.prepare("UPDATE codes SET code_hash = NULL WHERE email = ?").bind(email).run();

  // Neue Sitzung; ältere über der Gerätegrenze werden beendet (Zugang ist persönlich)
  const token = zufall(32);
  const g = geraet(req);
  const max = Math.max(1, parseInt(env.MAX_GERAETE || "2", 10));
  const alte = await env.DB.prepare("SELECT token_hash FROM sitzungen WHERE email = ? ORDER BY zuletzt DESC, rowid DESC").bind(email).all();
  const weg = alte.results.slice(max - 1).map((r) => r.token_hash);
  const schritte = weg.map((t) => env.DB.prepare("DELETE FROM sitzungen WHERE token_hash = ?").bind(t));
  schritte.push(env.DB.prepare("INSERT INTO sitzungen (token_hash, email, erstellt, zuletzt, geraet) VALUES (?, ?, ?, ?, ?)").bind(await sha256(token), email, jetzt(), jetzt(), g));
  schritte.push(env.DB.prepare("INSERT INTO anmeldungen (email, zeit, geraet, land) VALUES (?, ?, ?, ?)").bind(email, jetzt(), g, (req.cf && req.cf.country) || ""));
  // Erste Anmeldung = Beginn der Bereitstellung (Widerrufsrecht für den Online-Kurs erlischt)
  if (!k.freigeschaltet_am) schritte.push(env.DB.prepare("UPDATE kunden SET freigeschaltet_am = ? WHERE email = ?").bind(new Date().toISOString(), email));
  await env.DB.batch(schritte);

  // Auffällig viele verschiedene Geräte oder Länder in 30 Tagen: Hinweis an die Akademie
  const r = await env.DB.prepare("SELECT COUNT(DISTINCT geraet || '|' || land) AS n FROM anmeldungen WHERE email = ? AND zeit > ?").bind(email, jetzt() - 30 * 86400).first();
  if (r.n >= VERDACHT_GERAETE && !k.verdacht && !istAdmin(env, email)) {
    await env.DB.prepare("UPDATE kunden SET verdacht = 1 WHERE email = ?").bind(email).run();
    const admin = String(env.ADMIN_EMAILS || "").split(",")[0];
    if (admin) await sende(env, admin.trim(), mailVerdacht(email, r.n));
  }
  return json({ ok: true, beendet: weg.length }, 200, { "Set-Cookie": cookieSetzen(token, env) });
}

// ---------- Anfrageformular der Website ----------
// Die Anfrage wird nicht gespeichert, sondern per E-Mail an die Akademie geschickt (Antworten gehen direkt an die Anfragende).
async function anfrage(req, env, ctx) {
  const d = await req.json().catch(() => null);
  if (!d) return json({ fehler: "daten" }, 400);
  if (d.website) return json({ ok: true }); // Falle für Spam-Programme: unsichtbares Feld ausgefüllt
  const kurz = (v, n) => String(v || "").trim().slice(0, n);
  const a = {
    paket: kurz(d.paketText || d.paket, 80), name: kurz(d.name, 120), email: normal(d.email), telefon: kurz(d.telefon, 40),
    erfahrung: kurz(d.erfahrung, 80), zeitraum: kurz(d.zeitraum, 120), modelle: kurz(d.modelle, 80), quelle: kurz(d.quelle, 80),
    nachricht: kurz(d.nachricht, 1500), sprache: ["de", "en", "es"].includes(d.sprache) ? d.sprache : "de"
  };
  if (!a.paket || !a.name || !emailOk(a.email)) return json({ fehler: "pflichtfelder" }, 400);
  const schluessel = await sha256((req.headers.get("CF-Connecting-IP") || "lokal") + ":" + (env.CODE_PFEFFER || ""));
  const n = await env.DB.prepare("SELECT COUNT(*) AS n FROM anfragen WHERE schluessel = ? AND zeit > ?").bind(schluessel, jetzt() - 3600).first();
  if (n.n >= 5) return json({ fehler: "zu_oft" }, 429);
  await env.DB.prepare("INSERT INTO anfragen (zeit, schluessel) VALUES (?, ?)").bind(jetzt(), schluessel).run();
  const admin = String(env.ADMIN_EMAILS || "").split(",")[0].trim();
  ctx.waitUntil(sende(env, admin, mailAnfrage(a), a.email));
  return json({ ok: true });
}

// ---------- Bescheinigung ----------
async function bescheinigung(req, env, s) {
  const vorhanden = await env.DB.prepare("SELECT * FROM bescheinigungen WHERE email = ?").bind(s.email).first();
  if (vorhanden) return json(vorhanden);
  const f = await env.DB.prepare("SELECT daten FROM fortschritt WHERE email = ?").bind(s.email).first();
  const stand = f ? JSON.parse(f.daten) : null;
  const sim = stand && stand.simulation;
  if (!sim || !sim.bestanden) return json({ fehler: "nicht_bestanden" }, 400);
  const { name } = await req.json().catch(() => ({}));
  const n = String(name || s.kunde.name || "").trim().slice(0, 80);
  if (!n) return json({ fehler: "name" }, 400);
  const datum = (sim.datum || new Date().toISOString().slice(0, 10));
  const nr = "PA-" + datum.slice(0, 4) + "-" + zufall(4).toUpperCase().slice(0, 6);
  await env.DB.prepare("INSERT INTO bescheinigungen (nr, email, name, datum, richtig, gesamt) VALUES (?, ?, ?, ?, ?, ?)").bind(nr, s.email, n, datum, sim.richtig, sim.gesamt).run();
  return json({ nr, email: s.email, name: n, datum, richtig: sim.richtig, gesamt: sim.gesamt });
}

async function pruefSeite(env, url) {
  const nr = String(url.searchParams.get("nr") || "").trim().toUpperCase();
  const b = /^PA-\d{4}-[A-F0-9]{6}$/.test(nr) ? await env.DB.prepare("SELECT nr, name, datum, richtig, gesamt FROM bescheinigungen WHERE nr = ?").bind(nr).first() : null;
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const inhalt = !nr ? "<p>Bitte die Nummer der Bescheinigung angeben, zum Beispiel <code>/pruefen?nr=PA-2026-1A2B3C</code>.</p>"
    : b ? "<p><strong>Gültig.</strong> Die Bescheinigung " + esc(b.nr) + " wurde am " + esc(b.datum) + " für <strong>" + esc(b.name) + "</strong> ausgestellt (Prüfungssimulation: " + b.richtig + " von " + b.gesamt + ").</p>"
      : "<p><strong>Nicht gefunden.</strong> Zu dieser Nummer gibt es keine Bescheinigung der Piercing Akademie.</p>";
  return new Response('<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Bescheinigung prüfen – Piercing Akademie</title><link rel="stylesheet" href="/assets/styles.css"></head><body><main class="wrap" style="padding-block:60px"><article class="legal"><p class="label">Piercing Akademie</p><h1 class="sec-title">Bescheinigung prüfen</h1>' + inhalt + '<p><a href="/">Zur Startseite</a></p></article></main></body></html>',
    { status: b || !nr ? 200 : 404, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}

// ---------- Stripe ----------
async function stripeSignaturOk(env, roh, kopf) {
  if (!env.STRIPE_WEBHOOK_SECRET || !kopf) return false;
  const teile = Object.fromEntries(kopf.split(",").map((t) => t.split("=")).filter((t) => t.length === 2 && t[0] !== "v1"));
  const sigs = kopf.split(",").filter((t) => t.startsWith("v1=")).map((t) => t.slice(3));
  const t = parseInt(teile.t, 10);
  if (!t || Math.abs(jetzt() - t) > 300) return false;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(t + "." + roh));
  const hex = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return sigs.some((s) => gleich(s, hex));
}

async function stripeWebhook(req, env, ctx) {
  const roh = await req.text();
  if (!(await stripeSignaturOk(env, roh, req.headers.get("Stripe-Signature")))) return json({ fehler: "signatur" }, 400);
  const ev = JSON.parse(roh);
  const typ = ev.type;
  const sess = ev.data && ev.data.object;
  const bezahlt = (typ === "checkout.session.completed" && sess.payment_status === "paid") || typ === "checkout.session.async_payment_succeeded";
  if (!bezahlt) return json({ ok: true, ignoriert: typ });

  const email = normal(sess.customer_details && sess.customer_details.email);
  if (!emailOk(email)) return json({ fehler: "email" }, 400);
  const meta = sess.metadata || {};
  const paket = ["basis", "praxis", "komplett"].includes(meta.paket) ? meta.paket : "basis";
  // Sprache: aus den Link-Metadaten, sonst aus client_reference_id (setzt assets/zahlung.js je Website-Sprache), sonst Deutsch
  const sprache = [meta.sprache, sess.client_reference_id, (sess.locale || "").slice(0, 2)].find((x) => ["de", "en", "es"].includes(x)) || "de";
  const felder = (sess.custom_fields || []).map((f) => ({ key: f.key, label: f.label && f.label.custom, wert: (f.dropdown && f.dropdown.value) || (f.text && f.text.value) || "" }));
  const zustimmung = felder.find((f) => /sofort|kursbeginn|start/i.test(f.key + " " + (f.label || "")));
  const name = (sess.customer_details && sess.customer_details.name) || "";
  const gekauft = new Date((sess.created || jetzt()) * 1000).toISOString();
  const bis = new Date(); bis.setMonth(bis.getMonth() + parseInt(env.ZUGANG_MONATE || "12", 10));

  const schon = await env.DB.prepare("SELECT email FROM kunden WHERE stripe_session = ?").bind(sess.id).first();
  if (schon) return json({ ok: true, doppelt: true });
  await env.DB.prepare(`INSERT INTO kunden (email, name, paket, sprache, gekauft_am, gueltig_bis, stripe_session, betrag, zustimmung, gesperrt, verdacht)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0)
      ON CONFLICT(email) DO UPDATE SET name = excluded.name, paket = excluded.paket, sprache = excluded.sprache, gekauft_am = excluded.gekauft_am,
        gueltig_bis = excluded.gueltig_bis, stripe_session = excluded.stripe_session, betrag = excluded.betrag, zustimmung = excluded.zustimmung`)
    .bind(email, name, paket, sprache, gekauft, bis.toISOString(), sess.id, sess.amount_total || 0, zustimmung ? zustimmung.wert : "").run();

  const mail = mailWillkommen({ env, email, name, paket, sprache, betrag: sess.amount_total || 0, waehrung: sess.currency || "eur", gekauft, zustimmung: zustimmung ? zustimmung.wert : "" });
  ctx.waitUntil(sende(env, email, mail));
  return json({ ok: true });
}
