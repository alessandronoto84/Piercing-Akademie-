/* Piercing Akademie – Bestellseite (bestellen.html).
   Zwei Pflicht-Häkchen (AGB/18+, sofortiger Beginn des Online-Kurses nach § 356 Abs. 5 BGB), dann
   „Zahlungspflichtig bestellen“: Der Server (/api/bestellen) speichert die Zustimmung als Nachweis,
   legt eine Stripe-Checkout-Sitzung an und gibt deren Adresse zurück. Preise kommen nur vom Server.
   Praxis und Komplett: Telefonnummer, Wunschtermin(e) für den Praxistag (nur Samstag/Montag) und
   Wunschtag mit Uhrzeit für das Ersttelefonat, jeweils in einem kleinen Kalender. Der Server prüft dieselben Regeln. */
(function () {
  "use strict";
  var form = document.getElementById("bestell-formular");
  if (!form) return;
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var LOCALE = { de: "de-DE", en: "en-GB", es: "es-ES" }[SPRACHE] || "de-DE";
  var T = {
    de: { beide: "Bitte bestätige beide Punkte, um zu bestellen.", agb: "Bitte bestätige die AGB, um zu bestellen.", zuOft: "Zu viele Versuche in kurzer Zeit. Bitte versuch es später noch einmal oder ruf uns an.", warte: "Einen Moment …",
      telefon: "Bitte gib deine Telefonnummer an, damit wir dich anrufen können.", praxis1: "Bitte wähle im Kalender einen Wunschtermin für deinen Praxistag.", praxis2: "Bitte wähle im Kalender zwei Wunschtermine für deine Praxistage.",
      anruf: "Bitte wähle im Kalender einen Tag für das Ersttelefonat.", zeit: "Bitte wähle eine Uhrzeit für das Telefonat.", termine: "Bitte prüfe deine Wunschtermine und die Telefonnummer.",
      vor: "Nächster Monat", zurueck: "Voriger Monat", gewaehlt: "Gewählt:", keins: "Noch kein Tag gewählt." },
    en: { beide: "Please confirm both points to place your order.", agb: "Please accept the terms to place your order.", zuOft: "Too many attempts in a short time. Please try again later or give us a call.", warte: "One moment …",
      telefon: "Please enter your phone number so that we can call you.", praxis1: "Please choose a preferred date for your practice day in the calendar.", praxis2: "Please choose two preferred dates for your practice days in the calendar.",
      anruf: "Please choose a day for the first phone call in the calendar.", zeit: "Please choose a time for the call.", termine: "Please check your preferred dates and phone number.",
      vor: "Next month", zurueck: "Previous month", gewaehlt: "Selected:", keins: "No day selected yet." },
    es: { beide: "Confirma los dos puntos para hacer el pedido.", agb: "Acepta las condiciones para hacer el pedido.", zuOft: "Demasiados intentos en poco tiempo. Inténtalo más tarde o llámanos.", warte: "Un momento …",
      telefon: "Indica tu número de teléfono para que podamos llamarte.", praxis1: "Elige en el calendario una fecha preferida para tu día de práctica.", praxis2: "Elige en el calendario dos fechas preferidas para tus días de práctica.",
      anruf: "Elige en el calendario un día para la primera llamada.", zeit: "Elige una hora para la llamada.", termine: "Revisa tus fechas preferidas y el número de teléfono.",
      vor: "Mes siguiente", zurueck: "Mes anterior", gewaehlt: "Elegido:", keins: "Todavía no has elegido ningún día." }
  }[SPRACHE] || {};
  var fehler = document.getElementById("b-fehler"), summe = document.getElementById("b-summe");
  var knopf = document.getElementById("b-bestellen"), nichtBereit = document.getElementById("b-nicht-bereit");
  var KNOPF_TEXT = knopf.textContent;
  var PRAXISTAGE = { praxis: 1, komplett: 2 };

  // ---------- Kalender ----------
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function tagText(s) { var t = s.split("-"); return new Date(+t[0], +t[1] - 1, +t[2]).toLocaleDateString(LOCALE, { weekday: "long", day: "numeric", month: "long", year: "numeric" }); }
  function kalender(el, ausgabe) {
    var tage = el.getAttribute("data-tage").split(",").map(Number);
    var heute = new Date(); heute.setHours(12, 0, 0, 0);
    var von = new Date(heute); von.setDate(von.getDate() + +el.getAttribute("data-von"));
    var bis = new Date(heute); bis.setDate(bis.getDate() + +el.getAttribute("data-bis"));
    var k = { max: 1, auswahl: [], monat: new Date(von.getFullYear(), von.getMonth(), 1) };
    // Wochentagsnamen ab Montag
    var wt = []; for (var i = 0; i < 7; i++) wt.push(new Date(2024, 0, 1 + i).toLocaleDateString(LOCALE, { weekday: "short" }));
    function erlaubt(d) { return d >= von && d <= bis && tage.indexOf(d.getDay()) > -1; }
    function zeichnen() {
      var m = k.monat, kopf = m.toLocaleDateString(LOCALE, { month: "long", year: "numeric" });
      var erster = new Date(m.getFullYear(), m.getMonth(), 1), versatz = (erster.getDay() + 6) % 7;
      var anzahl = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      var vorher = new Date(m.getFullYear(), m.getMonth(), 0) >= von, nachher = new Date(m.getFullYear(), m.getMonth() + 1, 1) <= bis;
      var h = '<div class="b-kal-kopf"><button type="button" data-schritt="-1" aria-label="' + T.zurueck + '"' + (vorher ? "" : " disabled") + '>‹</button><strong>' + kopf +
        '</strong><button type="button" data-schritt="1" aria-label="' + T.vor + '"' + (nachher ? "" : " disabled") + '>›</button></div><div class="b-kal-raster">';
      wt.forEach(function (w) { h += '<span class="b-kal-wt" aria-hidden="true">' + w + "</span>"; });
      for (var j = 0; j < versatz; j++) h += "<span></span>";
      for (var t = 1; t <= anzahl; t++) {
        var d = new Date(m.getFullYear(), m.getMonth(), t, 12), s = iso(d), ok = erlaubt(d), an = k.auswahl.indexOf(s) > -1;
        h += ok ? '<button type="button" class="b-kal-tag' + (an ? " an" : "") + '" data-tag="' + s + '" aria-pressed="' + an + '" aria-label="' + tagText(s) + '">' + t + "</button>"
          : '<span class="b-kal-tag aus" aria-hidden="true">' + t + "</span>";
      }
      el.innerHTML = h + "</div>";
      ausgabe.textContent = k.auswahl.length ? T.gewaehlt + " " + k.auswahl.slice().sort().map(tagText).join(" · ") : T.keins;
    }
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.hasAttribute("data-schritt")) { k.monat = new Date(k.monat.getFullYear(), k.monat.getMonth() + +b.getAttribute("data-schritt"), 1); zeichnen(); el.querySelector("[data-schritt='" + b.getAttribute("data-schritt") + "']").focus(); return; }
      var s = b.getAttribute("data-tag"), i = k.auswahl.indexOf(s);
      if (i > -1) k.auswahl.splice(i, 1); else { k.auswahl.push(s); while (k.auswahl.length > k.max) k.auswahl.shift(); }
      fehler.hidden = true; zeichnen();
      var neu = el.querySelector("[data-tag='" + s + "']"); if (neu) neu.focus();
    });
    k.setzeMax = function (n) { k.max = n; while (k.auswahl.length > n) k.auswahl.shift(); zeichnen(); };
    zeichnen();
    return k;
  }
  var kalPraxis = kalender(document.getElementById("b-kal-praxis"), document.getElementById("b-praxis-auswahl"));
  var kalAnruf = kalender(document.getElementById("b-kal-anruf"), document.getElementById("b-anruf-auswahl"));
  var termineFeld = document.getElementById("b-termine");

  function gewaehlt() { var r = form.querySelector("input[name=paket]:checked"); return r ? r.value : ""; }
  // Art des gewählten Produkts: kurs (Online-Kurs-Pakete), digital (Kursbuch); „ware“ bleibt für künftige Versandprodukte
  function art() { var r = form.querySelector("input[name=paket]:checked"); return r ? r.closest(".b-paket").getAttribute("data-art") || "kurs" : "kurs"; }
  function anzeigen() {
    var r = form.querySelector("input[name=paket]:checked"), a = art(), n = PRAXISTAGE[gewaehlt()] || 0;
    if (r) summe.textContent = r.parentNode.querySelector(".b-preis").textContent;
    form.querySelectorAll("[data-fuer]").forEach(function (el) { el.hidden = el.getAttribute("data-fuer") !== a; });
    var sofort = document.getElementById("b-sofort-feld"); if (sofort) sofort.hidden = a === "ware";
    var praxis = document.getElementById("b-praxis-hinweis"); if (praxis) praxis.hidden = !n;
    termineFeld.hidden = !n;
    if (n) { kalPraxis.setzeMax(n); termineFeld.querySelectorAll("[data-anzahl]").forEach(function (el) { el.hidden = +el.getAttribute("data-anzahl") !== n; }); }
  }
  var wunsch = new URLSearchParams(window.location.search).get("paket");
  var start = wunsch && form.querySelector('input[name=paket][value="' + wunsch.replace(/[^a-z]/g, "") + '"]');
  if (start) start.checked = true;
  anzeigen();
  form.addEventListener("change", function (e) { if (e.target.name === "paket") anzeigen(); if (e.target.type === "checkbox" || e.target.tagName === "SELECT") fehler.hidden = true; });

  function zeigeFehler(text, ziel) { fehler.textContent = text; fehler.hidden = false; if (ziel) { ziel.scrollIntoView({ block: "center", behavior: "smooth" }); if (ziel.focus) ziel.focus({ preventScroll: true }); } }
  function termineDaten() {
    var n = PRAXISTAGE[gewaehlt()] || 0;
    if (!n) return {};
    var tel = document.getElementById("b-telefon"), zeit = document.getElementById("b-telefon-zeit");
    if (!/^[0-9 +\/()\-]{6,40}$/.test(tel.value.trim()) || tel.value.replace(/\D/g, "").length < 6) { zeigeFehler(T.telefon, tel); return null; }
    if (kalPraxis.auswahl.length !== n) { zeigeFehler(n > 1 ? T.praxis2 : T.praxis1, document.getElementById("b-kal-praxis")); return null; }
    if (kalAnruf.auswahl.length !== 1) { zeigeFehler(T.anruf, document.getElementById("b-kal-anruf")); return null; }
    if (!zeit.value) { zeigeFehler(T.zeit, zeit); return null; }
    return { telefon: tel.value.trim(), praxis_termine: kalPraxis.auswahl.slice().sort(), telefon_termin: kalAnruf.auswahl[0], telefon_zeit: zeit.value };
  }

  function geschlossen() { nichtBereit.hidden = false; nichtBereit.focus(); }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var termine = termineDaten(); if (!termine) return;
    var agb = document.getElementById("b-agb").checked, sofort = document.getElementById("b-sofort").checked;
    if (!agb || (art() !== "ware" && !sofort)) { zeigeFehler(art() === "ware" ? T.agb : T.beide); return; }
    fehler.hidden = true;
    if (!/^https?:$/.test(window.location.protocol) || window.PA_VORSCHAU) { geschlossen(); return; }
    knopf.disabled = true; knopf.textContent = T.warte;
    var daten = { paket: gewaehlt(), sprache: SPRACHE, agb: agb, sofort: art() === "ware" ? false : sofort };
    Object.keys(termine).forEach(function (k) { daten[k] = termine[k]; });
    fetch("/api/bestellen", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(daten) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, d: d }; }); })
      .then(function (x) {
        if (x.status === 200 && x.d.url && /^https:\/\/checkout\.stripe\.com\//.test(x.d.url)) { window.location.href = x.d.url; return; }
        knopf.disabled = false; knopf.textContent = KNOPF_TEXT;
        if (x.status === 429) zeigeFehler(T.zuOft);
        else if (x.d && x.d.fehler === "termine") zeigeFehler(T.termine, termineFeld);
        else geschlossen();
      })
      .catch(function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; geschlossen(); });
  });
  // Zurück aus Stripe (Browser-Zurück): Knopf wieder freigeben
  window.addEventListener("pageshow", function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; });
})();
