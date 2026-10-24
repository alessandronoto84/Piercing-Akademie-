/* Modul 02 – Recht, Haftung, Einverständnis. Quelle: Kursbuch Kap. 1 (S. 1–2), Kap. 12 (S. 114–115), Hinweise S. 81 und 83. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 2,
  titel: "Recht, Haftung, Einverständnis",
  quelle: "Kursbuch Kap. 1, S. 1–2, und Kap. 12, S. 114–115",
  ziel: "Du weißt, warum jedes Piercing eine Einwilligung braucht, was in die Einverständniserklärung gehört und welche Grenzen du als Piercer einhältst.",
  lektionen: [
    {
      titel: "Piercen ist eine Körperverletzung",
      seite: "S. 1",
      inhalt: [
        { typ: "text", text: "Beim Piercen fügt der Piercer dem Kunden eine gewollte Körperverletzung zu: das Öffnen (Durchstechen) der Haut." },
        { typ: "text", text: "Auch bestimmte ärztliche Behandlungen sind laut Gesetz eine Körperverletzung. Sie sind nur dann nicht rechtswidrig, wenn der Kunde bzw. Patient eingewilligt hat. Für das Piercing gilt dasselbe." },
        { typ: "merke", text: "Deshalb muss vor jedem Piercing ein Einverständnis des Kunden eingeholt werden, auch von Freunden und Bekannten und auch von Kunden, die du schon einmal gepierct hast." },
        { typ: "praxis", text: "Mach die Einverständniserklärung zur festen Routine wie das Händedesinfizieren. Dann gibt es nie die Situation „bei dem geht das schon ohne“." }
      ],
      fragen: [
        ["Was fügt der Piercer dem Kunden rechtlich gesehen zu?", ["Eine gewollte Körperverletzung", "Eine Sachbeschädigung", "Eine Ordnungswidrigkeit", "Einen ärztlichen Eingriff"], "Das Öffnen der Haut ist eine Körperverletzung.", "S. 1"],
        ["Warum ist ein Piercing trotzdem nicht rechtswidrig?", ["Weil der Kunde wirksam eingewilligt hat", "Weil der Kunde bezahlt", "Weil Piercer ein angemeldetes Gewerbe haben", "Weil der Schmerz nur kurz ist"], "Wie bei ärztlichen Eingriffen.", "S. 1"],
        ["Wann brauchst du ein Einverständnis?", ["Vor jedem Piercing, auch bei Freunden und Stammkunden", "Einmal pro Kunde, dann gilt es für alle weiteren Piercings", "Nur bei neuen Kunden und bei Intimpiercings", "Nur wenn der Kunde unter 21 ist"], "Ausnahmen gibt es nicht.", "S. 1"],
        ["Fall: Deine beste Freundin will spontan ein Helix-Piercing. Was gilt?", ["Auch sie unterschreibt vorher die Einverständniserklärung", "Eine mündliche Zusage reicht unter Freunden", "Sie unterschreibt nachträglich, wenn alles gut verheilt", "Bei Knorpelpiercings ist keine Erklärung nötig"], "Das Kursbuch nennt Freunde und Bekannte ausdrücklich.", "S. 1"]
      ]
    },
    {
      titel: "Was das Strafgesetzbuch sagt",
      seite: "S. 1–2",
      inhalt: [
        { typ: "text", text: "Im deutschen Strafrecht ist die Körperverletzung im 17. Abschnitt des StGB (§§ 223 bis 231) geregelt. Den Grundtatbestand beschreibt § 223 StGB." },
        { typ: "liste", titel: "§ 223 StGB, wie im Kursbuch zitiert", punkte: [
          "Wer eine andere Person körperlich misshandelt oder an der Gesundheit schädigt, wird mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe bestraft.",
          "Der Versuch ist strafbar."
        ] },
        { typ: "tabelle", kopf: ["Begriff", "Bedeutung"], zeilen: [
          ["Körperliche Misshandlung", "Jede üble, unangemessene Behandlung, die das körperliche Wohlbefinden oder die körperliche Unversehrtheit mehr als nur unerheblich beeinträchtigt"],
          ["Gesundheitsschädigung", "Das Hervorrufen oder Steigern eines krankhaften Zustands, auch wenn er nur vorübergehend ist"]
        ] },
        { typ: "merke", text: "Ob das Opfer dabei Schmerzen hat, ist unerheblich." }
      ],
      fragen: [
        ["Wo ist die Körperverletzung im deutschen Strafrecht geregelt?", ["Im 17. Abschnitt des StGB, §§ 223 bis 231", "Im Bürgerlichen Gesetzbuch, §§ 823 ff.", "Im Infektionsschutzgesetz", "Im Heilpraktikergesetz"], "Grundtatbestand ist § 223 StGB.", "S. 1"],
        ["Welche Strafe sieht § 223 StGB höchstens vor?", ["Freiheitsstrafe bis zu 5 Jahren oder Geldstrafe", "Freiheitsstrafe bis zu 10 Jahren", "Freiheitsstrafe bis zu 2 Jahren oder Geldstrafe", "Nur eine Geldstrafe"], "So zitiert das Kursbuch.", "S. 2"],
        ["Ist schon der Versuch einer Körperverletzung strafbar?", ["Ja", "Nein, nur die vollendete Tat", "Nur bei gefährlicher Körperverletzung", "Nur wenn ein bleibender Schaden droht"], "§ 223 Abs. 2 StGB.", "S. 2"],
        ["Was ist eine körperliche Misshandlung?", ["Eine üble, unangemessene Behandlung, die Wohlbefinden oder Unversehrtheit mehr als unerheblich beeinträchtigt", "Nur eine Verletzung, die sichtbare Spuren hinterlässt", "Jede Berührung ohne Einwilligung, auch ohne Beeinträchtigung", "Nur eine Verletzung, die ärztlich behandelt werden muss"], "Definition laut Kursbuch.", "S. 2"],
        ["Was gilt als Gesundheitsschädigung?", ["Das Hervorrufen oder Steigern eines krankhaften Zustands, auch vorübergehend", "Nur ein dauerhafter Schaden", "Nur eine Schädigung mit Krankenhausaufenthalt", "Nur ein Zustand, der Schmerzen verursacht"], "Auch ein vorübergehender Zustand genügt.", "S. 2"],
        ["Spielt es eine Rolle, ob das Opfer Schmerzen hat?", ["Nein, das ist unerheblich", "Ja, ohne Schmerzen keine Körperverletzung", "Nur bei der Gesundheitsschädigung", "Nur bei Minderjährigen"], "So steht es im Kursbuch.", "S. 2"]
      ]
    },
    {
      titel: "Haare, Haftung und Schadensersatz",
      seite: "S. 2",
      inhalt: [
        { typ: "text", text: "Auch das rechtswidrige Abschneiden von Haaren erfüllt den Tatbestand der Körperverletzung. Deshalb gehört in die Einwilligungserklärung der Hinweis, dass gegebenenfalls eine Rasur an der zu piercenden Körperstelle durchgeführt wird." },
        { typ: "text", text: "Fehlt die schriftliche Einverständniserklärung, können Kunden, deren Angehörige oder Dritte (zum Beispiel Anwälte) Schadensersatz vom Piercer fordern." },
        { typ: "praxis", text: "Bewahre die unterschriebenen Erklärungen geordnet auf. Im Streitfall ist das Papier dein wichtigster Nachweis." }
      ],
      fragen: [
        ["Warum gehört die Rasur in die Einverständniserklärung?", ["Weil auch das rechtswidrige Abschneiden von Haaren eine Körperverletzung ist", "Weil die Rasur gesondert abgerechnet wird", "Weil das Gesundheitsamt es so verlangt", "Weil Rasieren das Infektionsrisiko erhöht"], "Deshalb wird vermerkt, dass gegebenenfalls rasiert wird.", "S. 2"],
        ["Was kann passieren, wenn die schriftliche Einverständniserklärung fehlt?", ["Kunden, Angehörige oder Dritte können Schadensersatz fordern", "Nur eine Verwarnung durch das Gesundheitsamt", "Das Piercing muss kostenlos wiederholt werden", "Nichts, wenn der Kunde mündlich zugestimmt hat"], "Deshalb immer schriftlich.", "S. 2"],
        ["Wer kann bei fehlender Erklärung Schadensersatz fordern?", ["Kunden, deren Angehörige oder Dritte, z. B. Anwälte", "Nur der Kunde selbst", "Nur die Krankenkasse des Kunden", "Nur das Gesundheitsamt"], "So zählt es das Kursbuch auf.", "S. 2"],
        ["Fall: Vor einem Bauchnabelpiercing musst du rasieren. Was muss vorher geklärt sein?", ["Die Rasur ist in der unterschriebenen Einverständniserklärung erwähnt", "Der Kunde muss die Rasur mündlich erlauben, das genügt", "Rasieren ist Teil des Piercings und braucht keine Erwähnung", "Die Rasur darf nur der Kunde selbst durchführen"], "Rechtswidriges Haareschneiden ist eine Körperverletzung.", "S. 2"]
      ]
    },
    {
      titel: "Alter und Minderjährige",
      seite: "S. 2, 114",
      inhalt: [
        { typ: "text", text: "Achte dringend darauf, dass der Kunde das 18. Lebensjahr vollendet hat. Ist der Kunde unter 18, muss das Einverständnis der Eltern bzw. der Erziehungsberechtigten eingeholt werden." },
        { typ: "text", text: "Die Beispiel-Einverständniserklärung im Kursbuch fragt deshalb Geburtsdatum und Ausweisnummer ab. Bei Minderjährigen und bei Volljährigen unter gesetzlicher Betreuung unterschreibt zusätzlich die erziehungsberechtigte Person bzw. der Vormund." },
        { typ: "ergaenzung", text: "In der Piercing Akademie gilt: Teilnehmende sind mindestens 18 Jahre alt, und alle Modelle am Praxistag sind volljährig." }
      ],
      fragen: [
        ["Ab welchem Alter dürfen Kunden ohne Einverständnis der Eltern gepierct werden?", ["Ab vollendetem 18. Lebensjahr", "Ab 16 Jahren", "Ab 16 Jahren bei Ohrpiercings", "Ab 14 Jahren mit Ausweis"], "Darauf ist dringend zu achten.", "S. 2"],
        ["Was gilt laut Kursbuch bei Kunden unter 18?", ["Das Einverständnis der Eltern bzw. Erziehungsberechtigten muss eingeholt werden", "Ab 16 genügt die eigene Unterschrift", "Eine Kopie des Schülerausweises reicht", "Es gilt dasselbe wie bei Erwachsenen"], "Siehe Kap. 1.", "S. 2"],
        ["Wer unterschreibt bei Volljährigen unter gesetzlicher Betreuung zusätzlich?", ["Der Vormund bzw. Betreuer", "Ein volljähriges Familienmitglied", "Der Hausarzt", "Niemand, Volljährige unterschreiben allein"], "So sieht es die Beispiel-Erklärung vor.", "S. 114"],
        ["Warum fragt die Erklärung die Ausweisnummer ab?", ["Zur Identifikation und zum Nachweis des Alters", "Für die Abrechnung mit der Krankenkasse", "Weil das Gewerbeamt sie verlangt", "Um den Kunden später anzuschreiben"], "Personalien mit Geburtsdatum und Ausweisnummer.", "S. 114"],
        ["Wie alt müssen Modelle am Praxistag der Akademie sein?", ["Volljährig", "Mindestens 16 mit Unterschrift der Eltern", "Mindestens 21", "Mindestens 14 bei Ohrläppchen"], "Regel der Akademie.", "Akademie"],
        ["Fall: Ein Kunde sagt, er sei 18, hat aber keinen Ausweis dabei. Was tust du?", ["Ich steche nicht, bis das Alter nachgewiesen ist", "Er kreuzt „mindestens 18“ an, das genügt", "Ich steche und lasse den Ausweis später nachreichen", "Ich steche nur ein Ohrläppchen"], "Das Alter muss feststehen.", "S. 114"]
      ]
    },
    {
      titel: "Die Einverständniserklärung aufbauen",
      seite: "S. 114",
      inhalt: [
        { typ: "text", text: "Das Kursbuch enthält auf S. 114–115 ein Beispiel für eine Einverständniserklärung. Sie ist in klare Teile gegliedert." },
        { typ: "tabelle", kopf: ["Teil", "Inhalt"], zeilen: [
          ["Personalien", "Vor- und Nachname, Straße, PLZ und Ort, Telefon, Bestätigung „mindestens 18 Jahre alt“, Geburtsdatum, Ausweisnummer"],
          ["Erziehungsberechtigte", "Bei Minderjährigen und Betreuten: Name, Anschrift, Ausweisnummer, Datum und Unterschrift"],
          ["Angaben zur Person", "Krankheiten, Allergien, Medikamente, genug gegessen und getrunken, in den letzten zwei Tagen kein Alkohol und keine Drogen"],
          ["Informationen zur Behandlung (vom Studio)", "Art und Körperstelle, Datum, Aufklärung über die Gefahren, Pflegehinweise ausgehändigt"],
          ["Unterschrift", "Kunde und gegebenenfalls Erziehungsberechtigte"]
        ] },
        { typ: "merke", text: "Falschangaben können zu gesundheitlichen Risiken führen. Gesundheitliche Einschränkungen, chronische Erkrankungen oder starker Medikamentenkonsum können zur Ablehnung des Piercings führen." }
      ],
      fragen: [
        ["Welche Personalien gehören in die Einverständniserklärung?", ["Name, Anschrift, Telefon, Geburtsdatum und Ausweisnummer", "Name, E-Mail und Krankenkasse", "Name und Unterschrift genügen", "Name, Beruf und Familienstand"], "Dazu die Bestätigung, mindestens 18 zu sein.", "S. 114"],
        ["Welche Gesundheitsangaben fragt die Erklärung ab?", ["Krankheiten, Allergien und Medikamente", "Nur Allergien", "Blutgruppe und Impfstatus", "Gewicht und Blutdruck"], "Dazu Essen, Trinken, Alkohol und Drogen.", "S. 114"],
        ["Wie lange vorher soll laut Formular kein Alkohol und keine Drogen genommen worden sein?", ["Mindestens 2 Tage", "Mindestens 12 Stunden", "Mindestens 24 Stunden", "Mindestens 1 Woche"], "So steht es im Formular.", "S. 114"],
        ["Welcher Teil wird vom Studio ausgefüllt?", ["Informationen zur Behandlung: Art, Körperstelle, Datum, Aufklärung, Pflegehinweise", "Die Angaben zu Krankheiten und Medikamenten", "Die Personalien des Kunden", "Der Abschnitt zur Foto-Einwilligung"], "„Von uns auszufüllen!“", "S. 114"],
        ["Was kann zur Ablehnung des Piercings führen?", ["Gesundheitliche Einschränkungen, chronische Erkrankungen oder starker Medikamentenkonsum", "Der Wunsch nach einem Knorpelpiercing", "Eine bekannte Nickelallergie", "Ein früheres Piercing an derselben Stelle"], "So steht es im Formular.", "S. 114"]
      ]
    },
    {
      titel: "Aufklärung über Komplikationen",
      seite: "S. 115",
      inhalt: [
        { typ: "text", text: "Auch bei sachgemäßer Ausführung besteht das Risiko unerwünschter Nebenerscheinungen. Die Beispiel-Erklärung listet sie ausführlich auf, damit der Kunde weiß, worauf er sich einlässt." },
        { typ: "liste", titel: "Auszug aus der Liste", punkte: [
          "Schmerzen, Missempfindungen, Kreislaufprobleme bis zur Bewusstlosigkeit",
          "Entzündungen, Infektionen, Abstoßreaktion, Allergien, Blutungen",
          "Wundheilungsstörungen, Wildfleischbildung, Keloidbildung, dauerhafte Narben",
          "Nervenverletzungen, dauerhaftes oder vorübergehendes Taubheitsgefühl",
          "Herauswandern des Stichkanals bis zum Herauswachsen",
          "Bei Mundpiercings: Zahnfleischschäden, Parodontose, Zahnverschiebung, Zahnschäden, Sprachprobleme"
        ] },
        { typ: "merke", text: "Mit der Unterschrift verpflichtet sich der Kunde, die Pflegehinweise einzuhalten. Er bestätigt, aufgeklärt worden zu sein, ausreichend Zeit für seine Entscheidung gehabt zu haben und nicht unter Einfluss von Drogen, Alkohol oder Medikamenten zu stehen." }
      ],
      fragen: [
        ["Besteht auch bei sachgemäßer Ausführung ein Risiko für Komplikationen?", ["Ja", "Nein, nur bei Fehlern des Piercers", "Nur bei Intimpiercings", "Nur bei Kunden mit Vorerkrankungen"], "Deshalb wird darüber aufgeklärt.", "S. 115"],
        ["Welche Komplikation nennt die Erklärung bei Mundpiercings?", ["Zahn- und Zahnfleischschäden, Zahnverschiebung, Sprachprobleme", "Geschmacksverlust auf Dauer", "Kieferbruch", "Mandelentzündung"], "Auch Parodontose und Zahnverschiebung.", "S. 115"],
        ["Was gehört zu den möglichen Komplikationen?", ["Wildfleischbildung, Keloidbildung und Herauswachsen", "Nur eine leichte Rötung in den ersten Tagen", "Nur Allergien gegen Titan", "Nur Komplikationen durch Pflegefehler des Kunden"], "Die Liste ist ausführlich.", "S. 115"],
        ["Wozu verpflichtet sich der Kunde mit seiner Unterschrift?", ["Die Pflegehinweise einzuhalten", "Das Studio bei Komplikationen nicht zu verklagen", "Zur Nachkontrolle nach 3 Tagen zu erscheinen", "Den Schmuck nur im Studio zu wechseln"], "So steht es im Text der Erklärung.", "S. 115"],
        ["Was bestätigt der Kunde außerdem?", ["Dass er aufgeklärt wurde, genug Bedenkzeit hatte und nicht unter Alkohol- oder Drogeneinfluss steht", "Dass er auf jede Haftung des Studios verzichtet", "Dass er die Abheilzeit garantiert einhält", "Dass er keine Medikamente nimmt"], "Siehe Einverständniserklärung.", "S. 115"]
      ]
    },
    {
      titel: "Fotos und Datenschutz",
      seite: "S. 1, 115",
      inhalt: [
        { typ: "text", text: "Wenn du Bilder vom gestochenen Piercing veröffentlichen willst, brauchst du die schriftliche Erlaubnis des Kunden. Die Beispiel-Erklärung enthält dafür einen eigenen Abschnitt für Website, Social Media und Werbebanner." },
        { typ: "text", text: "In der Erklärung werden auch Gesundheitsdaten erhoben. Das sind besondere Daten im Sinne von Art. 9 DSGVO. Ihre Verarbeitung braucht eine ausdrückliche Einwilligung, die jederzeit widerrufen werden kann. Nach einem Widerruf dürfen die Bilder nicht mehr verwendet werden." },
        { typ: "ergaenzung", text: "Für die Foto-Einwilligung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) die passende Rechtsgrundlage; im Kursbuch steht an dieser Stelle lit. f. Lass das Formular vor dem Einsatz in deinem Studio rechtlich prüfen." }
      ],
      fragen: [
        ["Was brauchst du, bevor du ein Foto eines Kundenpiercings veröffentlichst?", ["Die schriftliche Erlaubnis des Kunden", "Nichts, wenn das Gesicht nicht zu sehen ist", "Eine mündliche Zustimmung beim Termin", "Nur einen Hinweis in den AGB"], "Die Erlaubnis muss schriftlich vorliegen.", "S. 1"],
        ["Was sind Gesundheitsdaten im Sinne der DSGVO?", ["Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO)", "Normale personenbezogene Daten (Art. 6 DSGVO)", "Anonyme Daten", "Öffentlich zugängliche Daten"], "Ihre Verarbeitung braucht eine ausdrückliche Einwilligung.", "S. 115"],
        ["Kann der Kunde seine Einwilligung zu Fotos widerrufen?", ["Ja, jederzeit mit Wirkung für die Zukunft", "Nein, nach der Unterschrift nicht mehr", "Nur innerhalb von 14 Tagen", "Nur gegen eine Gebühr"], "Danach dürfen die Bilder nicht mehr genutzt werden.", "S. 115"],
        ["Welche Rechtsgrundlage passt für eine Foto-Einwilligung?", ["Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)", "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)", "Art. 6 Abs. 1 lit. b DSGVO (Vertrag)", "Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsvorsorge)"], "Ergänzung der Akademie.", "Ergänzung"],
        ["Fall: Eine Kundin widerruft ihre Foto-Einwilligung. Was tust du?", ["Ich verwende die Bilder ab sofort nicht mehr", "Ich lasse bereits veröffentlichte Bilder online", "Ich lösche die Bilder nach Ablauf eines Jahres", "Ich verpixele nur das Gesicht"], "Nach dem Widerruf dürfen die Bilder nicht weiter genutzt werden.", "S. 115"]
      ]
    },
    {
      titel: "Heilversprechen und Werbung",
      seite: "S. 81, 83",
      inhalt: [
        { typ: "text", text: "Einigen Piercings wird eine heilende Wirkung nachgesagt: Das Daith soll bei Migräne helfen, das Allergiepiercing sitzt auf einem Akupunkturpunkt und soll Allergien mildern." },
        { typ: "achtung", text: "Es ist verboten, als Piercer Heilversprechen zu geben oder damit zu werben." },
        { typ: "praxis", text: "Fragt ein Kunde gezielt nach dem „Migräne-Piercing“, sagst du ehrlich: Manche berichten das, versprechen kannst du es nicht. Du stichst das Daith als Schmuckpiercing." }
      ],
      fragen: [
        ["Darfst du mit der Wirkung eines Daith-Piercings gegen Migräne werben?", ["Nein, Heilversprechen sind verboten", "Ja, mit dem Zusatz „ohne Gewähr“", "Ja, wenn Kunden es selbst berichten", "Nur auf Nachfrage des Kunden"], "Das gilt auch für das Allergiepiercing.", "S. 81"],
        ["Was ist beim Allergiepiercing verboten?", ["Heilversprechen zu geben oder damit zu werben", "Es mit 18G zu stechen", "Es mit Nadelauffangrohr zu stechen", "Es bei Allergikern zu stechen"], "Hinweis im Datenblatt.", "S. 83"],
        ["Fall: Ein Kunde will ein Daith „gegen seine Migräne“. Wie reagierst du?", ["Ich verspreche nichts und steche es als Schmuckpiercing", "Ich sage, dass es bei den meisten wirkt", "Ich lehne jedes Daith ab", "Ich verweise ihn an einen Akupunkteur, damit er die Stelle markiert"], "Heilversprechen sind verboten.", "S. 81"]
      ]
    }
  ],
  uebung: [
    "Lies die Beispiel-Einverständniserklärung im Kursbuch (S. 114–115) vollständig und markiere die Felder, die das Studio ausfüllt.",
    "Formuliere den Satz zur Rasur, den du in deine eigene Einverständniserklärung aufnimmst.",
    "Überlege, wie du reagierst, wenn ein Kunde sein Alter nicht nachweisen kann."
  ]
});
