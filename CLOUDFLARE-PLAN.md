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
| `CLOUDFLARE_API_TOKEN` (neuer Token, der alte für Bilder bleibt) | Cloudflare → My Profile → API Tokens → Create Token → „Custom token“ | Account: Cloudflare Pages Bearbeiten, Workers Scripts Bearbeiten, D1 Bearbeiten; Zone (piercingakademie.de): DNS Bearbeiten |
| `CLOUDFLARE_ACCOUNT_ID` | ist schon bekannt | – |
| `STRIPE_SECRET_KEY` | Stripe → Entwickler → API-Schlüssel → **eingeschränkter Schlüssel**, zuerst im **Testmodus** (`rk_test_…`) | Checkout Sessions lesen, Kunden lesen, Webhook-Endpunkte schreiben, Payment Links schreiben |
| `RESEND_API_KEY` | resend.com → API Keys | Sending access |

Außerdem:
1. **Domain** `piercingakademie.de` registrieren (falls noch nicht geschehen) und in Cloudflare hinzufügen, damit DNS dort liegt.
2. Unter **Network access → Allowed domains** ergänzen: `api.stripe.com`, `api.resend.com` (dazu bleiben `api.cloudflare.com` und die Paketmanager).
3. Neuen Chat starten, damit die Einstellungen greifen.

## Reihenfolge
1. Fahrschule auf Englisch und Spanisch übersetzen (läuft).
2. Login, Datenbank und Webhook bauen und lokal testen (geht ohne deine Schlüssel).
3. Mit Test-Schlüsseln auf Cloudflare veröffentlichen, Testkauf mit Testkarte.
4. Datenschutzerklärung um Cloudflare und Resend ergänzen.
5. Umschalten auf Live.
