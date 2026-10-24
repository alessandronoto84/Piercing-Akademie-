/* Modul 10 – Pflege und Wundheilstörungen. Quelle: Kursbuch Kap. 6 (S. 48–51). Korrektur: „Octenisept“ statt „Octinesept“.
   Fragen zu den Abheilzeiten erzeugt werkzeuge/fragen-erzeugen.js zusätzlich (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 10,
  titel: "Pflege und Wundheilstörungen",
  quelle: "Kursbuch Kap. 6, S. 48–51",
  ziel: "Du gibst die richtigen Pflegehinweise, kennst die Abheilzeiten und erkennst Wundheilstörungen, bevor sie zum Problem werden.",
  lektionen: [
    {
      titel: "Pflege anleiten",
      seite: "S. 48",
      inhalt: [
        { typ: "text", text: "Nach dem Stechen ist eine richtige Behandlung und Pflege durch den Kunden selbst unumgänglich, damit die Abheilung bestmöglich verläuft. Deshalb musst du den Kunden in jedem Fall darauf hinweisen, wie das neu gestochene Piercing behandelt und gepflegt wird." },
        { typ: "merke", text: "Gib dem Kunden direkt das richtige Pflegemittel und die Pflegehinweise in schriftlicher Form mit." }
      ],
      fragen: [
        ["Wer pflegt das frische Piercing nach dem Stechen?", ["Der Kunde selbst", "Der Piercer bei täglichen Terminen", "Der Hausarzt", "Niemand, es heilt von selbst"], "Deshalb muss er genau angeleitet werden.", "S. 48"],
        ["Wie gibst du Pflegehinweise am besten weiter?", ["Schriftlich, zusammen mit dem Pflegemittel", "Nur mündlich, damit der Kunde zuhört", "Per Social Media", "Erst beim Nachkontrolltermin"], "Sehr zu empfehlen.", "S. 48"]
      ]
    },
    {
      titel: "Die richtigen Pflegemittel",
      seite: "S. 48",
      inhalt: [
        { typ: "tabelle", kopf: ["Pflegemittel", "Einsatz"], zeilen: [
          ["Prontolind (Polihexanid) oder Octenisept (Octenidin)", "Nicht auf Knorpel anwenden: Octenidin schädigt in Laborstudien Knorpelzellen; die Akademie meidet am Knorpel beide Mittel."],
          ["Einfache Kochsalzlösung", "Für alle Piercings geeignet"],
          ["Chlorhexamed (Chlorhexidin)", "Für den Mundbereich; nur wenige Tage bis etwa 2 Wochen, längere Anwendung kann Zähne und Zunge verfärben"]
        ] },
        { typ: "praxis", text: "Frag vor der Empfehlung immer, wo das Piercing sitzt. Beim Knorpel bleibt Kochsalzlösung die sichere Wahl." }
      ],
      fragen: [
        ["Welcher Wirkstoff in Octenisept schädigt in Laborstudien Knorpelzellen?", ["Octenidin", "Natriumchlorid", "Polihexanid", "Chlorhexidin"], "Nicht auf Knorpel anwenden.", "S. 48"],
        ["Welches Pflegemittel empfiehlst du für den Mundbereich?", ["Chlorhexamed", "Octenisept", "Teebaumöl pur", "Tyrosur-Gel"], "Laut Kursbuch.", "S. 48"],
        ["Welches Mittel passt für alle Piercings?", ["Einfache Kochsalzlösung", "Prontolind", "Octenisept", "Chlorhexamed"], "Auch bei Knorpel.", "S. 48"],
        ["Fall: Ein Kunde mit frischem Conch-Piercing fragt nach Prontolind. Was antwortest du?", ["Nicht beim Knorpel; ich empfehle Kochsalzlösung", "Ja, Prontolind enthält kein Octenidin, also passt es", "Ja, aber nur verdünnt", "Nein, nimm stattdessen Octenisept"], "Prontolind enthält Polihexanid; die Akademie meidet es trotzdem am Knorpel.", "S. 48"]
      ]
    },
    {
      titel: "Abheilzeiten",
      seite: "S. 49",
      inhalt: [
        { typ: "text", text: "Jeder Mensch heilt anders, und einige Umstände beeinflussen die Heilungszeit. Die folgenden Zeiten sind Richtwerte, wenn das Piercing optimal und ohne Komplikationen verheilt." },
        { typ: "tabelle", kopf: ["Piercing", "Abheilzeit"], zeilen: [
          ["Knorpelpiercings", "mindestens 3 Monate"], ["Lobe", "ca. 2 Monate"], ["Bauchnabel", "ca. 4 bis 6 Monate"], ["Labret", "ca. 1 bis 2 Monate"], ["Lippenbändchen", "ca. 1 Monat"], ["Zunge", "ca. 1 Monat"], ["Brustwarze", "3 bis 12 Monate"], ["Augenbraue", "ca. 1 Monat"], ["Intim", "2 bis 3 Monate"]
        ] },
        { typ: "diagramm", titel: "Abheilzeiten im Vergleich", einheit: "Monate, Richtwerte bei komplikationsfreier Heilung", max: 12, schritt: 1,
          alt: "Balkendiagramm der Abheilzeiten in Monaten: Zunge, Lippenbändchen und Augenbraue etwa 1, Labret 1 bis 2, Lobe etwa 2, Intim 2 bis 3, Knorpel mindestens 3, Bauchnabel 4 bis 6, Brustwarze 3 bis 12 Monate.",
          text: "Dunkel: sichere Mindestzeit, hell: Spanne. Schleimhaut heilt am schnellsten, Knorpel, Bauchnabel und Brustwarze brauchen am längsten.",
          zeilen: [["Zunge", 1, null, false, "ca. 1"], ["Lippenbändchen", 1, null, false, "ca. 1"], ["Augenbraue", 1, null, false, "ca. 1"], ["Labret", 1, 2, false, "1–2"], ["Lobe", 2, null, false, "ca. 2"], ["Intim", 2, 3, false, "2–3"], ["Knorpel", 3, null, true, "mindestens 3"], ["Bauchnabel", 4, 6, false, "4–6"], ["Brustwarze", 3, 12, false, "3–12"]] },
        { typ: "ergaenzung", text: "Andere Quellen nennen teils deutlich längere Zeiten, zum Beispiel Knorpel 3 bis 12 Monate, Bauchnabel 6 bis 12 Monate, Augenbraue 6 bis 8 Wochen. Kläre deine Kunden lieber vorsichtig auf: Lieber zu lange warten als zu früh wechseln." },
        { typ: "achtung", text: "Erst nach vollständiger Ausheilung darf der Schmuck gewechselt werden, sonst besteht die Gefahr von Komplikationen wie einer Infektion." }
      ],
      fragen: [
        ["Sind die Abheilzeiten feste Garantien?", ["Nein, es sind Richtwerte bei optimaler Heilung", "Ja, für gesunde Erwachsene", "Ja, wenn die Pflege eingehalten wird", "Nur bei PTFE-Schmuck"], "Jeder Mensch heilt anders.", "S. 49"],
        ["Wann darf der Schmuck gewechselt werden?", ["Erst nach vollständiger Ausheilung", "Nach 2 Wochen, wenn die Pflege endet", "Wenn die Schwellung weg ist", "Nach 4 Wochen bei allen Piercings"], "Sonst droht eine Infektion.", "S. 49"],
        ["Welches Piercing hat die größte Spanne bei der Abheilzeit?", ["Brustwarze, 3 bis 12 Monate", "Bauchnabel, 4 bis 6 Monate", "Intim, 2 bis 3 Monate", "Labret, 1 bis 2 Monate"], "Siehe Diagramm.", "S. 49"],
        ["Fall: Eine Kundin will ihr 4 Wochen altes Helix-Piercing gegen einen Ring tauschen. Was rätst du?", ["Warten: Knorpel braucht mindestens 3 Monate", "Wechseln ist ok, wenn es nicht mehr rot ist", "Wechseln, aber nur auf Titan", "Wechseln nach 6 Wochen"], "Erst nach vollständiger Ausheilung wechseln.", "S. 49"]
      ]
    },
    {
      titel: "Fehlende Epithelisierung und Nachbluten",
      seite: "S. 50",
      inhalt: [
        { typ: "tabelle", kopf: ["Störung", "Was tun"], zeilen: [
          ["Fehlende Epithelisierung", "Nach 10 bis 14 Tagen einen Arzt aufsuchen. Bei der Epithelisierung wandern Epithelzellen vom Wundrand ein und machen aus feuchtem Granulationsgewebe festes Narbengewebe; die Wunde wird kleiner."],
          ["Nachbluten", "Bei ständigem Nachbluten einen Arzt aufsuchen. Mögliche Ursachen: Diabetes, Bindegewebsschwäche, Bluterkrankheit."]
        ] }
      ],
      fragen: [
        ["Wann soll der Kunde bei fehlender Epithelisierung zum Arzt?", ["Nach 10 bis 14 Tagen", "Nach 2 bis 3 Tagen", "Nach 4 Wochen", "Nach 3 Monaten"], "So steht es im Kursbuch.", "S. 50"],
        ["Was kann ständiges Nachbluten verursachen?", ["Diabetes, Bindegewebsschwäche oder eine Bluterkrankheit", "Eine Nickelallergie", "Die Pflege mit Kochsalzlösung", "Zu viel Überlänge"], "Dann einen Arzt aufsuchen.", "S. 50"],
        ["Was passiert bei der Epithelisierung?", ["Zellen wandern vom Wundrand ein, die Wunde wird kleiner", "Granulationsgewebe wuchert aus dem Kanal", "Der Knorpel bildet sich neu", "Die Entzündungsphase beginnt"], "Regenerationsphase.", "S. 50"]
      ]
    },
    {
      titel: "Entzündungen",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Entzündet sich ein Piercing und eitert, muss gehandelt werden. Meist sind Keime oder Fremdstoffe, zum Beispiel von den Haaren, in die Wunde gelangt." },
        { typ: "liste", punkte: [
          "Eiter muss abfließen können, sonst besteht die Gefahr einer Blutvergiftung.",
          "Täglich reinigen.",
          "Kamille, Teebaumöl oder Manukahonig können helfen (Teebaumöl nur verdünnt: Es kann Kontaktallergien auslösen).",
          "Die Salbe „Tyrosur“ aus der Apotheke kann sehr helfen; lege dem Kunden nahe, sie zu kaufen."
        ] },
        { typ: "ergaenzung", text: "Bei Fieber, sich ausbreitender Rötung, starken oder zunehmenden Schmerzen schickst du den Kunden sofort zum Arzt." },
        { typ: "merke", text: "Raucher, Alkoholiker und Diabetiker gehören zu den Risikogruppen; bei ihnen treten Komplikationen schneller auf." }
      ],
      fragen: [
        ["Was ist meist die Ursache einer Entzündung?", ["Keime oder Fremdstoffe in der Wunde", "Zu viel Überlänge", "Die Kochsalzlösung", "Ein zu leichter Titanschmuck"], "Zum Beispiel von den Haaren.", "S. 50"],
        ["Was droht, wenn Eiter nicht abfließen kann?", ["Eine Blutvergiftung", "Eine Nickelallergie", "Wildes Fleisch", "Eine schnellere Heilung"], "Eiter muss abfließen können.", "S. 50"],
        ["Welche Salbe aus der Apotheke nennt das Kursbuch?", ["Tyrosur", "Bepanthen", "Betaisodona", "Fucidine"], "Lege dem Kunden nahe, sie zu kaufen.", "S. 50"],
        ["Was kann bei einer Entzündung helfen?", ["Kamille, verdünntes Teebaumöl oder Manukahonig und tägliches Reinigen", "Den Schmuck sofort herausnehmen und den Kanal zukleben", "Häufiger Schmuckwechsel", "Octenisept auf Knorpel"], "Siehe Kursbuch.", "S. 50"],
        ["Fall: Ein Kunde ruft an, das Piercing ist stark gerötet, und er hat Fieber. Was tust du?", ["Ich schicke ihn sofort zum Arzt", "Ich empfehle Teebaumöl und 3 Tage abwarten", "Ich wechsle den Schmuck auf PTFE", "Ich empfehle Tyrosur und Ruhe"], "Ergänzung der Akademie.", "Ergänzung"]
      ]
    },
    {
      titel: "Perichondritis: Notfall am Ohrknorpel",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Eine Perichondritis ist eine Entzündung der Knorpelhaut, meist an der Ohrmuschel. Sie ist die gefährlichste Komplikation von Knorpelpiercings: Knorpel hat keine eigenen Blutgefäße, wehrt Keime schlecht ab und kann dauerhaft zerstört werden." },
        { typ: "grafik", id: "perichondritis" },
        { typ: "liste", titel: "Daran erkennst du sie", punkte: [
          "Die Ohrmuschel ist großflächig gerötet, geschwollen, heiß und sehr schmerzhaft, oft einige Tage bis Wochen nach dem Stich.",
          "Das Ohrläppchen bleibt meist ausgespart, weil es keinen Knorpel enthält. Das unterscheidet die Perichondritis von einer einfachen Hautentzündung.",
          "Später können Fieber, Eiter oder eine Eiteransammlung unter der Knorpelhaut dazukommen."
        ] },
        { typ: "achtung", text: "Bei Verdacht schickst du den Kunden sofort zum Arzt, am besten zum HNO-Arzt. Eine Perichondritis braucht in der Regel ein Antibiotikum, das auch gegen Pseudomonas wirkt. Ob der Schmuck entfernt wird, entscheidet der Arzt. Unbehandelt droht eine bleibende Verformung, das sogenannte Blumenkohlohr." },
        { typ: "liste", titel: "Hintergrund", punkte: [
          "Häufigster Erreger ist das Bakterium Pseudomonas aeruginosa. Es lebt in feuchter Umgebung, zum Beispiel in Wasserleitungen, Waschbecken und Duschen.",
          "Fälle treten in den warmen Monaten häufiger auf.",
          "In Großbritannien wurde eine Häufung nach Ohrpiercings auf verunreinigtes Wasser in einem Studio zurückgeführt.",
          "Vorbeugen: steril arbeiten, zur Pflege sterile Kochsalzlösung statt Leitungswasser empfehlen, kein Octenidin auf Knorpel, Druck und Reibung auf das frische Piercing vermeiden (zum Beispiel nicht darauf schlafen)."
        ] },
        { typ: "ergaenzung", text: "Ergänzung der Akademie nach medizinischer Fachliteratur (siehe KURS-RECHERCHE.md, Abschnitt 9). Fachlich prüfen." }
      ],
      fragen: [
        ["Was ist eine Perichondritis?", ["Eine Entzündung der Knorpelhaut, meist an der Ohrmuschel", "Eine Nickelallergie am Knorpel", "Wildes Fleisch am Knorpelpiercing", "Eine Entzündung des Ohrläppchens"], "Gefährlichste Komplikation von Knorpelpiercings.", "Ergänzung"],
        ["Welcher Teil des Ohrs bleibt bei einer Perichondritis meist ausgespart?", ["Das Ohrläppchen, weil es keinen Knorpel enthält", "Der Helix", "Der Tragus", "Die Conch"], "Typisches Erkennungszeichen.", "Ergänzung"],
        ["Welcher Erreger verursacht eine Perichondritis nach Ohrpiercing am häufigsten?", ["Pseudomonas aeruginosa", "Staphylococcus epidermidis aus der Hautflora", "Candida albicans", "Herpesviren"], "Er lebt in feuchter Umgebung.", "Ergänzung"],
        ["Was tust du bei Verdacht auf eine Perichondritis?", ["Den Kunden sofort zum Arzt schicken", "Mit Tyrosur behandeln und eine Woche warten", "Den Schmuck selbst entfernen", "Kühlen und Kochsalzlösung empfehlen"], "Am besten zum HNO-Arzt.", "Ergänzung"],
        ["Was droht, wenn eine Perichondritis nicht behandelt wird?", ["Eine bleibende Verformung (Blumenkohlohr)", "Nur eine Narbe am Stichkanal", "Ein Herauswachsen des Schmucks", "Eine Nickelallergie"], "Der Knorpel kann zerstört werden.", "Ergänzung"],
        ["Warum empfiehlst du zur Pflege sterile Kochsalzlösung statt Leitungswasser?", ["Weil Pseudomonas in feuchter Umgebung wie Wasserleitungen lebt", "Weil Leitungswasser zu viel Kalk enthält", "Weil Kochsalzlösung Knorpel aufbaut", "Weil Leitungswasser Octenidin enthält"], "Vorbeugung gegen Perichondritis.", "Ergänzung"]
      ]
    },
    {
      titel: "Wildes Fleisch",
      seite: "S. 51",
      inhalt: [
        { typ: "text", text: "Wildes Fleisch (Fachbegriff: Hypergranulation) entsteht durch dauerhafte Reizung der Unterhaut: Eine rote, fleischähnliche Masse wächst aus der Unterhaut zwischen den Wundrändern hervor, sodass die Wundränder nicht mehr zusammenfinden." },
        { typ: "schritte", titel: "So kannst du vorgehen", punkte: [
          "Nichts tun: Es kann von selbst verschwinden; meist stößt der Körper es ab.",
          "Dehydrieren: Kochsalzlösung, Kamillentee, Wasserstoffperoxid, Teebaumöl oder Eukalyptusöl helfen, es zurückzudrängen (laut Kursbuch; Wasserstoffperoxid schädigt auch gesundes Gewebe, heute wird es für Wunden kaum noch empfohlen).",
          "Wildfleischdisk: eine Kunststoffscheibe, die auf den Schmuck gestülpt wird.",
          "Schmuckform oder Material ändern, zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen.",
          "Hilft nichts davon: Der Kunde geht zum Arzt oder Dermatologen, der das wilde Fleisch chirurgisch entfernt."
        ] }
      ],
      fragen: [
        ["Wodurch entsteht wildes Fleisch?", ["Durch dauerhafte Reizung der Unterhaut", "Durch eine Nickelallergie", "Durch Pseudomonas", "Durch zu viel Überlänge"], "Rote, fleischähnliche Masse.", "S. 51"],
        ["Was ist der erste Weg bei wildem Fleisch?", ["Nichts tun, oft stößt der Körper es ab", "Sofort mit der Wildfleischdisk behandeln", "Zum Dermatologen schicken", "Den Schmuck entfernen"], "Weg 1 von 5.", "S. 51"],
        ["Was ist eine Wildfleischdisk?", ["Eine Kunststoffscheibe, die auf den Schmuck gestülpt wird", "Ein Pflaster mit Silberionen", "Eine Salbe", "Eine spezielle Kugel aus Titan"], "Weg 3 von 5.", "S. 51"],
        ["Welcher Schmuckwechsel kann helfen?", ["Zum Beispiel ein Titan-Labret gegen einen PTFE-Barbell tauschen", "Ein kürzerer Stab ohne Überlänge", "Ein schwererer Stahlring", "Ein dünnerer Schmuck mit Außengewinde"], "Weg 4 von 5.", "S. 51"],
        ["Wer entfernt wildes Fleisch, wenn nichts hilft?", ["Ein Arzt bzw. Dermatologe, chirurgisch", "Der Piercer mit der sterilen Schere", "Der Kunde mit Wasserstoffperoxid", "Das Gesundheitsamt"], "Weg 5 von 5.", "S. 51"]
      ]
    }
  ],
  uebung: [
    "Schreibe ein Pflegeblatt für ein frisches Helix-Piercing, das du einem Kunden mitgeben würdest.",
    "Lerne die Abheilzeiten-Tabelle auswendig und frag dich selbst ab.",
    "Überlege, welche Fragen du einem Kunden mit geröteter Einstichstelle stellst."
  ]
});
