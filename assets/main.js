/* Piercing Akademie – Anfrageformular.
   Auf dem Server (Cloudflare) geht die Anfrage direkt an /api/anfrage und von dort per E-Mail an die Akademie.
   Ist der Server nicht erreichbar (zum Beispiel in der Vorschau), öffnet sich wie bisher das E-Mail-Programm
   mit einer fertigen Nachricht (mailto). Ohne JavaScript greift der native Fallback (action="mailto:…" im HTML). */
(function () {
  "use strict";

  var EMAIL = "diepiercingakademie@gmail.com";
  // Texte je Seitensprache (de, en, es); die Seiten selbst baut werkzeuge/sprachen/bauen.py
  var SPRACHE = (document.documentElement.lang || "de").slice(0, 2);
  var TEXTE = {
    de: { paket: "Bitte wähle ein Paket oder „Noch unsicher“.", name: "Bitte gib deinen Namen an.", email: "Bitte gib eine gültige E-Mail-Adresse an.", telefon: "Bitte gib eine gültige Telefonnummer an oder lass das Feld leer.",
      volljaehrig: "Die Teilnahme ist erst ab 18 Jahren möglich. Bitte bestätige dein Alter.", pruefen: "Bitte prüfe deine Eingabe.", hallo: "Hallo Piercing Akademie,",
      interesse: "ich interessiere mich für: ", nameZ: "Name: ", emailZ: "E-Mail: ", telZ: "Telefon: ", erfahrungZ: "Studio: ", zeitraumZ: "Wunschzeitraum Praxistag: ", modelleZ: "Eigene Modelle: ", quelleZ: "Erfahren über: ",
      voll: "Volljährig: ja", nachricht: "Nachricht:", gruss: "Viele Grüße", betreff: "Anfrage Piercing Akademie – ", kopiert: "Text kopiert", zuOft: "Zu viele Anfragen in kurzer Zeit. Bitte versuch es später noch einmal oder ruf uns an." },
    en: { paket: "Please choose a package or “Not sure yet”.", name: "Please enter your name.", email: "Please enter a valid email address.", telefon: "Please enter a valid phone number or leave the field empty.",
      volljaehrig: "You must be 18 or older to take part. Please confirm your age.", pruefen: "Please check your entry.", hallo: "Hello Piercing Akademie,",
      interesse: "I am interested in: ", nameZ: "Name: ", emailZ: "Email: ", telZ: "Phone: ", erfahrungZ: "Studio: ", zeitraumZ: "Preferred practice day: ", modelleZ: "Own models: ", quelleZ: "Heard about us via: ",
      voll: "Aged 18 or over: yes", nachricht: "Message:", gruss: "Best regards", betreff: "Enquiry Piercing Akademie – ", kopiert: "Text copied", zuOft: "Too many enquiries in a short time. Please try again later or call us." },
    es: { paket: "Elige un paquete o «Aún no lo sé».", name: "Indica tu nombre.", email: "Indica un correo electrónico válido.", telefon: "Indica un número de teléfono válido o deja el campo vacío.",
      volljaehrig: "La participación solo es posible a partir de 18 años. Confirma tu edad.", pruefen: "Revisa lo que has escrito.", hallo: "Hola, Piercing Akademie:",
      interesse: "Me interesa: ", nameZ: "Nombre: ", emailZ: "Correo: ", telZ: "Teléfono: ", erfahrungZ: "Estudio: ", zeitraumZ: "Fechas para el día de práctica: ", modelleZ: "Modelos propios: ", quelleZ: "Nos conoció por: ",
      voll: "Mayor de edad: sí", nachricht: "Mensaje:", gruss: "Un saludo", betreff: "Consulta Piercing Akademie – ", kopiert: "Texto copiado", zuOft: "Demasiadas consultas en poco tiempo. Inténtalo más tarde o llámanos." }
  };
  var T = TEXTE[SPRACHE] || TEXTE.de;
  var form = document.getElementById("anfrage");
  if (!form) return;

  var f = form.elements;
  var paket = f.paket;
  var status = document.getElementById("anfrage-status");
  var ok = document.getElementById("anfrage-ok");
  var copyBtn = document.getElementById("anfrage-kopieren");
  var senden = form.querySelector('button[type="submit"]');
  var lastText = "";

  var messages = { paket: T.paket, name: T.name, email: T.email, telefon: T.telefon, volljaehrig: T.volljaehrig };
  var PFLICHT = ["paket", "name", "email", "telefon", "volljaehrig"];

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
    var gut = field.checkValidity() && (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim()));
    setError(field, gut ? "" : messages[field.name] || T.pruefen);
    return gut;
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

  // Angezeigter Text einer Auswahl, leer bei „Bitte wählen“
  function auswahl(select) { return select && select.value ? select.options[select.selectedIndex].text : ""; }

  function daten() {
    return {
      paket: paket.value, paketText: auswahl(paket), name: f.name.value.trim(), email: f.email.value.trim(), telefon: f.telefon.value.trim(),
      erfahrung: auswahl(f.erfahrung), zeitraum: f.zeitraum.value.trim(), modelle: auswahl(f.modelle), quelle: auswahl(f.quelle),
      nachricht: f.nachricht.value.trim(), website: f.website ? f.website.value : "", sprache: SPRACHE
    };
  }

  function buildText() {
    var d = daten();
    var lines = [T.hallo, "", T.interesse + d.paketText, "", T.nameZ + d.name, T.emailZ + d.email, T.telZ + (d.telefon || "–")];
    if (d.erfahrung) lines.push(T.erfahrungZ + d.erfahrung);
    if (d.zeitraum) lines.push(T.zeitraumZ + d.zeitraum);
    if (d.modelle) lines.push(T.modelleZ + d.modelle);
    if (d.quelle) lines.push(T.quelleZ + d.quelle);
    lines.push(T.voll);
    if (d.nachricht) lines.push("", T.nachricht, d.nachricht);
    lines.push("", T.gruss, d.name);
    return lines.join("\n");
  }

  // Ersatzweg: E-Mail-Programm öffnen. Bewusst keine Erfolgsmeldung, denn verschickt ist die Nachricht erst im Mailprogramm.
  function perMail() {
    lastText = buildText();
    window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(T.betreff + auswahl(paket)) + "&body=" + encodeURIComponent(lastText);
    status.hidden = false;
    status.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;
    PFLICHT.forEach(function (name) {
      var field = f[name];
      if (!check(field) && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    ok.hidden = true; status.hidden = true;
    if (window.location.protocol === "file:") { perMail(); return; }
    senden.disabled = true;
    fetch("/api/anfrage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(daten()) })
      .then(function (r) {
        if (r.ok) {
          form.reset();
          ok.hidden = false; ok.focus();
        } else if (r.status === 429) {
          setError(f.name, T.zuOft); f.name.focus();
        } else {
          perMail();
        }
      })
      .catch(perMail)
      .then(function () { senden.disabled = false; });
  });

  copyBtn.addEventListener("click", function () {
    var text = lastText || buildText();
    function done() { copyBtn.textContent = T.kopiert; }
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
