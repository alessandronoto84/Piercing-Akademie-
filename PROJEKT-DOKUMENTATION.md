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
| `agb.html` | AGB (13 Paragrafen), gesetzliche Widerrufsbelehrung und Muster-Widerrufsformular; Entwurf auf Basis der Tattoo-Akademie-AGB |
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
- **Domain piercingakademie.de (seit 21.10.2026):** Canonical-URLs auf allen Seiten, `og:url`, `sitemap.xml`, `robots.txt` und strukturierte Daten (schema.org: Akademie mit Adresse und Kontakt, Kurs mit den drei Angeboten und Preisen). Keine Bewertungen und keine Sterne-Ratings.

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

1. **Vertragspartner:** geklärt am 21.10.2026. Vertragspartner ist „Piercing Akademie / 740 Piercing, Inhaber: Alessandro Noto, Burgstraße 12, 49808 Lingen (Ems)“, wie auf der Website. Die Daten der 740 Art & Event GmbH & Co. KG aus dem Tattoo-Projekt gelten hier nicht. Offen bleibt nur die Steuerangabe (Punkt 2).
2. **Umsatzsteuer:** auf Wunsch vom 21.10.2026 vorerst weggelassen. Bei Gelegenheit nachholen: Laut Preisangabenverordnung müssen Preise für Verbraucher Gesamtpreise sein; ein Hinweis wie „inkl. MwSt.“ oder „gemäß § 19 UStG keine Umsatzsteuer“ gehört dann zu den Preisen und ggf. eine USt-IdNr. ins Impressum.
3. **AGB und Widerrufsbelehrung:** seit 21.10.2026 als Entwurf auf `agb.html` (auf Basis der Tattoo-AGB, angepasst). Als Vorschlag gesetzt und zu bestätigen: Zugang zum Online-Kurs 12 Monate ab Freischaltung, einmalige kostenfreie Verschiebung bis 14 Tage vor dem Termin, Gerichtsstand Lingen für Kaufleute. Anwaltlich prüfen, besonders die Widerrufsbelehrung für die kombinierten Pakete (Online-Kurs, Dienstleistung und Buch in einem Vertrag).
4. **Hosting-Anbieter** für die Datenschutzerklärung.
5. **E-Mail-Postfach:** privates Gmail oder Google Workspace mit Auftragsverarbeitungsvertrag?
6. **Verbraucherstreitbeilegung (§ 36 VSBG):** seit 21.10.2026 im Impressum: „Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.“ Das gilt so nur, solange die Akademie höchstens 10 Personen beschäftigt.
7. **Bildrechte:** geklärt am 21.10.2026. Für alle Fotos auf der Website liegen schriftliche Einwilligungen vor.
8. **Fernunterrichtsschutzgesetz (FernUSG):** Der Online-Kurs (asynchron, mit Quiz, Abschlusstest und Support) kann nach dem BGH-Urteil vom 12.06.2025 (III ZR 109/24) eine Zulassung der Staatlichen Zentralstelle für Fernunterricht (ZFU) brauchen. Ohne Zulassung wären die Verträge nichtig. Vor dem Start der Buchungen anwaltlich klären lassen; Details und Quellen in [KURS-RECHERCHE.md](KURS-RECHERCHE.md), Abschnitt 1.
9. **Gesamtprüfung:** Datenschutz, Impressum und AGB vor dem Livegang anwaltlich prüfen lassen.

---

## 7. Fachliche Punkte zur Prüfung

Am 21.10.2026 geklärt und eingearbeitet:
- **Modul 04:** Lidocain-Salbe darf angewendet werden, wird aber nicht empfohlen. Das steht jetzt so in der Modulbeschreibung.
- **„Snaptile“** im Datenblatt ist korrekt.
- **Kurs-Buch:** gibt es in allen Paketen. Es steht jetzt in der Basis-Karte (Praxis und Komplett enthalten „Alles aus Basis“) und im Nachweis-Bereich. Bitte noch einmal bestätigen, die Antwort war „würde ich sagen“.
- **Komplett-Paket:** „Zunächst begrenzt auf 10 Plätze“ (vorher „Begrenzte Plätze“).
- **Modelle:** Das Studio findet in der Regel genug Modelle, garantiert ist das aber nicht. Paketkarte, Praxistag-Text und FAQ sagen das jetzt so und versprechen nichts mehr.

- **Modul 01, Algerien:** im Kursbuch belegt (S. 3: „vor über 7000 Jahren in Algerien Gehänge in ihren Ohrläppchen“).

Noch offen:
1. **Kanülenstärken:** recherchiert (siehe [KURS-RECHERCHE.md](KURS-RECHERCHE.md), Abschnitt 2). Die Website-Angaben (18G ≈ 1,3 mm, 16G ≈ 1,7 mm) entsprechen der Herstellerangabe von B. Braun und bleiben. Im Buch S. 64 bei der nächsten Auflage auf 1,3 / 1,7 / 2,2 mm korrigieren.

---

## 7b. Online-Kurs („Fahrschule“)

Stand 24.10.2026. Entscheidung: Kurs-Prototyp und Verkaufsseite bauen; Kursplattform noch offen.

**Verkaufsseite `online-kurs.html`:** Lernprinzip, alle Module mit Lektionstiteln (aus den Kursdaten erzeugt), Ablauf, Preis (Paket Basis 249 €) und Anfrage über das bestehende Formular (`index.html?paket=basis#kontakt`). In der Navigation aller Seiten verlinkt, in der Sitemap eingetragen.

**Kurs-Prototyp `kurs-prototyp/`** (umgebaut am 24.10.2026 auf Wunsch: „erst wird erklärt, dann muss man Fragen beantworten“, „viel umfangreicher“):
- **Umfang:** 11 Module, 103 Lektionen, 584 Fragen (alle mit Erklärung und Seitenangabe im Kursbuch bzw. „Ergänzung“), 34 Übungsaufgaben, 17 Grafiken und ein Diagramm an 21 Stellen, Glossar mit 59 Fachbegriffen, 6 Checklisten für den Studioalltag.
- **Grafiken (ergänzt am 24.10.2026 auf Wunsch: „kleine Bilder … Hautanatomie, Nerven … wie man sticht … Tabellen, Diagramme“):** selbst gezeichnete Vektorgrafiken in `inhalte/grafiken.js`, eingebunden mit `{ typ: "grafik", id: "…" }`: Hautquerschnitt, Ohr mit allen Ohrpiercings, Augenbraue mit Nervenaustritt, Gesicht seitlich mit N. facialis, Speichelgang und A. facialis, Wundheilung als Zeitachse, Schmerzleitung, Keimreduktion, Instrumentenkreislauf, Druckverlauf im Autoklav, Stäbe, Ringe, Überlänge, Außen- und Innengewinde, Venenverweilkanüle, Gauge-Vergleich (maßstäblich), Stich in vier Schritten, Perichondritis. Dazu das Diagramm der Abheilzeiten (`{ typ: "diagramm" }`, wird aus den Zahlen erzeugt). Farben kommen aus `kurs.css` und funktionieren hell und dunkel; auf schmalen Handys lässt sich die Grafik seitlich wischen. Alle Zeichnungen sind schematisch und als solche beschriftet.
- **Neue Lektionen mit Recherche über das Buch hinaus** (gekennzeichnet als „Ergänzung“, Quellen in `KURS-RECHERCHE.md`, Abschnitt 9): Nerven, Arterie und Speichelgang im Gesicht (Modul 3), Schutz vor Blutkontakt: Impfung und Nadelstich (Modul 5), Woran du guten Ersteinsatz-Schmuck erkennst (Normen, Gewinde; Modul 6), Kanülenstärke und Schmuckstärke (Modul 7), Perichondritis (Modul 10). Dazu Richtwerte zu den Wundheilungsphasen (Modul 3) und der Thalamus in der Schmerzleitung (Modul 4).
- **Ablauf jeder Lektion:** Erst die Erklärung (Text, Merksätze, Warnhinweise, „Aus der Praxis“, Tabellen, Datenblätter), dann die Pflichtfragen der Lektion. Sie kommen einzeln mit sofortiger Rückmeldung. Falsch beantwortete Fragen kommen am Ende der Runde erneut, bis alle richtig sind. Erst dann ist die Lektion geschafft und die nächste öffnet sich.
- **Modulprüfung:** Sie öffnet sich nach allen Lektionen eines Moduls und zieht 20 zufällige Fragen aus dem Modul; bestanden ab 16. Danach öffnet sich das nächste Modul.
- **Fehler-Training:** Es sammelt jede falsch beantwortete Frage aus Lektionen und Prüfungen. Eine richtig beantwortete Frage verschwindet daraus.
- **Prüfungssimulation:** 44 Fragen, 4 pro Modul, bestanden ab 36; sie öffnet sich nach allen Modulprüfungen.
- **Weiterlernen:** Die Übersicht zeigt immer den nächsten offenen Schritt.
- **Einstellungen:** Die Zahlen stehen oben in `kurs.js` (`FRAGEN_JE_PRUEFUNG`, `SIMULATION_JE_MODUL`, `BESTEHEN_AB`).
- **Daten:** Pro Modul eine Datei `inhalte/modul-XX.js`, in der jede Lektion ihre Erklärung (`inhalt`) und ihre Fragen (`fragen`) enthält. 137 weitere Fragen erzeugt `werkzeuge/fragen-erzeugen.js` aus den Datenblättern (Ersteinsatz, Kanüle, Klemme), der Kanülen- und Werkzeugtabelle, der Reihenfolge der 26 Ablaufschritte und den Abheilzeiten; sie werden der passenden Lektion zugeordnet (`inhalte/fragen-generiert.js`). Nach Änderungen an den Moduldaten neu erzeugen: `node werkzeuge/fragen-erzeugen.js` im Ordner `kurs-prototyp`. Glossar und Checklisten stehen in `inhalte/glossar-checklisten.js`.
- **Kein Backend:** Der Fortschritt liegt nur im `localStorage` des Browsers. Es gibt keinen Login, keine Bezahlung und keine Teilnahmebescheinigung; die Seite sagt das offen.
- **Prüfmodus:** `kurs-prototyp/index.html#alles` schaltet alle Module und Lektionen frei; „Fortschritt zurücksetzen“ in der Übersicht.
- **Nicht öffentlich:** Der Ordner ist per `robots.txt` und `noindex` ausgeschlossen. Trotzdem nicht auf die öffentliche Website hochladen.

**Quellen und Kennzeichnung:**
- **Grundlage ist das Kursbuch:** Seitenangaben stehen bei jeder Testfrage und im Kopf jedes Moduls.
- **Korrigiert gegenüber dem Buch:** Kanülenmaße 1,3 / 1,7 / 2,2 mm, Octenisept, Chirurgenstahl, Niob.
- **„Ergänzung der Akademie, fachlich prüfen“:** So markiert sind alle Stellen, die nicht aus dem Buch stammen, zum Beispiel Blutverdünner nicht eigenmächtig absetzen, Foto-Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, ASTM F136, REACH-Grenzwert, Notruf 112 und „bei Fieber zum Arzt“.
- **Module 03 und 11:** Sie sind neu und als Entwurf gekennzeichnet. Teile davon stammen aus dem Buch (Risikozonen, Abheilzeiten, Epithelisierung, Rahmenhygieneplan), die Grundlagen (Hautschichten, Wundheilungsphasen, Studio-Gründung) sind allgemeines Fachwissen und müssen fachlich geprüft werden.
- **Bewusst abgeschwächt:** Bei Entzündungen steht im Buch „Eiter muss immer abfließen (rausdrücken)“. Im Kurs heißt es „Eiter muss abfließen können“, ergänzt um den Hinweis, bei Fieber oder sich ausbreitender Rötung zum Arzt zu gehen. Bitte bestätigen.
- **Intimpiercings:** Datenblätter ohne Bilder, in einer eigenen Lektion „nur für Volljährige“.

**Offen:**
1. **Kursplattform:** Wahl der Plattform und Übernahme der Inhalte.
2. **FernUSG:** Klärung, ob eine ZFU-Zulassung nötig ist (siehe Abschnitt 6, Punkt 8). Das betrifft genau diesen asynchronen Kurs mit Tests.
3. **Fachliche Durchsicht:** Module 03 und 11 sowie alle „Ergänzungen“ fachlich prüfen.
4. **Händlerliste:** Die bewährten Händler fehlen noch in Modul 11.
5. **Zugangsdauer:** 12 Monate stehen auf der Verkaufsseite (aus dem AGB-Vorschlag); bitte bestätigen.

## 7a. Abgleich mit dem Kursbuch

Quelle: „Die Piercing Akademie – Dein Weg zum Bodypiercer“ by 740 Piercing (Autor: Alessandro Noto, Herstellung: epubli), 116 Seiten plus Inhaltsverzeichnis, als Scan in drei PDF-Teilen geliefert am 21.10.2026. Gelesen wurden S. 1–97 und S. 110–116; die übrigen Seiten zum Intimbereich (S. 98–109) waren für die Website-Texte nicht relevant.

**Kapitel des Buchs und Module der Website:**

| Website-Modul | Kursbuch | Stand |
|---|---|---|
| 01 Berufsbild und Geschichte | Kap. 2 Piercing – Damals wie Heute (S. 3–6) | belegt (Algerien, Ohrlochpistole, Venenverweilkanüle) |
| 02 Recht, Haftung, Einverständnis | Kap. 1 Rechtliches (S. 1–2), Kap. 12 Einverständniserklärung (S. 114–115) | belegt |
| 03 Anatomie, Haut und Wundheilung *(neu)* | kein eigenes Kapitel; Wundheilung teilweise in Kap. 6.2 | Inhalt muss für den Online-Kurs neu erstellt werden |
| 04 Schmerz und Betäubung | Kap. 3 Schmerz, Kap. 4 Lokalanästhesie (S. 7–15) | belegt (Eisspray, „Lidocainsalbe (Xylocain) rezeptfrei aus der Apotheke“, Nebenwirkungen, Wechselwirkungen) |
| 05 Hygiene und steriles Arbeiten | Kap. 5 (S. 16–47) | belegt (OP-Raum-Vergleich, Händehygiene, Rahmenhygieneplan, Autoklav) |
| 06 Material und Schmuck | Kap. 7 Materiallehre, Kap. 8 Schmucklehre (S. 52–63) | belegt |
| 07 Werkzeuge und Instrumente | Kap. 9 (S. 64–73) | belegt |
| 08 Piercing-Arten | Kap. 10 (S. 74–110) | belegt; Datenblatt Nostril im Startbereich stimmt exakt mit S. 85 überein; Beispielliste auf der Website jetzt vollständig nach Buch |
| 09 Ablauf, Kundengespräch, Notfälle | Kap. 11 Piercen Ablauf (S. 111–113) | belegt (26 Schritte, Kreislauf-Abfall); Notfallteil im Buch nur kurz (Erste-Hilfe-Kasten S. 26, Nachbluten S. 50) |
| 10 Pflege und Wundheilstörungen | Kap. 6 Piercingpflege (S. 48–51) | belegt (Prontolind/Octenisept nicht bei Knorpel) |
| 11 Studio starten *(neu)* | kein Kapitel | Inhalt (Gewerbe, Gesundheitsamt, Versicherung, Preise, Einkauf) muss für den Online-Kurs neu erstellt werden |

Die Markierung „neu“ auf der Website passt damit genau zu den Modulen, die über das Buch hinausgehen.

**Hinweise für die Überarbeitung des Buchs bzw. den Online-Kurs** (nicht auf der Website verwendet, nur zur Prüfung):
- **Schreibweisen:** S. 55 „Chirurgiestahl“ → „Chirurgenstahl“ (auf der Website bereits korrekt), S. 48 „Octinesept“ → „Octenisept“, S. 56 „Nionium“ → vermutlich „Niob“, S. 44 „Bacterius stearothermophilus“ → „Geobacillus stearothermophilus“.
- **Kanülenmaße S. 64:** siehe oben unter „Noch offen“.
- **Einverständniserklärung S. 115:** Die Einwilligung zur Veröffentlichung von Fotos nennt Art. 6 Abs. 1 (f) DSGVO; für eine Einwilligung passt Art. 6 Abs. 1 (a). Außerdem sind 10 Jahre Aufbewahrung für Gesundheitsdaten zu begründen. Vor der Nutzung im Kurs rechtlich prüfen lassen.
- **Bildrechte für die Website:** geklärt, Einwilligungen liegen vor.
- **Impressum des Buchs:** nennt „740 Piercing, Alessandro Noto“ und die E-Mail-Adresse 740-tattoo@gmx.net. Maßgeblich sind die Angaben der Website (Inhaber Alessandro Noto, diepiercingakademie@gmail.com), bestätigt am 21.10.2026. Bei einer Neuauflage das Buch-Impressum angleichen.
- **Bildquellen im Buch:** „Canva, Wikipedia“. Für den Online-Kurs die Lizenzbedingungen der Bilder prüfen, besonders bei Wikipedia-Bildern (Namensnennung).

## 8. Offene Entscheidungen

0. **FernUSG/ZFU (vorrangig):** Online-Kurs zulassen lassen oder so gestalten, dass er nicht unter das FernUSG fällt (siehe Abschnitt 6, Punkt 8). Davon hängen AGB, Kursplattform und der Buchungsstart ab.

1. **Kursplattform:** Welche Plattform, welche URL? Danach den Buchungsbutton aktivieren und die Rechtstexte ergänzen.
2. **Formular-Backend:** Den heutigen E-Mail-Entwurf beibehalten oder auf FormSubmit umstellen? FormSubmit wäre bequemer, weil das Formular dann direkt sendet. Es leitet aber alle Daten über einen US-Dienst; das muss in die Datenschutzerklärung, und die Zieladresse muss einmalig per Bestätigungs-Mail freigeschaltet werden. Umstellung nur nach Freigabe.
3. **Domain:** erledigt (piercingakademie.de). Beim Hoster einstellen, dass `www.piercingakademie.de` auf `https://piercingakademie.de/` weiterleitet, weil die Canonical-URLs ohne „www“ gesetzt sind. Ein Vorschaubild fürs Teilen (`og:image`, 1200 × 630 px) fehlt noch.
4. **Galerie:** Weitere Fotos, z. B. Bauchnabel oder Brustwarze (in Modul 08 genannt), können jederzeit ergänzt werden. Das Raster ist auf 1 großes plus 12 kleine Bilder ausgelegt.
