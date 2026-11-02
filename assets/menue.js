/* Piercing Akademie – Menü auf dem Handy: blendet die Navigation hinter einem Knopf ein und aus. */
(function () {
  "use strict";
  var header = document.querySelector("header"), nav = header && header.querySelector("nav");
  if (!nav) return;
  var sprache = (document.documentElement.lang || "de").slice(0, 2);
  var T = { de: ["Menü", "Menü schließen"], en: ["Menu", "Close menu"], es: ["Menú", "Cerrar menú"] }[sprache] || ["Menü", "Menü schließen"];
  if (!nav.id) nav.id = "hauptnavigation";
  var knopf = document.createElement("button");
  knopf.type = "button"; knopf.className = "menue-knopf";
  knopf.setAttribute("aria-controls", nav.id); knopf.setAttribute("aria-expanded", "false");
  knopf.innerHTML = '<span class="striche" aria-hidden="true"></span><span class="text">' + T[0] + "</span>";
  header.insertBefore(knopf, nav);
  var wurzel = document.documentElement;
  wurzel.classList.add("js-menue");
  function setzen(offen) {
    wurzel.classList.toggle("menue-offen", offen);
    knopf.setAttribute("aria-expanded", String(offen));
    knopf.setAttribute("aria-label", offen ? T[1] : T[0]);
  }
  knopf.addEventListener("click", function () { setzen(!wurzel.classList.contains("menue-offen")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setzen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && wurzel.classList.contains("menue-offen")) { setzen(false); knopf.focus(); } });
})();
