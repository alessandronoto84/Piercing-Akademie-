/* Piercing Akademie – Bestellseite (bestellen.html): direkt kaufen lassen sich der Online-Kurs (Paket Basis)
   und das Kursbuch digital. Praxis und Komplett gibt es nur auf Anfrage (Formular auf der Startseite).
   Zwei Pflicht-Häkchen (AGB/18+, sofortiger Beginn nach § 356 Abs. 5 BGB), dann „Zahlungspflichtig bestellen“:
   Der Server (/api/bestellen) speichert die Zustimmung als Nachweis, legt eine Stripe-Checkout-Sitzung an und
   gibt deren Adresse zurück. Preise kommen nur vom Server. */
(function () {
  "use strict";
  var form = document.getElementById("bestell-formular");
  if (!form) return;
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var T = {
    de: { beide: "Bitte bestätige beide Punkte, um zu bestellen.", agb: "Bitte bestätige die AGB, um zu bestellen.", zuOft: "Zu viele Versuche in kurzer Zeit. Bitte versuch es später noch einmal oder ruf uns an.", warte: "Einen Moment …" },
    en: { beide: "Please confirm both points to place your order.", agb: "Please accept the terms to place your order.", zuOft: "Too many attempts in a short time. Please try again later or give us a call.", warte: "One moment …" },
    es: { beide: "Confirma los dos puntos para hacer el pedido.", agb: "Acepta las condiciones para hacer el pedido.", zuOft: "Demasiados intentos en poco tiempo. Inténtalo más tarde o llámanos.", warte: "Un momento …" }
  }[SPRACHE] || { beide: "", zuOft: "", warte: "…" };
  var fehler = document.getElementById("b-fehler"), summe = document.getElementById("b-summe");
  var knopf = document.getElementById("b-bestellen"), nichtBereit = document.getElementById("b-nicht-bereit");
  var KNOPF_TEXT = knopf.textContent;

  function gewaehlt() { var r = form.querySelector("input[name=paket]:checked"); return r ? r.value : ""; }
  // Art des gewählten Produkts: kurs (Online-Kurs), digital (Kursbuch); „ware“ bleibt für künftige Versandprodukte
  function art() { var r = form.querySelector("input[name=paket]:checked"); return r ? r.closest(".b-paket").getAttribute("data-art") || "kurs" : "kurs"; }
  function anzeigen() {
    var r = form.querySelector("input[name=paket]:checked"), a = art();
    if (r) summe.textContent = r.parentNode.querySelector(".b-preis").textContent;
    form.querySelectorAll("[data-fuer]").forEach(function (el) { el.hidden = el.getAttribute("data-fuer") !== a; });
    var sofort = document.getElementById("b-sofort-feld"); if (sofort) sofort.hidden = a === "ware";
  }
  // Bestätigte Anfrage (Link aus der E-Mail „Dein Praxistag ist bestätigt“): nur dieses Paket, mit festem Termin
  var Q = new URLSearchParams(window.location.search), ANFRAGE = Q.get("anfrage") && Q.get("t") ? { anfrage: Q.get("anfrage"), t: Q.get("t") } : null;
  var LOCALE = { de: "de-DE", en: "en-GB", es: "es-ES" }[SPRACHE] || "de-DE";
  var A = {
    de: { praxis: "Praxis", komplett: "Komplett", inhalt: { praxis: "Online-Kurs und 1 Praxistag in Lingen", komplett: "Online-Kurs, 2 Praxistage, 1:1-Coaching und Übungsmaterial" }, tag: "Bestätigter Praxistag", tage: "Bestätigte Praxistage", widerruf: "Für Praxistag und Coaching gilt die Widerrufsbelehrung unverändert.", bezahlt: "Diese Buchung ist bereits bezahlt. Deinen Zugang findest du in deiner E-Mail.", ungueltig: "Dieser Link ist nicht mehr gültig. Bitte ruf uns an: +49 173 8072405." },
    en: { praxis: "Practice", komplett: "Complete", inhalt: { praxis: "Online course and 1 practice day in Lingen", komplett: "Online course, 2 practice days, 1:1 coaching and practice materials" }, tag: "Confirmed practice day", tage: "Confirmed practice days", widerruf: "For practice days and coaching, the cancellation policy applies unchanged.", bezahlt: "This booking has already been paid. You will find your access in your email.", ungueltig: "This link is no longer valid. Please call us: +49 173 8072405." },
    es: { praxis: "Práctica", komplett: "Completo", inhalt: { praxis: "Curso online y 1 día de práctica en Lingen", komplett: "Curso online, 2 días de práctica, mentoría 1:1 y material de práctica" }, tag: "Día de práctica confirmado", tage: "Días de práctica confirmados", widerruf: "Para los días de práctica y la mentoría, la información sobre el desistimiento se aplica sin cambios.", bezahlt: "Esta reserva ya está pagada. Encontrarás tu acceso en tu correo.", ungueltig: "Este enlace ya no es válido. Llámanos: +49 173 8072405." }
  }[SPRACHE] || {};
  function anfrageZeigen(info) {
    var feld = form.querySelector(".b-pakete");
    feld.querySelectorAll(".b-paket, .b-gruppe, .fine").forEach(function (el) { el.hidden = true; el.querySelectorAll("input").forEach(function (i) { i.checked = false; }); });
    var tage = info.termine.map(function (t) { var x = t.split("-"); return new Date(+x[0], +x[1] - 1, +x[2]).toLocaleDateString(LOCALE, { weekday: "long", day: "numeric", month: "long", year: "numeric" }); });
    var preis = (info.cent / 100).toLocaleString(LOCALE, { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
    var l = document.createElement("label"); l.className = "b-paket"; l.setAttribute("data-art", "kurs");
    l.innerHTML = '<input type="radio" name="paket" checked><span><strong></strong> <span class="b-preis"></span><br><span class="b-inhalt"></span><br><span class="b-inhalt"><strong></strong></span></span>';
    l.querySelector("input").value = info.paket;
    l.querySelector("strong").textContent = A[info.paket] || info.paket;
    l.querySelector(".b-preis").textContent = preis;
    l.querySelectorAll(".b-inhalt")[0].textContent = (A.inhalt || {})[info.paket] || "";
    l.querySelector(".b-inhalt strong").textContent = (tage.length > 1 ? A.tage : A.tag) + ": " + tage.join(" · ");
    feld.insertBefore(l, feld.querySelector(".b-paket"));
    var zust = document.getElementById("b-sofort-feld"), w = document.createElement("p");
    w.className = "fine"; w.textContent = A.widerruf; if (zust) zust.parentNode.insertBefore(w, zust.nextSibling);
    anzeigen();
    if (info.bezahlt) { fehler.textContent = A.bezahlt; fehler.hidden = false; knopf.disabled = true; }
  }
  if (ANFRAGE && window.fetch) {
    fetch("/api/anfrage/info?" + new URLSearchParams(ANFRAGE).toString())
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d && d.paket) anfrageZeigen(d); else { fehler.textContent = A.ungueltig; fehler.hidden = false; } })
      .catch(function () {});
  }
  var wunsch = ANFRAGE ? null : Q.get("paket");
  var start = wunsch && form.querySelector('input[name=paket][value="' + wunsch.replace(/[^a-z]/g, "") + '"]');
  if (start) start.checked = true;
  anzeigen();
  form.addEventListener("change", function (e) { if (e.target.name === "paket") anzeigen(); if (e.target.type === "checkbox") fehler.hidden = true; });

  function geschlossen() { nichtBereit.hidden = false; nichtBereit.focus(); }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var agb = document.getElementById("b-agb").checked, sofort = document.getElementById("b-sofort").checked;
    if (!agb || (art() !== "ware" && !sofort)) { fehler.textContent = art() === "ware" ? T.agb : T.beide; fehler.hidden = false; return; }
    fehler.hidden = true;
    if (!/^https?:$/.test(window.location.protocol) || window.PA_VORSCHAU) { geschlossen(); return; }
    knopf.disabled = true; knopf.textContent = T.warte;
    fetch("/api/bestellen", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ paket: gewaehlt(), sprache: SPRACHE, agb: agb, sofort: art() === "ware" ? false : sofort }, ANFRAGE && /^(praxis|komplett)$/.test(gewaehlt()) ? ANFRAGE : {})) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, d: d }; }); })
      .then(function (x) {
        if (x.status === 200 && x.d.url && /^https:\/\/checkout\.stripe\.com\//.test(x.d.url)) { window.location.href = x.d.url; return; }
        knopf.disabled = false; knopf.textContent = KNOPF_TEXT;
        if (x.status === 429) { fehler.textContent = T.zuOft; fehler.hidden = false; } else geschlossen();
      })
      .catch(function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; geschlossen(); });
  });
  // Zurück aus Stripe (Browser-Zurück): Knopf wieder freigeben
  window.addEventListener("pageshow", function () { if (fehler.hidden || !ANFRAGE) { knopf.disabled = false; } knopf.textContent = KNOPF_TEXT; });
})();
