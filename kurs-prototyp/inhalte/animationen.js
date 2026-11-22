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
