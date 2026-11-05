/* Piercing Akademie – Anfrage für Praxis und Komplett (Startseite, #anfrage).
   Kontaktdaten, Wunschtermin(e) für den Praxistag im Kalender (nur Samstag und Montag), Wunschtag und Uhrzeit
   für das Ersttelefonat. Geht an /api/anfrage; der Server prüft dieselben Regeln und schickt die Anfrage per
   E-Mail an die Akademie und eine Eingangsbestätigung an den Interessenten. Kalender: assets/kalender.js. */
(function () {
  "use strict";
  var form = document.getElementById("anfrage");
  if (!form || !window.PAKalender) return;
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var T = {
    de: { name: "Bitte gib deinen Namen an.", email: "Bitte gib eine gültige E-Mail-Adresse an.", telefon: "Bitte gib deine Telefonnummer an, damit wir dich anrufen können.",
      praxis1: "Bitte wähle im Kalender einen Wunschtermin für deinen Praxistag.", praxis2: "Bitte wähle im Kalender zwei Wunschtermine für deine Praxistage.",
      anruf: "Bitte wähle im Kalender einen Tag für das Ersttelefonat.", zeit: "Bitte wähle eine Uhrzeit für das Telefonat.", alter: "Bitte bestätige, dass du mindestens 18 Jahre alt bist.",
      zuOft: "Zu viele Anfragen in kurzer Zeit. Bitte ruf uns an: +49 173 8072405.", fehler: "Das hat nicht geklappt. Bitte versuch es noch einmal oder ruf uns an: +49 173 8072405.", warte: "Wird gesendet …" },
    en: { name: "Please enter your name.", email: "Please enter a valid email address.", telefon: "Please enter your phone number so that we can call you.",
      praxis1: "Please choose a preferred date for your practice day in the calendar.", praxis2: "Please choose two preferred dates for your practice days in the calendar.",
      anruf: "Please choose a day for the first phone call in the calendar.", zeit: "Please choose a time for the call.", alter: "Please confirm that you are at least 18 years old.",
      zuOft: "Too many enquiries in a short time. Please call us: +49 173 8072405.", fehler: "That did not work. Please try again or call us: +49 173 8072405.", warte: "Sending …" },
    es: { name: "Indica tu nombre.", email: "Indica un correo electrónico válido.", telefon: "Indica tu número de teléfono para que podamos llamarte.",
      praxis1: "Elige en el calendario una fecha preferida para tu día de práctica.", praxis2: "Elige en el calendario dos fechas preferidas para tus días de práctica.",
      anruf: "Elige en el calendario un día para la primera llamada.", zeit: "Elige una hora para la llamada.", alter: "Confirma que tienes al menos 18 años.",
      zuOft: "Demasiadas consultas en poco tiempo. Llámanos: +49 173 8072405.", fehler: "No ha funcionado. Inténtalo de nuevo o llámanos: +49 173 8072405.", warte: "Enviando …" }
  }[SPRACHE] || {};
  var PRAXISTAGE = { praxis: 1, komplett: 2 };
  var fehler = document.getElementById("a-fehler"), ok = document.getElementById("a-ok"), knopf = document.getElementById("a-senden");
  var KNOPF_TEXT = knopf.textContent;
  var kalPraxis = window.PAKalender(document.getElementById("a-kal-praxis"), document.getElementById("a-praxis-auswahl"), 1);
  var kalAnruf = window.PAKalender(document.getElementById("a-kal-anruf"), document.getElementById("a-anruf-auswahl"), 1);
  kalPraxis.aenderung = kalAnruf.aenderung = function () { fehler.hidden = true; };

  function paket() { var r = form.querySelector("input[name=paket]:checked"); return r ? r.value : "praxis"; }
  function anzeigen() {
    var n = PRAXISTAGE[paket()] || 1;
    kalPraxis.setzeMax(n);
    form.querySelectorAll("[data-anzahl]").forEach(function (el) { el.hidden = +el.getAttribute("data-anzahl") !== n; });
  }
  function waehle(p) { var r = form.querySelector('input[name=paket][value="' + p + '"]'); if (r) { r.checked = true; anzeigen(); } }
  // Paket vorauswählen: Knopf auf einer Preiskarte (data-paket) oder Link mit ?paket=praxis|komplett
  document.querySelectorAll("a[data-paket]").forEach(function (a) { a.addEventListener("click", function () { waehle(a.getAttribute("data-paket")); }); });
  var start = new URLSearchParams(window.location.search).get("paket"); if (start && PRAXISTAGE[start]) waehle(start);
  anzeigen();
  form.addEventListener("change", function (e) { if (e.target.name === "paket") anzeigen(); fehler.hidden = true; });

  function zeige(text, ziel) {
    fehler.textContent = text; fehler.hidden = false;
    if (ziel) { ziel.scrollIntoView({ block: "center", behavior: "smooth" }); if (ziel.focus) ziel.focus({ preventScroll: true }); }
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements, n = PRAXISTAGE[paket()] || 1;
    if (!f.name.value.trim()) return zeige(T.name, f.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim())) return zeige(T.email, f.email);
    if (!/^[0-9 +\/()\-]{6,40}$/.test(f.telefon.value.trim()) || f.telefon.value.replace(/\D/g, "").length < 6) return zeige(T.telefon, f.telefon);
    if (kalPraxis.auswahl.length !== n) return zeige(n > 1 ? T.praxis2 : T.praxis1, document.getElementById("a-kal-praxis"));
    if (kalAnruf.auswahl.length !== 1) return zeige(T.anruf, document.getElementById("a-kal-anruf"));
    if (!f.telefon_zeit.value) return zeige(T.zeit, f.telefon_zeit);
    if (!f.volljaehrig.checked) return zeige(T.alter, f.volljaehrig);
    fehler.hidden = true;
    var daten = { paket: paket(), name: f.name.value.trim(), email: f.email.value.trim(), telefon: f.telefon.value.trim(),
      praxis_termine: kalPraxis.auswahl.slice().sort(), telefon_termin: kalAnruf.auswahl[0], telefon_zeit: f.telefon_zeit.value,
      nachricht: f.nachricht.value.trim(), volljaehrig: true, website: f.website.value, sprache: SPRACHE };
    knopf.disabled = true; knopf.textContent = T.warte;
    fetch("/api/anfrage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(daten) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, d: d }; }); })
      .then(function (x) {
        knopf.disabled = false; knopf.textContent = KNOPF_TEXT;
        if (x.status === 200 && x.d.ok) {
          form.querySelectorAll(".field, .a-pakete, .check, #a-senden, .form > .fine").forEach(function (el) { el.hidden = true; });
          ok.hidden = false; ok.focus(); return;
        }
        zeige(x.status === 429 ? T.zuOft : T.fehler);
      })
      .catch(function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; zeige(T.fehler); });
  });
})();
