/* E-Mails der Piercing Akademie (Versand über Resend). Im Entwicklungsmodus (DEV=1) wird nur protokolliert. */

const esc = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const PAKETE = {
  de: { basis: "Basis", praxis: "Praxis", komplett: "Komplett" },
  en: { basis: "Basic", praxis: "Practice", komplett: "Complete" },
  es: { basis: "Básico", praxis: "Práctica", komplett: "Completo" }
};

function rahmen(titel, absaetze) {
  const html = '<!doctype html><html><body style="font-family:Arial,sans-serif;color:#16161a;line-height:1.5;max-width:560px;margin:auto;padding:24px">' +
    '<p style="font-weight:bold;font-size:18px">Piercing Akademie</p><h1 style="font-size:20px">' + esc(titel) + "</h1>" +
    absaetze.map((a) => (a.html ? a.html : "<p>" + esc(a) + "</p>")).join("") +
    '<p style="color:#666;font-size:12px;margin-top:32px">740 Piercing · Alessandro Noto · Burgstraße 12 · 49808 Lingen (Ems) · diepiercingakademie@gmail.com</p></body></html>';
  const text = titel + "\n\n" + absaetze.map((a) => (a.text != null ? a.text : a)).join("\n\n") + "\n\n740 Piercing · Alessandro Noto · Burgstraße 12 · 49808 Lingen (Ems)";
  return { html, text };
}

export function mailCode(code, sprache, minuten) {
  const T = {
    de: ["Dein Anmeldecode", "Dein Code für die Fahrschule der Piercing Akademie:", "Er gilt " + minuten + " Minuten. Gib ihn nicht weiter: Der Zugang ist persönlich.", "Du hast keinen Code angefordert? Dann kannst du diese E-Mail ignorieren."],
    en: ["Your login code", "Your code for the Piercing Akademie online course:", "It is valid for " + minuten + " minutes. Do not share it: your access is personal.", "Did not request a code? Then you can ignore this email."],
    es: ["Tu código de acceso", "Tu código para el curso online de la Piercing Akademie:", "Es válido durante " + minuten + " minutos. No lo compartas: el acceso es personal.", "¿No has pedido ningún código? Entonces puedes ignorar este correo."]
  };
  const t = T[sprache] || T.de;
  const r = rahmen(t[0], [t[1], { html: '<p style="font-size:30px;letter-spacing:6px;font-weight:bold">' + code + "</p>", text: code }, t[2], t[3]]);
  return { betreff: t[0] + ": " + code, ...r };
}

export function mailWillkommen({ env, email, name, paket, sprache, betrag, waehrung, gekauft, zustimmung, buchLink }) {
  const s = PAKETE[sprache] ? sprache : "de";
  const pfad = s === "de" ? "" : s + "/";
  const login = env.DOMAIN + "/login.html?email=" + encodeURIComponent(email) + "&sprache=" + s;
  const agb = env.DOMAIN + "/" + pfad + "agb.html";
  const preis = (betrag / 100).toLocaleString(s === "en" ? "en-GB" : s === "es" ? "es-ES" : "de-DE", { style: "currency", currency: (waehrung || "eur").toUpperCase() });
  const datum = new Date(gekauft).toLocaleDateString(s === "en" ? "en-GB" : s === "es" ? "es-ES" : "de-DE");
  const p = PAKETE[s][paket] || paket;
  const mitPraxis = paket !== "basis";
  const T = {
    de: {
      betreff: "Deine Buchung bei der Piercing Akademie – Zugang zum Online-Kurs",
      titel: "Willkommen in der Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Vielen Dank für deine Buchung des Pakets " + p + " zum Preis von " + preis + " am " + datum + ". Diese E-Mail ist deine Vertragsbestätigung.",
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Zur Fahrschule anmelden</a></p>', text: "Zur Fahrschule anmelden: " + login },
        "So meldest du dich an: Gib deine E-Mail-Adresse ein, wir schicken dir einen Code. Dein Zugang ist persönlich, gilt 12 Monate und kann gleichzeitig auf höchstens zwei Geräten genutzt werden.",
        buchLink ? "Das Kursbuch als PDF ist in deinem Paket enthalten: Nach der Anmeldung findest du es in der Fahrschule unter „Checklisten und Vorlagen“." : "",
        "Deine Zustimmung im Bestellvorgang: Du hast ausdrücklich verlangt, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung des Online-Kurses beginnen, und bestätigt, dass du dadurch dein Widerrufsrecht für den Online-Kurs verlierst. Es erlischt mit der Freischaltung deines Zugangs, also mit deiner ersten Anmeldung (§ 356 Abs. 5 BGB)." + (zustimmung ? " (Deine Angabe: „" + zustimmung + "“)" : ""),
        mitPraxis ? "Für Praxistage und Coaching gilt die Widerrufsbelehrung in unseren AGB. Wir melden uns, um den Termin deines Praxistags zu vereinbaren." : "",
        { html: '<p>Unsere AGB mit Widerrufsbelehrung: <a href="' + esc(agb) + '">' + esc(agb) + "</a></p>", text: "Unsere AGB mit Widerrufsbelehrung: " + agb }]
    },
    en: {
      betreff: "Your booking with the Piercing Akademie – access to the online course",
      titel: "Welcome to the Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Thank you for booking the " + p + " package for " + preis + " on " + datum + ". This email is your contract confirmation.",
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Log in to the course</a></p>', text: "Log in to the course: " + login },
        "How to log in: enter your email address and we will send you a code. Your access is personal, valid for 12 months and can be used on at most two devices at the same time.",
        buchLink ? "The course book as a PDF (in German) is included in your package: after logging in you will find it under “Checklists and templates”." : "",
        "Your consent during checkout: you expressly requested that we begin providing the online course before the end of the withdrawal period and acknowledged that you thereby lose your right of withdrawal for the online course. It expires when your access is activated, i.e. with your first login (Section 356 (5) German Civil Code)." + (zustimmung ? " (Your selection: “" + zustimmung + "”)" : ""),
        mitPraxis ? "The cancellation policy in our terms applies to practice days and coaching. We will contact you to arrange the date of your practice day." : "",
        { html: '<p>Our terms and cancellation policy: <a href="' + esc(agb) + '">' + esc(agb) + "</a> (the German version is legally binding)</p>", text: "Our terms and cancellation policy: " + agb + " (the German version is legally binding)" }]
    },
    es: {
      betreff: "Tu reserva en la Piercing Akademie – acceso al curso online",
      titel: "¡Bienvenido/a a la Piercing Akademie" + (name ? ", " + name : "") + "!",
      a: ["Gracias por reservar el paquete " + p + " por " + preis + " el " + datum + ". Este correo es tu confirmación del contrato.",
        { html: '<p><a href="' + esc(login) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Entrar al curso</a></p>', text: "Entrar al curso: " + login },
        "Cómo entrar: escribe tu correo electrónico y te enviamos un código. Tu acceso es personal, vale 12 meses y puede usarse como máximo en dos dispositivos a la vez.",
        buchLink ? "El libro del curso en PDF (en alemán) está incluido en tu paquete: después de entrar lo encontrarás en «Listas de control y plantillas»." : "",
        "Tu consentimiento durante la compra: solicitaste expresamente que empezáramos a prestar el curso online antes de que finalice el plazo de desistimiento y reconociste que con ello pierdes tu derecho de desistimiento respecto del curso online. Se extingue al activarse tu acceso, es decir, con tu primer inicio de sesión (art. 356, apdo. 5, del Código Civil alemán)." + (zustimmung ? " (Tu selección: «" + zustimmung + "»)" : ""),
        mitPraxis ? "Para los días de práctica y la mentoría se aplica la información sobre el desistimiento de nuestras condiciones. Te contactaremos para acordar la fecha de tu día de práctica." : "",
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

export function mailAnfrage(a) {
  const zeilen = [["Paket", a.paket], ["Name", a.name], ["E-Mail", a.email], ["Telefon", a.telefon || "–"], ["Arbeitet in einem Studio", a.erfahrung || "–"],
    ["Wunschzeitraum Praxistag", a.zeitraum || "–"], ["Eigene Modelle", a.modelle || "–"], ["Erfahren über", a.quelle || "–"], ["Sprache der Website", a.sprache], ["Volljährig", "ja (bestätigt)"]];
  const tabelle = '<table style="border-collapse:collapse">' + zeilen.map((z) => '<tr><td style="padding:4px 12px 4px 0;color:#666">' + esc(z[0]) + "</td><td style=\"padding:4px 0\"><strong>" + esc(z[1]) + "</strong></td></tr>").join("") + "</table>";
  const r = rahmen("Neue Anfrage: " + a.paket, [
    { html: tabelle, text: zeilen.map((z) => z[0] + ": " + z[1]).join("\n") },
    a.nachricht ? { html: "<p><strong>Nachricht:</strong><br>" + esc(a.nachricht).replace(/\n/g, "<br>") + "</p>", text: "Nachricht:\n" + a.nachricht } : "",
    "Antworten an diese E-Mail gehen direkt an " + a.email + "."
  ].filter(Boolean));
  return { betreff: "Anfrage Piercing Akademie – " + a.paket + " – " + a.name, ...r };
}

function zeitText(iso, s) {
  return new Date(iso).toLocaleString(s === "en" ? "en-GB" : s === "es" ? "es-ES" : "de-DE", { timeZone: "Europe/Berlin", dateStyle: "long", timeStyle: "short" }) + " (Europe/Berlin)";
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


function euro(cent, s) { return (cent / 100).toLocaleString(s === "en" ? "en-GB" : s === "es" ? "es-ES" : "de-DE", { style: "currency", currency: "EUR" }); }
function agbLink(env, s) { return env.DOMAIN + "/" + (s === "de" ? "" : s + "/") + "agb.html"; }

// Praxiskit: Vertragsbestätigung an den Kunden (Ware, Versand frei, 14 Tage Widerruf mit Ausnahme versiegelter Hygieneartikel)
export function mailKit({ sprache, name, betrag, rabatt, adresse, env }) {
  const s = PAKETE[sprache] ? sprache : "de";
  const agb = agbLink(env, s);
  const T = {
    de: ["Deine Bestellung: Praxiskit", "Danke für deine Bestellung" + (name ? ", " + name : "") + "!",
      "Du hast das Praxiskit (Übungsset mit Silikonohr) zum Preis von " + euro(betrag, s) + (rabatt ? " (Preis für Kursteilnehmer)" : "") + " bestellt, versandkostenfrei. Diese E-Mail ist deine Vertragsbestätigung.",
      "Lieferadresse:", "Wir verschicken das Kit in der Regel innerhalb von 3 bis 5 Werktagen. Die Anleitung zu allen Übungen findest du im Praxislabor der Fahrschule; ohne Kurszugang schicken wir dir die Anleitung mit.",
      "Widerrufsrecht: Du kannst den Kauf innerhalb von 14 Tagen nach Erhalt widerrufen. Ausgenommen sind sterile Teile (z. B. Kanülen), deren Versiegelung du nach der Lieferung entfernt hast. Die Kosten der Rücksendung trägst du.",
      "Unsere AGB mit Widerrufsbelehrung: "],
    en: ["Your order: practice kit", "Thank you for your order" + (name ? ", " + name : "") + "!",
      "You ordered the practice kit (training set with silicone ear) for " + euro(betrag, s) + (rabatt ? " (course participant price)" : "") + ", free shipping. This email is your contract confirmation.",
      "Delivery address:", "We usually ship the kit within 3 to 5 working days. The instructions for all exercises are in the practice lab of the online course; without course access we include the instructions in the parcel.",
      "Right of withdrawal: you can withdraw from the purchase within 14 days of receipt. This does not apply to sterile items (e.g. cannulas) whose seal you have removed after delivery. You bear the cost of returning the goods.",
      "Our terms and cancellation policy (the German version is legally binding): "],
    es: ["Tu pedido: kit de práctica", "¡Gracias por tu pedido" + (name ? ", " + name : "") + "!",
      "Has pedido el kit de práctica (set con oreja de silicona) por " + euro(betrag, s) + (rabatt ? " (precio para alumnos)" : "") + ", con envío gratuito. Este correo es tu confirmación del contrato.",
      "Dirección de entrega:", "Normalmente enviamos el kit en un plazo de 3 a 5 días laborables. Las instrucciones de todos los ejercicios están en el laboratorio de práctica del curso online; si no tienes acceso al curso, las incluimos en el paquete.",
      "Derecho de desistimiento: puedes desistir de la compra en un plazo de 14 días desde la recepción. Se exceptúan los artículos estériles (p. ej. cánulas) cuyo precinto hayas retirado tras la entrega. Los gastos de devolución corren de tu cuenta.",
      "Nuestras condiciones e información sobre el desistimiento (la versión alemana es la vinculante): "]
  }[s];
  const r = rahmen(T[1], [T[2], { html: "<p>" + esc(T[3]) + "<br><strong>" + adresse.map(esc).join("<br>") + "</strong></p>", text: T[3] + "\n" + adresse.join("\n") }, T[4], T[5],
    { html: "<p>" + esc(T[6]) + '<a href="' + esc(agb) + '">' + esc(agb) + "</a></p>", text: T[6] + agb }]);
  return { betreff: T[0] + " – Piercing Akademie", ...r };
}

// Versandauftrag an die Akademie
export function mailKitAkademie({ email, name, betrag, rabatt, adresse }) {
  const r = rahmen("Praxiskit verschicken", [
    "Neue Bestellung: Praxiskit für " + euro(betrag, "de") + (rabatt ? " (Kursteilnehmer-Rabatt)" : "") + ", bezahlt über Stripe.",
    { html: "<p>Lieferadresse:<br><strong>" + adresse.map(esc).join("<br>") + "</strong></p><p>E-Mail: " + esc(email) + "</p>", text: "Lieferadresse:\n" + adresse.join("\n") + "\nE-Mail: " + email },
    "Bitte innerhalb von 3 bis 5 Werktagen verschicken und die Übungsanleitung beilegen, falls der Kunde keinen Kurszugang hat. Antworten an diese E-Mail gehen direkt an " + (name || email) + "."
  ]);
  return { betreff: "Versand: Praxiskit für " + (name || email), ...r };
}

// Kursbuch als PDF: Download-Link und Bestätigung (digitaler Inhalt, § 356 Abs. 5 BGB)
export function mailBuch({ sprache, name, betrag, link, env }) {
  const s = PAKETE[sprache] ? sprache : "de";
  const agb = agbLink(env, s);
  const knopf = (t) => ({ html: '<p><a href="' + esc(link) + '" style="display:inline-block;background:#C9A464;color:#111114;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">' + esc(t) + "</a></p>", text: t + ": " + link });
  const T = {
    de: ["Dein Kursbuch als PDF", "Danke für deinen Kauf" + (name ? ", " + name : "") + "!", "Du hast das Kursbuch „Die Piercing Akademie – Dein Weg zum Bodypiercer“ als PDF zum Preis von " + euro(betrag, s) + " gekauft. Diese E-Mail ist deine Vertragsbestätigung.", "PDF herunterladen",
      "Der Link ist persönlich, zwei Jahre gültig und funktioniert für bis zu zehn Downloads. Jede Seite trägt deine E-Mail-Adresse und eine Bestellnummer. Das Buch ist nur für deinen eigenen Gebrauch bestimmt; Weitergabe und Vervielfältigung sind nicht erlaubt.",
      "Deine Zustimmung im Bestellvorgang: Du hast verlangt, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung beginnen, und bestätigt, dass dein Widerrufsrecht damit erlischt (§ 356 Abs. 5 BGB).", "Unsere AGB: "],
    en: ["Your course book as a PDF", "Thank you for your purchase" + (name ? ", " + name : "") + "!", "You bought the course book “Die Piercing Akademie – Dein Weg zum Bodypiercer” (German) as a PDF for " + euro(betrag, s) + ". This email is your contract confirmation.", "Download the PDF",
      "The link is personal, valid for two years and works for up to ten downloads. Every page carries your email address and an order number. The book is for your own use only; passing it on or copying it is not permitted.",
      "Your consent during checkout: you requested that we begin providing it before the end of the withdrawal period and acknowledged that your right of withdrawal thereby expires (Section 356 (5) German Civil Code).", "Our terms (the German version is legally binding): "],
    es: ["Tu libro del curso en PDF", "¡Gracias por tu compra" + (name ? ", " + name : "") + "!", "Has comprado el libro del curso «Die Piercing Akademie – Dein Weg zum Bodypiercer» (en alemán) en PDF por " + euro(betrag, s) + ". Este correo es tu confirmación del contrato.", "Descargar el PDF",
      "El enlace es personal, vale dos años y funciona para un máximo de diez descargas. Cada página lleva tu correo electrónico y un número de pedido. El libro es solo para tu uso personal; no está permitido compartirlo ni copiarlo.",
      "Tu consentimiento durante la compra: solicitaste que empezáramos a facilitarlo antes de que finalice el plazo de desistimiento y reconociste que con ello se extingue tu derecho de desistimiento (art. 356, apdo. 5, del Código Civil alemán).", "Nuestras condiciones (la versión alemana es la vinculante): "]
  }[s];
  const r = rahmen(T[1], [T[2], knopf(T[3]), T[4], T[5], { html: "<p>" + esc(T[6]) + '<a href="' + esc(agb) + '">' + esc(agb) + "</a></p>", text: T[6] + agb }]);
  return { betreff: T[0] + " – Piercing Akademie", ...r };
}
