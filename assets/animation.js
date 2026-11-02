/* Piercing Akademie – Bewegung auf der Seite.
   1. Scroll-Nadel: Eine Venenverweilkanüle sticht beim Scrollen am rechten Rand nach unten; hinter ihr bleibt der
      Stichkanal stehen, jede Sektion ist ein Markierungspunkt. Am Seitenende sitzt der Schmuck (Kugel).
      Auf schmalen Bildschirmen stattdessen eine dünne Fortschrittslinie oben.
   2. Sanftes Einblenden der Inhalte beim Scrollen, hochzählende Zahlen, sich zeichnende Linie zwischen den Schritten.
   3. Paketkarten kippen leicht zur Maus (nur mit Maus, nicht bei „Bewegung reduzieren“).
   4. Überschriften steigen Wort für Wort auf, Fotos enthüllen sich, Karten kippen nach vorn, die Ablauf-Linie
      wächst mit dem Scrollen, Preise fallen von 10.000 auf den echten Preis, der Einstieg bekommt beim Wegscrollen Tiefe.
   Bei „Bewegung reduzieren“ (prefers-reduced-motion) bleibt alles ruhig; ohne JavaScript ist die Seite unverändert. */
(function () {
  "use strict";
  var ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  root.classList.add("js-bewegung");
  if (ruhig) root.classList.add("ruhig");

  // ---------- Scroll-Nadel ----------
  var KURZ = {
    de: { ueber: "Über mich", lernprinzip: "Lernprinzip", module: "Module", ablauf: "Ablauf", zielgruppe: "Für wen", kurs: "Kursinhalt", pakete: "Pakete", praxistag: "Praxistag", ergebnis: "Studio", klartext: "Klartext", faq: "Fragen", kontakt: "Anmeldung" },
    en: { ueber: "About me", lernprinzip: "How you learn", module: "Modules", ablauf: "How it works", zielgruppe: "Who it is for", kurs: "Content", pakete: "Packages", praxistag: "Practice day", ergebnis: "Studio", klartext: "Plain words", faq: "FAQ", kontakt: "Sign up" },
    es: { ueber: "Sobre mí", lernprinzip: "Cómo aprendes", module: "Módulos", ablauf: "Cómo funciona", zielgruppe: "Para quién", kurs: "Contenido", pakete: "Paquetes", praxistag: "Día de práctica", ergebnis: "Estudio", klartext: "Claro", faq: "Preguntas", kontakt: "Inscripción" }
  }[(document.documentElement.lang || "de").slice(0, 2)] || {};
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

  // Videos: bei „Bewegung reduzieren“ angehalten (nur Standbild), sonst nur abspielen, solange sie sichtbar sind
  var videos = [].slice.call(document.querySelectorAll("video[data-auto]"));
  if (!ruhig && "IntersectionObserver" in window) {
    var vb = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var x = e.target.play(); if (x && x.catch) x.catch(function () {}); } else e.target.pause(); }); });
    videos.forEach(function (v) { vb.observe(v); });
  }

  if (ruhig || !("IntersectionObserver" in window)) return;

  // ---------- Einblenden beim Scrollen ----------
  var auswahl = "main section .label, main section h2, main section .intro, .steps > li, .weg, .weg > li, .wer > *, .three > *, .prinzip > li, .two > *, .proof > *, .modulgitter > li, .mods > details, .day > *, .card, .note, .contact > *, .zahlen > div, .ueber > *, .fakten > div";
  var ziele = [].slice.call(document.querySelectorAll(auswahl)).filter(function (el, i, a) {
    if (el.classList.contains("weg")) return true; // die Linie zwischen den Schritten zeichnet sich selbst
    for (var p = el.parentElement; p; p = p.parentElement) if (a.indexOf(p) > -1 && !p.classList.contains("weg")) return false; // nicht doppelt animieren
    return !el.closest(".hero") && !el.closest(".clip");
  });
  ziele.forEach(function (el) {
    var geschwister = el.parentElement ? [].slice.call(el.parentElement.children).filter(function (k) { return ziele.indexOf(k) > -1; }) : [];
    var n = Math.min(geschwister.indexOf(el), 7);
    if (!el.classList.contains("weg")) el.classList.add("einblenden");
    if (n > 0) el.style.transitionDelay = (n * 70) + "ms";
  });
  var beobachter = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("sichtbar");
      beobachter.unobserve(e.target);
      if (e.target.hasAttribute("data-zahl")) hochzaehlen(e.target);
      [].forEach.call(e.target.querySelectorAll("[data-zahl]"), hochzaehlen);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  ziele.forEach(function (el) { beobachter.observe(el); });

  // ---------- Überschriften steigen Wort für Wort auf ----------
  [].forEach.call(document.querySelectorAll("main section h2.sec-title, main section h3.sec-title"), function (h) {
    if (h.closest(".hero")) return;
    var i = 0;
    (function zerlegen(knoten) {
      [].slice.call(knoten.childNodes).forEach(function (k) {
        if (k.nodeType === 3) {
          var frag = document.createDocumentFragment();
          k.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
            var aussen = document.createElement("span"), innen = document.createElement("span");
            aussen.className = "wort"; innen.textContent = w; innen.style.transitionDelay = (i++ * 70) + "ms";
            aussen.appendChild(innen); frag.appendChild(aussen);
          });
          knoten.replaceChild(frag, k);
        } else if (k.nodeType === 1) zerlegen(k);
      });
    })(h);
    h.classList.remove("einblenden"); h.style.transitionDelay = ""; h.classList.add("woerter");
    beobachter.observe(h);
  });

  // ---------- Fotos enthüllen sich mit einer Wischblende ----------
  [].forEach.call(document.querySelectorAll("main section figure:not(.laufband):not(.filmband):not(.clip)"), function (f) {
    if (f.closest(".hero") || !f.querySelector("img, video")) return;
    f.classList.add("enthuellen"); beobachter.observe(f);
  });

  // ---------- Karten kippen aus der Tiefe nach vorn ----------
  [].forEach.call(document.querySelectorAll(".card.einblenden, .wer > .einblenden, .prinzip > li.einblenden, .three > .einblenden, .modulgitter > li.einblenden"), function (k) { k.classList.add("kippen"); });

  // ---------- Ablauf am Praxistag: Linie wächst mit dem Scrollen, Stationen leuchten auf ----------
  var ablauf = document.querySelector(".steps");
  if (ablauf) {
    ablauf.classList.add("steps-scroll");
    var stationen = [].slice.call(ablauf.children), ablaufGeplant = false;
    var ablaufZeichnen = function () {
      ablaufGeplant = false;
      var r = ablauf.getBoundingClientRect(), marke = window.innerHeight * 0.72;
      ablauf.style.setProperty("--fortschritt", Math.min(1, Math.max(0, (marke - r.top) / Math.max(1, r.height - 40))).toFixed(3));
      stationen.forEach(function (li) { li.classList.toggle("erreicht", li.getBoundingClientRect().top + 18 < marke); });
    };
    window.addEventListener("scroll", function () { if (!ablaufGeplant) { ablaufGeplant = true; window.requestAnimationFrame(ablaufZeichnen); } }, { passive: true });
    ablaufZeichnen();
  }

  // ---------- Einstieg: Bild zoomt beim Wegscrollen leicht, Text tritt zurück ----------
  var heroBild = document.querySelector(".hero-bild .foto"), heroText = document.querySelector(".hero > div:first-child"), heroGeplant = false;
  if (heroBild && heroText) {
    window.addEventListener("scroll", function () {
      if (heroGeplant) return; heroGeplant = true;
      window.requestAnimationFrame(function () {
        heroGeplant = false;
        var p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9)));
        heroBild.style.transform = "translate3d(0," + (p * 40).toFixed(1) + "px,0) scale(" + (1 + p * 0.06).toFixed(3) + ")";
        heroText.style.transform = "translate3d(0," + (p * -24).toFixed(1) + "px,0)";
        heroText.style.opacity = (1 - p * 0.55).toFixed(3);
      });
    }, { passive: true });
  }

  // ---------- Preise fallen von 10.000 auf den echten Preis, sobald die Karte erscheint ----------
  [].forEach.call(document.querySelectorAll(".card .price"), function (pr) {
    var knoten = pr.firstChild;
    if (!knoten || knoten.nodeType !== 3) return;
    if (pr.closest(".pk-einzeln")) return; // Buchpreise bleiben ruhig stehen
    var vorlage = knoten.textContent, m = vorlage.match(/\d[\d.,]*/);
    if (!m) return;
    // Nachkommastellen erkennen (19,90 / 19.90), Tausender (2.490 / 2,490) nicht; formatiert wird in der Seitensprache, am Ende steht wieder genau der Originaltext
    var roh = m[0], dez = /[.,]\d{2}$/.test(roh) ? 2 : 0;
    var ziel = dez ? Number(roh.slice(0, -3).replace(/[.,]/g, "") + "." + roh.slice(-2)) : Number(roh.replace(/[.,]/g, ""));
    var nf = new Intl.NumberFormat(document.documentElement.lang || "de", { minimumFractionDigits: dez, maximumFractionDigits: dez, useGrouping: "always" });
    var karte = pr.closest(".card"), gezaehlt = false, START = 10000;
    var form = function (v) { return vorlage.replace(roh, nf.format(v)); };
    new IntersectionObserver(function (es, ob) {
      es.forEach(function (e) {
        if (!e.isIntersecting || gezaehlt) return;
        gezaehlt = true; ob.disconnect();
        var start = null;
        (function schritt(t) {
          if (start === null) start = t;
          var x = Math.min(1, (t - start) / 1200), weich = 1 - Math.pow(1 - x, 3);
          var v = START + (ziel - START) * weich;
          knoten.textContent = x < 1 ? form(dez ? v : Math.round(v)) : vorlage;
          if (x < 1) window.requestAnimationFrame(schritt);
        })(performance.now());
      });
    }, { threshold: 0.3 }).observe(karte);
  });

  // ---------- Zahlen hochzählen (11 Module, 103 Lektionen, 575 Fragen) ----------
  function hochzaehlen(dd) {
    if (dd.dataset.gezaehlt) return;
    dd.dataset.gezaehlt = "1";
    var ziel = Number(dd.getAttribute("data-zahl")), start = null, dauer = 1400;
    function schritt(t) {
      if (start === null) start = t;
      var x = Math.min(1, (t - start) / dauer), weich = 1 - Math.pow(1 - x, 3);
      dd.textContent = String(Math.round(ziel * weich));
      if (x < 1) window.requestAnimationFrame(schritt);
    }
    dd.textContent = "0";
    window.requestAnimationFrame(schritt);
  }
  [].forEach.call(document.querySelectorAll(".hero [data-zahl], .zahlen [data-zahl]"), function (dd) {
    if (!dd.closest(".einblenden")) window.setTimeout(function () { hochzaehlen(dd); }, 600);
  });

  // ---------- Leichtes Kippen der Paketkarten zur Maus ----------
  if (window.matchMedia("(hover: hover)").matches) {
    [].forEach.call(document.querySelectorAll(".card"), function (k) {
      k.addEventListener("pointermove", function (e) {
        var r = k.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        k.style.transform = "translateY(-6px) perspective(900px) rotateX(" + (-y * 4).toFixed(2) + "deg) rotateY(" + (x * 5).toFixed(2) + "deg)";
      });
      k.addEventListener("pointerleave", function () { k.style.transform = ""; });
    });
  }
})();
