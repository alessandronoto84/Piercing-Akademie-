-- Datenbank (Cloudflare D1) der Piercing Akademie
CREATE TABLE IF NOT EXISTS kunden (
  email TEXT PRIMARY KEY,           -- kleingeschrieben, aus der Stripe-Zahlung
  name TEXT,
  paket TEXT,                       -- basis | praxis | komplett | admin
  sprache TEXT DEFAULT 'de',
  gekauft_am TEXT,                  -- ISO-Zeit der Zahlung
  gueltig_bis TEXT,                 -- Zugang (12 Monate ab Freischaltung)
  stripe_session TEXT UNIQUE,       -- verhindert doppelte Anlage
  betrag INTEGER,                   -- Cent
  zustimmung TEXT,                  -- Wortlaut der Zustimmung zum sofortigen Kursbeginn
  freigeschaltet_am TEXT,           -- ab hier ist das Widerrufsrecht für den Online-Kurs erloschen
  gesperrt INTEGER DEFAULT 0,
  verdacht INTEGER DEFAULT 0        -- auffällig viele Geräte: Hinweis an die Akademie
);
CREATE TABLE IF NOT EXISTS codes (
  email TEXT PRIMARY KEY,
  code_hash TEXT,
  ablauf INTEGER,                   -- Unix-Sekunden
  versuche INTEGER DEFAULT 0,
  angefordert TEXT DEFAULT '[]'     -- Zeitpunkte der letzten Anforderungen (Begrenzung)
);
CREATE TABLE IF NOT EXISTS sitzungen (
  token_hash TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  erstellt INTEGER,
  zuletzt INTEGER,
  geraet TEXT
);
CREATE INDEX IF NOT EXISTS sitzungen_email ON sitzungen(email);
CREATE TABLE IF NOT EXISTS anmeldungen (
  email TEXT,
  zeit INTEGER,
  geraet TEXT,
  land TEXT
);
CREATE INDEX IF NOT EXISTS anmeldungen_email ON anmeldungen(email, zeit);
CREATE TABLE IF NOT EXISTS fortschritt (
  email TEXT PRIMARY KEY,
  daten TEXT,
  aktualisiert INTEGER
);
-- Elektronische Widerrufe (§ 356a BGB), aufbewahrt als Nachweis (3 Jahre)
CREATE TABLE IF NOT EXISTS widerrufe (
  eingang TEXT,                     -- ISO-Zeit des Eingangs
  email TEXT,
  name TEXT,
  vertrag TEXT,
  gebucht_am TEXT,
  nachricht TEXT,
  sprache TEXT
);
-- nur zur Begrenzung von Formular-Spam: Zeitpunkt und gehashte IP, wird nach einem Tag gelöscht
CREATE TABLE IF NOT EXISTS anfragen (
  zeit INTEGER,
  schluessel TEXT
);
CREATE TABLE IF NOT EXISTS bescheinigungen (
  nr TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  datum TEXT,
  richtig INTEGER,
  gesamt INTEGER
);
