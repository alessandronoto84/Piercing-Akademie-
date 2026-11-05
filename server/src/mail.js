/* E-Mails der Piercing Akademie (Versand über Resend). Im Entwicklungsmodus (DEV=1) wird nur protokolliert. */

const esc = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const PAKETE = {
  de: { basis: "Basis", praxis: "Praxis", komplett: "Komplett" },
  en: { basis: "Basic", praxis: "Practice", komplett: "Complete" },
  es: { basis: "Básico", praxis: "Práctica", komplett: "Completo" }
};

// Anmeldecode in der Kauf-E-Mail: großer Code und Knopf, der die Anmeldeseite mit eingetragenem Code öffnet
function anmeldeLink(env, email, s, code) {
  const q = new URLSearchParams({ email, sprache: s });
  if (code) q.set("code", code);
  return env.DOMAIN + "/login.html?" + q.toString();
}
function codeBlock(code) {
  return code ? { html: '<p style="font-size:30px;letter-spacing:6px;font-weight:bold;margin:8px 0">' + code + "</p>", text: code } : "";
}
const SO_ANMELDEN = {
  de: (tage) => "So meldest du dich an: Klick auf den Knopf, dein Code ist dann schon eingetragen. Oder geh auf der Website auf „Teilnehmer-Login“ und gib deine E-Mail-Adresse und diesen Code ein. Der Code gilt " + tage + " Tage und nur für die erste Anmeldung. Später, zum Beispiel auf einem neuen Gerät, schicken wir dir auf der Anmeldeseite jederzeit einen neuen Code.",
  en: (tage) => "How to log in: click the button and your code is filled in for you. Or go to “Student login” on the website and enter your email address and this code. The code is valid for " + tage + " days and only for your first login. Later, for example on a new device, the login page sends you a new code at any time.",
  es: (tage) => "Cómo entrar: haz clic en el botón y tu código ya estará introducido. O ve a «Acceso alumnos» en la web y escribe tu correo electrónico y este código. El código vale " + tage + " días y solo para el primer acceso. Más adelante, por ejemplo en un dispositivo nuevo, la página de acceso te envía un código nuevo cuando quieras."
};
const DEIN_CODE = { de: "Dein Anmeldecode:", en: "Your login code:", es: "Tu código de acceso:" };

// Wunschtermine lesbar machen, z. B. „Samstag, 14.11.2026“
const LOCALE = { de: "de-DE", en: "en-GB", es: "es-ES" };
export function tagText(iso, s) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString(LOCALE[s] || "de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
const ZEIT = { de: { vormittags: "vormittags", nachmittags: "nachmittags", abends: "abends" }, en: { vormittags: "in the morning", nachmittags: "in the afternoon", abends: "in the evening" }, es: { vormittags: "por la mañana", nachmittags: "por la tarde", abends: "por la noche" } };
function wunschBlock(w, s) {
  if (!w) return "";
  const T = {
    de: ["Deine Wunschtermine", "Praxistag", "Praxistage", "Ersttelefonat", "Telefon", "Das sind deine Wünsche. Wir rufen dich zum Ersttelefonat an und bestätigen dann den Termin für deinen Praxistag."],
    en: ["Your preferred dates", "Practice day", "Practice days", "First phone call", "Phone", "These are your preferences. We will call you for the first phone call and then confirm the date of your practice day."],
    es: ["Tus fechas preferidas", "Día de práctica", "Días de práctica", "Primera llamada", "Teléfono", "Son tus preferencias. Te llamaremos para la primera llamada y después confirmaremos la fecha de tu día de práctica."]
  }[s];
  const praxis = w.praxis.map((t) => tagText(t, s));
  const zeilen = [(praxis.length > 1 ? T[2] : T[1]) + ": " + praxis.join(" · "), T[3] + ": " + tagText(w.telefonTermin, s) + ", " + ZEIT[s][w.telefonZeit] + " (" + T[4] + " " + w.telefon + ")"];
  return { html: "<p><strong>" + esc(T[0]) + "</strong><br>" + zeilen.map(esc).join("<br>") + "</p><p>" + esc(T[5]) + "</p>", text: T[0] + "\n" + zeilen.join("\n") + "\n\n" + T[5] };
}

// An die Akademie: neue Buchung mit Praxistag, bitte anrufen
export function mailTermineAkademie({ email, name, paket, sprache, wunsch }) {
  const zeilen = [
    "Paket: " + (PAKETE.de[paket] || paket),
    "Name: " + (name || "–"),
    "Telefon: " + wunsch.telefon,
    "E-Mail: " + email,
    "Sprache: " + ({ de: "Deutsch", en: "Englisch", es: "Spanisch" }[sprache] || sprache),
    "Wunsch Ersttelefonat: " + tagText(wunsch.telefonTermin, "de") + ", " + ZEIT.de[wunsch.telefonZeit],
    "Wunsch Praxistag" + (wunsch.praxis.length > 1 ? "e" : "") + ": " + wunsch.praxis.map((t) => tagText(t, "de")).join(" · ")
  ];
  const r = rahmen("Neue Buchung: bitte anrufen", [
    "Neue Buchung mit Praxistag, bezahlt über Stripe. Bitte zum Ersttelefonat anrufen und den Praxistag bestätigen.",
    { html: "<p>" + zeilen.map(esc).join("<br>") + '</p><p><a href="tel:' + esc(wunsch.telefon.replace(/[^0-9+]/g, "")) + '">Jetzt anrufen: ' + esc(wunsch.telefon) + "</a></p>", text: zeilen.join("\n") },
    "Antworten an diese E-Mail gehen direkt an " + (name || email) + "."
  ]);
  return { betreff: "Neue Buchung " + (PAKETE.de[paket] || paket) + ": " + (name || email) + ", Wunsch-Praxistag " + wunsch.praxis.map((t) => t.split("-").reverse().join(".")).join(" + "), ...r };
}

function rahmen(titel, alle) {
  const absaetze = alle.filter((a) => a !== "" && a != null);
  const html = '<!doctype html><html><body style="font-family:Arial,sans-serif;color:#16161a;line-height:1.5;max-width:560px;margin:auto;padding:24px">' +
    '<p style="font-weight:bold;font-size:18px">Piercing Akademie</p><h1 style="font-size:20px">' + esc(titel) + "</h1>" +
    absaetze.map((a) => (a.html ? a.html : "<p>" + esc(a) + "</p>")).join("") +
    '<p style="color:#666;font-size:12px;margin-top:32px">740 Piercing · Alessandro Noto · Burgstraße 12 · 49808 Lingen (Ems) · diepiercingakademie@gmail.com</p></body></html>';
  const text = titel + "\n\n" + absaetze.map((a) => (a.text != null ? a.text : a)).join("\n\n") + "\n\n740 Piercing · Alessandro Noto · Burgstraße 12 · 49808 Lingen (Ems)";
  return { html, text };
}

export function mailCode(code, sprache, minuten, link) {
  const T = {
    de: ["Dein Anmeldecode", "Dein Code für die Fahrschule der Piercing Akademie:", "Jetzt anmelden", "Oder gib den Code auf der Anmeldeseite ein. Er gilt " + minuten + " Minuten. Gib ihn nicht weiter: Der Zugang ist persönlich.", "Du hast keinen Code angefordert? Dann kannst du diese E-Mail ignorieren."],
    en: ["Your login code", "Your code for the Piercing Akademie online course:", "Log in now", "Or enter the code on the login page. It is valid for " + minuten + " minutes. Do not share it: your access is personal.", "Did not request a code? Then you can ignore this email."],
    es: ["Tu código de acceso", "Tu código para el curso online de la Piercing Akademie:", "Entrar ahora", "O escribe el código en la página de acceso. Es válido durante " + minuten + " minutos. No lo compartas: el acceso es personal.", "¿No has pedido ningún código? Entonces puedes ignorar este correo."]
  };
  const t = T[sprache] || T.de;
  const knopf = link ? { html: '<p><a href="' + esc(link) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">' + t[2] + "</a></p>", text: t[2] + ": " + link } : "";
  const r = rahmen(t[0], [t[1], { html: '<p style="font-size:30px;letter-spacing:6px;font-weight:bold">' + code + "</p>", text: code }, knopf, t[3], t[4]]);
  return { betreff: t[0] + ": " + code, ...r };
}

export function mailWillkommen({ env, email, name, paket, sprache, betrag, waehrung, gekauft, zustimmung, buchLink, code, codeTage, wunsch }) {
  const s = PAKETE[sprache] ? sprache : "de";
  const pfad = s === "de" ? "" : s + "/";
  const login = anmeldeLink(env, email, s, code);
  const agb = env.DOMAIN + "/" + pfad + "agb.html";
  const preis = (betrag / 100).toLocaleString(s === "en" ? "en-US" : s === "es" ? "es-ES" : "de-DE", { style: "currency", currency: (waehrung || "eur").toUpperCase() });
  const datum = new Date(gekauft).toLocaleDateString(s === "en" ? "en-US" : s === "es" ? "es-ES" : "de-DE");
  const p = PAKETE[s][paket] || paket;
  const mitPraxis = paket !== "basis";
  const mitSet = paket === "komplett"; // Übungsset für zu Hause wird verschickt
  const T = {
    de: {
      betreff: "Deine Buchung bei der Piercing Akademie – Zugang zum Online-Kurs",
      titel: "Willkommen in der Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Vielen Dank für deine Buchung des Pakets " + p + " zum Preis von " + preis + " am " + datum + ". Diese E-Mail ist deine Vertragsbestätigung.",
        code ? DEIN_CODE[s] : "", codeBlock(code),
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Zur Fahrschule anmelden</a></p>', text: "Zur Fahrschule anmelden: " + login },
        (code ? SO_ANMELDEN.de(codeTage || 7) : "So meldest du dich an: Gib deine E-Mail-Adresse ein, wir schicken dir einen Code.") + " Dein Zugang ist persönlich, gilt 12 Monate und kann gleichzeitig auf höchstens zwei Geräten genutzt werden.",
        buchLink ? "Das Kursbuch ist in deinem Paket enthalten: Du liest es online in der Fahrschule unter „Kursbuch“, mit Suche und eigenen Notizen." : "",
        "Deine Zustimmung im Bestellvorgang: Du hast ausdrücklich verlangt, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung des Online-Kurses beginnen, und bestätigt, dass du dadurch dein Widerrufsrecht für den Online-Kurs verlierst. Es erlischt mit der Freischaltung deines Zugangs, also mit deiner ersten Anmeldung (§ 356 Abs. 5 BGB)." + (zustimmung ? " (Deine Angabe: „" + zustimmung + "“)" : ""),
        wunschBlock(wunsch, s),
        mitPraxis ? "Für Praxistage und Coaching gilt die Widerrufsbelehrung in unseren AGB. Wir melden uns, um den Termin deines Praxistags zu vereinbaren." : "",
        mitSet ? "Dein Übungsset für zu Hause schicken wir an die Lieferadresse, die du bei der Bezahlung angegeben hast. Für das Übungsset gilt das Widerrufsrecht von 14 Tagen ab Erhalt; ausgenommen sind steril verpackte Teile (z. B. Kanülen), deren Versiegelung du nach der Lieferung entfernt hast." : "",
        { html: '<p>Unsere AGB mit Widerrufsbelehrung: <a href="' + esc(agb) + '">' + esc(agb) + "</a></p>", text: "Unsere AGB mit Widerrufsbelehrung: " + agb }]
    },
    en: {
      betreff: "Your booking with the Piercing Akademie – access to the online course",
      titel: "Welcome to the Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Thank you for booking the " + p + " package for " + preis + " on " + datum + ". This email is your contract confirmation.",
        code ? DEIN_CODE[s] : "", codeBlock(code),
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Log in to the course</a></p>', text: "Log in to the course: " + login },
        (code ? SO_ANMELDEN.en(codeTage || 7) : "How to log in: enter your email address and we will send you a code.") + " Your access is personal, valid for 12 months and can be used on at most two devices at the same time.",
        buchLink ? "The course book is included in your package: you read it online in the course under “Course book”, translated into English with the German original pages, search and your own notes." : "",
        "Your consent during checkout: you expressly requested that we begin providing the online course before the end of the withdrawal period and acknowledged that you thereby lose your right of withdrawal for the online course. It expires when your access is activated, i.e. with your first login (Section 356 (5) German Civil Code)." + (zustimmung ? " (Your selection: “" + zustimmung + "”)" : ""),
        wunschBlock(wunsch, s),
        mitPraxis ? "The cancellation policy in our terms applies to practice days and coaching. We will contact you to arrange the date of your practice day." : "",
        mitSet ? "We will ship your practice set for home to the delivery address you entered at checkout. For the practice set, the 14-day right of withdrawal runs from receipt; it does not apply to sterile-packed items (e.g. cannulas) whose seal you have removed after delivery." : "",
        { html: '<p>Our terms and cancellation policy: <a href="' + esc(agb) + '">' + esc(agb) + "</a> (the German version is legally binding)</p>", text: "Our terms and cancellation policy: " + agb + " (the German version is legally binding)" }]
    },
    es: {
      betreff: "Tu reserva en la Piercing Akademie – acceso al curso online",
      titel: "¡Bienvenido/a a la Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Gracias por reservar el paquete " + p + " por " + preis + " el " + datum + ". Este correo es tu confirmación del contrato.",
        code ? DEIN_CODE[s] : "", codeBlock(code),
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Entrar al curso</a></p>', text: "Entrar al curso: " + login },
        (code ? SO_ANMELDEN.es(codeTage || 7) : "Cómo entrar: escribe tu correo electrónico y te enviamos un código.") + " Tu acceso es personal, vale 12 meses y puede usarse como máximo en dos dispositivos a la vez.",
        buchLink ? "El libro del curso está incluido en tu paquete: lo lees online en el curso, en «Libro del curso», traducido al español, con las páginas originales en alemán, búsqueda y notas propias." : "",
        "Tu consentimiento durante la compra: solicitaste expresamente que empezáramos a prestar el curso online antes de que finalice el plazo de desistimiento y reconociste que con ello pierdes tu derecho de desistimiento respecto del curso online. Se extingue al activarse tu acceso, es decir, con tu primer inicio de sesión (art. 356, apdo. 5, del Código Civil alemán)." + (zustimmung ? " (Tu selección: «" + zustimmung + "»)" : ""),
        wunschBlock(wunsch, s),
        mitPraxis ? "Para los días de práctica y la mentoría se aplica la información sobre el desistimiento de nuestras condiciones. Te contactaremos para acordar la fecha de tu día de práctica." : "",
        mitSet ? "Te enviaremos tu set de práctica para casa a la dirección de entrega que indicaste al pagar. Para el set de práctica, el plazo de desistimiento de 14 días cuenta desde la recepción; se exceptúan los artículos en envase estéril (p. ej. cánulas) cuyo precinto hayas retirado tras la entrega." : "",
        { html: '<p>Nuestras condiciones e información sobre el desistimiento: <a href="' + esc(agb) + '">' + esc(agb) + "</a> (la versión alemana es la vinculante)</p>", text: "Nuestras condiciones e información sobre el desistimiento: " + agb + " (la versión alemana es la vinculante)" }]
    }
  }[s];
  const r = rahmen(T.titel, T.a.filter(Boolean));
  return { betreff: T.betreff, ...r };
}

export function mailVerdacht(email, anzahl) {
  const r = rahmen("Hinweis: möglicherweise geteilter Zugang", [
    "Der Zugang " + email + " wurde in den letzten 30 Tagen von " + anzahl + " verschiedenen Geräten bzw. Ländern genutzt.",
    "Das kann harmlos sein (neues Handy, Urlaub). Wenn du eine Weitergabe vermutest, schreib dem Kunden. Sperren kannst du den Zugang in der Datenbank (Spalte gesperrt = 1)."
  ]);
  return { betreff: "Piercing Akademie: Zugang " + email + " auffällig", ...r };
}

// Anfrage für Praxis/Komplett an die Akademie: Kontaktdaten und Wunschtermine, bitte anrufen
export function mailAnfrage(a) {
  const w = a.wunsch;
  const zeilen = [["Paket", PAKETE.de[a.paket] || a.paket], ["Name", a.name], ["Telefon", w.telefon], ["E-Mail", a.email],
    ["Wunsch Ersttelefonat", tagText(w.telefonTermin, "de") + ", " + ZEIT.de[w.telefonZeit]],
    ["Wunsch Praxistag" + (w.praxis.length > 1 ? "e" : ""), w.praxis.map((t) => tagText(t, "de")).join(" · ")],
    ["Sprache der Website", { de: "Deutsch", en: "Englisch", es: "Spanisch" }[a.sprache] || a.sprache], ["Volljährig", "ja (bestätigt)"]];
  const tabelle = '<table style="border-collapse:collapse">' + zeilen.map((z) => '<tr><td style="padding:4px 12px 4px 0;color:#666">' + esc(z[0]) + "</td><td style=\"padding:4px 0\"><strong>" + esc(z[1]) + "</strong></td></tr>").join("") + "</table>";
  const r = rahmen("Neue Anfrage: " + (PAKETE.de[a.paket] || a.paket) + ", bitte anrufen", [
    { html: tabelle, text: zeilen.map((z) => z[0] + ": " + z[1]).join("\n") },
    { html: '<p><a href="tel:' + esc(w.telefon.replace(/[^0-9+]/g, "")) + '">Jetzt anrufen: ' + esc(w.telefon) + "</a></p>", text: "Anrufen: " + w.telefon },
    a.nachricht ? { html: "<p><strong>Nachricht:</strong><br>" + esc(a.nachricht).replace(/\n/g, "<br>") + "</p>", text: "Nachricht:\n" + a.nachricht } : "",
    "Nach dem Telefonat: Termin bestätigen und den Zahlungslink bzw. die Rechnung schicken. Antworten an diese E-Mail gehen direkt an " + a.email + "."
  ]);
  return { betreff: "Anfrage " + (PAKETE.de[a.paket] || a.paket) + ": " + a.name + ", Wunsch-Praxistag " + w.praxis.map((t) => t.split("-").reverse().join(".")).join(" + "), ...r };
}

// Eingangsbestätigung an den Interessenten (kein Vertrag, nur Bestätigung der Wunschtermine)
export function mailAnfrageEingang(a) {
  const s = PAKETE[a.sprache] ? a.sprache : "de", w = a.wunsch;
  const T = {
    de: ["Deine Anfrage bei der Piercing Akademie", "Danke für deine Anfrage, " + a.name + "!", "Paket", "Die Buchung wird erst mit unserer Bestätigung verbindlich; bezahlt wird danach.", "Fragen? Antworte einfach auf diese E-Mail oder ruf uns an: +49 173 8072405."],
    en: ["Your enquiry at the Piercing Akademie", "Thank you for your enquiry, " + a.name + "!", "Package", "The booking only becomes binding with our confirmation; payment follows afterwards.", "Questions? Just reply to this email or call us: +49 173 8072405."],
    es: ["Tu consulta en la Piercing Akademie", "¡Gracias por tu consulta, " + a.name + "!", "Paquete", "La reserva solo es vinculante con nuestra confirmación; el pago se hace después.", "¿Preguntas? Responde a este correo o llámanos: +49 173 8072405."]
  }[s];
  const r = rahmen(T[1], [T[2] + ": " + (PAKETE[s][a.paket] || a.paket), wunschBlock(w, s), T[3], T[4]]);
  return { betreff: T[0], ...r };
}

function zeitText(iso, s) {
  return new Date(iso).toLocaleString(s === "en" ? "en-US" : s === "es" ? "es-ES" : "de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" }) + " (Europe/Berlin)";
}

export function mailWiderrufEingang(w, eingang) {
  const s = PAKETE[w.sprache] ? w.sprache : "de";
  const T = {
    de: ["Eingangsbestätigung deines Widerrufs", "Wir haben deinen Widerruf am " + zeitText(eingang, s) + " erhalten:", "Vertrag", "Gebucht am", "Name", "E-Mail", "Anmerkung", "Bei einem wirksamen Widerruf erstatten wir dir die Zahlung nach unserer Widerrufsbelehrung. Bei Fragen antworte einfach auf diese E-Mail oder schreib an diepiercingakademie@gmail.com."],
    en: ["Confirmation of receipt of your withdrawal", "We received your withdrawal on " + zeitText(eingang, s) + ":", "Contract", "Booked on", "Name", "Email", "Note", "If your withdrawal is valid, we will refund your payment in accordance with our cancellation policy. If you have any questions, email diepiercingakademie@gmail.com."],
    es: ["Confirmación de recepción de tu desistimiento", "Hemos recibido tu desistimiento el " + zeitText(eingang, s) + ":", "Contrato", "Reservado el", "Nombre", "Correo", "Nota", "Si el desistimiento es válido, te reembolsaremos el pago conforme a nuestra información sobre el desistimiento. Si tienes preguntas, escribe a diepiercingakademie@gmail.com."]
  }[s];
  const zeilen = [[T[2], w.vertrag], [T[3], w.datum || "–"], [T[4], w.name], [T[5], w.email]].concat(w.nachricht ? [[T[6], w.nachricht]] : []);
  const r = rahmen(T[0], [T[1], { html: "<ul>" + zeilen.map((z) => "<li>" + esc(z[0]) + ": <strong>" + esc(z[1]) + "</strong></li>").join("") + "</ul>", text: zeilen.map((z) => z[0] + ": " + z[1]).join("\n") }, T[7]]);
  return { betreff: T[0] + " – Piercing Akademie", ...r };
}

export function mailWiderrufAkademie(w, eingang) {
  const r = rahmen("Widerruf eingegangen: " + w.vertrag, [
    "Eingang: " + zeitText(eingang, "de") + ". Die Eingangsbestätigung ist automatisch an " + w.email + " gegangen.",
    { html: "<p>Name: <strong>" + esc(w.name) + "</strong><br>E-Mail: " + esc(w.email) + "<br>Vertrag: " + esc(w.vertrag) + "<br>Gebucht am: " + esc(w.datum || "–") + (w.nachricht ? "<br>Anmerkung: " + esc(w.nachricht) : "") + "</p>",
      text: "Name: " + w.name + "\nE-Mail: " + w.email + "\nVertrag: " + w.vertrag + "\nGebucht am: " + (w.datum || "–") + (w.nachricht ? "\nAnmerkung: " + w.nachricht : "") },
    "Bitte prüfen: Besteht das Widerrufsrecht noch (beim Online-Kurs erloschen nach der ersten Anmeldung)? Erstattung über Stripe binnen 14 Tagen; bei Bedarf den Kurszugang sperren."
  ]);
  return { betreff: "Widerruf: " + w.name + " – " + w.vertrag, ...r };
}

export async function sende(env, an, mail, antwortAn) {
  if (env.DEV === "1" || !env.RESEND_API_KEY) {
    console.log("[E-Mail an " + an + (antwortAn ? ", Antwort an " + antwortAn : "") + "] " + mail.betreff + "\n" + mail.text);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.MAIL_ABSENDER, to: [an], subject: mail.betreff, html: mail.html, text: mail.text, ...(antwortAn ? { reply_to: antwortAn } : {}) })
  });
  if (!res.ok) console.error("E-Mail fehlgeschlagen", res.status, await res.text());
}


function euro(cent, s) { return (cent / 100).toLocaleString(s === "en" ? "en-US" : s === "es" ? "es-ES" : "de-DE", { style: "currency", currency: "EUR" }); }
function agbLink(env, s) { return env.DOMAIN + "/" + (s === "de" ? "" : s + "/") + "agb.html"; }

// Versandauftrag an die Akademie: Übungsset aus dem Paket Komplett
export function mailSetAkademie({ email, name, adresse }) {
  const r = rahmen("Übungsset verschicken", [
    "Neue Buchung: Paket Komplett, bezahlt über Stripe. Bitte das Übungsset für zu Hause verschicken.",
    { html: "<p>Lieferadresse:<br><strong>" + adresse.map(esc).join("<br>") + "</strong></p><p>E-Mail: " + esc(email) + "</p>", text: "Lieferadresse:\n" + adresse.join("\n") + "\nE-Mail: " + email },
    "Antworten an diese E-Mail gehen direkt an " + (name || email) + "."
  ]);
  return { betreff: "Versand: Übungsset (Paket Komplett) für " + (name || email), ...r };
}

// Kursbuch digital: Lesezugang in der Fahrschule (24 Monate) und Bestätigung (digitaler Inhalt, § 356 Abs. 5 BGB)
export function mailBuch({ sprache, name, betrag, email, env, code, codeTage }) {
  const s = PAKETE[sprache] ? sprache : "de";
  const agb = agbLink(env, s);
  const login = anmeldeLink(env, email, s, code);
  const knopf = (t) => ({ html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">' + esc(t) + "</a></p>", text: t + ": " + login });
  const T = {
    de: ["Dein Kursbuch digital", "Danke für deinen Kauf" + (name ? ", " + name : "") + "!", "Du hast das Kursbuch „Die Piercing Akademie – Dein Weg zum Bodypiercer“ digital zum Preis von " + euro(betrag, s) + " gekauft. Diese E-Mail ist deine Vertragsbestätigung.", "Kursbuch online lesen",
      "So meldest du dich an: Gib deine E-Mail-Adresse ein, wir schicken dir einen Code. Du liest das Buch 24 Monate lang online, mit Suche und eigenen Notizen zu jeder Seite. Eine Download-Datei gibt es nicht; jede Seite trägt deine E-Mail-Adresse. Der Zugang ist persönlich und nicht übertragbar.",
      "Deine Zustimmung im Bestellvorgang: Du hast verlangt, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung beginnen, und bestätigt, dass dein Widerrufsrecht damit erlischt (§ 356 Abs. 5 BGB).", "Unsere AGB: "],
    en: ["Your digital course book", "Thank you for your purchase" + (name ? ", " + name : "") + "!", "You bought the course book “Die Piercing Akademie – Dein Weg zum Bodypiercer” (German) in digital form for " + euro(betrag, s) + ". This email is your contract confirmation.", "Read the course book online",
      "How to log in: enter your email address and we will send you a code. You can read the book online for 24 months, with search and your own notes on every page. There is no download file; every page carries your email address. Your access is personal and not transferable.",
      "Your consent during checkout: you requested that we begin providing it before the end of the withdrawal period and acknowledged that your right of withdrawal thereby expires (Section 356 (5) German Civil Code).", "Our terms (the German version is legally binding): "],
    es: ["Tu libro del curso digital", "¡Gracias por tu compra" + (name ? ", " + name : "") + "!", "Has comprado el libro del curso «Die Piercing Akademie – Dein Weg zum Bodypiercer» en formato digital (traducido al español, con las páginas originales en alemán) por " + euro(betrag, s) + ". Este correo es tu confirmación del contrato.", "Leer el libro online",
      "Cómo entrar: escribe tu correo electrónico y te enviamos un código. Puedes leer el libro online durante 24 meses, con búsqueda y notas propias en cada página. No hay archivo para descargar; cada página lleva tu correo electrónico. El acceso es personal e intransferible.",
      "Tu consentimiento durante la compra: solicitaste que empezáramos a facilitarlo antes de que finalice el plazo de desistimiento y reconociste que con ello se extingue tu derecho de desistimiento (art. 356, apdo. 5, del Código Civil alemán).", "Nuestras condiciones (la versión alemana es la vinculante): "]
  }[s];
  const lesen = { de: " Du liest das Buch 24 Monate lang online, mit Suche und eigenen Notizen zu jeder Seite. Eine Download-Datei gibt es nicht; jede Seite trägt deine E-Mail-Adresse. Der Zugang ist persönlich und nicht übertragbar.",
    en: " You can read the book online for 24 months, with search and your own notes on every page. There is no download file; every page carries your email address. Your access is personal and not transferable.",
    es: " Puedes leer el libro online durante 24 meses, con búsqueda y notas propias en cada página. No hay archivo para descargar; cada página lleva tu correo electrónico. El acceso es personal e intransferible." }[s];
  const r = rahmen(T[1], [T[2], code ? DEIN_CODE[s] : "", codeBlock(code), knopf(T[3]), code ? SO_ANMELDEN[s](codeTage || 7) + lesen : T[4], T[5], { html: "<p>" + esc(T[6]) + '<a href="' + esc(agb) + '">' + esc(agb) + "</a></p>", text: T[6] + agb }]);
  return { betreff: T[0] + " – Piercing Akademie", ...r };
}
