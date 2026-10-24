/* Modul 05 – Hygiene und steriles Arbeiten. Quelle: Kursbuch Kap. 5 (S. 16–47). Ergänzung zu Niedersachsen siehe KURS-RECHERCHE.md, Abschnitt 3. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 5,
  titel: "Hygiene und steriles Arbeiten",
  quelle: "Kursbuch Kap. 5, S. 16–47",
  ziel: "Du arbeitest wie in einem OP: mit korrekter Händehygiene, sauber ausgestattetem Arbeitsplatz, richtiger Desinfektion, Rahmenhygieneplan und sicherer Sterilisation im Autoklav.",
  lektionen: [
    {
      titel: "Hygienemaßnahmen im Piercingraum",
      inhalt: [
        { typ: "merke", text: "„Die Hygiene ist die Lehre von der Verhütung von Krankheiten und der Erhaltung und Festigung der Gesundheit.“" },
        { typ: "liste", titel: "Das gehört dazu", punkte: [
          "(Sterile) Einmalhandschuhe, Einmal-Mundschutz und Schutzbrille",
          "Flächen- und Gerätedesinfektionsmittel",
          "Gründliches Händewaschen mit hautfreundlicher Seife, Abtrocknen mit Einmalhandtüchern",
          "Händedesinfektion mit speziellem Mittel (mindestens 30 Sekunden) aus einem geeigneten Spender",
          "Sterile bzw. Einweg-Werkzeuge mit Hautkontakt (Zangen, Nadeln, Ersteinsätze)",
          "Instrumente ohne Hautkontakt (Klemmen, Scheren, Kugelgreifer) mit geeigneten Mitteln reinigen; getrennt vom OP spülen",
          "Arbeitskleidung regelmäßig mit kochheißem Wasser und Waschmittel waschen",
          "Fußboden und Arbeitsflächen mit geeigneten Mitteln reinigen"
        ] }
      ]
    },
    {
      titel: "Händehygiene",
      inhalt: [
        { typ: "text", text: "Die Hände des Piercers sind ständig in Kontakt mit Kunden und Gegenständen. Die richtige Händedesinfektion ist deshalb fester Bestandteil des Hygienekonzepts." },
        { typ: "liste", titel: "Ziele", punkte: ["Infektionen und Kontamination nicht weiterverbreiten", "vorübergehende (transiente) Keime entfernen oder abtöten", "die dauerhafte (residente) Hautflora reduzieren", "Verschmutzungen entfernen", "die Hände schützen und pflegen"] },
        { typ: "schritte", titel: "Voraussetzungen", punkte: [
          "Kein Schmuck an Händen und Unterarmen, keine Uhren und Ringe.",
          "Kein Nagellack, keine langen Fingernägel.",
          "Immer mit freien Unterarmen arbeiten.",
          "Nur gepflegte, intakte Haut lässt sich sicher desinfizieren: Hautschutz und Hautpflege sind Pflicht.",
          "Desinfektionsmittel jederzeit in Reichweite (Wandspender).",
          "Trittmülleimer verwenden, damit Müll kontaktlos entsorgt wird."
        ] }
      ]
    },
    {
      titel: "Händedesinfektion und Händewaschung",
      inhalt: [
        { typ: "text", text: "Die hygienische Händedesinfektion beseitigt die transiente Hautflora und verhindert die Übertragung von Keimen von einem Kunden zum nächsten. Sie wird durchgeführt vor und nach dem Kundenkontakt, vor Tätigkeiten im sterilen Umfeld, nach Kontakt mit potenziell infektiösem Material und nach Kontakt mit der unmittelbaren Umgebung des Kunden. Das Mittel wird in alle Bereiche der Hand eingerieben, besonders Handgelenke, Daumen, Fingerspitzen und Fingerzwischenräume, und zwar für die vom Hersteller angegebene Einwirkzeit. Das Einreibe-Schema in acht Schritten findest du im Kursbuch auf S. 20." },
        { typ: "schritte", titel: "Chirurgische Händedesinfektion (vor operativen Eingriffen)", punkte: [
          "Mittel in die trockene, gereinigte Hand geben; den Spender mit dem Ellenbogen bedienen.",
          "Hände und Unterarme bis zum Ellenbogen einreiben, alle Handflächen benetzen.",
          "Über die Einwirkzeit des Herstellers einreiben und feucht halten.",
          "Hände über Ellenbogenniveau halten. Vor dem Anlegen der Handschuhe müssen sie trocken sein."
        ] },
        { typ: "achtung", text: "Desinfektionsmittel niemals auf feuchte Haut. Hände zuerst gründlich waschen und vollständig trocknen. Bei optisch sauberen Händen ist Waschen vor der Desinfektion nicht generell nötig, vor Dienstbeginn aber Pflicht, weil Alkohol gegen Bakteriensporen nur unzureichend wirkt." },
        { typ: "schritte", titel: "Händewaschung in fünf Schritten", punkte: [
          "Hände mit lauwarmem Wasser befeuchten.",
          "Waschlotion aus dem Spender nehmen und aufschäumen.",
          "Falls nötig mit einer weichen Bürste unter den Fingernägeln reinigen.",
          "Gründlich abspülen.",
          "Mit einem Einmalhandtuch gründlich abtrocknen."
        ] },
        { typ: "liste", titel: "Waschen: wann und was vermeiden", punkte: [
          "Waschen vor Arbeitsbeginn und nach Arbeitsende, bei sichtbarer Verschmutzung, nach Kontakt mit Sporenbildnern, nach dem Toilettengang, bei verschwitzten oder klebrigen Händen.",
          "Vermeiden: zu heißes Wasser, intensives Bürsten, Seife statt Waschlotion, zu langes Waschen, schlechtes Abspülen, harte Einmalhandtücher, ungenügendes Abtrocknen."
        ] }
      ]
    },
    {
      titel: "Ausstattung und Arbeitsplatz",
      inhalt: [
        { typ: "liste", titel: "Waschplatz ohne Handkontakt", punkte: [
          "Leicht erreichbarer Waschplatz mit Kalt- und Warmwasser (Einhebelmischbatterie)",
          "Je ein Spender für Händedesinfektion und Waschlotion; Seifenstücke sind nicht zulässig",
          "Spender und Wasserhahn per Fuß, Ellenbogen oder Sensor bedienbar",
          "Spender leicht zu reinigen; vor jedem Befüllen leeren, desinfizieren und reinigen, besser Einmalflaschen",
          "Handtuchspender mit Einmaltüchern und Trittmülleimer"
        ] },
        { typ: "liste", titel: "Der Arbeitsplatz", punkte: [
          "Deutlich vom übrigen Studio getrennt, am besten ein eigener Raum, nur mit dem nötigen Mobiliar",
          "Während des Piercens nur Piercer und Kunde im Raum, keine Haustiere und Zuschauer",
          "Liege und Möbel mit glatter, abwaschbarer Oberfläche, eventuell Einweg-Liegenbezüge",
          "Waschbecken mit fließendem Wasser in der Nähe, ohne Spritzer am Arbeitsplatz",
          "Ein aktueller Erste-Hilfe-Kasten gut sichtbar; Notfallnummern (Notarzt, Hausarzt, Feuerwehr) aushängen"
        ] },
        { typ: "text", text: "Benutzte Nadeln kommen direkt und unmittelbar in den Nadelabwurfbehälter. Der volle Behälter wird fest verschlossen und kann dann im Restmüll entsorgt werden. Der Mundschutz reduziert Keime deutlich, filtert aber nicht zu 100 Prozent: Luft strömt an den Seiten vorbei." }
      ]
    },
    {
      titel: "Desinfektion und Sterilisation",
      inhalt: [
        { typ: "tabelle", kopf: ["Begriff", "Keimreduktion", "Bedeutung"], zeilen: [
          ["Desinfektion", "Faktor 10⁵ (1 : 100.000)", "Von 100.000 vermehrungsfähigen Keimen überlebt höchstens einer."],
          ["Sterilisation", "Faktor 10⁶ (1 : 1.000.000)", "Tötet auch Bakteriensporen ab."]
        ] },
        { typ: "text", text: "Antisepsis umfasst alle Maßnahmen zur Verminderung infektiöser Keime, also die Desinfektion von Oberflächen, Materialien, Gegenständen und Wunden. Haut und Schleimhaut lassen sich nie vollständig keimfrei machen." },
        { typ: "liste", titel: "Was gute Desinfektionsmittel können", punkte: ["Keime schnell und umfassend reduzieren", "ausreichend tief eindringen", "auch bei organischem Material wirken", "nur gering systemisch toxisch sein", "für Haut, Schleimhaut und Wunden verträglich sein", "lange haltbar und biologisch abbaubar sein"] },
        { typ: "text", text: "Für Haut und Hände, Flächen und Instrumente sind unterschiedliche Mittel zu verwenden. Sie müssen eine nachgewiesene Wirksamkeit haben. Die VAH-Liste (Verbund für Angewandte Hygiene, www.vah-online.de) führt alle zertifizierten Produkte." },
        { typ: "merke", text: "Flächen- und Instrumentendesinfektion sollten auch gegen Viren wirken (viruzid). Achte auf Einwirkzeit, Materialverträglichkeit und Konzentration. Mittel bleiben in der Originalverpackung und werden nie umgefüllt; Spender haben ein Sichtfenster für das Etikett." },
        { typ: "achtung", text: "Alles, was zu einer Hautverletzung oder direktem Blutkontakt führt (Nadeln, Nadelhalter, Klemmen), muss sterilisiert werden, wenn es kein steriles Einwegmaterial ist. Nur der Autoklav tötet auch Bakteriensporen ab. Werkzeuge ohne direkten Hautkontakt (Kugelgreifer, Schere) werden im Ultraschallbad gereinigt und im Desinfektionsbad desinfiziert; verschiedene Metalle dabei nicht mischen." }
      ]
    },
    {
      titel: "Rahmenhygieneplan",
      inhalt: [
        { typ: "text", text: "Nach dem Infektionsschutzgesetz (IfSG) legen Einrichtungen ihre Verfahren zur Infektionshygiene in einem Rahmenhygieneplan fest. Ihm ist ein Reinigungs- und Desinfektionsplan beizufügen. Jeder Arbeitsschritt und jede Hygienemaßnahme muss darin ersichtlich sein." },
        { typ: "liste", titel: "Inhalt am Beispiel aus dem Kursbuch (S. 37–39)", punkte: [
          "Räume: Handwaschplatz, Arbeitsbereich (täglich feucht reinigen, bei Blut sofort desinfizieren), Toiletten",
          "Desinfektion: Hände, Haut des Kunden, Instrumente, Flächen (abdecken mit Folie, nach jedem Kunden wechseln)",
          "Arbeitskleidung: Handschuhe nach jedem Kunden entsorgen; verunreinigte Kleidung wechseln und bei mindestens 90 °C waschen",
          "Abfallentsorgung: Nadeln im verschließbaren Abwurfbehälter, übriger Abfall in widerstandsfähigen Säcken",
          "Krankheit: Wer an einer ansteckenden Krankheit leidet, meldet sich krank."
        ] },
        { typ: "achtung", text: "Die Beispielpläne im Kursbuch dienen nur der Orientierung und dürfen nicht blind übernommen werden. Für einen korrekten, den lokalen Anforderungen entsprechenden Plan setzt du dich mit dem örtlichen Gesundheitsamt in Verbindung." },
        { typ: "ergaenzung", text: "In Niedersachsen gilt für Piercing eine eigene Hygieneverordnung, nach der die Gesundheitsämter die Studios überwachen. Mehr dazu in Modul 11." }
      ]
    },
    {
      titel: "Der Autoklav",
      inhalt: [
        { typ: "text", text: "Ein Autoklav ist ein gas- und luftdicht verschließbarer Druckbehälter. Mit Wasserdampf und Überdruck werden Instrumente und Schmuck sterilisiert, ähnlich wie im Dampfkochtopf. Beim Vakuumverfahren (fraktioniertes Vorvakuum) wird die Luft durch mehrfaches Abpumpen entfernt, beim Strömungs- oder Gravitationsverfahren durch Sattdampf verdrängt." },
        { typ: "merke", text: "Kommen keine Einweginstrumente zum Einsatz, sind Autoklaven mit Vorvakuum (Typ S oder besser Typ B) und automatischem Schreiber in der EU Pflicht. Beachte immer die lokale Gesetzeslage. Für den Betrieb wird immer häufiger ein Sachkundenachweis verlangt." },
        { typ: "schritte", titel: "Aufbereitung des Bestecks", punkte: [
          "Selbstschutz: mindestens Schutzbrille, Handschuhe und Mundschutz, auch beim Reinigen.",
          "Reinigen im beheizbaren Ultraschallbad, mindestens 30 Minuten bei 80 °C mit Reinigungsmittel (je nach Mittel auch niedriger; genau informieren).",
          "Gründlich trocknen, damit keine Flecken oder Rost entstehen.",
          "In Sterilisationsbeutel verpacken; ein Indikatorstreifen zeigt den Zustand an.",
          "Sterilisieren in vier Phasen: Steigzeit (fraktioniertes Vakuum), Ausgleichszeit, Sterilisationsphase (Dampf bei mindestens etwa 2 bar), Trockenphase (gepulste Vakuumtrocknung).",
          "Nur vollständig trockenes Sterilgut gilt nach der Entnahme als steril. Verpackung mit Sterilisationsdatum und Chargennummer versehen."
        ] },
        { typ: "tabelle", kopf: ["Lagerung", "Offenes Regal", "Geschlossene Schublade"], zeilen: [
          ["Einzeln verpackt", "max. 48 Stunden", "max. 6 Monate"],
          ["Doppelt verpackt", "max. 48 Stunden", "max. 5 Jahre"]
        ] },
        { typ: "liste", titel: "Funktionskontrolle", punkte: [
          "Elektrische und mechanische Sicherheit jährlich durch einen Prüfingenieur (TÜV)",
          "Laufend: chemische Indikatoren auf Verpackung oder Klebestreifen mit Farbumschlag",
          "Halbjährlich bzw. nach 400 Chargen: Sporenproben sterilisieren und im zertifizierten Labor auswerten lassen",
          "Bei Vorvakuum-Geräten täglich der Bowie-Dick-Test (Helixtest)",
          "Prionen (z. B. Erreger der Creutzfeldt-Jakob-Krankheit) werden nur bei 134 °C und 18 Minuten zerstört."
        ] }
      ]
    }
  ],
  uebung: [
    "Führe die hygienische Händedesinfektion nach dem Schema im Kursbuch (S. 20) durch und stoppe die Zeit.",
    "Prüfe deinen künftigen Arbeitsplatz mit der Checkliste aus der Lektion „Ausstattung und Arbeitsplatz“.",
    "Entwirf die erste Seite eines Reinigungs- und Desinfektionsplans für dein Studio.",
    "Schreibe die vier Phasen der Sterilisation aus dem Gedächtnis auf."
  ],
  quiz: [
    { frage: "Wie lange desinfizierst du die Hände mindestens?", antworten: ["5 Sekunden", "30 Sekunden", "5 Minuten"], richtig: 1, erklaerung: "Mindestens 30 Sekunden bzw. nach Herstellerangabe.", seite: "S. 16" },
    { frage: "Was gilt für Desinfektionsmittel und feuchte Haut?", antworten: ["Kein Problem", "Niemals auf feuchte Haut auftragen", "Nur auf feuchte Haut"], richtig: 1, erklaerung: "Hände zuerst waschen und vollständig trocknen.", seite: "S. 22" },
    { frage: "Welche Keimreduktion erreicht eine Sterilisation?", antworten: ["Faktor 10³", "Faktor 10⁵", "Faktor 10⁶"], richtig: 2, erklaerung: "Desinfektion erreicht 10⁵, Sterilisation 10⁶.", seite: "S. 28" },
    { frage: "Was muss im Autoklav sterilisiert werden, wenn kein steriles Einwegmaterial verwendet wird?", antworten: ["Alles, was zu Hautverletzung oder Blutkontakt führt, z. B. Nadeln und Klemmen", "Nur die Schere", "Nichts"], richtig: 0, erklaerung: "Nur der Autoklav tötet auch Bakteriensporen.", seite: "S. 35" },
    { frage: "Wer darf während des Piercens im Raum sein?", antworten: ["Freunde des Kunden", "Nur Piercer und Kunde", "Jeder Kunde im Studio"], richtig: 1, erklaerung: "Keine Haustiere und keine Zuschauer.", seite: "S. 26" },
    { frage: "Wie lange darf einzeln verpacktes Sterilgut in einer geschlossenen Schublade lagern?", antworten: ["48 Stunden", "6 Monate", "5 Jahre"], richtig: 1, erklaerung: "Doppelt verpackt sind es bis zu 5 Jahre.", seite: "S. 46" },
    { frage: "Wie oft wird der Bowie-Dick-Test bei Geräten mit Vorvakuum gemacht?", antworten: ["Täglich", "Jährlich", "Nie"], richtig: 0, erklaerung: "Er prüft die Vakuumfunktion.", seite: "S. 47" },
    { frage: "Was machst du mit den Beispiel-Hygieneplänen aus dem Kursbuch?", antworten: ["Ich übernehme sie unverändert.", "Ich nutze sie zur Orientierung und kläre den Plan mit dem Gesundheitsamt.", "Ich brauche keinen Plan."], richtig: 1, erklaerung: "Die Beispiele dürfen nicht blind übernommen werden.", seite: "S. 39" }
  ]
});
