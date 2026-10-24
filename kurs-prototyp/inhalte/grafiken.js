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
      r(186, 58, 10, 186, "fbg dash s1"),
      '<polygon points="186,0 196,0 196,44 191,58 186,44" class="fmet s1"/>',
      // Beschriftung im Bild
      t(82, 34, "Haar", "tk"), t(140, 122, "Kapillaren", "tk"), t(208, 236, "Stichkanal", "tk"),
      t(278, 112, "Nervenenden", "tk"), l(320, 274, 336, 214, "sl") + t(300, 286, "Schweißdrüse", "tk", "middle"), t(26, 186, "Blutgefäß", "tk"),
      // Schichten rechts
      l(384, 73, 404, 73, "sl"), t(410, 70, "Oberhaut (Epidermis)", "tb"), t(410, 86, "verhornt, ohne Blutgefäße", "tm"),
      l(384, 140, 404, 140, "sl"), t(410, 137, "Lederhaut (Dermis)", "tb"), t(410, 153, "Gefäße, Nerven, Haarwurzeln", "tm"),
      l(384, 232, 404, 232, "sl"), t(410, 229, "Unterhaut (Subcutis)", "tb"), t(410, 245, "Fettgewebe als Polster", "tm")
    ].join("") };

  // ---------- Ohr: Grundzeichnung (linkes Ohr, Gesicht links) ----------
  function ohr(variante) {
    var entz = variante === "perichondritis";
    var aussen = "M228 128 C222 70 270 34 318 38 C372 42 404 92 400 150 C397 200 380 238 366 270 C354 296 352 312 350 322 Q306 328 262 318 C256 300 246 292 240 282 C228 264 222 242 230 226 C236 214 236 200 230 190 C226 170 230 150 228 128 Z";
    var lappen = "M262 318 C268 336 268 356 280 372 C296 392 336 384 344 352 C347 340 349 330 350 322 Q306 328 262 318 Z";
    return [
      p(aussen, entz ? "f-entz s" : "f-kn s"),
      p(lappen, "f-derm s"),
      p("M246 136 C244 86 280 60 318 62 C360 64 382 102 378 150 C375 196 360 232 346 262", "sd b15"),
      p("M306 290 C336 260 352 214 348 170 C344 132 322 104 296 92", "s"),
      p("M346 178 C320 160 290 154 262 156", "s"),
      p("M228 150 C246 152 262 160 270 172", "s"),
      p("M270 172 C296 176 322 196 326 232 C328 262 312 284 290 290", "sd"),
      p("M286 294 C296 282 310 284 316 298", "s"),
      e(252, 236, 9, 13, "fmuted")
    ].join("");
  }
  G.ohr = { w: 560, h: 420,
    alt: "Ohrmuschel mit den Positionen von Industrial, Rook, Daith, Tragus, Conch, Snug, Helix, Anti-Tragus, Lobe und Upper Lobe. Knorpel und Ohrläppchen sind farblich unterschieden.",
    text: "Die Ohrpiercings auf einen Blick (linkes Ohr, schematisch). Alles außer dem Ohrläppchen ist Knorpel und braucht mindestens 3 Monate zum Abheilen; das Ohrläppchen ist Weichgewebe (ca. 2 Monate).",
    svg: [
      ohr(),
      // Industrial als Stab durch zwei Stichkanäle
      l(250, 104, 364, 66, "a b3"), c(250, 104, 5, "fa"), c(364, 66, 5, "fa"),
      [[300, 146], [258, 166], [232, 212], [306, 226], [346, 206], [394, 178], [308, 290], [292, 352], [326, 330]].map(function (q) { return c(q[0], q[1], 5, "fa punkt"); }).join(""),
      // links
      l(196, 100, 245, 104, "sl"), t(190, 104, "Industrial", "tb", "end"),
      l(196, 160, 253, 166, "sl"), t(190, 164, "Daith", "tb", "end"),
      l(196, 212, 227, 212, "sl"), t(190, 216, "Tragus", "tb", "end"),
      l(196, 352, 287, 352, "sl"), t(190, 356, "Lobe", "tb", "end"),
      // rechts
      l(305, 146, 424, 146, "sl"), t(430, 150, "Rook", "tb"),
      l(399, 178, 424, 178, "sl"), t(430, 182, "Helix", "tb"),
      l(351, 206, 424, 214, "sl"), t(430, 218, "Snug", "tb"),
      l(311, 226, 424, 250, "sl"), t(430, 254, "Conch", "tb"),
      l(313, 290, 424, 290, "sl"), t(430, 294, "Anti-Tragus", "tb"),
      l(331, 330, 424, 330, "sl"), t(430, 334, "Upper Lobe", "tb"),
      // Legende
      r(40, 396, 14, 14, "f-kn s1", 3), t(60, 408, "Knorpel: mindestens 3 Monate", "tm"),
      r(270, 396, 14, 14, "f-derm s1", 3), t(290, 408, "Weichgewebe (Ohrläppchen): ca. 2 Monate", "tm")
    ].join("") };

  G.perichondritis = { w: 560, h: 420,
    alt: "Ohrmuschel mit entzündetem Knorpel nach einem Helix-Piercing. Das Ohrläppchen ist nicht betroffen, weil es keinen Knorpel enthält.",
    text: "Typisches Bild einer Perichondritis (schematisch): Die Ohrmuschel ist gerötet, geschwollen und sehr schmerzhaft, das Ohrläppchen bleibt ausgespart – es enthält keinen Knorpel. Das ist ein Fall für den Arzt, und zwar sofort.",
    svg: [
      ohr("perichondritis"),
      c(394, 178, 5, "fa punkt"),
      l(399, 178, 424, 178, "sl"), t(430, 174, "Helix-Piercing", "tb"), t(430, 190, "als Eintrittspforte", "tm"),
      l(300, 110, 424, 110, "sl"), t(430, 106, "Knorpel gerötet,", "tb"), t(430, 122, "geschwollen, heiß", "tm"),
      l(306, 360, 424, 360, "sl"), t(430, 356, "Ohrläppchen", "tb"), t(430, 372, "nicht betroffen", "tm"),
      r(40, 396, 14, 14, "f-entz s1", 3), t(60, 408, "entzündeter Knorpel", "tm"),
      r(220, 396, 14, 14, "f-derm s1", 3), t(240, 408, "Ohrläppchen ohne Knorpel", "tm")
    ].join("") };

  // ---------- Modul 3: Augenbraue und Nervenaustritt ----------
  G.augenbraue = { w: 640, h: 270,
    alt: "Augenbraue von vorn, in Drittel geteilt. Im inneren Drittel treten Nervus supraorbitalis und supratrochlearis aus dem Knochen; gestochen wird im äußeren Drittel.",
    text: "Rechte Augenbraue von vorn (schematisch). Über dem inneren Drittel treten Gefühlsnerven und Gefäße aus kleinen Öffnungen im Knochen. Deshalb sticht man nur im äußeren Drittel und oberflächlich.",
    svg: '<g transform="translate(40 0)">' + [
      p("M60 30 C64 110 70 160 84 230", "sd"), t(30, 250, "Nasenrücken", "tm"),
      r(282, 52, 100, 92, "f-ok", 8), t(332, 44, "Stichzone", "tok", "middle"),
      p("M96 128 C160 110 240 98 300 100 C340 102 368 112 380 124", "sd dash"),
      p("M104 108 C170 86 250 76 306 80 C344 84 368 96 378 110 C360 104 330 98 300 98 C240 96 170 104 106 122 Z", "fbraue"),
      l(196, 64, 196, 148, "sl dash"), l(282, 56, 282, 148, "sl dash"),
      t(150, 168, "inneres Drittel", "tm", "middle"), t(240, 168, "mittleres Drittel", "tm", "middle"), t(332, 168, "äußeres Drittel", "tm", "middle"),
      p("M150 196 C180 176 230 174 262 186 C240 214 190 216 150 196 Z", "s"), c(206, 194, 12, "fmuted"),
      // Nerven
      c(150, 128, 4, "fnerv"), p("M150 128 C146 100 136 70 128 20 M150 128 C154 96 160 60 170 14 M150 128 C162 104 182 80 206 34", "nerv b2"),
      c(118, 132, 3, "fnerv"), p("M118 132 C114 108 106 70 100 24", "nerv b15"),
      // Piercing im äußeren Drittel
      p("M322 72 C330 90 330 110 324 126", "a b3"), c(322, 72, 5, "fa"), c(324, 126, 5, "fa"),
      // Beschriftung
      l(206, 30, 420, 30, "sl"), t(426, 26, "N. supraorbitalis", "tb"), t(426, 42, "Gefühlsnerv der Stirn", "tm"),
      l(104, 60, 90, 60, "sl"), t(84, 64, "N. supratrochlearis", "tm", "end"),
      l(154, 132, 420, 210, "sl"), t(426, 206, "Austrittspunkt", "tb"), t(426, 222, "am inneren Augenhöhlenrand", "tm"),
      l(330, 100, 420, 100, "sl"), t(426, 96, "Augenbrauen-", "tb"), t(426, 112, "piercing", "tb"),
      t(252, 258, "Knochenrand der Augenhöhle gestrichelt", "tm", "middle")
    ].join("") + "</g>" };

  // ---------- Modul 3: Gesicht seitlich mit N. facialis, Ductus parotideus, A. facialis ----------
  G.wange = { w: 620, h: 400,
    alt: "Gesicht von der Seite. Der Gesichtsnerv tritt vor dem Ohr aus und fächert sich zu Stirn, Wange, Mund und Kinn auf; der Speichelgang der Ohrspeicheldrüse verläuft quer über die Wange; die Gesichtsarterie zieht vom Unterkiefer zum Mundwinkel. Das Cheek-Piercing liegt mitten in diesem Bereich.",
    text: "Gesicht von der Seite (schematisch, Lage individuell verschieden). Durch die Wange laufen Äste des Gesichtsnervs, der Speichelgang der Ohrspeicheldrüse und die Gesichtsarterie. Deshalb gehört das Cheek in erfahrene Hände.",
    svg: [
      p("M170 20 C140 40 126 80 124 110 C118 130 96 150 70 176 C84 184 96 190 104 194 C100 206 96 214 100 222 C106 228 110 230 104 236 C100 244 104 252 112 258 C110 276 112 290 126 300 C170 316 250 318 300 302 C320 296 334 290 340 276", "s"),
      e(150, 122, 18, 8, "s"), c(146, 122, 4, "fink"),
      p("M100 222 C112 224 120 226 126 226", "s"),
      // Ohr
      p("M372 130 C350 140 348 200 362 232 C372 252 392 254 398 238 C410 210 412 160 400 138 C392 124 380 124 372 130 Z", "f-kn s"),
      // Ohrspeicheldrüse
      p("M336 156 C350 150 364 160 366 180 C368 210 364 246 350 262 C336 270 322 256 320 236 C318 210 322 170 336 156 Z", "f-gland s1"),
      // Jochbogen
      p("M196 168 C250 160 310 162 364 170", "sd dash b15"), t(286, 156, "Jochbogen", "tm"),
      // Ductus parotideus
      p("M326 200 C290 202 240 202 200 204 C190 206 184 212 182 222", "gang b3"),
      // A. facialis
      p("M236 312 C230 290 214 270 196 254 C170 236 140 230 124 226 M180 244 C168 214 148 186 120 160", "blut b25"),
      // N. facialis mit Ästen
      c(360, 240, 4, "fnerv"),
      p("M360 240 C340 200 320 140 292 86", "nerv b2"),
      p("M360 240 C320 200 260 170 196 146", "nerv b2"),
      p("M360 240 C310 226 240 220 170 222", "nerv b2"),
      p("M360 240 C320 244 260 248 176 244", "nerv b15"),
      p("M360 240 C330 270 280 290 170 296", "nerv b2"),
      p("M360 240 C350 290 340 330 330 380", "nerv b2"),
      // Cheek-Zone
      c(196, 236, 16, "f-risk"), c(196, 236, 4, "fa"),
      // Beschriftung rechts
      l(292, 86, 450, 70, "sl"), t(456, 66, "N. facialis (Gesichtsnerv)", "tb"), t(456, 82, "steuert die Mimik", "tm"),
      l(352, 176, 450, 130, "sl"), t(456, 126, "Ohrspeicheldrüse", "tb"),
      l(270, 202, 450, 186, "sl"), t(456, 182, "Ductus parotideus", "tb"), t(456, 198, "Speichelgang, ca. 2 cm unter", "tm"), t(456, 212, "dem Jochbogen", "tm"),
      l(220, 284, 450, 262, "sl"), t(456, 258, "A. facialis", "tb"), t(456, 274, "Gesichtsarterie", "tm"),
      l(212, 236, 450, 320, "sl"), t(456, 316, "Cheek-Piercing", "tb"), t(456, 332, "mitten in diesem Bereich", "tm")
    ].join("") };

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
        feld(160, "2", "Stechen", ["zügig, in die", "sichtbare Seite"], klemme + r(76, 50, 8, 120, "fplast s1", 2) + '<polygon points="76,170 84,170 80,186" class="fmet s1"/>' + l(80, 52, 80, 170, "met b2") + pfeil(110, 60, 110, 96, "a b2")),
        feld(320, "3", "Nadel heraus", ["Kunststoffüberzug", "bleibt im Kanal"], r(76, 96, 8, 70, "fplast s1", 2) + l(80, 36, 80, 84, "met b2 dash") + pfeil(110, 92, 110, 50, "a b2")),
        feld(480, "4", "Schmuck rein", ["drücken, nicht ziehen;", "Kunde atmet aus"], r(76, 120, 8, 64, "fplast s1", 2) + l(80, 54, 80, 128, "met b4") + kugel(80, 50, 7) + pfeil(110, 70, 110, 110, "a b2"))
      ].join("") };
  })();

  KURS.grafiken = G;
})();
