/* Modul 04 – Schmerz und Betäubung. Quelle: Kursbuch Kap. 3 (S. 7–10) und Kap. 4 (S. 11–15). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 4,
  titel: "Schmerz und Betäubung",
  quelle: "Kursbuch Kap. 3 und 4, S. 7–15",
  ziel: "Du verstehst, wie Schmerz entsteht und weitergeleitet wird, welche Betäubung du als Piercer einsetzen darfst und worauf du dabei achten musst.",
  lektionen: [
    {
      titel: "„Tut das weh?“",
      seite: "S. 7",
      inhalt: [
        { typ: "text", text: "Diese Frage wird dir in Zukunft oft gestellt. Eine klare Antwort darauf gibt es nicht: Jeder Mensch hat ein anderes Schmerzempfinden, und man weiß nicht, wie die Nervenbahnen und -enden genau verlaufen. Manche Piercings sind erfahrungsgemäß schmerzhafter als andere, eine Faustregel gibt es aber nicht." },
        { typ: "text", text: "Schmerz ist eine komplexe Sinnesempfindung, oft mit starker seelischer Komponente. Der Fachbegriff ist Algesie." },
        { typ: "praxis", text: "Antworte ehrlich und ruhig: „Es ist ein kurzer, deutlicher Moment, jeder empfindet ihn anders.“ Wer keine falschen Versprechen hört, vertraut dir mehr." }
      ],
      fragen: [
        ["Gibt es eine Faustregel, welches Piercing wie stark schmerzt?", ["Nein, jeder Mensch empfindet anders", "Ja: Knorpel schmerzt immer am stärksten", "Ja: je dicker die Kanüle, desto schmerzhafter", "Ja: Schleimhaut schmerzt nie"], "Manche sind erfahrungsgemäß schmerzhafter, eine Regel gibt es nicht.", "S. 7"],
        ["Was ist Schmerz laut Kursbuch?", ["Eine komplexe Sinnesempfindung, oft mit starker seelischer Komponente", "Eine reine Reflexreaktion des Rückenmarks", "Eine Entzündungsreaktion der Haut", "Die Folge einer Durchblutungsstörung"], "So definiert es Kap. 3.", "S. 7"],
        ["Wie heißt Schmerz in der Fachsprache?", ["Algesie", "Anästhesie", "Analgesie", "Asepsis"], "Anästhesie ist die Betäubung.", "S. 7"],
        ["Fall: Ein Kunde fragt, ob sein Tragus-Piercing wehtun wird. Welche Antwort passt?", ["Ehrlich: Jeder empfindet es anders, es ist ein kurzer Moment", "„Das spürst du gar nicht.“", "„Knorpel tut immer am meisten weh.“", "„Mit Lidocain tut es garantiert nicht weh.“"], "Es gibt keine Faustregel; keine falschen Versprechen.", "S. 7"]
      ]
    },
    {
      titel: "Schmerzrezeptoren und Reize",
      seite: "S. 7–8",
      inhalt: [
        { typ: "text", text: "Voraussetzung für das Empfinden von Schmerz sind Schmerzrezeptoren (Nozizeptoren) und die ungestörte Weiterleitung an das Gehirn (zentrales Nervensystem). Die Schmerzrezeptoren sind meist freie Nervenenden." },
        { typ: "tabelle", kopf: ["Reiz", "Beispiele"], zeilen: [["Thermisch", "Hitze, Kälte"], ["Mechanisch", "Hiebe, Schnitte, Stiche, starker Druck"], ["Chemisch", "Säuren, Laugen"]] },
        { typ: "foto", id: "frei-haut-rezeptoren", text: "Rezeptoren und Anhangsgebilde der Haut, links unbehaarte Leistenhaut (Handfläche), rechts behaarte Haut (Achsel); englisch beschriftet." },
        { typ: "merke", text: "Die International Association for the Study of Pain definiert Schmerz als „ein unangenehmes Sinnes- oder Gefühlserlebnis, das mit tatsächlicher oder drohender Gewebeschädigung einhergeht oder von betroffenen Personen so beschrieben wird, als wäre eine solche Gewebeschädigung die Ursache“." },
        { typ: "text", text: "In seltenen Fällen spüren Kunden schon vor dem eigentlichen Stich Schmerz, allein bei der Berührung der Haut. Schmerz kann also auch ohne körperliche Schädigung empfunden werden, etwa als Erwartungsschmerz aus Angst. (Im Kursbuch steht hier „Phantomschmerz“; fachlich meint Phantomschmerz Schmerzen in einem amputierten Körperteil.)" }
      ],
      fragen: [
        ["Wie heißen die Schmerzrezeptoren?", ["Nozizeptoren", "Mechanorezeptoren", "Thermorezeptoren", "Mastzellen"], "Meist freie Nervenenden.", "S. 7–8"],
        ["Was ist die Voraussetzung für das Empfinden von Schmerz?", ["Schmerzrezeptoren und ungestörte Weiterleitung ans Gehirn", "Nur eine offene Wunde", "Eine Entzündung im Gewebe", "Ausgeschüttete Endorphine"], "Nozizeptoren und zentrales Nervensystem.", "S. 7"],
        ["Ein Stich ist welche Art von Reiz?", ["Mechanisch", "Thermisch", "Chemisch", "Elektrisch"], "Wie Hiebe, Schnitte und starker Druck.", "S. 8"],
        ["Welche Organisation liefert die zitierte Schmerzdefinition?", ["International Association for the Study of Pain (IASP)", "Weltgesundheitsorganisation (WHO)", "Robert Koch-Institut (RKI)", "Deutsche Schmerzgesellschaft"], "Die IASP-Definition.", "S. 7"],
        ["Kann Schmerz auch ohne körperliche Schädigung empfunden werden?", ["Ja, manche Kunden spüren schon bei Berührung Schmerz", "Nein, Schmerz setzt immer eine Gewebeschädigung voraus", "Nur bei Kindern", "Nur nach einer Betäubung"], "Phantomschmerz.", "S. 7"]
      ]
    },
    {
      titel: "Wie Schmerz im Gewebe entsteht",
      seite: "S. 8–9",
      inhalt: [
        { typ: "schritte", punkte: [
          "Die Verletzung des Gewebes setzt ATP, Protonen, Sauerstoffradikale, Kalium und Arachidonsäure frei.",
          "Das Enzym Cyclooxygenase (COX-1 in den Endothelzellen, COX-2 in einwandernden Leukozyten) wandelt die Arachidonsäure in Prostaglandin E2 um. Kinine aus dem verletzten Endothel werden zu Bradykinin.",
          "Mastzellen setzen ihre Granula frei (Degranulation), unter anderem Histamin.",
          "Bradykinin und Serotonin erweitern die Blutgefäße. Es entsteht ein lokales Ödem, durch das Leukozyten leichter ins geschädigte Gewebe gelangen.",
          "Alle Schmerzmediatoren erregen die Nozizeptoren. Diese schütten im neurogenen Reflex Nerve Growth Factor (NGF) und Calcitonin Gene Related Peptide (CGRP) aus."
        ] },
        { typ: "text", text: "Das hat zwei Folgen: Die Nozizeptoren werden empfindlicher und wecken schlafende Schmerzrezeptoren in der Umgebung, es kommt zur neurogenen Entzündung. Und durch NGF sprossen Nervenfasern ins umliegende Gewebe. Dadurch wird auch das Gewebe um die Verletzung herum schmerzempfindlich." },
        { typ: "merke", text: "Schmerzrezeptoren brauchen einen vergleichsweise starken Reiz, um erregt zu werden." }
      ],
      fragen: [
        ["Was wird bei einer Gewebsverletzung unter anderem freigesetzt?", ["ATP, Protonen, Kalium und Arachidonsäure", "Insulin und Glukose", "Endorphine und Adrenalin", "Lidocain und Histamin"], "Dazu Sauerstoffradikale.", "S. 8"],
        ["Welches Enzym wandelt Arachidonsäure in Prostaglandin E2 um?", ["Cyclooxygenase (COX)", "Amylase", "Lipase", "Acetylcholinesterase"], "COX-1 und COX-2.", "S. 8"],
        ["Was setzen Mastzellen unter anderem frei?", ["Histamin", "Insulin", "Adrenalin", "Endorphine"], "Degranulation.", "S. 8"],
        ["Was bewirken Bradykinin und Serotonin?", ["Eine Erweiterung der Blutgefäße mit lokalem Ödem", "Eine Verengung der Blutgefäße", "Eine Betäubung der Nervenenden", "Die Ausschüttung von Endorphinen"], "Es entsteht ein lokales Ödem.", "S. 8"],
        ["Welche Stoffe schütten erregte Nozizeptoren aus?", ["NGF und CGRP", "Endorphine und Enkephaline", "Histamin und Kalium", "Prostaglandin E2 und ATP"], "Neurogener Reflex.", "S. 9"],
        ["Was bewirkt die Sensibilisierung der Nozizeptoren?", ["Auch das umliegende Gewebe wird schmerzempfindlich", "Der Schmerz lässt schneller nach", "Die Weiterleitung zum Gehirn wird blockiert", "Die Wunde schließt sich schneller"], "Schlafende Rezeptoren werden geweckt.", "S. 9"]
      ]
    },
    {
      titel: "Wie Schmerz ins Gehirn gelangt",
      seite: "S. 10",
      inhalt: [
        { typ: "tabelle", kopf: ["Nervenfasern", "Geschwindigkeit", "Eigenschaft"], zeilen: [
          ["A-Delta-Fasern", "etwa 20 m/s", "schnell, gut lokalisierbar"],
          ["C-Fasern", "bis 2,5 m/s", "entwicklungsgeschichtlich älter, langsam, ungenau lokalisiert („irgendwo am Oberschenkel“)"]
        ] },
        { typ: "grafik", id: "schmerzleitung" },
        { typ: "text", text: "Im Rückenmark lösen Reflexe eine Fluchtbewegung aus, bevor der Schmerz bewusst wahrgenommen wird, zum Beispiel das Zurückziehen der Hand, bevor die Herdplatte als heiß erkannt wird." },
        { typ: "text", text: "Über den Vorderseitenstrang (Tractus spinothalamicus) gelangt die Information ins Gehirn. In der Großhirnrinde (Kortex) wird der Schmerz bewusst, im limbischen System emotional bewertet. Für jedes Hautareal gibt es im sensiblen Cortex ein zuständiges Areal (sensibler Homunculus). Die genaue Lokalisation ist ein Lernprozess." },
        { typ: "praxis", text: "Zuckt ein Kunde beim Stich, ist das oft der Rückenmarksreflex, der schneller ist als jede Absicht. Deshalb hält die Klemme die Stelle fest, und du stichst zügig." }
      ],
      fragen: [
        ["Welche Nervenfasern leiten Schmerz schnell (etwa 20 m/s)?", ["A-Delta-Fasern", "C-Fasern", "Motorische Fasern", "Vegetative Fasern"], "C-Fasern leiten bis etwa 2,5 m/s.", "S. 10"],
        ["Welche Fasern sind für die ungenaue Lokalisation verantwortlich?", ["C-Fasern", "A-Delta-Fasern", "Motorische Fasern", "Die Fasern des Vorderseitenstrangs"], "Sie sind langsam und älter.", "S. 10"],
        ["Was löst der Reflex im Rückenmark aus?", ["Eine Fluchtbewegung, bevor der Schmerz bewusst wird", "Die bewusste Bewertung des Schmerzes", "Eine lokale Betäubung", "Die Ausschüttung von Histamin"], "Wie bei der heißen Herdplatte.", "S. 10"],
        ["Über welchen Weg gelangt die Schmerzinformation ins Gehirn?", ["Über den Vorderseitenstrang (Tractus spinothalamicus)", "Über die Pyramidenbahn", "Über das Blut als Botenstoff", "Über den Sehnerv"], "Siehe Kap. 3.2.", "S. 10"],
        ["Wo wird Schmerz emotional bewertet?", ["Im limbischen System", "Im Rückenmark", "Im Thalamus allein", "Im Kleinhirn"], "Bewusst wird er in der Großhirnrinde.", "S. 10"],
        ["Was ist der sensible Homunculus?", ["Die Abbildung jedes Hautareals im sensiblen Cortex", "Ein Reflexbogen im Rückenmark", "Ein Schmerzrezeptor in der Haut", "Ein Teil des limbischen Systems"], "Lokalisation ist ein Lernprozess.", "S. 10"],
        ["Wo wird die Schmerzinformation auf dem Weg zur Großhirnrinde umgeschaltet?", ["Im Thalamus", "Im Kleinhirn", "Im Nozizeptor", "In der Hypophyse"], "Ergänzung zum Kursbuch, siehe Grafik.", "Ergänzung"]
      ]
    },
    {
      titel: "Lokalanästhesie und ihre Grenzen",
      seite: "S. 11–12",
      inhalt: [
        { typ: "text", text: "Während der Verschaltung im Rückenmark kann der Körper das Schmerzempfinden durch eigene Stoffe (Endorphine) dämpfen. Einige Schmerzmittel, zum Beispiel Opiate, setzen an dieser Stelle an." },
        { typ: "achtung", text: "Beim Piercen ist es unüblich und in Deutschland verboten, verschreibungspflichtige Anästhetika, zum Beispiel auf Opiat-Basis, einzusetzen. Die Teilbetäubung von Rückenmark, Nervengeflechten oder einzelnen Nerven darf nur ein Arzt durchführen." },
        { typ: "tabelle", kopf: ["Verfahren", "Wirkung", "Wer"], zeilen: [
          ["Vollnarkose", "Beeinflusst das Gehirn", "Nur ein spezieller Arzt (Anästhesist)"],
          ["Teilbetäubung", "Hemmt für begrenzte Zeit Teile des Rückenmarks, Nervengeflechte oder einzelne Nerven", "Nur ein Arzt"],
          ["Lokalanästhesie im weitesten Sinne", "Blockiert die Weiterleitung einer kleinen Fläche direkt an den Nervenenden", "Piercer, mit erlaubten Mitteln"]
        ] },
        { typ: "text", text: "Zusätzlich zur Schmerzlinderung achtet ein Anästhesist darauf, dass die Vitalfunktionen erhalten bleiben und der Organismus vor Stressfaktoren geschützt ist, etwa Publikumsverkehr, Telefon oder Klingel." },
        { typ: "merke", text: "Auch deshalb, nicht nur wegen der Hygiene, arbeitest du ausschließlich in einem abgegrenzten, ruhigen Raum, zu dem nur der Kunde und du Zutritt haben. In diesem Moment gibt es nichts Wichtigeres, was diese Ruhe stören darf." }
      ],
      fragen: [
        ["Welche körpereigenen Stoffe dämpfen den Schmerz im Rückenmark?", ["Endorphine", "Histamine", "Prostaglandine", "Bradykinine"], "Opiate setzen hier an.", "S. 11"],
        ["Dürfen Piercer verschreibungspflichtige Anästhetika auf Opiat-Basis einsetzen?", ["Nein", "Ja, mit schriftlicher Einwilligung", "Nur bei Intimpiercings", "Ja, wenn ein Arzt sie verschrieben hat"], "Unüblich und in Deutschland verboten.", "S. 11"],
        ["Welche Betäubung darf nur ein Arzt durchführen?", ["Die Teilbetäubung von Nerven, Nervengeflechten oder Rückenmark", "Das Kühlen mit Eisspray", "Das Auftragen einer rezeptfreien Salbe", "Das Kühlen mit Eiswürfeln"], "Siehe Kap. 4.", "S. 11"],
        ["Worauf beruht die Lokalanästhesie?", ["Auf der Beeinflussung des peripheren Nervensystems", "Auf der Beeinflussung des Gehirns", "Auf der Blockade des Rückenmarks", "Auf der Verengung der Blutgefäße"], "Sie blockiert die Weiterleitung an den Nervenenden.", "S. 11–12"],
        ["Warum arbeitest du in einem abgegrenzten, ruhigen Raum?", ["Wegen der Hygiene und zum Schutz vor Stressfaktoren", "Weil das Gewerbeamt es vorschreibt", "Damit keine Kunden beim Preis mithören", "Nur wegen der Lautstärke des Autoklavs"], "Telefon, Klingel und Publikumsverkehr stören.", "S. 12"],
        ["Fall: Während des Stichs klingelt das Studiotelefon. Was tust du?", ["Ich lasse es klingeln und bleibe beim Kunden", "Ich gehe kurz ran und desinfiziere danach die Hände", "Ich bitte den Kunden, kurz zu warten", "Ich nehme mit Handschuhen ab"], "Nichts darf die Ruhe in diesem Moment stören.", "S. 12"]
      ]
    },
    {
      titel: "Eisspray und Lidocainsalbe",
      seite: "S. 13",
      inhalt: [
        { typ: "text", text: "In erster Linie versucht der erfahrene Piercer, dem Kunden die Angst zu nehmen und eine ruhige, harmonische Umgebung zu schaffen. Im Idealfall ist der Kunde dann angstfrei und kann ohne Betäubung gepierct werden." },
        { typ: "tabelle", kopf: ["Mittel", "Wirkung", "Hinweis"], zeilen: [
          ["Eisspray (z. B. Chlorethyl)", "Die starke, kurzfristige Kälte betäubt die Nervenenden für kurze Zeit", "Wirkt direkt"],
          ["Lidocainsalbe (Xylocain)", "Rezeptfrei aus der Apotheke; über Schleimhaut (Mund, Intim) gut aufgenommen, auch als Spray erhältlich", "Laut Akademie erlaubt, aber nicht empfohlen"]
        ] },
        { typ: "achtung", text: "Beim Einsatz von Lidocain immer die Einwirkzeit beachten, auf Nebenwirkungen hinweisen und Wechselwirkungen mit anderen Mitteln (zum Beispiel Betablockern) ausschließen, besonders im Mund. Frag den Kunden zwingend vorher nach der Verträglichkeit: schriftlich und nochmals mündlich." }
      ],
      fragen: [
        ["Was ist laut Kursbuch der Idealfall?", ["Dem Kunden die Angst nehmen und ohne Betäubung piercen", "Jeden Kunden mit Eisspray kühlen", "Lidocainsalbe bei jedem Schleimhautpiercing", "Möglichst langsam stechen"], "Ruhige, harmonische Umgebung.", "S. 13"],
        ["Wie wirkt Eisspray?", ["Starke, kurzfristige Kälte betäubt die Nervenenden", "Es betäubt die Stelle für etwa eine Stunde", "Es desinfiziert und betäubt gleichzeitig", "Es verengt die Gefäße, sodass die Stelle nicht blutet"], "Wirkt direkt und kurz.", "S. 13"],
        ["Welcher Wirkstoff steckt typischerweise in Eisspray?", ["Chlorethyl", "Lidocain", "Benzocain", "Menthol"], "So nennt es das Kursbuch.", "S. 13"],
        ["Wo bekommt man Lidocainsalbe (Xylocain)?", ["In der Apotheke", "Nur im Großhandel für Ärzte", "Im Drogeriemarkt", "Im Piercing-Fachhandel"], "So steht es im Kursbuch.", "S. 13"],
        ["Wie steht die Piercing Akademie zur Lidocainsalbe?", ["Erlaubt, aber nicht empfohlen", "Empfohlen bei allen Knorpelpiercings", "Verboten", "Pflicht bei Intimpiercings"], "Angabe der Akademie.", "Akademie"],
        ["Was musst du vor dem Einsatz von Lidocain tun?", ["Den Kunden schriftlich und mündlich nach der Verträglichkeit fragen", "Nur die Einwirkzeit abwarten", "Die Stelle vorher mit Eisspray kühlen", "Den Hausarzt des Kunden anrufen"], "Dazu Nebenwirkungen und Wechselwirkungen beachten.", "S. 13"]
      ]
    },
    {
      titel: "Nebenwirkungen von Lidocain",
      seite: "S. 14",
      inhalt: [
        { typ: "tabelle", kopf: ["Situation", "Mögliche Nebenwirkungen"], zeilen: [
          ["Bei Einnahme", "Schwindel, Unruhe, Magen-Darm-Störungen, allergische Reaktionen, Temperaturanstieg"],
          ["Auf der Haut", "in seltenen Fällen Überempfindlichkeitsreaktionen"],
          ["An Schleimhäuten", "gelegentlich Schwellung im Rachen- und Kehlkopfbereich, sehr selten Heiserkeit"],
          ["Mäßige Überdosierung", "Kribbeln und Taubheit, metallischer Geschmack, Schwindel, leichte Benommenheit, erhöhte Geräuschempfindlichkeit, Ohrensausen"],
          ["Starke Überdosierung", "Einfluss auf Hirntätigkeit und Kreislauf"]
        ] }
      ],
      fragen: [
        ["Welche Nebenwirkungen zeigen sich bei mäßiger Überdosierung?", ["Kribbeln, Taubheit, metallischer Geschmack, Schwindel, Ohrensausen", "Hautausschlag am ganzen Körper", "Hoher Blutdruck und Herzrasen", "Starke Müdigkeit über mehrere Tage"], "Bei starker Überdosierung Einfluss auf Gehirn und Kreislauf.", "S. 14"],
        ["Was kann Lidocain an Schleimhäuten gelegentlich auslösen?", ["Eine Schwellung im Rachen- und Kehlkopfbereich", "Eine Verfärbung der Schleimhaut", "Eine Blutung", "Eine Nickelallergie"], "Sehr selten Heiserkeit.", "S. 14"],
        ["Was bewirkt eine starke Überdosierung?", ["Einfluss auf Hirntätigkeit und Kreislauf", "Nur ein leichtes Kribbeln", "Eine längere Betäubung ohne Risiko", "Eine schnellere Wundheilung"], "Deshalb genau dosieren.", "S. 14"],
        ["Welche Reaktion ist bei Anwendung auf der Haut selten möglich?", ["Überempfindlichkeitsreaktionen", "Ohrensausen", "Schwellung im Kehlkopf", "Temperaturanstieg"], "In seltenen Fällen.", "S. 14"]
      ]
    },
    {
      titel: "Wechselwirkungen von Lidocain",
      seite: "S. 14",
      inhalt: [
        { typ: "liste", punkte: [
          "Mit Wirkstoffen, die Herzrhythmus oder Herzfrequenz beeinflussen (Antiarrhythmika, Betablocker, Kalziumkanalblocker), kann sich die Wirkung von Lidocain auf das Herz verstärken oder abschwächen.",
          "Andere Betäubungsmittel, blutdrucksenkende Betablocker (Propranolol, Metoprolol, Nadolol), Diltiazem, Verapamil, Cimetidin, Amiodaron, Fluvoxamin und gefäßverengende Stoffe wie Adrenalin oder Noradrenalin verstärken die Wirkung. Dabei steigt das Risiko für Nebenwirkungen.",
          "Zusammen mit Mutterkornalkaloiden oder Epinephrin kann der Blutdruck gefährlich abfallen.",
          "Beruhigungsmittel (Benzodiazepine) und Aprindin verstärken die Nebenwirkungen.",
          "Antiepileptika schwächen die Wirkung ab; Muskelrelaxanzien werden durch Lidocain verstärkt."
        ] },
        { typ: "praxis", text: "Du musst diese Liste nicht auswendig können. Du musst aber wissen, dass es sie gibt, und bei jedem Kunden, der Medikamente angibt, auf Lidocain verzichten, wenn du die Verträglichkeit nicht sicher klären kannst." }
      ],
      fragen: [
        ["Mit welchen Medikamenten kann Lidocain gefährlich wechselwirken?", ["Mit Mitteln, die den Herzrhythmus beeinflussen, z. B. Betablockern", "Mit Antibiotika wie Penicillin", "Mit Vitaminpräparaten", "Mit der Antibabypille"], "Besonders bei Anwendung im Mund.", "S. 14"],
        ["Was kann Lidocain zusammen mit Mutterkornalkaloiden oder Epinephrin auslösen?", ["Einen gefährlichen Blutdruckabfall", "Eine Verstärkung der Betäubung ohne Risiko", "Eine allergische Hautreaktion", "Eine Nickelallergie"], "So warnt das Kursbuch.", "S. 14"],
        ["Was bewirken Antiepileptika bei Lidocain?", ["Sie schwächen die Wirkung ab", "Sie verstärken die Wirkung stark", "Sie verstärken nur die Nebenwirkungen", "Sie haben keinen Einfluss"], "Muskelrelaxanzien werden dagegen verstärkt.", "S. 14"],
        ["Was bewirken Beruhigungsmittel (Benzodiazepine) zusammen mit Lidocain?", ["Sie verstärken die Nebenwirkungen", "Sie schwächen die Wirkung ab", "Sie heben die Betäubung auf", "Sie haben keinen Einfluss"], "Ebenso Aprindin.", "S. 14"],
        ["Fall: Eine Kundin nimmt Betablocker und wünscht Lidocainsalbe für ein Zungenpiercing. Was ist richtig?", ["Ich verzichte auf Lidocain, weil eine Wechselwirkung möglich ist", "Ich nehme nur die halbe Menge", "Ich trage es auf, weil Salbe im Mund nicht aufgenommen wird", "Betablocker spielen bei Salben keine Rolle"], "Wechselwirkungen müssen ausgeschlossen werden, besonders im Mund.", "S. 13–14"]
      ]
    },
    {
      titel: "Lidocain sicher anwenden",
      seite: "S. 15",
      inhalt: [
        { typ: "schritte", punkte: [
          "Das Mittel darf nicht in die Augen oder auf verletzte Haut gelangen. Falls doch: sofort mit fließendem Wasser abspülen.",
          "Salbe vor dem Eingriff mit einem Wattestäbchen auftragen.",
          "Einige Minuten bis zur vollen Wirkung warten.",
          "Bei Anwendung im Mund und Rachen ist das Schlucken beeinträchtigt, und das Risiko für Bissverletzungen steigt. Zudem kann Nahrung versehentlich eingeatmet werden."
        ] },
        { typ: "achtung", text: "Bei Anwendung im Mund darf das Mittel nicht verschluckt werden." }
      ],
      fragen: [
        ["Was tust du, wenn Lidocain ins Auge gelangt?", ["Sofort mit fließendem Wasser abspülen", "Mit Kochsalzlösung tupfen und abwarten", "Mit Desinfektionsmittel neutralisieren", "Das Auge abdecken und weiterarbeiten"], "Nicht in die Augen oder auf verletzte Haut.", "S. 15"],
        ["Womit trägst du Lidocainsalbe auf?", ["Mit einem Wattestäbchen", "Mit dem behandschuhten Finger", "Mit einem Alkoholtupfer", "Direkt aus der Tube auf die Stelle"], "Dann einige Minuten warten.", "S. 15"],
        ["Welche Gefahr besteht bei Lidocain im Mund?", ["Bissverletzungen und versehentliches Einatmen von Nahrung", "Verfärbung der Zähne", "Ausfall des Geschmackssinns auf Dauer", "Wildes Fleisch am Zungenpiercing"], "Das Schlucken ist beeinträchtigt.", "S. 15"],
        ["Darf Lidocain bei Anwendung im Mund verschluckt werden?", ["Nein", "Ja, in kleinen Mengen", "Ja, wenn danach Wasser getrunken wird", "Nur bei Sprays"], "So steht es im Warnhinweis.", "S. 15"]
      ]
    }
  ],
  uebung: [
    "Formuliere drei Sätze, mit denen du einem ängstlichen Kunden vor dem Stich Ruhe gibst.",
    "Schreibe die Fragen auf, mit denen du vor dem Einsatz von Lidocain die Verträglichkeit abfragst.",
    "Erkläre den Unterschied zwischen A-Delta- und C-Fasern in eigenen Worten."
  ]
});
