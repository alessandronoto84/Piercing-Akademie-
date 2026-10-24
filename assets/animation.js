/* Piercing Akademie – Bewegung auf der Seite.
   1. Scroll-Nadel: Eine Venenverweilkanüle sticht beim Scrollen am rechten Rand nach unten; hinter ihr bleibt der
      Stichkanal stehen, jede Sektion ist ein Markierungspunkt. Am Seitenende sitzt der Schmuck (Kugel).
      Auf schmalen Bildschirmen stattdessen eine dünne Fortschrittslinie oben.
   2. Sanftes Einblenden der Inhalte beim Scrollen, hochzählende Zahlen.
   Bei „Bewegung reduzieren“ (prefers-reduced-motion) bleibt alles ruhig; ohne JavaScript ist die Seite unverändert. */
(function () {
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  root.classList.add("js-bewegung");
  if (ruhig) root.classList.add("ruhig");

  // ---------- Scroll-Nadel ----------
  var KURZ = { ablauf: "Ablauf", zielgruppe: "Für wen", kurs: "Kursinhalt", pakete: "Pakete", praxistag: "Praxistag", ergebnis: "Ergebnis", klartext: "Klartext", faq: "Fragen", kontakt: "Anmeldung" };
  var sektionen = [].slice.call(document.querySelectorAll("main section[id]"));
  var nadel = document.createElement("div");
  nadel.className = "nadel";
  nadel.setAttribute("aria-hidden", "true");
  nadel.innerHTML =
    '<div class="nadel-spur"></div><div class="nadel-kanal"></div><div class="nadel-marken"></div>' +
    '<svg class="nadel-kanuele" viewBox="0 0 24 150" width="24" height="150">' +
      '<rect x="5" y="0" width="14" height="48" rx="4" class="nk-griff"/>' +
      '<rect x="8" y="10" width="8" height="26" rx="2" class="nk-fenster"/>' +
      '<rect x="3" y="48" width="18" height="16" rx="3" class="nk-ansatz"/>' +
      '<rect x="9" y="64" width="6" height="66" rx="2" class="nk-ueberzug"/>' +
      '<polygon points="10.5,130 13.5,130 12,150" class="nk-spitze"/>' +
    "</svg>" +
    '<div class="nadel-kugel"></div><p class="nadel-text">Schmuck sitzt.</p>';
  var balken = document.createElement("div");
  balken.className = "nadel-balken";
  balken.setAttribute("aria-hidden", "true");
  document.body.appendChild(nadel);
  document.body.appendChild(balken);

  var marken = nadel.querySelector(".nadel-marken"), punkte = [];
  sektionen.forEach(function (s) {
    var name = KURZ[s.id] || ((s.querySelector(".label") || s.querySelector("h2") || {}).textContent || "").trim();
    var m = document.createElement("span");
    m.className = "marke";
    m.innerHTML = "<i></i><b>" + name.replace(/[<>&]/g, "") + "</b>";
    m.addEventListener("click", function () { s.scrollIntoView({ behavior: ruhig ? "auto" : "smooth" }); });
    marken.appendChild(m);
    punkte.push({ el: m, s: s, pos: 0 });
  });

  function vermessen() {
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    punkte.forEach(function (pt) {
      var oben = pt.s.getBoundingClientRect().top + window.scrollY;
      pt.pos = Math.min(1, Math.max(0, (oben - window.innerHeight * 0.35) / max));
      pt.el.style.top = (pt.pos * 100) + "%";
    });
  }
  var geplant = false;
  function zeichnen() {
    geplant = false;
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    var p = Math.min(1, Math.max(0, window.scrollY / max));
    root.style.setProperty("--stich", p.toFixed(4));
    nadel.classList.toggle("fertig", p > 0.985);
    nadel.classList.toggle("bereit", window.scrollY > 40);
    var aktuell = null;
    punkte.forEach(function (pt) { var d = p >= pt.pos - 0.002; pt.el.classList.toggle("durch", d); if (d) aktuell = pt; });
    punkte.forEach(function (pt) { pt.el.classList.toggle("aktuell", pt === aktuell && p <= 0.985); });
  }
  function anstossen() { if (!geplant) { geplant = true; window.requestAnimationFrame(zeichnen); } }
  window.addEventListener("scroll", anstossen, { passive: true });
  window.addEventListener("resize", function () { vermessen(); anstossen(); });
  window.addEventListener("load", function () { vermessen(); anstossen(); });
  if ("ResizeObserver" in window) new ResizeObserver(function () { vermessen(); anstossen(); }).observe(document.body);
  vermessen(); zeichnen();

  if (ruhig || !("IntersectionObserver" in window)) return;

  // ---------- Einblenden beim Scrollen ----------
  var auswahl = "main section .label, main section h2, main section .intro, main section .lead, .steps > li, .three > *, .two > *, .proof > *, .pair > *, .mods > details, .gallery > *, .day > *, .card, .price, .note, .contact > *";
  var ziele = [].slice.call(document.querySelectorAll(auswahl)).filter(function (el, i, a) {
    for (var p = el.parentElement; p; p = p.parentElement) if (a.indexOf(p) > -1) return false; // nicht doppelt animieren
    return !el.closest(".hero");
  });
  ziele.forEach(function (el) {
    var geschwister = el.parentElement ? [].slice.call(el.parentElement.children).filter(function (k) { return ziele.indexOf(k) > -1; }) : [];
    var n = Math.min(geschwister.indexOf(el), 6);
    el.classList.add("einblenden");
    if (n > 0) el.style.transitionDelay = (n * 70) + "ms";
  });
  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("sichtbar"); beobachter.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  ziele.forEach(function (el) { beobachter.observe(el); });

  // ---------- Zahlen hochzählen (z. B. 11 Module, 103 Lektionen) ----------
  [].slice.call(document.querySelectorAll(".spec dd")).forEach(function (dd) {
    var m = dd.textContent.match(/^(\d+)(.*)$/);
    if (!m || /^\S/.test(m[2])) return; // „18G“ bleibt stehen
    var ziel = Number(m[1]), rest = m[2], start = null, dauer = 1100;
    dd.textContent = "0" + rest;
    function schritt(t) {
      if (start === null) start = t;
      var x = Math.min(1, (t - start) / dauer), weich = 1 - Math.pow(1 - x, 3);
      dd.textContent = Math.round(ziel * weich) + rest;
      if (x < 1) window.requestAnimationFrame(schritt);
    }
    window.setTimeout(function () { window.requestAnimationFrame(schritt); }, 500);
  });
})();
