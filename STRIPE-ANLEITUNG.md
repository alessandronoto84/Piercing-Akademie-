# Stripe einrichten: Kurs direkt auf der Website verkaufen

Stand: 01.11.2026. Die Website ist vorbereitet (`assets/zahlung.js`, `danke.html`, AGB § 2 und § 6, Datenschutz Abschnitt 5). Es fehlen nur die drei Bezahl-Links aus deinem Stripe-Konto.

**So funktioniert es:** Auf jeder Preiskarte steht dann „Jetzt buchen“. Der Knopf führt auf eine sichere Bezahlseite von Stripe (ein „Payment Link“). Dort zahlt der Kunde mit der Zahlungsart seiner Wahl. Danach landet er auf unserer Seite „Danke für deine Buchung“, und du bekommst von Stripe eine E-Mail. Die Website selbst sieht keine Zahlungsdaten. Unter jedem Kaufknopf bleibt „Erst Fragen stellen“ für Unentschlossene.

> **Vorher klären:** Verkauf des Online-Kurses erst nach der Prüfung zum Fernunterrichtsgesetz (STARTLISTE Punkt 1). Und für den Online-Kurs braucht es noch einen Zugang mit Login (siehe Abschnitt „Zugang zum Kurs“ unten).

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

Oben rechts im Dashboard den **Testmodus** einschalten und alles von Abschnitt 3 dort einmal anlegen. Mit der Testkarte `4242 4242 4242 4242` (beliebiges künftiges Datum, beliebige Prüfziffer) durchspielen. Wenn alles passt, dasselbe im Live-Modus anlegen.

## 3. Drei Produkte mit Bezahl-Link anlegen

Produktkatalog → **Produkt hinzufügen**, je Paket einmal:

| Produkt | Preis | Beschreibung (kurz) |
|---|---|---|
| Piercing Akademie – Basis | 249,00 € einmalig | Online-Kurs mit 11 Modulen, Abschlusstest, Teilnahmebescheinigung, Kurs-Buch |
| Piercing Akademie – Praxis | 999,00 € einmalig | Alles aus Basis + 1 Praxistag in Lingen |
| Piercing Akademie – Komplett | 2.490,00 € einmalig | Alles aus Praxis + 1:1-Coaching, 2. Praxistag, 12 Monate Support |

**Steuer:** Bist du Kleinunternehmer (§ 19 UStG), keine Steuer einstellen. Sonst bei „Steuerverhalten“ **inklusive** wählen, denn die Preise auf der Website sind Endpreise.

Dann beim Produkt **„Zahlungslink erstellen“** und dort einstellen:

1. **Menge:** fest 1, nicht anpassbar.
2. **Rechnungsadresse erfassen:** ja (für Rechnungen).
3. **Telefonnummer erfassen:** ja (für die Terminabsprache).
4. **Benutzerdefinierte Felder** (Pflichtfelder, Typ „Dropdown“):
   - Feld 1, Bezeichnung „Volljährig“, einzige Option: `Ja, ich bin mindestens 18 Jahre alt`
   - Feld 2, Bezeichnung „Sofortiger Kursbeginn“, einzige Option: `Ja: sofort starten, mein Widerrufsrecht für den Online-Kurs erlischt`
     Der Online-Kurs wird nur mit sofortigem Start verkauft. Weil das Feld Pflicht ist und nicht vorausgewählt wird, muss der Kunde aktiv zustimmen. Das ist die Voraussetzung dafür, dass sein Widerrufsrecht wirksam erlischt.
5. **Kunden müssen die Nutzungsbedingungen akzeptieren:** einschalten. Stripe zeigt dann eine Checkbox mit Link zu den AGB.
6. **Benutzerdefinierter Text beim Bezahlknopf** (Text in deutscher Sprache):
   > Mit „Ja: sofort starten“ verlangst du ausdrücklich, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung des Online-Kurses beginnen, und bestätigst, dass du dadurch dein Widerrufsrecht für den Online-Kurs verlierst. Es erlischt mit der Freischaltung deines Zugangs (§ 356 Abs. 5 BGB). Für Praxistage, Coaching und das Kurs-Buch gilt die Widerrufsbelehrung in unseren AGB.
7. **Bezahlknopf:** Text „Bezahlen“ (macht die Zahlungspflicht klar).
8. **Nach der Zahlung:** „Bestätigungsseite nicht anzeigen“ → weiterleiten an `https://piercingakademie.de/danke.html`
9. **Rechnung:** „Rechnungs-PDF nach der Zahlung erstellen“ einschalten (Stripe berechnet dafür eine kleine Gebühr; alternativ Rechnungen selbst schreiben).
10. Nur bei **Komplett:** „Anzahl der Zahlungen begrenzen“ auf **10** (die Website verspricht 10 Plätze).

## 4. Links eintragen

Jeder Bezahl-Link sieht aus wie `https://buy.stripe.com/…`. Diese Links sind öffentlich und nicht geheim; du kannst sie mir einfach im Chat schicken. Ich trage sie in `assets/zahlung.js` ein:

```js
var STRIPE = {
  basis: "https://buy.stripe.com/…",
  praxis: "https://buy.stripe.com/…",
  komplett: "https://buy.stripe.com/…"
};
```

Ein leerer Eintrag bedeutet: Diese Karte zeigt weiter „… wählen“ und führt zum Anfrageformular. So kannst du zum Beispiel erst Praxis und Komplett verkaufen und Basis später freischalten.

**Wichtig:** Schick mir nie den geheimen API-Schlüssel (`sk_live_…`) im Chat. Für die Links brauche ich ihn nicht.

## 5. Nach jeder Zahlung (solange es noch keine automatische Freischaltung gibt)

1. Stripe-E-Mail prüfen: Paket, Name, Telefon und die Zustimmung „Sofortiger Kursbeginn“.
2. **Sofort** den Zugang freischalten und dem Kunden eine E-Mail mit Zugang und Vertragsbestätigung schicken. Diese Bestätigung ist Pflicht (§ 312f BGB). Ohne sie erlischt das Widerrufsrecht nicht, der Kunde könnte dann trotz Zugang 14 Tage lang widerrufen. Die PDF-Datei der AGB (`agb.html` als PDF gespeichert) anhängen. Vorlage:

   > Betreff: Deine Buchung bei der Piercing Akademie – Zugang zum Online-Kurs
   >
   > Hallo [Name],
   >
   > vielen Dank für deine Buchung des Pakets [Basis/Praxis/Komplett] zum Preis von [Betrag] € am [Datum].
   >
   > Dein Zugang zum Online-Kurs: [Link / Zugangsdaten]
   >
   > Du hast im Bestellvorgang ausdrücklich verlangt, dass wir vor Ablauf der Widerrufsfrist mit der Bereitstellung des Online-Kurses beginnen, und bestätigt, dass du dadurch dein Widerrufsrecht für den Online-Kurs verlierst. Mit der Freischaltung deines Zugangs ist dein Widerrufsrecht für den Online-Kurs erloschen (§ 356 Abs. 5 BGB).
   > [Nur Praxis/Komplett:] Für Praxistage und Coaching gilt die Widerrufsbelehrung in unseren AGB. Wir melden uns zur Vereinbarung deines Praxistags.
   >
   > Unsere AGB mit Widerrufsbelehrung findest du im Anhang.
   >
   > Viele Grüße
   > Alessandro Noto, Piercing Akademie
3. Praxistag-Termin vereinbaren.

Mit der Lösung „Login auf Cloudflare“ (siehe unten) passiert Schritt 2 automatisch direkt nach der Zahlung.

## Zugang zum Kurs: noch offen

Die Fahrschule ist bisher ein Prototyp ohne Login: Der Fortschritt liegt nur im Browser, und jeder mit dem Link kommt hinein. Vor dem Verkauf des Online-Kurses gibt es zwei Wege:

- **A. Eigene Lösung auf Cloudflare** (du hast schon ein Konto; im kostenlosen Rahmen):
  - Stripe meldet jede Zahlung automatisch (Webhook).
  - Der Kunde loggt sich mit seiner E-Mail und einem Code ein.
  - Fortschritt, Prüfungen und Bescheinigung liegen auf dem Server.
  - Das Design bleibt genau so wie jetzt.
- **B. Fertige Kursplattform mit Stripe-Anbindung** (zum Beispiel elopage, Teachable, Thinkific). Das geht schneller, kostet aber monatlich bzw. pro Verkauf, und die Fahrschule muss dort nachgebaut werden.
