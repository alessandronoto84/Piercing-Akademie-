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
      titel: "Kanülen und Stanzen",
      inhalt: [
        { typ: "text", text: "Gestochen wird mit Venenverweilkanülen (Braunülen), hauptsächlich in drei Stärken. Die Farbe des Ansatzes zeigt die Stärke." },
        { typ: "tabelle", kopf: ["Stärke", "Außendurchmesser", "Farbe"], zeilen: [["18G", "1,3 mm", "Grün"], ["16G", "1,7 mm", "Grau"], ["14G", "2,2 mm", "Orange"]] },
        { typ: "ergaenzung", text: "Die Durchmesser entsprechen der Herstellerangabe für Venenverweilkanülen. Im Kursbuch stehen auf S. 64 gerundet 1,2 / 1,6 / 2,1 mm." },
        { typ: "text", text: "Biopsiestanzen (Biopsy Punch) sind für die einmalige Stanzung der Haut gedacht und in verschiedenen Durchmessern erhältlich. Das Gewebe wird nur geringfügig traumatisiert. Sie werden vor allem für Dermal Anchor, Tunnel und Conch eingesetzt." }
      ]
    },
    {
      titel: "Zangen, Klemmen und Hilfsmittel",
      inhalt: [
        { typ: "tabelle", kopf: ["Werkzeug", "Wofür"], zeilen: [
          ["Piercing-Zangen/Klemmen (z. B. Snaptile, Gazeklemme, Septum-Zange, Traguszange, Zungenklemme)", "Halten die Stelle, damit die Haut beim Stechen in Position bleibt"],
          ["Nadelauffangrohr (Receiving Tube)", "Für Stellen, an denen keine Zange passt, etwa Rook und Daith; schützt das umliegende Gewebe vor der Kanüle"],
          ["Einführhilfe", "Spitzer, langsam breiter werdender Stab; abgeheilte Stichkanäle vorsichtig dehnen oder verklebte Kanäle freischieben"],
          ["Klemmzange", "Hält den eingesetzten Schmuck, während die Kugel aufgedreht wird"],
          ["Schere", "Kürzt das Kunststoffröhrchen der Kanüle nach dem Stich, damit der Schmuck leichter hineingeht"],
          ["Kugelgreifer", "Hält Piercingkugeln und erleichtert das Aufschrauben"],
          ["Messschieber", "Misst Schmuck und justiert die Position des Piercings"],
          ["Ringöffnungs- und Ringschließzange", "Spreizt oder schließt Klemmkugelringe (BCR) zum Entfernen oder Einsetzen der Kugel"],
          ["Mini-Seitenschneider", "Trennt Schmuck auf, wenn sich eine Kugel nicht mehr lösen lässt"],
          ["Taschenlampe (grünes Licht)", "Durchleuchtet zum Beispiel das Ohr, um Blutgefäße zu erkennen"]
        ] }
      ]
    },
    {
      titel: "Einmalmaterial",
      inhalt: [
        { typ: "liste", titel: "Bei jedem Kunden neu", punkte: [
          "Einmal-Hautmarker (Chirurgenstift): Ein- und Austrittspunkt markieren",
          "Alkoholtupfer: die zu piercende Stelle desinfizieren",
          "Einmalrasierer: Haare an der Stelle entfernen, denn Haare enthalten Keime und können die Heilung stören",
          "Einmalhandschuhe: immer mit desinfizierten Händen und (sterilen) Handschuhen arbeiten",
          "Mundschutz: zum eigenen Schutz und zum Schutz des Kunden",
          "Einmalunterlagen am Arbeitsplatz; Instrumente in der Instrumentenschale bereitlegen"
        ] },
        { typ: "merke", text: "Steril oder nur sauber? Alles, was die Haut verletzt oder mit Blut in Kontakt kommt (Nadeln, Nadelhalter, Klemmen), muss steril sein. Werkzeuge ohne direkten Hautkontakt (Kugelgreifer, Schere) werden gereinigt und desinfiziert (Kursbuch S. 35)." },
        { typ: "text", text: "Es gibt unzählige Werkzeuge, Hilfsmittel und Ausführungen. Dieses Modul zeigt einen Auszug der wichtigsten." }
      ]
    }
  ],
  uebung: [
    "Lege dein Instrumentenset in der Instrumentenschale bereit und benenne jedes Teil.",
    "Ordne jeder Kanülenstärke die Farbe zu, ohne nachzusehen.",
    "Sortiere deine Werkzeuge in zwei Gruppen: muss steril sein / muss sauber und desinfiziert sein."
  ],
  quiz: [
    { frage: "Welche Farbe hat eine 16G-Kanüle?", antworten: ["Grün", "Grau", "Orange"], richtig: 1, erklaerung: "18G grün, 16G grau, 14G orange.", seite: "S. 64" },
    { frage: "Wofür nutzt du ein Nadelauffangrohr?", antworten: ["Zum Kürzen der Kanüle", "Für Stellen wie Rook und Daith, an denen keine Zange passt", "Zum Desinfizieren"], richtig: 1, erklaerung: "Es schützt das umliegende Gewebe vor der Kanüle.", seite: "S. 68" },
    { frage: "Wofür ist die Schere beim Piercen da?", antworten: ["Zum Kürzen des Kunststoffröhrchens nach dem Stich", "Zum Haareschneiden", "Zum Öffnen der Verpackung"], richtig: 0, erklaerung: "So lässt sich der Schmuck leichter einführen.", seite: "S. 67" },
    { frage: "Wofür werden Biopsiestanzen vor allem eingesetzt?", antworten: ["Lobe", "Dermal Anchor, Tunnel und Conch", "Zunge"], richtig: 1, erklaerung: "Sie stanzen die Haut einmalig.", seite: "S. 65" },
    { frage: "Was muss steril sein?", antworten: ["Kugelgreifer", "Alles mit Hautverletzung oder Blutkontakt, z. B. Nadeln und Klemmen", "Die Instrumentenschale"], richtig: 1, erklaerung: "Werkzeuge ohne Hautkontakt werden gereinigt und desinfiziert.", seite: "S. 35" },
    { frage: "Warum werden Haare an der Stichstelle entfernt?", antworten: ["Aus optischen Gründen", "Haare enthalten Keime und können die Heilung stören", "Damit der Marker besser hält"], richtig: 1, erklaerung: "Dafür gibt es Einmalrasierer.", seite: "S. 70" }
  ]
});
