/* Module 07 – Tools and instruments. Source: course book ch. 9 (pp. 64–73), sterile/clean p. 35.
   Cannula sizes according to the manufacturer B. Braun (1.3 / 1.7 / 2.2 mm); the book gives 1.2 / 1.6 / 2.1 mm (see KURS-RECHERCHE.md).
   Academy standard (confirmed 24.10.2026): 18G cannula for 1.2 mm jewelry, 16G cannula for 1.6 mm jewelry. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 7,
  titel: "Tools and instruments",
  quelle: "Course book ch. 9, pp. 64–73",
  ziel: "You know the piercer’s tools, you know what you use them for, and you can tell what has to be sterile and what only has to be clean.",
  lektionen: [
    {
      titel: "Cannulas",
      seite: "S. 64",
      inhalt: [
        { typ: "text", text: "Piercings are done with IV cannulas (catheter needles, “Braunüle”), mainly in three needle sizes. The color of the hub shows the size. The higher the gauge number (G), the thinner the cannula." },
        { typ: "grafik", id: "kanuele" },
        { typ: "tabelle", kopf: ["Size", "Outer diameter", "Color"], zeilen: [["18G", "1.3 mm", "Green"], ["16G", "1.7 mm", "Gray"], ["14G", "2.2 mm", "Orange"]] },
        { typ: "foto", id: "kanuelen", text: "IV cannulas in their identification colors. Course book p. 64." },
        { typ: "ergaenzung", text: "The diameters correspond to the manufacturer’s specifications for IV cannulas. The course book gives 1.2 / 1.6 / 2.1 mm; 1.2 and 1.6 mm are the jewelry sizes the Academy pierces with 18G and 16G respectively (next lesson)." }
      ],
      fragen: [
        ["In how many sizes do you mainly work when piercing?", ["Three", "Two", "Five", "One"], "18G, 16G and 14G.", "S. 64"],
        ["What does a higher gauge number mean?", ["A thinner cannula", "A thicker cannula", "A longer cannula", "A shorter cannula"], "18G 1.3 mm, 14G 2.2 mm.", "S. 64"],
        ["How can you quickly tell the size?", ["By the color of the hub", "By the length of the needle", "By the color of the packaging", "By the bevel of the needle tip"], "Green, gray, orange.", "S. 64"],
        ["Which part of the IV cannula stays in the piercing channel after piercing?", ["The plastic sheath", "The steel needle", "The grip with the hub", "Needle and sheath together"], "It guides the jewelry.", "S. 112"]
      ]
    },
    {
      titel: "Cannula size and jewelry size",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Cannulas and jewelry are both specified in gauge, but the same number does not mean the same diameter in millimeters. Mix them up and you’ll order the wrong jewelry." },
        { typ: "tabelle", kopf: ["Gauge", "Cannula (outer diameter)", "Jewelry (bar thickness)"], zeilen: [
          ["20G", "–", "0.8 mm"], ["18G", "1.3 mm", "1.0 mm"], ["16G", "1.7 mm", "1.2 mm"], ["14G", "2.2 mm", "1.6 mm"], ["12G", "–", "2.0 mm"]
        ] },
        { typ: "tabelle", kopf: ["Jewelry thickness", "Academy cannula", "Outer diameter of the cannula"], zeilen: [
          ["1.2 mm (sold as 16G)", "18G (green)", "1.3 mm"],
          ["1.6 mm (sold as 14G)", "16G (gray)", "1.7 mm"],
          ["Prince Albert (BCR)", "14G (orange)", "2.2 mm"],
          ["Lobe, only if a tunnel is wanted", "14G (orange)", "2.2 mm"]
        ] },
        { typ: "grafik", id: "gauge" },
        { typ: "merke", text: "Academy standard: 18G cannula for 1.2 mm jewelry, 16G cannula for 1.6 mm jewelry. The Academy uses the 14G cannula only for the Prince Albert (data sheet p. 98) and for the Lobe when a tunnel is wanted; otherwise the Lobe is pierced with 18G. So the cannula is labeled one gauge step thinner than the jewelry, but is slightly thicker in diameter." },
        { typ: "liste", punkte: [
          "The higher the gauge number, the thinner: this applies equally to cannulas and jewelry.",
          "The jewelry is inserted into the plastic sheath of the cannula. That is why the cannula is slightly thicker than the jewelry that passes through it.",
          "Risk of confusion when ordering: 1.2 mm jewelry is sold as 16G, but it is pierced with the 18G cannula."
        ] },
        { typ: "praxis", text: "Try out every combination of cannula and initial jewelry on the practice model first, not on a client." },
        { typ: "ergaenzung", text: "Jewelry sizes according to common supplier charts, cannula sizes according to manufacturer specifications. The combinations are the Piercing Akademie standard." }
      ],
      fragen: [
        ["What bar thickness does 16G jewelry have?", ["1.2 mm", "1.7 mm", "1.6 mm", "1.0 mm"], "A 16G cannula, by contrast, is 1.7 mm.", "Ergänzung"],
        ["What bar thickness does 14G jewelry have?", ["1.6 mm", "2.2 mm", "1.2 mm", "2.0 mm"], "A 14G cannula is 2.2 mm.", "Ergänzung"],
        ["Which cannula does the Academy use for 1.2 mm jewelry?", ["18G", "16G", "14G", "20G"], "18G cannula with 1.3 mm outer diameter.", "Akademie"],
        ["Which cannula does the Academy use for 1.6 mm jewelry?", ["16G", "18G", "14G", "12G"], "16G cannula with 1.7 mm outer diameter.", "Akademie"],
        ["Case: You order initial jewelry in 16G. Which cannula do you pierce it with?", ["The 18G cannula, as 16G jewelry is 1.2 mm", "The 16G cannula, same number", "The 14G cannula, one step thicker", "The 20G cannula"], "Jewelry gauge and cannula gauge do not correspond to the same millimeters.", "Akademie"],
        ["Which cannula does the Academy use to pierce a normal Lobe?", ["18G", "16G", "14G", "Biopsy punch"], "14G only if a tunnel is wanted.", "S. 74"],
        ["When do you use the 14G cannula for a Lobe?", ["Only if a tunnel is wanted", "For every Lobe", "For clients with thick earlobes", "For an Upper Lobe"], "Otherwise the Academy pierces the Lobe with 18G.", "S. 74"],
        ["Which cannula does the Academy use to pierce the Prince Albert?", ["14G", "16G", "18G", "12G"], "According to the data sheet; the initial jewelry is a BCR.", "S. 98"],
        ["Does 16G mean the same diameter for cannula and jewelry?", ["No, the 16G cannula (1.7 mm) is thicker than 16G jewelry (1.2 mm)", "Yes, both are 1.6 mm", "No, the 16G cannula is thinner than 16G jewelry", "Yes, gauge is a uniform standard"], "Cannulas and jewelry are measured differently.", "Ergänzung"],
        ["Why is the cannula thicker than the jewelry?", ["Because the jewelry is inserted into the plastic sheath", "So the channel is larger than the jewelry and heals faster", "So that less blood escapes", "Because thicker cannulas hurt less"], "See module 9, The piercing.", "Ergänzung"],
        ["What applies to jewelry: the higher the gauge number …", ["… the thinner the bar", "… the thicker the bar", "… the longer the bar", "… the bigger the ball"], "As with cannulas.", "Ergänzung"],
        ["Where do you try out a new combination of cannula and jewelry?", ["On the practice model first", "Directly on the first client", "On your own ear", "Not at all, supplier charts are enough"], "Not on a client.", "Ergänzung"]
      ]
    },
    {
      titel: "Biopsy punches",
      seite: "S. 65",
      inhalt: [
        { typ: "text", text: "Skin biopsy punches are designed for single use and are available in various sizes and diameters. Punching causes only minor trauma to the skin tissue, so the wound can heal quickly." },
        { typ: "text", text: "They are mainly used for dermal anchors, tunnels and Conch piercings." },
        { typ: "foto", id: "biopsiestanze", text: "Biopsy punch. Course book p. 65." }
      ],
      fragen: [
        ["What are biopsy punches designed for?", ["For punching the skin once (single use)", "For repeated use after autoclaving", "For stretching healed piercing channels", "For shortening the plastic sheath"], "Available in various diameters.", "S. 65"],
        ["What are biopsy punches mainly used for?", ["Dermal anchor, tunnel and Conch", "Lobe, Helix and Tragus", "Tongue and lip frenulum", "Navel and nipple"], "They punch the skin once.", "S. 65"],
        ["How much is the tissue traumatized by punching?", ["Only slightly", "More than with a cannula", "Not at all, because no tissue is removed", "So much that stitches are always needed"], "This allows quick healing.", "S. 65"]
      ]
    },
    {
      titel: "Forceps, clamps and receiving tube",
      seite: "S. 65, 68",
      inhalt: [
        { typ: "video", id: "instrumente", text: "Piercing clamp, IV cannula (“Braunüle”), receiving tube and ball grabber on a sterile drape.", schleife: true },
        { typ: "text", text: "Piercing clamps hold the area to be pierced so that the skin stays in position while you pierce. There are different clamps for different piercings, for example Snaptile, gauze clamp, septum forceps, tragus forceps or tongue forceps. Which one fits is stated in the respective data sheet (module 8)." },
        { typ: "text", text: "Some piercings cannot be done with a clamp. For piercings in the inner part of the ear, for example Rook and Daith, you use the receiving tube. It prevents the cannula from injuring the surrounding tissue." },
        { typ: "galerie", titel: "From the course book", bilder: [["piercingzange", "Piercing clamps"], ["nadelauffangrohr", "Receiving tube"]], text: "Course book pp. 65 and 68." },
        { typ: "praxis", text: "Some piercings, such as Helix or navel, can also be done freehand. That requires a steady hand; as a beginner, you are better off working with a clamp." }
      ],
      fragen: [
        ["What is a piercing clamp for?", ["It holds the area so the skin stays in position while piercing", "It holds the jewelry while the ball is screwed on", "It catches the cannula for Rook and Daith", "It spreads ball closure rings"], "There are many clamps for different piercings.", "S. 65"],
        ["What do you use a receiving tube for?", ["For areas such as Rook and Daith where no clamp fits", "For shortening the cannula", "For stretching the piercing channel", "For storing used needles"], "It protects the surrounding tissue.", "S. 68"],
        ["Where can you find out which clamp suits a piercing?", ["In the piercing’s data sheet", "On the cannula packaging", "In the framework hygiene plan", "In the consent form"], "See module 8.", "S. 74–110"]
      ]
    },
    {
      titel: "Auxiliary tools",
      seite: "S. 66–69, 73",
      inhalt: [
        { typ: "tabelle", kopf: ["Tool", "What for"], zeilen: [
          ["Insertion taper", "Pointed bar that gradually widens; used to carefully stretch healed piercing channels or to reopen channels that have closed up"],
          ["Holding pliers", "Holds the inserted jewelry while the ball is screwed on"],
          ["Scissors", "Shortens the plastic tube of the cannula after piercing so the jewelry goes in more easily"],
          ["Ball grabber", "Holds piercing balls and makes screwing them on easier"],
          ["Caliper", "Measures jewelry and adjusts the position of the piercing"],
          ["Ring opening and ring closing pliers", "Spreads or closes ball closure rings (BCR) to remove or insert the ball"],
          ["Flashlight (green light)", "Shines through the ear, for example, to identify blood vessels"],
          ["Mini side cutter", "Cuts through jewelry when a ball can no longer be loosened"]
        ] },
        { typ: "achtung", text: "Always proceed very carefully with the insertion taper to avoid injury." },
        { typ: "galerie", titel: "The auxiliary tools", bilder: [["einfuehrhilfe", "Insertion taper"], ["klemmzange", "Holding pliers"], ["schere", "Scissors"], ["kugelgreifer", "Ball grabber"], ["messschieber", "Caliper"], ["ringoeffnungszange", "Ring opening pliers"], ["ringschliesszange", "Ring closing pliers"], ["taschenlampe", "Flashlight (green light)"], ["seitenschneider", "Mini side cutter"]], text: "Course book pp. 66–69 and 73." }
      ],
      fragen: [
        ["What are the scissors for when piercing?", ["For shortening the plastic tube after piercing", "For shortening the initial jewelry", "For cutting hair at the piercing site", "For opening the sterile packaging"], "This makes it easier to insert the jewelry.", "S. 67"],
        ["What do you pay attention to with the insertion taper?", ["Proceed very carefully to avoid injuries", "Use it only on fresh piercing channels", "Twist it with pressure until it goes through", "Use it without lubricant"], "Carefully stretch healed channels.", "S. 66"],
        ["What do you use to cut through jewelry whose ball will not loosen?", ["The mini side cutter", "The ring opening pliers", "The ball grabber", "The scissors"], "The jewelry is destroyed in the process.", "S. 73"],
      ]
    },
    {
      titel: "Single-use materials",
      seite: "S. 69–72",
      inhalt: [
        { typ: "liste", titel: "New for every client", punkte: [
          "Single-use skin marker (surgical marker): mark the entry and exit points before piercing",
          "Alcohol swab: disinfect the area to be pierced",
          "Disposable razor: remove hair from the area where possible, because hair always carries germs and can impair healing",
          "Disposable gloves: always work on the client with disinfected hands and (sterile) disposable gloves",
          "Face mask: for your own safety and the client’s safety",
          "Disposable underpads: single-use mats as a base at the workstation"
        ] },
        { typ: "text", text: "You lay out your tools and instruments ready in the instrument tray." },
        { typ: "galerie", titel: "Single-use materials and workstation", bilder: [["hautmarker", "Single-use skin marker"], ["alkoholtupfer", "Alcohol swab"], ["einmalrasierer", "Disposable razor"], ["handschuhe", "Disposable gloves"], ["mundschutz", "Face mask"], ["einmalunterlage", "Disposable underpad"], ["instrumentenschale", "Instrument tray"]], text: "Course book pp. 69–72." },
        { typ: "text", text: "There are countless tools, aids and versions; the course book shows a selection of the most important ones." }
      ],
      fragen: [
        ["Why is hair removed from the piercing site?", ["Hair carries germs and can impair healing", "So the skin marker holds better", "So the client feels less pain", "Because otherwise the clamp slips"], "That is what disposable razors are for.", "S. 70"],
        ["What do you use to mark the entry and exit points?", ["A single-use skin marker", "A disinfected ballpoint pen", "A kohl pencil", "Iodine solution"], "Surgical marker.", "S. 69"],
        ["What do you use to disinfect the area to be pierced?", ["An alcohol swab", "Saline solution", "Octenisept for every piercing", "Surface disinfectant"], "See single-use materials.", "S. 70"],
        ["How do you work on the client?", ["Always with disinfected hands and (sterile) disposable gloves", "With disposable gloves; hands need not be disinfected", "With disinfected hands, without gloves", "With reusable, disinfected gloves"], "Gloves do not replace hand disinfection: disinfect first, then put on gloves.", "S. 71"]
      ]
    },
    {
      titel: "Sterile or just clean?",
      seite: "S. 35",
      inhalt: [
        { typ: "merke", text: "Everything that injures the skin or comes into contact with blood (needles, needle holders, clamps) must be sterile: either as sterile single-use material or sterilized in the autoclave." },
        { typ: "foto", id: "pexels-7755181", text: "An instrument is only sterile as long as its sterile packaging is intact; it is opened only immediately before use." },
        { typ: "text", text: "Tools without direct skin contact, such as the ball grabber or scissors, are cleaned in the ultrasonic bath and disinfected in a disinfection bath. Used cannula needles go straight into the sharps container." }
      ],
      fragen: [
        ["What must be sterile?", ["Everything that injures skin or touches blood, e.g. needles and clamps", "Only the cannulas", "Also ball grabbers and scissors", "Only the initial jewelry"], "Tools without skin contact are disinfected.", "S. 35"],
        ["How is a ball grabber reprocessed?", ["Cleaned in the ultrasonic bath and disinfected", "It is single-use material", "It is only wiped with alcohol", "It does not need reprocessing"], "No direct skin contact.", "S. 35"],
        ["Where does a used cannula needle go?", ["Into the sharps container", "Into the instrument tray for reprocessing", "Into the step trash can", "Into its protective cap, then into the trash"], "Right after piercing.", "S. 27"]
      ]
    }
  ],
  uebung: [
    "Lay out your instrument set in the instrument tray and name every part.",
    "Match each cannula size to its color without looking it up.",
    "Sort your tools into two groups: must be sterile / must be clean and disinfected."
  ]
});
