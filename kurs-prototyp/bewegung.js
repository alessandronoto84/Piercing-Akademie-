/* Bewegung im Kurs: Inhalte blenden beim Scrollen ein, Grafiken starten ihre Animation erst, wenn sie sichtbar sind
   (Balken wachsen, Kurven zeichnen sich, Signale laufen durch die Nervenbahn, die Kanüle sticht).
   Bei „Bewegung reduzieren“ bleibt alles ruhig; ohne JavaScript ist der Kurs unverändert. */
(function () {
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var app = document.getElementById("kurs");
  if (!app || ruhig || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("k-bewegung");
  var AUSWAHL = ".k-grafik, .k-foto, .k-galerie, .k-box, .k-datenblatt, .k-tabelle, .k-modulkarte, .k-schritte > li";
  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("k-da");
      [].forEach.call(e.target.querySelectorAll("animateMotion, animate"), function (a) { try { a.beginElement(); } catch (x) { /* ältere Browser */ } });
      beobachter.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.12 });
  function vorbereiten() {
    var neu = [].slice.call(app.querySelectorAll(AUSWAHL)).filter(function (el) { return !el.classList.contains("k-ein"); });
    neu.forEach(function (el, i) {
      el.classList.add("k-ein");
      if (el.matches(".k-schritte > li, .k-modulkarte")) el.style.transitionDelay = Math.min(i % 8, 7) * 60 + "ms";
      beobachter.observe(el);
    });
  }
  new MutationObserver(vorbereiten).observe(app, { childList: true, subtree: true });
  vorbereiten();
})();
