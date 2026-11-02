// Listet alle Texte der Grafiken (Beschriftungen in <text>, alt, Bildunterschrift) aus inhalte/grafiken.js
// und meldet, welche in inhalte/grafiken-text.js noch keine Übersetzung haben.
// Aufruf im Ordner kurs-prototyp:  node werkzeuge/grafik-texte.js [--liste]
"use strict";
const path = require("path");
global.window = global; global.KURS = { module: [] }; window.KURS = global.KURS;
const INHALTE = path.join(__dirname, "..", "inhalte");
require(path.join(INHALTE, "grafiken.js"));
require(path.join(INHALTE, "grafiken-text.js"));

const ent = (s) => s.replace(/&(amp|lt|gt|quot|#39|#(\d+));/g, (m, n, d) => d ? String.fromCharCode(+d) : { amp: "&", lt: "<", gt: ">", quot: "\"", "#39": "'" }[n]);
const texte = new Set();
for (const g of Object.values(KURS.grafiken)) {
  const re = /<text\b[^>]*>([^<]*)<\/text>/g; let m;
  while ((m = re.exec(g.svg))) { const t = ent(m[1]); if (/\p{L}/u.test(t)) texte.add(t); }
  if (g.alt) texte.add(g.alt);
  if (g.text) texte.add(g.text);
}
if (process.argv.includes("--liste")) { for (const t of texte) console.log(t); }
// Bleiben in allen Sprachen gleich (Piercing-Namen, Messwerte)
const GLEICH = new Set(["Industrial", "Helix", "Rook", "Daith", "Tragus", "Conch", "Snug", "Anti-Tragus", "Upper Lobe", "Lobe"]);
const gleich = (t) => GLEICH.has(t) || /^≈ \d+ V$/.test(t);
let fehlt = 0;
for (const sprache of Object.keys(KURS.grafikText)) {
  for (const t of texte) if (!gleich(t) && !(t in KURS.grafikText[sprache])) { fehlt++; console.log("fehlt (" + sprache + "): " + t); }
}
console.log(texte.size + " Texte, " + (fehlt ? fehlt + " Übersetzungen fehlen" : "alle übersetzt"));
