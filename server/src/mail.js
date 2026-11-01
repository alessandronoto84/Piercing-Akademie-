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

export function mailWillkommen({ env, email, name, paket, sprache, betrag, waehrung, gekauft, zustimmung }) {
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

export async function sende(env, an, mail) {
  if (env.DEV === "1" || !env.RESEND_API_KEY) {
    console.log("[E-Mail an " + an + "] " + mail.betreff + "\n" + mail.text);
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + env.RESEND_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ from: env.MAIL_ABSENDER, to: [an], subject: mail.betreff, html: mail.html, text: mail.text })
  });
  if (!res.ok) console.error("E-Mail fehlgeschlagen", res.status, await res.text());
}
