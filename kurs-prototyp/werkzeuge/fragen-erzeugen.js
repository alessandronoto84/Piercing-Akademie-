/* Erzeugt Pflichtfragen aus den Kursdaten (Datenblätter, Tabellen, Ablaufschritte) und schreibt inhalte/fragen-generiert.js.
   Die Fragen werden der Lektion zugeordnet, in der das Datenblatt bzw. die Tabelle steht (Schlüssel "Modul-Lektionsindex").
   Aufruf im Ordner kurs-prototyp:  node werkzeuge/fragen-erzeugen.js
   Falsche Antworten werden nur aus Werten gewählt, die sich mit der richtigen Antwort nicht überschneiden. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..", "inhalte");

const sb = {}; sb.window = sb; vm.createContext(sb);
for (let i = 1; i <= 11; i++) vm.runInContext(fs.readFileSync(path.join(DIR, "modul-" + String(i).padStart(2, "0") + ".js"), "utf8"), sb);
const modul = nr => sb.KURS.module.find(m => m.nr === nr);

// Deterministischer Zufall, damit die Datei bei jedem Lauf gleich bleibt
let seed = 7;
const zufall = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const teile = s => s.split(",").map(x => x.trim().toLowerCase());
const disjunkt = (a, b) => !teile(a).some(x => teile(b).includes(x));
function falsche(richtig, kandidaten, pruefe = disjunkt, n = 3) {
  const pool = [...new Set(kandidaten)].filter(k => k !== richtig && k !== "–" && pruefe(richtig, k));
  const out = [];
  while (pool.length && out.length < n) out.push(pool.splice(Math.floor(zufall() * pool.length), 1)[0]);
  return out.length >= 2 ? out : null; // drei Ablenker, wenn genug passende Werte da sind
}
const fragen = {};
function neu(nr, li, f, richtig, falsch, erkl, seite) {
  const vorhanden = (modul(nr).lektionen[li].fragen || []).some(q => q[0] === f);
  if (falsch && !vorhanden) (fragen[nr + "-" + li] = fragen[nr + "-" + li] || []).push([f, [richtig, ...falsch], erkl, seite]);
}
function jedeLektion(nr, typ, fn) { modul(nr).lektionen.forEach((l, li) => l.inhalt.filter(b => b.typ === typ).forEach(b => fn(b, li))); }

// Modul 8: Datenblätter
const alle = modul(8).lektionen.flatMap(l => l.inhalt.filter(b => b.typ === "datenblatt"));
const aktiv = alle.filter(d => !/NICHT DURCHFÜHREN/.test(d.hinweis));
jedeLektion(8, "datenblatt", (d, li) => {
  if (/NICHT DURCHFÜHREN/.test(d.hinweis)) {
    neu(8, li, `Was gilt laut Kursbuch für das Piercing „${d.name}“?`, "Nicht durchführen", ["Mit 16G und BCR stechen", "Nur mit Betäubung stechen", "Nur durch erfahrene Piercer"], d.hinweis, d.seite);
    return;
  }
  neu(8, li, `Welchen Ersteinsatz nennt das Datenblatt für „${d.name}“?`, d.ersteinsatz, falsche(d.ersteinsatz, aktiv.map(x => x.ersteinsatz)), `Datenblatt ${d.name}: Kanüle ${d.kanuele}, Klemme ${d.klemme}.`, d.seite);
  neu(8, li, `Welche Kanüle(n) nennt das Datenblatt für „${d.name}“?`, d.kanuele, falsche(d.kanuele, aktiv.map(x => x.kanuele).concat("12G")), `Datenblatt ${d.name}: Ersteinsatz ${d.ersteinsatz}.`, d.seite);
  neu(8, li, `Womit wird beim Piercing „${d.name}“ laut Datenblatt gehalten bzw. geführt?`, d.klemme, falsche(d.klemme, aktiv.map(x => x.klemme)), `Datenblatt ${d.name}: Ersteinsatz ${d.ersteinsatz}, Kanüle ${d.kanuele}.`, d.seite);
});

// Modul 7: Kanülen- und Werkzeugtabelle
jedeLektion(7, "tabelle", (t, li) => {
  if (t.kopf[0] === "Stärke") {
    for (const [g, mm, farbe] of t.zeilen) {
      const sonst = t.zeilen.filter(z => z[0] !== g);
      neu(7, li, `Welchen Außendurchmesser hat eine ${g}-Kanüle?`, mm, sonst.map(z => z[1]).concat("1,1 mm"), `${g} ist ${farbe.toLowerCase()}. Herstellerangabe; im Buch gerundet.`, "S. 64");
      neu(7, li, `Welche Farbe hat eine ${g}-Kanüle?`, farbe, sonst.map(z => z[2]).concat("Rosa"), `${g} entspricht ${mm}.`, "S. 64");
      neu(7, li, `Welche Stärke hat eine Kanüle mit der Farbe ${farbe}?`, g, sonst.map(z => z[0]).concat("20G"), `${g}, ${mm}.`, "S. 64");
    }
  }
  if (t.kopf[0] === "Werkzeug") {
    for (const [w, wofuer] of t.zeilen) neu(7, li, `Wofür nutzt du: ${w}?`, wofuer, falsche(wofuer, t.zeilen.map(z => z[1]), (a, b) => a !== b), "Werkzeuge und Instrumente, Kap. 9.", "S. 66–73");
  }
});

// Modul 9: Reihenfolge der 26 Ablaufschritte (Frage gehört zur Lektion des folgenden Schritts)
const schritte = [];
jedeLektion(9, "schritte", (b, li) => b.punkte.forEach((p, i) => schritte.push({ nr: (b.start || 1) + i, text: p, li })));
schritte.sort((a, b) => a.nr - b.nr);
for (let i = 0; i < schritte.length - 1; i++) {
  const a = schritte[i], b = schritte[i + 1];
  const sonst = schritte.filter(s => Math.abs(s.nr - b.nr) > 1 && s.nr !== a.nr).map(s => s.text);
  neu(9, b.li, `Welcher Schritt folgt auf: „${a.text}“?`, b.text, falsche(b.text, sonst, (x, y) => x !== y), `Schritt ${a.nr} → Schritt ${b.nr}.`, b.nr <= 10 ? "S. 111" : b.nr <= 21 ? "S. 112" : "S. 113");
}

// Modul 10: Abheilzeiten; Zeiträume in Monaten, falsche Antworten dürfen sich nicht überschneiden
const monate = s => { const z = (s.match(/\d+/g) || []).map(Number); return /mindestens/.test(s) ? [z[0], Infinity] : [z[0], z[z.length - 1]]; };
const getrennt = (a, b) => { const [a1, a2] = monate(a), [b1, b2] = monate(b); return a2 < b1 || b2 < a1; };
jedeLektion(10, "tabelle", (t, li) => {
  if (t.kopf[0] !== "Piercing") return;
  for (const [p, z] of t.zeilen) neu(10, li, `Welche Abheilzeit nennt das Kursbuch für: ${p}?`, z, falsche(z, t.zeilen.map(x => x[1]), getrennt), "Richtwerte bei komplikationsfreier Heilung.", "S. 49");
});

let js = "/* AUTOMATISCH ERZEUGT von werkzeuge/fragen-erzeugen.js – nicht von Hand ändern, sondern die Moduldaten anpassen und neu erzeugen.\n   Schlüssel: \"Modul-Lektionsindex\" (Index ab 0). */\nwindow.KURS = window.KURS || { module: [] };\nKURS.lektionsfragen = " + JSON.stringify(fragen, null, 1) + ";\n";
fs.writeFileSync(path.join(DIR, "fragen-generiert.js"), js);
console.log(Object.entries(fragen).reduce((s, [k, f]) => s + f.length, 0) + " Fragen erzeugt");
