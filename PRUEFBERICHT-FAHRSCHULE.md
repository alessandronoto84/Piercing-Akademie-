# Prüfbericht Online-Kurs „Fahrschule“ (Piercing Akademie)

Stand der Prüfung: 21.11.2026. Geprüft wurden alle 11 Module (103 Lektionen), 575 Fragen (davon die automatisch erzeugten aus `fragen-generiert.js`), Praxislabor, Materialliste, Glossar, Checklisten, die PDF-Vorlagen sowie EN/ES (Struktur und Zahlen vollständig maschinell verglichen, Texte stichprobenartig je Modul, alle UI-Schlüssel). Alle 72 Bilder bzw. die in Lektionen eingebundenen Fotos, Grafiken, Clips und Titelbilder wurden im Browser (Playwright, 1100 px und 390 px) angesehen.
Im Repository wurde nichts geändert.

Dateipfade sind relativ zu `kurs-prototyp/`. Zeilennummern beziehen sich auf den aktuellen Stand der Dateien. Punkte mit **(prüfen)** sind begründete Zweifel, keine gesicherten Fehler.

Bereits bekannte, bewusste Abweichungen vom Buch (KURS-RECHERCHE.md, Abschnitte 7, 10, 13, 15) werden nicht noch einmal gemeldet.

---

## 1. Kritisch (fachlich falsch oder gefährlich)

### K1 – Klemme, Kugelgreifer und Schere: steril oder nur desinfiziert? Widersprüchlich und hygienisch falsch
- `inhalte/modul-05.js:21` – „Reinigung von Instrumenten ohne Hautkontakt (Klemmen, Scheren, Kugelgreifer) mit geeigneten Desinfektionsmitteln“
- `inhalte/modul-05.js:302` – „… Dazu zählen in erster Linie Nadeln, Nadelhalter und Klemmen.“ (müssen sterilisiert werden)
- `inhalte/modul-05.js:303` – „Werkzeuge ohne direkten Hautkontakt (Kugelgreifer, Klemme, Schere) werden in einem Ultraschallbad gereinigt und in einem Desinfektionsbad desinfiziert.“
- `inhalte/modul-07.js:148–149`, Fragen `modul-05.js:30`, `modul-05.js:310`, `modul-07.js:152–153`
- Praxisaufgabe „Werkzeug benennen und sortieren“ (`inhalte/praxislabor.js`, ab Zeile 149) lässt genau diese Einteilung üben.

**Problem:** Dieselbe Lektion (5-13) sagt erst „Klemmen sterilisieren“, zwei Sätze später „Klemme nur desinfizieren“. Außerdem berühren Schere und Kugelgreifer sehr wohl Sterilgut im Stichkanal: Die Schere kürzt den Kunststoffüberzug, der im frischen Stichkanal steckt (Modul 9, Schritt 14), der Kugelgreifer hält die sterile Kugel, die auf den Ersteinsatz im Wundkanal kommt (Schritt 18), die Klemmzange hält den Ersteinsatz (Schritt 19). Ein nur desinfiziertes Instrument kontaminiert damit den sterilen Ersteinsatz bzw. die Wunde. Die eigene Recherche (KURS-RECHERCHE.md, Abschnitt 3: „Instrumente, die in die Haut eindringen, müssen steril angewendet werden“) und die APP-Standards verlangen steriles Arbeiten für alles, was Wunde, Kanüle oder Ersteinsatz berührt.

**Korrektur:** Einheitlich formulieren: „Steril (einzeln verpackt sterilisiert oder steriles Einwegmaterial) sind alle Instrumente, die Haut, Schleimhaut, Stichkanal, Kanüle/Kunststoffüberzug oder den Ersteinsatz berühren: Klemmen, Nadelauffangrohr, Schere, Kugelgreifer, Klemmzange, Ringöffnungs-/Ringschließzange, Einführhilfe. Nur Gegenstände ohne Kontakt zum Sterilfeld (z. B. Taschenlampe, Messschieber außerhalb des Sterilfelds) werden gereinigt und desinfiziert.“ Fragen 5:30, 5:310, 7:152–153 und die Sortieraufgabe entsprechend anpassen; Hinweis „laut Kursbuch“ beim Buchsatz S. 16/S. 35 ergänzen.

### K2 – „Nadeln … im Autoklav sterilisiert“: suggeriert die Wiederaufbereitung von Kanülen
- `inhalte/modul-05.js:302` – „… müssen alle Instrumente und Werkzeuge, die zu einer Hautverletzung bzw. direktem Blutkontakt führen, vor und nach der Behandlung im Autoklav sterilisiert werden. Dazu zählen in erster Linie Nadeln …“
- `inhalte/modul-07.js:148` – „(Nadeln, Nadelhalter, Klemmen) muss steril sein: als steriles Einwegmaterial oder im Autoklav sterilisiert.“
- Frage `modul-05.js:308` („Alles, was zu Hautverletzung oder Blutkontakt führt, z. B. Nadeln und Klemmen“)

**Problem:** Widerspricht `modul-05.js:381` („Werden benutzte Kanülen aufbereitet? Nein“), Modul 1 und der Grafik „kreislauf“. Venenverweilkanülen sind Einmal-Medizinprodukte; eine Aufbereitung ist unzulässig. Ein Lernender kann den Satz als Erlaubnis lesen, Nadeln zu autoklavieren.
**Korrektur:** „Kanülen und Nadeln sind immer steriles Einwegmaterial und kommen sofort in den Abwurfbehälter. Wiederverwendbare Instrumente (Klemmen, Nadelhalter …) werden nach jedem Kunden aufbereitet und sterilisiert.“ „Vor und nach der Behandlung“ ersetzen durch „nach jeder Behandlung aufbereiten, steril verpackt lagern“.

### K3 – Der Ablauf in 26 Schritten hat Lücken in der Asepsis und wird so abgeprüft
- `inhalte/modul-09.js:32–39` (Schritte 5–10), `:55–62` (11–16), `:80` („Nochmals mit Kodan einsprühen.“)
- Abgeprüft über `fragen-generiert.js` (Reihenfolgefragen 9-0 bis 9-4) und Praxislabor („Alle 26 Schritte … aus dem Gedächtnis“).

**Problem:** Im ganzen Ablauf fehlen Händedesinfektion und Handschuhe, die Rasur (die Modul 2 eigens in die Einverständniserklärung schreibt), die Hautantiseptik nach dem Anzeichnen (der Beispielplan `modul-05.js:322` sagt selbst „desinfizieren, rasieren, erneut desinfizieren“) und der sofortige Nadelabwurf in Schritt 13. „Nochmals mit Kodan“ setzt eine erste Kodan-Anwendung voraus, die nirgends steht (auch Glossar `glossar-checklisten.js:36`). Lernende prägen sich einen unvollständigen aseptischen Ablauf als „Prüfungsstoff“ ein.
**Korrektur:** Buchnummerierung behalten, aber als „Ergänzung der Akademie“ Unterschritte einfügen, z. B. 7a „Hände desinfizieren, Handschuhe anziehen“, 8a „bei Bedarf rasieren“, 9a „Stelle mit Hautantiseptikum (z. B. Kodan) desinfizieren, Markierung nicht abwischen, Einwirkzeit abwarten“, 13 „… Nadel sofort in den Abwurfbehälter“. Mindestens eine Achtung-Box in Lektion 9-1/9-2. Für Mundpiercings siehe V4.

### K4 – Kreislaufabfall: falsche Reihenfolge in der Achtung-Box
- `inhalte/modul-09.js:113` – „Bekommt der Kunde … einen Kreislaufabfall …, gib ihm Traubenzucker … und etwas zu trinken. Lege ihn gegebenenfalls hin und lass ihn ruhen.“

**Problem:** Erst Zucker und Getränk, „gegebenenfalls“ hinlegen: Bei drohender Ohnmacht droht Sturz bzw. Verschlucken. Die Ergänzung direkt darunter (Zeile 114) und die Fragen (124, 128) sagen das Gegenteil; die rot hervorgehobene Achtung-Box ist aber das, was hängen bleibt. Gleiches in EN/ES.
**Korrektur:** „Sofort abbrechen, flach hinlegen und die Beine hochlagern. Erst wenn der Kunde wieder klar ist und sicher schlucken kann: Traubenzucker und etwas zu trinken. Bei Bewusstlosigkeit 112.“ (Buchinhalt ggf. als „laut Kursbuch“ dahinter.)

### K5 – KI-generierte Bilder für Anatomie und Technik (Verstoß gegen die Regel des Betreibers)
`inhalte/clips.js:1–3` bestätigt: Die fünf Clips sind „sanft animierte Modul-Titelbilder (Wan 2.2)“, also KI. Sie stehen nicht nur auf Modulkarten, sondern **in Lektionen**:
- `inhalte/modul-03.js:16` – Clip `anatomie-modelle` in „Der Aufbau der Haut“ (Anatomie). Das KI-Ohr ist anatomisch unbrauchbar (keine erkennbare Antihelix, kein Tragus, wie eine glatte Schale), der „Hautblock“ zeigt 6–7 Schichten statt drei; die Bildunterschrift „Oberhaut, Lederhaut und Unterhaut mit Fettgewebe“ passt nicht.
- `inhalte/modul-05.js:342` – Clip `autoklav` in „Der Autoklav“ (Technik).
- `inhalte/modul-06.js:156` – Clip `schmuck-titan` in „Schmuckformen“ (Technik): Der „Labret“ ist eine Scheibe mit nacktem Stift ohne Kugel/Gewinde – genau das, was die Lektion erklären soll, ist falsch dargestellt.
- `inhalte/modul-07.js:86` – Clip `instrumente` (Montage echter Buchfotos auf KI-Hintergrund, danach KI-animiert).
- `inhalte/modul-11.js:33` – Clip `studio-raum`: Topfpflanzen direkt neben Handwaschbecken und Autoklav im Behandlungsraum, Papierrollen lose auf der Liege – widerspricht Modul 5 („nur die Möbel und Gegenstände, die … unbedingt nötig sind“, `modul-05.js:164`).
- Titelbild Modul 3 (`inhalte/bilder-ki.js`, Eintrag "3", Datei `bilder/3.webp`): dasselbe KI-Ohr- und Hautmodell, Anatomie.
- Titelbild Modul 8 (`bilder/8.webp`): echtes Ohrfoto, Stecker einmontiert, Hintergrund KI-erweitert. Der als „Tragus“ beschriftete Stecker (alt-Text „Lobe, Upper Lobe, Tragus und Helix“) sitzt deutlich **vor** dem Ohr auf der Wangenhaut, nicht auf dem Tragus.

**Korrektur:** Die Clips aus den Lektionen nehmen (sie dürfen allenfalls als Symbolbild auf der Modulkarte bleiben, nicht als Fachabbildung), Titelbilder 3 und 8 ersetzen (z. B. echtes Foto Silikonohr/Hautmodell; beim Ohr den Tragus-Stecker auf den Tragus setzen oder ein Buchfoto ohne Montage nehmen). Bis echte Studioaufnahmen da sind, lieber kein Bild.

### K6 – 18G-Kanüle und 1,2-mm-Schmuck „in den Kunststoffüberzug gesteckt“ – geometrisch nicht möglich (prüfen)
- `inhalte/modul-07.js:44, 47` – „Der Schmuck wird in den Kunststoffüberzug der Kanüle gesteckt. Die Kanüle ist deshalb etwas dicker als der Schmuck, der durch sie hindurchgeht.“; Frage `:63`; `modul-09.js:60` („Ersteinsatz in den Kunststoffüberzug stecken“); Grafik `gauge` („nur knapp dicker als der Schmuck“).

**Problem:** 1,3 mm ist der **Außen**durchmesser der 18G-Kanüle. Der Kunststoffüberzug hat eine Wandstärke; sein Innendurchmesser liegt bei einer 18G-Venenverweilkanüle um etwa 1,0 mm. Ein 1,2-mm-Stab passt dann nicht *in* den Überzug, sondern höchstens stumpf an dessen Ende. Entsprechend 16G (1,7 mm außen) und 1,6-mm-Schmuck. Verbreitet ist deshalb die Kombination „eine Kanülenstufe größer als der Schmuck“ (16G für 1,2 mm, 14G für 1,6 mm). Die Akademie hat 18G/16G am 24.10.2026 bestätigt; dann stimmt aber die Begründung im Kurs nicht.
**Korrektur:** Mit dem tatsächlich verwendeten Material nachmessen (Innendurchmesser des Überzugs). Entweder die Erklärung ändern („Der Schmuck wird stumpf an das gekürzte Ende des Überzugs angesetzt und mit ihm durchgeschoben“) oder den Standard überdenken. Zusätzlich klar sagen, **an welchem Ende** (Austrittsseite/Spitze, die mit der Schere gekürzt wird) der Schmuck angesetzt wird (siehe F30).

### K7 – Betäubung: widersprüchliche Rechtslage zu verschreibungspflichtigem Lidocain
- `inhalte/modul-04.js:92` – „… in Deutschland verboten, verschreibungspflichtige Anästhetika, zum Beispiel auf Opiat-Basis, einzusetzen.“
- `inhalte/modul-04.js:117` – Lidocainsalbe „je nach Präparat rezeptfrei oder verschreibungspflichtig … Laut Akademie erlaubt, aber nicht empfohlen“; ebenso Glossar `glossar-checklisten.js:39`.

**Problem:** Wer beides liest, kann schließen, auch verschreibungspflichtiges Lidocain sei „laut Akademie erlaubt“. Opiate sind außerdem keine Lokalanästhetika. Jede Injektion (auch Lidocain) ist Heilkunde und für Piercer tabu – das steht nirgends ausdrücklich.
**Korrektur:** „Höchstens rezeptfreie, apothekenpflichtige Präparate zur äußerlichen Anwendung. Verschreibungspflichtige Präparate und jede Injektion sind Ärzten vorbehalten.“ Rechtslage (KURS-RECHERCHE.md, Abschnitt 5 „nicht geklärt“) vor Freigabe klären lassen **(prüfen)**.

### K8 – Antibiotische Salbe bei eitriger Entzündung empfehlen (prüfen)
- `inhalte/modul-10.js:86` – „Die Salbe „Tyrosur“ aus der Apotheke kann sehr helfen; lege dem Kunden nahe, sie zu kaufen.“; Frage `:94`.

**Problem:** Der Piercer empfiehlt bei Eiter eine antibiotikahaltige Salbe (Tyrothricin) – das ist Behandlung einer Infektion statt Verweis an den Arzt (vgl. `modul-11.js:110` „Bei Komplikationen verweist du den Kunden an einen Arzt“). Salben können den Stichkanal abdichten und widersprechen „Eiter muss abfließen können“ (Zeile 83). Fachverbände raten von Salben am frischen Piercing ab.
**Korrektur:** Als „laut Kursbuch“ kennzeichnen und ergänzen: „Bei Eiter schickst du den Kunden zum Arzt. Salben dichten den Stichkanal ab und werden nicht empfohlen.“ Die Frage nach dem Salbennamen aus der Prüfung nehmen.

---

## 2. Fehler

**F1 – Sterilisation „Faktor 10⁶“ widerspricht dem SAL** – `inhalte/modul-05.js:233–234`, Frage `:242`, Glossar `glossar-checklisten.js:54`, Grafiktext `inhalte/grafiken.js:246` („nach einer Sterilisation theoretisch einer“).
Steril heißt: Wahrscheinlichkeit ≤ 1 : 1 Million, dass auf einem Gegenstand noch *ein* Keim lebt (so richtig im Merke `modul-05.js:373`). „Aus einer Million Keimen bleibt einer übrig“ wäre gerade *nicht* steril. Korrektur: „Sterilisation: Restwahrscheinlichkeit für einen überlebenden Keim höchstens 1 : 1 000 000 (SAL 10⁻⁶); dafür ist eine Reduktion um deutlich mehr als 6 Zehnerpotenzen nötig.“ Grafiktext anpassen.

**F2 – Gesundheitsdaten-Absatz endet mit Fotos** – `inhalte/modul-02.js:133`: „In der Erklärung werden auch Gesundheitsdaten erhoben … Ihre Verarbeitung braucht eine ausdrückliche Einwilligung, die jederzeit widerrufen werden kann. Nach einem Widerruf dürfen die Bilder nicht mehr verwendet werden.“ Zwei Themen vermischt; „die Bilder“ ohne Bezug. Korrektur: zwei Absätze (Gesundheitsdaten: Art. 9 DSGVO; Fotos: Widerruf mit Wirkung für die Zukunft). Gleiches in EN/ES.

**F3 – Anwälte als Anspruchsteller** – `inhalte/modul-02.js:54` „… können Kunden, deren Angehörige oder Dritte (zum Beispiel Anwälte) Schadensersatz … fordern“ und Frage `:60` (richtig: „Kunden, Angehörige oder Dritte“) vs. Erklärung `:61` „Anwälte vertreten den Kunden; eigene Ansprüche haben sie nicht.“ Korrektur: Buchsatz als „laut Kursbuch“ kennzeichnen oder umformulieren („… kann der Kunde, meist über einen Anwalt, Schadensersatz fordern“); Antwort in `:60` anpassen.

**F4 – Adrenalin = Epinephrin mit gegensätzlichen Aussagen** – `inhalte/modul-04.js:155` „gefäßverengende Stoffe wie Adrenalin … verstärken die Wirkung“ vs. `:156` „Zusammen mit Mutterkornalkaloiden oder Epinephrin kann der Blutdruck gefährlich abfallen.“ Epinephrin ist Adrenalin; Lernende sehen zwei Aussagen zum selben Stoff. Korrektur: „Epinephrin (= Adrenalin)“ schreiben und erklären, dass die Gefahr in der Kombination liegt (Formulierung an die zitierte Gebrauchsinformation anlehnen) **(prüfen)**.

**F5 – Schmuckwechsel vor der Abheilung, obwohl verboten** – `inhalte/modul-08.js:136` Zunge „20 mm Barbell (nach 10 Tagen ggf. kürzer)“, Frage `:142`; `inhalte/modul-10.js:138` „Schmuckform oder Material ändern …“ (wildes Fleisch) vs. `modul-10.js:53`, `modul-01.js:100`, Pflegehinweise („Erst nach vollständiger Ausheilung darf der Schmuck gewechselt werden“). Korrektur: Ausnahme ausdrücklich nennen: „Kürzen (Downsizing) oder Wechsel bei Komplikationen nur durch den Piercer, steril, mit Ersteinsatz-Material.“

**F6 – Verweis ins Leere: Berufsgenossenschaft** – `inhalte/modul-05.js:215` „Kläre in Modul 11, bei welcher Berufsgenossenschaft du versichert bist.“ Modul 11 erwähnt die BG nur als falsche Antwort. Korrektur: in Modul 11 „Versicherung und Preise“ einen Punkt zur gesetzlichen Unfallversicherung/BG ergänzen (zuständige BG klären, **prüfen**) oder den Verweis streichen.

**F7 – „Innenohr“ bei Rook und Daith** – `inhalte/modul-07.js:88` „Bei Piercings im Innenohr, zum Beispiel Rook und Daith …“; `inhalte/modul-08.js:88` richtige Antwort „Im Innenohr passt keine Zange“. Das Innenohr liegt im Felsenbein. EN/ES sagen bereits korrekt „inner part of the ear“. Korrektur: „in der inneren Ohrmuschel“.

**F8 – „Nadelauffangbehälter“** – `inhalte/modul-01.js:86` (Erklärung). Verwechslungsgefahr mit dem „Nadelauffangrohr“. Korrektur: „Nadelabwurfbehälter“.

**F9 – Mehrdeutige Frage „Welches Gewebe heilt am schnellsten?“** – `inhalte/modul-03.js:54` (richtig: Schleimhaut). Laut Tabelle `modul-03.js:44` und `modul-10.js:46` heilt die Augenbraue (Weichgewebe) mit „ca. 1 Monat“ genauso schnell wie Zunge und Lippenbändchen; ebenso Diagrammtext `modul-10.js:50` „Schleimhaut heilt am schnellsten“. Korrektur: Frage auf konkrete Piercings umstellen oder Augenbraue gemäß Ergänzung (6–8 Wochen) angeben.

**F10 – Erzeugte Frage zum Lobe mit „richtigem“ Ablenker** – `inhalte/fragen-generiert.js`, Schlüssel "8-1": „Womit wird das Lobe laut Datenblatt gestochen? | 18G / 20G / **14G** / 16G“. Das Datenblatt (`modul-08.js:34`) nennt 14G (Tunnel) ausdrücklich, das Buch auch 16G. Korrektur in `werkzeuge/fragen-erzeugen.js`: alle im Hinweis genannten Stärken als Ablenker ausschließen. Außerdem: Abheilzeit-Frage Intim hat nur 3 Antworten (Schlüssel "10-2"), Labret-Frage „Welcher Schmuck … für das Labret? → Labret“ ist trivial.

**F11 – Modul 11: „Jede neue Prüfung stellt andere Fragen“ stimmt nicht** – `kurs.js:560` erzeugt „Zufällig aus 17 Fragen gezogen … Jede neue Prüfung stellt andere Fragen“, obwohl Modul 11 nur 17 Fragen hat und alle 17 gezogen werden. Korrektur: Satz nur anzeigen, wenn Pool > Prüfungsumfang, oder Modul 11 um Fragen ergänzen.

**F12 – „Kursbuch Ergänzung“ und „Kursbuch Modul 2 und 8“** – `kurs.js:400` und `:450` behandeln nur `seite: "Entwurf"` als Ergänzung. Lektionen mit `seite: "Ergänzung"` (3-3, 5-9, 6-6, 7-1, 10-5) zeigen in der Liste „Kursbuch Ergänzung“ und im Kopf „Im Kursbuch nachlesen: Ergänzung“; `modul-11.js:103` zeigt „Kursbuch Modul 2 und 8“. In EN/ES erscheint „Course book Ergänzung“, „Read up in the course book: Modul 2 und 8“, im Fragen-Feedback (`kurs.js:433`) „· Ergänzung“ bzw. „· Akademie“ unübersetzt. Korrektur: `seitenLabel` für „Ergänzung“, „Akademie“ und Modulverweise erweitern (Übersetzung über `tr`).

**F13 – Übungsvorlage widerspricht dem Paket Komplett** – `werkzeuge/vorlagen-erzeugen.mjs:226` bzw. `vorlagen/uebungsvorlage.pdf`, Seite 1: „Im Praxislabor wird nie gestochen. Gestochen wird erst am Praxistag unter Anleitung.“ Dagegen Praxislabor Teil 2 (`inhalte/praxislabor.js` ab Zeile 445: „Mit deinem Übungsset stichst du jetzt selbst: ins Silikonohr“) und das Übungsprotokoll derselben PDF. Auch der Dateikommentar `praxislabor.js:4` ist veraltet. Korrektur: „Bei den Trockenübungen wird nicht gestochen. Ins Silikonohr stichst du nur mit dem Übungsset (Paket Komplett); in Menschen nie.“

**F14 – Praxisaufgaben verlangen Material, das in Materialliste und Set fehlt** – `inhalte/praxislabor.js:486` (Lobe: „Klemmzange“), `:528` (Helix: „Ringöffnungs- und Ringschließzange“), `:566` (Schmuck sichern: „Kugelgreifer“, „Klemmzange“, Zangen), `:507ff.` (Upper Lobe: „drei 18G-Kanülen“, „drei Labrets“). Materialliste (`:330–440`) enthält weder Schere noch Klemmzange, Kugelgreifer oder Ringzangen; das Set (`:458`) enthält nur einen Labret. Korrektur: Materialliste und Set ergänzen (inkl. Schere für Basis/Praxis) oder Aufgaben anpassen.

**F15 – Eskimo: Beschreibung, Regel und Bild widersprechen sich (prüfen)** – `inhalte/modul-08.js:123` „Vertikal durch die Lippe bis unterhalb der Lippe … Nicht ins Lippenrot stechen.“ Ein vertikaler Stich „durch die Lippe“ beginnt im Lippenrot; das Datenblattfoto `bilder/eskimo.webp` zeigt die obere Kugel im Lippenrot. Korrektur: Lage mit dem Buch abgleichen und eindeutig beschreiben.

**F16 – Grafik „kreislauf“: „Ultraschall, 30 min“** – `inhalte/grafiken.js:263`. Widerspricht der eigenen Korrektur („Zeit und Temperatur nach Herstellerangabe“, `modul-05.js:365`); zudem fehlt der Schritt Desinfizieren. Korrektur: „Ultraschall, nach Herstellerangabe“ und Schritt „Desinfizieren/Spülen“ ergänzen (auch `grafiken-text.js:109, 379`).

**F17 – Grafik „ringe“: „Die blaue Markierung“** – `inhalte/grafiken.js:473` (und `grafiken-text.js:158, 428`). Die Markierungen sind goldbraun gestrichelt, nicht blau. Korrektur: „Die gestrichelte Markierung …“.

**F18 – Grafik „keimreduktion“: Text abgeschnitten** – `inhalte/grafiken.js:249` „Sporen nicht sicher erfasst“ wird am rechten Rand zu „Sporen nicht sicher erfass“ abgeschnitten (bei 1100 px sichtbar). Korrektur: viewBox verbreitern oder Text kürzen („Sporen nicht sicher“).

**F19 – Wangen-Grafik widerspricht dem Lektionstext** – `inhalte/grafiken.js:186` „N. facialis … tritt vor dem Ohr aus“; Glossar `glossar-checklisten.js:40` „fächert sich vor dem Ohr … auf“ vs. `modul-03.js:98` „tritt unterhalb des Ohrs aus dem Schädel“. Anatomisch: Austritt am Foramen stylomastoideum hinter/unter dem Ohr, Auffächerung in der Ohrspeicheldrüse vor dem Ohr. Korrektur: „tritt unter dem Ohr aus und fächert sich vor dem Ohr auf“.

**F20 – „alle Handflächen müssen benetzt sein“** – `inhalte/modul-05.js:85` (chirurgische Händedesinfektion, Hände **und Unterarme**). Korrektur: „alle Hautflächen“.

**F21 – „Grundregel aus Kap. 10“** – `inhalte/modul-06.js:204`. Lernende lesen „Modul 10“ (Pflege). Korrektur: „Kursbuch Kap. 10 (S. 74)“.

**F22 – Nickel: „laut EU-Nickelrichtlinie … weltweit“** – `inhalte/modul-06.js:56`. Eine EU-Regel gilt nicht weltweit; die Nickelrichtlinie ist seit 2009 in REACH Anhang XVII aufgegangen (so richtig in Zeile 75). Korrektur: „Diese Stähle können die EU-Grenzwerte für Nickel (REACH) einhalten und sind als Zweiteinsatz geeignet.“

**F23 – Dehnen „1 bis 2 mm pro Monat“ (prüfen)** – `inhalte/modul-08.js:34`, Frage `:38`. Üblich ist höchstens eine Stufe (ca. 1 mm) mit mehreren Wochen Pause; 2 mm pro Monat ist bei kleinen Größen eine Verdopplung und begünstigt Einrisse. Korrektur: „in kleinen Schritten (etwa 1 mm), frühestens nach einigen Wochen, ohne Gewalt“; Buchangabe als „laut Kursbuch“.

**F24 – Toilette mit „Abwurfbehälter“** – `inhalte/modul-11.js:38`. Gemeint ist vermutlich ein Abfallbehälter (Abwurfbehälter steht im Kurs für Kanülen). Korrektur: „Abfallbehälter mit Deckel“.

**F25 – Blackline „nahezu dauerhaft kratzbeständig“ vs. Ergänzung** – richtige Antwort `inhalte/modul-06.js:48` vs. `:44` „Beschichtungen können sich mit der Zeit abreiben“. Korrektur: „laut Hersteller“ in die Antwort.

**F26 – Stich-Grafik zeigt Einführen von der Eintrittsseite (prüfen)** – `inhalte/grafiken.js` (`G.stich`, Feld 4 „Schmuck rein“): Der Schmuck wird von oben (Eintrittsseite, „sichtbare Seite“) in den Überzug geschoben, die Kugel hinten nach. Beim Labret soll die Kugel aber vorn (Eintrittsseite) und die Platte hinten sitzen (`modul-09.js:57`, Praxislabor `:501`). Dann muss der Labret von der Austrittsseite angesetzt werden. Der Text sagt nirgends, an welchem Ende gekürzt und angesetzt wird. Korrektur: Grafik und Schritte 14–16 präzisieren („Spitze des Überzugs auf der Rückseite kürzen, Ersteinsatz dort ansetzen, nach vorn durchdrücken“), sofern das der Akademie-Technik entspricht.

**F27 – Frage „Lederhaut: Arterie, Vene und Nerv als Bündel“ (prüfen)** – `inhalte/modul-03.js:34`, Grafiktext `grafiken.js:510`. Größere Gefäß-Nerven-Bündel verlaufen eher in der Unterhaut; in der Lederhaut liegen Gefäßgeflechte. Korrektur: „in Lederhaut und Unterhaut“ oder Frage streichen.

**F28 – Erklärung ohne Bezug** – `inhalte/modul-03.js:33` Erklärung „Deshalb heilt er vom Rand her.“ zu „Durch welche Schichten führt ein Stichkanal?“ Korrektur: „Er durchquert Oberhaut, Lederhaut und Unterhaut (bzw. Knorpel).“

---

## 3. Bilder

**B1 – KI-Bilder für Anatomie/Technik** – siehe K5 (Clips `anatomie-modelle`, `autoklav`, `schmuck-titan`, `instrumente`, `studio-raum`; Titelbilder 3 und 8).

**B2 – „Schmuck aus G23-Titan. Kursbuch S. 55.“ (prüfen)** – `inhalte/modul-06.js:16`, `bilder/titan-schmuck.webp` (`bilder.js:203`, Seite 55). Seite 55 ist im Kurs die Chirurgenstahl-Seite (`modul-06.js:54`). Gezeigt werden Kugelreihen-Ringe und ein gebogener Nasenstecker (Nose Screw) – keine typischen Ersteinsätze. Korrektur: Herkunft prüfen; Bildunterschrift neutral („Schmuckbeispiele“) oder ein Bild der Ersteinsätze aus Titan nehmen.

**B3 – Rook und Daith kaum unterscheidbar (prüfen)** – `bilder/rook.webp` und `bilder/daith.webp` (Lektion 8-5) zeigen fast dieselbe Stelle in der oberen Conch. In der Ohr-Übersicht (`grafik ohr`, Lektion 3-1 und 8-1) liegt Nr. 4 „Daith“ mitten in der Ohrmuschel statt an der Helixwurzel direkt über dem Gehörgang am Tragus. Korrektur: Marker 4 an die Helixwurzel versetzen; für den Daith ein eindeutiges Foto.

**B4 – Wangen-Grafik: Beschriftung und Verlauf** – `grafik wange` (Lektion 3-3, 8-10). Die Nummer 4 (A. facialis) steht am Ende eines gelben Nervenasts, nicht an der roten Arterie. Der Speichelgang (türkis) reicht fast bis zur Nasolabialfalte; er biegt am Vorderrand des Kaumuskels nach innen ab. Korrektur: Nr. 4 an die rote Linie, Gang kürzen; Text siehe F19.

**B5 – Foto „Stechen am Ohr mit Handschuhen und Kanüle“ (prüfen)** – `inhalte/modul-09.js:54`, `bilder/stechen.webp`. Zu sehen ist eine Zange am Ohr; eine Venenverweilkanüle ist nicht zu erkennen. Bildunterschrift nennt S. 111, die Lektion S. 112. Korrektur: Bildunterschrift an das Gezeigte anpassen („Arbeit mit Klemme am Ohr“) oder Foto mit Braunüle.

**B6 – Abwurfbehälter-Foto** – `inhalte/modul-05.js:186`, `bilder/frei-abwurf.webp`: amerikanischer BD-Sammler mit „Biohazard“-Aufdruck im Freien. Zum Text (Entsorgung im Restmüll, deutsche Praxis) passt ein in Deutschland üblicher Behälter besser. Kein Fehler, aber verwirrend.

**B7 – Periodensystem markiert auch Titan** – `inhalte/modul-06.js:91`, `bilder/frei-metalle.webp`. Ti ist als kontaktallergenes Metall markiert, direkt in der Lektion, die G23-Titan als „antiallergen“ lehrt. Korrektur: Bildunterschrift ergänzen („Titanallergien sind sehr selten; entscheidend ist hier Nickel“).

**B8 – „Taschenlampe (grünes Licht)“** – `bilder/taschenlampe.webp` (Lektion 7-4) zeigt eine normale weiße Taschenlampe. Korrektur: Beschriftung „Taschenlampe (mit Grünlicht-Aufsatz/-Modus)“ oder passendes Foto.

**B9 – Labret-Foto: Abstand zum Lippenrot (prüfen)** – `bilder/labret.webp` (Lektion 8-8): Die Kugel sitzt sehr knapp am Lippenrot, der Text verlangt „mehr als 3 mm“. Ggf. anderes Foto.

**B10 – Eskimo-Foto** – siehe F15.

**B11 – Abheilzeiten-Diagramm** – `inhalte/modul-10.js:48–51`: Legende „Dunkel: sichere Mindestzeit“ passt nicht zu „ca.“-Werten (Zunge „ca. 1“ ist keine sichere Mindestzeit). Korrektur: „Dunkel: Richtwert bzw. Untergrenze, hell: Spanne“.

**B12 – Symbolbilder mit hygienisch fragwürdigen Details** – Titelbild 1 (`bilder/1.webp`): Druckverschlussbeutel statt Sterilverpackung, Schmuck unverpackt in offener Schale; Titelbild 10 (`bilder/10.webp`): nachfüllbare Haushalts-Sprühflasche, wo der Kurs sterile Kochsalzlösung empfiehlt (Pseudomonas-Thema in 10-5). Niedrige Priorität, aber angehende Piercer lernen auch aus Bildern.

Geprüft und passend: Pistole/Kanüle, Haut (2D/3D), Hautschichten (CC), Wundheilung, Lobe 3D, Schmerzleitung, Händedesinfektion 1–8, Studio 3D, Autoklav-Foto, Sterilgut, Ultraschallbad, Anodisieren, Gewinde, Stäbe, Überlänge, Kanüle, Kanülenfotos, Gauge, Biopsiestanze, Zangen, Hilfswerkzeuge, Einmalmaterial, alle übrigen Datenblattfotos (Lobe, Upper Lobe, Tragus, Anti-Tragus, Helix, Industrial, Allergie, Conch, Snug, Nostril, Septum, Augenbraue, Bridge, Smiley, Zunge, Cheek, Bauchnabel, Surface), Augenbrauen-Grafik, Perichondritis, Keloid, Staphylokokken. Keine seitenverkehrten oder doppelten Bilder gefunden; keine Bilder kaputt (außer den Buchseiten unter `#buch`, die lokal nicht im Repository liegen: 404 auf `buch/seite-001.webp` – erwartbar).

---

## 4. Sprache und Übersetzung

**S1 – Artikel in erzeugten Fragen** – `inhalte/fragen-generiert.js` (Generator `werkzeuge/fragen-erzeugen.js`): „für das Tragus“, „das Helix“, „das Rook“, „das Daith“, „das Conch“, „das Prinz Albert“; im Modultext heißt es „der Helix“ (`modul-03.js:55`), „der Rook“ (`modul-08.js:87`), „der Tragus“ (`:50`). Korrektur: im Generator „das Tragus-Piercing“ usw.

**S2 – Modulnummern uneinheitlich** – „Modul 01/05/08/09“ (`modul-02.js:99`, `praxislabor.js` z. B. Zeilen 42, 76, 115, 224, 445) vs. „Modul 9“, „Modul 3“ in den Modulen. Einheitlich „Modul 9“ im Fließtext.

**S3 – Uneinheitliche Begriffe** – Nadelabwurfbehälter (15×) / Abwurfbehälter (11×) / Nadelauffangbehälter (1×, F8); Einmal-Hautmarker / Einmalstift (`modul-09.js:37`) / Chirurgenstift; Kunststoffüberzug / Röhrchen / Kunststoffröhrchen / Kunststoffkanüle (`modul-08.js:197`, Prinz Albert). Vorschlag: „Nadelabwurfbehälter“, „Hautmarker“, „Kunststoffüberzug“ durchgehend; „Röhrchen“ einmal als Synonym einführen.

**S4 – „Isolierung“** – `inhalte/modul-05.js:19`. Ohne Erklärung unverständlich (Patientenisolierung? Abschirmung des Arbeitsplatzes?). Erklären oder streichen.

**S5 – „Anästhetika auf Opiat-Basis“** – `inhalte/modul-04.js:92, 103`. Opiate sind Schmerzmittel (Analgetika), keine Anästhetika. Korrektur: „verschreibungspflichtige Betäubungs- und Schmerzmittel (z. B. Opiate)“.

**S6 – „Alkoholiker“** – `modul-03.js:165`, `modul-10.js:89`. Neutraler: „Menschen mit hohem Alkoholkonsum“.

**S7 – Praxisaufgabe nennt falsche „Lektionen“** – `inhalte/praxislabor.js` (Aufgabe „pistole-kanuele“): „vergleiche sie mit den Lektionen „Die Gründe“ und „Pistole oder Kanüle …““. Das sind eine Liste und eine Grafik in der Lektion „Warum keine Ohrlochpistole“. Korrektur: „mit der Lektion „Warum keine Ohrlochpistole“ (Modul 1)“.

**S8 – EN „gauze clamp“, ES „pinza de gasa“ (prüfen)** – `inhalte/en/modul-08.js` (z. B. 109, 122), `inhalte/es/modul-07.js:87`. Wörtliche Übersetzung von „Gazeklemme“; im Englischen ist „sponge forceps“ bzw. „Pennington/Foerster forceps“ üblich, im Spanischen „pinza de anillos (Foerster)“. Mit Fachhändlerbezeichnungen abgleichen.

**S9 – EN/ES übernehmen die Inhaltsfehler** – K3, K4, F2, F3, F4, F5, F16, F17 stehen 1:1 auch in `inhalte/en/` und `inhalte/es/` bzw. `grafiken-text.js`; jede Korrektur dreisprachig nachziehen. (Umgekehrt ist EN/ES beim „Innenohr“ schon korrekt, F7.)

**S10 – UI-Reste auf Deutsch in EN/ES** – siehe F12 („Ergänzung“, „Akademie“, „Modul 2 und 8“).

Positiv: Struktur von EN und ES ist mit DE identisch (keine fehlenden Lektionen, Fragen oder Antworten), alle Zahlen stimmen überein, alle UI-Schlüssel aus `kurs.js`/`index.html` sind übersetzt, kein britisches Englisch gefunden (gray, anesthesia, jewelry, color …), Stichproben je Modul sprachlich gut.

---

## 5. Verbesserungsvorschläge

**V1 – § 228 StGB und Einwilligungsfähigkeit** (Modul 2, Lektion „Was das Strafgesetzbuch sagt“): Die Norm, die die Einwilligung regelt, fehlt. Ergänzen: Einwilligung nur wirksam, wenn der Kunde einwilligungsfähig ist (nicht alkoholisiert, versteht die Aufklärung) und die Tat nicht sittenwidrig ist.

**V2 – Kosten bei Komplikationen (§ 52 Abs. 2 SGB V)**: Krankenkassen beteiligen Versicherte an den Behandlungskosten von Piercing-Komplikationen. Gehört in die Aufklärung (Modul 2, Lektion „Aufklärung über Komplikationen“) und in die Muster-Erklärung.

**V3 – Ausweisnummer (prüfen)** – `modul-02.js:70, 77, 88`, Muster-PDF: Datensparsamkeit (Art. 5 DSGVO); Alternative „Ausweis vorgelegt, Alter geprüft: ja“ statt Nummer notieren. Vom Anwalt bestätigen lassen (STARTLISTE Punkt 2).

**V4 – Mundpiercings: Alkohol/Kodan nicht auf Schleimhaut** – Ablauf `modul-09.js:36, 80`, Checkliste „Arbeitsplatz“: Für Zunge, Lippenbändchen und Lippeninnenseite ein Schleimhautantiseptikum bzw. Mundspülung vor dem Stich nennen; Kodan (Hautantiseptikum) nicht in den Mund **(Fachinformation prüfen)**.

**V5 – Bauchnabel im Stehen anzeichnen, im Liegen stechen** – `modul-08.js:161`: Im Liegen verschiebt sich der Nabel; Markierung im Stehen kontrollieren.

**V6 – Ringe als Ersteinsatz im Knorpel** – Helix, Rook, Daith, Snug, Anti-Tragus erlauben BCR/Hufeisen. Ringe bewegen sich mehr und reizen frische Knorpelkanäle; einen Hinweis ergänzen, dass Stäbe/Labrets im Knorpel meist besser heilen **(prüfen, Akademie-Entscheidung)**.

**V7 – „Die längste Antwort ist die richtige“** – Bei 44 Fragen ist die richtige Antwort deutlich länger als alle Ablenker (z. B. `modul-02.js:44, 125`, `modul-05.js:308`, `modul-06.js:62`). Ablenker gleich lang formulieren oder richtige Antworten kürzen; Prüfliste lässt sich mit einem kleinen Skript erzeugen.

**V8 – Fast-Dubletten** – Augenbraue „nur äußeres Drittel“: `modul-03.js:75`, `:112`, `modul-08.js:114`; Cheek-Risiko: `modul-03.js:76`, `:79`, `:111`, `modul-08.js:153–154` (Lektion 8-10); Überlänge 4 mm: `modul-03.js:151`, `modul-06.js:203`, `modul-08.js:25`. In der Prüfungssimulation kann dieselbe Aussage mehrfach kommen. Je Thema eine Frage, die anderen variieren (Fall statt Fakt).

**V9 – Unbelegte Buchangabe in der Prüfung** – „Über 7000 Jahre (Algerien)“ (`modul-01.js:42`) wird in der Prüfungssimulation abgefragt, obwohl der Kurs selbst schreibt „keine unabhängige Quelle gefunden“ (`:33`). Aus dem Prüfungspool nehmen oder als „laut Kursbuch“ fragen (ist so formuliert, dennoch fragwürdig als Prüfungsstoff).

**V10 – Nicht nur Niedersachsen** – `modul-05.js:327`, `modul-11.js:19`: Andere Bundesländer haben eigene Hygieneverordnungen bzw. Merkblätter; Teilnehmer aus anderen Ländern (und EN/ES-Nutzer im Ausland) brauchen den Hinweis „Regeln deines Bundeslandes/Landes beim Gesundheitsamt erfragen“ **(prüfen, welche Länder)**.

**V11 – Checklisten vervollständigen** – `glossar-checklisten.js:103–111` „Instrumente aufbereiten“: Schritt „desinfizieren/spülen“ und „Freigabe und Dokumentation der Charge“ fehlen. `:84–92` „Arbeitsplatz vor jedem Kunden“: Hautantiseptikum, Schere, Kugelgreifer, Klemmzange (steril), Pflaster fehlen.

**V12 – Pflegehinweise-PDF** – `vorlagen/pflegehinweise.pdf`: „Octenisept nie bei Knorpelpiercings (Ohrmuschel, Helix, Tragus, Conch, Rook, Daith)“ – Nasenflügel/Nostril (laut `modul-03.js:43` Knorpel), Anti-Tragus, Snug, Industrial ergänzen oder „alle Ohr- und Nasenknorpel“ schreiben.

**V13 – Überlänge gilt für Stäbe** – `modul-06.js:197`, `modul-08.js:20`: „stets 4 mm Überlänge“; bei Ringen (Helix, Septum, Prinz Albert) zählt der Innendurchmesser. Einen Satz dazu.

**V14 – Hausmittel als richtige Antwort** – `modul-10.js:95` richtige Antwort „Kamille, verdünntes Teebaumöl oder Manukahonig“. Wenn überhaupt, als „laut Kursbuch“; nicht als prüfungsrelevantes Behandlungswissen.

**V15 – Lidocain-Einwirkzeit (prüfen)** – `modul-04.js:177` „Einige Minuten“: auf Schleimhaut zutreffend, auf intakter Haut brauchen Lokalanästhetika-Cremes deutlich länger (oft 30–60 Minuten). Präparatabhängig formulieren.

**V16 – Modul 11 ergänzen** – Unfallversicherung/BG (F6), Aufbewahrung der Einverständniserklärungen (Dauer, Datenschutz), Abfallentsorgung (LAGA), Kanülen-Bezug als Medizinprodukte.

**V17 – Betreuung (prüfen)** – `modul-02.js:70, 76`: Eine rechtliche Betreuung macht nicht automatisch einwilligungsunfähig; der Betreuer unterschreibt nur, wenn sein Aufgabenkreis die Gesundheitssorge umfasst. Juristisch prüfen lassen.

**V18 – Dydoe vs. Ampallang/Apadravya (prüfen)** – `modul-08.js:198` Dydoe „durch den Rand der Eichel“ wird gestochen, Ampallang/Apadravya „durch die Eichel“ sind „Nicht durchführen“ wegen Schwellkörpern. Für Lernende wirkt das inkonsequent; kurz begründen, warum der Eichelrand anders bewertet wird.

**V19 – Einheitliche Antwort zu Pflegehinweisen** – `modul-10.js:19` („Schriftlich, zusammen mit dem Pflegemittel“) vs. `modul-09.js:105` („Mündlich und am besten auch schriftlich“). Beide Fragen auf „mündlich und schriftlich“ vereinheitlichen.

**V20 – Handy (390 px)** – Keine Seite scrollt waagerecht. Tabellen und viele Grafiken (z. B. 3-0, 3-5, 4-3, 5-10, 6-x, 7-x, 9-2, 10-2) liegen in eigenen waagerechten Scrollboxen; die Beschriftungen in den Grafiken sind dann klein. Ein sichtbarer Hinweis „seitlich wischen“ oder eine schmalere Hochformat-Variante der wichtigsten Grafiken (Haut, Ohr, Stich, Gauge) würde helfen.

---

## Zusammenfassung der Anzahl

| Kategorie | Punkte |
|---|---|
| Kritisch | 8 (K1–K8) |
| Fehler | 28 (F1–F28) |
| Bilder | 12 (B1–B12) |
| Sprache/Übersetzung | 10 (S1–S10) |
| Verbesserungsvorschläge | 20 (V1–V20) |

Technik: keine JavaScript-Fehler in DE/EN/ES auf allen 110 Seiten; keine kaputten Bilder außer den lokal fehlenden Buchseiten; keine waagerechte Seitenverschiebung bei 390 px.
