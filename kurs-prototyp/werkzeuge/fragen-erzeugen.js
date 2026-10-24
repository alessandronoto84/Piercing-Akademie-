/* Erzeugt Testfragen aus den Kursdaten (Datenblätter, Tabellen, Ablaufschritte) und schreibt inhalte/fragen-generiert.js.
   Aufruf im Ordner kurs-prototyp:  node werkzeuge/fragen-erzeugen.js
   Falsche Antworten werden nur aus Werten gewählt, die mit der richtigen Antwort nichts gemeinsam haben. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..", "inhalte");

const sb = {}; sb.window = sb; vm.createContext(sb);
for (let i = 1; i <= 11; i++) vm.runInContext(fs.readFileSync(path.join(DIR, "modul-" + String(i).padStart(2, "0") + ".js"), "utf8"), sb);
const modul = nr => sb.KURS.module.find(m => m.nr === nr);
const bloecke = (m, typ) => m.lektionen.flatMap(l => l.inhalt.filter(b => b.typ === typ));

// Deterministischer Zufall, damit die Datei bei jedem Lauf gleich bleibt
let seed = 7;
const zufall = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const teile = s => s.split(",").map(x => x.trim().toLowerCase());
const disjunkt = (a, b) => !teile(a).some(x => teile(b).includes(x));
function falsche(richtig, kandidaten, n = 2, pruefe = disjunkt) {
  const pool = [...new Set(kandidaten)].filter(k => k !== richtig && k !== "–" && pruefe(richtig, k));
  const out = [];
  while (pool.length && out.length < n) out.push(pool.splice(Math.floor(zufall() * pool.length), 1)[0]);
  return out.length === n ? out : null;
}
const fragen = {};
// Fragen, die es in der Moduldatei schon gibt, werden übersprungen
const neu = (nr, f, richtig, falsch, erkl, seite) => { if (falsch && !modul(nr).quiz.some(q => q.frage === f)) (fragen[nr] = fragen[nr] || []).push([f, [richtig, ...falsch], erkl, seite]); };

// Modul 8: Datenblätter
const db = bloecke(modul(8), "datenblatt");
const aktiv = db.filter(d => !/NICHT DURCHFÜHREN/.test(d.hinweis));
for (const d of aktiv) {
  neu(8, `Welchen Ersteinsatz nennt das Datenblatt für „${d.name}“?`, d.ersteinsatz, falsche(d.ersteinsatz, aktiv.map(x => x.ersteinsatz)), `Datenblatt ${d.name}: Kanüle ${d.kanuele}, Klemme ${d.klemme}.`, d.seite);
  neu(8, `Welche Kanüle(n) nennt das Datenblatt für „${d.name}“?`, d.kanuele, falsche(d.kanuele, aktiv.map(x => x.kanuele)), `Datenblatt ${d.name}: Ersteinsatz ${d.ersteinsatz}.`, d.seite);
  neu(8, `Womit wird beim Piercing „${d.name}“ laut Datenblatt gehalten bzw. geführt?`, d.klemme, falsche(d.klemme, aktiv.map(x => x.klemme)), `Datenblatt ${d.name}: Ersteinsatz ${d.ersteinsatz}, Kanüle ${d.kanuele}.`, d.seite);
}
for (const d of db.filter(d => /NICHT DURCHFÜHREN/.test(d.hinweis))) {
  neu(8, `Was gilt laut Kursbuch für das Piercing „${d.name}“?`, "Nicht durchführen", ["Mit 16G und BCR stechen", "Nur mit Betäubung stechen"], d.hinweis, d.seite);
}

// Modul 7: Werkzeuge und Kanülen
const m7tab = bloecke(modul(7), "tabelle");
const werkzeuge = m7tab.find(t => t.kopf[0] === "Werkzeug").zeilen;
for (const [w, wofuer] of werkzeuge) {
  neu(7, `Wofür nutzt du: ${w}?`, wofuer, falsche(wofuer, werkzeuge.map(z => z[1]), 2, (a, b) => a !== b), "Werkzeuge und Instrumente, Kap. 9.", "S. 65–73");
}
const kanuelen = m7tab.find(t => t.kopf[0] === "Stärke").zeilen;
for (const [g, mm, farbe] of kanuelen) {
  const sonst = kanuelen.filter(z => z[0] !== g);
  neu(7, `Welchen Außendurchmesser hat eine ${g}-Kanüle?`, mm, sonst.map(z => z[1]), `${g} ist ${farbe.toLowerCase()}. Herstellerangabe; im Buch gerundet.`, "S. 64");
  neu(7, `Welche Farbe hat eine ${g}-Kanüle?`, farbe, sonst.map(z => z[2]), `${g} entspricht ${mm}.`, "S. 64");
  neu(7, `Welche Stärke hat eine Kanüle mit der Farbe ${farbe}?`, g, sonst.map(z => z[0]), `${g}, ${mm}.`, "S. 64");
}

// Modul 9: Reihenfolge der 26 Ablaufschritte
const schritte = bloecke(modul(9), "schritte").flatMap(b => b.punkte.map((p, i) => ({ nr: (b.start || 1) + i, text: p })));
for (let i = 0; i < schritte.length - 1; i++) {
  const a = schritte[i], b = schritte[i + 1];
  const sonst = schritte.filter(s => Math.abs(s.nr - b.nr) > 1 && s.nr !== a.nr).map(s => s.text);
  neu(9, `Welcher Schritt folgt im Ablauf auf: „${a.text}“?`, b.text, falsche(b.text, sonst, 2, (x, y) => x !== y), `Schritt ${a.nr} → Schritt ${b.nr}.`, b.nr <= 10 ? "S. 111" : b.nr <= 21 ? "S. 112" : "S. 113");
}

// Modul 10: Abheilzeiten
const zeiten = bloecke(modul(10), "tabelle").find(t => t.kopf[0] === "Piercing").zeilen;
// Zeitraum in Monaten, z. B. "ca. 4 bis 6 Monate" -> [4, 6], "mindestens 3 Monate" -> [3, Infinity]
const monate = s => { const z = (s.match(/\d+/g) || []).map(Number); return /mindestens/.test(s) ? [z[0], Infinity] : [z[0], z[z.length - 1]]; };
const getrennt = (a, b) => { const [a1, a2] = monate(a), [b1, b2] = monate(b); return a2 < b1 || b2 < a1; };
for (const [p, z] of zeiten) {
  neu(10, `Welche Abheilzeit nennt das Kursbuch für: ${p}?`, z, falsche(z, zeiten.map(x => x[1]), 2, getrennt), "Richtwerte bei komplikationsfreier Heilung.", "S. 49");
}

const kopf = "/* AUTOMATISCH ERZEUGT von werkzeuge/fragen-erzeugen.js – nicht von Hand ändern, sondern die Moduldaten anpassen und neu erzeugen. */\n" +
  "window.KURS = window.KURS || { module: [] };\nKURS.fragen = KURS.fragen || {};\n";
let js = kopf;
for (const nr of Object.keys(fragen)) js += `KURS.fragen[${nr}] = (KURS.fragen[${nr}] || []).concat(${JSON.stringify(fragen[nr], null, 1)});\n`;
fs.writeFileSync(path.join(DIR, "fragen-generiert.js"), js);
console.log(Object.entries(fragen).map(([n, f]) => `Modul ${n}: ${f.length}`).join(", "));
