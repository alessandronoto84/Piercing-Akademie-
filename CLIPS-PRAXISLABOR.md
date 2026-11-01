# Drehliste: Clips für das Praxislabor (Stichübungen am Silikonohr)

Stand: 01.11.2026. Die Clips zeigen allen Teilnehmern, wie gestochen wird (Praxislabor, Teil 2 „Zuschauen“). Im Paket Komplett gehören sie zu den Stichübungen mit dem Übungsset. Die Fahrschule hat für jeden Clip einen festen Platz. Solange ein Clip fehlt, sehen Teilnehmer an dieser Stelle nichts; im Prüfmodus (`#alles`) steht ein Hinweis „Clip fehlt noch“.

Technik-Clips werden **nicht** per KI erzeugt, sondern von dir im Studio gefilmt. Allgemeine Tipps zu Licht und Kamera stehen in `FOTO-VIDEO-ANLEITUNG.md`.

## So filmst du

- **Querformat 16:9**, mindestens 1080p, Handy auf Stativ oder Halterung, nicht aus der Hand.
- **Helles, gleichmäßiges Licht** von vorn oder seitlich, keine harten Schatten auf dem Ohr.
- Nur **Hände mit Handschuhen und das Silikonohr** im Bild, kein Gesicht nötig. Ruhiger, einfarbiger Hintergrund (Einmalunterlage).
- **Ohne Ton** oder mit ruhiger Stimme; was gesagt wird, steht ohnehin im Text der Übung. Keine Musik.
- **Länge:** 20 bis 60 Sekunden je Clip. Lieber ein ruhiger Durchgang als Schnitte.
- Nahaufnahme für die entscheidenden Momente (Markierung, Austritt, Kugel aufdrehen) – notfalls als zweite Einstellung drehen, ich schneide zusammen.
- Die Nadel kommt im Clip **sichtbar sofort in den Abwurfbehälter**: Das ist Teil der Lektion.

## Die sieben Clips

| Datei-Name | Übung | Was zu sehen ist | Länge |
|---|---|---|---|
| `labor-kanuele` | Die Kanüle sicher handhaben | Abwurfbehälter steht griffbereit, Kanüle aus der Verpackung, Schutzkappe ab, Stich ins Silikon, Nadel heraus und sofort in den Abwurf, Überzug bleibt stecken | 20–30 s |
| `labor-lobe` | Lobe stechen und Labret einsetzen | Markieren, Klemme mit Fenster, Stich von vorn, Nadel heraus und weg, Überzug kürzen, Labret einstecken und **durchdrücken**, Röhrchen ab, Kugel mit Klemmzange fest aufdrehen | 45–60 s |
| `labor-upper-lobe` | Upper Lobe: drei in einer Reihe | Drei Punkte anzeichnen, mit dem Messschieber nachmessen, dann ein Stich im Zeitraffer, am Ende die fertige Reihe von vorn | 30–45 s |
| `labor-helix` | Helix mit Klemmkugelring | Markieren an der Ohrkante, Klemme, Stich, Ring mit Ringöffnungszange öffnen, durch den Überzug schieben, Kugel einsetzen, Ring mit Ringschließzange schließen | 40–60 s |
| `labor-industrial` | Industrial | Beide Punkte anzeichnen, Barbell probehalber anhalten, zwei Stiche mit 16G freihand, Barbell durchführen, Kugeln aufdrehen; am Ende Seitenansicht: Stab gerade | 45–60 s |
| `labor-schmuck` | Schmuck sichern und wechseln | Kugel mit Kugelgreifer auf den Stab, Halten mit Klemmzange, BCR öffnen und schließen, Labret gegen BCR tauschen | 30–45 s |
| `labor-ablauf` | Der ganze Ablauf in Echtzeit | Gekürzter Gesamtablauf am Silikonohr von der Vorbereitung bis zum fertigen Schmuck, gern mit Zwischentiteln „Schritt 9“, „Schritt 12“ … | 60–90 s |

## So kommen die Clips in die Fahrschule

1. Clips mit genau diesen Namen schicken (z. B. `labor-lobe.mp4`), am einfachsten über Google Drive.
2. Ich wandle sie mit `kurs-prototyp/werkzeuge/clip-umwandeln.sh` um (MP4 + WebM + Standbild, Ton entfernt, klein für Handy) und trage sie in `kurs-prototyp/inhalte/clips.js` ein. Danach erscheinen sie automatisch in der passenden Übung.

## Übungsset für das Paket Komplett (Empfehlung, bitte bestätigen oder ändern)

Silikonohr · Venenverweilkanülen 18G und 16G · kleiner Nadelabwurfbehälter · Klemme (Snaptile oder Gazeklemme) · Einmal-Hautmarker · Einmalhandschuhe und Einmalunterlage · Übungsschmuck: Labret, Klemmkugelring (BCR), Barbell 38 mm · Schere. Die Liste steht in `kurs-prototyp/inhalte/praxislabor.js` (`KURS.labor.stich.set`) und lässt sich dort anpassen.
