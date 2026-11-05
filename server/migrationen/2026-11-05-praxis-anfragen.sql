-- Gespeicherte Anfragen für Praxis/Komplett mit Bestätigung und Zahlungslink, 05.11.2026.
-- Einmal auf bestehende Datenbanken anwenden (wie die anderen Migrationen).
CREATE TABLE IF NOT EXISTS praxis_anfragen (
  id TEXT PRIMARY KEY,              -- zufällige Kennung, steht (signiert) in den Links für Akademie und Kunde
  zeit TEXT,                        -- Eingang der Anfrage (ISO)
  paket TEXT,                       -- praxis | komplett
  name TEXT,
  email TEXT,
  telefon TEXT,
  praxis_termine TEXT,              -- Wunschtermine (JSON-Liste)
  telefon_termin TEXT,
  telefon_zeit TEXT,
  nachricht TEXT,
  sprache TEXT,
  bestaetigt_termine TEXT,          -- von der Akademie nach dem Telefonat bestätigte Praxistage (JSON-Liste)
  bestaetigt_am TEXT,
  bezahlt INTEGER DEFAULT 0
);
