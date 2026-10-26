/* Erzeugt die druckfertigen Vorlagen (PDF) für den Online-Kurs aus den Kursdaten.
   Aufruf im Ordner kurs-prototyp: node werkzeuge/vorlagen-erzeugen.mjs
   Ergebnis: vorlagen/*.pdf. Braucht Playwright (Chromium). */
import { createRequire } from "module";
import fs from "fs";
import vm from "vm";
import path from "path";

const require = createRequire(import.meta.url);
let pw;
try { pw = require("playwright"); } catch (e) { pw = require("/opt/node-tools/node_modules/playwright"); }

const WURZEL = path.resolve(".");
const ASSETS = path.resolve("../assets");
const ctx = vm.createContext({});
ctx.window = ctx;
for (const f of ["modul-02.js", "modul-05.js", "modul-10.js", "glossar-checklisten.js"]) vm.runInContext(fs.readFileSync(path.join(WURZEL, "inhalte", f), "utf8"), ctx);
const KURS = ctx.KURS;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const b64 = (p) => fs.readFileSync(p).toString("base64");
const font = (n, w) => `@font-face{font-family:${n};font-weight:${w};src:url(data:font/woff2;base64,${b64(path.join(ASSETS, "fonts", fontDatei(n, w)))})}`;
function fontDatei(n, w) {
  return n === "B" ? `bricolage-grotesque-latin-${w}-normal.woff2` : n === "M" ? `ibm-plex-mono-latin-${w}-normal.woff2` : `instrument-sans-latin-${w}-normal.woff2`;
}
const LOGO = "data:image/png;base64," + b64(path.join(ASSETS, "favicon.png"));

const CSS = [font("B", 700), font("B", 800), font("I", 400), font("I", 600), font("M", 400)].join("\n") + `
@page{size:A4;margin:16mm 16mm 18mm}
*{box-sizing:border-box}
body{margin:0;font-family:I,Arial,sans-serif;font-size:10.5pt;line-height:1.45;color:#16161a}
.kopf{display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #C9A464;padding-bottom:8px;margin-bottom:14px}
.kopf .marke{display:flex;align-items:center;gap:8px;font-family:B;font-weight:700;font-size:12pt}
.kopf img{width:26px;height:26px;border-radius:5px}
.kopf .art{font-family:M;font-size:8pt;letter-spacing:.12em;text-transform:uppercase;color:#8A672C}
h1{font-family:B;font-weight:800;font-size:21pt;line-height:1.1;margin:0 0 4px}
h2{font-family:B;font-weight:700;font-size:12.5pt;margin:16px 0 6px;break-after:avoid}
p{margin:0 0 6px}
.lead{color:#55524c;margin-bottom:10px}
.hinweis{border-left:3px solid #C9A464;background:#F6F3ED;padding:7px 10px;margin:10px 0;font-size:9.5pt}
.warn{border-left-color:#B4462F;background:#FBEFEA}
table{width:100%;border-collapse:collapse;margin:6px 0 8px;font-size:9.5pt}
th,td{border:1px solid #CFC9BE;padding:5px 7px;text-align:left;vertical-align:top}
th{background:#F1ECE2;font-weight:600}
.feld{display:flex;gap:8px;align-items:flex-end;margin:7px 0}
.feld span{white-space:nowrap}
.feld i{flex:1;border-bottom:1px solid #8E887D;height:16px}
.zwei{display:grid;grid-template-columns:1fr 1fr;gap:0 18px}
ul.box{list-style:none;padding:0;margin:4px 0}
ul.box li{padding-left:22px;position:relative;margin:4px 0;break-inside:avoid}
ul.box li::before{content:"";position:absolute;left:0;top:2px;width:11px;height:11px;border:1.4px solid #16161a;border-radius:2px}
ul.punkte{margin:4px 0;padding-left:18px}
ul.punkte li{margin:2px 0}
.block{break-inside:avoid}
.unterschrift{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:26px}
.unterschrift div:empty{visibility:hidden}
.unterschrift div{border-top:1px solid #16161a;padding-top:4px;font-size:8.5pt;color:#55524c}
.fuss{margin-top:16px;font-size:8pt;color:#8E887D;border-top:1px solid #E3DDD2;padding-top:6px}
.seite{break-before:page}
`;

function seite(art, titel, inhalt) {
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>${esc(titel)}</title><style>${CSS}</style></head><body>
<div class="kopf"><div class="marke"><img src="${LOGO}" alt="">Piercing Akademie</div><div class="art">${esc(art)}</div></div>
${inhalt}
<p class="fuss">Vorlage der Piercing Akademie, Lingen (Ems), Stand ${new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}. Grundlage: Kursbuch „Die Piercing Akademie – Dein Weg zum Bodypiercer“ und Online-Kurs. Vor dem Einsatz an das eigene Studio anpassen.</p>
</body></html>`;
}
const feld = (l) => `<div class="feld"><span>${esc(l)}</span><i></i></div>`;
const kaestchen = (liste) => `<ul class="box">${liste.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`;

function modul(nr) { return KURS.module.find((m) => m.nr === nr); }
function block(nr, pruef) {
  for (const l of modul(nr).lektionen) for (const b of l.inhalt) if (pruef(b)) return b;
  throw new Error("Block in Modul " + nr + " nicht gefunden");
}
function checkliste(teil) {
  const c = KURS.checklisten.find((x) => x.titel.indexOf(teil) !== -1);
  if (!c) throw new Error("Checkliste fehlt: " + teil);
  return c;
}

// ---------- 1. Pflegeblatt für Kunden ----------
function pflegeblatt() {
  const zeiten = block(10, (b) => b.typ === "tabelle" && b.kopf[0] === "Piercing");
  const pflege = checkliste("Pflegehinweise").punkte;
  return seite("Pflegehinweise", "Pflegehinweise für dein neues Piercing", `
<h1>Pflegehinweise für dein neues Piercing</h1>
<p class="lead">Dein Piercing ist eine frische Wunde. Mit der richtigen Pflege heilt es schnell und ohne Probleme.</p>
<div class="zwei">${feld("Piercing:")}${feld("Datum:")}${feld("Schmuck:")}${feld("Pflegemittel:")}</div>
<h2>So pflegst du dein Piercing</h2>
<ul class="punkte">
<li>Vor jedem Berühren die Hände gründlich waschen. Den Schmuck nicht unnötig drehen oder bewegen.</li>
<li>Etwa 2 Wochen lang 2- bis 3-mal täglich mit dem mitgegebenen Pflegemittel reinigen.</li>
<li>Geeignet: Kochsalzlösung oder Prontolind, im Mundbereich Chlorhexamed (nur wenige Tage bis etwa 2 Wochen).</li>
<li>Octenisept nie bei Knorpelpiercings (Ohrmuschel, Helix, Tragus, Conch, Rook, Daith).</li>
<li>Nicht auf dem frischen Piercing schlafen, Druck und Reibung vermeiden (Kleidung, Haare, Kopfhörer, Telefon).</li>
<li>In der Heilungszeit Schwimmbad, Badesee, Sauna und Solarium möglichst meiden.</li>
<li>Nach Zungen- und Lippenpiercings: Eiswürfel (zum Beispiel aus Kamillentee) gegen die Schwellung; in der Heilungszeit möglichst nicht rauchen und keinen Alkohol trinken.</li>
<li>Bei Bauchnabel und Brustwarze: in den ersten 3 Tagen mit Pflaster schützen.</li>
<li>Den Schmuck erst nach vollständiger Abheilung wechseln.</li>
</ul>
<h2>Abheilzeiten (Richtwerte)</h2>
<p>Jeder Mensch heilt anders. Die Zeiten gelten bei optimaler Heilung ohne Komplikationen; lieber zu lange warten als zu früh wechseln.</p>
<table><tr><th>Piercing</th><th>Abheilzeit</th><th>Piercing</th><th>Abheilzeit</th></tr>
${(() => { const z = zeiten.zeilen, h = Math.ceil(z.length / 2); let r = ""; for (let i = 0; i < h; i++) r += `<tr><td>${esc(z[i][0])}</td><td>${esc(z[i][1])}</td><td>${z[i + h] ? esc(z[i + h][0]) : ""}</td><td>${z[i + h] ? esc(z[i + h][1]) : ""}</td></tr>`; return r; })()}
</table>
<div class="hinweis warn block"><strong>Sofort zum Arzt</strong> bei Fieber, sich ausbreitender Rötung, starker oder zunehmender Schwellung und Schmerzen, Eiter oder wenn am Ohrknorpel die ganze Ohrmuschel heiß und rot wird. Den Schmuck nicht selbst herausnehmen, das entscheidet der Arzt.</div>
<div class="hinweis block"><strong>Fragen oder Probleme?</strong> Komm vorbei oder melde dich bei deinem Studio:</div>
${feld("Studio und Telefon:")}
`);
  void pflege;
}

// ---------- 2. Einverständniserklärung (Muster) ----------
function einverstaendnis() {
  const risiken = block(2, (b) => b.typ === "liste" && b.titel === "Auszug aus der Liste").punkte;
  return seite("Muster · Einverständniserklärung", "Einverständniserklärung Piercing", `
<h1>Einverständniserklärung für ein Piercing</h1>
<p class="lead">Bitte vollständig und wahrheitsgemäß ausfüllen. Falsche Angaben können zu gesundheitlichen Risiken führen.</p>
<div class="hinweis warn">Muster nach dem Beispiel im Kursbuch (S. 114–115). Vor dem Einsatz an dein Studio anpassen und rechtlich prüfen lassen.</div>
<h2>1. Personalien</h2>
<div class="zwei">${feld("Vorname, Name:")}${feld("Telefon:")}${feld("Straße, Nr.:")}${feld("PLZ, Ort:")}${feld("Geburtsdatum:")}${feld("Ausweisnummer:")}</div>
${kaestchen(["Ich bin mindestens 18 Jahre alt."])}
<h2>2. Erziehungsberechtigte bzw. rechtlicher Betreuer</h2>
<p>Nur bei Minderjährigen oder bei Volljährigen unter rechtlicher Betreuung.</p>
<div class="zwei">${feld("Vorname, Name:")}${feld("Ausweisnummer:")}${feld("Anschrift:")}${feld("Telefon:")}</div>
<h2>3. Angaben zur Gesundheit</h2>
<table><tr><th style="width:62%">Frage</th><th>Ja</th><th>Nein</th></tr>
${["Hast du Krankheiten, zum Beispiel Diabetes, Herz-Kreislauf-Erkrankungen, Epilepsie, Blutgerinnungsstörungen oder Infektionskrankheiten?", "Hast du Allergien, zum Beispiel gegen Nickel, Latex, Desinfektionsmittel oder Pflaster?", "Nimmst du Medikamente, insbesondere blutverdünnende Mittel?", "Bist du schwanger oder stillst du?", "Neigst du zu Kreislaufproblemen, Ohnmacht oder Keloiden (wulstigen Narben)?"].map((q) => `<tr><td>${esc(q)}</td><td>☐</td><td>☐</td></tr>`).join("")}
</table>
${feld("Wenn ja, welche:")}
${kaestchen(["Ich habe heute ausreichend gegessen und getrunken.", "Ich habe in den letzten zwei Tagen keinen Alkohol und keine Drogen zu mir genommen."])}
<div class="seite"></div>
<h2>4. Angaben zur Behandlung (füllt das Studio aus)</h2>
<div class="zwei">${feld("Art des Piercings:")}${feld("Körperstelle:")}${feld("Schmuck / Material:")}${feld("Datum:")}</div>
${kaestchen(["Für das Piercing ist eine Rasur der Stelle nötig; ich bin damit einverstanden.", "Ich wurde mündlich über Ablauf, Risiken und Pflege aufgeklärt.", "Ich habe die Pflegehinweise schriftlich erhalten."])}
<h2>5. Aufklärung über mögliche Komplikationen</h2>
<p>Auch bei sachgemäßer Ausführung kann es zu unerwünschten Folgen kommen, unter anderem:</p>
<ul class="punkte">${risiken.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
<h2>6. Erklärung</h2>
<p>Ich wurde verständlich aufgeklärt, hatte ausreichend Zeit für meine Entscheidung und konnte alle Fragen stellen. Ich stehe nicht unter dem Einfluss von Alkohol, Drogen oder beeinträchtigenden Medikamenten. Ich willige in das oben beschriebene Piercing ein und verpflichte mich, die Pflegehinweise einzuhalten.</p>
<p style="font-size:9pt;color:#55524c">Datenschutz: Das Studio speichert diese Angaben, um die Einwilligung nachweisen zu können, und bewahrt sie sicher auf. Speicherdauer und Rechte: siehe Datenschutzhinweise des Studios.</p>
<div class="unterschrift"><div>Ort, Datum, Unterschrift Kunde</div><div>Unterschrift Erziehungsberechtigte bzw. Betreuer (falls nötig)</div></div>
<div class="unterschrift"><div>Unterschrift Piercer</div><div></div></div>
<h2>Freiwillig: Einwilligung in Fotos</h2>
${kaestchen(["Ich bin einverstanden, dass das Studio Fotos meines Piercings ohne Gesicht für Website und Social Media verwendet.", "… auch mit Gesicht."])}
<p style="font-size:9pt;color:#55524c">Diese Einwilligung ist freiwillig und unabhängig vom Piercing. Sie kann jederzeit für die Zukunft widerrufen werden (Art. 6 Abs. 1 lit. a DSGVO).</p>
<div class="unterschrift"><div>Ort, Datum, Unterschrift</div><div></div></div>
`);
}

// ---------- 3. Reinigungs- und Desinfektionsplan ----------
function hygieneplan() {
  const zeilen = [
    ["Hände", "vor Dienstbeginn, nach Toilette, bei Verschmutzung", "Händewaschen mit Waschlotion, Einmalhandtuch", "", ""],
    ["Hände", "vor und nach jedem Kunden, vor dem Anziehen der Handschuhe, nach dem Ausziehen", "Hygienische Händedesinfektion (VAH-gelistet), Einwirkzeit nach Hersteller", "", ""],
    ["Haut des Kunden", "vor dem Anzeichnen und vor dem Stich", "Hautantiseptikum (z. B. Alkoholtupfer, Kodan), Einwirkzeit beachten", "", ""],
    ["Arbeitsflächen, Liege", "nach jedem Kunden; bei Blut sofort", "Flächendesinfektion (VAH-gelistet); Folie bzw. Einmalunterlage wechseln", "", ""],
    ["Arbeitsbereich, Boden", "arbeitstäglich", "Feucht reinigen; bei Blut sofort desinfizieren", "", ""],
    ["Handwaschplatz, Spender", "arbeitstäglich", "Reinigen, Spender auffüllen", "", ""],
    ["Toilette", "arbeitstäglich", "Reinigen und desinfizieren", "", ""],
    ["Instrumente", "nach jedem Gebrauch", "Ultraschallbad mit Instrumentenreiniger (Herstellerangabe, nicht über etwa 45 °C), trocknen, verpacken, autoklavieren", "", ""],
    ["Werkzeuge ohne Hautkontakt", "nach Gebrauch", "Ultraschallbad, Desinfektionsbad (Metalle nicht mischen)", "", ""],
    ["Autoklav", "täglich / halbjährlich / jährlich", "Bowie-Dick- bzw. Helix-Test / Sporenprobe / Geräteprüfung, Protokoll führen", "", ""],
    ["Arbeitskleidung", "bei Verschmutzung, täglich", "Wechseln; laut Kursbuch mindestens 30 Minuten bei 90 °C waschen", "", ""],
    ["Kanülen", "sofort nach Gebrauch", "Ohne Zurückstecken in den verschließbaren Abwurfbehälter", "", ""],
    ["Abfall", "arbeitstäglich", "Flüssigkeitsdichte, widerstandsfähige Kunststoffsäcke", "", ""]
  ];
  return seite("Vorlage · Hygieneplan", "Reinigungs- und Desinfektionsplan", `
<h1>Reinigungs- und Desinfektionsplan</h1>
<p class="lead">Teil deines Hygieneplans. Trage deine Produkte, Einwirkzeiten und Zuständigkeiten ein.</p>
<div class="zwei">${feld("Studio:")}${feld("Stand / Datum:")}</div>
<div class="hinweis warn">Diese Vorlage ist ein Beispiel. Stimme deinen Plan mit dem örtlichen Gesundheitsamt ab; in Niedersachsen gilt die Hygieneverordnung. Nur Desinfektionsmittel aus der VAH-Liste verwenden und die Herstellerangaben einhalten.</div>
<table><tr><th style="width:17%">Was</th><th style="width:21%">Wann</th><th style="width:34%">Wie / womit</th><th>Produkt, Einwirkzeit</th><th style="width:10%">Wer</th></tr>
${zeilen.map((z) => `<tr>${z.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}
</table>
<h2>Weitere Regeln</h2>
<ul class="punkte">
<li>Schutzhandschuhe nach jedem Kunden entsorgen; kein Schmuck an Händen und Unterarmen, Nägel kurz.</li>
<li>Sterilgut mit Sterilisierdatum und Chargennummer beschriften, geschützt lagern, Lagerfrist einhalten.</li>
<li>Wer an einer ansteckenden Krankheit leidet, arbeitet nicht und meldet sich krank.</li>
<li>Nach einer Nadelstichverletzung: Ablauf nach Checkliste, sofort zum Arzt bzw. Durchgangsarzt.</li>
</ul>
<div class="unterschrift"><div>Erstellt von, Datum</div><div>Mit dem Gesundheitsamt abgestimmt am</div></div>
`);
}

// ---------- 4. Checklisten ----------
function checklisten() {
  return seite("Checklisten", "Checklisten für den Studioalltag", `
<h1>Checklisten für den Studioalltag</h1>
<p class="lead">Aus dem Online-Kurs der Piercing Akademie. Zum Ausdrucken und Abhaken.</p>
${KURS.checklisten.map((c) => `<div class="block"><h2>${esc(c.titel)}</h2>${kaestchen(c.punkte)}</div>`).join("")}
`);
}

const VORLAGEN = [
  ["pflegehinweise.pdf", pflegeblatt],
  ["einverstaendniserklaerung-muster.pdf", einverstaendnis],
  ["hygieneplan-vorlage.pdf", hygieneplan],
  ["checklisten.pdf", checklisten]
];

fs.mkdirSync("vorlagen", { recursive: true });
const browser = await pw.chromium.launch();
const page = await browser.newPage();
for (const [datei, fn] of VORLAGEN) {
  await page.setContent(fn(), { waitUntil: "load" });
  await page.pdf({ path: path.join("vorlagen", datei), format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log("vorlagen/" + datei);
}
await browser.close();
