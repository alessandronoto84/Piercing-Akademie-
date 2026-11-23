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
    '<linearGradient id="aGrau" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C7CCD1"/><stop offset=".5" stop-color="#8E959C"/><stop offset="1" stop-color="#5F666D"/></linearGradient>' +
    '<linearGradient id="aFadeU" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF"/><stop offset="1" stop-color="#000"/></linearGradient>' +
    '<mask id="aFadeUnten"><rect width="640" height="360" fill="#FFF"/><rect x="250" y="270" width="140" height="70" fill="url(#aFadeU)"/></mask>' +
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
  // ---------- Ansicht von vorn: stilisiertes Ohr (rechtes Ohr, Gesicht links) ----------
  var OHR = {
    aussen: "M262 118 C258 70 292 34 342 32 C398 30 436 70 438 128 C440 172 424 204 408 232 C396 254 392 270 392 292 C392 322 372 344 344 344 C316 344 300 326 298 304 C296 286 286 276 274 262 C262 248 258 232 262 214 C266 196 280 190 280 174 C280 156 264 146 262 118 Z",
    helixInnen: "M286 120 C286 86 312 60 346 60 C388 60 412 92 412 132 C412 168 398 194 386 216",
    anthelix: "M318 112 C340 104 372 110 384 132 C394 152 388 182 374 206 C362 228 352 244 350 262",
    concha: "M306 172 C318 156 346 156 360 174 C372 192 366 222 348 236 C332 248 312 244 302 228 C294 214 296 186 306 172 Z",
    tragus: "M276 214 C268 226 270 244 282 252 C290 246 292 226 286 214 Z",
    lappenLinie: "M300 292 C320 286 360 286 384 292"
  };
  function ohrVorn() {
    return '<g filter="url(#aSchatten)"><path d="' + OHR.aussen + '" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2"/></g>' +
      '<path d="' + OHR.concha + '" fill="#E7B49C" opacity=".75"/>' +
      '<g fill="none" stroke="' + F.hautRand + '" stroke-width="2.2" stroke-linecap="round" opacity=".85"><path d="' + OHR.helixInnen + '"/><path d="' + OHR.anthelix + '"/></g>' +
      '<path d="' + OHR.tragus + '" fill="#F3CDB8" stroke="' + F.hautRand + '" stroke-width="1.6"/>' +
      '<path d="M230 40 C214 120 214 250 236 340" fill="none" stroke="#E8DCCB" stroke-width="2" stroke-dasharray="5 6"/>' +
      '<text x="196" y="190" class="a-klein" fill="#9A8E7E" transform="rotate(-90 196 190)">{gesicht}</text>';
  }
  function punkt(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="7" fill="#FFFFFF" opacity=".85"/><circle cx="' + x + '" cy="' + y + '" r="4.5" fill="' + F.mark + '"/>'; }
  function kugelVorn(x, y, r) { return '<g filter="url(#aSchatten)"><circle cx="' + x + '" cy="' + y + '" r="' + (r || 7) + '" fill="url(#aKugel)" stroke="#6F7984" stroke-width=".8"/></g>'; }
  function bildVorn(inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + etikett(530, "ansichtVorn", 170) + ohrVorn() + inhalt + "</svg>";
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
    ohrloch: { de: "herkömmliches Ohrloch", en: "standard lobe hole", es: "agujero habitual" },
    gleicherAbstand: { de: "gleicher Abstand", en: "equal gaps", es: "misma distancia" },
    fertig1: { de: "1: fertig", en: "1: done", es: "1: listo" },
    dran2: { de: "2: Röhrchen steckt", en: "2: tube in place", es: "2: tubo colocado" },
    knorpel: { de: "Knorpel", en: "cartilage", es: "cartílago" },
    ringOeffnen: { de: "Ring öffnen, Kugel heraus", en: "open ring, take out ball", es: "abrir el aro, sacar la bola" },
    kugelRastet: { de: "Kugel rastet fest ein", en: "ball snaps into place", es: "la bola encaja firme" },
    stichrichtung: { de: "Strich = Stichrichtung", en: "line = direction", es: "línea = dirección" },
    steril: { de: "sterile Verpackung", en: "sterile pack", es: "envase estéril" },
    inReichweite: { de: "in Reichweite der Arbeitshand", en: "within reach of your working hand", es: "al alcance de la mano de trabajo" },
    geradeAb: { de: "gerade abziehen", en: "pull off straight", es: "retirar recto" },
    griff: { de: "am Griff", en: "by the grip", es: "por el mango" },
    nieZurueck: { de: "Kappe nie zurück", en: "never recap", es: "nunca recapuchar" },
    kugelgreifer: { de: "Kugelgreifer", en: "ball grabber", es: "pinza de bolas" },
    festPruefen: { de: "sitzt fest", en: "sits firmly", es: "bien firme" },
    ersteinsatzAbheilung: { de: "Wechsel erst nach Abheilung", en: "change only after healing", es: "cambio solo tras cicatrizar" },
    einverstaendnis: { de: "Einverständnis", en: "Consent", es: "Consentimiento" },
    pflegehinweise: { de: "Pflegehinweise", en: "Aftercare", es: "Cuidados" },
    welchesPiercing: { de: "Welches Piercing?", en: "Which piercing?", es: "¿Qué piercing?" },
    allesGut: { de: "Alles gut?", en: "All good?", es: "¿Todo bien?" },
    passtEs: { de: "Passt es so?", en: "Is it right?", es: "¿Está bien así?" },
    knorpelTragus: { de: "Knorpel (Tragus)", en: "cartilage (tragus)", es: "cartílago (trago)" },
    vorneTragus: { de: "vorn (sichtbare Seite)", en: "front (visible side)", es: "delante (lado visible)" },
    gehoergang: { de: "Gehörgang", en: "ear canal", es: "conducto auditivo" },
    tragusStelle: { de: "Mitte des Tragus", en: "middle of the tragus", es: "centro del trago" },
    kan16: { de: "Kanüle 16G", en: "16G cannula", es: "cánula 16G" },
    kan18: { de: "Kanüle 18G", en: "18G cannula", es: "cánula 18G" },
    freihand: { de: "freihand", en: "freehand", es: "a mano alzada" },
    kugelAuf: { de: "Kugel aufdrehen", en: "screw on the ball", es: "enroscar la bola" },
    nur23: { de: "nur 2–3 mm ins Röhrchen", en: "only 2–3 mm into the tube", es: "solo 2–3 mm en el tubo" },
    ueberlaenge: { de: "Überlänge ca. 4 mm", en: "extra length approx. 4 mm", es: "longitud extra aprox. 4 mm" },
    kugelSchonDrauf: { de: "Kugel schon drauf", en: "ball already on", es: "bola ya puesta" },
    zweiteKugel: { de: "nur noch 2. Kugel", en: "only the 2nd ball", es: "solo la 2.ª bola" },
    ringOffen: { de: "Ring bleibt offen", en: "ring stays open", es: "el aro queda abierto" },
    leichteDrehung: { de: "mit leichter Drehung", en: "with a slight twist", es: "con un ligero giro" },
    leichtOeffnen: { de: "leicht öffnen", en: "open slightly", es: "abrir un poco" },
    kugelPinzette: { de: "Kugel mit Pinzette", en: "ball with tweezers", es: "bola con pinzas" },
    oben: { de: "oben", en: "upper", es: "arriba" },
    unten: { de: "unten", en: "lower", es: "abajo" },
    g16oben: { de: "oben: 16G, freihand", en: "upper: 16G, freehand", es: "arriba: 16G, a mano" },
    g16unten: { de: "unten: 16G, freihand", en: "lower: 16G, freehand", es: "abajo: 16G, a mano" },
    roehrchen1: { de: "1. Röhrchen", en: "1st tube", es: "1.er tubo" },
    roehrchen2: { de: "2. Röhrchen", en: "2nd tube", es: "2.º tubo" },
    nahKopf: { de: "nahe dem Kopf", en: "close to the head", es: "cerca de la cabeza" },
    aussenRand: { de: "äußerer Rand", en: "outer rim", es: "borde exterior" },
    gerade: { de: "gerade Verbindung", en: "straight line", es: "línea recta" },
    g16: { de: "16G, freihand", en: "16G, freehand", es: "16G, a mano alzada" },
    ansichtVorn: { de: "Ansicht von vorn", en: "front view", es: "vista frontal" },
    gesicht: { de: "Gesicht", en: "face", es: "cara" },
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
    { text: { de: "Den Ersteinsatz nur 2–3 mm in das Röhrchen stecken: beim Labret den Stab von hinten, die Platte bleibt hinten.",
        en: "Insert the initial jewelry only 2–3 mm into the tube: with a labret, the post goes in from the back and the disc stays at the back.",
        es: "Introduce la joya inicial solo 2–3 mm en el tubo: en el labret, la barra entra por detrás y el disco se queda detrás." },
      svg: bild(lappen(true) + kanuele(390, false, 206, 382) + bewegt(80, 0, labret(370, false)) + pfeil(530, 480, 230) + hinweis(470, 300, 376, Y + 6, "nur23", 190)) },
    { text: { de: "Den Schmuck durch den Stichkanal drücken, nicht ziehen. Das Röhrchen wird dabei vorn hinausgeschoben. Den Kunden dabei ausatmen lassen.",
        en: "Push the jewelry through the channel, do not pull. This pushes the tube out at the front. Have the client breathe out while you do it.",
        es: "Empuja la joya a través del canal, no tires. Así el tubo sale por delante. Pide al cliente que espire mientras lo haces." },
      svg: bild(lappen(true) + bewegt(0, -112, kanuele(390, false, 206, 382)) + bewegt(0, -112, labret(370, false)) + pfeil(480, 420, 230)) },
    { text: { de: "Das Röhrchen vorsichtig vom Schmuck abziehen. Der Stab steckt jetzt im Stichkanal, die Platte liegt hinten an.",
        en: "Carefully pull the tube off the jewelry. The post now sits in the channel, with the disc resting at the back.",
        es: "Retira con cuidado el tubo de la joya. La barra ya está en el canal y el disco queda apoyado detrás." },
      svg: bild(lappen(true) + '<g class="a-weg-links">' + kanuele(390, false, 94, 270) + "</g>" + labret(258, false)) },
    { text: { de: "Die Klemmzange vorn kurz vor dem Gewinde ansetzen, damit sich der Stab nicht mitdreht. Dann die Kugel mit dem Kugelgreifer aufschrauben, bis sie fest sitzt.",
        en: "Place the forceps at the front, just before the thread, so the post does not turn. Then screw the ball on with the ball grabber until it is tight.",
        es: "Coloca las pinzas delante, justo antes de la rosca, para que la barra no gire. Después enrosca la bola con el agarrador de bolas hasta que quede firme." },
      svg: bild(lappen(true) + labret(258, false) + klemmzangeVorn() + bewegt(-70, 0, kugel(249) + kugelgreifer(249)) + drehen() + hinweis(470, 300, 272, Y + 6, "gewinde", 260)) },
    { text: { de: "Fertig: Kugel vorn auf der sichtbaren Seite, Platte hinten. Nochmals mit Kodan einsprühen und dem Kunden das Piercing im Spiegel zeigen.",
        en: "Done: ball at the front on the visible side, disc at the back. Spray with Kodan once more and show the client the piercing in the mirror.",
        es: "Listo: bola delante en el lado visible y disco detrás. Vuelve a pulverizar con Kodan y enséñale el piercing al cliente en el espejo." },
      svg: bild(lappen(true) + labret(258, true) + hinweis(150, 300, 272, Y + 8, "ueberlaenge", 180) + haken()) }
  ];


  // ---------- Upper Lobe: drei in einer Reihe (Ansicht von vorn) ----------
  var UL = [[354, 306], [370, 290], [379, 270]], LOCH = [336, 320];
  function messschieber() {
    var x1 = UL[0][0] - 10, y1 = UL[0][1] + 22, x2 = UL[2][0] + 10, y2 = UL[2][1] + 22;
    return '<g filter="url(#aSchatten)" transform="rotate(-50 ' + x1 + ' ' + y1 + ')"><rect x="' + (x1 - 20) + '" y="' + (y1 + 6) + '" width="150" height="12" rx="3" fill="url(#aStahl)" stroke="#6F7984"/>' +
      Array.apply(null, Array(14)).map(function (_, k) { return '<line x1="' + (x1 - 14 + k * 10) + '" y1="' + (y1 + 6) + '" x2="' + (x1 - 14 + k * 10) + '" y2="' + (y1 + (k % 2 ? 10 : 13)) + '" stroke="#5A6470" stroke-width="1"/>'; }).join("") +
      '<rect x="' + (x1 - 26) + '" y="' + (y1 - 16) + '" width="8" height="34" rx="2" fill="url(#aStahlV)" stroke="#6F7984"/><rect x="' + (x1 + 14) + '" y="' + (y1 - 16) + '" width="8" height="34" rx="2" fill="url(#aStahlV)" stroke="#6F7984"/></g>' +
      '<g stroke="' + F.gold + '" stroke-width="2.5" fill="none">' + [0, 1].map(function (k) {
        var a = UL[k], b = UL[k + 1]; return '<path d="M' + (a[0] + 12) + ' ' + (a[1] + 6) + ' Q' + ((a[0] + b[0]) / 2 + 22) + ' ' + ((a[1] + b[1]) / 2 + 10) + ' ' + (b[0] + 12) + ' ' + (b[1] + 6) + '"/>';
      }).join("") + '</g>';
  }
  function hubVorn(x, y) { return '<g filter="url(#aSchatten)"><circle cx="' + x + '" cy="' + y + '" r="11" fill="url(#aAnsatz)"/><circle cx="' + x + '" cy="' + y + '" r="4" fill="#E9FBF3"/></g>'; }
  var upperLobe = [
    { text: { de: "Ansicht von vorn: Neben dem herkömmlichen Ohrloch werden drei Punkte im oberen Ohrläppchen angezeichnet: in gleichem Abstand und in einem leichten Bogen, der der Rundung des Ohrs folgt.",
        en: "Front view: next to the standard lobe hole, three points are marked in the upper lobe: evenly spaced and in a gentle curve that follows the rounding of the ear.",
        es: "Vista frontal: junto al agujero habitual del lóbulo se marcan tres puntos en la parte superior del lóbulo: a la misma distancia y en una ligera curva que sigue el contorno de la oreja." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + hinweis(470, 330, LOCH[0] + 8, LOCH[1], "ohrloch", 190) + '<g class="a-erscheinen">' + UL.map(function (q) { return punkt(q[0], q[1]); }).join("") + "</g>") },
    { text: { de: "Erst nachmessen: Mit dem Messschieber prüfen, ob die Abstände gleich sind und der Bogen der Ohrrundung folgt. Gestochen wird erst, wenn alles stimmt.",
        en: "Measure first: use the caliper to check that the gaps are equal and the curve follows the rounding of the ear. Only pierce once everything is right.",
        es: "Primero mide: comprueba con el pie de rey que las distancias son iguales y que la curva sigue el contorno de la oreja. Solo se perfora cuando todo está bien." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + UL.map(function (q) { return punkt(q[0], q[1]); }).join("") + bewegt(-40, 0, messschieber()) + hinweis(150, 300, UL[1][0] + 20, UL[1][1] + 14, "gleicherAbstand", 180)) },
    { text: { de: "Dann Punkt für Punkt stechen, genau wie beim Lobe: Snaptile, Stich von vorn, Nadel sofort in den Abwurf, Ansatz vorn abschneiden, Labret von hinten, Kugel vorn aufschrauben.",
        en: "Then pierce point by point, exactly like the lobe: Snaptile, pierce from the front, needle straight into the sharps container, cut the hub off at the front, labret from the back, screw the ball on at the front.",
        es: "Después perfora punto por punto, igual que el lóbulo: Snaptile, perforar desde delante, aguja directa al contenedor, cortar el cono delante, labret por detrás y enroscar la bola delante." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + kugelVorn(UL[0][0], UL[0][1]) + '<g class="a-erscheinen">' + hubVorn(UL[1][0], UL[1][1]) + "</g>" + punkt(UL[2][0], UL[2][1]) +
        hinweis(150, 250, UL[0][0] - 8, UL[0][1], "fertig1", 150) + hinweis(500, 220, UL[1][0] + 12, UL[1][1] - 4, "dran2", 200)) },
    { text: { de: "Fertig: drei Labrets in einem Bogen entlang der Ohrrundung. Von vorn ein Foto machen und die Reihe beurteilen: gleiche Abstände, harmonischer Bogen?",
        en: "Done: three labrets in a curve along the rounding of the ear. Take a photo from the front and judge the row: equal gaps, a smooth curve?",
        es: "Listo: tres labrets en una curva que sigue el contorno de la oreja. Haz una foto de frente y valora la fila: ¿distancias iguales, curva armoniosa?" },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + UL.map(function (q) { return kugelVorn(q[0], q[1]); }).join("") +
        '<path d="M' + LOCH[0] + ' ' + LOCH[1] + ' Q' + (UL[1][0] + 14) + ' ' + (UL[1][1] + 12) + ' ' + (UL[2][0] + 2) + ' ' + (UL[2][1] - 18) + '" fill="none" stroke="' + F.gold + '" stroke-width="2" stroke-dasharray="5 5"/>' + haken()) }
  ];


  // ---------- Helix: Ohrkante im Querschnitt, Klemmkugelring (BCR) ----------
  var RC = [320, 138], RR = 52; // Ring um die Ohrkante
  function rand() {
    return '<g mask="url(#aFadeUnten)"><g filter="url(#aSchatten)"><path d="M287 340 L287 142 C287 112 302 96 320 96 C338 96 354 112 354 142 L354 340 Z" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2"/></g>' +
      '<path d="M300 340 L300 144 C300 122 309 110 320 110 C331 110 341 122 341 144 L341 340 Z" fill="#EEF3F4" opacity=".8"/></g>' +
      '<text x="320" y="125" text-anchor="middle" class="a-klein" fill="#7C8A90">{knorpel}</text>';
  }
  function randKanal() { return '<line x1="288" y1="' + Y + '" x2="353" y2="' + Y + '" stroke="#B9735E" stroke-width="2.5" stroke-dasharray="4 3" opacity=".7"/>'; }
  function ringBogen(klasse, luecke) {
    // Ring im Querschnitt um die Ohrkante. Ohne Klasse: fester Ring mit Lücke oben vorn (dort sitzt die Kugel).
    // Mit Klasse „a-zeichnen“: der Ring wird durch den Stichkanal hindurch eingezeichnet.
    var p = function (g) { var w = g * Math.PI / 180; return (RC[0] + RR * Math.cos(w)).toFixed(1) + " " + (RC[1] + RR * Math.sin(w)).toFixed(1); };
    var d = klasse ? "M" + p(10) + " A" + RR + " " + RR + " 0 1 1 " + p(-18) : luecke ? "M" + p(238) + " A" + RR + " " + RR + " 0 1 1 " + p(212) : "M" + p(0) + " A" + RR + " " + RR + " 0 1 1 " + p(-0.5);
    var u = 2 * Math.PI * RR, st = klasse ? ' class="' + klasse + '" stroke-dasharray="' + u + '" style="--a-laenge:' + u + '"' : "";
    return '<path d="' + d + '" fill="none" stroke="#7D8792" stroke-width="9" stroke-linecap="round"' + st + "/>" +
      '<path d="' + d + '" fill="none" stroke="url(#aTitan)" stroke-width="6" stroke-linecap="round"' + st + "/>";
  }
  var RKUGEL = [RC[0] + RR * Math.cos(225 * Math.PI / 180), RC[1] + RR * Math.sin(225 * Math.PI / 180)];
  function bcrVorn(x, y, offen) {
    // Klemmkugelring seitlich daneben (Draufsicht), offen = gespreizt ohne Kugel
    var g = '<g filter="url(#aSchatten)"><path d="' + (offen ? "M" + (x - 10) + " " + (y + 38) + " A40 40 0 1 1 " + (x + 18) + " " + (y + 36) : "M" + (x - 8) + " " + (y + 39) + " A40 40 0 1 1 " + (x + 8) + " " + (y + 39)) + '" fill="none" stroke="url(#aTitan)" stroke-width="7" stroke-linecap="round"/>';
    g += offen ? '<circle cx="' + (x + 60) + '" cy="' + (y + 50) + '" r="10" fill="url(#aKugel)" stroke="#6F7984"/>' : '<circle cx="' + x + '" cy="' + (y + 40) + '" r="10" fill="url(#aKugel)" stroke="#6F7984"/>';
    return g + "</g>";
  }
  function zange(x, y, oeffnen) {
    // Ringzange: zwei gekreuzte Arme mit Griffen; oeffnen = Spitzen auseinander (Ringöffnungszange), sonst zusammen (Ringschließzange)
    var s1 = oeffnen ? 14 : 4;
    return '<g filter="url(#aSchatten)" transform="translate(' + x + ' ' + y + ')">' +
      '<path d="M' + (-s1) + ' 0 L18 60 L10 130" fill="none" stroke="url(#aStahlV)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M' + s1 + ' 0 L-18 60 L-10 130" fill="none" stroke="url(#aStahlV)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M18 60 L10 130 M-18 60 L-10 130" stroke="#C8372D" stroke-width="10" stroke-linecap="round" opacity=".85"/>' +
      '<circle cx="0" cy="34" r="5" fill="url(#aKugel)" stroke="#6F7984"/></g>';
  }
  function bildRand(inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + beschriftung() + rand() + inhalt + "</svg>";
  }
  function pinzette(x, y) {
    // Pinzette hält die Kugel von oben rechts
    return '<g filter="url(#aSchatten)"><path d="M' + (x + 6) + ' ' + (y - 4) + ' L' + (x + 120) + ' ' + (y - 92) + '" stroke="url(#aStahl)" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M' + (x + 9) + ' ' + (y + 3) + ' L' + (x + 130) + ' ' + (y - 80) + '" stroke="url(#aStahl)" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M' + (x + 120) + ' ' + (y - 92) + ' L' + (x + 130) + ' ' + (y - 80) + '" stroke="#6F7984" stroke-width="5" stroke-linecap="round"/></g>';
  }
  function drehpfeil(x, y) {
    return '<g fill="none" stroke="' + F.gold + '" stroke-width="3.5" stroke-linecap="round"><path d="M' + (x - 16) + ' ' + y + ' a16 10 0 1 0 32 0"/></g><path d="M' + (x + 16) + ' ' + (y - 8) + ' l3 10 l-10 -2 z" fill="' + F.gold + '"/>';
  }
  var helix = [
    { text: { de: "Die Ohrkante im Querschnitt, innen der Knorpel. Die Stelle ist markiert (Datenblatt Helix) und mit dem Snaptile fixiert.",
        en: "The ear rim in cross-section, with the cartilage inside. The spot is marked (Helix data sheet) and fixed with the Snaptile.",
        es: "El borde de la oreja en corte, con el cartílago dentro. El punto está marcado (ficha técnica Helix) y fijado con el Snaptile." },
      svg: bildRand(markierung() + bewegt(-60, 0, klemme())) },
    { text: { de: "Mit der 18G-Kanüle zügig von vorn stechen, gerade durch beide Markierungen.",
        en: "Pierce swiftly from the front with the 18G cannula, straight through both marks.",
        es: "Perfora con rapidez desde delante con la cánula 18G, recto a través de ambas marcas." },
      svg: bildRand(markierung() + klemme() + bewegt(-150, 0, kanuele(390, true)) + pfeil(200, 260, 140)) },
    { text: { de: "Nadel herausziehen und sofort in den Abwurfbehälter. Das transparente Röhrchen bleibt im Stichkanal.",
        en: "Pull the needle out and put it straight into the sharps container. The clear tube stays in the channel.",
        es: "Retira la aguja y échala directamente al contenedor. El tubo transparente se queda en el canal." },
      svg: bildRand(randKanal() + kanuele(390, false) + nadelSenkrecht() + abwurf(true) + hinweis(480, 240, 340, Y + 7, "roehrchen", 230)) },
    { text: { de: "Vorn den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "At the front, cut off the green hub with scissors so only the tube is left.",
        es: "Delante, corta el cono verde con las tijeras para que solo quede el tubo." },
      svg: bildRand(randKanal() + kanuele(390, false, 200, 382) + ansatzFaellt(200) + schere(214)) },
    { text: { de: "Den Klemmkugelring mit der Ringöffnungszange öffnen und die Kugel herausnehmen. Der Ring bleibt ab jetzt offen.",
        en: "Open the ball closure ring with the ring-opening pliers and take out the ball. From now on, the ring stays open.",
        es: "Abre el aro de bola cautiva con los alicates de apertura y saca la bola. A partir de ahora, el aro queda abierto." },
      svg: bildRand(randKanal() + kanuele(390, false, 206, 382) + bcrVorn(520, 120, true) + zange(500, 168, true) + hinweis(470, 330, 520, 162, "ringOffen", 200)) },
    { text: { de: "Ein Ende des offenen Rings nur 2–3 mm hinten in das Röhrchen stecken und mit einer leichten Drehung nachschieben. Das Röhrchen wird dabei vorn hinausgeschoben.",
        en: "Put one end of the open ring only 2–3 mm into the tube at the back and push it after with a slight twist. This pushes the tube out at the front.",
        es: "Mete un extremo del aro abierto solo 2–3 mm en el tubo por detrás y empújalo con un ligero giro. Así el tubo sale por delante." },
      svg: bildRand(randKanal() + bewegt(0, -110, kanuele(390, false, 206, 382)) + ringBogen("a-zeichnen", true) + drehpfeil(392, 120) + hinweis(510, 300, 396, 132, "leichteDrehung", 190)) },
    { text: { de: "Röhrchen abziehen. Den Ring mit der Ringöffnungszange wieder leicht öffnen, damit die Kugel Platz hat.",
        en: "Remove the tube. Open the ring slightly again with the ring-opening pliers so the ball fits.",
        es: "Retira el tubo. Vuelve a abrir un poco el aro con los alicates de apertura para que quepa la bola." },
      svg: bildRand('<g transform="translate(-110 0)"><g class="a-weg-links">' + kanuele(390, false, 206, 382) + "</g></g>" + ringBogen("", true) + bewegt(80, 0, zange(RKUGEL[0] - 4, RKUGEL[1] + 4, true)) + hinweis(500, 120, RKUGEL[0] + 6, RKUGEL[1] - 4, "leichtOeffnen", 190)) },
    { text: { de: "Die Kugel mit der Pinzette in die Lücke setzen. Der Ring hält sie mit seiner Spannung fest.",
        en: "Use tweezers to place the ball into the gap. The ring holds it firmly with its tension.",
        es: "Coloca la bola en el hueco con las pinzas. El aro la sujeta con su propia tensión." },
      svg: bildRand(ringBogen("", true) + bewegt(60, 0, kugelVorn(RKUGEL[0], RKUGEL[1], 9) + pinzette(RKUGEL[0], RKUGEL[1])) + hinweis(140, 230, RKUGEL[0] - 4, RKUGEL[1] + 6, "kugelPinzette", 190)) },
    { text: { de: "Fertig: Der Ring umschließt die Ohrkante, die Kugel sitzt fest. Gestochen wird hier nur ins Silikonohr.",
        en: "Done: the ring wraps around the ear rim and the ball is secure. Here you only pierce the silicone ear.",
        es: "Listo: el aro rodea el borde de la oreja y la bola está firme. Aquí solo se perfora la oreja de silicona." },
      svg: bildRand(ringBogen("", true) + kugelVorn(RKUGEL[0], RKUGEL[1], 9) + haken()) }
  ];

  // ---------- Industrial: zwei Stichkanäle auf einer Linie (Ansicht von vorn) ----------
  var IN1 = [296, 82], IN2 = [430, 122];
  function hubGrau(x, y) { return '<g filter="url(#aSchatten)"><circle cx="' + x + '" cy="' + y + '" r="12" fill="url(#aGrau)"/><circle cx="' + x + '" cy="' + y + '" r="4.5" fill="#E9FBF3"/></g>'; }
  function barbell(x1, y1, x2, y2, kugeln) {
    return '<g filter="url(#aSchatten)"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#7D8792" stroke-width="8" stroke-linecap="round"/><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="url(#aTitan)" stroke-width="5" stroke-linecap="round"/>' +
      (kugeln ? '<circle cx="' + (x1 - 8) + '" cy="' + (y1 - 2.4) + '" r="9" fill="url(#aKugel)" stroke="#6F7984"/>' : "") +
      (kugeln === true ? '<circle cx="' + (x2 + 8) + '" cy="' + (y2 + 2.4) + '" r="9" fill="url(#aKugel)" stroke="#6F7984"/>' : "") + "</g>";
  }
  var IDX = (IN2[0] - IN1[0]), IDY = (IN2[1] - IN1[1]), ILEN = Math.sqrt(IDX * IDX + IDY * IDY), UX = IDX / ILEN, UY = IDY / ILEN;
  var IWIN = Math.atan2(IDY, IDX) * 180 / Math.PI;
  function roehrchenLang(q, von, bis, klasse) {
    // Kunststoffröhrchen in voller Länge (so lang wie die Nadel), Ansatz bereits abgeschnitten; von/bis entlang der Stabrichtung
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' transform="translate(' + q[0].toFixed(1) + ' ' + q[1].toFixed(1) + ') rotate(' + IWIN.toFixed(1) + ')">' +
      '<rect x="' + von + '" y="-6" width="' + (bis - von) + '" height="12" rx="5" fill="url(#aUeberzug)" stroke="#4F9C7C" stroke-width="1.2"/><rect x="' + (von + 5) + '" y="-4" width="' + (bis - von - 10) + '" height="2" rx="1" fill="#FFFFFF" opacity=".8"/></g>';
  }
  var R1 = function (k) { return roehrchenLang(IN1, -80, 30, k); };
  var R2W = [0, 0], R2 = function (k) { return roehrchenLang(IN2, -30, 105, k); };
  function roehrchenSchraeg(q, klasse) {
    // Röhrchen liegt im Stichkanal in Richtung des Stabs
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' transform="translate(' + q[0] + ' ' + q[1] + ') rotate(' + IWIN.toFixed(1) + ')">' +
      '<rect x="-24" y="-6" width="48" height="12" rx="5" fill="url(#aUeberzug)" stroke="#4F9C7C" stroke-width="1.2"/><rect x="-20" y="-4" width="40" height="2" rx="1" fill="#FFFFFF" opacity=".8"/></g>';
  }
  function stab(spitze, laenge, kugeln) {
    // Stab des Barbells, von der Spitze aus nach hinten (gegen die Richtung) gezeichnet
    var x2 = spitze[0], y2 = spitze[1], x1 = x2 - UX * laenge, y1 = y2 - UY * laenge;
    return barbell(x1, y1, x2, y2, kugeln);
  }
  function schieben(dx, dy, inhalt) {
    return '<g class="a-schieben" style="--a-x:' + dx.toFixed(1) + 'px;--a-y:' + dy.toFixed(1) + 'px">' + inhalt + "</g>";
  }
  // Stab mit Überlänge: ragt oben und unten deutlich über die Stichkanäle hinaus (Platz für die Schwellung)
  var UE = 22, SL = ILEN + UE + 32, S1 = [IN1[0] + UX * 30, IN1[1] + UY * 30], S2 = [IN2[0] + UX * 32, IN2[1] + UY * 32];
  var ENDE = [IN2[0] + UX * 32, IN2[1] + UY * 32], ANF = [ENDE[0] - UX * SL, ENDE[1] - UY * SL];
  var T5 = [IN1[0] - UX * 68, IN1[1] - UY * 68], T6 = [IN1[0] + UX * 17, IN1[1] + UY * 17], T7 = [IN2[0] - UX * 18, IN2[1] - UY * 18];
  function strich(q) {
    // kurzer Strich mit dem Markierstift in Stichrichtung durch den Punkt
    return '<line class="a-zeichnen" style="--a-laenge:44" stroke-dasharray="44" x1="' + (q[0] - UX * 22).toFixed(1) + '" y1="' + (q[1] - UY * 22).toFixed(1) + '" x2="' + (q[0] + UX * 22).toFixed(1) + '" y2="' + (q[1] + UY * 22).toFixed(1) + '" stroke="#5B3F9A" stroke-width="2.6" stroke-linecap="round"/>';
  }
  function anzeichnung() { return strich(IN1) + strich(IN2) + punkt(IN1[0], IN1[1]) + punkt(IN2[0], IN2[1]); }
  var industrial = [
    { text: { de: "Ansicht von vorn: Zuerst den Industrial-Stab (Barbell 38 mm) ans Ohr halten und prüfen: Er muss gerade liegen und an beiden Enden Überlänge für die Schwellung haben.",
        en: "Front view: first hold the industrial bar (barbell 38 mm) against the ear and check: it must lie straight and have extra length at both ends for swelling.",
        es: "Vista frontal: primero sujeta la barra de industrial (barbell de 38 mm) junto a la oreja y comprueba: debe quedar recta y tener longitud extra en ambos extremos para la hinchazón." },
      svg: bildVorn(bewegt(60, 0, '<g opacity=".92">' + barbell(ANF[0], ANF[1], ENDE[0], ENDE[1], true) + "</g>") + hinweis(530, 250, ENDE[0] - 6, ENDE[1], "ueberlaenge", 170)) },
    { text: { de: "Dann anzeichnen: zwei Punkte, wo gestochen wird (oben nahe dem Kopf, unten am äußeren Rand), und durch jeden Punkt einen Strich für die Stichrichtung.",
        en: "Then mark: two dots where you will pierce (upper one near the head, lower one on the outer rim), and a line through each dot for the piercing direction.",
        es: "Después marca: dos puntos donde vas a perforar (arriba cerca de la cabeza, abajo en el borde exterior) y una línea por cada punto para la dirección de la perforación." },
      svg: bildVorn(anzeichnung() + hinweis(150, 60, IN1[0] - 6, IN1[1], "oben", 130) + hinweis(530, 200, IN2[0] + 4, IN2[1] + 4, "unten", 130) + hinweis(150, 130, IN1[0] + 14, IN1[1] + 6, "stichrichtung", 190)) },
    { text: { de: "Oben entlang des Strichs mit der 16G-Kanüle freihand stechen. Die Nadel kommt sofort in den Abwurf, das Röhrchen bleibt im Stichkanal.",
        en: "Pierce the upper point freehand along the line with the 16G cannula. The needle goes straight into the sharps container and the tube stays in the channel.",
        es: "Perfora el punto de arriba a mano alzada siguiendo la línea con la cánula 16G. La aguja va directa al contenedor y el tubo se queda en el canal." },
      svg: bildVorn(anzeichnung() + '<g class="a-erscheinen">' + R1() + "</g>" + abwurf(true) + hinweis(150, 160, IN1[0] - 6, IN1[1] + 4, "g16oben", 170)) },
    { text: { de: "Unten genauso stechen. Jetzt steckt in beiden Stichkanälen ein Röhrchen, beide auf einer Linie.",
        en: "Pierce the lower point the same way. Now there is a tube in both channels, both on one line.",
        es: "Perfora el punto de abajo de la misma forma. Ahora hay un tubo en cada canal, los dos en una línea." },
      svg: bildVorn(anzeichnung() + R1() + '<g class="a-erscheinen">' + R2() + "</g>" + abwurf(true) + hinweis(530, 220, IN2[0] + 6, IN2[1] + 4, "g16unten", 170)) },
    { text: { de: "Vorher auf einer Seite schon eine Kugel aufdrehen. Das freie Ende nur 2–3 mm in das erste Röhrchen stecken.",
        en: "Screw one ball onto one end beforehand. Insert the free end only 2–3 mm into the first tube.",
        es: "Antes, enrosca ya una bola en un extremo. Introduce el extremo libre solo 2–3 mm en el primer tubo." },
      svg: bildVorn(R1() + R2() + schieben(-UX * 60, -UY * 60, stab(T5, SL, "links")) + hinweis(150, 250, T5[0] - UX * SL - 6, T5[1] - UY * SL, "kugelSchonDrauf", 190) + hinweis(150, 170, T5[0] - 4, T5[1] + 4, "nur23", 190)) },
    { text: { de: "Den Stab schieben: Er schiebt das erste Röhrchen durch den oberen Stichkanal vor sich her. Ist das Röhrchen draußen, wird es abgemacht.",
        en: "Push the bar: it pushes the first tube ahead of it through the upper channel. Once the tube is out, take it off.",
        es: "Empuja la barra: empuja el primer tubo por delante a través del canal de arriba. Cuando el tubo ha salido, se quita." },
      svg: bildVorn(R2() + schieben(-UX * 85, -UY * 85, roehrchenLang([IN1[0] + UX * 85, IN1[1] + UY * 85], -80, 30, "a-weg-spaet") + stab(T6, SL, "links")) + hinweis(150, 160, IN1[0] + 4, IN1[1] + 6, "roehrchen1", 150)) },
    { text: { de: "Das freie Ende wieder nur 2–3 mm in das zweite Röhrchen stecken.",
        en: "Again, insert the free end only 2–3 mm into the second tube.",
        es: "De nuevo, introduce el extremo libre solo 2–3 mm en el segundo tubo." },
      svg: bildVorn(R2() + schieben(-UX * 105, -UY * 105, stab(T7, SL, "links")) + hinweis(530, 240, T7[0] + 4, T7[1] + 6, "nur23", 190)) },
    { text: { de: "Den Stab weiterschieben: Er schiebt das zweite Röhrchen komplett durch den unteren Stichkanal nach außen, bis der Stab richtig sitzt.",
        en: "Keep pushing the bar: it pushes the second tube all the way out through the lower channel until the bar sits correctly.",
        es: "Sigue empujando la barra: empuja el segundo tubo por completo hacia fuera a través del canal de abajo hasta que la barra queda bien colocada." },
      svg: bildVorn(schieben(-UX * 50, -UY * 50, roehrchenLang([IN2[0] + UX * 50, IN2[1] + UY * 50], -30, 105) + stab(ENDE, SL, "links")) + hinweis(530, 240, IN2[0] + 6, IN2[1] + 4, "roehrchen2", 150)) },
    { text: { de: "Das zweite Röhrchen abmachen und nur noch die zweite Kugel auf das freie Ende drehen.",
        en: "Take off the second tube and just screw the second ball onto the free end.",
        es: "Quita el segundo tubo y solo queda enroscar la segunda bola en el extremo libre." },
      svg: bildVorn(stab(ENDE, SL, "links") + roehrchenLang([IN2[0] + UX * 50, IN2[1] + UY * 50], -30, 105, "a-weg") + bewegt(40, 0, kugelVorn(ENDE[0] + 8, ENDE[1] + 2.4, 9)) + drehpfeil(ENDE[0] + 10, ENDE[1] - 18) + hinweis(530, 260, ENDE[0] + 8, ENDE[1] + 10, "zweiteKugel", 170)) },
    { text: { de: "Fertig: Der Stab liegt gerade und hat an beiden Seiten Überlänge, damit der Knorpel anschwellen kann, ohne eingeengt zu werden.",
        en: "Done: the bar lies straight and has extra length on both sides so the cartilage can swell without being constricted.",
        es: "Listo: la barra queda recta y tiene longitud extra a ambos lados para que el cartílago pueda hincharse sin quedar oprimido." },
      svg: bildVorn(stab(ENDE, SL, true) + hinweis(520, 260, ENDE[0] - 4, ENDE[1] + 6, "ueberlaenge", 170) + '<g transform="translate(60 -40)">' + haken() + "</g>") }
  ];

  // ---------- Kanüle sicher handhaben, Schmuck sichern und wechseln, ganzer Ablauf ----------
  function szene(inhalt) { return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + inhalt + "</svg>"; }
  function schutzkappe(x) {
    // durchsichtige Schutzkappe über der Nadelspitze; x = Nadelspitze
    return '<g filter="url(#aSchatten)"><rect x="' + (x - 150) + '" y="' + (Y - 8) + '" width="162" height="16" rx="7" fill="#F6EED8" fill-opacity=".85" stroke="#C9B88A" stroke-width="1.2"/>' +
      '<rect x="' + (x - 146) + '" y="' + (Y - 6) + '" width="150" height="3" rx="1.5" fill="#FFFFFF" opacity=".8"/></g>';
  }
  function verpackung() {
    // aufgerissene Sterilverpackung (Papier und Folie)
    return '<g filter="url(#aSchatten)"><path d="M40 136 L300 136 L300 224 L40 224 Z" fill="#F7F3EA" stroke="#D9CFBE"/>' +
      '<path d="M300 136 L332 120 L340 152 L300 160 Z" fill="#E9F1F6" stroke="#BFCBD3"/>' +
      '<path d="M48 144 L292 144 L292 216 L48 216 Z" fill="none" stroke="#E2D8C6" stroke-dasharray="6 4"/></g>' +
      '<text x="170" y="246" text-anchor="middle" class="a-klein" fill="#7A6E5E">{steril}</text>';
  }
  function kreuz(x, y) { return '<g stroke="#C8372D" stroke-width="7" stroke-linecap="round"><path d="M' + (x - 18) + " " + (y - 18) + " l36 36 M" + (x + 18) + " " + (y - 18) + ' l-36 36"/></g>'; }
  function blatt(x, y, wort, unterschrift) {
    var g = '<g filter="url(#aSchatten)"><rect x="' + x + '" y="' + y + '" width="150" height="196" rx="8" fill="#FFFFFF" stroke="#E4DACB"/></g>' +
      '<text x="' + (x + 75) + '" y="' + (y + 28) + '" text-anchor="middle" class="a-klein" fill="#5A4632">{' + wort + '}</text>';
    for (var i = 0; i < 6; i++) g += '<rect x="' + (x + 18) + '" y="' + (y + 48 + i * 18) + '" width="' + (i % 3 === 2 ? 70 : 114) + '" height="5" rx="2.5" fill="#E8DFD1"/>';
    if (unterschrift) g += '<path class="a-zeichnen" style="--a-laenge:140" stroke-dasharray="140" d="M' + (x + 20) + " " + (y + 172) + " c10 -18 18 10 28 -6 s14 -14 22 2 s18 -8 30 -2" + '" fill="none" stroke="#2F4A7A" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="' + (x + 18) + '" y1="' + (y + 180) + '" x2="' + (x + 132) + '" y2="' + (y + 180) + '" stroke="#CFC4B2"/>';
    return g;
  }
  function blase(x, y, wort, breite) {
    return '<g filter="url(#aSchatten)"><rect x="' + (x - breite / 2) + '" y="' + (y - 22) + '" width="' + breite + '" height="44" rx="20" fill="#FFFFFF" stroke="' + F.gold + '"/>' +
      '<path d="M' + (x - 20) + " " + (y + 21) + " l-10 18 l26 -18 z" + '" fill="#FFFFFF" stroke="' + F.gold + '"/></g>' +
      '<rect x="' + (x - 22) + '" y="' + (y + 19) + '" width="18" height="4" fill="#FFFFFF"/>' +
      '<text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" class="a-klein" fill="#5A4632">{' + wort + '}</text>';
  }
  function flasche(x, y) {
    // Sprühflasche Hautantiseptikum
    return '<g filter="url(#aSchatten)"><rect x="' + (x - 26) + '" y="' + y + '" width="52" height="96" rx="12" fill="#E9F3F8" stroke="#9FB6C4"/>' +
      '<rect x="' + (x - 26) + '" y="' + (y + 30) + '" width="52" height="34" fill="#FFFFFF" stroke="#9FB6C4"/>' +
      '<rect x="' + (x - 10) + '" y="' + (y - 26) + '" width="20" height="28" rx="4" fill="#3E4650"/><rect x="' + (x + 6) + '" y="' + (y - 22) + '" width="18" height="8" rx="3" fill="#3E4650"/></g>' +
      '<text x="' + x + '" y="' + (y + 52) + '" text-anchor="middle" class="a-klein" fill="#2F4A7A">Kodan</text>' +
      '<g class="a-erscheinen" fill="#9FC8E0" opacity=".8"><circle cx="' + (x + 38) + '" cy="' + (y - 20) + '" r="3"/><circle cx="' + (x + 50) + '" cy="' + (y - 26) + '" r="2.5"/><circle cx="' + (x + 48) + '" cy="' + (y - 12) + '" r="2.5"/><circle cx="' + (x + 62) + '" cy="' + (y - 20) + '" r="2"/></g>';
  }
  function handschuh(x, y) {
    var g = '<g filter="url(#aSchatten)" fill="#8DB3E2" stroke="#5F86B8" stroke-width="1.5">';
    [-27, -9, 9, 27].forEach(function (d, i) { g += '<rect x="' + (x + d - 8) + '" y="' + (y - (i === 0 || i === 3 ? 60 : 72)) + '" width="16" height="70" rx="8"/>'; });
    g += '<rect x="' + (x - 36) + '" y="' + (y - 20) + '" width="72" height="80" rx="18"/><rect x="' + (x - 62) + '" y="' + (y - 4) + '" width="40" height="16" rx="8" transform="rotate(-35 ' + (x - 40) + " " + (y + 4) + ')"/>' +
      '<rect x="' + (x - 30) + '" y="' + (y + 56) + '" width="60" height="30" rx="6" fill="#7AA3D6"/></g>';
    return g;
  }
  function spiegel(x, y) {
    return '<g filter="url(#aSchatten)"><rect x="' + (x - 7) + '" y="' + (y + 52) + '" width="14" height="70" rx="6" fill="#3E4650"/>' +
      '<ellipse cx="' + x + '" cy="' + y + '" rx="46" ry="58" fill="#3E4650"/><ellipse cx="' + x + '" cy="' + y + '" rx="39" ry="51" fill="#DDE9F0"/>' +
      '<path d="M' + (x - 22) + " " + (y - 30) + " l26 -14 M" + (x - 26) + " " + (y - 14) + ' l36 -20" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".8"/></g>';
  }
  function mini(dx, dy, sk, inhalt) { return '<g transform="translate(' + dx + " " + dy + ") scale(" + sk + ')">' + inhalt + "</g>"; }
  function tablett() {
    return '<g filter="url(#aSchatten)"><rect x="70" y="110" width="500" height="170" rx="22" fill="#D9DEE3" stroke="#AEB7C0"/><rect x="84" y="124" width="472" height="142" rx="14" fill="#EEF1F4"/></g>' +
      mini(150, 40, .55, kanuele(390, true)) + '<g transform="translate(150 40) scale(.55)">' + schutzkappe(390) + "</g>" +
      mini(330, 60, .7, labret(258, false)) + mini(470, 150, .7, '<circle cx="0" cy="0" r="11" fill="url(#aKugel)" stroke="#6F7984"/>') +
      mini(150, 150, .7, schere(214).replace("translate(214 " + (Y - 86) + ")", "translate(0 0)")) +
      mini(430, 110, .45, klemme().replace('<text', '<text opacity="0"'));
  }

  // Ring um das Ohrläppchen: oben durch den Stichkanal (y = Y), Lücke vorn unten, dort sitzt die Kugel
  var LC = [320, Y + 70], LR = 70;
  var LK = [LC[0] + LR * Math.cos(150 * Math.PI / 180), LC[1] + LR * Math.sin(150 * Math.PI / 180)];
  function ringLappen(klasse) {
    var p = function (g) { var w = g * Math.PI / 180; return (LC[0] + LR * Math.cos(w)).toFixed(1) + " " + (LC[1] + LR * Math.sin(w)).toFixed(1); };
    var d = "M" + p(162) + " A" + LR + " " + LR + " 0 1 1 " + p(138);
    var u = 2 * Math.PI * LR, st = klasse ? ' class="' + klasse + '" stroke-dasharray="' + u + '" style="--a-laenge:' + u + '"' : "";
    return '<path d="' + d + '" fill="none" stroke="#7D8792" stroke-width="9" stroke-linecap="round"' + st + "/>" +
      '<path d="' + d + '" fill="none" stroke="url(#aTitan)" stroke-width="6" stroke-linecap="round"' + st + "/>";
  }
  var kanueleSchritte = [
    { text: { de: "Den Abwurfbehälter so hinstellen, dass du ihn mit der Arbeitshand ohne Umgreifen erreichst.",
        en: "Place the sharps container so you can reach it with your working hand without changing your grip.",
        es: "Coloca el contenedor de agujas de modo que lo alcances con la mano de trabajo sin cambiar de agarre." },
      svg: szene(bewegt(-80, 0, abwurf(false)) + hinweis(330, 250, 106, 270, "inReichweite", 260)) },
    { text: { de: "Die Kanüle aus der sterilen Verpackung nehmen, ohne die Nadel zu berühren. Die Schutzkappe bleibt noch drauf.",
        en: "Take the cannula out of the sterile pack without touching the needle. The protective cap stays on for now.",
        es: "Saca la cánula del envase estéril sin tocar la aguja. El capuchón protector sigue puesto por ahora." },
      svg: szene(verpackung() + bewegt(-180, 120, kanuele(390, true) + schutzkappe(390)) + abwurf(false)) },
    { text: { de: "Die Schutzkappe gerade abziehen und weglegen. Nicht schräg, sonst verbiegt die Spitze.",
        en: "Pull the protective cap off straight and put it aside. Not at an angle, or the tip bends.",
        es: "Retira el capuchón en línea recta y déjalo aparte. No en diagonal, o la punta se dobla." },
      svg: szene(kanuele(390, true) + bewegt(0, 150, schutzkappe(390)) + pfeil(420, 520, Y - 40) + hinweis(470, 290, 470, Y + 8, "geradeAb", 190) + abwurf(false)) },
    { text: { de: "Die Kanüle am Griff halten und zügig ins Silikon stechen, irgendwo, nur um die Bewegung zu üben.",
        en: "Hold the cannula by the grip and pierce the silicone swiftly, anywhere, just to practise the movement.",
        es: "Sujeta la cánula por el mango y perfora la silicona con rapidez, en cualquier sitio, solo para practicar el movimiento." },
      svg: bild(lappen(false) + bewegt(-150, 0, kanuele(390, true)) + pfeil(200, 260, 140) + hinweis(230, 300, 80, Y + 12, "griff", 140) + abwurf(false)) },
    { text: { de: "Die Stahlnadel am Griff herausziehen und sofort in den Abwurfbehälter. Der Kunststoffüberzug bleibt im Silikon.",
        en: "Pull the steel needle out by the grip and drop it straight into the sharps container. The plastic sheath stays in the silicone.",
        es: "Retira la aguja de acero por el mango y échala directamente al contenedor. La vaina de plástico se queda en la silicona." },
      svg: lobe[3].svg },
    { text: { de: "Die Schutzkappe kommt nie zurück auf die Nadel. Übe den Ablauf dreimal, bis er von der Verpackung bis zum Abwurf flüssig sitzt.",
        en: "The cap never goes back on the needle. Practise the sequence three times until it flows from the pack to the sharps container.",
        es: "El capuchón nunca vuelve a la aguja. Practica la secuencia tres veces hasta que salga fluida del envase al contenedor." },
      svg: szene(mini(0, -40, 1, nadel(330) + schutzkappe(470)) + kreuz(400, 140) + hinweis(330, 260, 400, 160, "nieZurueck", 220) + abwurf(true) + '<g transform="translate(60 120)">' + haken() + "</g>") }
  ];

  var schmuckSchritte = [
    { text: { de: "Geübt wird in einem fertigen Stichkanal im Silikonohr. Die Kugel mit dem Kugelgreifer aufnehmen.",
        en: "Practise in a finished channel in the silicone ear. Pick up the ball with the ball grabber.",
        es: "Se practica en un canal ya hecho en la oreja de silicona. Coge la bola con la pinza de bolas." },
      svg: bild(lappen(true) + labret(258, false) + bewegt(-90, -70, kugel(249) + kugelgreifer(249)) + hinweis(470, 300, 186, 172, "kugelgreifer", 190)) },
    { text: { de: "Die Klemmzange vorn kurz vor dem Gewinde ansetzen und die Kugel fest aufdrehen. Der Stab dreht sich nicht mit.",
        en: "Place the clamp at the front just before the thread and screw the ball on firmly. The bar does not turn with it.",
        es: "Coloca la pinza delante, justo antes de la rosca, y enrosca la bola con firmeza. La barra no gira con ella." },
      svg: lobe[8].svg },
    { text: { de: "Prüfen: Die Kugel sitzt fest, nichts wackelt. Keine Kugel darf herunterfallen oder wegspringen.",
        en: "Check: the ball sits firmly, nothing wobbles. No ball should drop or spring away.",
        es: "Comprueba: la bola está firme, nada se mueve. Ninguna bola debe caerse ni salir disparada." },
      svg: bild(lappen(true) + labret(258, true) + hinweis(150, 290, 249, Y + 10, "festPruefen", 190) + haken()) },
    { text: { de: "Klemmkugelring: Mit der Ringöffnungszange leicht öffnen und die Kugel herausnehmen.",
        en: "Ball closure ring: open it slightly with the ring-opening pliers and take out the ball.",
        es: "Aro de bola cautiva: ábrelo un poco con los alicates de apertura y saca la bola." },
      svg: szene(bcrVorn(300, 80, true) + zange(300, 128, true) + hinweis(500, 300, 360, 132, "ringOffen", 200)) },
    { text: { de: "Die Kugel mit der Pinzette wieder in die Lücke setzen. Der Ring hält sie mit seiner Spannung, er bleibt rund.",
        en: "Use tweezers to put the ball back into the gap. The ring holds it with its tension and stays round.",
        es: "Vuelve a colocar la bola en el hueco con las pinzas. El aro la sujeta con su tensión y sigue redondo." },
      svg: szene(bcrVorn(300, 80, true).replace(/<circle[^>]*r="10"[^>]*\/>/, "") + bewegt(56, 0, kugelVorn(304, 120, 10) + pinzette(304, 120)) + hinweis(150, 290, 300, 128, "kugelPinzette", 190)) },
    { text: { de: "Wechsel üben: Kugel abdrehen, Labret herausnehmen, den offenen Ring mit leichter Drehung durch den Stichkanal führen und die Kugel einsetzen. Danach zurück zum Labret.",
        en: "Practise a change: unscrew the ball, take out the labret, guide the open ring through the channel with a slight twist and insert the ball. Then change back to the labret.",
        es: "Practica el cambio: desenrosca la bola, saca el labret, pasa el aro abierto por el canal con un ligero giro y coloca la bola. Después vuelve al labret." },
      svg: bild(lappen(true) + ringLappen("a-zeichnen") + drehpfeil(410, 214) + hinweis(510, 300, 410, 226, "leichteDrehung", 190)) },
    { text: { de: "Merke: Beim echten Kunden wird der Ersteinsatz erst nach vollständiger Abheilung gewechselt (Modul 10).",
        en: "Remember: with a real client, the initial jewelry is changed only after complete healing (module 10).",
        es: "Recuerda: con un cliente real, la joya inicial se cambia solo tras la cicatrización completa (módulo 10)." },
      svg: bild(lappen(true) + ringLappen("") + kugelVorn(LK[0], LK[1], 9) + hinweis(470, 320, LK[0] + 2, LK[1] + 8, "ersteinsatzAbheilung", 270) + haken()) }
  ];

  var ablaufSchritte = [
    { text: { de: "Schritte 1–4: Begrüßen, klären, welches Piercing gewünscht ist, Angst nehmen. Der Kunde füllt die Einverständniserklärung aus.",
        en: "Steps 1–4: greet, clarify which piercing is wanted, ease any fear. The client fills in the consent form.",
        es: "Pasos 1–4: saludar, aclarar qué piercing se quiere, quitar el miedo. El cliente rellena el consentimiento." },
      svg: szene(blatt(330, 80, "einverstaendnis", true) + blase(190, 120, "welchesPiercing", 220)) },
    { text: { de: "Schritt 5: Währenddessen den Arbeitsplatz vorbereiten und alle Instrumente parat legen.",
        en: "Step 5: meanwhile, prepare the workstation and lay out all instruments.",
        es: "Paso 5: mientras tanto, prepara el puesto de trabajo y deja todos los instrumentos a mano." },
      svg: szene(tablett() + abwurf(false)) },
    { text: { de: "Schritte 6–7: Für eine ruhige Atmosphäre sorgen, die Stelle begutachten und den Ersteinsatz mit Überlänge wählen.",
        en: "Steps 6–7: create a calm atmosphere, examine the spot and choose the initial jewelry with extra length.",
        es: "Pasos 6–7: crea un ambiente tranquilo, examina la zona y elige la joya inicial con longitud extra." },
      svg: bild(lappen(false) + bewegt(-60, 0, labret(258, true)) + hinweis(150, 290, 272, Y + 8, "ueberlaenge", 180)) },
    { text: { de: "Schritte 7a–8a: Hände desinfizieren, Handschuhe anziehen, die Stelle desinfizieren und bei Bedarf rasieren.",
        en: "Steps 7a–8a: disinfect your hands, put on gloves, disinfect the spot and shave if needed.",
        es: "Pasos 7a–8a: desinfecta las manos, ponte los guantes, desinfecta la zona y rasura si hace falta." },
      svg: szene('<g class="a-erscheinen">' + handschuh(240, 170) + "</g>" + flasche(420, 150)) },
    { text: { de: "Schritte 9–10: Ein- und Austrittsstelle markieren, mit Kodan desinfizieren, ohne die Markierung abzuwischen, und den Kunden im Spiegel schauen lassen.",
        en: "Steps 9–10: mark entry and exit, disinfect with Kodan without wiping off the mark, and let the client check in the mirror.",
        es: "Pasos 9–10: marca la entrada y la salida, desinfecta con Kodan sin borrar la marca y deja que el cliente lo mire en el espejo." },
      svg: bildVorn('<g class="a-erscheinen">' + punkt(330, 306) + "</g>" + spiegel(540, 200) + hinweis(150, 300, 326, 306, "passtEs", 170)) },
    { text: { de: "Schritte 11–12: Snaptile anlegen und zügig von der sichtbaren Seite stechen.",
        en: "Steps 11–12: apply the Snaptile and pierce swiftly from the visible side.",
        es: "Pasos 11–12: coloca el Snaptile y perfora con rapidez desde el lado visible." },
      svg: lobe[1].svg },
    { text: { de: "Schritte 13–14: Nadel heraus und sofort in den Abwurf, dann den Ansatz vorn abschneiden.",
        en: "Steps 13–14: needle out and straight into the sharps container, then cut off the hub at the front.",
        es: "Pasos 13–14: aguja fuera y directa al contenedor, después corta el cono delante." },
      svg: lobe[3].svg },
    { text: { de: "Schritte 15–17: Schmuck nur 2–3 mm ins Röhrchen, durch den Stichkanal schieben, der Kunde atmet aus. Röhrchen abziehen.",
        en: "Steps 15–17: jewelry only 2–3 mm into the tube, push it through the channel while the client breathes out. Pull off the tube.",
        es: "Pasos 15–17: joya solo 2–3 mm en el tubo, empújala por el canal mientras el cliente espira. Retira el tubo." },
      svg: lobe[6].svg },
    { text: { de: "Schritte 18–21: Kugel mit Klemmzange und Kugelgreifer fest aufdrehen, nochmals mit Kodan einsprühen und das Piercing im Spiegel zeigen.",
        en: "Steps 18–21: screw the ball on firmly with the clamp and ball grabber, spray with Kodan again and show the piercing in the mirror.",
        es: "Pasos 18–21: enrosca la bola con firmeza con la pinza y la pinza de bolas, vuelve a rociar con Kodan y muestra el piercing en el espejo." },
      svg: lobe[8].svg },
    { text: { de: "Schritte 22–25: Pflegehinweise mündlich erklären und schriftlich mitgeben, nach dem Befinden fragen. Bei Problemen kommt der Kunde zur Beratung wieder.",
        en: "Steps 22–25: explain the aftercare verbally and hand it over in writing, ask how the client feels. If there are problems, the client comes back for advice.",
        es: "Pasos 22–25: explica los cuidados de palabra y entrégalos por escrito, pregunta cómo se encuentra. Si hay problemas, el cliente vuelve para consultar." },
      svg: szene(blatt(330, 80, "pflegehinweise", false) + blase(190, 120, "allesGut", 200) + '<g transform="translate(60 0)">' + haken() + "</g>") }
  ];

  // ---------- Baukasten für die Piercings aus Modul 8 (gleicher Stil, gleicher Grundablauf) ----------
  // Querschnitt: Gewebe mit Dicke d, Stichkanal waagerecht auf Höhe Y; links Eintritt, rechts Austritt.
  function gewebe(o) {
    var x1 = 320 - o.d / 2, x2 = 320 + o.d / 2, u = o.unten, rr = o.d / 2;
    var pfad = "M" + x1 + " 40 L" + x1 + " " + (u - rr) + " A" + rr + " " + rr + " 0 0 0 " + x2 + " " + (u - rr) + " L" + x2 + " 40 Z";
    var i1 = x1 + 9, i2 = x2 - 9, ir = rr - 9;
    var innen = "M" + i1 + " 46 L" + i1 + " " + (u - rr) + " A" + ir + " " + ir + " 0 0 0 " + i2 + " " + (u - rr) + " L" + i2 + " 46 Z";
    return '<g mask="url(#aFade)"><g filter="url(#aSchatten)"><path d="' + pfad + '" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2"/></g>' +
      '<path d="' + innen + '" fill="' + (o.knorpel ? "#EEF3F4" : "#FBE6DA") + '" opacity="' + (o.knorpel ? ".85" : ".55") + '"/></g>' +
      '<text x="' + (x2 + 14) + '" y="96" class="a-klein" fill="#7C8A90">{' + o.gewebeWort + '}</text>';
  }
  function kanal(o) { return '<line x1="' + (320 - o.d / 2 + 1) + '" y1="' + Y + '" x2="' + (320 + o.d / 2 - 1) + '" y2="' + Y + '" stroke="#B9735E" stroke-width="2.5" stroke-dasharray="4 3" opacity=".7"/>'; }
  function marken(o) {
    var x1 = 320 - o.d / 2, x2 = 320 + o.d / 2;
    return '<circle cx="' + (x1 - 1) + '" cy="' + Y + '" r="4.5" fill="' + F.mark + '"/><circle cx="' + (x2 + 1) + '" cy="' + Y + '" r="4.5" fill="' + F.mark + '"/>';
  }
  function auffangrohr(o, klasse) {
    // Nadelauffangrohr: liegt auf der Austrittsseite an und fängt die Nadelspitze auf
    var x2 = 320 + o.d / 2;
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)"><rect x="' + (x2 + 2) + '" y="' + (Y - 10) + '" width="120" height="20" rx="4" fill="url(#aStahl)" stroke="#6F7984"/>' +
      '<rect x="' + (x2 + 2) + '" y="' + (Y - 5) + '" width="10" height="10" fill="#5F666D" opacity=".6"/></g>';
  }
  function zangeQ(o, wort, klasse) {
    // Klemme bzw. Zange mit Fenster im Querschnitt (Form wie das Snaptile), Beschriftung je nach Werkzeug
    var dx = o.d / 2 - 33.5, x1 = 320 - o.d / 2, x2 = 320 + o.d / 2;
    var k = klemme().replace(">Snaptile<", ">{" + wort + "}<");
    k = k.replace(/(<g class="a-klemme"[^>]*>)/, "$1");
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + '><g transform="translate(' + (320 - (276 + 364) / 2) + ' 0)">' +
      '<g transform="translate(320 0) scale(' + ((o.d + 22) / 88).toFixed(3) + ' 1) translate(-320 0)">' + k + "</g></g></g>";
  }
  function schmuckGerade(o, x, kugelVorn, kugelHinten) {
    // Labret (Platte auf der Austrittsseite) oder Barbell; x = vorderes Stabende, Länge mit Überlänge
    var L = o.laenge, g = '<g filter="url(#aSchatten)"><rect x="' + x + '" y="' + (Y - 4) + '" width="' + L + '" height="8" rx="4" fill="url(#aTitan)" stroke="#7D8792" stroke-width=".8"/>';
    if (o.schmuck === "labret") g += '<rect x="' + (x + L - 2) + '" y="' + (Y - 22) + '" width="8" height="44" rx="4" fill="url(#aTitan)" stroke="#7D8792" stroke-width=".8"/>';
    else if (kugelHinten) g += '<circle cx="' + (x + L + 9) + '" cy="' + Y + '" r="11" fill="url(#aKugel)" stroke="#6F7984" stroke-width=".8"/>';
    if (kugelVorn) g += '<circle cx="' + (x - 9) + '" cy="' + Y + '" r="11" fill="url(#aKugel)" stroke="#6F7984" stroke-width=".8"/>';
    return g + "</g>";
  }
  function bildQ(o, inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + etikett(150, o.links, 220) + etikett(490, o.rechts, 150) + gewebe(o) + inhalt + "</svg>";
  }
  function piercingSchritte(o) {
    var x1 = 320 - o.d / 2, x2 = 320 + o.d / 2, tip = x2 + 36, r = tip - 8, l = tip - 184;
    var F0 = x1 - o.ueberVorn, xIn = r - 12, sh = xIn - F0;
    o.laenge = x2 - x1 + o.ueberVorn + (o.schmuck === "labret" ? 2 : o.ueberVorn);
    var halt = o.werkzeug === "rohr" ? auffangrohr(o) : o.werkzeug === "frei" ? "" : zangeQ(o, o.werkzeugWort);
    var t = o.texte, S = [];
    S.push({ text: t.lage, svg: o.vorn });
    S.push({ text: t.halt, svg: bildQ(o, marken(o) + (o.werkzeug === "rohr" ? bewegt(80, 0, auffangrohr(o)) : o.werkzeug === "frei" ? hinweis(470, 290, x2 + 2, Y + 4, "freihand", 150) : bewegt(-60, 0, zangeQ(o, o.werkzeugWort)))) });
    S.push({ text: t.stich, svg: bildQ(o, halt + bewegt(-150, 0, kanuele(tip, true)) + pfeil(200, 260, 140) + hinweis(150, 300, tip - 120, Y + 8, o.gauge, 140)) });
    S.push({ text: t.abwurf, svg: bildQ(o, (o.werkzeug === "rohr" ? auffangrohr(o, "a-weg") : o.werkzeug === "frei" ? "" : zangeQ(o, o.werkzeugWort, "a-weg")) + kanal(o) + kanuele(tip, false) + nadelSenkrecht() + abwurf(true) + hinweis(470, 110, 320, Y - 7, "roehrchen", 230)) });
    S.push({ text: t.ansatz, svg: bildQ(o, kanal(o) + kanuele(tip, false, l - 6, r) + ansatzFaellt(l - 6) + schere(l + 8)) });
    S.push({ text: t.einsetzen, svg: bildQ(o, kanal(o) + kanuele(tip, false, l, r) + bewegt(80, 0, schmuckGerade(o, xIn, false, true)) + pfeil(530, 480, 250) + hinweis(470, 310, xIn + 6, Y + 6, "nur23", 190)) });
    S.push({ text: t.schieben, svg: bildQ(o, bewegt(0, -sh, kanuele(tip, false, l, r)) + bewegt(0, -sh, schmuckGerade(o, xIn, false, true)) + pfeil(480, 420, 250)) });
    S.push({ text: t.kugel, svg: bildQ(o, '<g class="a-weg-links">' + kanuele(tip, false, l - sh, r - sh) + "</g>" + schmuckGerade(o, F0, false, true) + '<g transform="translate(' + (F0 - 258) + ' 0)">' + klemmzangeVorn() + "</g>" + bewegt(-70, 0, kugel(F0 - 9) + kugelgreifer(F0 - 9)) + hinweis(470, 300, F0 + 4, Y + 6, "kugelAuf", 190)) });
    S.push({ text: t.fertig, svg: bildQ(o, schmuckGerade(o, F0, true, true) + hinweis(150, 300, F0 + 12, Y + 8, "ueberlaenge", 180) + haken()) });
    return S;
  }
  // Ansicht von vorn für einzelne Stellen
  function vornOhr(punkte, hw) { return bildVorn('<g class="a-erscheinen">' + punkte.map(function (q) { return punkt(q[0], q[1]); }).join("") + "</g>" + hw); }

  var tragus = piercingSchritte({
    d: 56, unten: Y + 96, knorpel: true, gewebeWort: "knorpelTragus", links: "vorneTragus", rechts: "gehoergang",
    werkzeug: "rohr", gauge: "kan16", schmuck: "labret", ueberVorn: 26,
    vorn: vornOhr([[281, 232]], hinweis(150, 290, 279, 236, "tragusStelle", 200)),
    texte: {
      lage: { de: "Ansicht von vorn: Die Stelle mitten auf dem Tragus anzeichnen, dem Knorpelfortsatz am Gehöreingang. Der Kunde schaut im Spiegel, ob es passt.",
        en: "Front view: mark the spot in the middle of the tragus, the cartilage flap at the ear canal entrance. The client checks in the mirror that it is right.",
        es: "Vista frontal: marca el punto en el centro del trago, la prominencia de cartílago a la entrada del oído. El cliente comprueba en el espejo que está bien." },
      halt: { de: "Querschnitt durch den Tragus: vorn die sichtbare Seite, hinten der Gehörgang. Das Nadelauffangrohr hinten anlegen. Es fängt die Nadel auf und schützt den Gehörgang.",
        en: "Cross-section of the tragus: the visible side at the front, the ear canal at the back. Place the receiving tube at the back. It catches the needle and protects the ear canal.",
        es: "Corte del trago: delante el lado visible, detrás el conducto auditivo. Coloca el tubo receptor detrás. Recoge la aguja y protege el conducto auditivo." },
      stich: { de: "Mit der 16G-Kanüle zügig von vorn stechen, gerade durch beide Markierungen bis ins Auffangrohr.",
        en: "Pierce swiftly from the front with the 16G cannula, straight through both marks into the receiving tube.",
        es: "Perfora con rapidez desde delante con la cánula 16G, recto a través de ambas marcas hasta el tubo receptor." },
      abwurf: { de: "Auffangrohr weg, Nadel heraus und sofort in den Abwurfbehälter. Das Röhrchen bleibt im Stichkanal.",
        en: "Remove the receiving tube, pull the needle out and drop it straight into the sharps container. The tube stays in the channel.",
        es: "Retira el tubo receptor, saca la aguja y échala directamente al contenedor. El tubo se queda en el canal." },
      ansatz: { de: "Vorn den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "At the front, cut off the green hub with scissors so only the tube is left.",
        es: "Delante, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Das Labret nur 2–3 mm von hinten in das Röhrchen stecken. Die Platte bleibt hinten am Gehörgang.",
        en: "Insert the labret only 2–3 mm into the tube from the back. The disc stays at the back, by the ear canal.",
        es: "Introduce el labret solo 2–3 mm en el tubo por detrás. El disco se queda detrás, junto al conducto auditivo." },
      schieben: { de: "Das Labret durchschieben, nicht ziehen. Es schiebt das Röhrchen vorn hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the labret through, do not pull. It pushes the tube out at the front. Have the client breathe out.",
        es: "Empuja el labret, no tires. Saca el tubo por delante. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die Kugel vorn mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw the ball on at the front with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola delante con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Fertig: Kugel vorn, Platte hinten, mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen und im Spiegel zeigen.",
        en: "Done: ball at the front, disc at the back, with extra length for swelling. Spray with Kodan again and show it in the mirror.",
        es: "Listo: bola delante, disco detrás, con longitud extra para la hinchazón. Vuelve a rociar con Kodan y muéstralo en el espejo." }
    }
  });

  KURS.animationen = {
    "labor-lobe": {
      titel: { de: "Animation: Lobe stechen und Labret einsetzen", en: "Animation: piercing the lobe and inserting a labret", es: "Animación: perforar el lóbulo y colocar un labret" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: lobe,
      woerter: T
    },
    "labor-upper-lobe": {
      titel: { de: "Animation: Upper Lobe – drei in einer Reihe", en: "Animation: upper lobe – three in a row", es: "Animación: upper lobe – tres en fila" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: upperLobe,
      woerter: T
    },
    "labor-helix": {
      titel: { de: "Animation: Helix mit Klemmkugelring (BCR)", en: "Animation: helix with a ball closure ring (BCR)", es: "Animación: helix con aro de bola cautiva (BCR)" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: helix,
      woerter: T
    },
    "labor-kanuele": {
      titel: { de: "Animation: Die Kanüle sicher handhaben", en: "Animation: handling the cannula safely", es: "Animación: manejar la cánula con seguridad" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: kanueleSchritte,
      woerter: T
    },
    "labor-schmuck": {
      titel: { de: "Animation: Schmuck sichern und wechseln", en: "Animation: securing and changing jewelry", es: "Animación: asegurar y cambiar la joya" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: schmuckSchritte,
      woerter: T
    },
    "labor-ablauf": {
      titel: { de: "Animation: Der ganze Ablauf im Überblick", en: "Animation: the whole procedure at a glance", es: "Animación: todo el procedimiento de un vistazo" },
      hinweis: { de: "Schematische Übersicht der 25 Schritte aus Modul 9. Den echten Clip in Echtzeit aus dem Studio gibt es bald.",
        en: "Schematic overview of the 25 steps from module 9. The real-time clip from the studio is coming soon.",
        es: "Resumen esquemático de los 25 pasos del módulo 9. Pronto estará el vídeo real en tiempo real del estudio." },
      schritte: ablaufSchritte,
      woerter: T
    },
    "labor-tragus": {
      titel: { de: "Animation: Tragus mit Labret", en: "Animation: tragus with a labret", es: "Animación: trago con labret" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: tragus,
      woerter: T
    },
    "labor-industrial": {
      titel: { de: "Animation: Industrial – zwei Stichkanäle auf einer Linie", en: "Animation: industrial – two channels on one line", es: "Animación: industrial – dos canales en una línea" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: industrial,
      woerter: T
    }
  };
})();
