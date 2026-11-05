# Plan: Website, Login und Bezahlschranke auf Cloudflare

Stand: 01.11.2026. Entscheidung: eigene Lösung auf Cloudflare (Alessandro Noto, 01.11.2026).

## So wird es aussehen

```
Kunde ──► piercingakademie.de (Cloudflare Pages: Website de/en/es)
   │
   ├─ „Jetzt buchen“ ──► Stripe-Bezahlseite ──► Zahlung ok
   │                                           │
   │                     Stripe meldet die Zahlung (Webhook) ──► Cloudflare-Funktion
   │                                                               ├─ legt Teilnehmer an (Datenbank D1)
   │                                                               └─ schickt E-Mail: Zugang + Vertragsbestätigung (§ 312f BGB)
   │
   └─ /kurs/ ──► Login per E-Mail-Code ──► Fahrschule
                    (Kursinhalte, Bilder und Clips nur mit gültiger Anmeldung abrufbar;
                     Fortschritt, Prüfungen und Bescheinigung auf dem Server)
```

- **Bezahlschranke:** Die Kursdateien liegen nicht mehr öffentlich, sondern werden nur nach Login ausgeliefert.
- **Login ohne Passwort:** Der Kunde gibt seine E-Mail ein und bekommt einen 6-stelligen Code. Gekauft ist mit der E-Mail-Adresse aus der Stripe-Zahlung.
- **Freischaltung:** Sie passiert sofort nach der Zahlung, mit der Pflicht-Zustimmung zum sofortigen Beginn. Das Widerrufsrecht für den Online-Kurs erlischt so wie in den AGB beschrieben.
- **Bescheinigung:** Die Nummer wird auf dem Server vergeben und ist über eine Prüfseite nachprüfbar, also fälschungssicher.
- **Prüfmodus mit Lösungen:** nur für deinen Admin-Zugang.
- **Kosten:** Cloudflare (Pages, Functions, D1) im kostenlosen Rahmen. Für den E-Mail-Versand nutzen wir zum Beispiel Resend (kostenlos bis 3.000 E-Mails im Monat).

## Was ich von dir brauche

Alle Schlüssel kommen in die **Umgebungseinstellungen** (Cloud-Umgebung → Edit → Network secrets), **nie in den Chat**:

| Variable | Wo anlegen | Rechte |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` (neuer Token, der alte für Bilder bleibt) | Cloudflare → My Profile → API Tokens → Create Token → „Custom token“ | **Account:** Workers Scripts Bearbeiten, D1 Bearbeiten, Workers R2 Storage Bearbeiten, Account Settings Lesen. **Zone** (Zone Resources: „All zones from an account“, also .de, .com, .org …): Zone Lesen, DNS Bearbeiten, Workers Routes Bearbeiten, Single Redirect Bearbeiten |
| `CLOUDFLARE_ACCOUNT_ID` | ist schon bekannt | – |
| `STRIPE_SECRET_KEY` | Stripe → Entwickler → API-Schlüssel → **eingeschränkter Schlüssel**, zuerst im **Testmodus** (`rk_test_…`) | Checkout Sessions schreiben (Website-Bestellungen), Webhook-Endpunkte schreiben (nur zum Einrichten) |
| `RESEND_API_KEY` | resend.com → API Keys | Sending access |

Außerdem:
1. **Domains** (gekauft: piercingakademie.de, .com, .org …) alle in Cloudflare hinzufügen (Free-Plan) und beim Anbieter die Nameserver auf die von Cloudflare umstellen. Hauptadresse ist piercingakademie.de; die anderen leite ich per Weiterleitung dorthin.
2. Unter **Network access → Allowed domains** ergänzen: `api.stripe.com`, `api.resend.com` (dazu bleiben `api.cloudflare.com` und die Paketmanager).
3. Neuen Chat starten, damit die Einstellungen greifen.

## Stand (01.11.2026)
Gebaut und lokal getestet (Ordner `server/`, 8 automatische Tests plus Browsertest):
- Website, Login-Seite (`/login.html`, Deutsch/Englisch/Spanisch) und Fahrschule unter `/kurs/` hinter der Bezahlschranke: ohne Anmeldung kein Zugriff auf Seiten, Texte, Bilder, Clips oder Vorlagen.
- Login per 6-stelligem Code (10 Minuten gültig, höchstens 5 Versuche, höchstens 5 Codes pro Stunde, nur einmal verwendbar), Sitzungs-Cookie HttpOnly.
- Höchstens 2 Geräte gleichzeitig; eine dritte Anmeldung beendet die älteste. Anmeldeprotokoll (Zeit, Gerätetyp, Land); bei 6 verschiedenen Geräten bzw. Ländern in 30 Tagen bekommst du eine Hinweis-E-Mail.
- Wasserzeichen mit der E-Mail-Adresse auf jeder Kursseite und im Ausdruck.
- Stripe-Webhook mit Signaturprüfung: legt den Zugang an (Paket aus den Link-Metadaten, Sprache aus der Website), keine Doppelanlage, SEPA erst nach Zahlungseingang; schickt Zugang und Vertragsbestätigung mit Zustimmungstext (§ 312f BGB) in der Sprache des Käufers.
- Widerrufsrecht für den Online-Kurs erlischt mit der ersten Anmeldung (Zeitpunkt wird gespeichert).
- Fortschritt auf dem Server; Bescheinigung wird einmalig ausgestellt, Name danach fest, Nummer unter `/pruefen?nr=…` prüfbar.
- Prüfmodus mit Lösungen nur für Admin-Adressen (`ADMIN_EMAILS`).
- Nächtliche Löschung nach den Fristen der Datenschutzerklärung.
- Grenzen: Bildschirmfotos und Abfilmen lassen sich technisch nie ganz verhindern; das Wasserzeichen macht solche Kopien aber zurückverfolgbar.

Lokal starten: `cd server && npm install && npm run db:lokal && npm run dev` (mit `.dev.vars`: `DEV=1`, `CODE_PFEFFER=…`, `STRIPE_WEBHOOK_SECRET=whsec_…`; im DEV-Modus steht der Code in der Antwort statt in einer E-Mail). Tests: `BASIS=http://127.0.0.1:8787 node --test test/server.test.mjs`.

## Testadresse (05.11.2026)
Bis die Domains bei Cloudflare sind, läuft alles unter **https://piercing-akademie-test.alessandronoto84.workers.dev** (Abschnitt `[env.test]` in `server/wrangler.toml`): eigene Datenbank `piercing-akademie-test` (Tabellen angelegt), Stripe im Testmodus, kein Kursbuch (R2 noch nicht aktiv), für Suchmaschinen gesperrt (`X-Robots-Tag: noindex`). E-Mails gehen bis zur Domain-Bestätigung bei Resend nur vom Absender `onboarding@resend.dev` und nur an die E-Mail-Adresse des Resend-Kontos.

**Veröffentlichen über Cloudflare Workers Builds** (Cloudflare holt den Code selbst von GitHub): Aus dieser Cloud-Umgebung klappt `wrangler deploy` nicht, weil der Netzwerk-Proxy beim Hochladen der Website-Dateien den Einmal-Schlüssel von Cloudflare durch den API-Token ersetzt (401). Einstellungen in Cloudflare: Pfad `server`, Build-Befehl `npm ci && node werkzeuge/oeffentlich.mjs`, Deploy-Befehl `npx wrangler deploy --env test`. Datenbank, Geheimnisse (`wrangler secret put … --env test`) und Stripe-Webhook richte ich weiter von hier aus ein.

## Reihenfolge
1. Fahrschule auf Englisch und Spanisch übersetzen.
2. ~~Login, Datenbank und Webhook bauen und lokal testen~~ (erledigt).
3. Mit Test-Schlüsseln auf Cloudflare veröffentlichen, Testkauf mit Testkarte.
4. ~~Datenschutzerklärung um Cloudflare und Resend ergänzen~~ (erledigt; Auftragsverarbeitungsverträge bei der Einrichtung abschließen).
5. Umschalten auf Live.


## Ergänzung: Kursbuch online (privater Speicher R2)
Das Kursbuch wird nur online in der Fahrschule gelesen, es gibt keine Download-Datei. Seitenbilder und Suchtext liegen in einem privaten R2-Bucket, nie im öffentlichen Ordner und nie im Git-Repository.
1. Aus dem Buch-PDF Seiten und Suchtext erzeugen: `python3 werkzeuge/buch-seiten.py Kursbuch.pdf buchseiten/`
2. `npx wrangler r2 bucket create piercing-akademie-dateien`
3. Hochladen: `for f in buchseiten/*; do npx wrangler r2 object put piercing-akademie-dateien/buch/$(basename $f) --file=$f --remote; done`
Angemeldete Leser (alle Kurspakete und Käufer von „Kursbuch digital“) bekommen jede Seite einzeln unter `/kurs/buch/seite-NNN.webp` (ohne Zwischenspeicherung, höchstens 300 Seiten pro Stunde) und suchen über `/api/buch/suche`. Das Wasserzeichen mit der E-Mail liegt in der Fahrschule über jeder Seite. Der API-Token braucht zusätzlich das Recht „Workers R2 Storage: Bearbeiten“. Der kostenlose Workers-Tarif reicht dafür.

**Übersetzungen (Englisch, Spanisch):** Die übersetzten Seitentexte liegen als `text.en.json` und `text.es.json` (Format wie `text.json`: `{"seiten":[[nr,"Markdown"],…]}`) im selben Ordner `buch/` – nie im Repository. Hochladen wie oben, z. B. `npx wrangler r2 object put piercing-akademie-dateien/buch/text.en.json --file=buchseiten/text.en.json --remote`. Englische und spanische Leser sehen in der Fahrschule den übersetzten Text (`/api/buch/seite?nr=N&sprache=en|es`, zählt zur selben Abrufbremse) und können per Knopf die deutsche Originalseite einblenden; die Suche läuft in ihrer Sprache (`/api/buch/suche?q=…&sprache=en|es`). Fehlt eine Übersetzungsdatei, zeigt die Fahrschule „Diese Seite ist gerade nicht verfügbar“ – die deutsche Originalseite bleibt per Knopf erreichbar.
