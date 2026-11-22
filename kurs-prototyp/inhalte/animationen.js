/* Schematische Schritt-Animationen (keine Fotos, keine KI): einfache SVG-Grafiken je Schritt, die nacheinander ablaufen.
   Sie stehen im Praxislabor an der Stelle eines Clips, solange es den echten Clip aus dem Studio noch nicht gibt.
   Ablauf und Begriffe folgen Modul 9 (Schritte 11–19) und den Datenblättern in Modul 8.
   Format: KURS.animationen[id] = { titel: {de,en,es}, schritte: [{ text: {de,en,es}, svg: "…" }] }
   Ansicht „lobe“: Ohrläppchen im Querschnitt von der Seite, links vorn (sichtbare Seite), rechts hinten. */
window.KURS = window.KURS || { module: [] };
(function () {
  "use strict";
  var W = 640, H = 360;
  var Y = 180; // Höhe des Stichkanals
  // Gemeinsame Verläufe und Schatten (gleiche ids in jeder Grafik, Inhalte identisch)
  var DEFS = '<defs>' +
    '<radialGradient id="aBg" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="#FFFDF9"/><stop offset="1" stop-color="#EFE7DA"/></radialGradient>' +
    '<linearGradient id="aHaut" x1="0" x2="1"><stop offset="0" stop-color="#F3CDB8"/><stop offset=".25" stop-color="#F9DDCC"/><stop offset=".75" stop-color="#F4D2BF"/><stop offset="1" stop-color="#E7B39B"/></linearGradient>' +
    '<linearGradient id="aHautOben" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFDF9" stop-opacity="1"/><stop offset="1" stop-color="#FFFDF9" stop-opacity="0"/></linearGradient>' +
    '<linearGradient id="aStahl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4F6F8"/><stop offset=".45" stop-color="#AEB7C0"/><stop offset=".6" stop-color="#8A949E"/><stop offset="1" stop-color="#D3D9DF"/></linearGradient>' +
    '<linearGradient id="aStahlV" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F4F6F8"/><stop offset=".45" stop-color="#AEB7C0"/><stop offset=".6" stop-color="#8A949E"/><stop offset="1" stop-color="#D3D9DF"/></linearGradient>' +
    '<linearGradient id="aTitan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".4" stop-color="#C9D0D8"/><stop offset=".7" stop-color="#8F99A4"/><stop offset="1" stop-color="#C3CAD2"/></linearGradient>' +
    '<radialGradient id="aKugel" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".35" stop-color="#D3D9E0"/><stop offset="1" stop-color="#7C8692"/></radialGradient>' +
    '<linearGradient id="aUeberzug" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9FBF3" stop-opacity=".95"/><stop offset=".5" stop-color="#9FDCC2" stop-opacity=".55"/><stop offset="1" stop-color="#6CBF9C" stop-opacity=".75"/></linearGradient>' +
    '<linearGradient id="aAnsatz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6CC68F"/><stop offset=".5" stop-color="#2F9A5A"/><stop offset="1" stop-color="#1F6E40"/></linearGradient>' +
    '<linearGradient id="aGelb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFD84D"/><stop offset=".6" stop-color="#F2C230"/><stop offset="1" stop-color="#D9A916"/></linearGradient>' +
    '<linearGradient id="aGold" x1="0" x2="1"><stop offset="0" stop-color="#E7CF9C"/><stop offset="1" stop-color="#B8904F"/></linearGradient>' +
    '<linearGradient id="aFadeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#FFF"/></linearGradient>' +
    '<mask id="aFade"><rect width="640" height="360" fill="#FFF"/><rect x="250" y="28" width="140" height="56" fill="url(#aFadeG)"/></mask>' +
    '<filter id="aSchatten" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#5A4632" flood-opacity=".22"/></filter>' +
    '<filter id="aWeich" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>' +
    '</defs>';
  var F = { hautRand: "#C8907A", mark: "#6B3FA0", gold: "#B8904F" };

  function buehne() {
    return '<rect width="' + W + '" height="' + H + '" fill="url(#aBg)"/>' +
      '<ellipse cx="320" cy="322" rx="190" ry="14" fill="#5A4632" opacity=".12" filter="url(#aWeich)"/>';
  }
  function etikett(x, wort, breite) {
    return '<g transform="translate(' + x + ' 26)"><rect x="' + (-breite / 2) + '" y="-15" width="' + breite + '" height="28" rx="14" fill="#FFFFFF" stroke="#E4DACB"/>' +
      '<text x="0" y="4" text-anchor="middle" class="a-txt">{' + wort + '}</text></g>';
  }
  function beschriftung() { return etikett(150, "vorne", 220) + etikett(490, "hinten", 110); }
  function lappen(kanal) {
    // Ohrläppchen im Querschnitt: Haut mit Schattierung, nach oben in die Ohrmuschel auslaufend, innen das weichere Bindegewebe
    var umriss = "M288 40 C286 120 284 200 286 248 C288 292 304 306 320 306 C338 306 354 290 355 248 C357 200 354 120 352 40 Z";
    return '<g mask="url(#aFade)"><g filter="url(#aSchatten)"><path d="' + umriss + '" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2"/></g>' +
      '<path d="M296 46 C295 120 294 200 296 246 C298 284 309 296 320 296 C333 296 344 284 345 246 C347 200 345 120 344 46 Z" fill="#FBE6DA" opacity=".55"/>' +
      '</g>' +
      (kanal ? '<line x1="287" y1="' + Y + '" x2="354" y2="' + Y + '" stroke="#B9735E" stroke-width="2.5" stroke-dasharray="4 3" opacity=".7"/>' : "");
  }
  function markierung() {
    return [286, 354].map(function (x) { return '<circle cx="' + x + '" cy="' + Y + '" r="8" fill="#FFFFFF" opacity=".8"/><circle cx="' + x + '" cy="' + Y + '" r="5" fill="' + F.mark + '"/>'; }).join("");
  }
  function klemme() {
    // Snaptile: flache Edelstahlzunge, U-förmig gebogen; die beiden Blätter liegen vorn und hinten am Ohrläppchen,
    // jedes mit einem Loch genau auf der Markierung. Unten federt der Bogen.
    function blatt(x) {
      return '<path d="M' + (x - 5) + ' 96 Q' + (x - 5) + ' 88 ' + x + ' 88 Q' + (x + 5) + ' 88 ' + (x + 5) + ' 96 L' + (x + 5) + ' ' + (Y - 9) + ' L' + (x - 5) + ' ' + (Y - 9) + ' Z" fill="url(#aStahlV)" stroke="#6F7984" stroke-width="1"/>' +
        '<path d="M' + (x - 5) + ' ' + (Y + 9) + ' L' + (x + 5) + ' ' + (Y + 9) + ' L' + (x + 5) + ' 286 L' + (x - 5) + ' 286 Z" fill="url(#aStahlV)" stroke="#6F7984" stroke-width="1"/>' +
        '<ellipse cx="' + x + '" cy="' + Y + '" rx="7" ry="11" fill="none" stroke="#6F7984" stroke-width="1.5"/>';
    }
    return '<g class="a-klemme" filter="url(#aSchatten)">' + blatt(276) + blatt(364) +
      '<path d="M276 286 C276 336 364 336 364 286" fill="none" stroke="#6F7984" stroke-width="12" stroke-linecap="butt"/>' +
      '<path d="M276 286 C276 336 364 336 364 286" fill="none" stroke="url(#aStahl)" stroke-width="9"/>' +
      '<text x="420" y="300" class="a-klein" fill="#5A4632">Snaptile</text></g>';
  }
  function kanuele(x, mitNadel, ueberzugLinks, ueberzugRechts) {
    // Venenverweilkanüle 18G: Stahlnadel im durchscheinenden Kunststoffüberzug, grüner Ansatz mit Flügeln; x = Nadelspitze
    var l = ueberzugLinks == null ? x - 190 : ueberzugLinks, r = ueberzugRechts == null ? x - 8 : ueberzugRechts, g = "";
    if (mitNadel) g += '<rect x="' + (x - 300) + '" y="' + (Y - 2.5) + '" width="' + 286 + '" height="5" rx="2.5" fill="url(#aStahl)"/>' +
      '<path d="M' + (x - 16) + " " + (Y - 2.5) + " L" + x + " " + (Y + 0.5) + " L" + (x - 16) + " " + (Y + 2.5) + 'Z" fill="url(#aStahl)" stroke="#6F7984" stroke-width=".6"/>' +
      '<rect x="' + (x - 330) + '" y="' + (Y - 11) + '" width="44" height="22" rx="6" fill="#F1F3F5" stroke="#AEB7C0"/><rect x="' + (x - 322) + '" y="' + (Y - 5) + '" width="20" height="10" rx="3" fill="#E7C4C4" opacity=".8"/>';
    g += '<rect x="' + l + '" y="' + (Y - 6.5) + '" width="' + (r - l) + '" height="13" rx="5" fill="url(#aUeberzug)" stroke="#4F9C7C" stroke-width="1.2"/>' +
      '<rect x="' + (l + 4) + '" y="' + (Y - 4.5) + '" width="' + Math.max(0, r - l - 10) + '" height="2" rx="1" fill="#FFFFFF" opacity=".8"/>';
    if (ueberzugLinks == null) g += '<g filter="url(#aSchatten)"><path d="M' + (l - 6) + " " + (Y - 26) + " l14 0 l6 16 l-6 0 z M" + (l - 6) + " " + (Y + 26) + " l14 0 l6 -16 l-6 0 z" + '" fill="url(#aAnsatz)"/>' +
      '<rect x="' + (l - 40) + '" y="' + (Y - 12) + '" width="40" height="24" rx="6" fill="url(#aAnsatz)"/>' +
      '<line x1="' + (l - 30) + '" y1="' + (Y - 8) + '" x2="' + (l - 30) + '" y2="' + (Y + 8) + '" stroke="#1F6E40" stroke-width="2"/><line x1="' + (l - 22) + '" y1="' + (Y - 8) + '" x2="' + (l - 22) + '" y2="' + (Y + 8) + '" stroke="#1F6E40" stroke-width="2"/></g>';
    return g;
  }
  function abwurf(offen) {
    return '<g filter="url(#aSchatten)"><path d="M44 252 L106 252 L100 320 L50 320 Z" fill="url(#aGelb)" stroke="#C9970F"/>' +
      '<rect x="38" y="' + (offen ? 232 : 242) + '" width="74" height="12" rx="4" fill="#C8372D" transform="rotate(' + (offen ? -8 : 0) + ' 40 244)"/>' +
      '<path d="M75 268 l12 20 l-24 0 z" fill="none" stroke="#1B1B1F" stroke-width="2.5" stroke-linejoin="round"/><text x="75" y="286" text-anchor="middle" font-size="12" font-weight="700" fill="#1B1B1F">!</text>' +
      '<text x="75" y="310" text-anchor="middle" class="a-klein" fill="#1B1B1F">{abwurf}</text></g>';
  }
  function schere(x) {
    return '<g transform="translate(' + x + ' ' + (Y - 86) + ') rotate(8)" filter="url(#aSchatten)">' +
      '<path d="M-3 30 L-14 78 L-2 40 Z" fill="url(#aStahlV)" stroke="#6F7984"/><path d="M3 30 L14 78 L2 40 Z" fill="url(#aStahlV)" stroke="#6F7984"/>' +
      '<circle cx="-13" cy="12" r="11" fill="none" stroke="#3E4650" stroke-width="5"/><circle cx="13" cy="12" r="11" fill="none" stroke="#3E4650" stroke-width="5"/>' +
      '<path d="M-6 21 L4 34 M6 21 L-4 34" stroke="#3E4650" stroke-width="5" stroke-linecap="round"/><circle cx="0" cy="33" r="3" fill="url(#aKugel)"/></g>';
  }
  function labret(x, mitKugel) {
    // Labret aus Titan: Stab mit Innengewinde vorn, flache Platte hinten; x = vorderes Stabende
    var g = '<g filter="url(#aSchatten)"><rect x="' + x + '" y="' + (Y - 4) + '" width="94" height="8" rx="4" fill="url(#aTitan)" stroke="#7D8792" stroke-width=".8"/>' +
      '<line x1="' + (x + 3) + '" y1="' + (Y - 3) + '" x2="' + (x + 3) + '" y2="' + (Y + 3) + '" stroke="#7D8792"/>' +
      '<rect x="' + (x + 92) + '" y="' + (Y - 22) + '" width="8" height="44" rx="4" fill="url(#aTitan)" stroke="#7D8792" stroke-width=".8"/>';
    if (mitKugel) g += '<circle cx="' + (x - 9) + '" cy="' + Y + '" r="11" fill="url(#aKugel)" stroke="#6F7984" stroke-width=".8"/>';
    return g + "</g>";
  }
  function kugel(cx) { return '<g filter="url(#aSchatten)"><circle cx="' + cx + '" cy="' + Y + '" r="11" fill="url(#aKugel)" stroke="#6F7984" stroke-width=".8"/></g>'; }
  function klemmzange() {
    // Klemmzange hält die Platte hinten: schlanke Backen, Gelenk, Griffe mit Fingerringen
    function arm(v) {
      return '<path d="M372 ' + (Y + v * 12) + ' L444 ' + (Y + v * 5) + ' L556 ' + (Y + v * 44) + '" fill="none" stroke="url(#aStahl)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="572" cy="' + (Y + v * 52) + '" r="15" fill="none" stroke="url(#aStahl)" stroke-width="7"/>';
    }
    return '<g filter="url(#aSchatten)">' + arm(-1) + arm(1) + '<circle cx="444" cy="' + Y + '" r="6" fill="url(#aKugel)" stroke="#6F7984"/></g>';
  }
  function pfeil(x1, x2, y) {
    var r = x2 > x1 ? 1 : -1;
    return '<g filter="url(#aSchatten)"><line x1="' + x1 + '" y1="' + y + '" x2="' + (x2 - r * 12) + '" y2="' + y + '" stroke="' + F.gold + '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M' + x2 + " " + y + " L" + (x2 - r * 16) + " " + (y - 10) + " L" + (x2 - r * 16) + " " + (y + 10) + 'Z" fill="' + F.gold + '"/></g>';
  }
  function bewegt(von, nach, inhalt) {
    return '<g class="a-bewegt" style="--a-von:' + von + 'px;--a-nach:' + nach + 'px">' + inhalt + "</g>";
  }
  function haken() {
    return '<g filter="url(#aSchatten)"><circle cx="480" cy="140" r="34" fill="#FFFFFF" stroke="#E4DACB"/><path d="M464 141 l12 13 l22 -26" fill="none" stroke="' + F.gold + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>';
  }
  function drehen() {
    return '<path d="M230 ' + (Y + 28) + ' a20 20 0 1 0 40 0" fill="none" stroke="' + F.gold + '" stroke-width="4" stroke-linecap="round"/><path d="M270 ' + (Y + 18) + ' l2 14 l-11 -4 z" fill="' + F.gold + '"/>';
  }
  function nadel(x) {
    // Stahlnadel mit Griff (ohne Überzug); x = Spitze
    return '<rect x="' + (x - 300) + '" y="' + (Y - 2.5) + '" width="286" height="5" rx="2.5" fill="url(#aStahl)"/>' +
      '<path d="M' + (x - 16) + " " + (Y - 2.5) + " L" + x + " " + (Y + 0.5) + " L" + (x - 16) + " " + (Y + 2.5) + 'Z" fill="url(#aStahl)" stroke="#6F7984" stroke-width=".6"/>' +
      '<rect x="' + (x - 330) + '" y="' + (Y - 11) + '" width="44" height="22" rx="6" fill="#F1F3F5" stroke="#AEB7C0"/><rect x="' + (x - 322) + '" y="' + (Y - 5) + '" width="20" height="10" rx="3" fill="#E7C4C4" opacity=".8"/>';
  }
  function nadelSenkrecht() {
    // Nadel fällt mit der Spitze voran in den Abwurfbehälter
    return '<g class="a-fallen"><rect x="72" y="70" width="5" height="150" rx="2.5" fill="url(#aStahlV)"/><path d="M72 220 L74.5 236 L77 220 Z" fill="url(#aStahlV)"/>' +
      '<rect x="63" y="44" width="23" height="34" rx="6" fill="#F1F3F5" stroke="#AEB7C0"/></g>';
  }
  function hinweis(x, y, zx, zy, wort, breite) {
    // Beschriftung mit Linie, die auf ein Detail zeigt
    return '<g><line x1="' + x + '" y1="' + y + '" x2="' + zx + '" y2="' + zy + '" stroke="' + F.gold + '" stroke-width="2"/><circle cx="' + zx + '" cy="' + zy + '" r="4" fill="' + F.gold + '"/>' +
      '<rect x="' + (x - breite / 2) + '" y="' + (y - 16) + '" width="' + breite + '" height="30" rx="15" fill="#FFFFFF" stroke="' + F.gold + '"/>' +
      '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" class="a-klein" fill="#5A4632">{' + wort + '}</text></g>';
  }
  function ansatzFaellt(l) {
    // abgeschnittener grüner Ansatz fällt weg
    return '<g class="a-weg-unten"><rect x="' + (l - 40) + '" y="' + (Y - 12) + '" width="44" height="24" rx="6" fill="url(#aAnsatz)"/>' +
      '<path d="M' + (l - 6) + " " + (Y - 26) + " l14 0 l6 16 l-6 0 z M" + (l - 6) + " " + (Y + 26) + " l14 0 l6 -16 l-6 0 z" + '" fill="url(#aAnsatz)"/></g>';
  }
  function klemmzangeVorn() {
    // Klemmzange fasst den Stab vorn, kurz vor dem Gewinde; Griffe nach unten links
    function arm(v) {
      return '<path d="M' + (272 + v * 3) + ' ' + (Y + v * 7) + ' L262 ' + (Y + 34) + ' L' + (200 + v * 26) + ' 300" fill="none" stroke="url(#aStahlV)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="' + (192 + v * 30) + '" cy="312" r="13" fill="none" stroke="url(#aStahlV)" stroke-width="6"/>';
    }
    return '<g filter="url(#aSchatten)">' + arm(-1) + arm(1) + '<circle cx="262" cy="' + (Y + 34) + '" r="5" fill="url(#aKugel)" stroke="#6F7984"/></g>';
  }
  function kugelgreifer(cx) {
    // Kugelgreifer hält die Kugel von links, Griff flach nach links oben
    return '<g filter="url(#aSchatten)"><path d="M' + (cx - 8) + ' ' + (Y - 7) + ' L' + (cx - 150) + ' ' + (Y - 70) + '" stroke="url(#aStahl)" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M' + (cx - 6) + ' ' + (Y - 11) + ' L' + (cx - 140) + ' ' + (Y - 82) + '" stroke="url(#aStahl)" stroke-width="6" stroke-linecap="round"/>' +
      '<rect x="' + (cx - 196) + '" y="' + (Y - 100) + '" width="52" height="26" rx="8" fill="#3E4650" transform="rotate(25 ' + (cx - 170) + ' ' + (Y - 87) + ')"/></g>';
  }
  function bild(inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + beschriftung() + inhalt + "</svg>";
  }

  var T = {
    vorne: { de: "vorn (sichtbare Seite)", en: "front (visible side)", es: "delante (lado visible)" },
    hinten: { de: "hinten", en: "back", es: "detrás" },
    abwurf: { de: "Abwurf", en: "sharps", es: "agujas" },
    roehrchen: { de: "Röhrchen bleibt im Stichkanal", en: "tube stays in the channel", es: "el tubo se queda en el canal" },
    ansatz: { de: "Ansatz abschneiden", en: "cut off the hub", es: "cortar el cono" },
    gewinde: { de: "Klemmzange kurz vor dem Gewinde", en: "forceps just before the thread", es: "pinzas justo antes de la rosca" }
  };

  var lobe = [
    { text: { de: "Ein- und Austrittsstelle sind markiert und desinfiziert. Das Snaptile wird angelegt: Die Markierungen liegen genau in seinen beiden Löchern.",
        en: "Entry and exit points are marked and disinfected. The Snaptile is put on so that the marks sit exactly in its two holes.",
        es: "Los puntos de entrada y salida están marcados y desinfectados. Se coloca el Snaptile de modo que las marcas queden justo en sus dos orificios." },
      svg: bild(lappen(false) + markierung() + bewegt(-60, 0, klemme())) },
    { text: { de: "Gestochen wird von vorn, von der sichtbaren Seite aus: ein zügiger, gerader Stich durch die Löcher des Snaptiles und beide Markierungen.",
        en: "You pierce from the front, from the visible side: one swift, straight motion through the Snaptile holes and both marks.",
        es: "Se perfora desde delante, desde el lado visible: un movimiento rápido y recto a través de los orificios del Snaptile y de ambas marcas." },
      svg: bild(lappen(false) + markierung() + klemme() + bewegt(-150, 0, kanuele(390, true)) + pfeil(200, 260, 140)) },
    { text: { de: "Die Stahlnadel wird nach vorn herausgezogen. Das transparente Kunststoffröhrchen bleibt im Stichkanal.",
        en: "The steel needle is pulled out towards the front. The clear plastic tube stays in the channel.",
        es: "La aguja de acero se retira hacia delante. El tubo de plástico transparente se queda en el canal." },
      svg: bild(lappen(true) + kanuele(390, false) + bewegt(0, -230, nadel(390)) + pfeil(250, 170, 140) + hinweis(470, 110, 340, Y - 7, "roehrchen", 230)) },
    { text: { de: "Die Nadel kommt sofort in den Nadelabwurfbehälter, nie zurück in die Schutzkappe und nie auf den Tisch.",
        en: "The needle goes straight into the sharps container, never back into its cap and never onto the table.",
        es: "La aguja va directamente al contenedor de objetos punzantes, nunca de nuevo al capuchón ni sobre la mesa." },
      svg: bild(lappen(true) + kanuele(390, false) + nadelSenkrecht() + abwurf(true) + hinweis(470, 110, 340, Y - 7, "roehrchen", 230)) },
    { text: { de: "Vorn den grünen Kunststoffansatz mit der Schere abschneiden. Übrig bleibt nur das transparente Röhrchen im Stichkanal.",
        en: "At the front, cut off the green plastic hub with scissors. Only the clear tube is left in the channel.",
        es: "Delante, corta con las tijeras el cono de plástico verde. Solo queda el tubo transparente en el canal." },
      svg: bild(lappen(true) + kanuele(390, false, 200, 382) + ansatzFaellt(200) + schere(214) + '<line x1="206" y1="' + (Y - 20) + '" x2="206" y2="' + (Y + 20) + '" stroke="' + F.gold + '" stroke-width="2.5" stroke-dasharray="4 3"/>' + hinweis(140, 268, 206, Y + 14, "ansatz", 170)) },
    { text: { de: "Den Ersteinsatz in das Röhrchen stecken: beim Labret den Stab von hinten, die Platte bleibt hinten.",
        en: "Insert the initial jewelry into the tube: with a labret, the post goes in from the back and the disc stays at the back.",
        es: "Introduce la joya inicial en el tubo: en el labret, la barra entra por detrás y el disco se queda detrás." },
      svg: bild(lappen(true) + kanuele(390, false, 206, 382) + bewegt(80, 0, labret(382, false)) + pfeil(530, 480, 230)) },
    { text: { de: "Den Schmuck durch den Stichkanal drücken, nicht ziehen. Das Röhrchen wird dabei vorn hinausgeschoben. Den Kunden dabei ausatmen lassen.",
        en: "Push the jewelry through the channel, do not pull. This pushes the tube out at the front. Have the client breathe out while you do it.",
        es: "Empuja la joya a través del canal, no tires. Así el tubo sale por delante. Pide al cliente que espire mientras lo haces." },
      svg: bild(lappen(true) + bewegt(0, -124, kanuele(390, false, 206, 382)) + bewegt(0, -124, labret(382, false)) + pfeil(480, 420, 230)) },
    { text: { de: "Das Röhrchen vorsichtig vom Schmuck abziehen. Der Stab steckt jetzt im Stichkanal, die Platte liegt hinten an.",
        en: "Carefully pull the tube off the jewelry. The post now sits in the channel, with the disc resting at the back.",
        es: "Retira con cuidado el tubo de la joya. La barra ya está en el canal y el disco queda apoyado detrás." },
      svg: bild(lappen(true) + '<g class="a-weg-links">' + kanuele(390, false, 82, 258) + "</g>" + labret(258, false)) },
    { text: { de: "Die Klemmzange vorn kurz vor dem Gewinde ansetzen, damit sich der Stab nicht mitdreht. Dann die Kugel mit dem Kugelgreifer aufschrauben, bis sie fest sitzt.",
        en: "Place the forceps at the front, just before the thread, so the post does not turn. Then screw the ball on with the ball grabber until it is tight.",
        es: "Coloca las pinzas delante, justo antes de la rosca, para que la barra no gire. Después enrosca la bola con el agarrador de bolas hasta que quede firme." },
      svg: bild(lappen(true) + labret(258, false) + klemmzangeVorn() + bewegt(-70, 0, kugel(249) + kugelgreifer(249)) + drehen() + hinweis(470, 300, 272, Y + 6, "gewinde", 260)) },
    { text: { de: "Fertig: Kugel vorn auf der sichtbaren Seite, Platte hinten. Nochmals mit Kodan einsprühen und dem Kunden das Piercing im Spiegel zeigen.",
        en: "Done: ball at the front on the visible side, disc at the back. Spray with Kodan once more and show the client the piercing in the mirror.",
        es: "Listo: bola delante en el lado visible y disco detrás. Vuelve a pulverizar con Kodan y enséñale el piercing al cliente en el espejo." },
      svg: bild(lappen(true) + labret(258, true) + haken()) }
  ];

  KURS.animationen = {
    "labor-lobe": {
      titel: { de: "Animation: Lobe stechen und Labret einsetzen", en: "Animation: piercing the lobe and inserting a labret", es: "Animación: perforar el lóbulo y colocar un labret" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: lobe,
      woerter: T
    }
  };
})();
