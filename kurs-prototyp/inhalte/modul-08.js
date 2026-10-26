/* Modul 08 – Piercing-Arten. Quelle: Kursbuch Kap. 10 (S. 74–110). Datenblätter nach Buch; Intimbereich ohne Bilder.
   Zu jedem Datenblatt erzeugt werkzeuge/fragen-erzeugen.js zusätzlich Fragen zu Ersteinsatz, Kanüle und Klemme (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
(function () {
  function db(name, beschreibung, ersteinsatz, kanuele, klemme, hinweis, seite) {
    return { typ: "datenblatt", name: name, beschreibung: beschreibung, ersteinsatz: ersteinsatz, kanuele: kanuele, klemme: klemme, hinweis: hinweis || "", seite: seite };
  }
  var NICHT = "NICHT DURCHFÜHREN. Gefahr einer ernsthaften Schädigung.";
  KURS.module.push({
    nr: 8,
    titel: "Piercing-Arten",
    quelle: "Kursbuch Kap. 10, S. 74–110",
    ziel: "Du kennst für jedes Piercing Lage, Ersteinsatz, Kanüle und Klemme, und du weißt, welche Piercings du als Anfänger ablehnst oder grundsätzlich nicht durchführst.",
    lektionen: [
      {
        titel: "So liest du ein Datenblatt",
        seite: "S. 74",
        inhalt: [
          { typ: "text", text: "Zu jedem Piercing gibt es ein Datenblatt mit vier Angaben: wo es sitzt, welcher Ersteinsatz passt, welche Kanülenstärke (oder Stanze) du nimmst und womit du die Stelle hältst (Klemme, Nadelauffangrohr oder freihand)." },
          { typ: "achtung", text: "Der Ersteinsatz braucht stets eine Überlänge von etwa 4 mm, weil der frische Stichkanal anschwellen kann. Er darf während der Heilung nie durch Kugeln oder Plättchen eingeengt werden." },
          { typ: "merke", text: "In den folgenden Lektionen lernst du jedes Piercing einzeln. Nach jeder Lektion fragt der Kurs die Datenblätter ab: Ersteinsatz, Kanüle und Klemme." }
        ],
        fragen: [
          ["Welche Informationen enthält jedes Datenblatt?", ["Lage, Ersteinsatz, Kanüle und Klemme", "Lage, Preis und Abheilzeit", "Ersteinsatz, Pflegemittel und Preis", "Nur Kanüle und Klemme"], "So sind alle Datenblätter aufgebaut.", "S. 74"],
          ["Wie viel Überlänge braucht der Ersteinsatz?", ["Etwa 4 mm", "Etwa 2 mm", "Etwa 6 mm", "Etwa 1 cm"], "Der frische Stichkanal kann anschwellen.", "S. 74"],
          ["Was bedeutet „Freihand“ im Datenblatt?", ["Gestochen wird ohne Klemme oder Nadelauffangrohr", "Der Kunde hält die Stelle selbst", "Gestochen wird ohne Handschuhe", "Gestochen wird ohne Markierung"], "Statt Klemme oder Nadelauffangrohr.", "S. 74–110"]
        ]
      },
      {
        titel: "Lobe und Upper Lobe",
        seite: "S. 74–75",
        inhalt: [
          { typ: "grafik", id: "ohr" },
          db("Lobe", "Ohrläppchen. Kann zu einem Tunnel gepuncht oder gedehnt werden: mit Gleitgel und Dehnstab bzw. Dehnschnecke den abgeheilten Stichkanal um 1 bis 2 mm pro Monat dehnen.", "Labret", "18G", "Snaptile, Gazeklemme", "Standard der Akademie: 18G. Nur wenn ein Tunnel gewünscht ist: 14G oder Punch (im Kursbuch 18G, 16G, 14G, Punch).", "S. 74"),
          db("Upper Lobe", "Durch das obere Ohrläppchen. Neben dem herkömmlichen Ohrloch werden oft mehrere Upper Lobes in einer Reihe getragen.", "Labret", "18G, 16G", "Snaptile, Gazeklemme", "", "S. 75")
        ],
        fragen: [
          ["Wie dehnst du einen abgeheilten Lobe?", ["Mit Gleitgel und Dehnstab um 1 bis 2 mm pro Monat", "Mit Dehnstab um 1 bis 2 mm pro Woche", "Direkt nach dem Stechen mit 14G", "Um 5 mm pro Monat"], "Oder zu einem Tunnel punchen.", "S. 74"],
          ["Wo sitzt das Upper Lobe?", ["Im oberen Ohrläppchen", "Am Übergang zum Helix", "Im Anti-Tragus", "Im Knorpel über dem Ohrläppchen"], "Oft mehrere in einer Reihe.", "S. 75"]
        ]
      },
      {
        titel: "Tragus und Anti-Tragus",
        seite: "S. 76–77",
        inhalt: [
          db("Tragus", "Knorpelfortsatz am Gehöreingang.", "Labret, BCR, Barbell", "Punch, 18G, 16G", "Traguszange, Nadelauffangrohr", "", "S. 76"),
          db("Anti-Tragus", "Der dem Tragus gegenüberliegende Knorpelfortsatz.", "Hufeisen, Banane, BCR", "18G", "Nadelauffangrohr", "", "S. 77")
        ],
        fragen: [
          ["Was ist der Tragus?", ["Der Knorpelfortsatz am Gehöreingang", "Der Knorpelfortsatz gegenüber dem Gehöreingang", "Die innere Ohrmuschel", "Die Helixwurzel"], "Datenblatt Tragus.", "S. 76"],
          ["Wo liegt der Anti-Tragus?", ["Gegenüber dem Tragus, über dem Ohrläppchen", "Am oberen Ohrrand", "Vor dem Gehöreingang", "In der inneren Ohrmuschel"], "Ebenfalls ein Knorpelfortsatz.", "S. 77"]
        ]
      },
      {
        titel: "Helix, Industrial und Allergiepiercing",
        seite: "S. 78, 83–84",
        inhalt: [
          db("Helix", "Überall an der Ohrkante möglich, von direkt oberhalb des Ohrläppchens bis oberhalb um die Ohrmuschel-Rundung herum.", "Labret, BCR, Hufeisen", "18G", "Snaptile, Gazeklemme, Freihand", "", "S. 78"),
          db("Industrial", "Auch Scaffold. Der obere Rand der Ohrmuschel wird nahe dem Kopf und gegenüberliegend am äußeren Rand durchstochen, sodass ein langer Barbell durch beide Stichkanäle geht. Anatomisch sind es zwei Helix-Piercings.", "Barbell 38 mm", "16G", "Freihand, Nadelauffangrohr", "", "S. 84"),
          db("Allergiepiercing", "Oben mittig durch die Wölbung des Helix, am Akupunkturpunkt „Antihistamin“. Durch die dauerhafte Stimulation sollen Allergien gemildert werden.", "Hufeisen, Banane, BCR", "18G", "Freihand, Nadelauffangrohr", "Keine Heilversprechen geben oder damit werben.", "S. 83")
        ],
        fragen: [
          ["Wo kann ein Helix gestochen werden?", ["Überall an der Ohrkante", "Nur am oberen Ohrrand", "Nur in der Antihelix", "Nur an der Helixwurzel"], "Von oberhalb des Ohrläppchens bis um die Rundung.", "S. 78"],
          ["Wie viele Helix-Piercings ist ein Industrial anatomisch?", ["Zwei", "Eins", "Drei", "Ein Helix und ein Rook"], "Ein langer Barbell geht durch beide.", "S. 84"],
          ["Was ist beim Allergiepiercing verboten?", ["Heilversprechen zu geben oder damit zu werben", "Es mit 18G zu stechen", "Es mit Nadelauffangrohr zu stechen", "Es bei Allergikern zu stechen"], "Hinweis im Datenblatt.", "S. 83"]
        ]
      },
      {
        titel: "Conch und Snug",
        seite: "S. 79, 82",
        inhalt: [
          db("Conch", "Durch die innere oder äußere Ohrmuschel.", "Labret, Barbell, BCR", "18G, 16G, Punch", "Snaptile, Gazeklemme", "", "S. 79"),
          db("Snug", "Durch den Ohrknorpel in der inneren Knorpelauswölbung parallel zur Ohrkante. Nur möglich, wenn der Bereich der Ohrmuschel ausreichend ausgeprägt ist.", "Banane, Barbell, BCR, Hufeisen", "18G", "Freihand, Nadelauffangrohr", "", "S. 82")
        ],
        fragen: [
          ["Wo sitzt das Conch?", ["In der inneren oder äußeren Ohrmuschel", "In der Helixwurzel", "Im Knorpelsteg der Antihelix", "Am Gehöreingang"], "Datenblatt Conch.", "S. 79"],
          ["Wann ist ein Snug möglich?", ["Nur wenn der Bereich der Ohrmuschel ausreichend ausgeprägt ist", "Bei jedem Ohr", "Nur bei Kunden ohne Helix-Piercing", "Nur mit Biopsiestanze"], "Datenblatt Snug.", "S. 82"]
        ]
      },
      {
        titel: "Rook und Daith",
        seite: "S. 80–81",
        inhalt: [
          db("Rook", "Senkrecht in der Antihelix, dem Knorpelsteg, der das Cavum conchae rückwärts umrandet.", "Hufeisen, Banane, BCR", "18G", "Nadelauffangrohr", "", "S. 80"),
          db("Daith", "Durch die Helixwurzel (Crus helicis), die Knorpelfalte direkt über dem Gehörgang. Die Wirkung gegen Migräne ist wissenschaftlich nicht belegt.", "Banane, BCR", "18G (evtl. biegen)", "Nadelauffangrohr", "Keine Heilversprechen geben oder damit werben.", "S. 81")
        ],
        fragen: [
          ["Wo sitzt der Rook?", ["Senkrecht in der Antihelix", "Waagerecht in der Helixwurzel", "Im Tragus", "In der inneren Conch"], "Knorpelsteg um das Cavum conchae.", "S. 80"],
          ["Warum werden Rook und Daith mit Nadelauffangrohr gestochen?", ["Im Innenohr passt keine Zange", "Weil sie besonders stark bluten", "Weil sie mit Punch gestochen werden", "Weil sie besonders dicke Kanülen brauchen"], "Das Rohr schützt das umliegende Gewebe.", "S. 68"],
          ["Darfst du das Daith als Mittel gegen Migräne bewerben?", ["Nein", "Ja, mit „kann helfen“", "Ja, wenn Studien zitiert werden", "Nur mündlich, nicht schriftlich"], "Keine Heilversprechen.", "S. 81"]
        ]
      },
      {
        titel: "Nase: Nostril und Septum",
        seite: "S. 85, 88",
        inhalt: [
          db("Nase (Nostril)", "Durch den Nasenflügel. Erstmals vor etwa 4000 Jahren im Mittleren Osten praktiziert; in Indien vorzugsweise am linken Nasenflügel getragen.", "Labret", "18G", "Gazeklemme, Snaptile", "", "S. 85"),
          db("Septum", "Durch das Bindegewebe unterhalb des Nasenscheidewandknorpels (lat. Septum nasi). Eines der ältesten Piercings. Dehnbar für größeren Schmuck.", "Hufeisen", "18G, 16G", "Septum-Zange", "", "S. 88")
        ],
        fragen: [
          ["Wodurch wird das Nostril gestochen?", ["Durch den Nasenflügel", "Durch die Nasenscheidewand", "Durch den Nasenrücken", "Durch die Nasenspitze"], "Datenblatt Nostril.", "S. 85"],
          ["Durch welches Gewebe wird das Septum gestochen?", ["Durch das Bindegewebe unterhalb des Nasenscheidewandknorpels", "Durch den Nasenscheidewandknorpel", "Durch das Nasenbein", "Durch den Nasenflügel"], "Dehnbar für größeren Schmuck.", "S. 88"]
        ]
      },
      {
        titel: "Augenbraue und Bridge",
        seite: "S. 89, 91",
        inhalt: [
          { typ: "grafik", id: "augenbraue" },
          db("Augenbraue", "Meist vertikal durch die Augenbraue, etwa 8 mm Stichkanal.", "Banane, Hufeisen", "18G", "Snaptile, Gazeklemme", "Nur im äußeren Drittel der Augenbraue stechen: Innen treten Nerven und Gefäße aus (im Kursbuch: Lähmungsgefahr; siehe Modul 3).", "S. 89"),
          db("Bridge", "Auch Erl. Am oberen Ende des Nasenrückens, waagerecht auf dem Nasenbein zwischen den Augen. Zu tief kann es auf Nervenbahnen drücken, zu oberflächlich wächst es heraus.", "Barbell, Banane", "18G", "Snaptile, Gazeklemme", "Als Piercing-Anfänger ablehnen.", "S. 91")
        ],
        fragen: [
          ["Wie lang ist der Stichkanal beim Augenbrauenpiercing etwa?", ["8 mm", "4 mm", "12 mm", "2 cm"], "Datenblatt Augenbraue.", "S. 89"],
          ["Wo darf das Augenbrauenpiercing gestochen werden?", ["Nur im äußeren Drittel", "Im inneren Drittel", "Im mittleren Drittel", "Überall bei oberflächlichem Stich"], "Innen treten Nerven und Gefäße aus (im Kursbuch: Lähmungsgefahr).", "S. 89"],
          ["Wie verhältst du dich als Anfänger beim Wunsch nach einem Bridge?", ["Ich lehne ab", "Ich steche es besonders oberflächlich", "Ich steche es besonders tief", "Ich steche es mit 14G"], "Als Anfänger ablehnen.", "S. 91"]
        ]
      },
      {
        titel: "Lippe: Labret, Medusa und Eskimo",
        seite: "S. 86, 93",
        inhalt: [
          db("Labret", "Im engeren Sinn ein Piercing der Unterlippe; an der Oberlippe heißt es Medusa (mittig im Philtrum, der Rinne unter der Nase) bzw. Madonna oder Monroe (seitlich versetzt). Mehr als 3 mm Abstand zum Lippenrot.", "Labret, Hufeisen", "18G", "Snaptile, Gazeklemme", "", "S. 86"),
          db("Eskimo", "Vertikal durch die Lippe bis unterhalb der Lippe. Falsch gestochen kann die Lippe einreißen oder dauerhaft einfallen.", "Barbell, Banane", "18G", "Snaptile, Gazeklemme, Freihand", "Als Anfänger ablehnen. Nicht ins Lippenrot stechen.", "S. 93")
        ],
        fragen: [
          ["Wie viel Abstand hält ein Labret-Piercing zum Lippenrot?", ["Mehr als 3 mm", "Genau 1 mm", "Kein Abstand, direkt am Lippenrot", "Mehr als 1 cm"], "Datenblatt Labret.", "S. 86"],
          ["Wie heißt ein Piercing mittig in der Oberlippe, im Philtrum?", ["Medusa", "Monroe", "Smiley", "Eskimo"], "Labret im engeren Sinn ist die Unterlippe.", "S. 86"],
          ["Was kann ein falsch gestochenes Eskimo verursachen?", ["Einreißen oder dauerhaftes Einfallen der Lippe", "Druck auf Nervenbahnen der Stirn", "Schäden am Zungenbändchen", "Eine Perichondritis"], "Als Anfänger ablehnen.", "S. 93"]
        ]
      },
      {
        titel: "Lippenbändchen und Zunge",
        seite: "S. 87, 90",
        inhalt: [
          db("Lippenbändchen (Smiley)", "Durch das Frenulum, das die Oberlippe in der Mitte mit dem Zahnfleisch verbindet; nur beim Lächeln sichtbar.", "Hufeisen, BCR", "18G", "Septum-Zange, Freihand", "", "S. 87"),
          db("Zunge", "Vertikal in der Mitte der Zunge. Das Zungenbändchen nicht verletzen, von unten nach oben stechen, sofort mit Eiswürfel kühlen (Eiswürfel aus Kamillentee empfehlen), kein PTFE verwenden, auf mögliche Zahnschäden hinweisen.", "20 mm Barbell (nach 10 Tagen ggf. kürzer)", "16G", "Snaptile, Gazeklemme, Zungenklemme", "", "S. 90")
        ],
        fragen: [
          ["Warum heißt das Lippenbändchen-Piercing auch Smiley?", ["Weil es nur beim Lächeln sichtbar ist", "Weil es ein Lächeln formt", "Weil es durch die Mundwinkel geht", "Weil es ein Labret mit Smiley-Kugel ist"], "Durch das Frenulum.", "S. 87"],
          ["In welche Richtung wird die Zunge gestochen?", ["Von unten nach oben", "Von oben nach unten", "Seitlich von links", "Schräg von vorn"], "Datenblatt Zunge.", "S. 90"],
          ["Womit kühlt der Kunde nach dem Zungenpiercing?", ["Mit Eiswürfeln, am besten aus Kamillentee", "Mit Eisspray", "Mit kaltem Kaffee", "Mit Lidocain-Spray"], "Sofort nach dem Stechen.", "S. 90"],
          ["Wann kann der Barbell beim Zungenpiercing gekürzt werden?", ["Nach etwa 10 Tagen", "Nach 2 Tagen", "Nach 3 Monaten", "Nie, die Länge bleibt"], "Ersteinsatz 20 mm Barbell.", "S. 90"]
        ]
      },
      {
        titel: "Cheek",
        seite: "S. 92",
        inhalt: [
          { typ: "grafik", id: "wange" },
          db("Cheek", "Wangenpiercing, oft an der Stelle eines Grübchens. Hier verlaufen wichtige Arterien und Nerven; es droht eine Verunstaltung, durchs Piercen entstandene Grübchen können dauerhaft bleiben.", "Barbell, Labret", "18G", "Snaptile, Gazeklemme", "Nur durch professionelle Piercer. Als Anfänger ablehnen.", "S. 92")
        ],
        fragen: [
          ["Warum lehnen Anfänger das Cheek ab?", ["Dort verlaufen wichtige Arterien und Nerven", "Weil es nur mit Punch geht", "Weil es mit 14G gestochen wird", "Weil es keine Klemme gibt"], "Gefahr einer Verunstaltung.", "S. 92"],
          ["Was kann beim Cheek dauerhaft bleiben?", ["Durchs Piercen entstandene Grübchen", "Ein Einfallen der Lippe", "Eine Taubheit der Zunge", "Ein Herauswachsen des Labrets"], "Datenblatt Cheek.", "S. 92"]
        ]
      },
      {
        titel: "Bauchnabel",
        seite: "S. 94",
        inhalt: [
          db("Bauchnabel", "Vertikal oberhalb oder unterhalb des Nabels, etwa 1 cm Stichkanallänge. Im Liegen stechen: Das erleichtert die Arbeit und beugt Kreislaufproblemen vor. Mit sterilem Pflaster abkleben und Pflaster für die nächsten 3 Tage empfehlen.", "Banane, BCR", "16G", "Snaptile, Freihand", "", "S. 94")
        ],
        fragen: [
          ["Wie wird ein Bauchnabelpiercing gestochen?", ["Im Liegen, um Kreislaufproblemen vorzubeugen", "Im Stehen, damit der Nabel richtig sitzt", "Im Sitzen", "Im Stehen, danach im Liegen kontrollieren"], "Erleichtert auch die Arbeit.", "S. 94"],
          ["Wie lang ist der Stichkanal beim Bauchnabel etwa?", ["1 cm", "5 mm", "2 cm", "3 cm"], "Datenblatt Bauchnabel.", "S. 94"],
          ["Wie lange soll der Kunde ein Pflaster tragen?", ["Die nächsten 3 Tage", "Nur am ersten Tag", "2 Wochen", "Bis zur vollständigen Abheilung"], "Steriles Pflaster.", "S. 94"]
        ]
      },
      {
        titel: "Brustwarze",
        seite: "S. 95",
        inhalt: [
          db("Brustwarze", "Durch die Brustwarze bzw. den Warzenhof, meist horizontal oder vertikal, bei Frauen und Männern. Mehrere Piercings übereinander sind möglich. Zum Anzeichnen den Oberkörper komplett frei machen; mit sterilem Pflaster abkleben und Pflaster für 3 Tage empfehlen.", "Barbell, BCR", "16G", "Snaptile, Gazeklemme", "", "S. 95")
        ],
        fragen: [
          ["Was muss zum Anzeichnen eines Brustwarzenpiercings geschehen?", ["Den Oberkörper komplett frei machen", "Nur die eine Seite frei machen", "Den Kunden hinlegen", "Die Brustwarze vorher kühlen"], "Datenblatt Brustwarze.", "S. 95"],
          ["Wie lange heilt ein Brustwarzenpiercing laut Kursbuch?", ["3 bis 12 Monate", "1 bis 2 Monate", "4 bis 6 Monate", "Mindestens 3 Monate wie Knorpel"], "Siehe Abheilzeiten.", "S. 49"]
        ]
      },
      {
        titel: "Surface",
        seite: "S. 96",
        inhalt: [
          db("Surface", "Oberflächenpiercing an Stellen, die weder konvex noch konkav sind; Ein- und Austritt liegen auf einer Ebene. Wird häufiger abgestoßen und wächst heraus, die Heilung dauert deutlich länger. Passender Schmuck und präzise Platzierung senken das Risiko.", "Bar, Banane, Dermal Anchor", "16G, 18G, Punch", "Freihand, Snaptile, Gazeklemme", "", "S. 96")
        ],
        fragen: [
          ["Was ist typisch für Surface-Piercings?", ["Sie werden häufiger abgestoßen und heilen deutlich länger", "Sie heilen schneller als Lobe", "Sie liegen immer an gewölbten Stellen", "Sie werden nur mit Nadelauffangrohr gestochen"], "Ein- und Austritt auf einer Ebene.", "S. 96"],
          ["Was senkt das Risiko des Herauswachsens beim Surface?", ["Passender Schmuck und präzise Platzierung", "Ein besonders dünner Ring", "Ein früher Schmuckwechsel", "Ein besonders kurzer Stab"], "Datenblatt Surface.", "S. 96"]
        ]
      },
      {
        titel: "Intimbereich Männer (nur für Volljährige)",
        seite: "S. 97–102",
        inhalt: [
          { typ: "text", text: "Diese Lektion behandelt die Intimpiercings beim Mann aus dem Kursbuch ohne Abbildungen." },
          db("Frenulum", "Etwas unterhalb des Vorhautbändchens, damit das Bändchen nicht ausreißt. Heilt meist in vier bis acht Wochen; bei beschnittenen Männern nur möglich, wenn genug Bändchen vorhanden ist.", "Banane, Barbell", "16G, 18G", "Nadelauffangrohr, Freihand, Gazeklemme", "", "S. 97"),
          db("Prinz Albert", "Von der Harnröhre bis zur Unterseite des Penis. Die Nadel zuerst etwas in die Kanüle zurückziehen, richtig platzieren, dann durch Vorschieben der Nadel stechen. Die Kunststoffkanüle darf nicht abknicken.", "BCR", "14G", "Freihand", "Standard der Akademie: 14G-Kanüle (im Kursbuch 14G oder 16G).", "S. 98"),
          db("Dydoe", "Durch den Rand der Eichel, überwiegend bei beschnittenen Männern.", "Banane, Barbell", "16G, 18G", "Freihand", "", "S. 99"),
          db("Pubic", "Am Penisansatz, meist waagerecht genau an der Übergangsstelle. Oberflächenpiercing, neigt zum Herauswachsen; Schambehaarung vorher entfernen.", "BCR, Barbell, Bar, Banane", "16G, 18G", "Freihand, Gazeklemme", "", "S. 100"),
          db("Hafada", "Auch Scrotal. In der Haut des Hodensacks, nicht sehr tief; geringe Gefahr des Herauswachsens.", "BCR, Banane", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 101"),
          db("Guiche", "Durch die Raphe (Damm), quer zur Naht; auch bei Frauen möglich.", "BCR, Barbell", "16G, 18G", "Freihand", "", "S. 102")
        ],
        fragen: [
          ["Was ist beim Prinz Albert besonders zu beachten?", ["Die Kunststoffkanüle darf beim Vorschieben nicht abknicken", "Er wird mit 18G und Klemme gestochen", "Er wird mit Barbell gestochen", "Er wird durch die Schwellkörper gestochen"], "Sonst kann die Nadel die Kanüle durchstechen.", "S. 98"],
          ["Was ist vor einem Pubic-Piercing zu tun?", ["Den Bereich von Schambehaarung befreien", "Den Bereich mit Eisspray kühlen", "Lidocain auftragen", "Eine Biopsiestanze vorbereiten"], "Oberflächenpiercing am Penisansatz.", "S. 100"],
          ["Wie schnell heilt ein Frenulumpiercing meist?", ["In vier bis acht Wochen", "In 3 bis 6 Monaten", "In einer Woche", "In 6 bis 12 Monaten"], "Datenblatt Frenulum.", "S. 97"]
        ]
      },
      {
        titel: "Intimbereich Frauen (nur für Volljährige)",
        seite: "S. 105–107",
        inhalt: [
          { typ: "text", text: "Diese Lektion behandelt die Intimpiercings bei der Frau aus dem Kursbuch ohne Abbildungen." },
          db("Christina", "Vertikal in die Falte der oben zusammenlaufenden großen Schamlippen, Austritt am Venushügel. Nicht bei jeder Frau anatomisch möglich.", "Banane, Barbell, BCR", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 105"),
          db("Klitorisvorhaut", "Durch die Klitorisvorhaut, vertikal oder horizontal; die Klitoris selbst wird nicht durchstochen.", "BCR, Banane, Barbell", "16G, 18G", "Freihand", "", "S. 106"),
          db("Schamlippe", "In den inneren oder äußeren Schamlippen.", "BCR", "16G, 18G", "Freihand, Snaptile, Gazeklemme", "", "S. 107")
        ],
        fragen: [
          ["Was gilt für das Christina-Piercing?", ["Es ist nicht bei jeder Frau anatomisch möglich", "Es wird durch die Klitorisvorhaut gestochen", "Es ist mit „Nicht durchführen“ markiert", "Es heilt in 2 Wochen"], "Datenblatt Christina.", "S. 105"],
          ["Wird beim Klitorisvorhautpiercing die Klitoris durchstochen?", ["Nein, nur die Vorhaut", "Ja, vertikal", "Ja, horizontal", "Ja, wenn gewünscht"], "Nur die Vorhaut.", "S. 106"]
        ]
      },
      {
        titel: "Diese Piercings führst du nicht durch",
        seite: "S. 103–110",
        inhalt: [
          { typ: "text", text: "Einige Intimpiercings sind im Kursbuch ausdrücklich mit „Nicht durchführen“ markiert. Du stichst sie nie, auch nicht auf ausdrücklichen Wunsch." },
          db("Ampallang", "Horizontal durch die Eichel.", "–", "–", "–", NICHT, "S. 103"),
          db("Apadravya", "Vertikal durch die Eichel.", "–", "–", "–", NICHT + " Nie durch die Schwellkörper stechen: es drohen ernsthafte Schäden bis zum Verbluten.", "S. 104"),
          db("Klitoris direkt", "Durch die Klitoris selbst.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung der Libido.", "S. 108"),
          db("Prinzessin Albertina", "Vertikal von der Harnröhrenöffnung zur Vaginalöffnung.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung.", "S. 109"),
          db("Fourchette", "Vertikal an der unteren Stelle des Zusammentreffens der kleinen Schamlippen; stark anatomieabhängig.", "–", "–", "–", "NICHT DURCHFÜHREN. Gefahr einer Schädigung.", "S. 110")
        ],
        fragen: [
          ["Welches Piercing führst du grundsätzlich nicht durch?", ["Ampallang", "Christina", "Frenulum", "Hafada"], "Gefahr einer ernsthaften Schädigung.", "S. 103"],
          ["Warum stichst du nie durch die Schwellkörper des Penis?", ["Es drohen ernsthafte Schäden bis zum Verbluten", "Es heilt nur langsamer", "Es verursacht eine Nickelallergie", "Es wächst sofort heraus"], "Hinweis beim Apadravya.", "S. 104"],
          ["Was droht laut Kursbuch beim Piercing der Klitoris direkt?", ["Eine Schädigung der Libido", "Ein Herauswachsen", "Eine Perichondritis", "Nur eine längere Heilung"], "Nicht durchführen.", "S. 108"],
          ["Fall: Ein Kunde bietet dir viel Geld für ein Ampallang. Was tust du?", ["Ich lehne ab", "Ich steche es mit Betäubung", "Ich steche es, wenn er einen Haftungsausschluss unterschreibt", "Ich steche es mit dünnerer Kanüle"], "Nicht durchführen, auch nicht auf Wunsch.", "S. 103"]
        ]
      }
    ],
    uebung: [
      "Schreibe für Lobe, Helix, Tragus und Nostril die Datenblätter aus dem Gedächtnis auf.",
      "Übe am Silikon-Ohr: Stelle anzeichnen, Klemme setzen, Kanüle ansetzen (ohne zu stechen).",
      "Liste alle Piercings auf, die du als Anfänger ablehnst, und alle, die du nie durchführst."
    ]
  });
})();
