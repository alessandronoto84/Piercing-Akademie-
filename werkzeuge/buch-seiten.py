"""Erzeugt aus dem Kursbuch-PDF die Seitenbilder und den Suchtext für den Online-Leser der Fahrschule.

Aufruf:  python3 werkzeuge/buch-seiten.py Kursbuch.pdf [weitere Teil-PDFs …] ZIELORDNER
Ergebnis im ZIELORDNER (NICHT ins Git-Repository legen, das Buch bleibt privat):
  seite-000.webp … seite-NNN.webp   Seitenbilder (1000 px breit), Buchseite = PDF-Seite − 1
  text.json                         {"seiten": [[seitenzahl, "Text"], …]} für die Volltextsuche (Texterkennung)
Hochladen in den privaten R2-Speicher (Ordner buch/):
  for f in ZIELORDNER/*; do npx wrangler r2 object put piercing-akademie-dateien/buch/$(basename $f) --file=$f --remote; done
Braucht: pdftoppm (poppler), tesseract mit deutschem Sprachpaket, Pillow.
"""
import json, os, subprocess, sys, tempfile
from PIL import Image

def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    pdfs, ziel = sys.argv[1:-1], sys.argv[-1]
    os.makedirs(ziel, exist_ok=True)
    seiten, nr = [], 0
    with tempfile.TemporaryDirectory() as tmp:
        for t, pdf in enumerate(pdfs):
            subprocess.run(["pdftoppm", "-r", "150", "-png", pdf, os.path.join(tmp, f"t{t}")], check=True)
        for f in sorted(os.listdir(tmp)):
            pfad = os.path.join(tmp, f)
            buchseite = nr  # PDF-Seite 1 = Inhaltsverzeichnis (Seite 0)
            img = Image.open(pfad).convert("RGB")
            if img.width > 1000:
                img = img.resize((1000, round(img.height * 1000 / img.width)), Image.LANCZOS)
            img.save(os.path.join(ziel, f"seite-{buchseite:03d}.webp"), "WEBP", quality=72, method=6)
            text = subprocess.run(["tesseract", pfad, "-", "-l", "deu", "--psm", "3"], capture_output=True, text=True,
                                  env={**os.environ, "OMP_THREAD_LIMIT": "1"}).stdout
            seiten.append([buchseite, " ".join(text.split())])
            nr += 1
    with open(os.path.join(ziel, "text.json"), "w", encoding="utf-8") as o:
        json.dump({"seiten": seiten, "anzahl": nr}, o, ensure_ascii=False)
    print(nr, "Seiten nach", ziel)

if __name__ == "__main__":
    main()
