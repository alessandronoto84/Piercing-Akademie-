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
const schonErzeugt = new Set(); // dieselbe Frage nur einmal, auch wenn eine Tabelle in zwei Lektionen steht
function neu(nr, li, f, richtig, falsch, erkl, seite) {
  const vorhanden = sb.KURS.module.some(m => m.lektionen.some(l => (l.fragen || []).some(q => q[0] === f))); // von Hand geschrieben, irgendwo im Kurs
  if (falsch && !vorhanden && !schonErzeugt.has(f) && schonErzeugt.add(f)) (fragen[nr + "-" + li] = fragen[nr + "-" + li] || []).push([f, [richtig, ...falsch], erkl, seite]);
}
function jedeLektion(nr, typ, fn) { modul(nr).lektionen.forEach((l, li) => l.inhalt.filter(b => b.typ === typ).forEach(b => fn(b, li))); }

// Modul 8: Datenblätter. Je Piercing höchstens drei Fragen mit sauberen Einzelwerten:
// ein passender Ersteinsatz, eine passende Kanüle und – nur wo es ein Spezialinstrument gibt – das Instrument.
// Falsche Antworten sind Werte, die im Datenblatt gerade NICHT stehen.
const SCHMUCK = ["Labret", "Barbell", "Banane", "BCR", "Hufeisen", "Bar", "Dermal Anchor"];
const SCHMUCK_TEXT = { Labret: "Labret", Barbell: "Barbell", Banane: "Banane (Curved Barbell)", BCR: "BCR (Klemmkugelring)", Hufeisen: "Hufeisen (Threaded Ring)", Bar: "Surface Bar", "Dermal Anchor": "Dermal Anchor" };
const KANUELEN = ["20G", "18G", "16G", "14G", "12G", "Punch"];
const KANUELE_TEXT = k => k === "Punch" ? "Biopsiestanze (Punch)" : k + "-Kanüle";
const SPEZIAL = ["Traguszange", "Nadelauffangrohr", "Septum-Zange", "Zungenklemme"];
const INSTRUMENTE = SPEZIAL.concat(["Snaptile", "Gazeklemme"]);
const schmuckVon = t => [...new Set(t.split(",").map(x => SCHMUCK.find(sm => new RegExp("\\b" + sm + "\\b").test(x))).filter(Boolean))];
const kanuelenVon = t => [...new Set(t.split(",").map(x => KANUELEN.find(k => x.includes(k))).filter(Boolean))];
const instrumenteVon = t => t.split(",").map(x => x.trim()).filter(x => INSTRUMENTE.includes(x));
function mische(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(zufall() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function auswahl(richtigListe, universum, n = 3) {
  const richtig = richtigListe[Math.floor(zufall() * richtigListe.length)];
  const falsch = mische(universum.filter(x => !richtigListe.includes(x))).slice(0, n);
  return falsch.length >= 3 ? { richtig, falsch } : null;
}
const artikel = n => /^(Lippenbändchen|Septum|Industrial|Allergiepiercing|Snug|Conch|Daith|Labret|Eskimo|Cheek|Surface|Frenulum|Pubic|Guiche|Christina|Upper Lobe|Lobe|Tragus|Anti-Tragus|Helix|Rook|Bridge|Hafada|Dydoe|Prinz Albert)/.test(n) ? "das " + n : n === "Zunge" ? "das Zungenpiercing" : n === "Augenbraue" ? "das Augenbrauenpiercing" : n === "Bauchnabel" ? "das Bauchnabelpiercing" : n === "Brustwarze" ? "das Brustwarzenpiercing" : n === "Nase (Nostril)" ? "das Nostril" : n === "Klitorisvorhaut" ? "das Klitorisvorhautpiercing" : n === "Schamlippe" ? "das Schamlippenpiercing" : "das Piercing „" + n + "“";
jedeLektion(8, "datenblatt", (d, li) => {
  if (/NICHT DURCHFÜHREN/.test(d.hinweis)) {
    neu(8, li, `Was gilt laut Kursbuch für das Piercing „${d.name}“?`, "Nicht durchführen", ["Mit 16G und BCR stechen", "Nur mit Betäubung stechen", "Nur durch erfahrene Piercer"], d.hinweis, d.seite);
    return;
  }
  const info = `Datenblatt ${d.name}: Ersteinsatz ${d.ersteinsatz}; Kanüle ${d.kanuele}; ${d.klemme}.`;
  const sm = auswahl(schmuckVon(d.ersteinsatz), SCHMUCK);
  if (sm) neu(8, li, `Welcher Schmuck ist laut Datenblatt ein passender Ersteinsatz für ${artikel(d.name)}?`, SCHMUCK_TEXT[sm.richtig], sm.falsch.map(x => SCHMUCK_TEXT[x]), info, d.seite);
  const ka = auswahl(kanuelenVon(d.kanuele), KANUELEN);
  if (ka) neu(8, li, `Womit wird ${artikel(d.name)} laut Datenblatt gestochen?`, KANUELE_TEXT(ka.richtig), ka.falsch.map(KANUELE_TEXT), info, d.seite);
  const spezial = instrumenteVon(d.klemme).filter(x => SPEZIAL.includes(x));
  if (spezial.length) {
    const ins = auswahl(spezial.concat(instrumenteVon(d.klemme)), INSTRUMENTE);
    if (ins) neu(8, li, `Welches Instrument nennt das Datenblatt für ${artikel(d.name)}?`, spezial[0], ins.falsch, info, d.seite);
  }
});

// Modul 7: Kanülenstärken (eine Frage je Farbe) und Werkzeuge
const WERKZEUG_FRAGE = { "Schere": "Wozu brauchst du beim Piercen die Schere?", "Kugelgreifer": "Wozu dient der Kugelgreifer?", "Messschieber": "Wozu dient der Messschieber?",
  "Ringöffnungs- und Ringschließzange": "Wozu dient die Ringöffnungs- und Ringschließzange?", "Taschenlampe (grünes Licht)": "Wozu dient die Taschenlampe mit grünem Licht?", "Mini-Seitenschneider": "Wozu dient der Mini-Seitenschneider?" };
jedeLektion(7, "tabelle", (t, li) => {
  if (t.kopf[0] === "Stärke") {
    const alle = t.zeilen.map(z => `${z[0]}, ${z[1]}`).concat(["20G, 1,1 mm"]);
    for (const [g, mm, farbe] of t.zeilen) neu(7, li, `Eine Kanüle hat einen ${{ Grün: "grünen", Grau: "grauen", Orange: "orangefarbenen" }[farbe] || farbe} Ansatz. Welche Stärke hat sie?`, `${g}, ${mm}`, alle.filter(x => !x.startsWith(g + ",")), `Grün 18G (1,3 mm), grau 16G (1,7 mm), orange 14G (2,2 mm). Herstellerangaben; im Buch gerundet.`, "S. 64");
  }
  if (t.kopf[0] === "Werkzeug") {
    for (const [w, wofuer] of t.zeilen) if (WERKZEUG_FRAGE[w]) neu(7, li, WERKZEUG_FRAGE[w], wofuer, falsche(wofuer, t.zeilen.filter(z => WERKZEUG_FRAGE[z[0]]).map(z => z[1]), (a, b) => a !== b), `Werkzeugtabelle: ${w}.`, "S. 66–73");
  }
});

// Modul 9: Reihenfolge der 26 Ablaufschritte. Falsche Antworten kommen aus der Nähe (bis 5 Schritte entfernt),
// damit man den Ablauf wirklich kennen muss.
const schritte = [];
jedeLektion(9, "schritte", (b, li) => b.punkte.forEach((p, i) => schritte.push({ nr: (b.start || 1) + i, text: p.replace(/\.$/, ""), li })));
schritte.sort((a, b) => a.nr - b.nr);
for (let i = 0; i < schritte.length - 1; i++) {
  const a = schritte[i], b = schritte[i + 1];
  const nah = schritte.filter(s => s.nr !== a.nr && s.nr !== b.nr && Math.abs(s.nr - b.nr) <= 5).map(s => s.text);
  neu(9, b.li, `Ablauf, Schritt ${a.nr}: „${a.text}“. Was kommt als Nächstes?`, b.text, mische(nah).slice(0, 3), `Schritt ${b.nr}: ${b.text}.`, b.nr <= 10 ? "S. 111" : b.nr <= 21 ? "S. 112" : "S. 113");
}

// Modul 10: Abheilzeiten; falsche Antworten dürfen sich mit der richtigen nicht überschneiden
const monate = s => { const z = (s.match(/\d+/g) || []).map(Number); return /mindestens/.test(s) ? [z[0], Infinity] : [z[0], z[z.length - 1]]; };
const getrennt = (a, b) => { const [a1, a2] = monate(a), [b1, b2] = monate(b); return a2 < b1 || b2 < a1; };
const GROSS = s => s.charAt(0).toUpperCase() + s.slice(1);
const ABHEIL = { Knorpelpiercings: "Knorpelpiercings", Lobe: "ein Lobe", Bauchnabel: "ein Bauchnabelpiercing", Labret: "ein Labret", Lippenbändchen: "ein Lippenbändchen-Piercing", Zunge: "ein Zungenpiercing", Brustwarze: "ein Brustwarzenpiercing", Augenbraue: "ein Augenbrauenpiercing", Intim: "Intimpiercings" };
jedeLektion(10, "tabelle", (t, li) => {
  if (t.kopf[0] !== "Piercing") return;
  for (const [p, z] of t.zeilen) {
    const f = falsche(z, t.zeilen.map(x => x[1]), getrennt);
    if (f) neu(10, li, `Welche Abheilzeit nennt das Kursbuch für ${ABHEIL[p] || p}?`, GROSS(z), f.map(GROSS), "Richtwerte bei komplikationsfreier Heilung; jeder Mensch heilt anders.", "S. 49");
  }
});

let js = "/* AUTOMATISCH ERZEUGT von werkzeuge/fragen-erzeugen.js – nicht von Hand ändern, sondern die Moduldaten anpassen und neu erzeugen.\n   Schlüssel: \"Modul-Lektionsindex\" (Index ab 0). */\nwindow.KURS = window.KURS || { module: [] };\nKURS.lektionsfragen = " + JSON.stringify(fragen, null, 1) + ";\n";
fs.writeFileSync(path.join(DIR, "fragen-generiert.js"), js);
console.log(Object.entries(fragen).reduce((s, [k, f]) => s + f.length, 0) + " Fragen erzeugt");
