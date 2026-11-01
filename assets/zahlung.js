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

  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var T = { de: ["Jetzt buchen", "Erst Fragen stellen"], en: ["Book now", "Ask a question first"], es: ["Reservar ahora", "Primero preguntar"] }[SPRACHE] || ["Jetzt buchen", "Erst Fragen stellen"];
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
    anfrage.textContent = T[1];
    knopf.parentNode.insertBefore(anfrage, knopf.nextSibling);
    knopf.href = url + (url.indexOf("?") < 0 ? "?" : "&") + "client_reference_id=" + SPRACHE; // Sprache für die Bestätigungs-E-Mail
    knopf.removeAttribute("data-paket");
    knopf.textContent = T[0];
  });
  var hinweis = document.getElementById("pk-zahlung");
  if (aktiv && hinweis) hinweis.hidden = false;
})();
