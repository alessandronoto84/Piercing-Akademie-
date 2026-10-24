/* Modul 07 – Werkzeuge und Instrumente. Quelle: Kursbuch Kap. 9 (S. 64–73), steril/sauber S. 35.
   Kanülenmaße nach Herstellerangabe B. Braun (1,3 / 1,7 / 2,2 mm); das Buch nennt 1,2 / 1,6 / 2,1 mm (siehe KURS-RECHERCHE.md). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 7,
  titel: "Werkzeuge und Instrumente",
  quelle: "Kursbuch Kap. 9, S. 64–73",
  ziel: "Du kennst die Werkzeuge des Piercers, weißt, wofür du sie einsetzt, und unterscheidest, was steril sein muss und was nur sauber.",
  lektionen: [
    {
      titel: "Kanülen",
      seite: "S. 64",
      inhalt: [
        { typ: "text", text: "Gestochen wird mit Venenverweilkanülen (Braunülen), hauptsächlich in drei Nadelstärken. Die Farbe des Ansatzes zeigt die Stärke. Je größer die Gauge-Zahl (G), desto dünner die Kanüle." },
        { typ: "tabelle", kopf: ["Stärke", "Außendurchmesser", "Farbe"], zeilen: [["18G", "1,3 mm", "Grün"], ["16G", "1,7 mm", "Grau"], ["14G", "2,2 mm", "Orange"]] },
        { typ: "ergaenzung", text: "Die Durchmesser entsprechen der Herstellerangabe für Venenverweilkanülen. Im Kursbuch stehen gerundet 1,2 / 1,6 / 2,1 mm." }
      ],
      fragen: [
        ["In wie vielen Stärken arbeitet man beim Piercen hauptsächlich?", ["In drei", "In einer", "In zehn"], "18G, 16G und 14G.", "S. 64"],
        ["Was bedeutet eine größere Gauge-Zahl?", ["Eine dünnere Kanüle", "Eine dickere Kanüle", "Eine längere Kanüle"], "18G 1,3 mm, 14G 2,2 mm.", "S. 64"],
        ["Woran erkennst du die Stärke schnell?", ["An der Farbe des Ansatzes", "Am Geruch", "Am Gewicht"], "Grün, grau, orange.", "S. 64"]
      ]
    },
    {
      titel: "Biopsiestanzen",
      seite: "S. 65",
      inhalt: [
        { typ: "text", text: "Biopsiestanzen (Biopsy Punch) für die Haut sind für die einmalige Stanzung konzipiert und in verschiedenen Größen bzw. Durchmessern erhältlich. Das Hautgewebe wird bei der Stanzung nur geringfügig traumatisiert, so dass eine schnelle Wundheilung möglich ist." },
        { typ: "text", text: "Eingesetzt werden sie hauptsächlich für Dermal Anchor, Tunnel und Conch." }
      ],
      fragen: [
        ["Wofür sind Biopsiestanzen konzipiert?", ["Für die einmalige Stanzung der Haut", "Für die mehrfache Verwendung", "Zum Desinfizieren"], "In verschiedenen Durchmessern erhältlich.", "S. 65"],
        ["Wofür werden Biopsiestanzen vor allem eingesetzt?", ["Dermal Anchor, Tunnel und Conch", "Lobe", "Zunge"], "Sie stanzen die Haut einmalig.", "S. 65"],
        ["Wie stark wird das Gewebe bei einer Stanzung traumatisiert?", ["Nur geringfügig", "Sehr stark", "Gar nicht, sie schneidet nicht"], "So ist schnelle Heilung möglich.", "S. 65"]
      ]
    },
    {
      titel: "Zangen, Klemmen und Nadelauffangrohr",
      seite: "S. 65, 68",
      inhalt: [
        { typ: "text", text: "Piercing-Zangen bzw. Klemmen halten die zu piercende Stelle, damit die Haut beim Stechen in Position bleibt. Für verschiedene Piercings gibt es verschiedene Zangen, zum Beispiel Snaptile, Gazeklemme, Septum-Zange, Traguszange oder Zungenklemme. Welche passt, steht im jeweiligen Datenblatt (Modul 8)." },
        { typ: "text", text: "Einige Piercings lassen sich nicht mit einer Zange stechen. Bei Piercings im Innenohr, zum Beispiel Rook und Daith, nutzt man das Nadelauffangrohr (Receiving Tube). Es verhindert, dass die Kanüle das umliegende Gewebe verletzt." },
        { typ: "praxis", text: "Manche Piercings, etwa Helix oder Bauchnabel, können auch freihand gestochen werden. Das setzt eine sichere Hand voraus; als Anfänger arbeitest du besser mit Klemme." }
      ],
      fragen: [
        ["Wozu dient eine Piercing-Zange bzw. Klemme?", ["Sie hält die Stelle, damit die Haut beim Stechen in Position bleibt", "Sie schneidet den Schmuck", "Sie desinfiziert"], "Es gibt viele Zangen für verschiedene Piercings.", "S. 65"],
        ["Wofür nutzt du ein Nadelauffangrohr?", ["Für Stellen wie Rook und Daith, an denen keine Zange passt", "Zum Kürzen der Kanüle", "Zum Desinfizieren"], "Es schützt das umliegende Gewebe.", "S. 68"],
        ["Wo steht, welche Klemme zu einem Piercing passt?", ["Im Datenblatt des Piercings", "Auf der Kanüle", "Nirgends"], "Siehe Modul 8.", "S. 74–110"]
      ]
    },
    {
      titel: "Hilfswerkzeuge",
      seite: "S. 66–69, 73",
      inhalt: [
        { typ: "tabelle", kopf: ["Werkzeug", "Wofür"], zeilen: [
          ["Einführhilfe", "Spitzer, langsam breiter werdender Stab; abgeheilte Stichkanäle vorsichtig dehnen oder verklebte Kanäle freischieben"],
          ["Klemmzange", "Hält den eingesetzten Schmuck, während die Kugel aufgedreht wird"],
          ["Schere", "Kürzt das Kunststoffröhrchen der Kanüle nach dem Stich, damit der Schmuck leichter hineingeht"],
          ["Kugelgreifer", "Hält Piercingkugeln und erleichtert das Aufschrauben"],
          ["Messschieber", "Misst Schmuck und justiert die Position des Piercings"],
          ["Ringöffnungs- und Ringschließzange", "Spreizt oder schließt Klemmkugelringe (BCR) zum Entfernen oder Einsetzen der Kugel"],
          ["Taschenlampe (grünes Licht)", "Durchleuchtet zum Beispiel das Ohr, um Blutgefäße zu erkennen"],
          ["Mini-Seitenschneider", "Trennt Schmuck auf, wenn sich eine Kugel nicht mehr lösen lässt"]
        ] },
        { typ: "achtung", text: "Mit der Einführhilfe immer sehr vorsichtig vorgehen, um eine Verletzung zu vermeiden." }
      ],
      fragen: [
        ["Wofür ist die Schere beim Piercen da?", ["Zum Kürzen des Kunststoffröhrchens nach dem Stich", "Zum Haareschneiden", "Zum Öffnen der Verpackung"], "So lässt sich der Schmuck leichter einführen.", "S. 67"],
        ["Worauf achtest du bei der Einführhilfe?", ["Sehr vorsichtig vorgehen, um Verletzungen zu vermeiden", "Möglichst schnell drücken", "Nichts"], "Abgeheilte Kanäle vorsichtig dehnen.", "S. 66"],
        ["Womit trennst du Schmuck auf, dessen Kugel sich nicht löst?", ["Mit dem Mini-Seitenschneider", "Mit der Kanüle", "Mit dem Kugelgreifer"], "Der Schmuck wird dabei zerstört.", "S. 73"],
        ["Womit hältst du den Schmuck fest, während du die Kugel aufdrehst?", ["Mit der Klemmzange", "Mit der Schere", "Mit dem Messschieber"], "Siehe Werkzeugtabelle.", "S. 66"]
      ]
    },
    {
      titel: "Einmalmaterial",
      seite: "S. 69–72",
      inhalt: [
        { typ: "liste", titel: "Bei jedem Kunden neu", punkte: [
          "Einmal-Hautmarker (Chirurgenstift): Ein- und Ausstichpunkt vor dem Stechen markieren",
          "Alkoholtupfer: die zu piercende Stelle desinfizieren",
          "Einmalrasierer: Haare an der Stelle möglichst entfernen, denn Haare enthalten stets Keime und können die Heilung beeinträchtigen",
          "Einmalhandschuhe: die Arbeit am Kunden stets mit desinfizierten Händen und (sterilen) Einmalhandschuhen durchführen",
          "Mund-Nasen-Schutz: zur eigenen Sicherheit und zur Sicherheit des Kunden",
          "Einmalunterlagen: Einweg-Matten als Unterlage am Arbeitsplatz"
        ] },
        { typ: "text", text: "In der Instrumentenschale legst du dir Werkzeuge und Instrumente parat." },
        { typ: "text", text: "Es gibt unzählige Werkzeuge, Hilfsmittel und Ausführungen; das Kursbuch zeigt einen Auszug der wichtigsten." }
      ],
      fragen: [
        ["Warum werden Haare an der Stichstelle entfernt?", ["Haare enthalten Keime und können die Heilung stören", "Aus optischen Gründen", "Damit der Marker besser hält"], "Dafür gibt es Einmalrasierer.", "S. 70"],
        ["Womit markierst du Ein- und Ausstichpunkt?", ["Mit einem Einmal-Hautmarker", "Mit einem Kugelschreiber", "Gar nicht"], "Chirurgenstift.", "S. 69"],
        ["Womit desinfizierst du die zu piercende Stelle?", ["Mit einem Alkoholtupfer", "Mit Kochsalzlösung", "Mit Wasser"], "Siehe Einmalmaterial.", "S. 70"],
        ["Wie arbeitest du am Kunden?", ["Stets mit desinfizierten Händen und (sterilen) Einmalhandschuhen", "Mit bloßen Händen", "Mit Gartenhandschuhen"], "Siehe Kursbuch.", "S. 71"]
      ]
    },
    {
      titel: "Steril oder nur sauber?",
      seite: "S. 35",
      inhalt: [
        { typ: "merke", text: "Alles, was die Haut verletzt oder mit Blut in Kontakt kommt (Nadeln, Nadelhalter, Klemmen), muss steril sein: als steriles Einwegmaterial oder im Autoklav sterilisiert." },
        { typ: "text", text: "Werkzeuge ohne direkten Hautkontakt, etwa Kugelgreifer oder Schere, werden im Ultraschallbad gereinigt und im Desinfektionsbad desinfiziert. Benutzte Kanülennadeln kommen sofort in den Nadelabwurfbehälter." }
      ],
      fragen: [
        ["Was muss steril sein?", ["Alles mit Hautverletzung oder Blutkontakt, z. B. Nadeln und Klemmen", "Der Kugelgreifer", "Die Instrumentenschale"], "Werkzeuge ohne Hautkontakt werden desinfiziert.", "S. 35"],
        ["Wie wird ein Kugelgreifer aufbereitet?", ["Im Ultraschallbad gereinigt und desinfiziert", "Er wird weggeworfen", "Gar nicht"], "Kein direkter Hautkontakt.", "S. 35"],
        ["Wohin kommt eine benutzte Kanülennadel?", ["In den Nadelabwurfbehälter", "In die Instrumentenschale", "In den Papierkorb"], "Direkt nach dem Stich.", "S. 27"]
      ]
    }
  ],
  uebung: [
    "Lege dein Instrumentenset in der Instrumentenschale bereit und benenne jedes Teil.",
    "Ordne jeder Kanülenstärke die Farbe zu, ohne nachzusehen.",
    "Sortiere deine Werkzeuge in zwei Gruppen: muss steril sein / muss sauber und desinfiziert sein."
  ]
});
