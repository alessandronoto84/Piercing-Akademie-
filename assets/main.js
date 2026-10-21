/* Piercing Akademie – Anfrageformular.
   Die Website hat kein eigenes Backend. Das Formular verschickt nichts selbst:
   Es erstellt eine E-Mail im Mailprogramm der Besucherin bzw. des Besuchers (mailto).
   Ohne JavaScript greift der native Fallback (action="mailto:…" im HTML). */
(function () {
  "use strict";

  var EMAIL = "diepiercingakademie@gmail.com";
  var form = document.getElementById("anfrage");
  if (!form) return;

  var paket = form.elements.paket;
  var status = document.getElementById("anfrage-status");
  var copyBtn = document.getElementById("anfrage-kopieren");
  var lastText = "";

  var messages = {
    paket: "Bitte wähle ein Paket oder „Noch unsicher“.",
    name: "Bitte gib deinen Namen an.",
    telefon: "Bitte gib eine gültige Telefonnummer an oder lass das Feld leer.",
    volljaehrig: "Die Teilnahme ist erst ab 18 Jahren möglich. Bitte bestätige dein Alter."
  };

  // Paket vorauswählen: per Klick auf eine Preiskarte oder per Link mit ?paket=basis|praxis|komplett
  function selectPaket(value) {
    if (!value) return;
    for (var i = 0; i < paket.options.length; i++) {
      if (paket.options[i].value === value) {
        paket.value = value;
        setError(paket, "");
        return;
      }
    }
  }
  document.querySelectorAll("[data-paket]").forEach(function (link) {
    link.addEventListener("click", function () {
      selectPaket(link.getAttribute("data-paket"));
    });
  });
  try {
    selectPaket(new URLSearchParams(window.location.search).get("paket"));
  } catch (e) { /* ältere Browser: keine Vorauswahl */ }

  // Fehlermeldungen
  function setError(field, text) {
    var err = document.getElementById(field.id + "-err");
    if (!err) return;
    err.textContent = text;
    err.hidden = !text;
    if (text) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  }
  function check(field) {
    var ok = field.checkValidity();
    setError(field, ok ? "" : messages[field.name] || "Bitte prüfe deine Eingabe.");
    return ok;
  }

  // Neue Fehlermeldungen erst beim Absenden zeigen (sonst verschiebt sich das Layout beim Verlassen eines Feldes
  // und ein Klick auf das nächste Feld geht ins Leere). Bereits markierte Felder werden während der Korrektur neu geprüft.
  form.setAttribute("novalidate", "");
  Array.prototype.forEach.call(form.elements, function (field) {
    if (!messages[field.name]) return;
    field.addEventListener(field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input", function () {
      if (field.getAttribute("aria-invalid") === "true") check(field);
    });
  });

  function buildText() {
    var f = form.elements;
    var lines = [
      "Hallo Piercing Akademie,",
      "",
      "ich interessiere mich für: " + paket.options[paket.selectedIndex].text,
      "",
      "Name: " + f.name.value.trim(),
      "Telefon: " + (f.telefon.value.trim() || "–"),
      "Volljährig: ja"
    ];
    if (f.nachricht.value.trim()) lines.push("", "Nachricht:", f.nachricht.value.trim());
    lines.push("", "Viele Grüße", f.name.value.trim());
    return lines.join("\n");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;
    ["paket", "name", "telefon", "volljaehrig"].forEach(function (name) {
      var field = form.elements[name];
      if (!check(field) && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    lastText = buildText();
    var subject = "Anfrage Piercing Akademie – " + paket.options[paket.selectedIndex].text;
    window.location.href = "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(lastText);

    // Bewusst keine Erfolgsmeldung: Ob die E-Mail wirklich verschickt wird, entscheidet sich erst im Mailprogramm.
    status.hidden = false;
    status.focus();
  });

  copyBtn.addEventListener("click", function () {
    var text = lastText || buildText();
    function done() { copyBtn.textContent = "Text kopiert"; }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { if (document.execCommand("copy")) done(); } catch (e) { /* Kopieren nicht möglich */ }
      document.body.removeChild(area);
    }
  });
})();
