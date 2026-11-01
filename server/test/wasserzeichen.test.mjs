// Prüft das persönliche Wasserzeichen im Kursbuch-PDF (läuft ohne Server: node --test test/wasserzeichen.test.mjs)
import test from "node:test";
import assert from "node:assert/strict";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { wasserzeichen } from "../src/index.js";

test("Jede Seite trägt Inhaber und Bestellnummer, auch mit Umlauten", async () => {
  const d = await PDFDocument.create();
  const f = await d.embedFont(StandardFonts.Helvetica);
  for (let i = 1; i <= 4; i++) d.addPage([420, 595]).drawText("Seite " + i, { x: 50, y: 500, size: 18, font: f });
  const aus = await PDFDocument.load(await wasserzeichen(await d.save(), "Jürgen Müller · jm@example.com", "kauf:abc"));
  assert.equal(aus.getPageCount(), 4);
  assert.match(aus.getSubject(), /^Lizenziert für Jürgen Müller · jm@example\.com · PA-[0-9A-F]{8} · /);
  assert.ok(aus.getKeywords().includes("kauf:abc"));
  // Zeichen außerhalb der Standardschrift (z. B. kyrillisch) führen nicht zum Absturz
  await wasserzeichen(await d.save(), "Иван", "kauf:x");
});
