# Startliste: Was vor dem Livegang noch fehlt

Stand: 26.10.2026. Erledigtes steht unten. Details und Quellen: `KURS-RECHERCHE.md`, Technik: `PROJEKT-DOKUMENTATION.md`.

## 1. Was ich von dir brauche

| # | Was | Warum | Wer |
|---|---|---|---|
| 2 | **Anwalt oder Abmahnschutz-Dienst:** AGB, Widerruf, Datenschutz, Impressum, Muster-Einverständniserklärung | Schutz vor Abmahnungen; die Texte sind sorgfältige Entwürfe, aber keine Rechtsberatung. | Anwalt / z. B. IT-Recht-Kanzlei, eRecht24 |
| 3 | **Entscheidung Kursplattform** (z. B. elopage, Digistore24, Teachable oder eigene Lösung) | Login, Bezahlung, Freischaltung nach Kauf, Fortschritt auf dem Server, fälschungssichere Bescheinigung, gesperrter Prüfmodus. Ich übertrage die Inhalte dorthin. | du |
| 4 | **Domain und Hosting** (z. B. piercingakademie.de; Hoster mit Sitz in der EU) | Seite online stellen; Datenschutzerklärung braucht Name, Sitz und Auftragsverarbeitungsvertrag des Hosters. | du |
| 5 | **E-Mail-Adresse zur Domain** (z. B. info@piercingakademie.de) | Wirkt deutlich seriöser als Gmail; dann überall austauschen. | du |
| 6 | ~~Anfrageformular~~ | Erledigt (01.11.2026): ausführlicheres Formular, Versand über unseren Cloudflare-Server; aktiv mit dem Livegang. | – |
| 7 | **Fachliche Freigabe** von Modul 11 („Studio starten“) und der Lektion Perichondritis | Beide sind noch als „Entwurf“ markiert. | du |
| 8 | **Händlerliste für Modul 11** (Schmuck, Kanülen, Desinfektion) oder Streichung | Platzhalter „Welche Händler sich bewährt haben …“ | du |
| 9 | **Echte Fotos und kurze Videos**: du im Studio, Arbeitsplatz, Autoklav, Praxistag | Echte Bilder wirken stärker als Symbolbilder. | du |
| 10 | **Stimmen von Teilnehmern** (3–5, mit Einwilligung) | Vertrauen; bis dahin bewusst kein Bewertungsbereich. | du |
| 11 | ~~Rechnungsangaben~~ | Erledigt: Verkauf über dein Einzelunternehmen (740 Piercing); Preise bleiben „inkl. MwSt.“. | – |
| 12 | **Berufshaftpflicht** für Kurs und Praxistage bestätigen | Absicherung der Praxistage mit Modellen. | Versicherung |
| 13 | **Stripe:** Testschlüssel ist hinterlegt und getestet (05.11.2026). Offen: PayPal und SEPA im Stripe-Dashboard einschalten, falls gewünscht; Webhook und Live-Schlüssel nach dem Veröffentlichen auf Cloudflare (Details in `STRIPE-ANLEITUNG.md`, Abschnitt 2) | Kaufknopf und Bestellseite auf der Website. | du, dann ich |
| 14 | **Cloudflare:** Zugang hinterlegt, Testadresse `piercing-akademie-vorschau.alessandronoto84.workers.dev` wird aus GitHub gebaut (05.11.2026). Offen: R2 einschalten, Domains zu Cloudflare umziehen (Nameserver beim Anbieter umstellen), Stripe- und Resend-Schlüssel beim Worker eintragen | Login, Bezahlschranke und automatische Freischaltung. | du, dann ich |
| 16 | **Umsatzsteuer bei Verkauf ins Ausland** mit dem Steuerberater klären | Online-Kurse an Privatkunden in anderen EU-Ländern: Umsatzsteuer des Kundenlandes, Meldung über das OSS-Verfahren (ab 10.000 € EU-Auslandsumsatz pro Jahr; Kleinunternehmer gesondert prüfen). | Steuerberater |
| 15 | **Fotos und Clips aus dem Studio** nach `FOTO-VIDEO-ANLEITUNG.md` | Echte Aufnahmen statt KI-Bilder; Clip-Player in der Fahrschule ist fertig. | du |
| 17 | **Praxislabor fachlich prüfen**: 7 Übungsaufgaben in `kurs-prototyp/inhalte/praxislabor.js` (Arbeitsplatz, Hände/Handschuhe, Anzeichnen, Klemme und Kanüle ohne Stechen, Ablauf, Notfall) und Silikon-Übungsmodell im Paket bestätigen | Die Aufgaben folgen Modul 05, 08 und 09, sind aber von der Akademie formuliert. | du |
| 18 | **Kursbuch, nächste Auflage**: 7 Stellen angleichen, an denen die Fahrschule bewusst vom Buch abweicht (Liste in `KURS-RECHERCHE.md`, Abschnitt 15) | Teilnehmer, die Buch und Kurs nebeneinander lesen, sehen sonst Widersprüche. | du |
| 19 | **Praxislabor-Clips filmen**: 7 kurze Clips am Silikonohr nach `CLIPS-PRAXISLABOR.md` (Querformat, 20–90 s, nur Hände und Ohr) | Die Clips zeigen allen Teilnehmern, wie gestochen wird; im Paket Komplett begleiten sie die Stichübungen. | du |
| 20 | **Übungsset für das Paket Komplett festlegen und Versand klären**: Inhalt bestätigen (Vorschlag in `CLIPS-PRAXISLABOR.md`); vom Anwalt bzw. Lieferanten bestätigen lassen, dass du Venenverweilkanülen an Privatpersonen verschicken darfst, und eine Gebrauchs-/Entsorgungsanleitung beilegen | Nur Komplett-Teilnehmer bekommen das Set; Kanülen sind Medizinprodukte. | du / Anwalt |
| 21 | **Kursbuch digital**: Endgültigen E-Book-Preis festlegen (vorläufig 19,90 €; Buchpreisbindung: danach überall gleich, keine Rabatte), Lesedauer für Einzelkäufer bestätigen (vorläufig 24 Monate) | Buch-PDF (epubli-Druckfassung, 116 Seiten) ist da und liegt im privaten R2-Speicher (05.11.2026). Preis steht in `server/src/index.js` (`PRODUKTE.buch`), auf `index.html` und `bestellen.html`. | du |
| 22 | **Starter-Packs (499 €)**: Inhalt zusammenstellen und schicken (Liste der Teile, Lieferzeit, Versandländer) | Danach baue ich das Produkt ein: Karte auf der Startseite, Bestellseite, Stripe mit Lieferadresse, AGB/Widerruf (Ware), Versand-E-Mail an dich. | du |
| 23 | **Youlindo als Partner**: Partnerschaft schriftlich bestätigen lassen; falls es Provisions- oder Affiliate-Links gibt, die Links schicken | Die Materialliste in der Fahrschule verlinkt bisher nur die Startseite von Youlindo. Bezahlte Links müssen als Werbung gekennzeichnet werden. | du |

## 2. Was ich danach umsetze

- Formularversand einbauen, sobald der Dienst feststeht (Punkt 6).
- Datenschutzerklärung um den Hoster ergänzen (Punkt 4); E-Mail-Adresse austauschen (Punkt 5).
- Kursinhalte, Vorlagen und Bescheinigung auf die gewählte Plattform übertragen (Punkt 3).
- Echte Fotos, Videos und Stimmen einbauen (Punkte 9, 10).
- Google-Unternehmensprofil vorbereiten (Texte, Kategorien, Fotos) – anlegen musst du es selbst.
- FAQ ergänzen: „Darf ich danach selbstständig piercen?“, „Was brauche ich vom Gesundheitsamt?“, „Bekomme ich eine Rechnung?“ (nach Punkt 1 und 11).
- Nach dem Livegang: Seite bei der Google Search Console anmelden, Ladezeit und Barrierefreiheit messen.

## 3. Bereits erledigt (26.10.2026)

- Bildrechte geklärt: Kursbuch-Fotos (eigenes Buch der Akademie), Stockfotos und generierte Bilder sind freigegeben (Alessandro Noto, 26.10.2026). Die Fotos von Wikimedia Commons behalten ihren kurzen Urheber- und Lizenznachweis, weil die CC-Lizenzen das verlangen.
- Hinweise „KI-generiert“ und „KI-Video“ unter Bildern und Video entfernt.
- Faktenprüfung Runde 2: alle 11 Module, Glossar und Checklisten mit Quellen gegengeprüft (KURS-RECHERCHE.md, Abschnitt 13).
- Druckvorlagen als PDF im Kurs: Pflegehinweise, Muster-Einverständniserklärung, Reinigungs- und Desinfektionsplan, Checklisten.
- Bescheinigung über den Online-Teil nach bestandener Prüfungssimulation (drucken oder als PDF speichern).
- Vorschaubild für WhatsApp, Instagram und Co. auf allen Seiten.
- Kursbilder als einzelne WebP-Dateien: rund ein Drittel kleiner, lädt nur, was gebraucht wird.
- Website für Stripe vorbereitet (01.11.2026): Kaufknopf je Paket, Danke-Seite, AGB und Datenschutz ergänzt; aktiv, sobald die Bezahl-Links eingetragen sind.
- Website auf Englisch und Spanisch (01.11.2026): Sprachauswahl oben, alle Seiten inklusive übersetzter Rechtstexte (deutsche Fassung verbindlich). Praxistage und Coaching auf Deutsch oder Englisch.
- Clip-Player in der Fahrschule (01.11.2026): kurze Clips als stumme Schleife oder mit Ton, Umwandlung per `werkzeuge/clip-umwandeln.sh`.
