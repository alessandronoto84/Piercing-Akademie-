/* Piercing Akademie – Buchen über die eigene Bestellseite (bestellen.html) und Stripe Checkout.
   Die Preiskarten führen erst dann zur Bestellseite, wenn der Server meldet, dass Stripe eingerichtet ist
   (GET /api/bestellen → {aktiv:true}). Bis dahin bleibt der Knopf beim Anfrageformular.
   Die Website selbst verarbeitet keine Zahlungsdaten: Bezahlt wird auf der Stripe-Seite. */
(function () {
  "use strict";
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var T = { de: ["Jetzt buchen", "Erst Fragen stellen"], en: ["Book now", "Ask a question first"], es: ["Reservar ahora", "Primero preguntar"] }[SPRACHE] || ["Jetzt buchen", "Erst Fragen stellen"];

  function umstellen() {
    var aktiv = false;
    document.querySelectorAll(".card a[data-paket]").forEach(function (knopf) {
      var paket = knopf.getAttribute("data-paket");
      aktiv = true;
      // Unter dem Kaufknopf bleibt die unverbindliche Anfrage erreichbar
      var anfrage = document.createElement("a");
      anfrage.className = "pk-frage";
      anfrage.href = "#kontakt";
      anfrage.setAttribute("data-paket", paket);
      anfrage.textContent = T[1];
      knopf.parentNode.insertBefore(anfrage, knopf.nextSibling);
      knopf.removeAttribute("data-paket");
      knopf.textContent = T[0];
      if (window.PA_VORSCHAU) {
        // Vorschau in einer Datei: Bestellseite steht als Abschnitt #bestellen auf derselben Seite
        knopf.href = "#bestellen";
        knopf.addEventListener("click", function () {
          var r = document.querySelector('#bestell-formular input[name=paket][value="' + paket + '"]');
          if (r) { r.checked = true; r.dispatchEvent(new Event("change", { bubbles: true })); }
        });
      } else {
        knopf.href = "bestellen.html?paket=" + paket;
      }
    });
    var hinweis = document.getElementById("pk-zahlung");
    if (aktiv && hinweis) hinweis.hidden = false;
  }

  if (window.PA_VORSCHAU) { umstellen(); return; }
  if (!/^https?:$/.test(window.location.protocol) || !window.fetch) return;
  fetch("/api/bestellen", { headers: { Accept: "application/json" } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) { if (d && d.aktiv) umstellen(); })
    .catch(function () {});
})();
