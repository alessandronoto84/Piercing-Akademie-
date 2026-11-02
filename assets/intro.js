/* Die Piercing Akademie – Auftakt beim ersten Öffnen der Startseite:
   der Hufeisen-Ring aus dem Logo (Doppellinie in Gold) zeichnet sich, die Kugeln setzen sich an die Enden, eine feine Linie sticht hindurch,
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
      '<svg class="auftakt-ring" viewBox="80 55 360 370" width="164" height="168">' +
        // Hufeisen wie im Logo: Doppellinie in Gold, Öffnung links, Kugeln als Ringe
        '<path class="bogen" d="M 127.1 154 A 150 150 0 1 1 127.1 326" fill="none" stroke="#C9A86A" stroke-width="40" pathLength="100"/>' +
        '<path class="bogen" d="M 127.1 154 A 150 150 0 1 1 127.1 326" fill="none" stroke="#0E0E11" stroke-width="18" pathLength="100"/>' +
        '<circle class="kugel k1" cx="127.1" cy="154" r="29" fill="#0E0E11" stroke="#C9A86A" stroke-width="11"/>' +
        '<circle class="kugel k2" cx="127.1" cy="326" r="29" fill="#0E0E11" stroke="#C9A86A" stroke-width="11"/>' +
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
