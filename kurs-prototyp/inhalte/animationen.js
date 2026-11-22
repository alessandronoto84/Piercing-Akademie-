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


  // ---------- Upper Lobe: drei in einer Reihe (Ansicht von vorn) ----------
  var UL = [[352, 300], [366, 283], [380, 266]], LOCH = [336, 320];
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
    { text: { de: "Ansicht von vorn: Neben dem herkömmlichen Ohrloch werden drei Punkte im oberen Ohrläppchen in einer Reihe und in gleichem Abstand angezeichnet.",
        en: "Front view: next to the standard lobe hole, three points are marked in a row in the upper lobe, evenly spaced.",
        es: "Vista frontal: junto al agujero habitual del lóbulo se marcan tres puntos en fila en la parte superior del lóbulo, a la misma distancia." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + hinweis(470, 330, LOCH[0] + 8, LOCH[1], "ohrloch", 190) + '<g class="a-erscheinen">' + UL.map(function (q) { return punkt(q[0], q[1]); }).join("") + "</g>") },
    { text: { de: "Erst nachmessen: Mit dem Messschieber prüfen, ob die Abstände gleich sind und die Punkte auf einer Linie liegen. Gestochen wird erst, wenn alles stimmt.",
        en: "Measure first: use the caliper to check that the gaps are equal and the points sit on one line. Only pierce once everything is right.",
        es: "Primero mide: comprueba con el pie de rey que las distancias son iguales y que los puntos están en línea. Solo se perfora cuando todo está bien." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + UL.map(function (q) { return punkt(q[0], q[1]); }).join("") + bewegt(-40, 0, messschieber()) + hinweis(150, 300, UL[1][0] + 20, UL[1][1] + 14, "gleicherAbstand", 180)) },
    { text: { de: "Dann Punkt für Punkt stechen, genau wie beim Lobe: Snaptile, Stich von vorn, Nadel sofort in den Abwurf, Ansatz vorn abschneiden, Labret von hinten, Kugel vorn aufschrauben.",
        en: "Then pierce point by point, exactly like the lobe: Snaptile, pierce from the front, needle straight into the sharps container, cut the hub off at the front, labret from the back, screw the ball on at the front.",
        es: "Después perfora punto por punto, igual que el lóbulo: Snaptile, perforar desde delante, aguja directa al contenedor, cortar el cono delante, labret por detrás y enroscar la bola delante." },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + kugelVorn(UL[0][0], UL[0][1]) + '<g class="a-erscheinen">' + hubVorn(UL[1][0], UL[1][1]) + "</g>" + punkt(UL[2][0], UL[2][1]) +
        hinweis(150, 250, UL[0][0] - 8, UL[0][1], "fertig1", 150) + hinweis(500, 220, UL[1][0] + 12, UL[1][1] - 4, "dran2", 200)) },
    { text: { de: "Fertig: drei Labrets in einer geraden Reihe. Von vorn ein Foto machen und die Reihe beurteilen: gleiche Abstände, eine Linie?",
        en: "Done: three labrets in a straight row. Take a photo from the front and judge the row: equal gaps, one line?",
        es: "Listo: tres labrets en una fila recta. Haz una foto de frente y valora la fila: ¿distancias iguales, una línea?" },
      svg: bildVorn(kugelVorn(LOCH[0], LOCH[1], 6) + UL.map(function (q) { return kugelVorn(q[0], q[1]); }).join("") +
        '<line x1="' + (UL[0][0] - 14) + '" y1="' + (UL[0][1] + 17) + '" x2="' + (UL[2][0] + 14) + '" y2="' + (UL[2][1] - 17) + '" stroke="' + F.gold + '" stroke-width="2" stroke-dasharray="5 5"/>' + haken()) }
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
    var d = luecke && !klasse ? "M" + p(238) + " A" + RR + " " + RR + " 0 1 1 " + p(212) : "M" + p(0) + " A" + RR + " " + RR + " 0 1 1 " + p(-0.5);
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
    { text: { de: "Den Klemmkugelring mit der Ringöffnungszange vorsichtig öffnen und die Kugel herausnehmen.",
        en: "Carefully open the ball closure ring with the ring-opening pliers and take out the ball.",
        es: "Abre con cuidado el aro de bola cautiva con los alicates de apertura y saca la bola." },
      svg: bildRand(randKanal() + kanuele(390, false, 206, 382) + bcrVorn(520, 120, true) + zange(500, 168, true) + hinweis(470, 330, 520, 162, "ringOeffnen", 210)) },
    { text: { de: "Ein Ende des Rings hinten in das Röhrchen stecken und durch den Stichkanal schieben. Das Röhrchen wird dabei vorn hinausgedrückt.",
        en: "Put one end of the ring into the tube at the back and push it through the channel. This pushes the tube out at the front.",
        es: "Mete un extremo del aro en el tubo por detrás y empújalo por el canal. Así el tubo sale por delante." },
      svg: bildRand(randKanal() + bewegt(0, -110, kanuele(390, false, 206, 382)) + ringBogen("a-zeichnen", true)) },
    { text: { de: "Röhrchen abziehen, die Kugel in die Lücke setzen und den Ring mit der Ringschließzange schließen, bis die Kugel fest einrastet.",
        en: "Remove the tube, put the ball into the gap and close the ring with the ring-closing pliers until the ball snaps firmly into place.",
        es: "Retira el tubo, coloca la bola en el hueco y cierra el aro con los alicates de cierre hasta que la bola encaje firmemente." },
      svg: bildRand(ringBogen("", true) + bewegt(-40, 0, kugelVorn(RKUGEL[0], RKUGEL[1], 9)) + zange(480, 96, false) + hinweis(140, 160, RKUGEL[0] - 4, RKUGEL[1] + 6, "kugelRastet", 210)) },
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
      (kugeln ? '<circle cx="' + (x1 - 8) + '" cy="' + (y1 - 2.4) + '" r="9" fill="url(#aKugel)" stroke="#6F7984"/><circle cx="' + (x2 + 8) + '" cy="' + (y2 + 2.4) + '" r="9" fill="url(#aKugel)" stroke="#6F7984"/>' : "") + "</g>";
  }
  var industrial = [
    { text: { de: "Ansicht von vorn: Beide Punkte am oberen Ohrrand anzeichnen, einen nahe dem Kopf und einen gegenüber am äußeren Rand.",
        en: "Front view: mark both points on the upper ear rim, one close to the head and one opposite on the outer rim.",
        es: "Vista frontal: marca los dos puntos en el borde superior de la oreja, uno cerca de la cabeza y otro enfrente, en el borde exterior." },
      svg: bildVorn('<g class="a-erscheinen">' + punkt(IN1[0], IN1[1]) + punkt(IN2[0], IN2[1]) + "</g>" + hinweis(150, 60, IN1[0] - 6, IN1[1], "nahKopf", 170) + hinweis(530, 200, IN2[0] + 4, IN2[1] + 4, "aussenRand", 170)) },
    { text: { de: "Den Barbell (38 mm) probehalber über die Markierungen halten: Er muss beide Punkte gerade verbinden, ohne das Ohr zu verbiegen.",
        en: "Hold the barbell (38 mm) over the marks as a test: it must connect both points in a straight line without bending the ear.",
        es: "Sujeta el barbell (38 mm) sobre las marcas a modo de prueba: debe unir ambos puntos en línea recta sin doblar la oreja." },
      svg: bildVorn(punkt(IN1[0], IN1[1]) + punkt(IN2[0], IN2[1]) + bewegt(60, 0, '<g opacity=".9">' + barbell(IN1[0], IN1[1] - 16, IN2[0], IN2[1] - 16, true) + "</g>") + hinweis(530, 250, 380, 96, "gerade", 170)) },
    { text: { de: "Den ersten Punkt mit der 16G-Kanüle freihand stechen. Die Nadel kommt sofort in den Abwurf, das Röhrchen bleibt stecken.",
        en: "Pierce the first point freehand with the 16G cannula. The needle goes straight into the sharps container and the tube stays in.",
        es: "Perfora el primer punto a mano alzada con la cánula 16G. La aguja va directa al contenedor y el tubo se queda dentro." },
      svg: bildVorn(punkt(IN2[0], IN2[1]) + '<g class="a-erscheinen">' + hubGrau(IN1[0], IN1[1]) + "</g>" + abwurf(true) + hinweis(150, 160, IN1[0] - 8, IN1[1] + 6, "g16", 150)) },
    { text: { de: "Den zweiten Punkt genauso stechen. Jetzt stecken zwei Röhrchen auf einer Linie.",
        en: "Pierce the second point the same way. Now there are two tubes on one line.",
        es: "Perfora el segundo punto de la misma forma. Ahora hay dos tubos en una misma línea." },
      svg: bildVorn(hubGrau(IN1[0], IN1[1]) + '<g class="a-erscheinen">' + hubGrau(IN2[0], IN2[1]) + "</g>" + abwurf(true) + '<line x1="' + IN1[0] + '" y1="' + IN1[1] + '" x2="' + IN2[0] + '" y2="' + IN2[1] + '" stroke="' + F.gold + '" stroke-width="2" stroke-dasharray="5 5"/>') },
    { text: { de: "Den Barbell durch beide Röhrchen führen; die Röhrchen werden dabei hinausgeschoben und abgezogen.",
        en: "Guide the barbell through both tubes; this pushes the tubes out and you pull them off.",
        es: "Pasa el barbell por los dos tubos; al hacerlo, los tubos salen y se retiran." },
      svg: bildVorn(bewegt(80, 0, barbell(IN1[0], IN1[1], IN2[0], IN2[1], false)) + '<g class="a-weg-links">' + hubGrau(IN1[0], IN1[1]) + "</g>" + pfeil(520, 470, 150)) },
    { text: { de: "Die Kugeln aufdrehen. Fertig: Der Stab liegt gerade und das Ohr wird nicht verbogen.",
        en: "Screw on the balls. Done: the bar lies straight and the ear is not bent.",
        es: "Enrosca las bolas. Listo: la barra queda recta y la oreja no se dobla." },
      svg: bildVorn(barbell(IN1[0], IN1[1], IN2[0], IN2[1], true) + haken()) }
  ];

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
