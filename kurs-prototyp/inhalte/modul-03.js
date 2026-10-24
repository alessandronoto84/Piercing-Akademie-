/* Modul 03 – Anatomie, Haut und Wundheilung (neu, kein eigenes Kapitel im Kursbuch).
   Grundlagen als Entwurf (fachlich prüfen); Risikozonen aus Kursbuch S. 73, 89–92, 104; Abheilzeiten S. 49; Epithelisierung S. 50. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 3,
  titel: "Anatomie, Haut und Wundheilung",
  quelle: "Neu. Teile aus dem Kursbuch S. 48–50, 73, 89–92 und 104; Grundlagen als Entwurf",
  entwurf: true,
  ziel: "Du verstehst, durch welche Gewebe ein Stichkanal führt, warum Knorpel langsamer heilt als ein Ohrläppchen und wo Gefäße und Nerven ein Risiko sind.",
  lektionen: [
    {
      titel: "Der Aufbau der Haut",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Die Haut ist das größte Organ des Menschen. Sie besteht aus drei Schichten, und ein Stichkanal führt durch alle drei." },
        { typ: "tabelle", kopf: ["Schicht", "Aufbau", "Bedeutung beim Piercen"], zeilen: [
          ["Oberhaut (Epidermis)", "Äußerste, verhornte Schicht ohne eigene Blutgefäße", "Schutzbarriere gegen Keime. Sie wird vor dem Stich desinfiziert und wächst bei der Heilung vom Wundrand her nach."],
          ["Lederhaut (Dermis)", "Bindegewebe mit Blutgefäßen, Nerven, Haarwurzeln und Drüsen", "Hier blutet und schmerzt der Stich. Hier liegen die Gefäße, die du mit der Taschenlampe suchst."],
          ["Unterhaut (Subcutis)", "Vor allem Fettgewebe", "Polstert. An Stellen wie dem Bauchnabel bestimmt sie, wie lang der Stichkanal wird."]
        ] },
        { typ: "grafik", id: "haut" },
        { typ: "merke", text: "Je mehr Schichten und Gewebe der Stichkanal durchquert, desto länger braucht er zum Heilen." }
      ],
      fragen: [
        ["Aus wie vielen Schichten besteht die Haut?", ["Drei", "Zwei", "Fünf"], "Oberhaut, Lederhaut, Unterhaut.", "Entwurf"],
        ["Wie heißt die äußerste Hautschicht?", ["Oberhaut (Epidermis)", "Lederhaut (Dermis)", "Unterhaut (Subcutis)"], "Sie ist verhornt.", "Entwurf"],
        ["Welche Hautschicht enthält Blutgefäße und Nerven?", ["Lederhaut (Dermis)", "Oberhaut (Epidermis)", "Keine"], "Die Oberhaut hat keine eigenen Blutgefäße.", "Entwurf"],
        ["Woraus besteht die Unterhaut vor allem?", ["Aus Fettgewebe", "Aus Knorpel", "Aus Hornzellen"], "Sie polstert.", "Entwurf"],
        ["Durch welche Schichten führt ein Stichkanal?", ["Durch alle drei Schichten", "Nur durch die Oberhaut", "Nur durch die Unterhaut"], "Deshalb heilt er vom Rand her.", "Entwurf"]
      ]
    },
    {
      titel: "Knorpel, Weichgewebe und Schleimhaut",
      seite: "S. 48–49",
      inhalt: [
        { typ: "text", text: "Nicht jedes Gewebe heilt gleich schnell. Das erklärt die großen Unterschiede bei den Abheilzeiten, die du deinen Kunden nennst." },
        { typ: "tabelle", kopf: ["Gewebe", "Beispiele", "Heilung laut Kursbuch"], zeilen: [
          ["Knorpel", "Ohrmuschel, Tragus, Helix, Conch, Nasenflügel", "mindestens 3 Monate"],
          ["Weichgewebe", "Ohrläppchen, Augenbraue, Bauchnabel", "Lobe ca. 2 Monate, Augenbraue ca. 1 Monat, Bauchnabel ca. 4 bis 6 Monate"],
          ["Schleimhaut", "Zunge, Lippenbändchen, Intimbereich", "Zunge und Lippenbändchen ca. 1 Monat, Intim 2 bis 3 Monate"]
        ] },
        { typ: "grafik", id: "ohr" },
        { typ: "ergaenzung", text: "Knorpel hat keine eigenen Blutgefäße und wird nur über die umgebende Knorpelhaut versorgt. Deshalb heilt er langsam und reagiert empfindlich auf Reizung." },
        { typ: "achtung", text: "Der Wirkstoff Octenidin (in Prontolind und Octenisept) ist knorpeltoxisch. Diese Mittel nie bei Knorpelpiercings empfehlen." }
      ],
      fragen: [
        ["Warum heilen Knorpelpiercings langsamer als ein Lobe?", ["Knorpel hat keine eigenen Blutgefäße", "Knorpel ist dünner", "Sie heilen gleich schnell"], "Er wird über die Knorpelhaut versorgt.", "Entwurf"],
        ["Welche Abheilzeit nennt das Kursbuch für Knorpelpiercings?", ["Mindestens 3 Monate", "Etwa 1 Woche", "Etwa 2 Jahre"], "Zum Vergleich: Lobe ca. 2 Monate.", "S. 49"],
        ["Welches Gewebe heilt am schnellsten?", ["Schleimhaut", "Knorpel", "Alle gleich"], "Zunge und Lippenbändchen ca. 1 Monat.", "S. 49"],
        ["Zu welcher Gewebeart gehört der Helix?", ["Knorpel", "Schleimhaut", "Fettgewebe"], "Die Ohrkante ist Knorpel.", "S. 78"],
        ["Zu welcher Gewebeart gehört das Zungenpiercing?", ["Schleimhaut", "Knorpel", "Knochen"], "Schleimhaut heilt schnell.", "S. 49"],
        ["Warum ist Octenidin bei Knorpelpiercings tabu?", ["Es ist knorpeltoxisch", "Es wirkt nicht", "Es färbt den Schmuck"], "Enthalten in Prontolind und Octenisept.", "S. 48"],
        ["Welcher Teil der Ohrmuschel enthält keinen Knorpel?", ["Das Ohrläppchen", "Der Helix", "Der Tragus"], "Das Ohrläppchen ist Weichgewebe und heilt schneller.", "S. 49"]
      ]
    },
    {
      titel: "Risikozonen im Gesicht",
      seite: "S. 89–92",
      inhalt: [
        { typ: "text", text: "An einigen Stellen im Gesicht liegen wichtige Gefäße und Nerven dicht unter der Haut. Das Kursbuch nennt diese Zonen ausdrücklich." },
        { typ: "tabelle", kopf: ["Piercing", "Risiko", "Regel"], zeilen: [
          ["Augenbraue", "Lähmungsgefahr", "Nur im äußeren Drittel der Augenbraue stechen"],
          ["Cheek (Wange)", "Wichtige Arterien und Nerven, Gefahr einer Verunstaltung; Grübchen können bleiben", "Nur durch professionelle Piercer; als Anfänger ablehnen"],
          ["Bridge", "Zu tief: Druck auf Nervenbahnen; zu oberflächlich: Herauswachsen", "Als Anfänger ablehnen"],
          ["Eskimo", "Einreißen oder dauerhaftes Einfallen der Lippe", "Als Anfänger ablehnen, nicht ins Lippenrot stechen"]
        ] },
        { typ: "praxis", text: "Ein Nein zu einem riskanten Wunsch ist professionell. Empfiehl einem Kunden lieber einen erfahrenen Kollegen, als ein Piercing zu stechen, das du nicht sicher beherrschst." }
      ],
      fragen: [
        ["Wo darf ein Augenbrauenpiercing gestochen werden?", ["Nur im äußeren Drittel", "Mittig über dem Auge", "Überall"], "Sonst besteht Lähmungsgefahr.", "S. 89"],
        ["Warum lehnen Anfänger das Cheek-Piercing ab?", ["Dort verlaufen wichtige Arterien und Nerven", "Es ist zu teuer", "Es heilt zu schnell"], "Zudem droht eine Verunstaltung.", "S. 92"],
        ["Was kann ein zu tief gestochenes Bridge verursachen?", ["Druck auf Nervenbahnen", "Bessere Heilung", "Nichts"], "Zu oberflächlich wächst es heraus.", "S. 91"],
        ["Was passiert, wenn ein Bridge zu oberflächlich gestochen wird?", ["Es wächst heraus", "Es heilt schneller", "Es drückt auf Nerven"], "Als Anfänger ablehnen.", "S. 91"],
        ["Was kann beim Cheek-Piercing dauerhaft bleiben?", ["Durchs Piercen entstandene Grübchen", "Ein Tattoo", "Nichts"], "Datenblatt Cheek.", "S. 92"],
        ["Fall: Ein Kunde wünscht als erstes Piercing, das du je stichst, ein Cheek. Was tust du?", ["Ich lehne ab und empfehle einen erfahrenen Piercer", "Ich steche es trotzdem", "Ich steche es freihand ohne Vorbereitung"], "Als Anfänger ablehnen.", "S. 92"]
      ]
    },
    {
      titel: "Nerven, Arterie und Speichelgang im Gesicht",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Die Risikoregeln aus dem Kursbuch werden verständlich, wenn du weißt, was unter der Haut liegt. Zwei Bereiche sind für Piercer besonders wichtig: die Augenbraue und die Wange." },
        { typ: "grafik", id: "augenbraue" },
        { typ: "liste", titel: "Augenbraue", punkte: [
          "Über dem inneren Drittel der Augenbraue tritt der Nervus supraorbitalis aus einer kleinen Öffnung am oberen Rand der Augenhöhle (Foramen bzw. Incisura supraorbitalis), noch weiter innen der Nervus supratrochlearis. Mit ihnen laufen kleine Arterien und Venen.",
          "Beide sind Gefühlsnerven für Stirn und Oberlid. Eine Verletzung kann Taubheit, Kribbeln oder dauerhafte Missempfindungen verursachen.",
          "Die Bewegung der Stirn steuert dagegen ein Ast des Gesichtsnervs (N. facialis), der seitlich über die Schläfe zieht. Auch deshalb stichst du oberflächlich und nicht zu tief.",
          "Im äußeren Drittel liegen keine größeren Austrittspunkte. Das ist der Grund für die Regel des Kursbuchs."
        ] },
        { typ: "grafik", id: "wange" },
        { typ: "liste", titel: "Wange", punkte: [
          "Der Gesichtsnerv (N. facialis) tritt unterhalb des Ohrs aus dem Schädel, läuft durch die Ohrspeicheldrüse und fächert sich in Äste zu Stirn, Auge, Wange, Mund und Kinn auf. Er steuert die Mimik; eine Verletzung kann Teile des Gesichts lähmen.",
          "Der Speichelgang der Ohrspeicheldrüse (Ductus parotideus) verläuft etwa zwei Zentimeter unterhalb des Jochbogens quer über den Kaumuskel und mündet gegenüber dem zweiten oberen Backenzahn in den Mund.",
          "Die Gesichtsarterie (A. facialis) zieht vom Unterkieferrand schräg zum Mundwinkel und weiter zur Nase.",
          "Ein Cheek-Piercing liegt mitten in diesem Gebiet. Deshalb lehnst du es als Anfänger ab."
        ] },
        { typ: "ergaenzung", text: "Anatomische Ergänzung der Akademie auf Grundlage medizinischer Nachschlagewerke (siehe KURS-RECHERCHE.md, Abschnitt 9). Das Kursbuch spricht bei der Augenbraue von Lähmungsgefahr. Genauer betrachtet treten innen vor allem Gefühlsnerven aus, während die Stirnbewegung über einen seitlichen Ast des Gesichtsnervs läuft. An der Regel ändert das nichts." },
        { typ: "merke", text: "Die Lage von Nerven und Gefäßen ist von Mensch zu Mensch verschieden. Die Zeichnungen zeigen, wo Gefahr liegt, nicht, wo es garantiert sicher ist." }
      ],
      fragen: [
        ["Welcher Nerv tritt über dem inneren Drittel der Augenbraue aus?", ["Der Nervus supraorbitalis", "Der Ischiasnerv", "Der Hörnerv"], "Er tritt am oberen Augenhöhlenrand aus dem Knochen.", "Ergänzung"],
        ["Was kann eine Verletzung des Nervus supraorbitalis verursachen?", ["Taubheit oder Missempfindungen an Stirn und Oberlid", "Haarausfall am ganzen Kopf", "Eine Nickelallergie"], "Er ist ein Gefühlsnerv.", "Ergänzung"],
        ["Was steuert der Gesichtsnerv (N. facialis)?", ["Die Mimik", "Den Herzschlag", "Das Hören"], "Eine Verletzung kann Teile des Gesichts lähmen.", "Ergänzung"],
        ["Wo verläuft der Speichelgang der Ohrspeicheldrüse?", ["Etwa 2 cm unterhalb des Jochbogens quer über die Wange", "Mitten durch die Augenbraue", "Durch das Ohrläppchen"], "Er mündet gegenüber dem zweiten oberen Backenzahn.", "Ergänzung"],
        ["Welche Strukturen liegen im Bereich des Cheek-Piercings?", ["Äste des Gesichtsnervs, der Speichelgang und die Gesichtsarterie", "Nur Fettgewebe", "Knorpel und Knochen"], "Deshalb lehnst du das Cheek als Anfänger ab.", "S. 92"],
        ["Warum stichst du die Augenbraue nur im äußeren Drittel?", ["Weil innen Nerven und Gefäße aus dem Knochen austreten", "Weil es dort weniger weh tut", "Weil dort die Haare dichter sind"], "Austritt am inneren Augenhöhlenrand.", "S. 89"]
      ]
    },
    {
      titel: "Gefäße erkennen, Schwellkörper meiden",
      seite: "S. 73, 90, 104",
      inhalt: [
        { typ: "text", text: "Mit einer Taschenlampe mit grünem Licht kannst du zum Beispiel das Ohr durchleuchten und so Blutgefäße erkennen. Stich nie durch ein Blutgefäß, sonst kann der Kunde stark bluten." },
        { typ: "liste", titel: "Weitere Stellen, an denen du besonders aufpasst", punkte: [
          "Zunge: das Zungenbändchen nicht verletzen (S. 90).",
          "Penis: nie durch die Schwellkörper stechen. Es drohen ernsthafte Schäden bis zum Verbluten des Kunden (S. 104)."
        ] },
        { typ: "merke", text: "Erst schauen, dann anzeichnen, dann stechen. Wer die Stelle vorher gründlich prüft, vermeidet die meisten Komplikationen." }
      ],
      fragen: [
        ["Welches Licht empfiehlt das Kursbuch zum Durchleuchten des Ohrs?", ["Grünes Licht", "UV-Licht", "Rotes Licht"], "So erkennst du Blutgefäße.", "S. 73"],
        ["Warum stichst du nicht durch ein Blutgefäß?", ["Der Kunde kann sonst stark bluten", "Es heilt dann schneller", "Das ist egal"], "Gefäße vorher erkennen.", "S. 73"],
        ["Was darf beim Zungenpiercing nicht verletzt werden?", ["Das Zungenbändchen", "Die Zungenspitze", "Die Zähne"], "Von unten nach oben stechen.", "S. 90"],
        ["Was kann beim Stich durch die Schwellkörper des Penis passieren?", ["Ernsthafte Schäden bis zum Verbluten", "Nichts Besonderes", "Nur leichte Schmerzen"], "Dringend davon abzuraten.", "S. 104"]
      ]
    },
    {
      titel: "Die Phasen der Wundheilung",
      seite: "S. 50",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Ein frisches Piercing ist eine Wunde. Sie heilt in Phasen, die ineinander übergehen." },
        { typ: "schritte", punkte: [
          "Entzündungs- oder Reinigungsphase (erste Tage): Rötung, leichte Schwellung, Wärme und etwas klares Wundsekret sind normal. Deshalb braucht der Ersteinsatz Überlänge.",
          "Aufbau- oder Granulationsphase: Neues, zartes, feuchtes Gewebe (Granulationsgewebe) füllt den Stichkanal.",
          "Epithelisierung (Regenerationsphase): Vom Wundrand wandern Epithelzellen ein und wandeln das Granulationsgewebe in trockenes, festes Narbengewebe um. Die Wunde wird immer kleiner."
        ] },
        { typ: "grafik", id: "wundheilung" },
        { typ: "ergaenzung", text: "Richtwerte aus der Wundheilungslehre: Die Entzündungsphase dauert etwa 1 bis 4 Tage. Die Granulationsphase beginnt nach wenigen Tagen und reicht bis etwa zur dritten Woche. Epithelisierung und Umbau dauern Wochen bis Monate, und die Phasen gehen fließend ineinander über. Ihre größte Festigkeit erreicht eine Narbe erst nach etwa drei Monaten. Ein Stichkanal ist eine lange, schmale Wunde, die auf ganzer Länge ausheilen muss; daher die langen Abheilzeiten in Modul 10 (Quellen: KURS-RECHERCHE.md, Abschnitt 9)." },
        { typ: "achtung", text: "Setzt die Epithelisierung nicht ein, soll der Kunde nach 10 bis 14 Tagen einen Arzt aufsuchen." }
      ],
      fragen: [
        ["Was ist in den ersten Tagen nach dem Stich normal?", ["Leichte Rötung, Schwellung, Wärme und etwas klares Sekret", "Starker Eiter und Fieber", "Völlige Taubheit"], "Entzündungs- bzw. Reinigungsphase.", "Entwurf"],
        ["Warum braucht der Ersteinsatz Überlänge?", ["Weil der frische Stichkanal anschwellen kann", "Damit er schöner aussieht", "Damit er schneller herausfällt"], "Etwa 4 mm Überlänge.", "S. 74"],
        ["Wie heißt das zarte neue Gewebe im Stichkanal?", ["Granulationsgewebe", "Knorpelgewebe", "Fettgewebe"], "Es wird später zu Narbengewebe.", "S. 50"],
        ["Was ist die Epithelisierung?", ["Zellen wandern vom Wundrand ein, die Wunde wird kleiner", "Eine Entzündung", "Das Dehnen des Stichkanals"], "Auch Regenerationsphase genannt.", "S. 50"],
        ["Wann soll der Kunde bei fehlender Epithelisierung zum Arzt?", ["Nach 10 bis 14 Tagen", "Nach 1 bis 2 Tagen", "Nach 6 Monaten"], "So steht es im Kursbuch.", "S. 50"],
        ["Wie lange dauert die Entzündungsphase ungefähr?", ["Etwa 1 bis 4 Tage", "Etwa 3 Monate", "Etwa eine Stunde"], "Danach überwiegt der Aufbau neuen Gewebes.", "Ergänzung"],
        ["Wann erreicht Narbengewebe ungefähr seine größte Festigkeit?", ["Nach etwa 3 Monaten", "Nach 2 Tagen", "Nach einer Woche"], "Deshalb wird der Schmuck erst nach vollständiger Abheilung gewechselt.", "Ergänzung"],
        ["Laufen die Phasen der Wundheilung streng nacheinander ab?", ["Nein, sie gehen fließend ineinander über", "Ja, mit Pausen dazwischen", "Es gibt nur eine Phase"], "Siehe Zeitachse.", "Ergänzung"]
      ]
    },
    {
      titel: "Wer schlechter heilt",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Raucher, Alkoholiker und Diabetiker gehören zu den Risikogruppen: Bei ihnen treten Komplikationen im Heilungsprozess schneller auf." },
        { typ: "text", text: "Mögliche Ursachen für ständiges Nachbluten sind Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit. In diesem Fall sollte ein Arzt aufgesucht werden." },
        { typ: "praxis", text: "Die Einverständniserklärung fragt Krankheiten und Medikamente ab. Lies diese Angaben vor dem Stich, nicht erst danach, und sprich Risikofaktoren offen an." }
      ],
      fragen: [
        ["Welche Gruppen haben ein höheres Risiko für Heilungskomplikationen?", ["Raucher, Alkoholiker und Diabetiker", "Sportler", "Vegetarier"], "Bei ihnen treten Komplikationen schneller auf.", "S. 50"],
        ["Was kann ständiges Nachbluten verursachen?", ["Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit", "Zu viel Wasser trinken", "Zu wenig Schlaf"], "Dann einen Arzt aufsuchen.", "S. 50"],
        ["Fall: Ein Kunde gibt Diabetes an. Was ist richtig?", ["Ich kläre ihn über das höhere Heilungsrisiko auf, bevor ich steche", "Ich ignoriere die Angabe", "Ich steche doppelt so tief"], "Diabetiker zählen zu den Risikogruppen.", "S. 50"]
      ]
    }
  ],
  uebung: [
    "Zeichne einen Querschnitt durch die Haut mit den drei Schichten und einem Stichkanal.",
    "Sortiere zehn Piercings aus Modul 8 nach Gewebeart: Knorpel, Weichgewebe oder Schleimhaut.",
    "Übe mit einer Taschenlampe, an deinem eigenen Ohr Blutgefäße zu erkennen."
  ]
});
