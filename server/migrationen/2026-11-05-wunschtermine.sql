-- Wunschtermine und Telefonnummer bei der Bestellung (Praxis und Komplett), 05.11.2026.
-- Einmal auf bestehende Datenbanken anwenden:  npx wrangler d1 execute DATENBANK [--env test] --remote --file=migrationen/2026-11-05-wunschtermine.sql
ALTER TABLE bestellungen ADD COLUMN telefon TEXT;
ALTER TABLE bestellungen ADD COLUMN praxis_termine TEXT;
ALTER TABLE bestellungen ADD COLUMN telefon_termin TEXT;
ALTER TABLE bestellungen ADD COLUMN telefon_zeit TEXT;
