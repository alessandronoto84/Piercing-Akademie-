/* Piercing Akademie – elektronischer Widerruf (§ 356a BGB, „Vertrag widerrufen“).
   Zwei Schritte: Angaben eingeben, dann ausdrücklich bestätigen. Der Server (/api/widerruf) speichert den Widerruf
   als Nachweis und schickt sofort eine Eingangsbestätigung per E-Mail. Ohne Server: vorbereitete E-Mail (mailto). */
(function () {
  "use strict";
  var form = document.getElementById("widerruf-formular");
  if (!form) return;
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var T = {
    de: { fehlt: "Bitte gib Name, eine gültige E-Mail-Adresse und den Vertrag an.", erklaerung: "Hiermit widerrufe ich den von mir abgeschlossenen Vertrag:", gebucht: "gebucht am", name: "Name", email: "E-Mail",
      betreff: "Widerruf – ", zuOft: "Zu viele Versuche in kurzer Zeit. Bitte schreib uns per E-Mail an diepiercingakademie@gmail.com." },
    en: { fehlt: "Please enter your name, a valid email address and the contract.", erklaerung: "I hereby withdraw from the contract I concluded:", gebucht: "booked on", name: "Name", email: "Email",
      betreff: "Withdrawal – ", zuOft: "Too many attempts in a short time. Please email us at diepiercingakademie@gmail.com." },
    es: { fehlt: "Indica tu nombre, un correo electrónico válido y el contrato.", erklaerung: "Por la presente desisto del contrato que celebré:", gebucht: "reservado el", name: "Nombre", email: "Correo",
      betreff: "Desistimiento – ", zuOft: "Demasiados intentos en poco tiempo. Escríbenos a diepiercingakademie@gmail.com." }
  }[SPRACHE] || null;
  var t = T || { fehlt: "", erklaerung: "", gebucht: "", name: "", email: "", betreff: "Widerruf – ", zuOft: "" };
  var f = form.elements;
  var s1 = document.getElementById("w-schritt1"), s2 = document.getElementById("w-schritt2");
  var fehler = document.getElementById("w-fehler"), zus = document.getElementById("w-zusammenfassung");
  var ok = document.getElementById("w-ok"), perMailHinweis = document.getElementById("w-mail");

  function daten() {
    return { name: f.name.value.trim(), email: f.email.value.trim(), vertrag: f.vertrag.value, vertragText: f.vertrag.value ? f.vertrag.options[f.vertrag.selectedIndex].text : "",
      datum: f.datum.value, nachricht: f.nachricht.value.trim(), website: f.website.value, sprache: SPRACHE };
  }
  function text(d) {
    return t.erklaerung + " " + d.vertragText + (d.datum ? " (" + t.gebucht + " " + d.datum + ")" : "") + ".\n" + t.name + ": " + d.name + "\n" + t.email + ": " + d.email + (d.nachricht ? "\n\n" + d.nachricht : "");
  }
  document.getElementById("w-weiter").addEventListener("click", function () {
    var d = daten();
    if (!d.name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email) || !d.vertrag) { fehler.textContent = t.fehlt; fehler.hidden = false; return; }
    fehler.hidden = true;
    zus.textContent = text(d);
    zus.style.whiteSpace = "pre-line";
    s1.hidden = true; s2.hidden = false;
    document.getElementById("w-senden").focus();
  });
  document.getElementById("w-zurueck").addEventListener("click", function () { s2.hidden = true; s1.hidden = false; });

  function perMail(d) {
    window.location.href = "mailto:diepiercingakademie@gmail.com?subject=" + encodeURIComponent(t.betreff + d.vertragText) + "&body=" + encodeURIComponent(text(d));
    s2.hidden = true; perMailHinweis.hidden = false; perMailHinweis.focus();
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = daten();
    if (window.location.protocol === "file:") { perMail(d); return; }
    var knopf = document.getElementById("w-senden");
    knopf.disabled = true;
    fetch("/api/widerruf", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
      .then(function (r) {
        if (r.ok) { s2.hidden = true; ok.hidden = false; ok.focus(); }
        else if (r.status === 429) { s2.hidden = true; s1.hidden = false; fehler.textContent = t.zuOft; fehler.hidden = false; }
        else perMail(d);
      })
      .catch(function () { perMail(d); })
      .then(function () { knopf.disabled = false; });
  });
})();
