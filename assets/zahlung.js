/* Piercing Akademie – Bezahlen über Stripe (Payment Links).
   Die Links legt die Akademie im Stripe-Dashboard an (Anleitung: STRIPE-ANLEITUNG.md) und trägt sie unten ein.
   Solange ein Link leer ist, führt der Knopf der Preiskarte wie bisher zum Anfrageformular.
   Die Website selbst verarbeitet keine Zahlungsdaten: Bezahlt wird auf der Stripe-Seite. */
(function () {
  "use strict";

  var STRIPE = {
    basis: "",
    praxis: "",
    komplett: ""
  };

  var aktiv = false;
  document.querySelectorAll(".card a[data-paket]").forEach(function (knopf) {
    var paket = knopf.getAttribute("data-paket");
    var url = STRIPE[paket];
    if (!url || !/^https:\/\/(buy|checkout)\.stripe\.com\//.test(url)) return;
    aktiv = true;
    // Unter dem Kaufknopf bleibt die unverbindliche Anfrage erreichbar
    var anfrage = document.createElement("a");
    anfrage.className = "pk-frage";
    anfrage.href = "#kontakt";
    anfrage.setAttribute("data-paket", paket);
    anfrage.textContent = "Erst Fragen stellen";
    knopf.parentNode.insertBefore(anfrage, knopf.nextSibling);
    knopf.href = url;
    knopf.removeAttribute("data-paket");
    knopf.textContent = "Jetzt buchen";
  });
  var hinweis = document.getElementById("pk-zahlung");
  if (aktiv && hinweis) hinweis.hidden = false;
})();
