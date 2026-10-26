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
        { typ: "text", text: "Titan ist ein Hightech-Metall mit vielen besonderen Eigenschaften. Es wird für medizinische Implantate wie Knochenschrauben, künstliche Gelenke und Herzschrittmachergehäuse eingesetzt. Um eine Tonne Titan herzustellen, braucht man 16-mal mehr Energie als für eine Tonne Stahl." },
        { typ: "text", text: "Nicht jede Titanlegierung eignet sich für Bodypiercing. Für hochwertigen Piercingschmuck wird vor allem das Hightech-Titan „Ti6Al4V ELI, Titan der Güteklasse 23“ verwendet, kurz G23-Titan (das Kursbuch sagt „ausschließlich“; daneben gibt es auch implantattaugliches Reintitan, siehe Lektion „Woran du guten Ersteinsatz-Schmuck erkennst“). Es ist als Werkstoff für chirurgische Implantate genormt, wird weltweit für Implantate wie künstliche Gelenke verwendet und gilt als biokompatibel." },
        { typ: "foto", id: "titan-schmuck", text: "Schmuck aus G23-Titan. Kursbuch S. 55." },
        { typ: "tabelle", kopf: ["Eigenschaft", "Bedeutung"], zeilen: [
          ["Wiegt nur die Hälfte von Stahl", "Angenehm zu tragen, auch bei langen Stäben"],
          ["Anodisierend färbbar", "Farbiger Schmuck ohne Beschichtung, durch stabile Oxidschichten"],
          ["Nickelfrei", "Antiallergen, ideal als Ersteinsatz"],
          ["Leitet kaum Wärme oder Kälte", "Angenehm auf der Haut"],
          ["Starker Oxidmantel", "Korrosionsresistent und dauerhaft farbbeständig"]
        ] },
        { typ: "grafik", id: "anodisieren" },
        { typ: "foto", id: "frei-anodisiert", text: "Anodisierte Titanbleche und ein Anhänger: Die Farben entstehen allein durch die Oxidschicht." },
        { typ: "ergaenzung", text: "Implant-Titan Ti6Al4V ELI wird international nach der Norm ASTM F136 spezifiziert. Achte beim Einkauf auf einen entsprechenden Materialnachweis." }
      ],
      fragen: [
        ["Wie lautet die genaue Bezeichnung des G23-Titans?", ["Ti6Al4V ELI, Titan der Güteklasse 23", "Ti6Al4V, Titan der Güteklasse 5", "Reintitan der Güteklasse 2", "Ti6Al7Nb, Titan der Güteklasse 23"], "Kurz G23-Titan.", "S. 53"],
        ["Wie viel wiegt G23-Titan im Vergleich zu Stahl?", ["Etwa die Hälfte", "Etwa ein Viertel", "Etwa gleich viel", "Etwa doppelt so viel"], "Eine der Eigenschaften.", "S. 52"],
        ["Wie lässt sich G23-Titan färben?", ["Durch Anodisieren", "Durch Galvanisieren mit Farbpigmenten", "Durch Pulverbeschichtung", "Durch Einbrennlack"], "Elektrochemisches Verfahren.", "S. 52"],
        ["Warum ist G23-Titan antiallergen?", ["Es ist nickelfrei", "Es ist mit PTFE beschichtet", "Es enthält Vanadium, das Allergien hemmt", "Es ist vergoldet"], "Deshalb ideal als Ersteinsatz.", "S. 52"],
        ["Warum ist G23-Titan dauerhaft farbbeständig?", ["Wegen seines starken Oxidmantels", "Weil die Farbe eingebrannt ist", "Weil es mit PVD beschichtet ist", "Weil es kaum Wärme leitet"], "Korrosionsresistent.", "S. 53"],
        ["Wofür ist G23-Titan ebenfalls zugelassen?", ["Für Implantate wie künstliche Gelenke", "Nur für Schmuck und Uhren", "Nur für chirurgische Instrumente", "Für Lebensmittelverpackungen"], "Genormt als Implantatwerkstoff (ASTM F136).", "S. 53"],
        ["Wodurch entsteht beim Anodisieren die Farbe?", ["Durch eine Oxidschicht, deren Dicke von der Spannung abhängt", "Durch einen eingebrannten Farbstoff", "Durch eine PVD-Beschichtung", "Durch Beimischen anderer Metalle"], "Höhere Spannung, dickere Schicht, andere Farbe.", "S. 53"]
      ]
    },
    {
      titel: "Blackline und Zirkon Gold",
      seite: "S. 54",
      inhalt: [
        { typ: "text", text: "Blackline-Titan G23 wird mit dem Verfahren PVD (Physical Vapor Deposition) beschichtet, das seit den 80er Jahren in der Medizin verbreitet ist. In einer Gasumgebung (Plasma) entsteht eine hauchdünne, abriebfeste Schicht, ohne das Material selbst zu verändern. Blackline-Piercings sind nahezu dauerhaft kratzbeständig, farbsicher und biochemisch verträglich." },
        { typ: "text", text: "Zirkon-Gold-Titan G23 wurde als Alternative zu Goldschmuck entwickelt. Es ist hautverträglicher als Gold, verfärbt sich nur selten, hat eine glattere Oberfläche, wiegt weniger, ist preiswerter und dennoch widerstandsfähiger." },
        { typ: "ergaenzung", text: "Zirkon-Gold ist kein Gold, sondern eine goldfarbene Beschichtung, meist Zirkoniumnitrid im PVD-Verfahren. Die Vorteile oben sind Herstellerangaben. Beschichtungen können sich mit der Zeit abreiben; für den Ersteinsatz empfehlen Fachverbände wie die APP unbeschichtetes Material." }
      ],
      fragen: [
        ["Mit welchem Verfahren wird Blackline-Titan beschichtet?", ["PVD (Physical Vapor Deposition)", "Galvanisieren", "Anodisieren", "Pulverbeschichtung"], "Hauchdünn und abriebfest.", "S. 54"],
        ["Welche Eigenschaften haben Blackline-Piercings?", ["Nahezu dauerhaft kratzbeständig, farbsicher und verträglich", "Sie werden durch Anodisieren schwarz", "Sie enthalten schwarzes Nickel", "Sie sind besonders für den Ersteinsatz empfohlen"], "Siehe Kursbuch.", "S. 54"],
        ["Was ist Zirkon-Gold-Titan?", ["Titan mit goldfarbener Beschichtung als Alternative zu Goldschmuck", "Massives 14-Karat-Gold", "Vergoldeter Chirurgenstahl", "Eine Gold-Titan-Legierung"], "Glatter, leichter, preiswerter.", "S. 54"]
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
        ["Wie viel Nickel enthält Chirurgenstahl 316L?", ["10 bis 14 Prozent", "0 Prozent", "2 bis 4 Prozent", "18 bis 20 Prozent"], "Deshalb kein Ersteinsatz.", "S. 55"],
        ["Welche drei Stähle verwenden Piercer als Schmuck?", ["Komposition D Implantatstahl, 316 LVM und 316L", "303er, 304er und 316L", "316L, 316 LVM und 303er", "Nur 316L"], "Am häufigsten 316L.", "S. 55"],
        ["Wofür ist Chirurgenstahl 316L geeignet?", ["Als Zweiteinsatz nach vollständiger Abheilung", "Als Ersteinsatz bei Nickelallergikern", "Als Ersteinsatz bei Knorpelpiercings", "Nur für Werkzeuge, nicht für Schmuck"], "Als Zweiteinsatz meist bedenkenlos.", "S. 55"],
        ["Wofür wird 316L in der Medizin eingesetzt?", ["Zum Beispiel für Knochenschrauben und Herzschrittmacherelektroden", "Nur für Einwegskalpelle", "Für Kontaktlinsen", "Für künstliche Herzklappen aus Titan"], "Dazu Nadeln, Platten, Nähte, Klammern.", "S. 55"]
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
        ["Welche Materialien verwendest du als Ersteinsatz?", ["G23-Titan oder PTFE", "G23-Titan oder 316L", "PTFE oder Zirkon-Gold", "316 LVM oder Blackline-Titan"], "Viele Menschen haben unbemerkt eine Nickelallergie.", "S. 56"],
        ["Was gilt für 303er Stahl?", ["Er ruft bei Nickelsensitiven erhebliche Reaktionen hervor und ist zu meiden", "Er ist als Zweiteinsatz unbedenklich", "Er ist nickelfrei, aber schwer zu verarbeiten", "Er ist identisch mit 316L"], "Hochschwefelhaltig.", "S. 56"],
        ["Welche Materialien wären möglich, sind aber wirtschaftlich nicht sinnvoll?", ["Implantanium, Niob oder hochreines Gold", "PTFE und G23-Titan", "316L und 303er Stahl", "Blackline- und Zirkon-Gold-Titan"], "Im Buch „Nionium“, gemeint ist vermutlich Niob.", "S. 56"],
        ["Wie viel Nickel darf Schmuck für frische Piercings nach EU-Recht höchstens abgeben?", ["0,2 µg pro cm² und Woche", "0,5 µg pro cm² und Woche", "2 µg pro cm² und Woche", "0,02 µg pro cm² und Tag"], "REACH, Eintrag 27 (Ergänzung).", "Ergänzung"],
        ["Fall: Ein Kunde bringt eigenen Schmuck aus Chirurgenstahl für sein frisches Piercing mit. Was tust du?", ["Ich setze als Ersteinsatz G23-Titan oder PTFE ein", "Ich setze seinen Schmuck nach dem Autoklavieren ein", "Ich setze ihn ein, wenn er 4 mm Überlänge hat", "Ich setze ihn ein, wenn der Kunde unterschreibt"], "316L ist als Ersteinsatz ungeeignet.", "S. 55–56"]
      ]
    },
    {
      titel: "Nickelallergie erkennen",
      seite: "S. 57",
      inhalt: [
        { typ: "text", text: "Kommt die Haut einer allergischen Person mit Nickel in Berührung, rötet sie sich, schwillt an, wird rau und trocken und juckt. Manchmal schuppen oder nässen diese sogenannten Kontaktekzeme oder schwellen schmerzhaft an. Der Ausschlag kann auf kleine Flächen begrenzt bleiben oder sich über breite Hautareale bis über den ganzen Körper ausbreiten." },
        { typ: "text", text: "Ekzeme können an allen Körperstellen auftreten, die mit Nickel in Berührung gekommen sind, etwa an Händen, Gesicht, Armen, Beinen, in der Mundschleimhaut oder an den Genitalien." },
        { typ: "foto", id: "frei-metalle", text: "Metalle, die Kontaktallergien auslösen können, im Periodensystem markiert, darunter Nickel (Ni), Kobalt (Co) und Chrom (Cr)." },
        { typ: "merke", text: "Die Symptome zeigen sich erst rund 48 bis 72 Stunden nach dem Kontakt. Mediziner sprechen von einer Spättyp-Allergie. Das macht sie schwer zu erkennen." }
      ],
      fragen: [
        ["Woran erkennt man eine Nickelallergie auf der Haut?", ["Rötung, Schwellung, raue, trockene und juckende Haut", "Blaue Verfärbung um den Stichkanal", "Wildes Fleisch am Stichkanal", "Sofortige Schwellung innerhalb von Minuten"], "Manchmal nässende Kontaktekzeme.", "S. 57"],
        ["Wann treten die Symptome einer Nickelallergie auf?", ["Etwa 48 bis 72 Stunden nach dem Kontakt", "Innerhalb von Minuten", "Nach 2 bis 6 Stunden", "Erst nach 2 bis 3 Wochen"], "Spättyp-Allergie.", "S. 57"],
        ["Wie nennt man eine Allergie, die erst Tage nach dem Kontakt auftritt?", ["Spättyp-Allergie", "Soforttyp-Allergie", "Kreuzallergie", "Pseudoallergie"], "Typisch für Nickel.", "S. 57"],
        ["Kann sich der Ausschlag über den ganzen Körper ausbreiten?", ["Ja, bei einigen Betroffenen", "Nein, er bleibt immer am Schmuck", "Nur bei Knorpelpiercings", "Nur bei Kindern"], "So steht es im Kursbuch.", "S. 57"],
        ["Fall: Drei Tage nach einem Schmuckwechsel auf Stahl juckt und nässt die Stelle. Woran denkst du?", ["An eine Nickelallergie (Spättyp)", "An wildes Fleisch", "An eine normale Entzündungsphase", "An eine Perichondritis"], "Symptome nach 48 bis 72 Stunden.", "S. 57"]
      ]
    },
    {
      titel: "PTFE",
      seite: "S. 58–60",
      inhalt: [
        { typ: "text", text: "PTFE (Polytetrafluorethylen) ist ein vollfluoriertes Polymer, umgangssprachlich oft mit dem Handelsnamen Teflon bezeichnet. Weitere Handelsnamen sind Dyneon PTFE (ehemals Hostaflon) und Gore-Tex für PTFE-Membranen. PTFE zählt zu den Thermoplasten, zeigt aber auch Eigenschaften von Duroplasten." },
        { typ: "text", text: "Entgegen einer verbreiteten Meinung ist PTFE kein Nebenprodukt der Raumfahrt, die erst 1957 begann. Dr. Roy Plunkett entdeckte es 1938 bei DuPont durch Zufall, als er nach einem Kältemittel für Kühlschränke suchte. 1943 diente es erstmals als Korrosionsschutz, 1954 kam Colette Grégoire auf die Idee, Pfannen damit zu beschichten." },
        { typ: "liste", titel: "Besonderheiten", punkte: ["sehr reaktionsträge: selbst Königswasser greift es nicht an, weil die Bindung zwischen Kohlenstoff und Fluor sehr stark ist", "sehr geringer Reibungskoeffizient", "an PTFE haftet so gut wie nichts, das macht es zum idealen Ersteinsatz", "mit PTFE als Ersteinsatz sind laut Kursbuch deutlich kürzere Abheilzeiten möglich als mit Titan (Erfahrungswert, nicht durch Studien belegt)", "wegen der hohen Wärmebeständigkeit problemlos autoklavierbar"] },
        { typ: "achtung", text: "Ausnahme: Beim Zungenpiercing kein PTFE verwenden (S. 90)." }
      ],
      fragen: [
        ["Wofür steht die Abkürzung PTFE?", ["Polytetrafluorethylen", "Polytetrafluorethan", "Polyethylenterephthalat", "Polytitanfluorelement"], "Handelsname Teflon.", "S. 58"],
        ["Wer entdeckte PTFE?", ["Dr. Roy Plunkett bei DuPont, 1938", "Colette Grégoire, 1954", "Die NASA, 1957", "Wilbert Gore, 1969"], "Zufällig, bei der Suche nach einem Kältemittel.", "S. 59"],
        ["Ist PTFE ein Nebenprodukt der Raumfahrt?", ["Nein, es wurde schon 1938 entdeckt", "Ja, es wurde 1957 für Raketen entwickelt", "Ja, es kam mit der Mondlandung 1969", "Nein, es wurde 1954 für Pfannen erfunden"], "Die Raumfahrt begann erst 1957.", "S. 59"],
        ["Warum ist PTFE ein idealer Ersteinsatz?", ["An PTFE haftet so gut wie nichts", "Es ist besonders starr und formstabil", "Es gibt Silberionen ab, die Keime töten", "Es ist schwerer als Titan und sitzt stabiler"], "Kürzere Abheilzeiten möglich.", "S. 60"],
        ["Lässt sich PTFE autoklavieren?", ["Ja, problemlos", "Nein, es schmilzt bei 134 °C", "Nur bei 121 °C", "Nur im Heißluftsterilisator"], "Hohe Wärmebeständigkeit.", "S. 60"],
        ["Bei welchem Piercing verwendest du kein PTFE?", ["Beim Zungenpiercing", "Beim Lobe", "Beim Helix", "Beim Bauchnabel"], "Hinweis im Datenblatt Zunge.", "S. 90"]
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
        ["Welche Norm gehört zu Titan G23 (Ti6Al4V ELI)?", ["ASTM F136", "ASTM F138", "ASTM F67", "EN 1811"], "Auch ISO 5832-3.", "Ergänzung"],
        ["Welche Norm gehört zu Implantatstahl 316LVM?", ["ASTM F138", "ASTM F136", "ASTM F67", "ISO 5832-3"], "Er enthält Nickel; in der Akademie kein Ersteinsatz.", "Ergänzung"],
        ["Warum ist ein Innengewinde beim Ersteinsatz besser?", ["Der Stab ist glatt und reibt nicht durch den Stichkanal", "Die Kugel lässt sich leichter verlieren", "Es ist günstiger herzustellen", "Es erlaubt dickere Kugeln"], "Ein Außengewinde schrammt beim Einsetzen.", "Ergänzung"],
        ["Was verlangst du beim Einkauf vom Hersteller?", ["Ein Materialzertifikat", "Eine CE-Kennzeichnung für Modeschmuck", "Ein Foto des Schmucks am Modell", "Eine Rücknahmegarantie"], "Nur so ist das Material belegt.", "Ergänzung"],
        ["Welches Gold entspricht dem APP-Mindeststandard?", ["Massiv, mindestens 14 Karat, nickel- und cadmiumfrei", "Vergoldet, mindestens 18 Karat Auflage", "Massiv, mindestens 8 Karat", "Weißgold mit Nickelanteil"], "Eine Vergoldung kann sich abreiben.", "Ergänzung"],
        ["Wie muss die Oberfläche eines Ersteinsatzes sein?", ["Spiegelglatt poliert, ohne Kratzer und Grate", "Matt gebürstet, damit er nicht rutscht", "Leicht angeraut für besseren Halt im Gewebe", "Mit Gussnaht, das ist bei Titan normal"], "Raue Stellen reizen den Stichkanal.", "Ergänzung"]
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
        ["Wie heißt der leicht gebogene Stab mit Kugeln?", ["Curved Barbell (Banane)", "Circular Barbell", "Labret Stud", "Threaded Ring"], "Meist für Bauchnabel, Augenbraue, Rook.", "S. 61"],
        ["Was ist ein Barbell?", ["Ein gerader Metallstift mit Gewinde und verschraubbaren Kugeln", "Ein gebogener Stab mit Kugeln", "Ein Stecker mit Platte", "Ein offener Ring mit Gewinde"], "Engl. Hantel.", "S. 61"],
        ["Was hat ein Labret Stud an einem Ende?", ["Eine Platte", "Eine Kugel mit Einbuchtungen", "Ein Scharnier", "Ein Segment"], "Am anderen Ende ein Gewinde.", "S. 62"],
        ["Bei welchen Piercings wird ein Labret-Stecker auch getragen?", ["Zum Beispiel Tragus und Conch", "Vor allem beim Industrial", "Vor allem beim Bauchnabel", "Vor allem beim Septum"], "Nicht nur beim Labret.", "S. 62"]
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
        ["Wie wird ein Segmentring geschlossen?", ["Das Segment wird mit einer Zange in die Vertiefungen eingesetzt", "Mit einem Scharnier und Klick", "Eine Kugel rastet in die Öffnung ein", "Mit Gewindekugeln an beiden Enden"], "Er besteht aus zwei Teilen.", "S. 62"],
        ["Wie öffnet und schließt ein Clicker-Ring?", ["Mit Scharnier und „Klick“, ohne Werkzeug", "Mit der Ringöffnungszange", "Durch Herausdrehen einer Kugel", "Durch Einsetzen eines Segments"], "Zwei fest verbundene Teile.", "S. 62"],
        ["Wie nennt man den Ring, dessen Kugel in die Ringöffnung einrastet?", ["Ball Closure Ring (BCR)", "Clicker", "Segmentring", "Threaded Ring"], "Auch Klemmkugelring.", "S. 63"],
        ["Womit wird ein BCR zum Einsetzen der Kugel geöffnet?", ["Mit einer Spreizzange (Ringöffnungszange)", "Mit dem Kugelgreifer", "Mit der Klemmzange", "Mit dem Seitenschneider"], "Vorsichtig dehnen.", "S. 63"],
        ["Wie nennt man den Threaded Ring auch?", ["Hufeisen", "Banane", "Clicker", "Captive Ring"], "Offener Ring mit Gewinde an beiden Enden.", "S. 63"]
      ]
    },
    {
      titel: "Überlänge beim Ersteinsatz",
      seite: "S. 74",
      inhalt: [
        { typ: "achtung", text: "Der Ersteinsatz muss stets eine Überlänge von etwa 4 mm haben. Der frische Stichkanal kann anschwellen und darf während der Heilungsphase niemals durch Kugeln oder Plättchen verschlossen bzw. eingeengt werden." },
        { typ: "grafik", id: "ueberlaenge" },
        { typ: "grafik", id: "lobe3d" },
        { typ: "praxis", text: "Miss die Stelle mit dem Messschieber und plane die Überlänge ein, bevor du den Ersteinsatz aus der Sterilverpackung nimmst. Nach der Abheilung kann ein kürzerer Zweiteinsatz folgen." }
      ],
      fragen: [
        ["Wie viel Überlänge braucht ein Ersteinsatz?", ["Etwa 4 mm", "Etwa 1 mm", "Etwa 8 mm", "Etwa 1 cm"], "Der frische Stichkanal kann anschwellen.", "S. 74"],
        ["Warum darf der Ersteinsatz nicht zu kurz sein?", ["Weil Kugeln oder Plättchen sonst bei Schwellung einengen", "Weil er sonst leichter herausfällt", "Weil kurze Stäbe mehr Nickel abgeben", "Weil er sich sonst schlechter reinigen lässt"], "Grundregel aus Kap. 10.", "S. 74"],
        ["Womit misst du die Stelle für den Schmuck?", ["Mit dem Messschieber", "Mit dem Lineal auf der Haut", "Mit dem Nadelauffangrohr", "Mit dem Augenmaß und dem Hautmarker"], "Siehe Werkzeuge in Modul 7.", "S. 68"]
      ]
    }
  ],
  uebung: [
    "Sortiere Schmuckstücke aus deinem Übungsset nach Barbell, Banane, Labret, BCR und Hufeisen.",
    "Erkläre einem Kunden in zwei Sätzen, warum du als Ersteinsatz kein 316L verwendest.",
    "Miss mit dem Messschieber die Länge eines Ersteinsatzes und plane die Überlänge."
  ]
});
