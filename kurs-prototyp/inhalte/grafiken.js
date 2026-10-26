/* Grafiken für die Lektionen: schematische Vektorzeichnungen, nicht maßstabsgetreu, sofern nicht anders angegeben.
   Farben kommen aus kurs.css (Klassen am SVG-Element), damit helles und dunkles Design funktionieren.
   Eingebunden über den Block { typ: "grafik", id: "…" }; Quellen der Ergänzungen in KURS-RECHERCHE.md, Abschnitt 9. */
window.KURS = window.KURS || { module: [] };

(function () {
  function t(x, y, s, k, a) {
    return '<text x="' + x + '" y="' + y + '"' + (k ? ' class="' + k + '"' : "") + (a ? ' text-anchor="' + a + '"' : "") + ">" + s + "</text>";
  }
  function l(x1, y1, x2, y2, k) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + (k || "s") + '"/>'; }
  function p(d, k) { return '<path d="' + d + '" class="' + (k || "s") + '"/>'; }
  function r(x, y, w, h, k, rx) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"' + (rx ? ' rx="' + rx + '"' : "") + ' class="' + k + '"/>'; }
  function c(x, y, rad, k) { return '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" class="' + k + '"/>'; }
  function e(x, y, rx, ry, k) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" class="' + k + '"/>'; }
  // Pfeil mit Spitze als Polygon am Ende
  function pfeil(x1, y1, x2, y2, k) {
    var w = Math.atan2(y2 - y1, x2 - x1), s = 8, b = 4;
    var bx = x2 - s * Math.cos(w), by = y2 - s * Math.sin(w);
    var pts = [x2, y2, bx + b * Math.sin(w), by - b * Math.cos(w), bx - b * Math.sin(w), by + b * Math.cos(w)].map(function (n) { return Math.round(n * 10) / 10; });
    return l(x1, y1, Math.round(bx * 10) / 10, Math.round(by * 10) / 10, k || "s") + '<polygon points="' + pts.join(" ") + '" class="' + (k && k.split(" ")[0] === "a" ? "fa" : "fink") + '"/>';
  }
  // Beschriftung mit Hinweislinie zu einem Punkt
  function hin(px, py, tx, ty, s, a, k) {
    var lx = a === "end" ? tx + 4 : tx - 4;
    return l(px, py, lx, ty - 4, "sl") + c(px, py, 2, "fink") + t(tx, ty, s, k, a);
  }
  // Nummer im Kreis
  function nr(x, y, n) { return c(x, y, 10, "fa") + t(x, y + 4, n, "tnr", "middle"); }

  var G = {};

  // ---------- Modul 3: Hautquerschnitt ----------
  G.haut = { w: 600, h: 300,
    alt: "Querschnitt der Haut mit Oberhaut, Lederhaut und Unterhaut. Ein Stichkanal führt durch alle drei Schichten; Blutgefäße und Nerven liegen in der Lederhaut.",
    text: "Querschnitt durch die Haut (schematisch). Der Stichkanal durchquert alle drei Schichten. Blutgefäße und Nervenenden liegen in der Lederhaut – dort blutet und schmerzt der Stich.",
    svg: [
      r(20, 86, 360, 106, "f-derm"),
      r(20, 190, 360, 84, "f-sub"),
      // Fettläppchen
      [40, 80, 120, 160, 240, 280, 320, 360].map(function (x, i) { return e(x, 214 + (i % 2) * 30, 18, 13, "sd"); }).join(""),
      [60, 100, 140, 260, 300, 340].map(function (x, i) { return e(x, 244 - (i % 2) * 30, 17, 12, "sd"); }).join(""),
      // Oberhaut mit Reteleisten
      p("M20 60 Q65 55 110 60 T200 60 T290 60 T380 60 V86 Q368 98 356 86 Q344 98 332 86 Q320 98 308 86 Q296 98 284 86 Q272 98 260 86 Q248 98 236 86 Q224 98 212 86 Q200 98 188 86 Q176 98 164 86 Q152 98 140 86 Q128 98 116 86 Q104 98 92 86 Q80 98 68 86 Q56 98 44 86 Q32 98 20 86 Z", "f-epi s1"),
      // Blutgefäß mit Kapillarschlingen
      p("M20 168 C80 158 120 176 180 166 S290 158 380 170", "blut b5"),
      p("M110 168 C108 130 120 110 126 104 C132 110 140 130 136 167", "blut b2"),
      p("M300 162 C298 126 306 110 312 104 C318 110 326 126 324 163", "blut b2"),
      // Nerv mit freien Nervenenden
      p("M380 252 C330 240 270 220 262 180 C258 150 262 120 260 104", "nerv b2"),
      p("M260 112 L248 96 M260 112 L272 96 M262 128 L284 104", "nerv b1"),
      // Haar mit Wurzel
      p("M70 24 C72 40 70 50 72 62", "s"), l(72, 62, 84, 160, "s"), e(85, 166, 7, 9, "f-epi s1"),
      // Schweißdrüse
      p("M340 60 C338 90 344 120 340 150 C336 180 350 196 340 204 C330 212 326 196 336 194 C348 192 352 206 342 212 C334 216 330 206 338 204", "sd b15"),
      // Stichkanal und Kanüle
      r(186, 58, 10, 186, "fkanal dash s1"),
      '<polygon points="186,0 196,0 196,44 191,58 186,44" class="fmet s1"/>',
      // Beschriftung im Bild
      t(82, 34, "Haar", "tk"), t(140, 122, "Kapillaren", "tk"), t(208, 236, "Stichkanal", "tk"),
      t(278, 112, "Nervenenden", "tk"), l(320, 274, 336, 214, "sl") + t(300, 286, "Schweißdrüse", "tk", "middle"), t(26, 186, "Blutgefäß", "tk"),
      // Schichten rechts
      l(384, 73, 404, 73, "sl"), t(410, 70, "Oberhaut (Epidermis)", "tb"), t(410, 86, "verhornt, ohne Blutgefäße", "tm"),
      l(384, 140, 404, 140, "sl"), t(410, 137, "Lederhaut (Dermis)", "tb"), t(410, 153, "Gefäße, Nerven, Haarwurzeln", "tm"),
      l(384, 232, 404, 232, "sl"), t(410, 229, "Unterhaut (Subcutis)", "tb"), t(410, 245, "Fettgewebe als Polster", "tm")
    ].join("") };

  // ---------- Ohr: echtes Foto aus dem Kursbuch (Datenblatt Lobe, S. 74) mit markierten Positionen ----------
  // Die Punkte stammen aus den Datenblatt-Fotos des Kursbuchs (S. 74–84), die alle dasselbe Ohr zeigen.
  // Fotokoordinaten 379 × 480, das Foto steht in der Grafik bei x = OX. Das Bild wird erst beim Anzeigen eingesetzt,
  // weil bilder.js nach grafiken.js geladen wird.
  // Ausschnitt: Foto-x 90 bis 379 (die Wange links bleibt weg), damit die Grafik auch auf dem Handy ganz sichtbar ist.
  var OX = 16, OY = 10, AX = 90, BW = 379 - AX;
  function ohrfoto() {
    var b = (KURS.bilder || {}).lobe;
    return '<clipPath id="ohr-clip"><rect x="' + OX + '" y="' + OY + '" width="' + BW + '" height="480" rx="14"/></clipPath>' +
      (b ? '<image href="' + b.src + '" x="' + (OX - AX) + '" y="' + OY + '" width="379" height="480" clip-path="url(#ohr-clip)"/>' : "") +
      r(OX, OY, BW, 480, "sd", 14);
  }
  function fp(x, y) { return [x - AX + OX, y + OY]; }
  // Nummerierte Markierung: Knorpel gold, Ohrläppchen grün; bei zweiteiligen Piercings zweiter Punkt klein und gestrichelt verbunden
  function marke(punkte, n, weich) {
    var q = punkte.map(function (pt) { return fp(pt[0], pt[1]); });
    return (q.length > 1 ? l(q[0][0], q[0][1], q[1][0], q[1][1], (weich ? "ok" : "a") + " b2 dash") + c(q[1][0], q[1][1], 4.5, (weich ? "fok" : "fa") + " punkt") : "") +
      c(q[0][0], q[0][1], 10, (weich ? "fok" : "fa") + " punkt") + t(q[0][0], q[0][1] + 4, String(n), "tnr", "middle");
  }
  function legende(eintraege, y0, spalten) {
    spalten = spalten || 2;
    return eintraege.map(function (e, i) {
      var x = OX + (i % spalten) * (BW / spalten + 6), y = y0 + Math.floor(i / spalten) * 26;
      return c(x + 10, y, 10, (e[2] ? "fok" : "fa") + " punkt") + t(x + 10, y + 4, String(i + 1), "tnr", "middle") + t(x + 26, y + 4, e[0], "tb");
    }).join("");
  }
  var POS = [
    ["Industrial", [[180, 68], [354, 157]]], ["Helix", [[279, 87]]], ["Rook", [[204, 141], [196, 177]]], ["Daith", [[195, 209], [170, 248]]],
    ["Tragus", [[137, 270]]], ["Conch", [[238, 258]]], ["Snug", [[260, 268], [287, 286]]], ["Anti-Tragus", [[204, 313], [221, 337]]],
    ["Upper Lobe", [[236, 340], [213, 363]], true], ["Lobe", [[182, 378]], true]
  ];
  G.ohr = { w: BW + 2 * OX, h: 650,
    alt: "Foto einer Ohrmuschel mit nummerierten Positionen: 1 Industrial, 2 Helix, 3 Rook, 4 Daith, 5 Tragus, 6 Conch, 7 Snug, 8 Anti-Tragus, 9 Upper Lobe, 10 Lobe. Knorpelpiercings sind gold markiert, Piercings im Ohrläppchen grün.",
    text: "Die Ohrpiercings auf einen Blick, eingezeichnet auf dem Ohr aus den Datenblättern des Kursbuchs. Gold: Knorpel, mindestens 3 Monate Abheilzeit. Grün: Ohrläppchen (Weichgewebe), ca. 2 Monate. Gestrichelt: Ein- und Austritt bei zweiteiligen Piercings.",
    svg: "" };
  Object.defineProperty(G.ohr, "svg", { get: function () {
    return ohrfoto() + POS.map(function (e, i) { return marke(e[1], i + 1, e[2]); }).join("") + legende(POS, OY + 480 + 26);
  } });

  G.perichondritis = { w: BW + 2 * OX, h: 590,
    alt: "Foto einer Ohrmuschel, auf dem der Knorpel nach einem Helix-Piercing rot und geschwollen eingefärbt ist: 1 Helix-Piercing als Eintrittspforte, 2 Knorpel gerötet, geschwollen und heiß, 3 Ohrläppchen nicht betroffen, weil es keinen Knorpel enthält.",
    text: "So sieht eine Perichondritis typischerweise aus (eingefärbt auf dem Ohr aus dem Kursbuch): 1 Helix-Piercing als Eintrittspforte, 2 Ohrmuschel gerötet, geschwollen und sehr schmerzhaft, 3 das Ohrläppchen bleibt ausgespart, es enthält keinen Knorpel. Das ist ein Fall für den Arzt, und zwar sofort.",
    svg: "" };
  Object.defineProperty(G.perichondritis, "svg", { get: function () {
    var rot = "M" + [[250, 34], [300, 22], [340, 38], [360, 84], [368, 150], [362, 220], [348, 290], [328, 328], [296, 334], [262, 322], [228, 300], [214, 270], [226, 240], [250, 214], [246, 170], [232, 120], [236, 60]].map(function (pt) { var q = fp(pt[0], pt[1]); return q[0] + " " + q[1]; }).join(" L") + " Z";
    return [
      ohrfoto(),
      '<filter id="ohr-weich" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>',
      '<path d="' + rot + '" class="f-entz-foto" filter="url(#ohr-weich)"/>',
      marke([[279, 87]], 1), marke([[340, 210]], 2), marke([[200, 400]], 3, true),
      legende([["Helix-Piercing als Eintrittspforte"], ["Knorpel gerötet, geschwollen, heiß"], ["Ohrläppchen nicht betroffen", 0, true]], OY + 480 + 26, 1)
    ].join("");
  } });

  // ---------- Fotos aus dem Kursbuch mit eingezeichneter Anatomie (Augenbraue S. 89, Cheek S. 92) ----------
  // Gemeinsame Bausteine: Foto-Ausschnitt mit runden Ecken, nummerierte Punkte, Legende mit Name und Erklärung darunter.
  function fotoRahmen(id, bild, ox, oy, bw, bh, sx, sy) {
    var b = (KURS.bilder || {})[bild], bb = b ? [b.w || bw, b.h || bh] : [bw, bh];
    return '<clipPath id="' + id + '"><rect x="' + ox + '" y="' + oy + '" width="' + bw + '" height="' + bh + '" rx="14"/></clipPath>' +
      (b ? '<image href="' + b.src + '" x="' + (ox - (sx || 0)) + '" y="' + (oy - (sy || 0)) + '" width="' + bb[0] + '" height="' + bb[1] + '" clip-path="url(#' + id + ')"/>' : "") +
      r(ox, oy, bw, bh, "sd", 14);
  }
  function nrPunkt(x, y, n, k) { return c(x, y, 10, (k || "fa") + " punkt") + t(x, y + 4, String(n), "tnr", "middle"); }
  function fotoLegende(eintraege, x0, y0) {
    return eintraege.map(function (e, i) {
      var y = y0 + i * 38;
      return nrPunkt(x0 + 10, y, i + 1, e[2]) + t(x0 + 28, y + 1, e[0], "tb") + t(x0 + 28, y + 16, e[1], "tm");
    }).join("");
  }

  // Augenbraue: Foto 431 × 480, Ausschnitt bis y = 360. Außen links, Nase rechts außerhalb des Bildes.
  G.augenbraue = { w: 463, h: 500,
    alt: "Foto einer Augenbraue mit Augenbrauenpiercing im äußeren Drittel. Eingezeichnet sind die drei Drittel der Braue, die Stichzone außen und die Austrittspunkte der Gefühlsnerven der Stirn: N. supraorbitalis etwa über der Pupille und N. supratrochlearis weiter innen.",
    text: "Die Augenbraue in Dritteln (Foto aus dem Kursbuch, Nerven eingezeichnet, Lage individuell verschieden). Über dem inneren und mittleren Drittel treten Gefühlsnerven und Gefäße aus kleinen Öffnungen im Knochen. Deshalb sticht man nur im äußeren Drittel und oberflächlich.",
    svg: "" };
  Object.defineProperty(G.augenbraue, "svg", { get: function () {
    var X = 16, Y = 10, q = function (x, y) { return [x + X, y + Y]; };
    function nerv(von, ziele) { var a = q(von[0], von[1]); return ziele.map(function (z) { var b = q(z[0], z[1]); return p("M" + a[0] + " " + a[1] + " C" + (a[0] + (b[0] - a[0]) * .2) + " " + (a[1] - 50) + " " + b[0] + " " + (b[1] + 60) + " " + b[0] + " " + b[1], "nerv b2"); }).join(""); }
    var st = q(60, 40), so = q(286, 150), sth = q(402, 168);
    return [
      fotoRahmen("ab-foto", "augenbraue", X, Y, 431, 360, 0, 0),
      '<g class="auf-foto">',
      r(st[0], st[1], 114, 136, "f-ok", 10),
      [174, 297].map(function (x) { var a = q(x, 18), b = q(x, 200); return l(a[0], a[1], b[0], b[1], "sfoto dash"); }).join(""),
      t(q(117, 30)[0], q(117, 30)[1], "außen", "tfoto", "middle"), t(q(236, 30)[0], q(236, 30)[1], "Mitte", "tfoto", "middle"), t(q(360, 30)[0], q(360, 30)[1], "innen", "tfoto", "middle"),
      nerv([286, 150], [[262, 2], [300, 2], [330, 6]]), nerv([402, 168], [[392, 2], [424, 4]]),
      c(so[0], so[1], 4, "fnerv"), c(sth[0], sth[1], 4, "fnerv"),
      "</g>",
      nrPunkt(st[0] + 4, st[1] + 4, 1, "fok"), nrPunkt(so[0] + 16, so[1] + 12, 2), nrPunkt(sth[0] - 16, sth[1] + 14, 3),
      fotoLegende([
        ["Augenbrauenpiercing", "nur im äußeren Drittel und oberflächlich", "fok"],
        ["N. supraorbitalis", "Gefühlsnerv der Stirn, tritt etwa über der Pupille aus"],
        ["N. supratrochlearis", "weiter innen, über dem inneren Augenwinkel"]
      ], X, Y + 360 + 26)
    ].join("");
  } });

  // Gesicht von vorn (Cheek-Datenblatt): Foto 349 × 480. Eingezeichnet auf der Bildseite rechts, Lage schematisch.
  G.wange = { w: 381, h: 700,
    alt: "Foto eines Gesichts von vorn mit Cheek-Piercings. Auf einer Gesichtshälfte sind eingezeichnet: die Äste des Gesichtsnervs vor dem Ohr, die Ohrspeicheldrüse, der Speichelgang quer über die Wange und die Gesichtsarterie vom Unterkiefer zum Mundwinkel. Das Cheek-Piercing liegt mitten in diesem Bereich.",
    text: "Gesicht von vorn (Foto aus dem Kursbuch, Strukturen schematisch eingezeichnet, Lage individuell verschieden). Durch die Wange laufen Äste des Gesichtsnervs, der Speichelgang der Ohrspeicheldrüse und die Gesichtsarterie. Deshalb gehört das Cheek in erfahrene Hände.",
    svg: "" };
  Object.defineProperty(G.wange, "svg", { get: function () {
    var X = 16, Y = 10, q = function (x, y) { var a = [x + X, y + Y]; return a[0] + " " + a[1]; }, pt = function (x, y) { return [x + X, y + Y]; };
    var stamm = pt(330, 300), cheek = pt(293, 347);
    // Äste des N. facialis: temporal, zygomatisch, bukkal, Unterkieferrand, Hals (je Steuerpunkt und Ende)
    var aeste = [[[326, 236], [302, 186]], [[304, 252], [258, 230]], [[290, 300], [236, 304]], [[316, 396], [230, 410]], [[324, 380], [306, 456]]];
    return [
      fotoRahmen("wg-foto", "cheek", X, Y, 349, 480, 0, 0),
      '<g class="auf-foto">',
      e(pt(324, 302)[0], pt(324, 302)[1], 15, 40, "f-druese-foto"),
      aeste.map(function (a) { return p("M" + stamm[0] + " " + stamm[1] + " Q" + q(a[0][0], a[0][1]) + " " + q(a[1][0], a[1][1]), "nerv b2") + c(pt(a[1][0], a[1][1])[0], pt(a[1][0], a[1][1])[1], 2.5, "fnerv"); }).join(""),
      p("M" + q(316, 292) + " C" + q(296, 296) + " " + q(274, 298) + " " + q(258, 312), "gang b3"),
      p("M" + q(276, 446) + " C" + q(266, 404) + " " + q(254, 370) + " " + q(240, 352) + " C" + q(224, 330) + " " + q(212, 304) + " " + q(204, 266), "blut b25"),
      c(cheek[0], cheek[1], 20, "f-risk"),
      "</g>",
      nrPunkt(pt(300, 214)[0], pt(300, 214)[1], 1), nrPunkt(pt(334, 340)[0], pt(334, 340)[1], 2), nrPunkt(pt(270, 282)[0], pt(270, 282)[1], 3),
      nrPunkt(pt(244, 392)[0], pt(244, 392)[1], 4), nrPunkt(cheek[0] + 20, cheek[1] + 20, 5),
      fotoLegende([
        ["N. facialis (Gesichtsnerv)", "tritt vor dem Ohr aus und steuert die Mimik"],
        ["Ohrspeicheldrüse", "liegt vor und unter dem Ohr"],
        ["Ductus parotideus", "Speichelgang, ca. 2 cm unter dem Jochbogen"],
        ["A. facialis (Gesichtsarterie)", "vom Unterkiefer zum Mundwinkel"],
        ["Cheek-Piercing", "liegt mitten in diesem Bereich"]
      ], X, Y + 480 + 26)
    ].join("");
  } });

  // ---------- Modul 3: Wundheilung als Zeitachse ----------
  (function () {
    var x = { 0: 160, 2: 196, 4: 232, 7: 282, 14: 352, 21: 402, 42: 470, 90: 548 };
    var ach = [[0, "0"], [4, "4"], [7, "7"], [14, "14"], [21, "21"], [42, "6 Wo."], [90, "3 Mon."]];
    G.wundheilung = { w: 600, h: 250,
      alt: "Zeitachse der Wundheilung: Entzündungsphase in den ersten Tagen, Granulationsphase etwa bis zur dritten Woche, Epithelisierung und Umbau über Wochen bis Monate; die Phasen überlappen.",
      text: "Die Phasen der Wundheilung überlappen (Richtwerte, Achse nicht linear). Der Stichkanal ist früh von außen geschlossen, das Narbengewebe wird aber erst nach Monaten richtig fest – deshalb die langen Abheilzeiten.",
      svg: [
        t(150, 46, "Entzündung, Reinigung", "tb", "end"), t(150, 61, "Rötung, Schwellung, Sekret", "tm", "end"),
        r(x[0], 34, x[4] + 10 - x[0], 24, "fa", 12),
        t(150, 96, "Granulation, Aufbau", "tb", "end"), t(150, 111, "neues, zartes Gewebe", "tm", "end"),
        r(x[2], 84, x[21] - x[2], 24, "fa o7", 12),
        t(150, 146, "Epithelisierung, Umbau", "tb", "end"), t(150, 161, "Narbe wird fester", "tm", "end"),
        r(x[4], 134, x[90] - x[4], 24, "fa o45", 12),
        l(x[14] - 10, 26, x[14] - 10, 176, "err dash"), t(x[14] - 6, 22, "Tag 10 bis 14: ohne Epithelisierung zum Arzt", "terr"),
        l(x[0], 186, 560, 186, "s"),
        ach.map(function (a) { return l(x[a[0]], 182, x[a[0]], 190, "s") + t(x[a[0]], 206, a[1], "tm", "middle"); }).join(""),
        t(x[0], 230, "Tage nach dem Stich", "tm")
      ].join("") };
  })();

  // ---------- Modul 4: Schmerzleitung ----------
  function box(x, y, w, h, z1, z2, k) {
    return r(x, y, w, h, k || "fsurf s1", 8) + t(x + w / 2, y + (z2 ? h / 2 - 3 : h / 2 + 4), z1, "tb", "middle") + (z2 ? t(x + w / 2, y + h / 2 + 13, z2, "tm", "middle") : "");
  }
  G.schmerzleitung = { w: 640, h: 300,
    alt: "Weg des Schmerzes: vom Nozizeptor in der Haut über schnelle A-Delta-Fasern und langsame C-Fasern ins Rückenmark, dort Reflex; über den Vorderseitenstrang zum Thalamus und weiter zur Großhirnrinde und zum limbischen System.",
    text: "Der Weg des Schmerzes. Die schnellen A-Delta-Fasern melden den hellen ersten Schmerz, die langsamen C-Fasern den dumpfen Nachschmerz. Der Reflex im Rückenmark ist schneller als die bewusste Wahrnehmung – deshalb zuckt der Kunde.",
    svg: [
      box(10, 116, 120, 52, "Nozizeptor", "in der Haut", "fs s1"),
      pfeil(130, 128, 238, 128, "a b2"), t(184, 120, "A-Delta · ca. 20 m/s", "tk", "middle"),
      pfeil(130, 156, 238, 156, "a b2 dash"), t(184, 174, "C-Faser · bis 2,5 m/s", "tk", "middle"),
      box(240, 112, 124, 60, "Rückenmark", "Hinterhorn"),
      pfeil(302, 172, 302, 220, "s"), box(232, 222, 140, 50, "Reflex", "Fluchtbewegung"),
      t(302, 100, "Endorphine dämpfen hier", "tm", "middle"),
      pfeil(364, 142, 438, 142, "s"), t(401, 122, "Vorder-", "tk", "middle"), t(401, 135, "seitenstrang", "tk", "middle"),
      box(440, 118, 80, 48, "Thalamus", "Umschaltung"),
      pfeil(520, 130, 540, 84, "s"), box(500, 24, 136, 58, "Großhirnrinde", "bewusst: wo, wie stark"),
      pfeil(520, 154, 540, 202, "s"), box(500, 204, 136, 58, "Limbisches System", "Gefühl, Bewertung"),
      t(10, 290, "Der Thalamus als Umschaltstation ist eine Ergänzung zum Kursbuch.", "tm")
    ].join("") };

  // ---------- Modul 5: Keimreduktion ----------
  (function () {
    function reihe(y, n, titel, sub, rest, k) {
      var s = t(10, y + 16, titel, "tb") + t(10, y + 32, sub, "tm");
      for (var i = 0; i < 6; i++) s += r(150 + i * 54, y, 50, 30, i < n ? (k || "fa") : "fbg sd", 6) + (i < n ? t(175 + i * 54, y + 20, "÷ 10", "tw", "middle") : "");
      return s + t(484, y + 14, rest[0], "tb") + t(484, y + 30, rest[1], "tm");
    }
    G.keimreduktion = { w: 620, h: 190,
      alt: "Vergleich der Keimreduktion: Desinfektion verringert die Keimzahl um fünf Zehnerpotenzen, von einer Million auf zehn; Sterilisation um sechs Zehnerpotenzen, von einer Million auf einen und tötet auch Sporen.",
      text: "Jedes Feld steht für eine Zehnerpotenz. Aus einer Million Keimen bleiben nach einer Desinfektion etwa zehn übrig, nach einer Sterilisation theoretisch einer – und auch Bakteriensporen sind abgetötet.",
      svg: [
        t(150, 24, "Ausgangslage: 1.000.000 Keime", "tm"),
        reihe(40, 5, "Desinfektion", "Faktor 10⁵", ["→ 10 Keime", "Sporen nicht sicher erfasst"]),
        reihe(100, 6, "Sterilisation", "Faktor 10⁶", ["→ 1 Keim", "auch Sporen tot"]),
        t(10, 172, "Haut lässt sich nur desinfizieren, nie sterilisieren.", "tm")
      ].join("") };
  })();

  // ---------- Modul 5: Instrumentenkreislauf ----------
  G.kreislauf = { w: 640, h: 250,
    alt: "Kreislauf der Instrumentenaufbereitung: benutzt, reinigen im Ultraschallbad, trocknen, verpacken, sterilisieren im Autoklav, lagern mit Datum und Charge, steril öffnen am Arbeitsplatz. Unreine und reine Seite sind getrennt.",
    text: "Der Weg eines Instruments durch dein Studio. Unreine und reine Seite kreuzen sich nicht: Was benutzt ist, kommt erst nach dem Autoklav wieder in die Nähe von Sterilgut. Kanülen und Einmalmaterial kommen sofort in den Abwurf und werden nie aufbereitet.",
    svg: [
      r(4, 4, 300, 242, "f-unrein", 12), r(336, 4, 300, 242, "f-rein", 12),
      t(16, 24, "unreine Seite", "tm"), t(624, 24, "reine Seite", "tm", "end"),
      box(30, 44, 120, 50, "1 Benutzt", "z. B. Klemme"),
      box(170, 44, 120, 50, "2 Reinigen", "Ultraschall, 30 min"),
      box(170, 160, 120, 50, "3 Trocknen", "gegen Flecken, Rost"),
      box(350, 160, 120, 50, "4 Verpacken", "Beutel, Indikator"),
      box(490, 160, 130, 50, "5 Autoklav", "vier Phasen"),
      box(490, 44, 130, 50, "6 Lagern", "Datum, Charge"),
      box(350, 44, 120, 50, "7 Steril öffnen", "am Kunden"),
      pfeil(150, 69, 168, 69, "a b2"), pfeil(230, 94, 230, 158, "a b2"), pfeil(290, 185, 348, 185, "a b2"),
      pfeil(470, 185, 488, 185, "a b2"), pfeil(555, 160, 555, 96, "a b2"), pfeil(490, 69, 472, 69, "a b2"),
      p("M410 94 C410 130 300 130 90 130 C90 120 90 110 90 96", "a b2 dash"), '<polygon points="90,94 86,103 94,103" class="fa"/>',
      t(330, 148, "nach dem Kunden zurück", "tk", "middle")
    ].join("") };

  // ---------- Modul 5: Druckverlauf im Autoklav ----------
  G.autoklav = { w: 640, h: 280,
    alt: "Schematischer Druckverlauf im Autoklav Typ B: Steigzeit mit mehreren Vakuumstößen, Ausgleichszeit, Sterilisationsphase auf dem Höchstdruck, Trockenphase mit Druckabfall und Vakuumtrocknung.",
    text: "Druckverlauf eines Typ-B-Autoklaven (schematisch). Erst wird die Luft mit Vakuumstößen entfernt, dann hält der Dampf den Druck während der Sterilisationsphase; zum Schluss trocknet ein Vakuum das Sterilgut.",
    svg: [
      r(70, 30, 210, 190, "f-ph1"), r(280, 30, 50, 190, "f-ph2"), r(330, 30, 150, 190, "f-ph1"), r(480, 30, 140, 190, "f-ph2"),
      t(175, 48, "Steigzeit", "tb", "middle"), t(175, 63, "Vakuumstöße", "tm", "middle"),
      t(305, 48, "Aus-", "tb", "middle"), t(305, 63, "gleich", "tb", "middle"),
      t(405, 48, "Sterilisation", "tb", "middle"), t(405, 63, "z. B. 134 °C", "tm", "middle"),
      t(550, 48, "Trocknung", "tb", "middle"), t(550, 63, "Vakuum", "tm", "middle"),
      l(70, 160, 620, 160, "sd dash"), l(70, 30, 70, 220, "s"), l(70, 220, 620, 220, "s"),
      t(62, 164, "0 bar", "tm", "end"), t(62, 94, "ca. 2 bar", "tm", "end"), t(62, 214, "Vakuum", "tm", "end"),
      p("M70 160 L90 160 L104 204 L124 130 L138 204 L158 126 L172 204 L196 124 L210 200 L280 92 L330 90 L480 90 L500 160 L520 206 L560 206 L600 160 L620 160", "a b25"),
      t(345, 250, "Zeit", "tm", "middle"), t(345, 270, "Gültig ist die Anleitung deines Geräts.", "tm", "middle")
    ].join("") };

  // ---------- Modul 6: Schmuckformen ----------
  function kugel(x, y, rad) { return c(x, y, rad || 9, "fmet s1"); }
  G.staebe = { w: 600, h: 190,
    alt: "Drei Schmuckformen als Zeichnung: gerader Barbell mit zwei Kugeln, gebogener Curved Barbell mit zwei Kugeln, Labret Stud mit flacher Platte und einer Kugel.",
    text: "Stäbe und Stecker. Barbell und Banane haben zwei Kugeln, der Labret Stud eine Platte, die innen flach anliegt – ideal für Lippe und Ohr.",
    svg: [
      l(40, 80, 160, 80, "met b5"), kugel(40, 80), kugel(160, 80),
      t(100, 136, "Barbell", "tb", "middle"), t(100, 152, "Zunge, Industrial,", "tm", "middle"), t(100, 166, "Brustwarze", "tm", "middle"),
      p("M240 66 C270 104 330 104 360 66", "met b5"), kugel(240, 66), kugel(360, 66),
      t(300, 136, "Curved Barbell (Banane)", "tb", "middle"), t(300, 152, "Bauchnabel, Augenbraue,", "tm", "middle"), t(300, 166, "Rook", "tm", "middle"),
      l(452, 80, 548, 80, "met b5"), r(444, 58, 8, 44, "fmet s1", 3), kugel(548, 80),
      t(500, 136, "Labret Stud", "tb", "middle"), t(500, 152, "Labret, Tragus, Conch,", "tm", "middle"), t(500, 166, "Lobe, Nostril", "tm", "middle")
    ].join("") };

  G.ringe = { w: 640, h: 190,
    alt: "Vier Ringformen: Segmentring mit eingesetztem Segment, Clicker-Ring mit Scharnier, Ball Closure Ring mit eingeklemmter Kugel und offener Threaded Ring mit Kugeln an beiden Enden.",
    text: "Ringe unterscheiden sich vor allem darin, wie sie schließen. Das hervorgehobene Teil ist jeweils der Verschluss.",
    svg: [
      p("M80 34 A42 42 0 1 0 116 54", "met b5"), p("M116 54 A42 42 0 0 1 80 34", "a b5"),
      t(80, 136, "Segmentring", "tb", "middle"), t(80, 152, "Segment mit Zange", "tm", "middle"),
      p("M240 34 A42 42 0 1 0 282 76", "met b5"), p("M282 76 A42 42 0 0 0 240 34", "a b5"), c(282, 76, 5, "fa"),
      t(240, 136, "Clicker", "tb", "middle"), t(240, 152, "Scharnier mit Klick", "tm", "middle"),
      p("M392 36 A42 42 0 1 0 408 36", "met b5"), c(400, 34, 9, "fa"),
      t(400, 136, "Ball Closure Ring", "tb", "middle"), t(400, 152, "Kugel rastet ein", "tm", "middle"),
      p("M536 40 A42 42 0 1 0 584 40", "met b5"), c(534, 37, 8, "fa"), c(586, 37, 8, "fa"),
      t(560, 136, "Threaded Ring", "tb", "middle"), t(560, 152, "(Hufeisen), Gewinde", "tm", "middle")
    ].join("") };

  // ---------- Modul 6: Überlänge ----------
  function gewebe(x, w, k) { return p("M" + x + " 50 C" + (x - w) + " 90 " + (x - w) + " 130 " + x + " 170 L" + (x + 40) + " 170 C" + (x + 40 + w) + " 130 " + (x + 40 + w) + " 90 " + (x + 40) + " 50 Z", k || "f-derm s1"); }
  G.ueberlaenge = { w: 640, h: 230,
    alt: "Drei Zeichnungen: frisch gestochen mit Schwellung und ausreichend Überlänge; ein zu kurzer Stab, bei dem die Kugeln in das geschwollene Gewebe drücken; nach der Abheilung ein kürzerer Zweiteinsatz.",
    text: "Warum der Ersteinsatz etwa 4 mm länger ist: Der frische Stichkanal schwillt an. Ist der Stab zu kurz, drücken Kugel oder Platte ins Gewebe – das stört die Heilung und kann einwachsen.",
    svg: [
      gewebe(86, 18), l(46, 110, 172, 110, "met b4"), kugel(42, 110, 8), kugel(176, 110, 8),
      p("M54 186 L54 194 L164 194 L164 186", "sd"), t(109, 210, "frisch: Spielraum", "tb", "middle"), t(109, 224, "≈ 4 mm Überlänge", "tm", "middle"),
      gewebe(300, 26), l(268, 110, 372, 110, "met b4"), kugel(266, 110, 8), kugel(374, 110, 8),
      c(266, 110, 14, "f-risk"), c(374, 110, 14, "f-risk"),
      t(320, 210, "zu kurz", "terr", "middle"), t(320, 224, "Kugeln drücken ein", "tm", "middle"),
      gewebe(512, 4), l(498, 110, 566, 110, "met b4"), kugel(494, 110, 8), kugel(570, 110, 8),
      t(532, 210, "abgeheilt", "tb", "middle"), t(532, 224, "kürzerer Zweiteinsatz", "tm", "middle")
    ].join("") };

  // ---------- Modul 6: Gewinde ----------
  G.gewinde = { w: 620, h: 200,
    alt: "Vergleich: Beim Außengewinde sitzt das Gewinde am Stab und reibt beim Einsetzen durch den Stichkanal; beim Innengewinde ist der Stab glatt und das Gewinde sitzt am Stift der Kugel.",
    text: "Außengewinde (links) schrammt beim Einsetzen durch den Stichkanal. Beim Innengewinde (rechts) gleitet ein glatter Stab hindurch; das Gewinde sitzt im Stab. Gewindelose Systeme (Push-Pin) sind ebenfalls glatt.",
    svg: [
      r(110, 40, 40, 110, "f-derm s1", 6),
      l(40, 95, 200, 95, "met b6"),
      p("M168 89 L172 101 L176 89 L180 101 L184 89 L188 101 L192 89 L196 101 L200 89", "s b15"),
      kugel(222, 95, 12),
      c(130, 95, 22, "f-risk"),
      t(130, 176, "Außengewinde", "tb", "middle"), t(130, 192, "reibt im Stichkanal", "terr", "middle"),
      r(420, 40, 40, 110, "f-derm s1", 6),
      l(350, 95, 510, 95, "met b6"), l(500, 95, 510, 95, "sd b2"),
      l(526, 95, 546, 95, "s b2"), p("M528 91 L531 99 L534 91 L537 99 L540 91 L543 99", "s"), kugel(560, 95, 12),
      t(440, 176, "Innengewinde", "tb", "middle"), t(440, 192, "glatter Stab gleitet", "tok", "middle")
    ].join("") };

  // ---------- Modul 7: Venenverweilkanüle ----------
  G.kanuele = { w: 640, h: 170,
    alt: "Aufbau einer Venenverweilkanüle: Stahlnadel mit Spitze, darüber der Kunststoffüberzug, ein farbiger Ansatz und der Griff, mit dem die Nadel herausgezogen wird.",
    text: "Aufbau einer Venenverweilkanüle (Braunüle). Nach dem Stich ziehst du die Stahlnadel am Griff heraus; der Kunststoffüberzug bleibt im Stichkanal und führt den Schmuck.",
    svg: [
      '<polygon points="30,86 58,80 58,92" class="fmet s1"/>',
      l(58, 86, 400, 86, "met b3"),
      r(70, 79, 280, 14, "fplast s1", 4),
      r(350, 70, 54, 32, "f-16g s1", 5),
      r(404, 74, 170, 24, "fsurf s1", 6), r(574, 78, 40, 16, "fsurf s1", 4),
      l(40, 86, 40, 40, "sl"), t(40, 32, "Nadelspitze (Stahl)", "tb"),
      l(210, 93, 210, 128, "sl"), t(210, 144, "Kunststoffüberzug: bleibt im Stichkanal", "tb", "middle"),
      l(377, 70, 377, 40, "sl"), t(377, 32, "Ansatz in Kennfarbe", "tb", "middle"),
      l(490, 98, 490, 128, "sl"), t(490, 144, "Griff: Nadel wird herausgezogen", "tb", "middle")
    ].join("") };

  // ---------- Modul 7: Gauge im Größenvergleich (maßstäblich zueinander) ----------
  (function () {
    // Standard der Akademie: 18G-Kanüle für 1,2-mm-Schmuck, 16G-Kanüle für 1,6-mm-Schmuck
    var paare = [[150, "18G", 1.3, "f-18g", "1,2 mm", "16G"], [450, "16G", 1.7, "f-16g", "1,6 mm", "14G"]];
    var m = 30, svg = [];
    paare.forEach(function (z) {
      var mm = Number(z[4].replace(",", ".").replace(" mm", ""));
      svg.push(c(z[0] - 60, 80, z[2] * m, z[3] + " s1"), c(z[0] + 60, 80, mm * m, "fmet s1"),
        t(z[0], 84, "→", "tb", "middle"),
        t(z[0] - 60, 160, "Kanüle " + z[1], "tb", "middle"), t(z[0] - 60, 176, String(z[2]).replace(".", ",") + " mm außen", "tm", "middle"),
        t(z[0] + 60, 160, "Schmuck " + z[4], "tb", "middle"), t(z[0] + 60, 176, "heißt beim Schmuck " + z[5], "tm", "middle"));
    });
    svg.push(l(310, 20, 310, 180, "sl dash"), t(310, 208, "Standard der Piercing Akademie", "tm", "middle"));
    G.gauge = { w: 620, h: 220,
      alt: "Maßstäblicher Vergleich der Standardkombinationen der Akademie: 18G-Kanüle mit 1,3 mm für Schmuck mit 1,2 mm, 16G-Kanüle mit 1,7 mm für Schmuck mit 1,6 mm.",
      text: "Die Standardkombinationen der Akademie, untereinander maßstäblich. Die Kanüle ist jeweils nur knapp dicker als der Schmuck. Achtung: 1,2-mm-Schmuck heißt im Handel 16G, wird aber mit einer 18G-Kanüle gestochen.",
      svg: svg.join("") };
  })();

  // ---------- Modul 9: Stichtechnik in vier Schritten ----------
  (function () {
    function feld(ox, n, titel, sub, inhalt) {
      return '<g transform="translate(' + ox + ' 0)">' + r(4, 4, 152, 236, "fsurf s1", 10) + nr(24, 26, n) + t(40, 30, titel, "tb") +
        r(14, 112, 132, 30, "f-derm s1", 6) + inhalt + t(80, 214, sub[0], "tm", "middle") + t(80, 228, sub[1] || "", "tm", "middle") + "</g>";
    }
    var klemme = r(20, 98, 48, 10, "fmet s1", 3) + r(92, 98, 48, 10, "fmet s1", 3) + r(20, 146, 48, 10, "fmet s1", 3) + r(92, 146, 48, 10, "fmet s1", 3);
    G.stich = { w: 640, h: 244,
      alt: "Vier Schritte des Stichs: Klemme mit Fenster anlegen; mit der Kanüle zügig durchstechen; Stahlnadel herausziehen, der Kunststoffüberzug bleibt; Schmuck in den Überzug stecken und durch den Stichkanal drücken.",
      text: "Der Stich in vier Bildern (Schritte 11 bis 16 im Ablauf). Der Kunststoffüberzug ist die Brücke: Er hält den Kanal offen, bis der Schmuck sitzt. Drücken, nicht ziehen.",
      svg: [
        feld(0, "1", "Klemme", ["Fenster über der", "Markierung"], klemme + c(80, 112, 3, "fa")),
        feld(160, "2", "Stechen", ["zügig, in die", "sichtbare Seite"], klemme + '<g class="anim-stechen">' + r(76, 50, 8, 120, "fplast s1", 2) + '<polygon points="76,170 84,170 80,186" class="fmet s1"/>' + l(80, 52, 80, 170, "met b2") + "</g>" + pfeil(110, 60, 110, 96, "a b2")),
        feld(320, "3", "Nadel heraus", ["Kunststoffüberzug", "bleibt im Kanal"], r(76, 96, 8, 70, "fplast s1", 2) + '<g class="anim-raus">' + l(80, 36, 80, 84, "met b2 dash") + "</g>" + pfeil(110, 92, 110, 50, "a b2")),
        feld(480, "4", "Schmuck rein", ["drücken, nicht ziehen;", "Kunde atmet aus"], r(76, 120, 8, 64, "fplast s1", 2) + '<g class="anim-schieben">' + l(80, 54, 80, 128, "met b4") + kugel(80, 50, 7) + "</g>" + pfeil(110, 70, 110, 110, "a b2"))
      ].join("") };
  })();


  // =====================================================================
  // 3D-Darstellungen: Schattierung über Verläufe (IDs je Grafik eindeutig),
  // Metall mit Glanzlicht, Gewebe als aufgeschnittener Block.
  // =====================================================================
  function metallDefs(v) {
    return '<radialGradient id="' + v + 'k" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset=".25" stop-color="#dfe4e6"/><stop offset=".65" stop-color="#9aa5a9"/><stop offset="1" stop-color="#56626a"/></radialGradient>' +
      '<linearGradient id="' + v + 's" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f7a7f"/><stop offset=".35" stop-color="#f3f5f6"/><stop offset=".6" stop-color="#a7b1b5"/><stop offset="1" stop-color="#56626a"/></linearGradient>' +
      '<linearGradient id="' + v + 'p" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#56626a"/><stop offset=".4" stop-color="#eef1f2"/><stop offset="1" stop-color="#7c878c"/></linearGradient>';
  }
  function kugel3d(v, x, y, rad) { return e(x, y + rad + 6, rad * 1.1, rad * 0.28, "schatten") + '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" fill="url(#' + v + 'k)"/>'; }
  function stab3d(v, x1, x2, y, d) { return '<rect x="' + x1 + '" y="' + (y - d / 2) + '" width="' + (x2 - x1) + '" height="' + d + '" rx="' + d / 2 + '" fill="url(#' + v + 's)"/>'; }
  // Röhre entlang eines Pfads: dunkle Kante, Grundton, Glanzlinie
  function roehre(d, b) {
    return '<path d="' + d + '" class="r3-kante" stroke-width="' + (b + 2) + '"/><path d="' + d + '" class="r3-grund" stroke-width="' + b + '"/><path d="' + d + '" class="r3-glanz" stroke-width="' + Math.max(1.5, b / 3.5) + '" transform="translate(-1 -1.5)"/>';
  }

  // ---------- Schmuck in 3D (ersetzt die flachen Zeichnungen) ----------
  G.staebe = { w: 600, h: 200,
    alt: G.staebe.alt, text: "Stäbe und Stecker (schattierte Darstellung). Barbell und Banane haben zwei Kugeln, der Labret Stud eine flache Platte, die innen anliegt – ideal für Lippe und Ohr.",
    svg: "<defs>" + metallDefs("st") + "</defs>" +
      e(100, 104, 70, 6, "schatten") + stab3d("st", 46, 154, 80, 8) + kugel3d("st", 40, 80, 13) + kugel3d("st", 160, 80, 13) +
      t(100, 146, "Barbell", "tb", "middle") + t(100, 162, "Zunge, Industrial,", "tm", "middle") + t(100, 176, "Brustwarze", "tm", "middle") +
      e(300, 108, 70, 6, "schatten") + roehre("M244 62 C272 104 328 104 356 62", 8) + kugel3d("st", 240, 58, 13) + kugel3d("st", 360, 58, 13) +
      t(300, 146, "Curved Barbell (Banane)", "tb", "middle") + t(300, 162, "Bauchnabel, Augenbraue,", "tm", "middle") + t(300, 176, "Rook", "tm", "middle") +
      e(500, 104, 62, 6, "schatten") + stab3d("st", 450, 548, 80, 7) + '<ellipse cx="447" cy="80" rx="7" ry="22" fill="url(#stp)"/>' + kugel3d("st", 552, 80, 12) +
      t(500, 146, "Labret Stud", "tb", "middle") + t(500, 162, "Labret, Tragus, Conch,", "tm", "middle") + t(500, 176, "Lobe, Nostril", "tm", "middle") };

  G.ringe = { w: 640, h: 200,
    alt: G.ringe.alt, text: "Ringe unterscheiden sich vor allem darin, wie sie schließen (schattierte Darstellung). Die blaue Markierung zeigt jeweils den Verschluss.",
    svg: "<defs>" + metallDefs("ri") + "</defs>" +
      e(80, 132, 48, 6, "schatten") + roehre("M80 34 A42 42 0 1 0 116 54 A42 42 0 0 0 80 34", 7) + p("M80 34 A42 42 0 0 1 116 54", "a b2 dash") +
      t(80, 156, "Segmentring", "tb", "middle") + t(80, 172, "Segment mit Zange", "tm", "middle") +
      e(240, 132, 48, 6, "schatten") + roehre("M240 34 A42 42 0 1 0 282 76", 7) + roehre("M282 76 A42 42 0 0 0 240 34", 7) + c(282, 76, 6, "fa") +
      t(240, 156, "Clicker", "tb", "middle") + t(240, 172, "Scharnier mit Klick", "tm", "middle") +
      e(400, 132, 48, 6, "schatten") + roehre("M392 37 A42 42 0 1 0 408 37", 7) + '<circle cx="400" cy="34" r="11" fill="url(#rik)"/>' + c(400, 34, 13, "a-ring") +
      t(400, 156, "Ball Closure Ring", "tb", "middle") + t(400, 172, "Kugel rastet ein", "tm", "middle") +
      e(560, 132, 48, 6, "schatten") + roehre("M536 42 A42 42 0 1 0 584 42", 7) + '<circle cx="534" cy="38" r="9" fill="url(#rik)"/><circle cx="586" cy="38" r="9" fill="url(#rik)"/>' + c(534, 38, 11, "a-ring") + c(586, 38, 11, "a-ring") +
      t(560, 156, "Threaded Ring", "tb", "middle") + t(560, 172, "(Hufeisen), Gewinde", "tm", "middle") };

  // ---------- Venenverweilkanüle in 3D ----------
  G.kanuele = { w: 640, h: 180,
    alt: G.kanuele.alt, text: G.kanuele.text,
    svg: "<defs>" + metallDefs("ka") +
      '<linearGradient id="kaplast" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".95"/><stop offset=".5" stop-color="#dfe7ea" stop-opacity=".7"/><stop offset="1" stop-color="#b9c6cb" stop-opacity=".9"/></linearGradient>' +
      '<linearGradient id="kagruen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd08c"/><stop offset=".45" stop-color="#3e9b4f"/><stop offset="1" stop-color="#1f5e2b"/></linearGradient>' +
      '<linearGradient id="kagriff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e4eaec"/><stop offset="1" stop-color="#aab6bb"/></linearGradient></defs>' +
      e(330, 118, 300, 7, "schatten") +
      '<polygon points="30,86 58,81 58,91" fill="url(#kas)"/>' + stab3d("ka", 56, 402, 86, 4) +
      '<rect x="70" y="79" width="280" height="14" rx="5" fill="url(#kaplast)" class="s1"/>' + l(74, 82, 346, 82, "r3-glanz-l") +
      '<rect x="350" y="69" width="54" height="34" rx="6" fill="url(#kagruen)"/>' + l(356, 74, 398, 74, "r3-glanz-l") +
      '<rect x="404" y="73" width="170" height="26" rx="7" fill="url(#kagriff)" class="s1"/>' + '<rect x="420" y="79" width="70" height="12" rx="4" class="fs"/>' +
      '<rect x="574" y="77" width="42" height="18" rx="5" fill="url(#kagriff)" class="s1"/>' +
      l(40, 86, 40, 40, "sl") + t(40, 32, "Nadelspitze (Stahl)", "tb") +
      l(210, 93, 210, 132, "sl") + t(210, 150, "Kunststoffüberzug: bleibt im Stichkanal", "tb", "middle") +
      l(377, 69, 377, 40, "sl") + t(377, 32, "Ansatz in Kennfarbe (hier 18G grün)", "tb", "middle") +
      l(490, 99, 490, 132, "sl") + t(490, 150, "Griff: Nadel wird herausgezogen", "tb", "middle") };

  // ---------- Hautblock in 3D ----------
  (function () {
    var dx = 100, dy = -56, x0 = 150, x1 = 450, yE = 110, yD = 128, yS = 220, yU = 320;
    function seite(ya, yb, k) { return '<polygon points="' + [x1, ya, x1 + dx, ya + dy, x1 + dx, yb + dy, x1, yb].join(",") + '" class="' + k + '"/>'; }
    var fett = "";
    [[190, 250], [240, 270], [290, 248], [340, 275], [390, 252], [425, 285], [210, 295], [320, 300]].forEach(function (q) { fett += e(q[0], q[1], 22, 15, "sd f-sub-l"); });
    G.haut3d = { w: 720, h: 350,
      alt: "Dreidimensionaler, aufgeschnittener Hautblock mit Oberhaut, Lederhaut und Unterhaut. Eine Kanüle sticht von oben durch alle Schichten; in der Lederhaut liegen Arterie, Vene, Nerv und Haarwurzeln.",
      text: "Haut als aufgeschnittener Block (schematisch). Die Kanüle durchquert Oberhaut, Lederhaut und Unterhaut. Arterie, Vene und Nerv laufen in der Lederhaut gemeinsam – im Querschnitt siehst du sie als Bündel.",
      svg: "<defs>" + metallDefs("hb") +
        '<linearGradient id="hbtop" x1="0" y1="1" x2="1" y2="0"><stop offset="0" class="st-epi"/><stop offset="1" class="st-epi-h"/></linearGradient>' +
        '<linearGradient id="hbder" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="st-derm-h"/><stop offset="1" class="st-derm"/></linearGradient>' +
        '<linearGradient id="hbsub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="st-sub-h"/><stop offset="1" class="st-sub"/></linearGradient>' +
        '<linearGradient id="hbgr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd08c"/><stop offset=".5" stop-color="#3e9b4f"/><stop offset="1" stop-color="#1f5e2b"/></linearGradient></defs>' +
        e(330, 334, 230, 10, "schatten") +
        // Oberseite
        '<polygon points="' + [x0, yE, x1, yE, x1 + dx, yE + dy, x0 + dx, yE + dy].join(",") + '" fill="url(#hbtop)" class="s1"/>' +
        // Seitenfläche mit Schichten, abgedunkelt
        seite(yE, yD, "f-epi") + seite(yD, yS, "f-derm") + seite(yS, yU, "f-sub") + '<polygon points="' + [x1, yE, x1 + dx, yE + dy, x1 + dx, yU + dy, x1, yU].join(",") + '" class="dunkel s1"/>' +
        // Schnittfläche vorn
        r(x0, yD, x1 - x0, yS - yD, "", 0).replace('class=""', 'fill="url(#hbder)"') + r(x0, yS, x1 - x0, yU - yS, "", 0).replace('class=""', 'fill="url(#hbsub)"') + fett +
        p("M" + x0 + " " + yE + " H" + x1 + " V" + yD + " " + (function () { var s = ""; for (var x = x1; x > x0; x -= 20) s += "Q" + (x - 10) + " " + (yD + 10) + " " + (x - 20) + " " + yD + " "; return s; })() + "Z", "f-epi s1") +
        r(x0, yE, x1 - x0, yU - yE, "s1 fnone", 0) +
        // Haare mit Wurzel
        p("M205 96 C200 70 206 48 198 30", "s b15") + l(205, 96, 212, 180, "s") + e(213, 186, 6, 9, "f-epi s1") +
        p("M405 92 C410 66 402 44 412 26", "s b15") + l(400, 112, 392, 176, "s") + e(391, 182, 6, 9, "f-epi s1") +
        // Gefäß-Nerven-Bündel im Querschnitt
        c(262, 192, 10, "f-blut s1") + c(262, 192, 4, "f-blut-d") + c(286, 196, 9, "f-vene s1") + c(274, 176, 5, "fnerv s1") +
        // Kanüle von oben, im Gewebe gestrichelt
        '<rect x="331" y="14" width="18" height="22" rx="4" fill="url(#hbgr)"/>' +
        '<rect x="336" y="36" width="8" height="74" rx="3" fill="url(#hbp)"/>' + r(337, 110, 6, 150, "fkanal dash s1", 2) + '<polygon points="337,260 343,260 340,276" fill="url(#hbp)"/>' +
        // Beschriftung rechts an der Seitenfläche
        l(x1 + dx + 4, yE + dy + 9, 570, yE + dy + 9, "sl") + t(576, yE + dy + 13, "Oberhaut", "tb") +
        l(x1 + dx + 4, (yD + yS) / 2 + dy, 570, (yD + yS) / 2 + dy, "sl") + t(576, (yD + yS) / 2 + dy + 4, "Lederhaut", "tb") + t(576, (yD + yS) / 2 + dy + 20, "Gefäße, Nerven, Haare", "tm") +
        l(x1 + dx + 4, (yS + yU) / 2 + dy, 570, (yS + yU) / 2 + dy, "sl") + t(576, (yS + yU) / 2 + dy + 4, "Unterhaut", "tb") + t(576, (yS + yU) / 2 + dy + 20, "Fettgewebe", "tm") +
        // Beschriftung links
        l(252, 192, 138, 168, "sl") + t(132, 172, "Arterie", "tb", "end") +
        l(295, 200, 138, 206, "sl") + t(132, 210, "Vene", "tb", "end") +
        l(270, 172, 138, 136, "sl") + t(132, 140, "Nerv", "tb", "end") +
        l(212, 186, 138, 102, "sl") + t(132, 106, "Haarwurzel", "tb", "end") +
        l(349, 26, 400, 14, "sl") + t(404, 18, "Kanüle", "tb") +
        l(343, 240, 138, 250, "sl") + t(132, 254, "Stichkanal", "tb", "end") };
  })();

  // ---------- Stichkanal im Ohrläppchen in 3D ----------
  (function () {
    var x0 = 250, x1 = 360, y0 = 70, y1 = 290, dx = 120, dy = -46, ym = 178;
    function streifen(a, b, k) { return '<polygon points="' + [a, y0, b, y0, b + dx, y0 + dy, a + dx, y0 + dy].join(",") + '" class="' + k + '"/>'; }
    G.lobe3d = { w: 680, h: 330,
      alt: "Dreidimensionaler Ausschnitt aus einem Ohrläppchen mit Labret-Stecker: Kugel vorn, Platte hinten, dazwischen der Stichkanal durch Oberhaut, Lederhaut und Fettgewebe. Zwischen Gewebe und Schmuck bleibt Spielraum für die Schwellung.",
      text: "Ausschnitt aus dem Ohrläppchen mit Labret (schematisch). Vom Rand wächst die Oberhaut in den Stichkanal hinein (Epithelisierung), bis er innen ausgekleidet ist. Die Überlänge lässt Platz für die Schwellung.",
      svg: "<defs>" + metallDefs("lo") +
        '<linearGradient id="lohaut" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="st-epi-h"/><stop offset="1" class="st-epi"/></linearGradient></defs>' +
        e(360, 312, 180, 9, "schatten") +
        // Oberseite (Schnitt) mit Schichten
        streifen(x0, x0 + 8, "f-epi") + streifen(x0 + 8, x0 + 30, "f-derm") + streifen(x0 + 30, x1 - 30, "f-sub") + streifen(x1 - 30, x1 - 8, "f-derm") + streifen(x1 - 8, x1, "f-epi") +
        '<polygon points="' + [x0, y0, x1, y0, x1 + dx, y0 + dy, x0 + dx, y0 + dy].join(",") + '" class="s1 fnone"/>' +
        // Rückseite (Haut)
        '<polygon points="' + [x1, y0, x1 + dx, y0 + dy, x1 + dx, y1 + dy - 30, x1, y1].join(",") + '" fill="url(#lohaut)" class="s1"/>' + '<polygon points="' + [x1, y0, x1 + dx, y0 + dy, x1 + dx, y1 + dy - 30, x1, y1].join(",") + '" class="dunkel"/>' +
        // Schnittfläche vorn
        r(x0, y0, 8, y1 - y0, "f-epi") + r(x0 + 8, y0, 22, y1 - y0, "f-derm") + r(x0 + 30, y0, x1 - x0 - 60, y1 - y0, "f-sub") + r(x1 - 30, y0, 22, y1 - y0, "f-derm") + r(x1 - 8, y0, 8, y1 - y0, "f-epi") +
        e(x0 + 55, 120, 14, 10, "sd") + e(x0 + 55, 240, 14, 10, "sd") + e(x0 + 50, 268, 12, 9, "sd") + e(x0 + 60, 98, 12, 8, "sd") +
        r(x0, y0, x1 - x0, y1 - y0, "s1 fnone") +
        // Stichkanal, mit Oberhaut ausgekleidet
        r(x0, ym - 11, x1 - x0, 22, "fbg") + l(x0, ym - 11, x1, ym - 11, "epi-linie") + l(x0, ym + 11, x1, ym + 11, "epi-linie") +
        // Schmuck
        stab3d("lo", 214, 372, ym, 9) + kugel3d("lo", 206, ym, 17) + '<ellipse cx="376" cy="' + ym + '" rx="7" ry="24" fill="url(#lop)"/>' +
        // Spielraum
        p("M224 " + (ym + 32) + " v6 h26 v-6", "sd") + t(237, ym + 54, "Spielraum", "tk", "middle") +
        // Beschriftung
        l(198, ym - 14, 144, ym - 50, "sl") + t(140, ym - 54, "Kugel (Vorderseite)", "tb", "end") +
        l(380, ym + 20, 520, ym + 70, "sl") + t(526, ym + 74, "Platte (Rückseite)", "tb") +
        l(x0 + 4, ym - 11, 144, ym + 40, "sl") + t(140, ym + 36, "Oberhaut kleidet", "tb", "end") + t(140, ym + 52, "den Kanal aus", "tm", "end") +
        l(x0 + 19, 100, 144, 92, "sl") + t(140, 96, "Lederhaut", "tb", "end") +
        l(x0 + 55, 250, 144, 270, "sl") + t(140, 274, "Fettgewebe", "tb", "end") +
        l(x1 + 60, y0 + dy / 2 + 60, 520, 96, "sl") + t(526, 100, "Haut der Rückseite", "tb") };
  })();

  // ---------- Anodisierfarben von Titan ----------
  (function () {
    var farben = [["Bronze", "≈ 15 V", "#9c6b30"], ["Violett", "≈ 20 V", "#6a3fa0"], ["Dunkelblau", "≈ 25 V", "#24418f"], ["Blau", "≈ 30 V", "#2f6fd0"], ["Hellblau", "≈ 40 V", "#7fb8e8"], ["Gold", "≈ 55 V", "#d9b44a"], ["Rosa", "≈ 75 V", "#d76a9a"], ["Türkis", "≈ 85 V", "#3cb7ae"], ["Grün", "≈ 95 V", "#5daa5a"]];
    var defs = "", svg = "";
    farben.forEach(function (f, i) {
      defs += '<radialGradient id="an' + i + '" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="' + f[2] + '" stop-opacity=".85"/><stop offset="1" stop-color="' + f[2] + '"/></radialGradient>';
      var x = 40 + i * 70;
      svg += e(x, 92, 24, 5, "schatten") + '<circle cx="' + x + '" cy="62" r="22" fill="url(#an' + i + ')"/>' + t(x, 120, f[0], "tb", "middle") + t(x, 136, f[1], "tm", "middle");
    });
    G.anodisieren = { w: 640, h: 170,
      alt: "Farben von anodisiertem Titan mit ungefähren Spannungen: Bronze etwa 15 Volt, Violett 20, Dunkelblau 25, Blau 30, Hellblau 40, Gold 55, Rosa 75, Türkis 85 und Grün 95 Volt.",
      text: "Anodisieren färbt Titan ohne Farbstoff: Je höher die Spannung, desto dicker die Oxidschicht, und das Licht wird anders gebrochen. Die Spannungen sind Richtwerte und hängen vom Verfahren ab.",
      svg: "<defs>" + defs + "</defs>" + svg + l(20, 156, 620, 156, "sd") + pfeil(560, 156, 620, 156, "s") + t(20, 166, "niedrige Spannung, dünne Oxidschicht", "tk") + t(620, 166, "hohe Spannung", "tk", "end") };
  })();

  // ---------- Studio in isometrischer Ansicht ----------
  (function () {
    function ip(x, y, z) { return [Math.round(300 + (x - y) * 0.866), Math.round(170 + (x + y) * 0.5 - z)]; }
    function poly(pts, k) { return '<polygon points="' + pts.map(function (q) { return ip(q[0], q[1], q[2]).join(","); }).join(" ") + '" class="' + k + '"/>'; }
    function box(x, y, z, w, d, h, k) {
      var top = [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]];
      var re = [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]];
      var li = [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]];
      kisten.push({ tiefe: x + w / 2 + y + d / 2 + z * 1.5, svg: poly(li, k + " s1") + poly(li, "dunkel2") + poly(re, k + " s1") + poly(re, "dunkel") + poly(top, k + " s1") });
      return "";
    }
    var kisten = [];
    function kistenZeichnen() { return kisten.sort(function (a, b) { return a.tiefe - b.tiefe; }).map(function (k) { return k.svg; }).join(""); }
    function marke(x, y, z, n) { var q = ip(x, y, z); return l(q[0], q[1], q[0], q[1] - 26, "sl") + nr(q[0], q[1] - 34, n); }
    var svg =
      poly([[0, 0, 0], [400, 0, 0], [400, 300, 0], [0, 300, 0]], "boden s1") +
      poly([[0, 0, 0], [400, 0, 0], [400, 0, 150], [0, 0, 150]], "wand s1") +
      poly([[0, 0, 0], [0, 300, 0], [0, 300, 150], [0, 0, 150]], "wand s1") + poly([[0, 0, 0], [0, 300, 0], [0, 300, 150], [0, 0, 150]], "dunkel") +
      // Trennwand mit Tür, niedrig geschnitten, damit beide Räume sichtbar bleiben
      box(220, 0, 0, 8, 210, 34, "wand") + box(220, 270, 0, 8, 30, 34, "wand") +
      // Behandlungsraum
      box(20, 0, 0, 110, 40, 70, "moebel") + box(36, 8, 70, 46, 24, 6, "metallbox") + box(104, 10, 70, 16, 16, 18, "rot") +
      box(150, 0, 0, 50, 36, 64, "moebel") + poly([[160, 6, 64.5], [190, 6, 64.5], [190, 30, 64.5], [160, 30, 64.5]], "becken") + box(168, 0, 92, 14, 4, 22, "spender") +
      box(186, 60, 0, 22, 22, 34, "metallbox") +
      box(40, 120, 0, 140, 50, 40, "liege") + box(40, 120, 40, 140, 50, 10, "polster") +
      // Aufbereitung
      box(240, 0, 0, 150, 40, 70, "moebel") + box(252, 6, 70, 40, 26, 22, "metallbox") + box(306, 6, 70, 50, 30, 36, "autoklav") +
      box(350, 110, 0, 46, 70, 110, "schrank") + kistenZeichnen() +
      marke(76, 20, 76, "1") + marke(112, 18, 88, "2") + marke(175, 18, 64, "3") + marke(197, 71, 34, "4") + marke(110, 145, 50, "5") +
      marke(272, 19, 92, "6") + marke(331, 21, 106, "7") + marke(373, 145, 110, "8");
    var legende = [["1", "Arbeitsfläche mit Folie und Instrumentenschale"], ["2", "Nadelabwurf in Griffweite"], ["3", "Waschbecken, Spender ohne Handkontakt"], ["4", "Trittmülleimer"], ["5", "Liege, glatt und abwaschbar"], ["6", "Ultraschallbad (unrein)"], ["7", "Autoklav"], ["8", "Sterilgut, geschlossen gelagert (rein)"]];
    legende.forEach(function (z, i) { var y = 560 + (i % 4) * 26, x = i < 4 ? 28 : 360; svg += nr(x, y - 4, z[0]) + t(x + 18, y, z[1], "tk"); });
    G.studio3d = { w: 680, h: 650,
      alt: "Isometrische Ansicht eines Piercingstudios: Behandlungsraum mit Arbeitsfläche, Instrumentenschale, Nadelabwurf, Waschbecken, Trittmülleimer und Liege; durch eine Wand getrennt der Aufbereitungsraum mit Ultraschallbad, Autoklav und Sterilgutschrank.",
      text: "So kann ein Studio aufgebaut sein (schematisch). Behandlung und Aufbereitung sind räumlich getrennt; benutzte Instrumente wandern von unrein (Ultraschallbad) über den Autoklav nach rein (Schrank) und kreuzen sich nicht mit Sterilgut.",
      svg: svg };
  })();


  // ---------- Bewegung: Klassen und SMIL-Animationen ergänzen (gestartet von bewegung.js, sobald sichtbar) ----------
  (function () {
    function verzoegert(svg, muster, klasse, schritt) {
      var n = 0;
      return svg.replace(muster, function (m) { return m.replace('class="', 'style="animation-delay:' + (n++ * schritt) + 'ms" class="' + klasse + " "); });
    }
    G.autoklav.svg = G.autoklav.svg.replace('class="a b25"/>', 'class="a b25 anim-zeichnen" pathLength="1"/>');
    G.wundheilung.svg = verzoegert(G.wundheilung.svg, /<rect [^>]*class="fa[^"]*"[^>]*\/>/g, "anim-wachsen", 350);
    G.keimreduktion.svg = verzoegert(G.keimreduktion.svg, /<rect [^>]*class="fa"[^>]*\/>/g, "anim-stufe", 160);
    function punkt(pfad, dauer, k, r) { return '<circle r="' + (r || 4) + '" class="' + k + '"><animateMotion begin="indefinite" dur="' + dauer + '" repeatCount="indefinite" path="' + pfad + '"/></circle>'; }
    G.schmerzleitung.svg += punkt("M132 128 L236 128", "0.9s", "fa signal") + punkt("M132 156 L236 156", "4.5s", "fa signal o7") + punkt("M364 142 L438 142 L540 84", "1.6s", "fa signal");
    G.kreislauf.svg += punkt("M90 69 H230 V185 H555 V69 H410 V112 C410 130 300 130 90 130 Z", "10s", "fa signal", 6);
  })();
  KURS.grafiken = G;
})();
