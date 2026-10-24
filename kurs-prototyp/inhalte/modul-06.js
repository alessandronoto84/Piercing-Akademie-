/* Modul 06 – Material und Schmuck. Quelle: Kursbuch Kap. 7 (S. 52–60) und Kap. 8 (S. 61–63), Überlänge S. 74.
   Korrekturen gegenüber dem Buch: „Chirurgenstahl“ statt „Chirurgiestahl“, „Niob“ statt „Nionium“ (siehe KURS-RECHERCHE.md). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 6,
  titel: "Material und Schmuck",
  quelle: "Kursbuch Kap. 7 und 8, S. 52–63",
  ziel: "Du weißt, welche Materialien als Ersteinsatz in Frage kommen, erkennst die gängigen Schmuckformen und kennst die Grundregel zur Überlänge.",
  lektionen: [
    {
      titel: "Titan G23",
      seite: "S. 52–53",
      inhalt: [
        { typ: "text", text: "Titan ist ein Hightech-Metall mit vielen besonderen Eigenschaften. Es wird für medizinische Geräte, Herzbypässe und Herzschrittmacher eingesetzt. Um eine Tonne Titan herzustellen, braucht man 16-mal mehr Energie als für eine Tonne Stahl." },
        { typ: "text", text: "Nicht jede Titanlegierung eignet sich für Bodypiercing. Für Piercing-Produkte wird ausschließlich das Hightech-Titan „Ti6Al4V ELI, Titan der Güteklasse 23“ verwendet, kurz G23-Titan. Es ist weltweit für den unbegrenzten chirurgischen Einsatz zugelassen, auch für Implantate wie Herzschrittmacher oder künstliche Gelenke, und wurde als biokompatibel eingestuft." },
        { typ: "tabelle", kopf: ["Eigenschaft", "Bedeutung"], zeilen: [
          ["Wiegt nur die Hälfte von Stahl", "Angenehm zu tragen, auch bei langen Stäben"],
          ["Anodisierend färbbar", "Farbiger Schmuck ohne Beschichtung, durch stabile Oxidschichten"],
          ["Nickelfrei", "Antiallergen, ideal als Ersteinsatz"],
          ["Leitet kaum Wärme oder Kälte", "Angenehm auf der Haut"],
          ["Starker Oxidmantel", "Korrosionsresistent und dauerhaft farbbeständig"]
        ] },
        { typ: "ergaenzung", text: "Implant-Titan Ti6Al4V ELI wird international nach der Norm ASTM F136 spezifiziert. Achte beim Einkauf auf einen entsprechenden Materialnachweis." }
      ],
      fragen: [
        ["Wie lautet die genaue Bezeichnung des G23-Titans?", ["Ti6Al4V ELI, Titan der Güteklasse 23", "Ti99 Rein", "Stahl 316L"], "Kurz G23-Titan.", "S. 53"],
        ["Wie viel wiegt G23-Titan im Vergleich zu Stahl?", ["Etwa die Hälfte", "Doppelt so viel", "Genauso viel"], "Eine der Eigenschaften.", "S. 52"],
        ["Wie lässt sich G23-Titan färben?", ["Durch Anodisieren", "Durch Lackieren", "Gar nicht"], "Elektrochemisches Verfahren.", "S. 52"],
        ["Warum ist G23-Titan antiallergen?", ["Es ist nickelfrei", "Es ist vergoldet", "Es ist beschichtet"], "Deshalb ideal als Ersteinsatz.", "S. 52"],
        ["Warum ist G23-Titan dauerhaft farbbeständig?", ["Wegen seines starken Oxidmantels", "Weil es lackiert ist", "Weil es aus Gold ist"], "Korrosionsresistent.", "S. 53"],
        ["Wofür ist G23-Titan ebenfalls zugelassen?", ["Für Implantate wie Herzschrittmacher und künstliche Gelenke", "Nur für Modeschmuck", "Nur für Werkzeuge"], "Unbegrenzter chirurgischer Einsatz.", "S. 53"]
      ]
    },
    {
      titel: "Blackline und Zirkon Gold",
      seite: "S. 54",
      inhalt: [
        { typ: "text", text: "Blackline-Titan G23 wird mit dem Verfahren PVD (Physical Vapor Deposition) beschichtet, das seit den 80er Jahren in der Medizin verbreitet ist. In einer Gasumgebung (Plasma) entsteht eine hauchdünne, abriebfeste Schicht, ohne das Material selbst zu verändern. Blackline-Piercings sind nahezu dauerhaft kratzbeständig, farbsicher und biochemisch verträglich." },
        { typ: "text", text: "Zirkon-Gold-Titan G23 wurde als Alternative zu Goldschmuck entwickelt. Es ist hautverträglicher als Gold, verfärbt sich nur selten, hat eine glattere Oberfläche, wiegt weniger, ist preiswerter und dennoch widerstandsfähiger." }
      ],
      fragen: [
        ["Mit welchem Verfahren wird Blackline-Titan beschichtet?", ["PVD (Physical Vapor Deposition)", "Galvanisieren", "Lackieren"], "Hauchdünn und abriebfest.", "S. 54"],
        ["Welche Eigenschaften haben Blackline-Piercings?", ["Nahezu dauerhaft kratzbeständig, farbsicher und verträglich", "Sie verfärben sich nach wenigen Tagen", "Sie enthalten Nickel"], "Siehe Kursbuch.", "S. 54"],
        ["Was ist Zirkon-Gold-Titan?", ["Eine hautverträglichere Alternative zu Goldschmuck", "Echtes Gold", "Chirurgenstahl"], "Glatter, leichter, preiswerter.", "S. 54"]
      ]
    },
    {
      titel: "Chirurgenstahl",
      seite: "S. 55",
      inhalt: [
        { typ: "text", text: "Es gibt unzählige Stähle. Als Schmuck verwenden Piercer nur drei: Komposition D Implantatstahl, Chirurgenstahl 316 LVM und, am häufigsten, Chirurgenstahl 316L. Diese Stähle erfüllen laut EU-Nickelrichtlinie alle Kriterien, um als Zweiteinsatz (nach vollständiger Abheilung) weltweit und zeitlich unbegrenzt getragen zu werden." },
        { typ: "text", text: "In der Medizin wird 316L zum Beispiel für Knochenschrauben, Körpernadeln, Knochenplatten, Nähte, Klammern und als Herzschrittmacherelektrode eingesetzt." },
        { typ: "achtung", text: "Chirurgenstahl 316L enthält 10 bis 14 Prozent Nickel und ist als Ersteinsatz ungeeignet. Als Zweiteinsatz ist er meistens bedenkenlos." }
      ],
      fragen: [
        ["Wie viel Nickel enthält Chirurgenstahl 316L?", ["10 bis 14 Prozent", "0 Prozent", "50 Prozent"], "Deshalb kein Ersteinsatz.", "S. 55"],
        ["Welche drei Stähle verwenden Piercer als Schmuck?", ["Komposition D Implantatstahl, 316 LVM und 316L", "303er, 304er und 316L", "Nur 303er Stahl"], "Am häufigsten 316L.", "S. 55"],
        ["Wofür ist Chirurgenstahl 316L geeignet?", ["Als Zweiteinsatz nach vollständiger Abheilung", "Als Ersteinsatz", "Gar nicht"], "Als Zweiteinsatz meist bedenkenlos.", "S. 55"],
        ["Wofür wird 316L in der Medizin eingesetzt?", ["Zum Beispiel für Knochenschrauben und Herzschrittmacherelektroden", "Nur für Besteck", "Gar nicht"], "Dazu Nadeln, Platten, Nähte, Klammern.", "S. 55"]
      ]
    },
    {
      titel: "Die Regel für den Ersteinsatz",
      seite: "S. 56",
      inhalt: [
        { typ: "merke", text: "Als Piercer setzt man die Gesundheit des Kunden nicht aufs Spiel." },
        { typ: "text", text: "Einige Anbieter verkaufen Körperschmuck aus 303er rostfreiem Stahl, einem hochschwefelhaltigen, leicht zu verarbeitenden Stahl. 303er Stahl ruft bei nickelsensitiven Personen erhebliche negative Reaktionen hervor (14 Prozent in Teststudien) und ist unter allen Umständen zu meiden." },
        { typ: "achtung", text: "Da viele Menschen, oft ohne es zu wissen, eine Nickelallergie haben, nehmen wir als Ersteinsatz immer G23-Titan oder PTFE." },
        { typ: "text", text: "Implantanium, Niob oder hochreines Gold wären auch möglich, sind aber aus wirtschaftlichen Gründen nicht sinnvoll." },
        { typ: "ergaenzung", text: "Nach EU-Recht (REACH, Anhang XVII, Eintrag 27) dürfen Metallteile, die in durchstochene Körperstellen eingesetzt werden, höchstens 0,2 µg Nickel pro cm² und Woche abgeben (Prüfung nach EN 1811). Die Regel der Akademie geht darüber hinaus." }
      ],
      fragen: [
        ["Welche Materialien verwendest du als Ersteinsatz?", ["G23-Titan oder PTFE", "Chirurgenstahl 316L", "303er Stahl"], "Viele Menschen haben unbemerkt eine Nickelallergie.", "S. 56"],
        ["Was gilt für 303er Stahl?", ["Er ruft bei Nickelsensitiven erhebliche Reaktionen hervor und ist zu meiden", "Er ist der beste Ersteinsatz", "Er ist nickelfrei"], "Hochschwefelhaltig.", "S. 56"],
        ["Welche Materialien wären möglich, sind aber wirtschaftlich nicht sinnvoll?", ["Implantanium, Niob oder hochreines Gold", "Plastik und Holz", "303er Stahl"], "Im Buch „Nionium“, gemeint ist vermutlich Niob.", "S. 56"],
        ["Wie viel Nickel darf Schmuck für frische Piercings nach EU-Recht höchstens abgeben?", ["0,2 µg pro cm² und Woche", "2 g pro Tag", "Beliebig viel"], "REACH, Eintrag 27 (Ergänzung).", "Ergänzung"],
        ["Fall: Ein Kunde bringt eigenen Schmuck aus Chirurgenstahl für sein frisches Piercing mit. Was tust du?", ["Ich setze als Ersteinsatz G23-Titan oder PTFE ein", "Ich setze seinen Schmuck ein", "Ich steche ohne Schmuck"], "316L ist als Ersteinsatz ungeeignet.", "S. 55–56"]
      ]
    },
    {
      titel: "Nickelallergie erkennen",
      seite: "S. 57",
      inhalt: [
        { typ: "text", text: "Kommt die Haut einer allergischen Person mit Nickel in Berührung, rötet sie sich, schwillt an, wird rau und trocken und juckt. Manchmal schuppen oder nässen diese sogenannten Kontaktekzeme oder schwellen schmerzhaft an. Der Ausschlag kann auf kleine Flächen begrenzt bleiben oder sich über breite Hautareale bis über den ganzen Körper ausbreiten." },
        { typ: "text", text: "Ekzeme können an allen Körperstellen auftreten, die mit Nickel in Berührung gekommen sind, etwa an Händen, Gesicht, Armen, Beinen, in der Mundschleimhaut oder an den Genitalien." },
        { typ: "merke", text: "Die Symptome zeigen sich erst rund 48 bis 72 Stunden nach dem Kontakt. Mediziner sprechen von einer Spättyp-Allergie. Das macht sie schwer zu erkennen." }
      ],
      fragen: [
        ["Woran erkennt man eine Nickelallergie auf der Haut?", ["Rötung, Schwellung, raue, trockene und juckende Haut", "Blaue Flecken", "Haarausfall"], "Manchmal nässende Kontaktekzeme.", "S. 57"],
        ["Wann treten die Symptome einer Nickelallergie auf?", ["Etwa 48 bis 72 Stunden nach dem Kontakt", "Sofort", "Erst nach Wochen"], "Spättyp-Allergie.", "S. 57"],
        ["Wie nennt man eine Allergie, die erst Tage nach dem Kontakt auftritt?", ["Spättyp-Allergie", "Soforttyp-Allergie", "Kontaktlinsenallergie"], "Typisch für Nickel.", "S. 57"],
        ["Kann sich der Ausschlag über den ganzen Körper ausbreiten?", ["Ja, bei einigen Betroffenen", "Nein, nie", "Nur an den Händen"], "So steht es im Kursbuch.", "S. 57"],
        ["Fall: Drei Tage nach einem Schmuckwechsel auf Stahl juckt und nässt die Stelle. Woran denkst du?", ["An eine Nickelallergie (Spättyp)", "An eine normale Heilung", "An zu wenig Pflege"], "Symptome nach 48 bis 72 Stunden.", "S. 57"]
      ]
    },
    {
      titel: "PTFE",
      seite: "S. 58–60",
      inhalt: [
        { typ: "text", text: "PTFE (Polytetrafluorethylen) ist ein vollfluoriertes Polymer, umgangssprachlich oft mit dem Handelsnamen Teflon bezeichnet. Weitere Handelsnamen sind Dyneon PTFE (ehemals Hostaflon) und Gore-Tex für PTFE-Membranen. PTFE zählt zu den Thermoplasten, zeigt aber auch Eigenschaften von Duroplasten." },
        { typ: "text", text: "Entgegen einer verbreiteten Meinung ist PTFE kein Nebenprodukt der Raumfahrt, die erst 1957 begann. Dr. Roy Plunkett entdeckte es 1938 bei DuPont durch Zufall, als er nach einem Kältemittel für Kühlschränke suchte. 1943 diente es erstmals als Korrosionsschutz, 1954 kam Colette Grégoire auf die Idee, Pfannen damit zu beschichten." },
        { typ: "liste", titel: "Besonderheiten", punkte: ["sehr reaktionsträge: selbst Königswasser greift es nicht an, weil die Bindung zwischen Kohlenstoff und Fluor sehr stark ist", "sehr geringer Reibungskoeffizient", "an PTFE haftet so gut wie nichts, das macht es zum idealen Ersteinsatz", "mit PTFE als Ersteinsatz sind deutlich kürzere Abheilzeiten möglich als mit Titan", "wegen der hohen Wärmebeständigkeit problemlos autoklavierbar"] },
        { typ: "achtung", text: "Ausnahme: Beim Zungenpiercing kein PTFE verwenden (S. 90)." }
      ],
      fragen: [
        ["Wofür steht die Abkürzung PTFE?", ["Polytetrafluorethylen", "Polyethylen-Titan", "Plastik-Teflon-Feinstahl"], "Handelsname Teflon.", "S. 58"],
        ["Wer entdeckte PTFE?", ["Dr. Roy Plunkett bei DuPont, 1938", "Die NASA, 1957", "Marie Curie"], "Zufällig, bei der Suche nach einem Kältemittel.", "S. 59"],
        ["Ist PTFE ein Nebenprodukt der Raumfahrt?", ["Nein, es wurde schon 1938 entdeckt", "Ja", "Ja, 1969"], "Die Raumfahrt begann erst 1957.", "S. 59"],
        ["Warum ist PTFE ein idealer Ersteinsatz?", ["An PTFE haftet so gut wie nichts", "Es ist besonders schwer", "Es ist magnetisch"], "Kürzere Abheilzeiten möglich.", "S. 60"],
        ["Lässt sich PTFE autoklavieren?", ["Ja, problemlos", "Nein", "Nur einmal"], "Hohe Wärmebeständigkeit.", "S. 60"],
        ["Bei welchem Piercing verwendest du kein PTFE?", ["Beim Zungenpiercing", "Beim Lobe", "Beim Helix"], "Hinweis im Datenblatt Zunge.", "S. 90"]
      ]
    },
    {
      titel: "Woran du guten Ersteinsatz-Schmuck erkennst",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "„Titan“ oder „Chirurgenstahl“ auf dem Etikett sagt wenig. Entscheidend ist, ob das Material einer Norm für Implantate entspricht und ob der Hersteller das mit einem Zertifikat belegt." },
        { typ: "tabelle", kopf: ["Material", "Norm", "Einordnung in diesem Kurs"], zeilen: [
          ["Titan Ti6Al4V ELI (G23)", "ASTM F136, ISO 5832-3", "Standard für den Ersteinsatz"],
          ["Reintitan (unlegiert)", "ASTM F67, ISO 5832-2", "ebenfalls implantattauglich und nickelfrei"],
          ["Implantatstahl 316LVM", "ASTM F138, ISO 5832-1", "enthält Nickel; in der Akademie kein Ersteinsatz"],
          ["Gold", "massiv, mindestens 14 Karat, nickel- und cadmiumfrei", "laut APP möglich; in der Akademie kein Ersteinsatz"],
          ["PTFE", "medizinische Qualität", "Ersteinsatz, nicht bei der Zunge"]
        ] },
        { typ: "grafik", id: "gewinde" },
        { typ: "liste", titel: "Prüfe beim Einkauf", punkte: [
          "Materialzertifikat (Werkstoffnachweis) des Herstellers zur jeweiligen Charge.",
          "Innengewinde oder gewindelos (Push-Pin): Der Stab ist glatt und reibt nicht durch den frischen Stichkanal.",
          "Spiegelglatt polierte Oberfläche ohne Kratzer, Grate oder Gussnähte; Kanten gerundet.",
          "Autoklavierbar; steril verpackt oder vor dem Einsatz sterilisiert.",
          "Nickelabgabe nach EU-Recht: höchstens 0,2 µg pro cm² und Woche für Schmuck in frischen Piercings (Modul 11)."
        ] },
        { typ: "ergaenzung", text: "Die Normen stammen aus den Mindeststandards der Association of Professional Piercers (APP) und aus Herstellerangaben (siehe KURS-RECHERCHE.md, Abschnitt 9). Die APP lässt auch Implantatstahl und Gold als Ersteinsatz zu; die Akademie bleibt bei ihrer strengeren Regel: G23-Titan oder PTFE." }
      ],
      fragen: [
        ["Welche Norm gehört zu Titan G23 (Ti6Al4V ELI)?", ["ASTM F136", "ASTM F138", "DIN A4"], "Auch ISO 5832-3.", "Ergänzung"],
        ["Welche Norm gehört zu Implantatstahl 316LVM?", ["ASTM F138", "ASTM F136", "ASTM F67"], "Er enthält Nickel; in der Akademie kein Ersteinsatz.", "Ergänzung"],
        ["Warum ist ein Innengewinde beim Ersteinsatz besser?", ["Der Stab ist glatt und reibt nicht durch den Stichkanal", "Es ist billiger", "Die Kugel sitzt lockerer"], "Ein Außengewinde schrammt beim Einsetzen.", "Ergänzung"],
        ["Was verlangst du beim Einkauf vom Hersteller?", ["Ein Materialzertifikat", "Ein Werbefoto", "Nichts"], "Nur so ist das Material belegt.", "Ergänzung"],
        ["Welches Gold entspricht dem APP-Mindeststandard?", ["Massiv, mindestens 14 Karat, nickel- und cadmiumfrei", "Vergoldetes Messing", "Jedes Gold"], "Eine Vergoldung kann sich abreiben.", "Ergänzung"],
        ["Wie muss die Oberfläche eines Ersteinsatzes sein?", ["Spiegelglatt poliert, ohne Kratzer und Grate", "Rau, damit er besser hält", "Lackiert"], "Raue Stellen reizen den Stichkanal.", "Ergänzung"]
      ]
    },
    {
      titel: "Schmuckformen: Stäbe und Stecker",
      seite: "S. 61–62",
      inhalt: [
        { typ: "text", text: "Für verschiedene Bereiche des Körpers werden verschiedene Schmuckarten verwendet, beim Ersteinsatz wie beim Zweiteinsatz." },
        { typ: "tabelle", kopf: ["Schmuck", "Beschreibung", "Typischer Einsatz"], zeilen: [
          ["Curved Barbell (Banane)", "Leicht gebogener Stab mit Kugeln", "Bauchnabel, Augenbraue, Rook"],
          ["Barbell", "Metallstift mit Gewinde und verschraubbaren Kugeln (engl. Hantel)", "Zunge, Industrial, Brustwarze"],
          ["Labret Stud (Stecker)", "Stift mit Platte auf einer Seite und Gewinde für eine Kugel oder einen Schmuckaufsatz", "Labret, Tragus, Conch, Lobe, Nostril"]
        ] },
        { typ: "grafik", id: "staebe" }
      ],
      fragen: [
        ["Wie heißt der leicht gebogene Stab mit Kugeln?", ["Curved Barbell (Banane)", "Labret", "Segmentring"], "Meist für Bauchnabel, Augenbraue, Rook.", "S. 61"],
        ["Was ist ein Barbell?", ["Ein Metallstift mit Gewinde und verschraubbaren Kugeln", "Ein offener Ring", "Ein Stecker mit Platte"], "Engl. Hantel.", "S. 61"],
        ["Was hat ein Labret Stud an einem Ende?", ["Eine Platte", "Einen Haken", "Ein Scharnier"], "Am anderen Ende ein Gewinde.", "S. 62"],
        ["Bei welchen Piercings wird ein Labret-Stecker auch getragen?", ["Zum Beispiel Tragus und Conch", "Nur beim Bauchnabel", "Nur im Intimbereich"], "Nicht nur beim Labret.", "S. 62"]
      ]
    },
    {
      titel: "Schmuckformen: Ringe",
      seite: "S. 62–63",
      inhalt: [
        { typ: "tabelle", kopf: ["Schmuck", "Wie er schließt"], zeilen: [
          ["Segmentring", "Zwei Teile: Ein Segment mit Stiften wird mit einer Zange in die Vertiefungen des Rings eingesetzt; so entsteht ein durchlaufender Ring."],
          ["Clicker-Ring", "Zwei Teile, mit Scharnier fest verbunden; öffnet und schließt ohne Werkzeug mit einem „Klick“."],
          ["Ball Closure Ring (BCR)", "Auch Klemmkugelring oder Captive Ring. Die Kugel hat zwei kleine Einbuchtungen und rastet in die Ringöffnung ein. Zum Einsetzen wird der Ring vorsichtig mit einer Spreizzange gedehnt."],
          ["Threaded Ring (Hufeisen)", "Offener Ring mit Gewinde an beiden Enden für Kugeln, Spitzen und andere Verschlüsse."]
        ] },
        { typ: "grafik", id: "ringe" },
        { typ: "text", text: "Weitere Formen sind zum Beispiel Bars, Dermal Anchor und Nose Studs." }
      ],
      fragen: [
        ["Wie wird ein Segmentring geschlossen?", ["Das Segment wird mit einer Zange in die Vertiefungen eingesetzt", "Mit einem Klick", "Mit Kleber"], "Er besteht aus zwei Teilen.", "S. 62"],
        ["Wie öffnet und schließt ein Clicker-Ring?", ["Mit Scharnier und „Klick“, ohne Werkzeug", "Nur mit Zange", "Gar nicht"], "Zwei fest verbundene Teile.", "S. 62"],
        ["Wie nennt man den Ring, dessen Kugel in die Ringöffnung einrastet?", ["Ball Closure Ring (BCR)", "Clicker", "Segmentring"], "Auch Klemmkugelring.", "S. 63"],
        ["Womit wird ein BCR zum Einsetzen der Kugel geöffnet?", ["Mit einer Spreizzange", "Mit einer Schere", "Mit den Zähnen"], "Vorsichtig dehnen.", "S. 63"],
        ["Wie nennt man den Threaded Ring auch?", ["Hufeisen", "Banane", "Clicker"], "Offener Ring mit Gewinde an beiden Enden.", "S. 63"]
      ]
    },
    {
      titel: "Überlänge beim Ersteinsatz",
      seite: "S. 74",
      inhalt: [
        { typ: "achtung", text: "Der Ersteinsatz muss stets eine Überlänge von etwa 4 mm haben. Der frische Stichkanal kann anschwellen und darf während der Heilungsphase niemals durch Kugeln oder Plättchen verschlossen bzw. eingeengt werden." },
        { typ: "grafik", id: "ueberlaenge" },
        { typ: "praxis", text: "Miss die Stelle mit dem Messschieber und plane die Überlänge ein, bevor du den Ersteinsatz aus der Sterilverpackung nimmst. Nach der Abheilung kann ein kürzerer Zweiteinsatz folgen." }
      ],
      fragen: [
        ["Wie viel Überlänge braucht ein Ersteinsatz?", ["Etwa 4 mm", "Keine", "Etwa 2 cm"], "Der frische Stichkanal kann anschwellen.", "S. 74"],
        ["Warum darf der Ersteinsatz nicht zu kurz sein?", ["Weil Kugeln oder Plättchen sonst bei Schwellung einengen", "Weil er sonst zu leicht ist", "Weil er sonst nicht glänzt"], "Grundregel aus Kap. 10.", "S. 74"],
        ["Womit misst du die Stelle für den Schmuck?", ["Mit dem Messschieber", "Mit dem Augenmaß", "Mit der Schere"], "Siehe Werkzeuge in Modul 7.", "S. 68"]
      ]
    }
  ],
  uebung: [
    "Sortiere Schmuckstücke aus deinem Übungsset nach Barbell, Banane, Labret, BCR und Hufeisen.",
    "Erkläre einem Kunden in zwei Sätzen, warum du als Ersteinsatz kein 316L verwendest.",
    "Miss mit dem Messschieber die Länge eines Ersteinsatzes und plane die Überlänge."
  ]
});
