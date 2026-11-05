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
  var wunsch = new URLSearchParams(window.location.search).get("paket");
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
      body: JSON.stringify({ paket: gewaehlt(), sprache: SPRACHE, agb: agb, sofort: art() === "ware" ? false : sofort }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, d: d }; }); })
      .then(function (x) {
        if (x.status === 200 && x.d.url && /^https:\/\/checkout\.stripe\.com\//.test(x.d.url)) { window.location.href = x.d.url; return; }
        knopf.disabled = false; knopf.textContent = KNOPF_TEXT;
        if (x.status === 429) { fehler.textContent = T.zuOft; fehler.hidden = false; } else geschlossen();
      })
      .catch(function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; geschlossen(); });
  });
  // Zurück aus Stripe (Browser-Zurück): Knopf wieder freigeben
  window.addEventListener("pageshow", function () { knopf.disabled = false; knopf.textContent = KNOPF_TEXT; });
})();
