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
    snaptile: { de: "Snaptile", en: "Snaptile", es: "Snaptile" },
    ohrInnen: { de: "Ohr / Gehörgang", en: "ear / ear canal", es: "oreja / conducto" },
    wegbiegen: { de: "Tragus leicht wegbiegen", en: "bend the tragus slightly away", es: "separar un poco el trago" },
    langsamKontrolliert: { de: "langsam und kontrolliert", en: "slowly and controlled", es: "despacio y con control" },
    spitzeKnapp: { de: "Spitze tritt nur knapp aus", en: "tip only just comes out", es: "la punta apenas sale" },
    spitzeUnten: { de: "Spitze nach unten", en: "tip down", es: "punta hacia abajo" },
    abwurfBehaelter: { de: "Abwurfbehälter", en: "sharps container", es: "contenedor de agujas" },
    knorpelRook: { de: "Knorpel (Antihelix)", en: "cartilage (antihelix)", es: "cartílago (antehélix)" },
    obenEinstich: { de: "oben: Einstich", en: "top: entry", es: "arriba: entrada" },
    untenRohr: { de: "unten: Auffangrohr", en: "bottom: receiving tube", es: "abajo: tubo receptor" },
    unterFalte: { de: "unter der Falte: Austritt", en: "under the fold: exit", es: "bajo el pliegue: salida" },
    nadelauffangrohr: { de: "Nadelauffangrohr", en: "receiving tube", es: "tubo receptor" },
    vonObenLangsam: { de: "von oben, langsam", en: "from the top, slowly", es: "desde arriba, despacio" },
    rohrWeg: { de: "Auffangrohr weg", en: "remove receiving tube", es: "retirar tubo receptor" },
    banane: { de: "Banane", en: "curved barbell", es: "banana" },
    nasenfluegel: { de: "Nasenflügel", en: "side of the nostril", es: "ala de la nariz" },
    aussenSichtbar: { de: "außen (sichtbare Seite)", en: "outside (visible side)", es: "fuera (lado visible)" },
    nasenloch: { de: "Nasenloch", en: "nostril", es: "orificio nasal" },
    nasenfluegelStelle: { de: "Stelle am Nasenflügel", en: "spot on the nostril", es: "punto en el ala" },
    nachObenBiegen: { de: "leicht nach oben biegen", en: "bend slightly upwards", es: "doblar un poco hacia arriba" },
    spitzeUntenRaus: { de: "Spitze kommt unten aus dem Nasenloch", en: "tip comes out at the bottom of the nostril", es: "la punta sale por abajo del orificio" },
    septumSweetSpot: { de: "Sweet Spot (Septum)", en: "sweet spot (septum)", es: "punto dulce (septum)" },
    einstichseite: { de: "Einstichseite", en: "entry side", es: "lado de entrada" },
    austrittsseite: { de: "Austrittsseite", en: "exit side", es: "lado de salida" },
    septumzange: { de: "Septumzange", en: "septum forceps", es: "pinza de septum" },
    hufeisen: { de: "Hufeisen", en: "horseshoe", es: "herradura" },
    sweetSpot: { de: "Sweet Spot ertasten", en: "feel for the sweet spot", es: "buscar el punto dulce" },
    geradeAnlegen: { de: "gerade anlegen", en: "apply straight", es: "colocar recta" },
    vonRechtsNachLinks: { de: "von rechts nach links", en: "from right to left", es: "de derecha a izquierda" },
    snaptileOderGaze: { de: "Snaptile oder Gazeklemme", en: "Snaptile or gauze clamp", es: "Snaptile o pinza de gasa" },
    unterlippe: { de: "Unterlippe", en: "lower lip", es: "labio inferior" },
    innenMund: { de: "innen (Mund)", en: "inside (mouth)", es: "dentro (boca)" },
    zahnfleisch: { de: "Zahnfleisch", en: "gums", es: "encía" },
    abstandLippenrot: { de: "mehr als 3 mm zum Lippenrot", en: "more than 3 mm from the lip red", es: "a más de 3 mm del rojo del labio" },
    vonAussenInDenMund: { de: "von außen in den Mund", en: "from outside into the mouth", es: "desde fuera hacia la boca" },
    chlorhexamed: { de: "Chlorhexamed", en: "Chlorhexamed", es: "Chlorhexamed" },
    papiertuch: { de: "Papiertuch", en: "paper towel", es: "papel" },
    punktMitte: { de: "Punkt mittig", en: "dot in the middle", es: "punto en el centro" },
    unterseite: { de: "Unterseite", en: "underside", es: "parte inferior" },
    nebenBaendchen: { de: "knapp neben dem Bändchen", en: "just beside the frenulum", es: "justo al lado del frenillo" },
    zungenbaendchen: { de: "Zungenbändchen", en: "frenulum", es: "frenillo" },
    schraegNachOben: { de: "leicht schräg nach oben", en: "slightly angled upwards", es: "un poco inclinado hacia arriba" },
    zunge: { de: "Zunge", en: "tongue", es: "lengua" },
    untenEinstich: { de: "unten: Einstich", en: "below: entry", es: "abajo: entrada" },
    obenPunkt: { de: "oben: Punkt", en: "top: dot", es: "arriba: punto" },
    barbellMin19: { de: "Barbell mind. 19 mm", en: "barbell min. 19 mm", es: "barbell mín. 19 mm" },
    kugelObenAuf: { de: "Kugel oben aufdrehen", en: "screw on top ball", es: "enroscar bola de arriba" },
    koerpermitte: { de: "Körpermitte", en: "midline", es: "línea media" },
    imLiegen: { de: "Kunde liegt", en: "client lying down", es: "cliente tumbado" },
    imNabelOben: { de: "oben im Nabel", en: "top inside the navel", es: "arriba en el ombligo" },
    gazeklemme: { de: "Gazeklemme", en: "gauze clamp", es: "pinza de gasa" },
    vonObenNachUnten: { de: "von oben nach unten", en: "from the top down", es: "de arriba abajo" },
    nabelrand: { de: "Nabelrand", en: "navel rim", es: "borde del ombligo" },
    untenNabel: { de: "unten: Nabel", en: "bottom: navel", es: "abajo: ombligo" },
    sterilesPflaster: { de: "steriles Pflaster", en: "sterile plaster", es: "apósito estéril" },
    brustwarze: { de: "Brustwarze", en: "nipple", es: "pezón" },
    oberkoerperFrei: { de: "Oberkörper ganz frei", en: "upper body fully bare", es: "torso descubierto" },
    links: { de: "links", en: "left", es: "izquierda" },
    rechts: { de: "rechts", en: "right", es: "derecha" },
    barbell: { de: "Barbell", en: "barbell", es: "barbell" },
    alkoholtupfer: { de: "Alkoholtupfer", en: "alcohol swab", es: "toallita de alcohol" },
    reinigungAbheilung: { de: "Reinigung, Pflege, Abheilung", en: "cleaning, care, healing", es: "limpieza, cuidados, cicatrización" },
    spaltSchema: { de: "Spalt (schematisch)", en: "cleft (schematic)", es: "hendidura (esquema)" },
    schematisch: { de: "schematisch", en: "schematic", es: "esquemático" },
    obenAmSpalt: { de: "oben am Ende des Spalts", en: "top end of the cleft", es: "extremo superior" },
    untenSpalt: { de: "unten: Spalt", en: "bottom: cleft", es: "abajo: hendidura" },
    gewebeSchema: { de: "Gewebe (schematisch)", en: "tissue (schematic)", es: "tejido (esquema)" },
    kan16oder18: { de: "16G oder 18G", en: "16G or 18G", es: "16G o 18G" },
    punktAnzeichnen: { de: "Punkt anzeichnen", en: "mark the dot", es: "marcar el punto" },
    tippTitel: { de: "Gut zu wissen", en: "Good to know", es: "Bueno saberlo" },
    tippZeile1: { de: "Es gibt auch spezielle Tragusklemmen", en: "There are also special tragus clamps", es: "También hay pinzas especiales para trago" },
    tippZeile2: { de: "mit Auffanghütchen.", en: "with a receiving cap.", es: "con capuchón receptor." },
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
    { text: { de: "Ansicht von vorn: Neben dem herkömmlichen Ohrloch werden drei Punkte im oberen Ohrläppchen angezeichnet: in gleichem Abstand und in einem leichten Bogen, der der Rundung des Ohrs folgt. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Front view: next to the standard lobe hole, three points are marked in the upper lobe: evenly spaced and in a gentle curve that follows the rounding of the ear. Check with the client in the mirror that it is right.",
        es: "Vista frontal: junto al agujero habitual del lóbulo se marcan tres puntos en la parte superior del lóbulo: a la misma distancia y en una ligera curva que sigue el contorno de la oreja. Comprueba con el cliente en el espejo que está bien." },
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
    { text: { de: "Dann anzeichnen: zwei Punkte, wo gestochen wird (oben nahe dem Kopf, unten am äußeren Rand), und durch jeden Punkt einen Strich für die Stichrichtung. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Then mark: two dots where you will pierce (upper one near the head, lower one on the outer rim), and a line through each dot for the piercing direction. Check with the client in the mirror that it is right.",
        es: "Después marca: dos puntos donde vas a perforar (arriba cerca de la cabeza, abajo en el borde exterior) y una línea por cada punto para la dirección de la perforación. Comprueba con el cliente en el espejo que está bien." },
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
      (o.wand ? '<text x="' + (x1 - 14) + '" y="96" text-anchor="end" class="a-klein" fill="#7C8A90">{' + o.gewebeWort + '}</text>' : '<text x="' + (x2 + 14) + '" y="96" class="a-klein" fill="#7C8A90">{' + o.gewebeWort + '}</text>') +
      (o.wand ? '<g filter="url(#aSchatten)"><path d="M' + o.wand + ' 40 C' + (o.wand - 14) + ' 120 ' + (o.wand - 14) + ' 240 ' + o.wand + ' 330 L640 330 L640 40 Z" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2" opacity=".9"/></g>' +
        '<text x="' + (o.wand + 24) + '" y="300" class="a-klein" fill="#7C8A90">{' + o.wandWort + '}</text>' : "");
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
  var ABWURF_TEXT = { de: "Die Nadel sofort in den Abwurfbehälter werfen, mit der Spitze nach unten. Nie zurück in die Schutzkappe und nie auf den Tisch.",
    en: "Drop the needle straight into the sharps container, tip down. Never back into the cap and never onto the table.",
    es: "Echa la aguja directamente al contenedor, con la punta hacia abajo. Nunca de nuevo al capuchón ni sobre la mesa." };
  function abwurfGross() {
    // großer Abwurfbehälter in der Mitte, die Nadel fällt mit der Spitze voran hinein
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + mini(170, -330, 2, '<defs><clipPath id="aKlipAbwurf"><rect x="0" y="-200" width="200" height="510"/></clipPath></defs><g clip-path="url(#aKlipAbwurf)"><g transform="translate(0 70)">' + nadelSenkrecht() + "</g></g>" + abwurf(true)) +
      hinweis(500, 100, 326, 40, "spitzeUnten", 190) + hinweis(500, 260, 384, 240, "abwurfBehaelter", 190) + "</svg>";
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
    S.push({ text: t.abwurf, svg: bildQ(o, (o.werkzeug === "rohr" ? auffangrohr(o, o.rohrBleibt ? "" : "a-weg") : o.werkzeug === "frei" ? "" : zangeQ(o, o.werkzeugWort, "a-weg")) + kanal(o) + kanuele(tip, false) + bewegt(0, -230, nadel(tip)) + hinweis(470, 110, 320, Y - 7, "roehrchen", 230)) });
    S.push({ text: ABWURF_TEXT, svg: abwurfGross() });
    if (o.rohrBleibt) S.push({ text: t.rohrWeg, svg: bildQ(o, auffangrohr(o, "a-weg") + kanal(o) + kanuele(tip, false) + hinweis(470, 300, x2 + 60, Y + 10, "rohrWeg", 200)) });
    S.push({ text: t.ansatz, svg: bildQ(o, kanal(o) + kanuele(tip, false, l - 6, r) + ansatzFaellt(l - 6) + schere(l + 8)) });
    if (o.schmuck === "hufeisen") {
      var RRg = o.ringR, C = [320, Y + RRg];
      var pt = function (g) { var w = g * Math.PI / 180; return [C[0] + RRg * Math.cos(w), C[1] + RRg * Math.sin(w)]; };
      var a1 = pt(62), a2 = pt(118);
      var ring = function (klasse) {
        var d = "M" + a1[0].toFixed(1) + " " + a1[1].toFixed(1) + " A" + RRg + " " + RRg + " 0 1 0 " + a2[0].toFixed(1) + " " + a2[1].toFixed(1);
        var u = 2 * Math.PI * RRg, st = klasse ? ' class="' + klasse + '" stroke-dasharray="' + u + '" style="--a-laenge:' + u + '"' : "";
        return '<path d="' + d + '" fill="none" stroke="#7D8792" stroke-width="9" stroke-linecap="round"' + st + "/>" + '<path d="' + d + '" fill="none" stroke="url(#aTitan)" stroke-width="6" stroke-linecap="round"' + st + "/>";
      };
      S.push({ text: t.einsetzen, svg: bildQ(o, kanal(o) + bewegt(0, -130, kanuele(tip, false, l, r)) + ring("a-zeichnen") + kugelVorn(a1[0] + 4, a1[1] + 6, 9) + hinweis(500, 300, a1[0] + 8, a1[1] + 10, "kugelSchonDrauf", 190) + hinweis(500, 110, x2 + 12, Y - 6, "nur23", 190)) });
      S.push({ text: t.schieben, svg: bildQ(o, '<g transform="translate(-130 0)"><g class="a-weg-links">' + kanuele(tip, false, l, r) + "</g></g>" + ring("") + kugelVorn(a1[0] + 4, a1[1] + 6, 9)) });
      S.push({ text: t.kugel, svg: bildQ(o, ring("") + kugelVorn(a1[0] + 4, a1[1] + 6, 9) + bewegt(-60, 0, kugelVorn(a2[0] - 4, a2[1] + 6, 9)) + drehpfeil(a2[0] - 4, a2[1] + 30) + hinweis(150, 300, a2[0] - 8, a2[1] + 10, "kugelAuf", 190)) });
      S.push({ text: t.fertig, svg: bildQ(o, ring("") + kugelVorn(a1[0] + 4, a1[1] + 6, 9) + kugelVorn(a2[0] - 4, a2[1] + 6, 9) + hinweis(500, 300, C[0] + 20, C[1] + RRg - 6, o.schmuckWort, 160) + haken()) });
      return S;
    }
    if (o.vonEintritt) {
      var xE = l + 12 - o.laenge, sh2 = F0 - xE, ende = F0 + o.laenge;
      S.push({ text: t.einsetzen, svg: bildQ(o, kanal(o) + kanuele(tip, false, l, r) + bewegt(-80, 0, schmuckGerade(o, xE, true, false)) + pfeil(110, 160, 250) + hinweis(150, 310, l + 6, Y + 6, "nur23", 190) + hinweis(150, 110, xE - 9, Y - 8, "kugelSchonDrauf", 190)) });
      S.push({ text: t.schieben, svg: bildQ(o, bewegt(0, sh2, kanuele(tip, false, l, r)) + bewegt(0, sh2, schmuckGerade(o, xE, true, false)) + pfeil(160, 220, 250)) });
      S.push({ text: t.kugel, svg: bildQ(o, '<g transform="translate(' + sh2 + ' 0)"><g class="a-weg">' + kanuele(tip, false, l, r) + "</g></g>" + schmuckGerade(o, F0, true, false) + bewegt(60, 0, kugel(ende + 9)) + drehpfeil(ende + 9, Y - 26) + hinweis(500, 300, ende + 6, Y + 8, o.kugelWort || "kugelAuf", 210)) });
      S.push({ text: t.fertig, svg: bildQ(o, schmuckGerade(o, F0, true, false) + kugel(ende + 9) + hinweis(150, 300, F0 + 12, Y + 8, "ueberlaenge", 180) + (o.schmuckWort ? hinweis(500, 300, 320, Y + 4, o.schmuckWort, 180) : "") + haken()) });
      return S;
    }
    S.push({ text: t.einsetzen, svg: bildQ(o, kanal(o) + kanuele(tip, false, l, r) + bewegt(80, 0, schmuckGerade(o, xIn, false, true)) + pfeil(530, 480, 250) + hinweis(470, 310, xIn + 6, Y + 6, "nur23", 190)) });
    S.push({ text: t.schieben, svg: bildQ(o, bewegt(0, -sh, kanuele(tip, false, l, r)) + bewegt(0, -sh, schmuckGerade(o, xIn, false, true)) + pfeil(480, 420, 250)) });
    S.push({ text: t.kugel, svg: bildQ(o, '<g class="a-weg-links">' + kanuele(tip, false, l - sh, r - sh) + "</g>" + schmuckGerade(o, F0, false, true) + '<g transform="translate(' + (F0 - 258) + ' 0)">' + klemmzangeVorn() + "</g>" + bewegt(-70, 0, kugel(F0 - 9) + kugelgreifer(F0 - 9)) + hinweis(470, 300, F0 + 4, Y + 6, "kugelAuf", 190)) });
    S.push({ text: t.fertig, svg: bildQ(o, schmuckGerade(o, F0, true, true) + hinweis(150, 300, F0 + 12, Y + 8, "ueberlaenge", 180) + (o.schmuckWort ? hinweis(500, 300, 320, Y + 4, o.schmuckWort, 140) : "") + haken()) });
    return S;
  }
  // Ansicht von vorn für einzelne Stellen
  function vornOhr(punkte, hw) { return bildVorn('<g class="a-erscheinen">' + punkte.map(function (q) { return punkt(q[0], q[1]); }).join("") + "</g>" + hw); }

  // Kanüle auf einen Punkt zu, beliebiger Winkel; sx < 1 verkürzt (zeigt schräg in die Bildebene)
  function kanueleAuf(p, rot, sx, langsam) {
    var inner = '<g class="a-bewegt" style="--a-von:-140px;--a-nach:0px' + (langsam ? ";animation-duration:3.8s" : "") + '">' + kanuele(390, true) + "</g>";
    return '<g transform="translate(' + p[0] + " " + p[1] + ") rotate(" + rot + ") scale(" + sx + ' .62) translate(-390 -180)">' + inner + "</g>";
  }

  // Rook: von oben nach unten durch die Antihelix-Falte, Nadelauffangrohr unter der Falte, Ersteinsatz Banane
  var RK1 = [325, 100], RK2 = [328, 124];
  function rohrUnterFalte(klasse) {
    // Nadelauffangrohr von unten (aus der Ohrmuschel) unter die Knorpelfalte gesetzt
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)"><path d="M' + RK2[0] + " " + (RK2[1] + 2) + " L" + (RK2[0] + 22) + ' 214" stroke="#6F7984" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M' + RK2[0] + " " + (RK2[1] + 2) + " L" + (RK2[0] + 22) + ' 214" stroke="url(#aStahlV)" stroke-width="9" stroke-linecap="round"/>' +
      '<ellipse cx="' + RK2[0] + '" cy="' + (RK2[1] + 2) + '" rx="5" ry="3" fill="#5F666D"/></g>';
  }
  var rookO = {
    d: 52, unten: Y + 92, knorpel: true, gewebeWort: "knorpelRook", links: "obenEinstich", rechts: "unten",
    werkzeug: "rohr", rohrBleibt: true, gauge: "kan18", schmuck: "barbell", schmuckWort: "banane", ueberVorn: 22,
    vorn: "",
    texte: {
      lage: { de: "Ansicht von vorn: Der Rook sitzt senkrecht in der Antihelix, dem Knorpelsteg über der Ohrmuschel. Oben den Einstich und unter der Falte den Austritt anzeichnen. Der Kunde schaut im Spiegel.",
        en: "Front view: the rook sits vertically in the antihelix, the cartilage ridge above the concha. Mark the entry at the top and the exit under the fold. The client checks in the mirror.",
        es: "Vista frontal: el rook va en vertical en el antehélix, el pliegue de cartílago sobre la concha. Marca la entrada arriba y la salida bajo el pliegue. El cliente lo mira en el espejo." },
      halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Von oben mit der 18G-Kanüle gerade durch beide Markierungen stechen, bis die Spitze im Auffangrohr steckt.",
        en: "In cross-section: pierce from the top with the 18G cannula straight through both marks until the tip sits in the receiving tube.",
        es: "En corte: perfora desde arriba con la cánula 18G recto por ambas marcas hasta que la punta quede en el tubo receptor." },
      abwurf: { de: "Die Stahlnadel nach oben herausziehen. Das Auffangrohr bleibt noch angelegt, das Röhrchen bleibt im Stichkanal.",
        en: "Pull the steel needle out at the top. The receiving tube stays in place for now, and the tube stays in the channel.",
        es: "Saca la aguja de acero por arriba. El tubo receptor sigue colocado por ahora y el tubo se queda en el canal." },
      rohrWeg: { de: "Erst jetzt das Nadelauffangrohr unter der Falte wegnehmen.",
        en: "Only now remove the receiving tube from under the fold.",
        es: "Solo ahora retira el tubo receptor de debajo del pliegue." },
      ansatz: { de: "Oben den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "At the top, cut off the green hub with scissors so only the tube is left.",
        es: "Arriba, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Die Banane nur 2–3 mm von unten in das Röhrchen stecken. Die untere Kugel ist schon aufgedreht.",
        en: "Insert the curved barbell only 2–3 mm into the tube from below. The lower ball is already screwed on.",
        es: "Introduce la banana solo 2–3 mm en el tubo por abajo. La bola de abajo ya está enroscada." },
      schieben: { de: "Die Banane durchschieben, nicht ziehen. Sie schiebt das Röhrchen oben hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the curved barbell through, do not pull. It pushes the tube out at the top. Have the client breathe out.",
        es: "Empuja la banana, no tires. Saca el tubo por arriba. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die obere Kugel mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw on the upper ball with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola de arriba con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Fertig: Die Banane sitzt senkrecht in der Falte, mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen und im Spiegel zeigen.",
        en: "Done: the curved barbell sits vertically in the fold, with extra length for swelling. Spray with Kodan again and show it in the mirror.",
        es: "Listo: la banana queda vertical en el pliegue, con longitud extra para la hinchazón. Vuelve a rociar con Kodan y muéstralo en el espejo." }
    }
  };
  var rookBasis = piercingSchritte(rookO);
  var rook = [
    { text: rookO.texte.lage, svg: vornOhr([RK1, RK2], hinweis(150, 70, RK1[0] - 4, RK1[1] - 2, "obenEinstich", 190) + hinweis(530, 200, RK2[0] + 4, RK2[1] + 2, "unterFalte", 190)) },
    { text: { de: "Am ganzen Ohr: Das Nadelauffangrohr von unten unter die Knorpelfalte setzen, die Öffnung liegt genau auf der unteren Markierung. Eine Zange passt hier nicht.",
        en: "On the whole ear: place the receiving tube from below under the cartilage fold, with its opening exactly on the lower mark. A clamp does not fit here.",
        es: "En toda la oreja: coloca el tubo receptor desde abajo bajo el pliegue de cartílago, con la abertura justo sobre la marca de abajo. Aquí no cabe una pinza." },
      svg: bildVorn(punkt(RK1[0], RK1[1]) + punkt(RK2[0], RK2[1]) + '<g class="a-erscheinen">' + rohrUnterFalte() + "</g>" + hinweis(530, 230, RK2[0] + 16, 180, "nadelauffangrohr", 210)) },
    { text: { de: "Langsam und kontrolliert von oben stechen, durch die Falte hindurch genau in das Auffangrohr.",
        en: "Pierce slowly and under control from the top, through the fold straight into the receiving tube.",
        es: "Perfora despacio y con control desde arriba, a través del pliegue justo dentro del tubo receptor." },
      svg: bildVorn(punkt(RK1[0], RK1[1]) + rohrUnterFalte() + kanueleAuf(RK2, 97, .62, true) + hinweis(150, 70, RK1[0] - 4, RK1[1], "vonObenLangsam", 210)) }
  ].concat(rookBasis.slice(2));

  // ---------- Nase von vorn ----------
  var NP = [266, 218], NAUS = [293, 242];
  function nase(gebogen) {
    var dy = gebogen ? -6 : 0;
    var umriss = "M302 26 C302 92 290 142 270 184 C250 200 242 228 258 244 C272 256 290 252 300 246 C310 257 330 257 340 246 C350 252 368 256 382 244 C398 228 390 200 370 184 C350 142 338 92 338 26";
    return '<g filter="url(#aWeich)" opacity=".35"><rect x="170" y="0" width="300" height="360" rx="80" fill="#EBC3AE"/></g>' +
      '<g filter="url(#aSchatten)"><path d="' + umriss + '" fill="url(#aHaut)" stroke="' + F.hautRand + '" stroke-width="2"/></g>' +
      '<ellipse cx="320" cy="214" rx="26" ry="20" fill="#FBE6DA" opacity=".5"/>' +
      '<g transform="translate(0 ' + dy + ')"><path d="M270 196 C256 210 258 234 276 242" fill="none" stroke="' + F.hautRand + '" stroke-width="2"/>' +
      '<ellipse cx="294" cy="243" rx="13" ry="6" fill="#8E5A4A" transform="rotate(12 294 243)"/></g>' +
      '<path d="M370 196 C384 210 382 234 364 242" fill="none" stroke="' + F.hautRand + '" stroke-width="2"/>' +
      '<ellipse cx="346" cy="243" rx="13" ry="6" fill="#8E5A4A" transform="rotate(-12 346 243)"/>' +
      '<path d="M308 268 L304 320 M332 268 L336 320" stroke="' + F.hautRand + '" stroke-width="1.6" opacity=".5"/>' +
      '<path d="M262 322 C290 312 350 312 378 322" fill="none" stroke="#D49A8A" stroke-width="3" opacity=".7"/>';
  }
  function bildNase(gebogen, inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + etikett(530, "ansichtVorn", 170) + nase(gebogen) + inhalt + "</svg>";
  }
  function klemmeAn(p, dx, dy, klasse) {
    // Snaptile von vorn: Fensterbacke am Punkt, Bügel in Richtung (dx, dy)
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)">' +
      '<path d="M' + p[0] + " " + p[1] + " L" + (p[0] + dx) + " " + (p[1] + dy) + '" stroke="#6F7984" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M' + p[0] + " " + p[1] + " L" + (p[0] + dx) + " " + (p[1] + dy) + '" stroke="url(#aStahlV)" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="13" fill="#FFFFFF" fill-opacity=".15" stroke="#6F7984" stroke-width="7"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="13" fill="none" stroke="url(#aStahl)" stroke-width="4.5"/></g>';
  }
  var nostrilO = {
    d: 40, unten: Y + 80, knorpel: false, gewebeWort: "nasenfluegel", links: "aussenSichtbar", rechts: "nasenloch",
    werkzeug: "snaptile", werkzeugWort: "snaptile", gauge: "kan18", schmuck: "labret", ueberVorn: 24, vorn: "",
    texte: {
      lage: { de: "Ansicht von vorn: Die Stelle am Nasenflügel anzeichnen. Der Kunde schaut im Spiegel, ob Höhe und Seite passen.",
        en: "Front view: mark the spot on the side of the nostril. The client checks in the mirror that the height and side are right.",
        es: "Vista frontal: marca el punto en el ala de la nariz. El cliente comprueba en el espejo la altura y el lado." },
      halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 18G-Kanüle von außen durch den Nasenflügel stechen. Die Spitze kommt innen im Nasenloch heraus.",
        en: "In cross-section: pierce from the outside through the side of the nostril with the 18G cannula. The tip comes out inside the nostril.",
        es: "En corte: perfora desde fuera el ala de la nariz con la cánula 18G. La punta sale dentro del orificio nasal." },
      abwurf: { de: "Snaptile abnehmen und die Stahlnadel nach außen herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the Snaptile and pull the steel needle out towards the outside. The tube stays in the channel.",
        es: "Quita el Snaptile y saca la aguja de acero hacia fuera. El tubo se queda en el canal." },
      ansatz: { de: "Außen den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "On the outside, cut off the green hub with scissors so only the tube is left.",
        es: "Por fuera, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Das Labret nur 2–3 mm von innen, aus dem Nasenloch, in das Röhrchen stecken. Die Platte bleibt innen.",
        en: "Insert the labret only 2–3 mm into the tube from the inside, from the nostril. The disc stays inside.",
        es: "Introduce el labret solo 2–3 mm en el tubo desde dentro, desde el orificio nasal. El disco se queda dentro." },
      schieben: { de: "Das Labret durchschieben, nicht ziehen. Es schiebt das Röhrchen außen hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the labret through, do not pull. It pushes the tube out on the outside. Have the client breathe out.",
        es: "Empuja el labret, no tires. Saca el tubo por fuera. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die Kugel außen mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw the ball on outside with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola por fuera con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Fertig: Kugel außen, Platte innen im Nasenloch, mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen und im Spiegel zeigen.",
        en: "Done: ball outside, disc inside the nostril, with extra length for swelling. Spray with Kodan again and show it in the mirror.",
        es: "Listo: bola por fuera, disco dentro del orificio, con longitud extra para la hinchazón. Vuelve a rociar con Kodan y muéstralo en el espejo." }
    }
  };
  var nostrilBasis = piercingSchritte(nostrilO);
  var nostril = [
    { text: nostrilO.texte.lage, svg: bildNase(false, '<g class="a-erscheinen">' + punkt(NP[0], NP[1]) + "</g>" + hinweis(140, 110, NP[0] - 4, NP[1] - 4, "nasenfluegelStelle", 200)) },
    { text: { de: "Das Snaptile am Nasenflügel anlegen, das Fenster liegt auf der Markierung. Statt des Snaptiles geht auch eine Gazeklemme: Das Snaptile ist ein Einmalwerkzeug, die Gazeklemme wird nach jedem Kunden sterilisiert und wiederverwendet. Den Nasenflügel damit leicht nach oben biegen.",
        en: "Apply the Snaptile to the side of the nostril with the window over the mark. A gauze clamp works instead: the Snaptile is single-use, the gauze clamp is sterilised after every client and reused. Use it to bend the nostril slightly upwards.",
        es: "Coloca el Snaptile en el ala de la nariz con la ventana sobre la marca. En lugar del Snaptile sirve también una pinza de gasa: el Snaptile es de un solo uso, la pinza de gasa se esteriliza tras cada cliente y se reutiliza. Con él, dobla el ala un poco hacia arriba." },
      svg: bildNase(true, punkt(NP[0], NP[1] - 7) + bewegt(-50, 0, klemmeAn([NP[0], NP[1] - 7], -40, 100)) +
        '<g transform="rotate(-90 222 200)">' + pfeil(200, 240, 200) + "</g>" + hinweis(140, 110, 222, 170, "nachObenBiegen", 210) + hinweis(150, 300, NP[0] - 30, 290, "snaptileOderGaze", 230)) },
    { text: { de: "Von außen langsam und kontrolliert durch das Fenster stechen. Weil der Nasenflügel nach oben gebogen ist, kommt die Spitze unten aus dem Nasenloch heraus.",
        en: "Pierce slowly and under control from the outside through the window. Because the nostril is bent upwards, the tip comes out at the bottom of the nostril.",
        es: "Perfora despacio y con control desde fuera a través de la ventana. Como el ala está doblada hacia arriba, la punta sale por abajo del orificio nasal." },
      svg: bildNase(true, klemmeAn([NP[0], NP[1] - 7], -40, 100) + kanueleAuf(NAUS, 50, .55, true) + hinweis(480, 300, NAUS[0] + 2, NAUS[1] + 2, "spitzeUntenRaus", 290)) }
  ].concat(nostrilBasis.slice(2));

  // Septum: Septumzange gerade in den Sweet Spot, 18G von rechts nach links, Hufeisen mit einer Kugel schon drauf
  var SP = [320, 249];
  var septumO = {
    d: 30, unten: Y + 44, knorpel: false, gewebeWort: "septumSweetSpot", links: "einstichseite", rechts: "austrittsseite",
    werkzeug: "zange", werkzeugWort: "septumzange", gauge: "kan18", schmuck: "hufeisen", schmuckWort: "hufeisen", ringR: 50, ueberVorn: 20, vorn: "",
    texte: {
      lage: { de: "Ansicht von vorn: Den Sweet Spot ertasten und anzeichnen, die dünne Stelle zwischen dem Knorpel der Nasenscheidewand und der Nasenspitze. Dort sitzt das Septum. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Front view: feel for the sweet spot and mark it, the thin area between the septum cartilage and the tip of the nose. That is where the septum piercing sits. Check with the client in the mirror that it is right.",
        es: "Vista frontal: busca al tacto el punto dulce y márcalo, la zona fina entre el cartílago del tabique y la punta de la nariz. Ahí va el septum. Comprueba con el cliente en el espejo que está bien." },
      halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 18G-Kanüle von rechts nach links gerade durch den Sweet Spot stechen, durch das Fenster der Septumzange.",
        en: "In cross-section: pierce straight through the sweet spot from right to left with the 18G cannula, through the window of the septum forceps.",
        es: "En corte: perfora recto el punto dulce de derecha a izquierda con la cánula 18G, a través de la ventana de la pinza de septum." },
      abwurf: { de: "Septumzange abnehmen und die Stahlnadel zur Einstichseite herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the septum forceps and pull the steel needle out on the entry side. The tube stays in the channel.",
        es: "Quita la pinza de septum y saca la aguja de acero por el lado de entrada. El tubo se queda en el canal." },
      ansatz: { de: "Auf der Einstichseite den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "On the entry side, cut off the green hub with scissors so only the tube is left.",
        es: "En el lado de entrada, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Am Hufeisen ist auf einer Seite schon eine Kugel drauf. Das freie Ende nur 2–3 mm von der Austrittsseite in das Röhrchen stecken und das Hufeisen durch den Stichkanal führen. Das Röhrchen geht dabei auf der Einstichseite hinaus.",
        en: "The horseshoe already has a ball on one end. Insert the free end only 2–3 mm into the tube from the exit side and guide the horseshoe through the channel. The tube comes out on the entry side.",
        es: "La herradura ya tiene una bola en un extremo. Introduce el extremo libre solo 2–3 mm en el tubo por el lado de salida y pasa la herradura por el canal. El tubo sale por el lado de entrada." },
      schieben: { de: "Das Röhrchen vom Hufeisen abziehen.",
        en: "Pull the tube off the horseshoe.",
        es: "Retira el tubo de la herradura." },
      kugel: { de: "Die zweite Kugel auf das freie Ende aufdrehen.",
        en: "Screw the second ball onto the free end.",
        es: "Enrosca la segunda bola en el extremo libre." },
      fertig: { de: "Fertig: Das Hufeisen sitzt im Sweet Spot, die Kugeln zeigen nach unten. Nochmals mit Kodan einsprühen und im Spiegel zeigen.",
        en: "Done: the horseshoe sits in the sweet spot with the balls pointing down. Spray with Kodan again and show it in the mirror.",
        es: "Listo: la herradura queda en el punto dulce con las bolas hacia abajo. Vuelve a rociar con Kodan y muéstralo en el espejo." }
    }
  };
  var septumBasis = piercingSchritte(septumO);
  var septum = [
    { text: septumO.texte.lage, svg: bildNase(false, '<g class="a-erscheinen">' + punkt(SP[0], SP[1]) + "</g>" + hinweis(500, 120, SP[0] + 4, SP[1] - 4, "sweetSpot", 200)) },
    { text: { de: "Die Septumzange gerade in den Sweet Spot anlegen, das Fenster liegt genau auf der dünnen Stelle.",
        en: "Apply the septum forceps straight into the sweet spot, with the window exactly over the thin area.",
        es: "Coloca la pinza de septum recta en el punto dulce, con la ventana justo sobre la zona fina." },
      svg: bildNase(false, punkt(SP[0], SP[1]) + '<g class="a-bewegt" style="--a-von:0px;--a-nach:0px">' + klemmeAn(SP, 0, 100) + "</g>" + hinweis(500, 120, SP[0] + 8, SP[1] - 8, "geradeAnlegen", 200) + hinweis(150, 300, SP[0] - 2, 330, "septumzange", 170)) },
    { text: { de: "Langsam und kontrolliert von rechts nach links durch das Fenster stechen.",
        en: "Pierce slowly and under control from right to left through the window.",
        es: "Perfora despacio y con control de derecha a izquierda a través de la ventana." },
      svg: bildNase(false, klemmeAn(SP, 0, 100) + kanueleAuf([SP[0] - 10, SP[1]], 180, .5, true) + hinweis(150, 120, SP[0] - 12, SP[1] - 6, "vonRechtsNachLinks", 230)) }
  ].concat(septumBasis.slice(2));

  // ---------- Mund von vorn ----------
  var LP = [320, 266];
  function mund() {
    return '<g filter="url(#aWeich)" opacity=".35"><rect x="150" y="0" width="340" height="360" rx="90" fill="#EBC3AE"/></g>' +
      '<g filter="url(#aSchatten)"><path d="M180 40 C200 20 440 20 460 40 L470 330 C420 350 220 350 170 330 Z" fill="url(#aHaut)" opacity=".95"/></g>' +
      '<path d="M306 70 L302 150 M334 70 L338 150" stroke="' + F.hautRand + '" stroke-width="1.6" opacity=".5"/>' +
      '<path d="M236 190 C262 170 298 160 320 172 C342 160 378 170 404 190 C380 196 350 198 320 196 C290 198 260 196 236 190 Z" fill="#D98C86" stroke="#B86E68" stroke-width="1.6"/>' +
      '<path d="M236 190 C270 200 370 200 404 190 C390 228 356 244 320 244 C284 244 250 228 236 190 Z" fill="#E39C94" stroke="#B86E68" stroke-width="1.6"/>' +
      '<path d="M240 191 C280 197 360 197 400 191" fill="none" stroke="#8E5A4A" stroke-width="2.2"/>' +
      '<path d="M286 226 C300 232 340 232 354 226" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".45"/>' +
      '<path d="M270 312 C300 326 340 326 370 312" fill="none" stroke="' + F.hautRand + '" stroke-width="2" opacity=".5"/>';
  }
  function bildMund(inhalt) { return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + etikett(530, "ansichtVorn", 170) + mund() + inhalt + "</svg>"; }
  var labretO = {
    d: 64, unten: Y + 110, knorpel: false, gewebeWort: "unterlippe", links: "aussenSichtbar", rechts: "innenMund",
    werkzeug: "snaptile", werkzeugWort: "snaptile", gauge: "kan18", schmuck: "labret", ueberVorn: 36, wand: 480, wandWort: "zahnfleisch", vorn: "",
    texte: {
      lage: { de: "Ansicht von vorn: Die Stelle mittig unter der Unterlippe anzeichnen, mit mehr als 3 mm Abstand zum Lippenrot. Der Kunde schaut im Spiegel.",
        en: "Front view: mark the spot centred below the lower lip, more than 3 mm from the red of the lip. The client checks in the mirror.",
        es: "Vista frontal: marca el punto centrado bajo el labio inferior, a más de 3 mm del rojo del labio. El cliente lo mira en el espejo." },
      halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 18G-Kanüle von außen durch die Lippe in den Mund stechen. Dahinter liegt das Zahnfleisch, deshalb kontrolliert stechen.",
        en: "In cross-section: pierce from the outside through the lip into the mouth with the 18G cannula. The gums are behind it, so pierce under control.",
        es: "En corte: perfora desde fuera a través del labio hacia la boca con la cánula 18G. Detrás está la encía, así que perfora con control." },
      abwurf: { de: "Snaptile abnehmen und die Stahlnadel nach außen herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the Snaptile and pull the steel needle out towards the outside. The tube stays in the channel.",
        es: "Quita el Snaptile y saca la aguja de acero hacia fuera. El tubo se queda en el canal." },
      ansatz: { de: "Außen den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "On the outside, cut off the green hub with scissors so only the tube is left.",
        es: "Por fuera, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Das Labret nur 2–3 mm von innen aus dem Mund in das Röhrchen stecken. Die Platte bleibt innen im Mund. Viel Überlänge wählen, die Lippe schwillt stark an.",
        en: "Insert the labret only 2–3 mm into the tube from inside the mouth. The disc stays inside the mouth. Choose plenty of extra length, the lip swells a lot.",
        es: "Introduce el labret solo 2–3 mm en el tubo desde dentro de la boca. El disco se queda dentro. Elige bastante longitud extra, el labio se hincha mucho." },
      schieben: { de: "Das Labret durchschieben, nicht ziehen. Es schiebt das Röhrchen außen hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the labret through, do not pull. It pushes the tube out on the outside. Have the client breathe out.",
        es: "Empuja el labret, no tires. Saca el tubo por fuera. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die Kugel außen mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw the ball on outside with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola por fuera con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Fertig: Kugel außen, Platte innen im Mund, mit viel Überlänge, weil die Lippe stark anschwellen kann. Nochmals mit Kodan einsprühen und im Spiegel zeigen.",
        en: "Done: ball outside, disc inside the mouth, with plenty of extra length because the lip can swell a lot. Spray with Kodan again and show it in the mirror.",
        es: "Listo: bola por fuera, disco dentro de la boca, con bastante longitud extra porque el labio puede hincharse mucho. Vuelve a rociar con Kodan y muéstralo en el espejo." }
    }
  };
  var labretBasis = piercingSchritte(labretO);
  var labretPiercing = [
    { text: labretO.texte.lage, svg: bildMund('<g class="a-erscheinen">' + punkt(LP[0], LP[1]) + "</g>" + hinweis(510, 270, LP[0] + 6, LP[1], "abstandLippenrot", 220)) },
    { text: { de: "Das Snaptile anlegen, das Fenster liegt auf der Markierung. Statt des Snaptiles geht auch eine Gazeklemme: Das Snaptile ist ein Einmalwerkzeug, die Gazeklemme wird nach jedem Kunden sterilisiert und wiederverwendet.",
        en: "Apply the Snaptile with the window over the mark. A gauze clamp works instead: the Snaptile is single-use, the gauze clamp is sterilised after every client and reused.",
        es: "Coloca el Snaptile con la ventana sobre la marca. En lugar del Snaptile sirve también una pinza de gasa: el Snaptile es de un solo uso, la pinza de gasa se esteriliza tras cada cliente y se reutiliza." },
      svg: bildMund(punkt(LP[0], LP[1]) + bewegt(-50, 0, klemmeAn(LP, -60, 80)) + hinweis(150, 300, LP[0] - 40, 320, "snaptileOderGaze", 230)) },
    { text: { de: "Langsam und kontrolliert von außen durch das Fenster in den Mund hinein stechen.",
        en: "Pierce slowly and under control from the outside through the window into the mouth.",
        es: "Perfora despacio y con control desde fuera a través de la ventana hacia la boca." },
      svg: bildMund(klemmeAn(LP, -60, 80) + kanueleAuf(LP, 30, .42, true) + hinweis(510, 270, LP[0] + 6, LP[1] + 2, "vonAussenInDenMund", 230)) }
  ].concat(labretBasis.slice(2));

  // ---------- Zunge ----------
  var ZP = [320, 196], ZU = [331, 236];
  function flascheMit(x, y, wort) { return flasche(x, y).replace('class="a-klein" fill="#2F4A7A">Kodan<', 'class="a-klein" font-size="8" style="font-size:8px" fill="#2F4A7A">{' + wort + "}<"); }
  function zungeVorn() {
    // offener Mund von vorn, Zunge herausgestreckt
    return '<g filter="url(#aWeich)" opacity=".35"><rect x="150" y="0" width="340" height="360" rx="90" fill="#EBC3AE"/></g>' +
      '<g filter="url(#aSchatten)"><path d="M180 40 C200 20 440 20 460 40 L470 330 C420 350 220 350 170 330 Z" fill="url(#aHaut)" opacity=".95"/></g>' +
      '<ellipse cx="320" cy="150" rx="92" ry="52" fill="#D98C86" stroke="#B86E68" stroke-width="2"/>' +
      '<ellipse cx="320" cy="150" rx="76" ry="38" fill="#5A2E2A"/>' +
      '<path d="M262 128 L378 128 L370 138 L270 138 Z" fill="#F6F1E8"/>' +
      '<path d="M266 150 C266 210 286 262 320 266 C354 262 374 210 374 150 Z" fill="#E7898A" stroke="#C66A6C" stroke-width="2"/>' +
      '<path d="M320 160 L320 244" stroke="#C66A6C" stroke-width="2" opacity=".6"/>';
  }
  function zungeUnten() {
    // Zunge angehoben, Ansicht der Unterseite mit Zungenbändchen
    return '<g filter="url(#aWeich)" opacity=".35"><rect x="150" y="0" width="340" height="360" rx="90" fill="#EBC3AE"/></g>' +
      '<ellipse cx="320" cy="190" rx="130" ry="120" fill="#5A2E2A"/>' +
      '<g filter="url(#aSchatten)"><path d="M230 120 C230 70 410 70 410 120 C410 200 380 270 320 276 C260 270 230 200 230 120 Z" fill="#D9777E" stroke="#B5585F" stroke-width="2"/></g>' +
      '<path d="M320 196 L320 300" stroke="#C46068" stroke-width="7" stroke-linecap="round"/><path d="M320 196 L320 300" stroke="#E79AA0" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M250 300 C280 290 360 290 390 300" fill="none" stroke="#C46068" stroke-width="4" opacity=".7"/>';
  }
  function bildZunge(unten, inhalt) {
    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + etikett(530, unten ? "unterseite" : "ansichtVorn", 170) + (unten ? zungeUnten() : zungeVorn()) + inhalt + "</svg>";
  }
  var zungeO = {
    d: 100, unten: Y + 120, knorpel: false, gewebeWort: "zunge", links: "untenEinstich", rechts: "obenPunkt",
    werkzeug: "snaptile", werkzeugWort: "snaptile", gauge: "kan16", schmuck: "barbell", schmuckWort: "barbellMin19", kugelWort: "kugelObenAuf",
    ueberVorn: 22, vonEintritt: true, vorn: "",
    texte: {
      lage: { de: "", en: "", es: "" }, halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 16G-Kanüle von unten durch die Zunge stechen, bis die Spitze oben am Punkt herauskommt.",
        en: "In cross-section: pierce through the tongue from below with the 16G cannula until the tip comes out at the dot on top.",
        es: "En corte: perfora la lengua desde abajo con la cánula 16G hasta que la punta salga arriba por el punto." },
      abwurf: { de: "Snaptile abnehmen und die Stahlnadel nach unten herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the Snaptile and pull the steel needle out downwards. The tube stays in the channel.",
        es: "Quita el Snaptile y saca la aguja de acero hacia abajo. El tubo se queda en el canal." },
      ansatz: { de: "Unten den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "Underneath, cut off the green hub with scissors so only the tube is left.",
        es: "Por debajo, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Den Barbell nehmen, immer mindestens 19 mm lang. Unten ist schon eine Kugel drauf. Das freie Ende nur 2–3 mm von unten in das Röhrchen stecken.",
        en: "Take the barbell, always at least 19 mm long. The lower ball is already on. Insert the free end only 2–3 mm into the tube from below.",
        es: "Toma el barbell, siempre de al menos 19 mm. La bola de abajo ya está puesta. Introduce el extremo libre solo 2–3 mm en el tubo desde abajo." },
      schieben: { de: "Den Barbell von unten durch die Zunge schieben. Er schiebt das Röhrchen oben hinaus.",
        en: "Push the barbell through the tongue from below. It pushes the tube out at the top.",
        es: "Empuja el barbell a través de la lengua desde abajo. Saca el tubo por arriba." },
      kugel: { de: "Das Röhrchen abnehmen und oben die Kugel aufdrehen.",
        en: "Remove the tube and screw on the ball at the top.",
        es: "Retira el tubo y enrosca la bola de arriba." },
      fertig: { de: "Fertig: Barbell mit Überlänge, die Zunge schwillt an. Dem Kunden sofort einen Eiswürfel zum Kühlen geben, am besten aus Kamillentee.",
        en: "Done: barbell with extra length, as the tongue swells. Give the client an ice cube to cool it straight away, ideally made from chamomile tea.",
        es: "Listo: barbell con longitud extra, porque la lengua se hincha. Dale al cliente enseguida un cubito de hielo para enfriar, mejor de manzanilla." }
    }
  };
  var zungeBasis = piercingSchritte(zungeO);
  var zunge = [
    { text: { de: "Vorbereitung: Den Kunden mit Chlorhexamed spülen lassen. Danach die Zunge mit einem Papiertuch trocken tupfen.",
        en: "Preparation: have the client rinse with Chlorhexamed. Then pat the tongue dry with a paper towel.",
        es: "Preparación: el cliente se enjuaga con Chlorhexamed. Después seca la lengua con un papel." },
      svg: szene(flascheMit(250, 140, "chlorhexamed") + '<g class="a-erscheinen" filter="url(#aSchatten)"><path d="M370 150 L470 140 L480 250 L380 262 Z" fill="#FFFFFF" stroke="#E4DACB"/><path d="M384 170 L468 162 M386 190 L470 182 M388 210 L472 202" stroke="#EDE6DA" stroke-width="2"/></g>' + hinweis(470, 300, 426, 240, "papiertuch", 170)) },
    { text: { de: "Einen Punkt mittig auf die Zunge zeichnen. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Draw a dot in the middle of the tongue. Check with the client in the mirror that it is right.",
        es: "Dibuja un punto en el centro de la lengua. Comprueba con el cliente en el espejo que está bien." },
      svg: bildZunge(false, '<g class="a-erscheinen">' + punkt(ZP[0], ZP[1]) + "</g>" + hinweis(150, 300, ZP[0] - 4, ZP[1] + 4, "punktMitte", 180)) },
    { text: { de: "Snaptile oder Gazeklemme auf den Punkt anlegen, oben und unten mittig. Das Snaptile ist ein Einmalwerkzeug, die Gazeklemme wird sterilisiert und wiederverwendet.",
        en: "Apply the Snaptile or gauze clamp over the dot, centred on top and underneath. The Snaptile is single-use, the gauze clamp is sterilised and reused.",
        es: "Coloca el Snaptile o la pinza de gasa sobre el punto, centrado arriba y abajo. El Snaptile es de un solo uso, la pinza de gasa se esteriliza y se reutiliza." },
      svg: bildZunge(false, punkt(ZP[0], ZP[1]) + bewegt(-50, 0, klemmeAn(ZP, 0, 140)) + hinweis(150, 300, ZP[0] - 2, 320, "snaptileOderGaze", 230)) },
    { text: { de: "Von unten gesehen: Der Einstich liegt knapp neben dem Zungenbändchen. Das Zungenbändchen selbst nicht verletzen.",
        en: "Seen from below: the entry point sits just beside the frenulum. Do not injure the frenulum itself.",
        es: "Visto desde abajo: la entrada está justo al lado del frenillo. No lesiones el frenillo." },
      svg: bildZunge(true, '<g class="a-erscheinen">' + punkt(ZU[0], ZU[1]) + "</g>" + hinweis(510, 290, ZU[0] + 4, ZU[1] + 4, "nebenBaendchen", 220) + hinweis(150, 300, 318, 290, "zungenbaendchen", 180)) },
    { text: { de: "Von unten langsam und kontrolliert leicht schräg nach oben stechen, sodass die Spitze oben genau auf dem Punkt herauskommt.",
        en: "Pierce from below slowly and under control, angled slightly upwards, so the tip comes out exactly on the dot on top.",
        es: "Perfora desde abajo despacio y con control, un poco inclinado hacia arriba, para que la punta salga justo en el punto de arriba." },
      svg: bildZunge(true, punkt(ZU[0], ZU[1]) + kanueleAuf(ZU, -72, .5, true) + hinweis(510, 120, ZU[0] + 4, ZU[1] - 6, "schraegNachOben", 220)) }
  ].concat(zungeBasis.slice(2));

  // ---------- Bauchnabel ----------
  var BN1 = [320, 158], BN2 = [320, 213];
  function bauch(liegend) {
    return '<g filter="url(#aWeich)" opacity=".4"><rect x="120" y="0" width="400" height="360" rx="120" fill="#EBC3AE"/></g>' +
      '<g filter="url(#aSchatten)"><path d="M150 0 L490 0 C500 120 500 240 480 360 L160 360 C140 240 140 120 150 0 Z" fill="url(#aHaut)"/></g>' +
      '<path d="M320 20 L320 340" stroke="' + F.hautRand + '" stroke-width="1.5" stroke-dasharray="6 7" opacity=".55"/>' +
      '<ellipse cx="320" cy="232" rx="30" ry="24" fill="#E7B39B"/><ellipse cx="320" cy="236" rx="20" ry="16" fill="#9C5E4E"/>' +
      '<path d="M296 222 C306 210 334 210 344 222" fill="none" stroke="' + F.hautRand + '" stroke-width="3"/>' +
      '<text x="330" y="40" class="a-klein" fill="#9A8E7E">{koerpermitte}</text>' +
      (liegend ? '<g transform="translate(540 300)"><rect x="-70" y="-14" width="140" height="28" rx="14" fill="#FFFFFF" stroke="' + F.gold + '"/><text x="0" y="5" text-anchor="middle" class="a-klein" fill="#5A4632">{imLiegen}</text></g>' : "");
  }
  function bildBauch(liegend, inhalt) { return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + bauch(liegend) + etikett(560, "ansichtVorn", 150) + inhalt + "</svg>"; }
  function gazeklemmeVorn(klasse) {
    // Gazeklemme von vorn: längliches Fenster über beiden Punkten, Griff zur Seite
    var x = BN1[0], y1 = BN1[1] - 14, y2 = BN2[1] + 14, m = (BN1[1] + BN2[1]) / 2;
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)">' +
      '<path d="M' + (x - 16) + " " + m + ' L190 ' + (m + 70) + '" stroke="#6F7984" stroke-width="10" stroke-linecap="round"/><path d="M' + (x - 16) + " " + m + ' L190 ' + (m + 70) + '" stroke="url(#aStahlV)" stroke-width="7" stroke-linecap="round"/>' +
      '<rect x="' + (x - 16) + '" y="' + y1 + '" width="32" height="' + (y2 - y1) + '" rx="16" fill="none" stroke="#6F7984" stroke-width="7"/><rect x="' + (x - 16) + '" y="' + y1 + '" width="32" height="' + (y2 - y1) + '" rx="16" fill="none" stroke="url(#aStahl)" stroke-width="4.5"/></g>';
  }
  function massstab() {
    return '<g stroke="' + F.gold + '" stroke-width="2"><path d="M360 ' + BN1[1] + ' L372 ' + BN1[1] + ' M366 ' + BN1[1] + ' L366 ' + BN2[1] + ' M360 ' + BN2[1] + ' L372 ' + BN2[1] + '"/></g>' +
      '<text x="380" y="' + ((BN1[1] + BN2[1]) / 2 + 4) + '" class="a-klein" fill="#5A4632">1 cm</text>';
  }
  var nabelO = {
    d: 60, unten: Y + 100, knorpel: false, gewebeWort: "nabelrand", links: "obenEinstich", rechts: "untenNabel",
    werkzeug: "gaze", werkzeugWort: "gazeklemme", gauge: "kan16", schmuck: "barbell", schmuckWort: "banane", ueberVorn: 22, vorn: "",
    texte: {
      lage: { de: "", en: "", es: "" }, halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 16G-Kanüle von oben nach unten durch beide Markierungen stechen. Die Spitze kommt im Nabel heraus.",
        en: "In cross-section: pierce from the top down through both marks with the 16G cannula. The tip comes out inside the navel.",
        es: "En corte: perfora de arriba abajo por ambas marcas con la cánula 16G. La punta sale dentro del ombligo." },
      abwurf: { de: "Gazeklemme abnehmen und die Stahlnadel nach oben herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the gauze clamp and pull the steel needle out at the top. The tube stays in the channel.",
        es: "Quita la pinza de gasa y saca la aguja de acero por arriba. El tubo se queda en el canal." },
      ansatz: { de: "Oben den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "At the top, cut off the green hub with scissors so only the tube is left.",
        es: "Arriba, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Die Banane nur 2–3 mm von unten, aus dem Nabel, in das Röhrchen stecken. Die untere Kugel ist schon drauf.",
        en: "Insert the curved barbell only 2–3 mm into the tube from below, from the navel. The lower ball is already on.",
        es: "Introduce la banana solo 2–3 mm en el tubo desde abajo, desde el ombligo. La bola de abajo ya está puesta." },
      schieben: { de: "Die Banane durchschieben, nicht ziehen. Sie schiebt das Röhrchen oben hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the curved barbell through, do not pull. It pushes the tube out at the top. Have the client breathe out.",
        es: "Empuja la banana, no tires. Saca el tubo por arriba. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die obere Kugel mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw on the upper ball with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola de arriba con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Die Banane sitzt mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen.",
        en: "The curved barbell sits with extra length for swelling. Spray with Kodan again.",
        es: "La banana queda con longitud extra para la hinchazón. Vuelve a rociar con Kodan." }
    }
  };
  var nabelBasis = piercingSchritte(nabelO);
  var bauchnabel = [
    { text: { de: "Im Stehen anzeichnen: einen Punkt oben im Nabel und einen zweiten Punkt 1 cm darüber, gerade auf der Körpermitte. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Mark while the client is standing: one dot at the top inside the navel and a second dot 1 cm above it, straight on the body's midline. Check with the client in the mirror that it is right.",
        es: "Marca con el cliente de pie: un punto arriba dentro del ombligo y otro 1 cm por encima, recto sobre la línea media del cuerpo. Comprueba con el cliente en el espejo que está bien." },
      svg: bildBauch(false, '<g class="a-erscheinen">' + punkt(BN1[0], BN1[1]) + punkt(BN2[0], BN2[1]) + "</g>" + massstab() + hinweis(150, 110, BN1[0] - 4, BN1[1], "obenEinstich", 170) + hinweis(150, 300, BN2[0] - 4, BN2[1] + 2, "imNabelOben", 170)) },
    { text: { de: "Dann legt sich der Kunde hin. Die Gazeklemme über beide Punkte anlegen. Statt der Gazeklemme geht auch ein Snaptile, das ist ein Einmalwerkzeug.",
        en: "Then the client lies down. Apply the gauze clamp over both dots. A Snaptile works too, it is single-use.",
        es: "Después el cliente se tumba. Coloca la pinza de gasa sobre los dos puntos. También sirve un Snaptile, que es de un solo uso." },
      svg: bildBauch(true, punkt(BN1[0], BN1[1]) + punkt(BN2[0], BN2[1]) + bewegt(-60, 0, gazeklemmeVorn()) + hinweis(150, 300, 220, 250, "gazeklemme", 170)) },
    { text: { de: "Langsam und kontrolliert von oben nach unten stechen, durch beide Punkte, bis die Spitze im Nabel herauskommt.",
        en: "Pierce slowly and under control from the top down, through both dots, until the tip comes out inside the navel.",
        es: "Perfora despacio y con control de arriba abajo, por ambos puntos, hasta que la punta salga dentro del ombligo." },
      svg: bildBauch(true, gazeklemmeVorn() + kanueleAuf(BN2, 90, .62, true) + hinweis(500, 150, BN1[0] + 6, BN1[1] + 10, "vonObenNachUnten", 200)) }
  ].concat(nabelBasis.slice(2)).concat([
    { text: { de: "Fertig: Mit einem sterilen Pflaster abkleben und dem Kunden Pflaster für die nächsten 3 Tage empfehlen.",
        en: "Done: cover it with a sterile plaster and recommend plasters to the client for the next 3 days.",
        es: "Listo: cubre con un apósito estéril y recomienda al cliente apósitos durante los próximos 3 días." },
      svg: bildBauch(false, kugelVorn(BN1[0], BN1[1] - 6, 7) + kugelVorn(BN2[0], BN2[1] + 12, 10) + '<g class="a-erscheinen"><rect x="270" y="130" width="100" height="130" rx="14" fill="#F6EAD8" fill-opacity=".85" stroke="#D9C6A8" stroke-width="2"/><rect x="290" y="160" width="60" height="70" rx="6" fill="#FFFFFF" fill-opacity=".8"/></g>' + hinweis(150, 300, 272, 220, "sterilesPflaster", 190) + haken()) }
  ]);

  // ---------- Brustwarze ----------
  var BW1 = [296, 190], BW2 = [344, 190];
  function brust() {
    return '<g filter="url(#aWeich)" opacity=".4"><rect x="100" y="0" width="440" height="360" rx="120" fill="#EBC3AE"/></g>' +
      '<g filter="url(#aSchatten)"><path d="M120 0 L520 0 C540 120 540 240 520 360 L120 360 C100 240 100 120 120 0 Z" fill="url(#aHaut)"/></g>' +
      '<path d="M170 300 C230 340 410 340 470 300" fill="none" stroke="' + F.hautRand + '" stroke-width="2" opacity=".5"/>' +
      '<circle cx="320" cy="190" r="54" fill="#D9A08E" opacity=".85"/><circle cx="320" cy="190" r="19" fill="#C27E6E" stroke="#A9675A" stroke-width="1.5"/><circle cx="314" cy="184" r="5" fill="#FFFFFF" opacity=".35"/>';
  }
  function bildBrust(inhalt) { return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + brust() + etikett(560, "ansichtVorn", 150) + inhalt + "</svg>"; }
  function klemmeFenster(p1, p2, ax, ay, klasse) {
    // Klemme mit länglichem Fenster über zwei Punkten, Griff in Richtung (ax, ay)
    var x1 = Math.min(p1[0], p2[0]) - 16, y1 = Math.min(p1[1], p2[1]) - 16, w = Math.abs(p2[0] - p1[0]) + 32, h = Math.abs(p2[1] - p1[1]) + 32;
    var mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2, sx = mx, sy = y1 + h;
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)">' +
      '<path d="M' + sx + " " + sy + " L" + (sx + ax) + " " + (sy + ay) + '" stroke="#6F7984" stroke-width="10" stroke-linecap="round"/><path d="M' + sx + " " + sy + " L" + (sx + ax) + " " + (sy + ay) + '" stroke="url(#aStahlV)" stroke-width="7" stroke-linecap="round"/>' +
      '<rect x="' + x1 + '" y="' + y1 + '" width="' + w + '" height="' + h + '" rx="16" fill="none" stroke="#6F7984" stroke-width="7"/><rect x="' + x1 + '" y="' + y1 + '" width="' + w + '" height="' + h + '" rx="16" fill="none" stroke="url(#aStahl)" stroke-width="4.5"/></g>';
  }
  var brustO = {
    d: 44, unten: Y + 70, knorpel: false, gewebeWort: "brustwarze", links: "einstichseite", rechts: "austrittsseite",
    werkzeug: "gaze", werkzeugWort: "gazeklemme", gauge: "kan16", schmuck: "barbell", schmuckWort: "barbell", ueberVorn: 22, vorn: "",
    texte: {
      lage: { de: "", en: "", es: "" }, halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 16G-Kanüle waagerecht durch beide Markierungen stechen, an der Basis der Brustwarze.",
        en: "In cross-section: pierce horizontally through both marks at the base of the nipple with the 16G cannula.",
        es: "En corte: perfora en horizontal por ambas marcas, en la base del pezón, con la cánula 16G." },
      abwurf: { de: "Klemme abnehmen und die Stahlnadel zur Einstichseite herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the clamp and pull the steel needle out on the entry side. The tube stays in the channel.",
        es: "Quita la pinza y saca la aguja de acero por el lado de entrada. El tubo se queda en el canal." },
      ansatz: { de: "Auf der Einstichseite den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "On the entry side, cut off the green hub with scissors so only the tube is left.",
        es: "En el lado de entrada, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Den Barbell nur 2–3 mm von der Austrittsseite in das Röhrchen stecken. Auf dieser Seite ist die Kugel schon drauf.",
        en: "Insert the barbell only 2–3 mm into the tube from the exit side. The ball on that side is already on.",
        es: "Introduce el barbell solo 2–3 mm en el tubo por el lado de salida. La bola de ese lado ya está puesta." },
      schieben: { de: "Den Barbell nachschieben, nicht ziehen. Er schiebt das Röhrchen auf der Einstichseite hinaus. Den Kunden dabei ausatmen lassen.",
        en: "Push the barbell after it, do not pull. It pushes the tube out on the entry side. Have the client breathe out.",
        es: "Empuja el barbell detrás, no tires. Saca el tubo por el lado de entrada. Pide al cliente que espire." },
      kugel: { de: "Röhrchen abziehen. Die zweite Kugel mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw on the second ball with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la segunda bola con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Der Barbell sitzt mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen.",
        en: "The barbell sits with extra length for swelling. Spray with Kodan again.",
        es: "El barbell queda con longitud extra para la hinchazón. Vuelve a rociar con Kodan." }
    }
  };
  var brustBasis = piercingSchritte(brustO);
  var brustwarze = [
    { text: { de: "Der Kunde oder die Kundin macht den Oberkörper komplett frei, damit die Brust genau so steht, wie sie natürlich steht.",
        en: "The client takes off everything on the upper body so the chest sits exactly as it naturally does.",
        es: "El cliente se descubre por completo el torso para que el pecho quede tal como está de forma natural." },
      svg: bildBrust(hinweis(150, 300, 260, 230, "oberkoerperFrei", 230)) },
    { text: { de: "Einen Punkt links und einen rechts neben der Brustwarze anzeichnen, gerade auf einer Linie. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Mark one dot to the left and one to the right of the nipple, straight on one line. Check with the client in the mirror that it is right.",
        es: "Marca un punto a la izquierda y otro a la derecha del pezón, rectos en una línea. Comprueba con el cliente en el espejo que está bien." },
      svg: bildBrust('<g class="a-erscheinen">' + punkt(BW1[0], BW1[1]) + punkt(BW2[0], BW2[1]) + "</g>" + hinweis(150, 110, BW1[0] - 2, BW1[1] - 4, "links", 120) + hinweis(500, 110, BW2[0] + 2, BW2[1] - 4, "rechts", 120)) },
    { text: { de: "Die Gazeklemme über beide Punkte anlegen. Statt der Gazeklemme geht auch ein Snaptile, das ist ein Einmalwerkzeug.",
        en: "Apply the gauze clamp over both dots. A Snaptile works too, it is single-use.",
        es: "Coloca la pinza de gasa sobre los dos puntos. También sirve un Snaptile, que es de un solo uso." },
      svg: bildBrust(punkt(BW1[0], BW1[1]) + punkt(BW2[0], BW2[1]) + bewegt(-60, 0, klemmeFenster(BW1, BW2, -50, 110)) + hinweis(150, 300, 262, 300, "snaptileOderGaze", 230)) },
    { text: { de: "Mit der 16G-Kanüle langsam und kontrolliert waagerecht durch beide Punkte stechen.",
        en: "Pierce slowly and under control horizontally through both dots with the 16G cannula.",
        es: "Perfora despacio y con control en horizontal por ambos puntos con la cánula 16G." },
      svg: bildBrust(klemmeFenster(BW1, BW2, -50, 110) + kanueleAuf([BW2[0] + 8, BW2[1]], 0, .7, true) + hinweis(500, 300, BW2[0] - 4, BW2[1] + 6, "kan16", 140)) }
  ].concat(brustBasis.slice(2)).concat([
    { text: { de: "Mit einem sterilen Pflaster abkleben und dem Kunden Pflaster für die nächsten 3 Tage empfehlen.",
        en: "Cover it with a sterile plaster and recommend plasters to the client for the next 3 days.",
        es: "Cubre con un apósito estéril y recomienda al cliente apósitos durante los próximos 3 días." },
      svg: bildBrust(kugelVorn(BW1[0] - 10, BW1[1], 8) + kugelVorn(BW2[0] + 10, BW2[1], 8) + '<g class="a-erscheinen"><rect x="250" y="130" width="140" height="120" rx="14" fill="#F6EAD8" fill-opacity=".85" stroke="#D9C6A8" stroke-width="2"/><rect x="280" y="160" width="80" height="60" rx="6" fill="#FFFFFF" fill-opacity=".8"/></g>' + hinweis(150, 300, 252, 230, "sterilesPflaster", 190)) }
  ]);

  // ---------- Christina (nur schematisch, ohne Körperdarstellung) ----------
  var CH1 = [320, 160], CH2 = [320, 215];
  function schemaIntim() {
    return '<rect x="170" y="40" width="300" height="280" rx="40" fill="#F4DCCD" opacity=".7"/>' +
      '<path d="M320 50 L320 310" stroke="' + F.hautRand + '" stroke-width="1.5" stroke-dasharray="6 7" opacity=".55"/>' +
      '<path d="M320 ' + (CH2[1] + 4) + ' L320 310" stroke="#9C5E4E" stroke-width="5" stroke-linecap="round"/>' +
      '<text x="332" y="300" class="a-klein" fill="#9A8E7E">{spaltSchema}</text><text x="332" y="66" class="a-klein" fill="#9A8E7E">{koerpermitte}</text>';
  }
  function bildSchema(inhalt) { return '<svg viewBox="0 0 ' + W + " " + H + '" role="img">' + DEFS + buehne() + schemaIntim() + etikett(540, "schematisch", 170) + inhalt + "</svg>"; }
  function massstabZwischen(p1, p2) {
    return '<g stroke="' + F.gold + '" stroke-width="2"><path d="M' + (p1[0] + 40) + " " + p1[1] + " L" + (p1[0] + 52) + " " + p1[1] + " M" + (p1[0] + 46) + " " + p1[1] + " L" + (p1[0] + 46) + " " + p2[1] + " M" + (p1[0] + 40) + " " + p2[1] + " L" + (p1[0] + 52) + " " + p2[1] + '"/></g>' +
      '<text x="' + (p1[0] + 60) + '" y="' + ((p1[1] + p2[1]) / 2 + 4) + '" class="a-klein" fill="#5A4632">1 cm</text>';
  }
  var christinaO = {
    d: 60, unten: Y + 100, knorpel: false, gewebeWort: "gewebeSchema", links: "obenEinstich", rechts: "untenSpalt",
    werkzeug: "gaze", werkzeugWort: "gazeklemme", gauge: "kan16oder18", schmuck: "barbell", schmuckWort: "banane", ueberVorn: 22, vorn: "",
    texte: {
      lage: { de: "", en: "", es: "" }, halt: { de: "", en: "", es: "" },
      stich: { de: "Im Querschnitt: Mit der 16G- oder 18G-Kanüle von oben durch beide Markierungen in den Spalt stechen.",
        en: "In cross-section: pierce from the top through both marks into the cleft with the 16G or 18G cannula.",
        es: "En corte: perfora desde arriba por ambas marcas hacia la hendidura con la cánula 16G o 18G." },
      abwurf: { de: "Klemme abnehmen und die Stahlnadel nach oben herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the clamp and pull the steel needle out at the top. The tube stays in the channel.",
        es: "Quita la pinza y saca la aguja de acero por arriba. El tubo se queda en el canal." },
      ansatz: { de: "Oben den grünen Ansatz mit der Schere abschneiden, sodass nur das Röhrchen bleibt.",
        en: "At the top, cut off the green hub with scissors so only the tube is left.",
        es: "Arriba, corta el cono verde con las tijeras para que solo quede el tubo." },
      einsetzen: { de: "Eine normale Banane nehmen, keine Bauchnabel-Banane. Nur 2–3 mm von unten in das Röhrchen stecken, die untere Kugel ist schon drauf.",
        en: "Use a normal curved barbell, not a navel banana. Insert it only 2–3 mm into the tube from below; the lower ball is already on.",
        es: "Usa una banana normal, no una de ombligo. Introdúcela solo 2–3 mm en el tubo desde abajo; la bola de abajo ya está puesta." },
      schieben: { de: "Die Banane durchschieben, nicht ziehen. Sie schiebt das Röhrchen oben hinaus. Die Kundin dabei ausatmen lassen.",
        en: "Push the curved barbell through, do not pull. It pushes the tube out at the top. Have the client breathe out.",
        es: "Empuja la banana, no tires. Saca el tubo por arriba. Pide a la clienta que espire." },
      kugel: { de: "Röhrchen abziehen. Die obere Kugel mit dem Kugelgreifer aufdrehen, den Stab dabei mit der Klemmzange kurz vor dem Gewinde halten.",
        en: "Pull off the tube. Screw on the upper ball with the ball grabber, holding the bar with the clamp just before the thread.",
        es: "Retira el tubo. Enrosca la bola de arriba con la pinza de bolas, sujetando la barra con la pinza justo antes de la rosca." },
      fertig: { de: "Fertig: Die Banane sitzt mit Überlänge für die Schwellung. Nochmals mit Kodan einsprühen.",
        en: "Done: the curved barbell sits with extra length for swelling. Spray with Kodan again.",
        es: "Listo: la banana queda con longitud extra para la hinchazón. Vuelve a rociar con Kodan." }
    }
  };
  var christinaBasis = piercingSchritte(christinaO);
  var christina = [
    { text: { de: "Schematische Darstellung. Zwei Punkte anzeichnen: einen oben am Ende des Spalts und einen zweiten 1 cm darüber, gerade auf der Körpermitte. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Schematic illustration. Mark two dots: one at the top end of the cleft and a second 1 cm above it, straight on the midline. Check with the client in the mirror that it is right.",
        es: "Ilustración esquemática. Marca dos puntos: uno en el extremo superior de la hendidura y otro 1 cm por encima, recto sobre la línea media. Comprueba con el cliente en el espejo que está bien." },
      svg: bildSchema('<g class="a-erscheinen">' + punkt(CH1[0], CH1[1]) + punkt(CH2[0], CH2[1]) + "</g>" + massstabZwischen(CH1, CH2) + hinweis(150, 110, CH1[0] - 4, CH1[1], "obenEinstich", 170) + hinweis(150, 290, CH2[0] - 4, CH2[1] + 2, "obenAmSpalt", 190)) },
    { text: { de: "Die Gazeklemme über beide Punkte anlegen. Statt der Gazeklemme geht auch ein Snaptile, das ist ein Einmalwerkzeug.",
        en: "Apply the gauze clamp over both dots. A Snaptile works too, it is single-use.",
        es: "Coloca la pinza de gasa sobre los dos puntos. También sirve un Snaptile, que es de un solo uso." },
      svg: bildSchema(punkt(CH1[0], CH1[1]) + punkt(CH2[0], CH2[1]) + bewegt(-60, 0, klemmeFenster(CH1, CH2, -110, 60)) + hinweis(150, 300, 230, 280, "snaptileOderGaze", 230)) },
    { text: { de: "Die Kanüle, 16G oder 18G, mit der Kundin absprechen. Dann langsam und kontrolliert von oben in den Spalt stechen, durch beide Punkte.",
        en: "Agree on the cannula, 16G or 18G, with the client. Then pierce slowly and under control from the top into the cleft, through both dots.",
        es: "Acuerda la cánula, 16G o 18G, con la clienta. Después perfora despacio y con control desde arriba hacia la hendidura, por ambos puntos." },
      svg: bildSchema(klemmeFenster(CH1, CH2, -110, 60) + kanueleAuf(CH2, 90, .62, true) + hinweis(500, 150, CH1[0] + 6, CH1[1] + 10, "vonObenNachUnten", 200) + hinweis(500, 230, CH2[0] + 6, CH2[1] + 4, "kan16oder18", 170)) }
  ].concat(christinaBasis.slice(2));

  // ---------- Für jedes Piercing: vorher mit Alkoholtupfer reinigen, zum Schluss den Kunden aufklären ----------
  function tupfer(x, y) {
    return '<g class="a-wischen" filter="url(#aSchatten)"><rect x="' + (x - 22) + '" y="' + (y - 18) + '" width="44" height="36" rx="6" fill="#FFFFFF" stroke="#D8D2C6"/>' +
      '<path d="M' + (x - 14) + " " + (y - 6) + " L" + (x + 14) + " " + (y - 6) + " M" + (x - 14) + " " + (y + 4) + " L" + (x + 14) + " " + (y + 4) + '" stroke="#EAE4D8" stroke-width="2"/></g>';
  }
  var TUPFER_TEXT = { de: "Zuerst die Stelle mit einem Alkoholtupfer reinigen. Erst danach wird angezeichnet und gestochen.",
    en: "First clean the spot with an alcohol swab. Only then mark and pierce.",
    es: "Primero limpia la zona con una toallita de alcohol. Solo después se marca y se perfora." };
  var AUFKLAER_TEXT = { de: "Zum Schluss den Kunden aufklären: Reinigung, Pflege und Abheilung. Die Pflegehinweise mündlich erklären und schriftlich mitgeben.",
    en: "Finally, inform the client: cleaning, aftercare and healing. Explain the aftercare instructions verbally and hand them over in writing.",
    es: "Por último, informa al cliente: limpieza, cuidados y cicatrización. Explica los cuidados de palabra y entrégalos por escrito." };
  function rahmen(liste, tupferSvg) {
    var anfang = tupferSvg ? [{ text: TUPFER_TEXT, svg: tupferSvg }] : [];
    return anfang.concat(liste, [{ text: AUFKLAER_TEXT, svg: szene(blatt(330, 80, "pflegehinweise", false) + blase(190, 120, "reinigungAbheilung", 260) + '<g transform="translate(60 0)">' + haken() + "</g>") }]);
  }
  var TH = function (x, y) { return hinweis(150, 300, x - 10, y + 10, "alkoholtupfer", 170); };

  // Tragus: Snaptile, Tragus leicht vom Gehörgang wegbiegen, langsam und kontrolliert stechen
  var TP = [281, 232];
  function gehoergangVorn() { return '<ellipse cx="296" cy="226" rx="9" ry="13" fill="#B97F69" opacity=".75"/>'; }
  function tragusGebogen() { return '<g transform="translate(-7 0)"><path d="' + OHR.tragus + '" fill="#F3CDB8" stroke="' + F.hautRand + '" stroke-width="1.6"/></g>'; }
  function snaptileVorn(klasse) {
    // Snaptile von vorn: Fensterbacke über dem Tragus, Bügel nach unten zum Gesicht hin
    return '<g' + (klasse ? ' class="' + klasse + '"' : "") + ' filter="url(#aSchatten)">' +
      '<path d="M' + (TP[0] - 7) + ' ' + (TP[1] + 13) + ' L' + (TP[0] - 16) + ' 330" stroke="#6F7984" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M' + (TP[0] - 7) + ' ' + (TP[1] + 13) + ' L' + (TP[0] - 16) + ' 330" stroke="url(#aStahlV)" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="' + (TP[0] - 7) + '" cy="' + TP[1] + '" r="13" fill="none" stroke="#6F7984" stroke-width="7"/><circle cx="' + (TP[0] - 7) + '" cy="' + TP[1] + '" r="13" fill="none" stroke="url(#aStahl)" stroke-width="4.5"/></g>';
  }
  function kanueleSchraeg(langsam) {
    // Kanüle schräg von vorn auf den Tragus zu (verkürzt gezeichnet, sie zeigt in die Bildebene hinein)
    var inner = '<g class="a-bewegt" style="--a-von:-140px;--a-nach:0px' + (langsam ? ";animation-duration:3.8s" : "") + '">' + kanuele(390, true) + "</g>";
    return '<g transform="translate(' + (TP[0] - 7) + " " + TP[1] + ') rotate(32) scale(.46 .62) translate(-390 -180)">' + inner + "</g>";
  }
  var tragusO = {
    d: 56, unten: Y + 96, knorpel: true, gewebeWort: "knorpelTragus", links: "vorneTragus", rechts: "gehoergang",
    werkzeug: "snaptile", werkzeugWort: "snaptile", gauge: "kan16", schmuck: "labret", ueberVorn: 26,
    vorn: vornOhr([TP], hinweis(150, 290, TP[0] - 2, TP[1] + 4, "tragusStelle", 200)),
    texte: {
      lage: { de: "Ansicht von vorn: Die Stelle mitten auf dem Tragus anzeichnen, dem Knorpelfortsatz am Gehöreingang. Der Kunde schaut im Spiegel, ob es passt.",
        en: "Front view: mark the spot in the middle of the tragus, the cartilage flap at the ear canal entrance. The client checks in the mirror that it is right.",
        es: "Vista frontal: marca el punto en el centro del trago, la prominencia de cartílago a la entrada del oído. El cliente comprueba en el espejo que está bien." },
      halt: { de: "", en: "", es: "" },
      stich: { de: "", en: "", es: "" },
      abwurf: { de: "Snaptile abnehmen und die Stahlnadel nach vorn herausziehen. Das Röhrchen bleibt im Stichkanal.",
        en: "Take off the Snaptile and pull the steel needle out towards the front. The tube stays in the channel.",
        es: "Quita el Snaptile y saca la aguja de acero hacia delante. El tubo se queda en el canal." },
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
  };
  var tragusBasis = piercingSchritte(tragusO);
  var tragusQ = Object.assign({}, tragusO, { wand: 470, wandWort: "ohrInnen" });
  var tx2 = 320 + tragusO.d / 2;
  var tragus = [
    tragusBasis[0],
    { text: { de: "Am ganzen Ohr: Das Snaptile am Tragus anlegen, das Fenster liegt auf der Markierung. Den Tragus damit leicht vom Gehörgang wegbiegen.",
        en: "On the whole ear: apply the Snaptile to the tragus with the window over the mark. Use it to bend the tragus slightly away from the ear canal.",
        es: "En toda la oreja: coloca el Snaptile en el trago con la ventana sobre la marca. Con él, separa un poco el trago del conducto auditivo." },
      svg: bildVorn(gehoergangVorn() + tragusGebogen() + punkt(TP[0] - 7, TP[1]) + bewegt(-50, 0, snaptileVorn()) + pfeil(262, 222, 196) + hinweis(150, 120, TP[0] - 12, TP[1] - 12, "wegbiegen", 220) + hinweis(150, 300, TP[0] - 14, 300, "snaptile", 140)) },
    { text: { de: "Langsam und kontrolliert von vorn durch das Fenster stechen. Nur so weit, dass die Spitze hinten knapp austritt, damit die Nadel nicht ins Ohr sticht.",
        en: "Pierce slowly and under control from the front through the window. Only far enough for the tip to just come out at the back, so the needle does not go into the ear.",
        es: "Perfora despacio y con control desde delante a través de la ventana. Solo hasta que la punta salga apenas por detrás, para que la aguja no entre en el oído." },
      svg: bildVorn(gehoergangVorn() + tragusGebogen() + snaptileVorn() + kanueleSchraeg(true) + hinweis(470, 300, TP[0] - 4, TP[1] + 8, "langsamKontrolliert", 230)) },
    { text: { de: "So sieht es im Querschnitt aus: Der Tragus ist vom Gehörgang weggebogen, die Nadelspitze tritt hinten nur knapp aus. Dahinter bleibt Abstand zum Ohr.",
        en: "This is how it looks in cross-section: the tragus is bent away from the ear canal and the tip only just comes out at the back. There is still space to the ear behind it.",
        es: "Así se ve en corte: el trago está separado del conducto auditivo y la punta apenas sale por detrás. Detrás queda distancia hasta la oreja." },
      svg: bildQ(tragusQ, zangeQ(tragusQ, "snaptile") + bewegt(-150, 0, '<g style="animation-duration:3.8s">' + kanuele(tx2 + 14, true) + "</g>") + hinweis(530, 120, tx2 + 14, Y - 4, "spitzeKnapp", 200)) },
    { text: { de: "Gut zu wissen: Es gibt auch spezielle Tragusklemmen mit Auffanghütchen. Hier zeigen wir es mit dem Snaptile.",
        en: "Good to know: there are also special tragus clamps with a receiving cap. Here we show it with the Snaptile.",
        es: "Bueno saberlo: también hay pinzas especiales para trago con capuchón receptor. Aquí lo mostramos con el Snaptile." },
      svg: szene('<g class="a-erscheinen" filter="url(#aSchatten)"><rect x="120" y="110" width="400" height="140" rx="22" fill="#FFFFFF" stroke="' + F.gold + '"/></g>' +
        '<g class="a-erscheinen"><circle cx="172" cy="180" r="24" fill="' + F.gold + '"/><text x="172" y="189" text-anchor="middle" font-size="26" font-weight="700" fill="#FFFFFF">i</text>' +
        '<text x="214" y="168" class="a-txt" fill="#5A4632">{tippTitel}</text><text x="214" y="196" class="a-klein" fill="#5A4632">{tippZeile1}</text><text x="214" y="216" class="a-klein" fill="#5A4632">{tippZeile2}</text></g>') }
  ].concat(tragusBasis.slice(3));


  var UEBUNG = { christina: "Übungsmodell", brustwarze: "Silikon-Brust", nostril: "Silikonnase", septum: "Silikonnase", labret: "Silikonmund", zunge: "Silikonzunge", bauchnabel: "Silikon-Bauchnabel", brustwarze: "Silikon-Brust", intim: "Übungsmodell" };
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
    "labor-rook": {
      titel: { de: "Animation: Rook mit Banane", en: "Animation: rook with a curved barbell", es: "Animación: rook con banana" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: rook,
      woerter: T
    },
    "labor-nostril": {
      titel: { de: "Animation: Nostril mit Labret", en: "Animation: nostril with a labret", es: "Animación: nostril con labret" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: nostril,
      woerter: T
    },
    "labor-septum": {
      titel: { de: "Animation: Septum mit Hufeisen", en: "Animation: septum with a horseshoe", es: "Animación: septum con herradura" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: septum,
      woerter: T
    },
    "labor-labret": {
      titel: { de: "Animation: Labret in der Unterlippe", en: "Animation: labret in the lower lip", es: "Animación: labret en el labio inferior" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: labretPiercing,
      woerter: T
    },
    "labor-zunge": {
      titel: { de: "Animation: Zunge mit Barbell", en: "Animation: tongue with a barbell", es: "Animación: lengua con barbell" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: zunge,
      woerter: T
    },
    "labor-bauchnabel": {
      titel: { de: "Animation: Bauchnabel mit Banane", en: "Animation: navel with a curved barbell", es: "Animación: ombligo con banana" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: bauchnabel,
      woerter: T
    },
    "labor-brustwarze": {
      titel: { de: "Animation: Brustwarze mit Barbell", en: "Animation: nipple with a barbell", es: "Animación: pezón con barbell" },
      hinweis: { de: "Schematische Darstellung, nicht maßstabsgetreu. Den echten Clip aus dem Studio gibt es bald.",
        en: "Schematic illustration, not to scale. The real clip from the studio is coming soon.",
        es: "Ilustración esquemática, no a escala. Pronto estará el vídeo real del estudio." },
      schritte: brustwarze,
      woerter: T
    },
    "labor-christina": {
      titel: { de: "Animation: Christina mit Banane", en: "Animation: Christina with a curved barbell", es: "Animación: Christina con banana" },
      hinweis: { de: "Schematische Darstellung ohne Körperabbildung, nicht maßstabsgetreu.",
        en: "Schematic illustration without depicting the body, not to scale.",
        es: "Ilustración esquemática sin representar el cuerpo, no a escala." },
      schritte: christina,
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
  var RAHMEN = {
    "labor-lobe": bildVorn(tupfer(330, 304) + TH(330, 304)),
    "labor-upper-lobe": bildVorn(tupfer(366, 290) + TH(366, 290)),
    "labor-helix": bildVorn(tupfer(420, 120) + TH(420, 120)),
    "labor-industrial": bildVorn(tupfer(360, 96) + TH(360, 96)),
    "labor-tragus": bildVorn(tupfer(TP[0], TP[1]) + TH(TP[0], TP[1])),
    "labor-rook": bildVorn(tupfer(RK1[0], RK1[1] + 12) + TH(RK1[0], RK1[1] + 12)),
    "labor-nostril": bildNase(false, tupfer(NP[0], NP[1]) + TH(NP[0], NP[1])),
    "labor-septum": bildNase(false, tupfer(SP[0], SP[1]) + TH(SP[0], SP[1])),
    "labor-labret": bildMund(tupfer(LP[0], LP[1]) + TH(LP[0], LP[1])),
    "labor-zunge": null,
    "labor-bauchnabel": bildBauch(false, tupfer(BN1[0], (BN1[1] + BN2[1]) / 2) + TH(BN1[0], BN1[1] + 20)),
    "labor-brustwarze": bildBrust(tupfer(320, 190) + TH(320, 190)),
    "labor-christina": bildSchema(tupfer(CH1[0], CH1[1] + 28) + TH(CH1[0], CH1[1] + 28))
  };
  var MARK = {
    "labor-lobe": { text: { de: "Ansicht von vorn: Den Punkt mittig im Ohrläppchen anzeichnen. Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Front view: mark the dot in the middle of the earlobe. Check with the client in the mirror that it is right.",
        es: "Vista frontal: marca el punto en el centro del lóbulo. Comprueba con el cliente en el espejo que está bien." },
      svg: bildVorn('<g class="a-erscheinen">' + punkt(338, 312) + "</g>" + hinweis(150, 300, 334, 312, "punktAnzeichnen", 190) + spiegel(540, 200)) },
    "labor-helix": { text: { de: "Ansicht von vorn: Den Punkt am Helixrand anzeichnen (Datenblatt Helix). Mit dem Kunden im Spiegel abstimmen, ob es passt.",
        en: "Front view: mark the dot on the helix rim (Helix data sheet). Check with the client in the mirror that it is right.",
        es: "Vista frontal: marca el punto en el borde del hélix (ficha Helix). Comprueba con el cliente en el espejo que está bien." },
      svg: bildVorn('<g class="a-erscheinen">' + punkt(426, 116) + "</g>" + hinweis(530, 260, 428, 120, "punktAnzeichnen", 190) + spiegel(560, 120).replace(/<g filter/, '<g transform="scale(.7) translate(240 50)" filter')) }
  };
  Object.keys(RAHMEN).forEach(function (k) {
    var A = KURS.animationen[k], liste = MARK[k] ? [MARK[k]].concat(A.schritte) : A.schritte;
    // Brustwarze: Tupfer nach dem Freimachen des Oberkörpers
    if (k === "labor-brustwarze") A.schritte = rahmen([liste[0]].concat([{ text: TUPFER_TEXT, svg: RAHMEN[k] }], liste.slice(1)), null);
    else A.schritte = rahmen(liste, RAHMEN[k]);
  });
  Object.keys(KURS.animationen).forEach(function (k) { KURS.animationen[k].uebung = UEBUNG[k.replace("labor-", "")] || "Silikonohr"; });
})();
