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
      inhalt: [
        { typ: "text", text: "Diese Frage wird dir oft gestellt. Eine klare Antwort gibt es nicht: Jeder Mensch empfindet Schmerz anders, und man weiß nicht genau, wie Nervenbahnen und Nervenenden verlaufen. Manche Piercings sind erfahrungsgemäß schmerzhafter als andere, eine Faustregel gibt es aber nicht." },
        { typ: "text", text: "Schmerz ist eine komplexe Sinnesempfindung, oft mit starker seelischer Komponente. Voraussetzung sind Schmerzrezeptoren (Nozizeptoren) und die ungestörte Weiterleitung an das Gehirn (zentrales Nervensystem). Der Fachbegriff für Schmerz ist Algesie." },
        { typ: "merke", text: "Die International Association for the Study of Pain definiert Schmerz als „ein unangenehmes Sinnes- oder Gefühlserlebnis, das mit tatsächlicher oder drohender Gewebeschädigung einhergeht oder von betroffenen Personen so beschrieben wird, als wäre eine solche Gewebeschädigung die Ursache“." },
        { typ: "text", text: "In seltenen Fällen spüren Kunden schon vor dem Stich Schmerz, allein bei der Berührung der Haut. Schmerz kann also auch ohne körperliche Schädigung empfunden werden." },
        { typ: "liste", titel: "Schmerzrezeptoren reagieren auf", punkte: ["thermische Reize (Hitze, Kälte)", "mechanische Reize (Hiebe, Schnitte, Stiche, starker Druck)", "chemische Reize (Säuren, Laugen)"] }
      ]
    },
    {
      titel: "Wie Schmerz entsteht und weitergeleitet wird",
      inhalt: [
        { typ: "schritte", punkte: [
          "Die Verletzung des Gewebes setzt ATP, Protonen, Sauerstoffradikale, Kalium und Arachidonsäure frei.",
          "Das Enzym Cyclooxygenase (COX-1 in den Endothelzellen, COX-2 in einwandernden Leukozyten) wandelt die Arachidonsäure in Prostaglandin E2 um; Kinine aus dem verletzten Endothel werden zu Bradykinin.",
          "Mastzellen setzen unter anderem Histamin frei. Bradykinin und Serotonin erweitern die Blutgefäße, es entsteht ein lokales Ödem, durch das Leukozyten ins Gewebe gelangen.",
          "Die Schmerzmediatoren erregen die Nozizeptoren. Diese schütten Nerve Growth Factor (NGF) und Calcitonin Gene Related Peptide (CGRP) aus.",
          "Folge: Die Nozizeptoren werden empfindlicher und wecken schlafende Schmerzrezeptoren in der Umgebung. Auch das umliegende Gewebe wird schmerzempfindlich."
        ] },
        { typ: "tabelle", kopf: ["Nervenfasern", "Geschwindigkeit", "Eigenschaft"], zeilen: [
          ["A-Delta-Fasern", "etwa 20 m/s", "schnell, gut lokalisierbar"],
          ["C-Fasern", "bis 2,5 m/s", "entwicklungsgeschichtlich älter, langsam, ungenau lokalisiert („irgendwo am Oberschenkel“)"]
        ] },
        { typ: "text", text: "Im Rückenmark lösen Reflexe eine Fluchtbewegung aus, bevor der Schmerz bewusst wird, etwa das Zurückziehen der Hand von der heißen Herdplatte. Über den Vorderseitenstrang (Tractus spinothalamicus) gelangt die Information ins Gehirn. In der Großhirnrinde wird sie bewusst, im limbischen System emotional bewertet. Für jedes Hautareal gibt es im sensiblen Cortex ein zuständiges Areal (sensibler Homunculus)." }
      ]
    },
    {
      titel: "Lokalanästhesie: was Piercer dürfen",
      inhalt: [
        { typ: "text", text: "Im Rückenmark kann der Körper das Schmerzempfinden durch eigene Stoffe (Endorphine) dämpfen. Einige Schmerzmittel, zum Beispiel Opiate, setzen hier an." },
        { typ: "achtung", text: "Verschreibungspflichtige Anästhetika, etwa auf Opiat-Basis, dürfen Piercer in Deutschland nicht einsetzen. Eine Teilbetäubung von Rückenmark, Nervengeflechten oder einzelnen Nerven darf nur ein Arzt durchführen." },
        { typ: "text", text: "Piercer setzen auf Lokalanästhesie im weitesten Sinne: Sie blockiert die Weiterleitung der Schmerzinformation einer kleinen Fläche direkt an den Nervenenden." },
        { typ: "merke", text: "Arbeite ausschließlich in einem abgegrenzten, ruhigen Raum, zu dem nur der Kunde und du Zutritt haben. In diesem Moment gibt es nichts Wichtigeres, was diese Ruhe stören darf." }
      ]
    },
    {
      titel: "Welche Mittel du nutzen kannst",
      inhalt: [
        { typ: "text", text: "In erster Linie versucht ein erfahrener Piercer, dem Kunden die Angst zu nehmen und für eine ruhige, harmonische Umgebung zu sorgen. Im Idealfall kann dann ohne Betäubung gepierct werden." },
        { typ: "tabelle", kopf: ["Mittel", "Wirkung", "Hinweis"], zeilen: [
          ["Eisspray (z. B. Chlorethyl)", "Betäubt durch starke Kälte für kurze Zeit die Nervenenden", "Wirkt sofort und kurz"],
          ["Lidocainsalbe (Xylocain)", "Rezeptfrei aus der Apotheke; über Schleimhaut gut aufgenommen, für Mund und Intimbereich auch als Spray", "Erlaubt, wird von der Akademie aber nicht empfohlen"]
        ] },
        { typ: "achtung", text: "Beim Einsatz von Lidocain immer die Einwirkzeit beachten, auf Nebenwirkungen hinweisen und Wechselwirkungen mit anderen Mitteln (zum Beispiel Betablockern) ausschließen, besonders bei Anwendung im Mund. Frag den Kunden zwingend vorher nach der Verträglichkeit, schriftlich und nochmals mündlich." }
      ]
    },
    {
      titel: "Nebenwirkungen und Vorsicht bei Lidocain",
      inhalt: [
        { typ: "tabelle", kopf: ["Situation", "Mögliche Nebenwirkungen"], zeilen: [
          ["Bei Einnahme", "Schwindel, Unruhe, Magen-Darm-Störungen, allergische Reaktionen, Temperaturanstieg"],
          ["Auf der Haut", "in seltenen Fällen Überempfindlichkeitsreaktionen"],
          ["An Schleimhäuten", "gelegentlich Schwellung im Rachen- und Kehlkopfbereich, sehr selten Heiserkeit"],
          ["Mäßige Überdosierung", "Kribbeln, Taubheit, metallischer Geschmack, Schwindel, Benommenheit, Ohrensausen"],
          ["Starke Überdosierung", "Einfluss auf Hirntätigkeit und Kreislauf"]
        ] },
        { typ: "liste", titel: "Wechselwirkungen", punkte: [
          "Mittel, die Herzrhythmus oder Herzfrequenz beeinflussen (Antiarrhythmika, Betablocker, Kalziumkanalblocker), können die Wirkung auf das Herz verstärken oder abschwächen.",
          "Andere Betäubungsmittel und bestimmte Medikamente (zum Beispiel Propranolol, Metoprolol, Cimetidin, Amiodaron, Fluvoxamin) sowie gefäßverengende Stoffe wie Adrenalin verstärken die Wirkung.",
          "Zusammen mit Mutterkornalkaloiden oder Epinephrin kann der Blutdruck gefährlich abfallen.",
          "Beruhigungsmittel (Benzodiazepine) und Aprindin verstärken die Nebenwirkungen; Antiepileptika schwächen die Wirkung ab; Muskelrelaxanzien werden verstärkt."
        ] },
        { typ: "schritte", punkte: [
          "Nicht in die Augen oder auf verletzte Haut bringen. Falls doch: sofort mit fließendem Wasser abspülen.",
          "Salbe mit einem Wattestäbchen auftragen und einige Minuten bis zur vollen Wirkung warten.",
          "Im Mund: Das Taubheitsgefühl erschwert das Schlucken und erhöht das Risiko für Bissverletzungen und dafür, Nahrung versehentlich einzuatmen. Das Mittel darf nicht verschluckt werden."
        ] }
      ]
    }
  ],
  uebung: [
    "Formuliere drei Sätze, mit denen du einem ängstlichen Kunden vor dem Stich Ruhe gibst.",
    "Schreibe die Fragen auf, mit denen du vor dem Einsatz von Lidocain die Verträglichkeit abfragst.",
    "Erkläre den Unterschied zwischen A-Delta- und C-Fasern in eigenen Worten."
  ],
  quiz: [
    { frage: "Wie heißen die Schmerzrezeptoren?", antworten: ["Nozizeptoren", "Leukozyten", "Mastzellen"], richtig: 0, erklaerung: "Meist sind es freie Nervenenden.", seite: "S. 7–8" },
    { frage: "Welche Nervenfasern leiten Schmerz schnell (etwa 20 m/s)?", antworten: ["C-Fasern", "A-Delta-Fasern", "Beide gleich schnell"], richtig: 1, erklaerung: "C-Fasern leiten nur bis etwa 2,5 m/s.", seite: "S. 10" },
    { frage: "Welche Betäubung darf nur ein Arzt durchführen?", antworten: ["Eisspray", "Teilbetäubung von Nerven, Nervengeflechten oder Rückenmark", "Beruhigendes Gespräch"], richtig: 1, erklaerung: "Verschreibungspflichtige Anästhetika sind Piercern untersagt.", seite: "S. 11" },
    { frage: "Was ist laut Kursbuch der Idealfall?", antworten: ["Immer betäuben", "Dem Kunden die Angst nehmen und ohne Betäubung piercen", "Lidocain spritzen"], richtig: 1, erklaerung: "Ruhige, harmonische Umgebung und ein angstfreier Kunde.", seite: "S. 13" },
    { frage: "Was musst du vor dem Einsatz von Lidocain tun?", antworten: ["Nichts", "Den Kunden schriftlich und mündlich nach der Verträglichkeit fragen", "Nur die Einwirkzeit abwarten"], richtig: 1, erklaerung: "Dazu Nebenwirkungen und Wechselwirkungen beachten.", seite: "S. 13" },
    { frage: "Was gilt bei Lidocain im Mund?", antworten: ["Es darf verschluckt werden.", "Es darf nicht verschluckt werden; Schlucken und Beißen sind beeinträchtigt.", "Es wirkt im Mund nicht."], richtig: 1, erklaerung: "Es besteht ein Risiko für Bissverletzungen und versehentliches Einatmen von Nahrung.", seite: "S. 15" }
  ]
});
