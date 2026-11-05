/* Piercing Akademie – kleiner Kalender für Wunschtermine (Anfrage Praxis/Komplett).
   PAKalender(element, ausgabe, max): zeigt einen Monat; wählbar sind nur die Wochentage aus data-tage
   (0 = Sonntag … 6 = Samstag) im Zeitraum data-von … data-bis Tage ab heute. Bis zu „max“ Tage gleichzeitig.
   Rückgabe: { auswahl: ["2026-11-14", …], setzeMax(n), leeren() }. Sprache über <html lang>. */
(function () {
  "use strict";
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var LOCALE = { de: "de-DE", en: "en-GB", es: "es-ES" }[SPRACHE] || "de-DE";
  var T = {
    de: { vor: "Nächster Monat", zurueck: "Voriger Monat", gewaehlt: "Gewählt:", keins: "Noch kein Tag gewählt." },
    en: { vor: "Next month", zurueck: "Previous month", gewaehlt: "Selected:", keins: "No day selected yet." },
    es: { vor: "Mes siguiente", zurueck: "Mes anterior", gewaehlt: "Elegido:", keins: "Todavía no has elegido ningún día." }
  }[SPRACHE] || {};
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function tagText(s) { var t = s.split("-"); return new Date(+t[0], +t[1] - 1, +t[2]).toLocaleDateString(LOCALE, { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }

  window.PAKalender = function (el, ausgabe, max) {
    var tage = el.getAttribute("data-tage").split(",").map(Number);
    var heute = new Date(); heute.setHours(12, 0, 0, 0);
    var von = new Date(heute); von.setDate(von.getDate() + +el.getAttribute("data-von"));
    var bis = new Date(heute); bis.setDate(bis.getDate() + +el.getAttribute("data-bis"));
    var k = { max: max || 1, auswahl: [], monat: new Date(von.getFullYear(), von.getMonth(), 1), aenderung: null };
    var wt = []; for (var i = 0; i < 7; i++) wt.push(new Date(2024, 0, 1 + i).toLocaleDateString(LOCALE, { weekday: "short" })); // ab Montag
    function erlaubt(d) { return d >= von && d <= bis && tage.indexOf(d.getDay()) > -1; }
    function zeichnen() {
      var m = k.monat, kopf = m.toLocaleDateString(LOCALE, { month: "long", year: "numeric" });
      var versatz = (new Date(m.getFullYear(), m.getMonth(), 1).getDay() + 6) % 7;
      var anzahl = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      var vorher = new Date(m.getFullYear(), m.getMonth(), 0) >= von, nachher = new Date(m.getFullYear(), m.getMonth() + 1, 1) <= bis;
      var h = '<div class="b-kal-kopf"><button type="button" data-schritt="-1" aria-label="' + T.zurueck + '"' + (vorher ? "" : " disabled") + '>‹</button><strong>' + kopf +
        '</strong><button type="button" data-schritt="1" aria-label="' + T.vor + '"' + (nachher ? "" : " disabled") + '>›</button></div><div class="b-kal-raster">';
      wt.forEach(function (w) { h += '<span class="b-kal-wt" aria-hidden="true">' + w + "</span>"; });
      for (var j = 0; j < versatz; j++) h += "<span></span>";
      for (var t = 1; t <= anzahl; t++) {
        var d = new Date(m.getFullYear(), m.getMonth(), t, 12), s = iso(d), an = k.auswahl.indexOf(s) > -1;
        h += erlaubt(d) ? '<button type="button" class="b-kal-tag' + (an ? " an" : "") + '" data-tag="' + s + '" aria-pressed="' + an + '" aria-label="' + tagText(s) + '">' + t + "</button>"
          : '<span class="b-kal-tag aus" aria-hidden="true">' + t + "</span>";
      }
      el.innerHTML = h + "</div>";
      ausgabe.textContent = k.auswahl.length ? T.gewaehlt + " " + k.auswahl.slice().sort().map(tagText).join(" · ") : T.keins;
    }
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.hasAttribute("data-schritt")) {
        var schritt = b.getAttribute("data-schritt");
        k.monat = new Date(k.monat.getFullYear(), k.monat.getMonth() + +schritt, 1); zeichnen();
        var z = el.querySelector("[data-schritt='" + schritt + "']"); if (z && !z.disabled) z.focus();
        return;
      }
      var s = b.getAttribute("data-tag"), i = k.auswahl.indexOf(s);
      if (i > -1) k.auswahl.splice(i, 1); else { k.auswahl.push(s); while (k.auswahl.length > k.max) k.auswahl.shift(); }
      zeichnen(); if (k.aenderung) k.aenderung();
      var neu = el.querySelector("[data-tag='" + s + "']"); if (neu) neu.focus();
    });
    k.setzeMax = function (n) { k.max = n; while (k.auswahl.length > n) k.auswahl.shift(); zeichnen(); };
    k.leeren = function () { k.auswahl = []; zeichnen(); };
    zeichnen();
    return k;
  };
})();
