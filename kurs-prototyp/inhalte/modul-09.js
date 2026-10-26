/* Modul 09 – Ablauf, Kundengespräch, Notfälle. Quelle: Kursbuch Kap. 11 (S. 111–113), Erste Hilfe S. 26, Nachbluten S. 50.
   Fragen zur Reihenfolge der Schritte erzeugt werkzeuge/fragen-erzeugen.js zusätzlich (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 9,
  titel: "Ablauf, Kundengespräch, Notfälle",
  quelle: "Kursbuch Kap. 11, S. 111–113",
  ziel: "Du kennst den Ablauf vom Betreten des Studios bis zur Nachsorge in 26 Schritten und weißt, was du bei Kreislaufproblemen tust.",
  lektionen: [
    {
      titel: "Empfang und Kundengespräch",
      seite: "S. 111",
      inhalt: [
        { typ: "schritte", start: 1, punkte: [
          "Der Kunde betritt das Piercingstudio.",
          "Begrüßung, Small Talk.",
          "Fragen, welche Piercings gewünscht sind, eventuell Angst nehmen.",
          "Einverständniserklärung ausfüllen lassen."
        ] },
        { typ: "praxis", text: "Das Gespräch ist mehr als Höflichkeit. Hier erfährst du, was der Kunde wirklich will, und du erkennst Unsicherheit, Angst oder Risiken wie Medikamente, bevor jemand auf der Liege liegt." }
      ],
      fragen: [
        ["Was passiert in Schritt 2 des Ablaufs?", ["Begrüßung und Small Talk", "Einverständniserklärung ausfüllen", "Arbeitsplatz vorbereiten", "Gewünschtes Piercing klären"], "Ablauf Kap. 11.", "S. 111"],
        ["Was klärst du in Schritt 3?", ["Welche Piercings gewünscht sind, eventuell Angst nehmen", "Welche Kanüle du nimmst", "Ob der Kunde bar zahlt", "Welches Pflegemittel er hat"], "Ablauf Kap. 11.", "S. 111"],
        ["Wann lässt du die Einverständniserklärung ausfüllen?", ["Vor dem Stich, in Schritt 4", "Nach dem Anzeichnen, kurz vor dem Stich", "Nach dem Stich, zusammen mit den Pflegehinweisen", "Bei der Terminvereinbarung am Telefon"], "Parallel bereitest du den Arbeitsplatz vor.", "S. 111"]
      ]
    },
    {
      titel: "Vorbereitung und Anzeichnen",
      seite: "S. 111",
      inhalt: [
        { typ: "schritte", start: 5, punkte: [
          "Währenddessen den Arbeitsplatz vorbereiten und alle Instrumente parat legen.",
          "Der Kunde betritt den Piercingraum: für eine angenehme Atmosphäre sorgen, dem Kunden die Angst nehmen.",
          "Die Stelle begutachten und den passenden Ersteinsatz wählen (Überlänge!).",
          "Die Stelle desinfizieren (Alkoholtupfer).",
          "Ein- und Austrittsstelle der Kanüle mit dem Einmalstift markieren.",
          "Den Kunden schauen lassen, ob es so passt."
        ] },
        { typ: "merke", text: "Schritt 10 ist dein Sicherheitsnetz: Der Kunde sieht die Markierung, bevor gestochen wird. Was jetzt nicht passt, lässt sich noch ändern." }
      ],
      fragen: [
        ["Wann bereitest du Arbeitsplatz und Instrumente vor?", ["Während der Kunde die Einverständniserklärung ausfüllt", "Bevor der Kunde das Studio betritt, für den ganzen Tag", "Nach dem Anzeichnen", "Wenn der Kunde schon auf der Liege liegt"], "Schritt 5.", "S. 111"],
        ["Worauf achtest du beim Wählen des Ersteinsatzes?", ["Auf die Überlänge", "Auf die Lieblingsfarbe des Kunden", "Auf ein möglichst kurzes Modell", "Auf den Preis"], "Schritt 7.", "S. 111"],
        ["Womit desinfizierst du die Stelle in Schritt 8?", ["Mit einem Alkoholtupfer", "Mit Kochsalzlösung", "Mit Kodan erst nach dem Stich", "Mit Chlorhexamed"], "Ablauf Schritt 8.", "S. 111"],
        ["Womit markierst du Ein- und Austrittsstelle?", ["Mit dem Einmalstift", "Mit einem desinfizierten Kugelschreiber", "Mit der Kanülenspitze", "Mit einem Kajalstift"], "Schritt 9.", "S. 111"],
        ["Warum lässt du den Kunden nach dem Anzeichnen schauen?", ["Damit er prüft, ob es so passt", "Damit er sich an die Nadel gewöhnt", "Damit die Desinfektion einwirkt", "Weil das Gesundheitsamt es verlangt"], "Schritt 10.", "S. 111"]
      ]
    },
    {
      titel: "Der Stich",
      seite: "S. 112",
      inhalt: [
        { typ: "foto", id: "stechen", text: "Stechen am Ohr mit Handschuhen und Kanüle. Kursbuch S. 111." },
        { typ: "schritte", start: 11, punkte: [
          "Klemme bzw. Nadelauffangrohr anlegen.",
          "Stechen, im Idealfall immer in die sichtbare Seite, beim Labret zum Beispiel dort, wo die Kugel sitzt. Je schneller gestochen wird, desto weniger Schmerzen.",
          "Kanüle herausziehen; der Kunststoffüberzug bleibt im Stichkanal.",
          "Kunststoffüberzug mit der Schere leicht kürzen, damit der Schmuck besser hineingeht.",
          "Ersteinsatz in den Kunststoffüberzug stecken.",
          "Durch den Stichkanal drücken, nicht ziehen, sonst kann der Schmuck abrutschen. Das ist schmerzhaft: den Kunden dabei ausatmen lassen."
        ] },
        { typ: "grafik", id: "stich" }
      ],
      fragen: [
        ["Wohin stichst du im Idealfall?", ["In die sichtbare Seite, beim Labret dort, wo die Kugel sitzt", "Immer von der Innenseite nach außen", "Immer von hinten nach vorn", "Dorthin, wo die Platte sitzt"], "Schritt 12.", "S. 112"],
        ["Was gilt für die Geschwindigkeit des Stichs?", ["Je schneller gestochen wird, desto weniger Schmerzen", "Langsam stechen, damit das Gewebe nachgibt", "Die Geschwindigkeit hat keinen Einfluss", "Schnell nur bei Knorpel, sonst langsam"], "Schritt 12.", "S. 112"],
        ["Warum kürzt du den Kunststoffüberzug?", ["Damit der Schmuck besser hineingeht", "Damit er nicht im Kanal bleibt", "Damit die Nadel leichter herauskommt", "Damit weniger Blut austritt"], "Schritt 14.", "S. 112"],
        ["Was lässt du den Kunden beim Durchdrücken des Schmucks tun?", ["Ausatmen", "Einatmen und die Luft anhalten", "Laut zählen", "Die Augen schließen und schlucken"], "Schritt 16.", "S. 112"]
      ]
    },
    {
      titel: "Schmuck sichern",
      seite: "S. 112",
      inhalt: [
        { typ: "schritte", start: 17, punkte: [
          "Röhrchen vorsichtig vom Schmuck abziehen.",
          "Kugel greifen.",
          "Schmuck mit der Klemmzange festhalten und die Kugel fest aufdrehen.",
          "Nochmals mit Kodan einsprühen.",
          "Dem Kunden das Piercing im Spiegel zeigen."
        ] }
      ],
      fragen: [
        ["Womit hältst du den Schmuck fest, während du die Kugel aufdrehst?", ["Mit der Klemmzange", "Mit dem Kugelgreifer", "Mit der Piercing-Zange mit Fenster", "Mit dem Messschieber"], "Schritt 19.", "S. 112"],
        ["Womit wird nach dem Einsetzen nochmals eingesprüht?", ["Mit Kodan", "Mit Octenisept", "Mit Eisspray", "Mit Kochsalzlösung"], "Schritt 20.", "S. 112"],
        ["Was passiert in Schritt 21?", ["Dem Kunden das Piercing im Spiegel zeigen", "Mit Kodan einsprühen", "Die Kugel fest aufdrehen", "Mit Pflaster abkleben"], "Ablauf Kap. 11.", "S. 112"]
      ]
    },
    {
      titel: "Nachsorge und Abschluss",
      seite: "S. 113",
      inhalt: [
        { typ: "schritte", start: 22, punkte: [
          "Eventuell mit Pflaster abkleben (Brustwarze, Bauchnabel).",
          "Bei Zungenpiercings einen Eiswürfel geben.",
          "Pflegemittel mitgeben und Pflegehinweise mündlich erklären.",
          "Pflegehinweise am besten auch schriftlich aushändigen.",
          "Bei Wundheilstörungen soll der Kunde zur Beratung wiederkommen (siehe Modul 10)."
        ] }
      ],
      fragen: [
        ["Bei welchen Piercings wird eventuell mit Pflaster abgeklebt?", ["Zum Beispiel Brustwarze und Bauchnabel", "Zum Beispiel Lobe und Helix", "Zum Beispiel Zunge und Lippe", "Bei allen Knorpelpiercings"], "Schritt 22.", "S. 113"],
        ["Was bekommt der Kunde nach einem Zungenpiercing?", ["Einen Eiswürfel", "Ein steriles Pflaster", "Eine Lidocain-Lutschtablette", "Ein Glas warmen Tee"], "Schritt 23.", "S. 113"],
        ["Wie gibst du die Pflegehinweise weiter?", ["Mündlich und am besten auch schriftlich", "Nur mündlich", "Nur per Link auf die Website", "Nur auf Nachfrage"], "Schritte 24 und 25.", "S. 113"],
        ["Was soll der Kunde bei Wundheilstörungen tun?", ["Zur Beratung wiederkommen", "Den Schmuck selbst herausnehmen", "Mit Teebaumöl pur behandeln", "Den Schmuck gegen Stahl tauschen"], "Schritt 26.", "S. 113"]
      ]
    },
    {
      titel: "Kreislaufprobleme und Notfälle",
      seite: "S. 26, 50, 113",
      inhalt: [
        { typ: "achtung", text: "Bekommt der Kunde während des Vorgangs einen Kreislaufabfall (immer nachfragen!), gib ihm Traubenzucker (zum Beispiel Dextro Energy) und etwas zu trinken. Lege ihn gegebenenfalls hin und lass ihn ruhen." },
        { typ: "ergaenzung", text: "Bewährt bei einem Kreislaufkollaps: flach hinlegen und die Beine hochlagern, damit das Blut zum Kopf zurückfließt. Traubenzucker und Getränk erst, wenn der Kunde wieder sicher schlucken kann." },
        { typ: "liste", titel: "Vorbereitet sein", punkte: [
          "Ein aktueller Erste-Hilfe-Kasten hängt gut sichtbar und schnell erreichbar im Studio.",
          "Notfallnummern (Notarzt, Hausarzt, Feuerwehr) sind ausgehängt.",
          "Bauchnabelpiercings werden im Liegen gestochen, auch um Kreislaufproblemen vorzubeugen.",
          "Bei ständigem Nachbluten soll ein Arzt aufgesucht werden. Als mögliche Ursachen nennt das Kursbuch Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit; häufig stecken auch blutverdünnende Medikamente dahinter (siehe Modul 3)."
        ] },
        { typ: "ergaenzung", text: "Bei Bewusstlosigkeit, Atemnot oder einer starken allergischen Reaktion sofort den Notruf 112 wählen. Ein Erste-Hilfe-Kurs, regelmäßig aufgefrischt, gehört zur Grundausstattung jedes Piercers." }
      ],
      fragen: [
        ["Was hilft bei einem Kreislaufabfall?", ["Hinlegen, Beine hoch, ruhen lassen; dann Traubenzucker und etwas trinken", "Aufrecht hinsetzen und Kaffee geben", "Weiterstechen, damit es schnell vorbei ist", "Kaltes Wasser ins Gesicht und aufstehen lassen"], "Siehe S. 113.", "S. 113"],
        ["Wie erkennst du rechtzeitig einen Kreislaufabfall?", ["Ich frage während des Vorgangs immer nach", "Ich messe vorher den Blutdruck", "Ich achte nur auf Schweiß", "Gar nicht, der Kunde meldet sich"], "„Immer fragen!“", "S. 113"],
        ["Welche Notfallnummern sollten aushängen?", ["Notarzt, Hausarzt, Feuerwehr", "Polizei und Gesundheitsamt", "Nur die 110", "Lieferant und Vermieter"], "Kap. 5.4.", "S. 26"],
        ["Welche Nummer wählst du bei Bewusstlosigkeit?", ["112", "110", "116 117", "Die Nummer des Hausarztes"], "Ergänzung der Akademie.", "Ergänzung"],
        ["Fall: Beim Stechen wird die Kundin blass und ihr wird schwindelig. Was tust du?", ["Abbrechen, hinlegen, Beine hoch, später Traubenzucker und Getränk", "Schnell zu Ende stechen", "Sie aufstehen und herumlaufen lassen", "Eisspray auf die Stelle sprühen"], "Kreislaufabfall, siehe S. 113.", "S. 113"]
      ]
    }
  ],
  uebung: [
    "Spiele den Ablauf mit einer Übungsperson bis Schritt 10 durch, ohne zu stechen.",
    "Formuliere, wie du in Schritt 3 einem ängstlichen Kunden die Angst nimmst.",
    "Lege Traubenzucker, Getränk und Erste-Hilfe-Kasten an deinem Arbeitsplatz bereit."
  ]
});
