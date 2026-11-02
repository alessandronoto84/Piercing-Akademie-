# Stripe einrichten: Kurs direkt auf der Website verkaufen

Stand: 01.11.2026. Website und Server sind fertig vorbereitet: Preiskarten, eigene Bestellseite (`bestellen.html`, DE/EN/ES), `assets/bestellen.js`, Server-Schnittstelle `/api/bestellen`, Stripe-Webhook, `danke.html`, AGB § 2 und § 6, Datenschutz Abschnitt 5. **Bezahl-Links (Payment Links) brauchst du nicht mehr.**

**So funktioniert es:**
1. Auf jeder Preiskarte steht „Jetzt buchen“ (erst sobald der Server einen Stripe-Schlüssel hat, vorher bleibt es beim Anfrageformular).
2. Der Knopf führt zur **Bestellseite**: Paket (änderbar), Leistungen, Gesamtpreis „Endpreis inkl. MwSt.“, zwei Pflicht-Häkchen:
   - mindestens 18 Jahre und AGB akzeptiert (Widerrufsbelehrung und Datenschutz zur Kenntnis genommen),
   - ausdrücklicher Wunsch nach sofortigem Beginn des Online-Kurses und Kenntnis, dass das Widerrufsrecht dafür mit der Freischaltung erlischt (§ 356 Abs. 5 BGB).
3. Knopf **„Zahlungspflichtig bestellen“** (Pflichtbeschriftung nach § 312j BGB). Der Server speichert Zeitpunkt und Fassung der Häkchen als Nachweis, legt bei Stripe eine Bezahlsitzung mit dem Preis **aus dem Server** an (nicht aus dem Browser) und leitet zu Stripe weiter.
4. Kunde gibt bei Stripe E-Mail, Rechnungsadresse und Zahlungsart an und zahlt.
5. Stripe meldet die Zahlung an den Webhook: Zugang wird angelegt, die Willkommens-E-Mail mit Vertragsbestätigung und Zustimmung (§ 312f BGB) geht automatisch raus.

**Einzelprodukt:** Kursbuch digital (vorläufig 19,90 €; 24 Monate Lesezugang in der Fahrschule, keine Download-Datei; gedruckt verlinken wir auf Amazon). Es läuft über dieselbe Bestellseite und denselben Webhook. Das Praxiskit gibt es nicht mehr einzeln: Übungsmaterial ist nur im Paket Komplett dabei. Dafür fragt Stripe beim Paket Komplett die Lieferadresse ab, und du bekommst die E-Mail „Versand: Übungsset (Paket Komplett)“ mit der Adresse.

**Preise ändern:** in `server/src/index.js` (`PAKETE`, in Cent) **und** auf der Website (`index.html`, `bestellen.html`, danach `python3 werkzeuge/sprachen/bauen.py`).

> Verkauft wird über dein Einzelunternehmen (740 Piercing); die Preise sind Endpreise inkl. MwSt.

## 1. Konto vorbereiten (Stripe-Dashboard, dashboard.stripe.com)

1. **Konto aktivieren:** Geschäftsdaten, Bankkonto für Auszahlungen und Steuerangaben vollständig ausfüllen.
2. **Öffentliche Angaben** (Einstellungen → Unternehmen → Öffentliche Details):
   - Name: **Piercing Akademie**
   - Support-E-Mail und Telefon
   - **AGB-URL:** `https://piercingakademie.de/agb.html`
   - **Datenschutz-URL:** `https://piercingakademie.de/datenschutz.html`
3. **Zahlungsarten** (Einstellungen → Zahlungen → Zahlungsmethoden). Empfohlen:
   - Karten, dazu automatisch **Apple Pay** und **Google Pay**
   - **PayPal** (dafür wird das PayPal-Konto in Stripe verbunden)
   - **Klarna** (Rechnung und Ratenkauf; gut bei 999 € und 2.490 €)
   - **SEPA-Lastschrift**. Achtung: Diese Zahlung ist erst nach einigen Tagen endgültig bestätigt; den Kurszugang erst danach freigeben.
4. **E-Mails** (Einstellungen → Kunden-E-Mails): „Erfolgreiche Zahlungen“ einschalten, damit der Kunde eine Quittung bekommt. Unter Kommunikationseinstellungen auch für dich selbst eine Benachrichtigung bei jeder Zahlung aktivieren.

## 2. Erst im Testmodus probieren

Oben rechts im Dashboard den **Testmodus** einschalten und Schlüssel und Webhook aus Abschnitt 3 zuerst im Testmodus anlegen. Mit der Testkarte `4242 4242 4242 4242` (beliebiges künftiges Datum, beliebige Prüfziffer) durchspielen. Wenn alles passt, dasselbe im Live-Modus anlegen.

## 3. Schlüssel und Webhook

Alle Schlüssel gehören in die **Umgebungseinstellungen** (Network secrets) bzw. später mit `wrangler secret put` in den Worker, **nie in den Chat**.

1. **Eingeschränkter API-Schlüssel** (Entwickler → API-Schlüssel → Eingeschränkten Schlüssel erstellen), Name „Website“:
   - **Checkout Sessions: Schreiben** – mehr braucht die Website nicht.
   - Als Secret `STRIPE_SECRET_KEY` hinterlegen (zuerst `rk_test_…`, für den Livegang `rk_live_…`).
2. **Webhook** (Entwickler → Webhooks → Endpunkt hinzufügen):
   - URL: `https://piercingakademie.de/api/stripe`
   - Ereignisse: `checkout.session.completed` und `checkout.session.async_payment_succeeded` (für SEPA/Klarna, die später bestätigt werden)
   - Das Signatur-Geheimnis (`whsec_…`) als Secret `STRIPE_WEBHOOK_SECRET` hinterlegen.
3. **Testkauf** im Testmodus mit `4242 4242 4242 4242`: Danach muss die Willkommens-E-Mail kommen und der Login in die Fahrschule funktionieren.

## 4. Rechnungen

Stripe fragt die Rechnungsadresse ab. Rechnungen kannst du aus dem Dashboard erstellen oder in Stripe „Rechnungen nach Zahlung“ aktivieren (kostet bei Stripe eine kleine Gebühr pro Rechnung). Den Steuerausweis (MwSt. bzw. § 19 UStG, OSS bei Kunden im EU-Ausland) mit dem Steuerberater festlegen.
