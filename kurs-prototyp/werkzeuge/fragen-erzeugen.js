/* Erzeugt Pflichtfragen aus den Kursdaten (Datenblätter, Tabellen, Ablaufschritte) für alle Sprachen:
   inhalte/fragen-generiert.js (de), inhalte/en/fragen-generiert.js, inhalte/es/fragen-generiert.js.
   Die Auswahl (richtige Antwort, Ablenker) wird aus den deutschen Daten getroffen und ist in allen Sprachen gleich;
   die Texte kommen aus den übersetzten Modulen (inhalte/<sprache>/modul-XX.js) und den Formulierungen unten.
   Schlüssel: "Modul-Lektionsindex" (Index ab 0). Aufruf im Ordner kurs-prototyp:  node werkzeuge/fragen-erzeugen.js */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const DIR = path.join(__dirname, "..", "inhalte");

function laden(ordner) {
  const sb = {}; sb.window = sb; vm.createContext(sb);
  for (let i = 1; i <= 11; i++) {
    const f = path.join(ordner, "modul-" + String(i).padStart(2, "0") + ".js");
    if (!fs.existsSync(f)) return null;
    vm.runInContext(fs.readFileSync(f, "utf8"), sb);
  }
  return sb.KURS;
}
const DE = laden(DIR);

const T = {
  de: {
    schmuck: n => `Welcher Schmuck ist laut Datenblatt ein passender Ersteinsatz für ${artikelDe(n)}?`,
    kanuele: n => `Womit wird ${artikelDe(n)} laut Datenblatt gestochen?`,
    instrument: n => `Welches Instrument nennt das Datenblatt für ${artikelDe(n)}?`,
    nicht: n => `Was gilt laut Kursbuch für das Piercing „${n}“?`, nichtAntw: ["Nicht durchführen", "Mit 16G und BCR stechen", "Nur mit Betäubung stechen", "Nur durch erfahrene Piercer"],
    info: (n, e, k, kl) => `Datenblatt ${n}: Ersteinsatz ${e}; Kanüle ${k}; ${kl}.`,
    schmuckText: { Labret: "Labret", Barbell: "Barbell", Banane: "Banane (Curved Barbell)", BCR: "BCR (Klemmkugelring)", Hufeisen: "Hufeisen (Threaded Ring)", Bar: "Surface Bar", "Dermal Anchor": "Dermal Anchor" },
    kanueleText: k => k === "Punch" ? "Biopsiestanze (Punch)" : k + "-Kanüle",
    instrumentText: { Traguszange: "Traguszange", Nadelauffangrohr: "Nadelauffangrohr", "Septum-Zange": "Septum-Zange", Zungenklemme: "Zungenklemme", Snaptile: "Snaptile", Gazeklemme: "Gazeklemme" },
    farbe: f => `Eine Kanüle hat einen ${{ Grün: "grünen", Grau: "grauen", Orange: "orangefarbenen" }[f]} Ansatz. Welche Stärke hat sie?`,
    mm: s => s, farbeErkl: "Grün 18G (1,3 mm), grau 16G (1,7 mm), orange 14G (2,2 mm). Herstellerangaben; im Buch gerundet.",
    werkzeug: { "Schere": "Wozu brauchst du beim Piercen die Schere?", "Kugelgreifer": "Wozu dient der Kugelgreifer?", "Messschieber": "Wozu dient der Messschieber?", "Ringöffnungs- und Ringschließzange": "Wozu dient die Ringöffnungs- und Ringschließzange?", "Taschenlampe (grünes Licht)": "Wozu dient die Taschenlampe mit grünem Licht?", "Mini-Seitenschneider": "Wozu dient der Mini-Seitenschneider?" },
    werkzeugErkl: w => `Werkzeugtabelle: ${w}.`,
    ablauf: (nr, t) => `Ablauf, Schritt ${nr}: „${t}“. Was kommt als Nächstes?`, ablaufErkl: (nr, t) => `Schritt ${nr}: ${t}.`,
    abheil: p => `Welche Abheilzeit nennt das Kursbuch für ${{ Knorpelpiercings: "Knorpelpiercings", Lobe: "ein Lobe", Bauchnabel: "ein Bauchnabelpiercing", Labret: "ein Labret", Lippenbändchen: "ein Lippenbändchen-Piercing", Zunge: "ein Zungenpiercing", Brustwarze: "ein Brustwarzenpiercing", Augenbraue: "ein Augenbrauenpiercing", Intim: "Intimpiercings" }[p] || p}?`,
    abheilErkl: "Richtwerte bei komplikationsfreier Heilung; jeder Mensch heilt anders."
  },
  en: {
    schmuck: n => `Which jewellery does the “${n}” data sheet list as suitable initial jewellery?`,
    kanuele: n => `What does the “${n}” data sheet say you pierce with?`,
    instrument: n => `Which instrument does the “${n}” data sheet list?`,
    nicht: n => `What does the course book say about the “${n}” piercing?`, nichtAntw: ["Do not perform", "Pierce with 16G and a BCR", "Only pierce under anaesthesia", "Only by experienced piercers"],
    info: (n, e, k, kl) => `${n} data sheet: initial jewellery ${e}; cannula ${k}; ${kl}.`,
    schmuckText: { Labret: "Labret", Barbell: "Barbell", Banane: "Curved barbell (banana)", BCR: "BCR (ball closure ring)", Hufeisen: "Horseshoe (circular barbell)", Bar: "Surface bar", "Dermal Anchor": "Dermal anchor" },
    kanueleText: k => k === "Punch" ? "Biopsy punch" : k + " cannula",
    instrumentText: { Traguszange: "Tragus forceps", Nadelauffangrohr: "Receiving tube", "Septum-Zange": "Septum forceps", Zungenklemme: "Tongue forceps", Snaptile: "Snaptile", Gazeklemme: "Gauze clamp" },
    farbe: f => `A cannula has a ${{ Grün: "green", Grau: "grey", Orange: "orange" }[f]} hub. What gauge is it?`,
    mm: s => s.replace(",", "."), farbeErkl: "Green 18G (1.3 mm), grey 16G (1.7 mm), orange 14G (2.2 mm). Manufacturer data; rounded in the book.",
    werkzeug: { "Schere": "What do you need the scissors for when piercing?", "Kugelgreifer": "What is the ball grabber for?", "Messschieber": "What is the caliper for?", "Ringöffnungs- und Ringschließzange": "What are the ring opening and ring closing pliers for?", "Taschenlampe (grünes Licht)": "What is the torch with green light for?", "Mini-Seitenschneider": "What is the mini side cutter for?" },
    werkzeugErkl: w => `Tool table: ${w}.`,
    ablauf: (nr, t) => `Procedure, step ${nr}: “${t}”. What comes next?`, ablaufErkl: (nr, t) => `Step ${nr}: ${t}.`,
    abheil: p => `What healing time does the course book give for ${{ Knorpelpiercings: "cartilage piercings", Lobe: "a lobe piercing", Bauchnabel: "a navel piercing", Labret: "a labret", Lippenbändchen: "a lip frenulum piercing", Zunge: "a tongue piercing", Brustwarze: "a nipple piercing", Augenbraue: "an eyebrow piercing", Intim: "intimate piercings" }[p] || p}?`,
    abheilErkl: "Guide values for complication-free healing; everyone heals differently."
  },
  es: {
    schmuck: n => `¿Qué joya indica la ficha técnica «${n}» como joya inicial adecuada?`,
    kanuele: n => `Según la ficha técnica «${n}», ¿con qué se perfora?`,
    instrument: n => `¿Qué instrumento indica la ficha técnica «${n}»?`,
    nicht: n => `¿Qué dice el libro del curso sobre el piercing «${n}»?`, nichtAntw: ["No realizar", "Perforar con 16G y un BCR", "Solo perforar con anestesia", "Solo por piercers con experiencia"],
    info: (n, e, k, kl) => `Ficha técnica ${n}: joya inicial ${e}; cánula ${k}; ${kl}.`,
    schmuckText: { Labret: "Labret", Barbell: "Barbell", Banane: "Barbell curvo (banana)", BCR: "BCR (aro de bola cautiva)", Hufeisen: "Herradura (circular barbell)", Bar: "Barra de superficie", "Dermal Anchor": "Dermal anchor" },
    kanueleText: k => k === "Punch" ? "Punch de biopsia" : "Cánula " + k,
    instrumentText: { Traguszange: "Pinza para tragus", Nadelauffangrohr: "Tubo receptor", "Septum-Zange": "Pinza para septum", Zungenklemme: "Pinza para lengua", Snaptile: "Snaptile", Gazeklemme: "Pinza de gasa" },
    farbe: f => `Una cánula tiene el conector de color ${{ Grün: "verde", Grau: "gris", Orange: "naranja" }[f]}. ¿Qué calibre tiene?`,
    mm: s => s, farbeErkl: "Verde 18G (1,3 mm), gris 16G (1,7 mm), naranja 14G (2,2 mm). Datos del fabricante; redondeados en el libro.",
    werkzeug: { "Schere": "¿Para qué necesitas las tijeras al perforar?", "Kugelgreifer": "¿Para qué sirve la pinza para bolas?", "Messschieber": "¿Para qué sirve el calibre?", "Ringöffnungs- und Ringschließzange": "¿Para qué sirven las pinzas para abrir y cerrar aros?", "Taschenlampe (grünes Licht)": "¿Para qué sirve la linterna de luz verde?", "Mini-Seitenschneider": "¿Para qué sirve el alicate de corte mini?" },
    werkzeugErkl: w => `Tabla de herramientas: ${w}.`,
    ablauf: (nr, t) => `Procedimiento, paso ${nr}: «${t}». ¿Qué viene después?`, ablaufErkl: (nr, t) => `Paso ${nr}: ${t}.`,
    abheil: p => `¿Qué tiempo de cicatrización indica el libro del curso para ${{ Knorpelpiercings: "los piercings de cartílago", Lobe: "un piercing de lóbulo", Bauchnabel: "un piercing de ombligo", Labret: "un labret", Lippenbändchen: "un piercing de frenillo labial", Zunge: "un piercing de lengua", Brustwarze: "un piercing de pezón", Augenbraue: "un piercing de ceja", Intim: "los piercings íntimos" }[p] || p}?`,
    abheilErkl: "Valores orientativos para una cicatrización sin complicaciones; cada persona cicatriza de forma distinta."
  }
};
function artikelDe(n) {
  return /^(Lippenbändchen|Septum|Industrial|Allergiepiercing|Snug|Conch|Daith|Labret|Eskimo|Cheek|Surface|Frenulum|Pubic|Guiche|Christina|Upper Lobe|Lobe|Tragus|Anti-Tragus|Helix|Rook|Bridge|Hafada|Dydoe|Prinz Albert)/.test(n) ? "das " + n
    : ({ Zunge: "das Zungenpiercing", Augenbraue: "das Augenbrauenpiercing", Bauchnabel: "das Bauchnabelpiercing", Brustwarze: "das Brustwarzenpiercing", "Nase (Nostril)": "das Nostril", Klitorisvorhaut: "das Klitorisvorhautpiercing", Schamlippe: "das Schamlippenpiercing" })[n] || "das Piercing „" + n + "“";
}

const SCHMUCK = ["Labret", "Barbell", "Banane", "BCR", "Hufeisen", "Bar", "Dermal Anchor"];
const KANUELEN = ["20G", "18G", "16G", "14G", "12G", "Punch"];
const SPEZIAL = ["Traguszange", "Nadelauffangrohr", "Septum-Zange", "Zungenklemme"];
const INSTRUMENTE = SPEZIAL.concat(["Snaptile", "Gazeklemme"]);
const schmuckVon = t => [...new Set(t.split(",").map(x => SCHMUCK.find(sm => new RegExp("\\b" + sm + "\\b").test(x))).filter(Boolean))];
const kanuelenVon = t => [...new Set(t.split(",").map(x => KANUELEN.find(k => x.includes(k))).filter(Boolean))];
const instrumenteVon = t => t.split(",").map(x => x.trim()).filter(x => INSTRUMENTE.includes(x));
const GROSS = s => s.charAt(0).toUpperCase() + s.slice(1);
const monate = s => { const z = (s.match(/\d+/g) || []).map(Number); return /mindestens/.test(s) ? [z[0], Infinity] : [z[0], z[z.length - 1]]; };
const getrennt = (a, b) => { const [a1, a2] = monate(a), [b1, b2] = monate(b); return a2 < b1 || b2 < a1; };

function erzeuge(L, UE) {
  const t = T[L];
  let seed = 7; // gleiche Zufallsfolge in jeder Sprache → gleiche Auswahl
  const zufall = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(zufall() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const auswahl = (liste, universum) => { const richtig = liste[Math.floor(zufall() * liste.length)]; const falsch = mische(universum.filter(x => !liste.includes(x))).slice(0, 3); return falsch.length >= 3 ? { richtig, falsch } : null; };
  const disjunkt = (a, b) => { const tl = s => s.split(",").map(x => x.trim().toLowerCase()); return !tl(a).some(x => tl(b).includes(x)); };
  function falsche(richtig, kandidaten, pruefe = disjunkt, n = 3) {
    const pool = [...new Set(kandidaten)].filter(k => k !== richtig && k !== "–" && pruefe(richtig, k)), out = [];
    while (pool.length && out.length < n) out.push(pool.splice(Math.floor(zufall() * pool.length), 1)[0]);
    return out.length >= 2 ? out : null;
  }
  const modulDe = nr => DE.module.find(m => m.nr === nr), modulUe = nr => UE.module.find(m => m.nr === nr);
  const fragen = {}, schon = new Set();
  function neu(nr, li, f, richtig, falsch, erkl, seite) {
    const vorhanden = UE.module.some(m => m.lektionen.some(l => (l.fragen || []).some(q => q[0] === f)));
    if (falsch && !vorhanden && !schon.has(f) && schon.add(f)) (fragen[nr + "-" + li] = fragen[nr + "-" + li] || []).push([f, [richtig, ...falsch], erkl, seite]);
  }
  // jedes Block-Paar (deutsch, übersetzt) an derselben Stelle
  function bloecke(nr, typ, fn) { modulDe(nr).lektionen.forEach((l, li) => l.inhalt.forEach((b, bi) => { if (b.typ === typ) fn(b, modulUe(nr).lektionen[li].inhalt[bi], li); })); }

  // Modul 8: Datenblätter
  bloecke(8, "datenblatt", (d, u, li) => {
    if (/NICHT DURCHFÜHREN/.test(d.hinweis)) { neu(8, li, t.nicht(u.name), t.nichtAntw[0], t.nichtAntw.slice(1), u.hinweis, d.seite); return; }
    const info = t.info(u.name, u.ersteinsatz, u.kanuele, u.klemme);
    const sm = auswahl(schmuckVon(d.ersteinsatz), SCHMUCK);
    if (sm) neu(8, li, t.schmuck(u.name), t.schmuckText[sm.richtig], sm.falsch.map(x => t.schmuckText[x]), info, d.seite);
    const ka = auswahl(kanuelenVon(d.kanuele), KANUELEN);
    if (ka) neu(8, li, t.kanuele(u.name), t.kanueleText(ka.richtig), ka.falsch.map(t.kanueleText), info, d.seite);
    const spezial = instrumenteVon(d.klemme).filter(x => SPEZIAL.includes(x));
    if (spezial.length) { const ins = auswahl(spezial.concat(instrumenteVon(d.klemme)), INSTRUMENTE); if (ins) neu(8, li, t.instrument(u.name), t.instrumentText[spezial[0]], ins.falsch.map(x => t.instrumentText[x]), info, d.seite); }
  });

  // Modul 7: Kanülenfarben und Werkzeuge
  bloecke(7, "tabelle", (tb, tu, li) => {
    if (tb.kopf[0] === "Stärke") {
      const alle = tb.zeilen.map(z => `${z[0]}, ${t.mm(z[1])}`).concat([t.mm("20G, 1,1 mm")]);
      tb.zeilen.forEach(([g, mm, farbe]) => neu(7, li, t.farbe(farbe), `${g}, ${t.mm(mm)}`, alle.filter(x => !x.startsWith(g + ",")), t.farbeErkl, "S. 64"));
    }
    if (tb.kopf[0] === "Werkzeug") {
      const zeilen = tb.zeilen.map((z, i) => [z[0], tu.zeilen[i][0], tu.zeilen[i][1]]).filter(z => t.werkzeug[z[0]]);
      for (const [w, wUe, wofuer] of zeilen) neu(7, li, t.werkzeug[w], wofuer, falsche(wofuer, zeilen.map(z => z[2]), (a, b) => a !== b), t.werkzeugErkl(wUe), "S. 66–73");
    }
  });

  // Modul 9: Reihenfolge der 26 Ablaufschritte, Ablenker aus der Nähe
  const schritte = [];
  bloecke(9, "schritte", (b, u, li) => b.punkte.forEach((p, i) => schritte.push({ nr: (b.start || 1) + i, text: u.punkte[i].replace(/\.$/, ""), li })));
  schritte.sort((a, b) => a.nr - b.nr);
  for (let i = 0; i < schritte.length - 1; i++) {
    const a = schritte[i], b = schritte[i + 1];
    const nah = schritte.filter(s => s.nr !== a.nr && s.nr !== b.nr && Math.abs(s.nr - b.nr) <= 5).map(s => s.text);
    neu(9, b.li, t.ablauf(a.nr, a.text), b.text, mische(nah).slice(0, 3), t.ablaufErkl(b.nr, b.text), b.nr <= 10 ? "S. 111" : b.nr <= 21 ? "S. 112" : "S. 113");
  }

  // Modul 10: Abheilzeiten (Überschneidung anhand der deutschen Werte, Anzeige übersetzt)
  bloecke(10, "tabelle", (tb, tu, li) => {
    if (tb.kopf[0] !== "Piercing") return;
    tb.zeilen.forEach(([p, z], i) => {
      const f = falsche(z, tb.zeilen.map(x => x[1]), getrennt);
      if (f) neu(10, li, t.abheil(p), GROSS(tu.zeilen[i][1]), f.map(w => GROSS(tu.zeilen[tb.zeilen.findIndex(x => x[1] === w)][1])), t.abheilErkl, "S. 49");
    });
  });
  return fragen;
}

for (const L of ["de", "en", "es"]) {
  const UE = L === "de" ? DE : laden(path.join(DIR, L));
  if (!UE) { console.log(L + ": Übersetzung der Module noch nicht vollständig – übersprungen"); continue; }
  const fragen = erzeuge(L, UE);
  const ziel = L === "de" ? path.join(DIR, "fragen-generiert.js") : path.join(DIR, L, "fragen-generiert.js");
  const kopf = "/* AUTOMATISCH ERZEUGT von werkzeuge/fragen-erzeugen.js – nicht von Hand ändern, sondern die Moduldaten anpassen und neu erzeugen.\n   Schlüssel: \"Modul-Lektionsindex\" (Index ab 0). */\n";
  fs.writeFileSync(ziel, kopf + "window.KURS = window.KURS || { module: [] };\nKURS.lektionsfragen = " + JSON.stringify(fragen, null, 1) + ";\n");
  console.log(L + ": " + Object.values(fragen).reduce((s, f) => s + f.length, 0) + " Fragen → " + path.relative(path.join(DIR, ".."), ziel));
}
