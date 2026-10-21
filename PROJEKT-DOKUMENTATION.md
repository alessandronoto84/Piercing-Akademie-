# Piercing Akademie – Projektdokumentation

Stand: 21.10.2026. Grundlage: bestehende Seite „Piercing Akademie (1).html“ (unverändert im ersten Commit dieses Repositories als `index.html`), Übergabeprotokoll der Tattoo-Akademie-Website (PDF zweimal geliefert, inhaltlich identisch; dazu das ZIP-Paket mit dem Tattoo-Projekt) sowie zehn Studio-Fotos aus einem Instagram-Screenshot (21.10.2026).

---

## 1. Aufbau der Website

Statische Website ohne Build-System, ohne Server-Logik und ohne Datenbank. Alle Dateien gemeinsam auf einen beliebigen Webspace hochladen, fertig.

| Datei | Inhalt |
|---|---|
| `index.html` | Landingpage: Hero, Ablauf, Zielgruppen, 11 Module, 3 Pakete, Praxistag, Nachweis und Galerie, Klartext, FAQ, Anmeldung |
| `impressum.html` | Impressum (bisher ein Abschnitt in der Startseite) |
| `datenschutz.html` | Datenschutzerklärung (neu, auf den tatsächlichen Technikstand zugeschnitten, Entwurf) |
| `agb.html` | Platzhalterseite für AGB und Widerrufsbelehrung (ehrlich als „in Vorbereitung“ gekennzeichnet, `noindex`) |
| `assets/styles.css` | gemeinsames Stylesheet für alle Seiten |
| `assets/main.js` | Anfrageformular: Paket-Vorauswahl, Validierung, E-Mail-Entwurf |
| `assets/fonts/` | lokal eingebundene Schriften (SIL Open Font License, Lizenztexte liegen bei) |
| `assets/favicon.png` | Logo als Browser-Symbol (identisch mit dem eingebetteten Logo) |

**Warum eine Landingpage plus Rechtsseiten und keine acht Einzelseiten:** Der Inhalt (11 Module, 3 Pakete, ein Praxistag) passt gut auf eine gut gegliederte Seite. Wer von „Pakete“ zu „Anmeldung“ springt, muss dann nicht die Seite wechseln. Getrennte Seiten wie `kursinhalte.html` oder `pakete.html` würden heute nur Inhalte doppeln. Die Rechtstexte stehen dagegen auf eigenen Seiten, damit sie von überall direkt erreichbar sind.

**Wiederkehrende Elemente:** Kopf- und Fußzeile stehen in jeder HTML-Datei einzeln, weil es kein Build-System gibt. Bei Änderungen an der Navigation oder am Footer also alle vier Dateien anpassen.

**Bilder:** Alle Bilder sind wie bisher als Base64 direkt in die HTML-Dateien eingebettet. Die sieben Originalbilder sind byte-genau erhalten (per Prüfsumme kontrolliert). Die zehn neuen Studio-Fotos sind 1:1 aus dem Screenshot ausgeschnitten: nicht hochskaliert, nicht freigestellt, ohne Instagram-Bedienelemente. Nicht übernommen wurden die Reel-Kachel mit Aufrufzähler (zeigt dieselbe Kundin wie ein anderes Foto) und die Logo-Kachel.

**Bilder später austauschen:** Ein Bild in Base64 umwandeln (z. B. `base64 -w0 foto.jpg`) und als `src="data:image/jpeg;base64,…"` einsetzen. Für die Galerie passt Hochformat 3:4 mit etwa 360 × 470 px.

---

## 2. Bestandsaufnahme der Ausgangsdatei (Phase A)

Gefundene Probleme in „Piercing Akademie (1).html“:

1. **Fehlerhaftes Dokumentgerüst:** Die Datei war ein Artifact-Export. `<title>`, Stylesheets und Meta-Tags standen im `<body>`, es fehlte `lang="de"`, `charset=utf8` war falsch geschrieben, und es gab Artifact-spezifische Meta-Tags.
2. **Rechtliche Links liefen ins Leere:** „Datenschutz“ und „AGB und Widerruf“ im Footer führten nur zu `#kontakt`. Eine Datenschutzerklärung, AGB oder Widerrufsbelehrung gab es nicht.
3. **Google Fonts wurden extern geladen,** ohne Hinweis in einer Datenschutzerklärung. Die IP-Adresse geht dabei an Google; das LG München I hat dazu am 20.01.2022 ein Urteil gefällt. Im Tattoo-Projekt ist dasselbe als offener Punkt vermerkt.
4. **Paket-Buttons ohne echte Funktion:** „Basis/Praxis/Komplett wählen“ sprangen zu einem Kontaktblock, der auf eine nicht verlinkte Kursplattform verwies. Dort gab es nur einen Button „Zurück zu den Paketen“.
5. **Keine Meta-Description, keine Open-Graph-Daten.** Der Seitentitel war nur „Piercing Akademie“.
6. **Überschriften-Hierarchie:** Im Hero folgte direkt auf die H1 eine H3 („Nase (Nostril)“).
7. **Kleinigkeiten:** viele Inline-Styles, ein leeres SVG-`<text>`-Element, leere `<span>`-Platzhalter in den FAQ, und Screenreader lasen die +/–-Zeichen vor.

Bereits gut und deshalb beibehalten: das Designsystem (Farben, Schriften, Abstände), der helle und dunkle Modus, die responsive Grundstruktur, die Fokuszustände, `<details>` als Aufklappelemente ohne JavaScript und die Base64-Bilder.

---

## 3. Umgesetzte Änderungen (Phase B)

**Inhalte (unverändert übernommen):** Alle Texte der Startseite sind wörtlich erhalten: 11 Module, 3 Pakete mit Preisen und Leistungen, Praxistag, Zertifikatshinweis („kein staatlicher Abschluss“), Klartext, alle 5 FAQ, Kontaktangaben und Impressumsdaten. Inhaltlich neu sind nur:

- **Anmeldetext:** Der Satz „Schick uns vorab gern eine Anfrage, wir melden uns mit freien Terminen für die Praxistage und dem Weg zur Buchung.“
- **Galerie:** Zwischenüberschrift „Arbeiten aus unserem Studio“, und in der Bildunterschrift sind jetzt die gezeigten Piercing-Arten genannt.
- **Praxistag:** Ein Foto mit der Unterschrift „Im Studio 740 Piercing: gearbeitet wird mit Mundschutz und Einmalhandschuhen.“ Der Satz beschreibt, was auf dem Foto zu sehen ist.

**Technik:**
- Gültiges, semantisches HTML5 (`lang="de"`, korrekter `<head>`, Abschnitte mit `aria-labelledby`)
- CSS in `assets/styles.css` zusammengeführt, Inline-Styles durch Klassen ersetzt, doppelte und ungenutzte Regeln entfernt; das Erscheinungsbild ist unverändert
- Schriften lokal eingebunden: Die Website lädt keine Ressourcen von Drittanbietern mehr (im Browser geprüft)

**Benutzerführung und Barrierefreiheit:**
- „Anmeldung“ als Button in der Navigation
- „Zum Inhalt springen“-Link für Tastatur und Screenreader
- +/–-Zeichen für Screenreader ausgeblendet
- Hero-Datenblatt ohne falsche H3
- Telefonnummer klickbar und ohne Zeilenumbruch

**Anfrageformular (ehrliche Lösung ohne Backend):**
- **Felder:** Paket (Pflicht), Name (Pflicht), Telefon (optional), Nachricht (optional) und die Bestätigung „Ich bin mindestens 18 Jahre alt“ (Pflicht, nicht vorausgewählt).
- **Paket-Vorauswahl:** Ein Klick auf „Basis/Praxis/Komplett wählen“ wählt das Paket im Formular vor. Links mit `index.html?paket=praxis#kontakt` tun dasselbe, zum Beispiel für Instagram.
- **Kein Versand durch die Website:** Das Formular erstellt nur eine E-Mail an diepiercingakademie@gmail.com im Mailprogramm der Besucher. Es zeigt keine Erfolgsmeldung, sondern den Hinweis, dass die Anfrage erst mit dem Absenden im Mailprogramm verschickt ist, und bietet „Text kopieren“ für Webmail-Nutzer an.
- **Ohne JavaScript** funktioniert es trotzdem über `mailto:`.
- **Fehlermeldungen** erscheinen beim Absenden am jeweiligen Feld, der Fokus springt ins erste fehlerhafte Feld.
- **Kein FormSubmit:** Ein Dienst wie FormSubmit wurde bewusst nicht eingebaut (siehe offene Entscheidungen).

**SEO:**
- **Titel:** „Piercing-Kurs online und Praxistage in Lingen | Piercing Akademie“
- **Meta-Description und Open Graph:** passende Meta-Description und Open-Graph-Grundangaben, ohne og:url und og:image, weil die Domain unbekannt ist
- **Überschriften:** genau eine H1 pro Seite, saubere H2/H3-Hierarchie
- **Alt-Texte:** beschreibend für alle 17 Bilder
- **Ladezeit:** `loading="lazy"` für Bilder außerhalb des ersten Bildschirms
- **Bewusst weggelassen:** keine erfundene Domain, kein Canonical, keine Bewertungen, keine strukturierten Daten

---

## 4. Durchgeführte Tests (Phase C)

Automatisiert mit Chromium (Playwright) über einen lokalen Webserver:

| Prüfung | Ergebnis |
|---|---|
| 4 Seiten × 5 Breiten (320, 375, 768, 1024, 1440 px) × hell/dunkel: JavaScript-Fehler, Konsolenfehler, HTTP-Fehler | keine |
| Horizontaler Überlauf | keiner (anfangs H1 „Datenschutzerklärung“ bei 320 px, behoben) |
| Bilder | alle 17 laden, alle mit Alt-Text |
| Externe Anfragen (Google Fonts o. Ä.) | keine |
| Interne Anker, doppelte IDs, `aria-describedby`-Verweise | alle korrekt |
| 11 Module, 5 FAQ, Preise 249 € / 999 € / 2.490 € | vorhanden |
| Aufklappen der Module | funktioniert |
| Formular leer absenden | 3 verständliche Fehlermeldungen, Fokus im ersten Fehlerfeld, kein Versand |
| Ungültige Telefonnummer | Fehlermeldung, kein Versand |
| Paket-Vorauswahl per Button und per `?paket=` | funktioniert |
| Gültige Eingabe | E-Mail-Entwurf korrekt, „Text kopieren“ funktioniert |
| HTML-Validator (html-validate, Empfehlungsregeln) | nur Hinweis auf kleingeschriebenes `<!doctype html>` (gültig) |
| Kontrast der Farbkombinationen | Text 5,9:1 und mehr (WCAG AA erfüllt) |

Beim Testen gefunden und behoben: Fehlermeldungen erschienen schon beim Verlassen eines Feldes und verschoben dadurch das Layout. Ein Klick auf das nächste Feld, etwa die Altersbestätigung, ging dann ins Leere. Jetzt erscheinen neue Meldungen erst beim Absenden.

**Nicht getestet (nicht möglich):** Ob das Mailprogramm auf echten Geräten aufgeht und E-Mails ankommen. Eine Buchung oder Zahlung gibt es nicht, also auch keinen Test dafür. Echte Geräte (iPhone, Android) bitte stichprobenartig selbst prüfen.

---

## 5. Externe Systeme, die noch nicht angebunden sind

- **Kursplattform:** Die bestehende Seite sagt „Die Buchung läuft über unsere Kursplattform“, nennt aber weder Plattform noch Link. In `index.html` ist ein versteckter Button „Zur Buchung auf der Kursplattform“ (`id="zur-buchung"`) vorbereitet. Sobald die echte URL feststeht, `href` eintragen und `hidden` entfernen. Dann auch `datenschutz.html` Abschnitt 5 und `agb.html` ergänzen.
- **FAQ „Wie bekomme ich Zugang zum Online-Kurs?“:** Die Antwort beschreibt die Plattform („Zugangsdaten per E-Mail, sofort loslegen“) und ist nur richtig, wenn diese tatsächlich so läuft. Bitte bestätigen.
- **Login, Kursfortschritt, Quiz, Abschlusstest, Zertifikate, Zahlung:** Das kann eine statische Website nicht. Dafür braucht es eine fertige Plattform (z. B. Kajabi, Thinkific, Elopage, Digistore24) oder ein eigenes Backend. Vor einer solchen Entscheidung wird nichts dergleichen gebaut.

---

## 6. Fehlende Firmen- und Rechtsangaben

Auf den Rechtsseiten sind die offenen Punkte sichtbar als „Zur Prüfung“ markiert (CSS-Klasse `.pruefen`). Vor dem Livegang klären und die Markierungen entfernen.

1. **Vertragspartner:** Auf der Seite steht „740 Piercing, Inhaber: Alessandro Noto“. Im Tattoo-Protokoll gehört „740 Piercing“ zu den Partnermarken der 740 Art & Event GmbH & Co. KG. Wer verkauft die Kurse: Alessandro Noto als Einzelunternehmer oder die Gesellschaft? Davon hängen Impressum, Datenschutz und AGB ab. Die Daten der GmbH & Co. KG (HRB, Steuernummer, USt-IdNr., Geschäftsführer) wurden bewusst nicht übernommen.
2. **Umsatzsteuer:** USt-IdNr. vorhanden oder Kleinunternehmer nach § 19 UStG? Das gehört ins Impressum (die bestehende Seite kündigt „Steuernummer oder Umsatzsteuer-ID“ an). Außerdem müssen Preise für Verbraucher nach der Preisangabenverordnung Gesamtpreise sein. Bisher steht nur „Alle Preise in Euro“. Je nach Status sollte dort „inkl. MwSt.“ oder „gemäß § 19 UStG wird keine Umsatzsteuer berechnet“ stehen. Diesen Hinweis habe ich nicht selbst ergänzt, weil der Status unbekannt ist.
3. **AGB und Widerrufsbelehrung** fehlen vollständig. Nötig sind unter anderem: Vertragsschluss, Zahlung, Termine, Verschiebung und Stornierung der Praxistage, Widerrufsrecht für digitale Inhalte (Online-Kurs) und Dienstleistungen (Praxistage), Laufzeit des Kurszugangs sowie Umfang der „12 Monate Support“.
4. **Hosting-Anbieter** für die Datenschutzerklärung.
5. **E-Mail-Postfach:** privates Gmail oder Google Workspace mit Auftragsverarbeitungsvertrag?
6. **Verbraucherstreitbeilegung (§ 36 VSBG):** Ob ein Hinweis nötig ist, hängt von der Zahl der Beschäftigten und den AGB ab.
7. **Bildrechte:** Auf mehreren Fotos sind Personen erkennbar (Zertifikatsübergaben, Gesichter bei den Nasen- und Lippenpiercings, Piercer). Liegen Einwilligungen für die Nutzung auf der Website vor? Eine Einwilligung für Instagram deckt das nicht automatisch ab.
8. **Gesamtprüfung:** Datenschutz, Impressum und AGB vor dem Livegang anwaltlich prüfen lassen.

---

## 7. Fachliche Punkte zur Prüfung (nicht verändert)

Die Kursinhalte habe ich nicht verändert. Folgende Aussagen bitte fachlich und rechtlich prüfen:

1. **Modul 04 „Schmerz und Betäubung“:** „welche Mittel du als Piercer nutzen darfst (Eisspray, Lidocain)“. Lidocain ist ein Arzneimittel; injizierbare Betäubung ist Ärzten vorbehalten. Ob und in welcher Form (z. B. als Creme oder Spray) ein Piercer es anwenden darf, ist rechtlich heikel und sollte genau so formuliert werden, wie es rechtlich haltbar ist.
2. **Datenblatt im Hero:** „Klemme: Gazeklemme, Snaptile“. Bitte die Schreibweise und den Fachbegriff „Snaptile“ bestätigen.
3. **„Das Kurs-Buch bekommst du dazu.“** In welchen Paketen ist das Buch enthalten? In den Paketkarten wird es nicht genannt.
4. **Modul 01:** „ältesten Funden in Algerien“. Bitte mit der Quelle im Fachbuch abgleichen.
5. **„Modelle vom Studio gestellt“ (Praxis-Paket, FAQ):** Ist das immer garantiert?
6. **„Begrenzte Plätze“ (Komplett-Paket):** Gibt es eine konkrete Zahl?

---

## 8. Offene Entscheidungen

1. **Kursplattform:** Welche Plattform, welche URL? Danach den Buchungsbutton aktivieren und die Rechtstexte ergänzen.
2. **Formular-Backend:** Den heutigen E-Mail-Entwurf beibehalten oder auf FormSubmit umstellen? FormSubmit wäre bequemer, weil das Formular dann direkt sendet. Es leitet aber alle Daten über einen US-Dienst; das muss in die Datenschutzerklärung, und die Zieladresse muss einmalig per Bestätigungs-Mail freigeschaltet werden. Umstellung nur nach Freigabe.
3. **Domain:** Sobald sie feststeht, Canonical-URLs, `og:url`, ein Vorschaubild (`og:image`) und eine `sitemap.xml` ergänzen. Dann sind auch strukturierte Daten (z. B. `Course` mit den drei Angeboten) sinnvoll.
4. **Galerie:** Weitere Fotos, z. B. Bauchnabel oder Brustwarze (in Modul 08 genannt), können jederzeit ergänzt werden. Das Raster ist auf 1 großes plus 12 kleine Bilder ausgelegt.
