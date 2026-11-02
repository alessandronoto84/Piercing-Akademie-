// Stellt server/public/ zusammen: Website (de/en/es), Login-Seite und die Fahrschule unter /kurs/ (dort nur mit Anmeldung).
// Aufruf im Ordner server:  node werkzeuge/oeffentlich.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const HIER = path.dirname(fileURLToPath(import.meta.url));
const SERVER = path.dirname(HIER);
const WURZEL = path.dirname(SERVER);
const ZIEL = path.join(SERVER, "public");

fs.rmSync(ZIEL, { recursive: true, force: true });
fs.mkdirSync(ZIEL, { recursive: true });
const kopiere = (von, nach) => fs.cpSync(path.join(WURZEL, von), path.join(ZIEL, nach || von), { recursive: true });

// Website
for (const f of ["index.html", "online-kurs.html", "agb.html", "datenschutz.html", "impressum.html", "danke.html", "widerrufen.html", "bestellen.html", "robots.txt", "sitemap.xml"]) kopiere(f);
for (const d of ["en", "es", "assets"]) kopiere(d);
for (const f of fs.readdirSync(path.join(SERVER, "seiten"))) fs.cpSync(path.join(SERVER, "seiten", f), path.join(ZIEL, f));

// Fahrschule (ohne Werkzeuge)
const K = path.join(WURZEL, "kurs-prototyp");
for (const f of ["kurs.js", "kurs.css", "bewegung.js"]) kopiere("kurs-prototyp/" + f, "kurs/" + f);
for (const d of ["inhalte", "vorlagen"]) kopiere("kurs-prototyp/" + d, "kurs/" + d);
let html = fs.readFileSync(path.join(K, "index.html"), "utf8");
const ersetze = (a, b) => { if (!html.includes(a)) throw new Error("Nicht gefunden in kurs-prototyp/index.html: " + a); html = html.split(a).join(b); };
ersetze('href="../assets/', 'href="/assets/');
ersetze('src="../assets/', 'src="/assets/');
ersetze('href="../index.html"', 'href="/"');
ersetze('href="../online-kurs.html"', 'href="/online-kurs.html"');
// konto.js (window.PA_KONTO mit der Sprache des Kontos) muss vor dem Ladeskript stehen, das Sprache und Inhaltsdateien wählt
ersetze("<script>\n/* Sprache wählen", '<script src="konto.js"></script>\n<script>\n/* Sprache wählen');
// Banner und Titel übersetzt kurs.js über inhalte/ui.js (data-tr bzw. document.title)
if (!/<p class="k-banner"[^>]*>[\s\S]*?<\/p>/.test(html)) throw new Error("Banner nicht gefunden in kurs-prototyp/index.html");
html = html.replace(/<p class="k-banner"[^>]*>[\s\S]*?<\/p>/, '<p class="k-banner" data-tr>Fahrschule der Piercing Akademie</p>');
html = html.replace(/<title>[^<]*<\/title>/, "<title>Fahrschule – Piercing Akademie</title>");
html = html.replace("<head>", '<head>\n<meta name="robots" content="noindex, nofollow">');
fs.writeFileSync(path.join(ZIEL, "kurs", "index.html"), html);

const groesse = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((s, e) => s + (e.isDirectory() ? groesse(path.join(d, e.name)) : fs.statSync(path.join(d, e.name)).size), 0);
console.log("public/ fertig:", Math.round(groesse(ZIEL) / 1024), "KB");
