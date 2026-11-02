/* Die Piercing Akademie – Auftakt beim ersten Öffnen der Startseite:
   der Hufeisen-Ring aus dem Logo zeichnet sich, die Kugeln setzen sich an die Enden, eine feine Linie sticht hindurch,
   der Schriftzug baut sich auf, dann öffnet sich der Vorhang. Einmal pro Sitzung; mit Klick, Taste oder „Überspringen“ sofort weg.
   Bei „Bewegung reduzieren“ entfällt der Auftakt. Ohne JavaScript sieht man die Seite direkt. */
(function () {
  "use strict";
  var html = document.documentElement;
  try {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("pa-auftakt")) return;
    sessionStorage.setItem("pa-auftakt", "1");
  } catch (e) { /* Speicher gesperrt: Auftakt trotzdem zeigen */ }

  var sprache = (html.lang || "de").slice(0, 2);
  var T = { de: ["Piercing", "Akademie", "Überspringen"], en: ["Piercing", "Akademie", "Skip"], es: ["Piercing", "Akademie", "Saltar"] }[sprache] || ["Piercing", "Akademie", "Überspringen"];
  var DIE = "Die"; // Marke heißt in allen Sprachen „Die Piercing Akademie“
  var buchst = function (w, start) {
    return w.split("").map(function (b, i) { return '<span style="--i:' + (start + i) + '">' + b + "</span>"; }).join("");
  };
  html.classList.add("auftakt-laeuft");
  var el = document.createElement("div");
  el.className = "auftakt";
  el.setAttribute("aria-hidden", "true");
  el.innerHTML =
    '<div class="auftakt-vorhang oben"></div><div class="auftakt-vorhang unten"></div>' +
    '<div class="auftakt-buehne">' +
      '<svg class="auftakt-ring" viewBox="0 0 200 200" width="168" height="168">' +
        '<defs><linearGradient id="auftakt-titan" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#C9A464"/><stop offset=".35" stop-color="#E3A88C"/><stop offset=".65" stop-color="#B88AD8"/><stop offset="1" stop-color="#7FA4EA"/>' +
        "</linearGradient>" +
        '<radialGradient id="auftakt-gold" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFF3D6"/><stop offset=".45" stop-color="#D8B474"/><stop offset="1" stop-color="#8F6A2E"/></radialGradient></defs>' +
        // offener Ring (Hufeisen) wie im Logo: Öffnung links, Goldkugeln oben links und unten links
        '<path class="bogen" d="M 62 52 A 70 70 0 1 1 62 148" fill="none" stroke="url(#auftakt-titan)" stroke-width="15" stroke-linecap="round" pathLength="100"/>' +
        '<circle class="kugel k1" cx="58" cy="48" r="17" fill="url(#auftakt-gold)"/>' +
        '<circle class="kugel k2" cx="58" cy="152" r="17" fill="url(#auftakt-gold)"/>' +
      "</svg>" +
      '<div class="auftakt-nadel"></div>' +
      '<div class="auftakt-schrift"><span class="z0">' + buchst(DIE, 0) + '</span><span class="z1">' + buchst(T[0], 3) + '</span><span class="z2">' + buchst(T[1], 11) + "</span></div>" +
    "</div>" +
    '<button type="button" class="auftakt-weiter">' + T[2] + "</button>";
  (document.body || html).appendChild(el);

  var fertig = false;
  function ende(sofort) {
    if (fertig) return;
    fertig = true;
    el.classList.add(sofort ? "weg-sofort" : "weg");
    html.classList.remove("auftakt-laeuft");
    window.setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, sofort ? 350 : 1100);
    document.removeEventListener("keydown", taste);
  }
  function taste() { ende(true); }
  el.addEventListener("click", function () { ende(true); });
  document.addEventListener("keydown", taste);
  window.setTimeout(function () { ende(false); }, 3000);
})();
