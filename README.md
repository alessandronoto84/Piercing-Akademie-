# Piercing Akademie – Website

Statische Website der Piercing Akademie (740 Piercing, Lingen). Ohne Build-System, ohne Server-Logik.

**Veröffentlichen:** Die Dateien `*.html`, `robots.txt`, `sitemap.xml` und den Ordner `assets/` (mit `bilder/` und `video/`) auf einen Webspace hochladen. `index.html` ist die Startseite. Den Ordner `kurs-prototyp/` **nicht** auf die öffentliche Website hochladen: Er enthält die vollständigen Kursinhalte ohne Login.

**Lokal ansehen:** `index.html` im Browser öffnen, oder `python3 -m http.server` im Ordner starten und `http://localhost:8000` aufrufen.

**Vor dem Livegang:** Die offenen Punkte in [PROJEKT-DOKUMENTATION.md](PROJEKT-DOKUMENTATION.md) klären (Abschnitte 6 bis 8). Auf den Rechtsseiten sind sie als „Zur Prüfung“ markiert.

**Recherche und Kursbuch:** [KURS-RECHERCHE.md](KURS-RECHERCHE.md) enthält Quellen zu Hygiene in Niedersachsen, Nickel-Grenzwerten und Kanülenmaßen, eine Gliederung für die neuen Module 03 und 11 sowie die Korrekturliste fürs Kursbuch.

**Online-Kurs („Fahrschule“):** `online-kurs.html` ist die Verkaufsseite. `kurs-prototyp/` ist ein lauffähiger Prototyp des Kurses (11 Module, 103 Lektionen mit Erklärung, Grafiken und Pflichtfragen, Modulprüfungen, Fehler-Training, Prüfungssimulation, Glossar, Checklisten) zum Testen und als Vorlage für die spätere Kursplattform. Die Inhalte liegen in `kurs-prototyp/inhalte/`, ein Modul pro Datei. Zum Ansehen `kurs-prototyp/index.html` im Browser öffnen.

**Chat-Assistent:** `assets/chatbot.js` und `assets/chatbot.css` (rein im Browser, keine Cookies, kein Server, speichert nichts), eingebunden auf allen Seiten in Deutsch, Englisch und Spanisch (Sprache nach `<html lang>`). Das Wissen steht in `assets/chatbot-wissen.js` und wird mit `python3 werkzeuge/chatbot-wissen.py` aus `index.html` und `online-kurs.html` (sowie `en/`, `es/`) erzeugt, ergänzt um recherchiertes Allgemeinwissen zu Pflege, Heilungszeiten und Entzündungszeichen (Quellen APP, NHS, HealthLinkBC im Skript). Bei akuten Beschwerden hängt der Assistent einen Hinweis auf ärztliche Abklärung an. Nach Änderungen an Paketen, Preisen, Modulen oder FAQ neu erzeugen.
