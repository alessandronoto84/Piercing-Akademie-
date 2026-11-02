/* Module 06 – Materials and jewellery. Source: course book ch. 7 (pp. 52–60) and ch. 8 (pp. 61–63), extra length p. 74.
   Corrections compared with the book: “Chirurgenstahl” instead of “Chirurgiestahl”, “Niob” instead of “Nionium” (see KURS-RECHERCHE.md). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 6,
  titel: "Materials and jewellery",
  quelle: "Course book ch. 7 and 8, pp. 52–63",
  ziel: "You know which materials are suitable as initial jewellery, you recognise the common jewellery types and you know the basic rule on extra length.",
  lektionen: [
    {
      titel: "Titanium G23",
      seite: "S. 52–53",
      inhalt: [
        { typ: "text", text: "Titanium is a high-tech metal with many special properties. It is used for medical implants such as bone screws, artificial joints and pacemaker housings. Producing one tonne of titanium takes 16 times more energy than producing one tonne of steel." },
        { typ: "text", text: "Not every titanium alloy is suitable for body piercing. High-quality piercing jewellery is mainly made from the high-tech titanium “Ti6Al4V ELI, grade 23 titanium”, G23 titanium for short (the course book says “exclusively”; there is also implant-grade commercially pure titanium, see the lesson “How to recognise good initial jewellery”). It is standardised as a material for surgical implants, is used worldwide for implants such as artificial joints and is considered biocompatible." },
        { typ: "foto", id: "titan-schmuck", text: "Jewellery made of G23 titanium. Course book p. 55." },
        { typ: "tabelle", kopf: ["Property", "What it means"], zeilen: [
          ["Weighs only half as much as steel", "Comfortable to wear, even with long bars"],
          ["Can be coloured by anodising", "Coloured jewellery without a coating, thanks to stable oxide layers"],
          ["Nickel-free", "Hypoallergenic, ideal as initial jewellery"],
          ["Conducts hardly any heat or cold", "Pleasant on the skin"],
          ["Strong oxide layer", "Corrosion-resistant and permanently colourfast"]
        ] },
        { typ: "grafik", id: "anodisieren" },
        { typ: "foto", id: "frei-anodisiert", text: "Anodised titanium sheets and a pendant: the colours come from the oxide layer alone." },
        { typ: "ergaenzung", text: "Implant titanium Ti6Al4V ELI is specified internationally according to the standard ASTM F136. When buying, make sure you get the corresponding material certificate." }
      ],
      fragen: [
        ["What is the exact designation of G23 titanium?", ["Ti6Al4V ELI, grade 23 titanium", "Ti6Al4V, grade 5 titanium", "Commercially pure titanium, grade 2", "Ti6Al7Nb, grade 23 titanium"], "G23 titanium for short.", "S. 53"],
        ["How much does G23 titanium weigh compared with steel?", ["About half as much", "About a quarter as much", "About the same", "About twice as much"], "One of its properties.", "S. 52"],
        ["How can G23 titanium be coloured?", ["By anodising", "By electroplating with colour pigments", "By powder coating", "By stove enamelling"], "An electrochemical process.", "S. 52"],
        ["Why is G23 titanium hypoallergenic?", ["It is nickel-free", "It is coated with PTFE", "It contains vanadium, which inhibits allergies", "It is gold-plated"], "That is why it is ideal as initial jewellery.", "S. 52"],
        ["Why is G23 titanium permanently colourfast?", ["Because of its strong oxide layer", "Because the colour is baked on", "Because it is PVD-coated", "Because it conducts hardly any heat"], "Corrosion-resistant.", "S. 53"],
        ["What else is G23 titanium approved for?", ["For implants such as artificial joints", "Only for jewellery and watches", "Only for surgical instruments", "Only for spectacle frames"], "Standardised as an implant material (ASTM F136).", "S. 53"],
        ["What creates the colour when titanium is anodised?", ["An oxide layer whose thickness depends on the voltage", "A baked-on dye", "A PVD coating", "Mixing in other metals"], "Higher voltage, thicker layer, different colour.", "S. 53"]
      ]
    },
    {
      titel: "Blackline and zircon gold",
      seite: "S. 54",
      inhalt: [
        { typ: "text", text: "Blackline titanium G23 is coated using PVD (Physical Vapor Deposition), a process that has been widely used in medicine since the 1980s. In a gas environment (plasma), a wafer-thin, abrasion-resistant layer forms without changing the material itself. Blackline piercings are almost permanently scratch-resistant, colourfast and biochemically compatible." },
        { typ: "text", text: "Zircon gold titanium G23 was developed as an alternative to gold jewellery. It is kinder to the skin than gold, rarely discolours, has a smoother surface, weighs less, is cheaper and yet more durable." },
        { typ: "ergaenzung", text: "Zircon gold is not gold but a gold-coloured coating, usually zirconium nitride applied by PVD. The advantages above are manufacturer claims. Coatings can wear off over time; for initial jewellery, professional associations such as the APP recommend uncoated material." }
      ],
      fragen: [
        ["Which process is used to coat Blackline titanium?", ["PVD (Physical Vapor Deposition)", "Electroplating", "Anodising", "Powder coating"], "Wafer-thin and abrasion-resistant.", "S. 54"],
        ["What properties do Blackline piercings have?", ["Almost permanently scratch-resistant, colourfast and well tolerated", "They are turned black by anodising", "They contain black nickel", "They are especially recommended as initial jewellery"], "The PVD layer is very thin and hard. For initial jewellery, the Academy still sticks to G23 titanium or PTFE.", "S. 54"],
        ["What is zircon gold titanium?", ["Titanium with a gold-coloured coating, an alternative to gold", "Solid 14-carat gold", "Gold-plated surgical steel", "A gold-titanium alloy"], "Smoother, lighter, cheaper.", "S. 54"]
      ]
    },
    {
      titel: "Surgical steel",
      seite: "S. 55",
      inhalt: [
        { typ: "text", text: "There are countless types of steel. Piercers use only three for jewellery: Composition D implant steel, surgical steel 316 LVM and, most commonly, surgical steel 316L. According to the EU Nickel Directive, these steels meet all the criteria to be worn as second jewellery (after complete healing) worldwide and for an unlimited time." },
        { typ: "text", text: "In medicine, 316L is used, for example, for bone screws, body needles, bone plates, sutures, staples and as a pacemaker electrode." },
        { typ: "achtung", text: "Surgical steel 316L contains 10 to 14 per cent nickel and is unsuitable as initial jewellery. As second jewellery it is usually safe." }
      ],
      fragen: [
        ["How much nickel does surgical steel 316L contain?", ["10 to 14 per cent", "0 per cent", "2 to 4 per cent", "18 to 20 per cent"], "That is why it is not used as initial jewellery.", "S. 55"],
        ["Which three steels do piercers use for jewellery?", ["Composition D implant steel, 316 LVM and 316L", "303, 304 and 316L", "316L, 316 LVM and 303", "Only 316L"], "Most commonly 316L.", "S. 55"],
        ["What is surgical steel 316L suitable for?", ["As second jewellery after complete healing", "As initial jewellery for people with nickel allergy", "As initial jewellery in cartilage piercings", "Only for tools, not for jewellery"], "As second jewellery it is usually safe.", "S. 55"],
        ["What is 316L used for in medicine?", ["For example, bone screws and pacemaker electrodes", "Only for disposable scalpels", "For contact lenses", "For artificial heart valves made of titanium"], "Also needles, plates, sutures, staples.", "S. 55"]
      ]
    },
    {
      titel: "The rule for initial jewellery",
      seite: "S. 56",
      inhalt: [
        { typ: "merke", text: "As a piercer, you never put your client’s health at risk." },
        { typ: "text", text: "Some suppliers sell body jewellery made of 303 stainless steel, a high-sulphur steel that is easy to machine. 303 steel causes considerable adverse reactions in nickel-sensitive people (14 per cent in test studies) and must be avoided under all circumstances." },
        { typ: "achtung", text: "Because many people have a nickel allergy, often without knowing it, we always use G23 titanium or PTFE as initial jewellery." },
        { typ: "text", text: "Implantanium, niobium or high-purity gold would also be possible, but they are not economically viable." },
        { typ: "ergaenzung", text: "Under EU law (REACH, Annex XVII, entry 27), metal parts inserted into pierced parts of the body may release no more than 0.2 µg of nickel per cm² per week (tested according to EN 1811). The Academy’s rule goes beyond this." }
      ],
      fragen: [
        ["Which materials do you use as initial jewellery?", ["G23 titanium or PTFE", "G23 titanium or 316L", "PTFE or zircon gold", "316 LVM or Blackline titanium"], "Many people have a nickel allergy without knowing it.", "S. 56"],
        ["What applies to 303 steel?", ["It causes considerable reactions in nickel-sensitive people and must be avoided", "It is safe as second jewellery", "It is nickel-free but hard to machine", "It is identical to 316L"], "High sulphur content.", "S. 56"],
        ["Which materials would be possible but do not make economic sense?", ["Implantanium, niobium or high-purity gold", "PTFE and G23 titanium", "316L and 303 steel", "Blackline and zircon gold titanium"], "Possible but expensive: implantanium, niobium and high-purity gold. In practice, G23 titanium and PTFE remain the choice.", "S. 56"],
        ["Under EU law, what is the maximum nickel release for jewellery in fresh piercings?", ["0.2 µg per cm² per week", "0.5 µg per cm² per week", "2 µg per cm² per week", "0.02 µg per cm² per day"], "REACH, entry 27 (Academy note).", "Ergänzung"],
        ["Case: A client brings his own surgical steel jewellery for his fresh piercing. What do you do?", ["I insert G23 titanium or PTFE as initial jewellery", "I insert his jewellery after autoclaving it", "I insert it if it has 4 mm extra length", "I insert it if the client signs a form"], "316L is unsuitable as initial jewellery.", "S. 55–56"]
      ]
    },
    {
      titel: "Recognising a nickel allergy",
      seite: "S. 57",
      inhalt: [
        { typ: "text", text: "When the skin of an allergic person comes into contact with nickel, it reddens, swells, becomes rough and dry and itches. Sometimes these so-called contact eczemas scale or weep, or swell painfully. The rash may stay limited to small areas or spread over large areas of skin, even over the whole body." },
        { typ: "text", text: "Eczema can appear on any part of the body that has come into contact with nickel, for example the hands, face, arms, legs, the oral mucosa or the genitals." },
        { typ: "foto", id: "frei-metalle", text: "Metals that can trigger contact allergies, marked in the periodic table, including nickel (Ni), cobalt (Co) and chromium (Cr)." },
        { typ: "merke", text: "The symptoms only appear around 48 to 72 hours after contact. Doctors call this a delayed-type allergy. This makes it hard to recognise." }
      ],
      fragen: [
        ["How do you recognise a nickel allergy on the skin?", ["Redness, swelling, rough, dry and itchy skin", "Blue discolouration around the piercing channel", "Hypergranulation at the piercing channel", "Immediate swelling within minutes"], "Sometimes weeping contact eczema.", "S. 57"],
        ["When do the symptoms of a nickel allergy appear?", ["About 48 to 72 hours after contact", "Within minutes", "After 2 to 6 hours", "Only after 2 to 3 weeks"], "Delayed-type allergy.", "S. 57"],
        ["What do you call an allergy that only appears days after contact?", ["Delayed-type allergy", "Immediate-type allergy", "Cross-allergy", "Pseudo-allergy"], "Typical of nickel.", "S. 57"],
        ["Can the rash spread over the whole body?", ["Yes, in some of those affected", "No, it always stays around the jewellery", "Only with cartilage piercings", "Only in children"], "With strong sensitisation, the allergy can also flare up on other parts of the body (scatter reaction).", "S. 57"],
        ["Case: Three days after switching to steel jewellery, the area itches and weeps. What do you suspect?", ["A nickel allergy (delayed type)", "Hypergranulation", "A normal inflammatory phase", "Perichondritis"], "Symptoms after 48 to 72 hours.", "S. 57"]
      ]
    },
    {
      titel: "PTFE",
      seite: "S. 58–60",
      inhalt: [
        { typ: "text", text: "PTFE (polytetrafluoroethylene) is a fully fluorinated polymer, often referred to colloquially by the trade name Teflon. Other trade names are Dyneon PTFE (formerly Hostaflon) and Gore-Tex for PTFE membranes. PTFE is classed as a thermoplastic but also shows properties of thermosets." },
        { typ: "text", text: "Contrary to popular belief, PTFE is not a by-product of space travel, which only began in 1957. Dr Roy Plunkett discovered it by chance at DuPont in 1938 while looking for a refrigerant for fridges. In 1943 it was first used as corrosion protection, and in 1954 Colette Grégoire came up with the idea of coating pans with it." },
        { typ: "liste", titel: "Special features", punkte: ["very inert: even aqua regia does not attack it, because the bond between carbon and fluorine is very strong", "very low coefficient of friction", "practically nothing sticks to PTFE, which makes it the ideal initial jewellery", "according to the course book, PTFE as initial jewellery allows much shorter healing times than titanium (based on experience, not proven by studies)", "thanks to its high heat resistance, it can be autoclaved without any problem"] },
        { typ: "achtung", text: "Exception: do not use PTFE for tongue piercings (p. 90)." }
      ],
      fragen: [
        ["What does the abbreviation PTFE stand for?", ["Polytetrafluoroethylene", "Polytetrafluoroethane", "Polyethylene terephthalate", "Polytitanium fluoride element"], "Trade name Teflon.", "S. 58"],
        ["Who discovered PTFE?", ["Dr Roy Plunkett at DuPont, 1938", "Colette Grégoire, 1954", "NASA, 1957", "Wilbert Gore, 1969"], "By chance, while looking for a refrigerant.", "S. 59"],
        ["Is PTFE a by-product of space travel?", ["No, it was discovered back in 1938", "Yes, it was developed for rockets in 1957", "Yes, it came with the moon landing in 1969", "No, it was invented for pans in 1954"], "Space travel only began in 1957.", "S. 59"],
        ["Why is PTFE ideal initial jewellery?", ["Practically nothing sticks to PTFE", "It is particularly rigid and keeps its shape", "It releases silver ions that kill germs", "It is heavier than titanium and sits more securely"], "Shorter healing times possible.", "S. 60"],
        ["Can PTFE be autoclaved?", ["Yes, without any problem", "No, it melts at 134 °C", "Only at 121 °C", "Only in a hot-air steriliser"], "High heat resistance.", "S. 60"],
        ["For which piercing do you not use PTFE?", ["Tongue piercing", "Lobe", "Helix", "Navel"], "Note in the tongue data sheet.", "S. 90"]
      ]
    },
    {
      titel: "How to recognise good initial jewellery",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "“Titanium” or “surgical steel” on the label says little. What matters is whether the material meets an implant standard and whether the manufacturer proves this with a certificate." },
        { typ: "tabelle", kopf: ["Material", "Standard", "How this course rates it"], zeilen: [
          ["Titanium Ti6Al4V ELI (G23)", "ASTM F136, ISO 5832-3", "Standard for initial jewellery"],
          ["Commercially pure titanium (unalloyed)", "ASTM F67, ISO 5832-2", "also implant-grade and nickel-free"],
          ["Implant steel 316LVM", "ASTM F138, ISO 5832-1", "contains nickel; not used as initial jewellery at the Academy"],
          ["Gold", "solid, at least 14 carat, nickel- and cadmium-free", "possible according to the APP; not used as initial jewellery at the Academy"],
          ["PTFE", "medical grade", "initial jewellery, not for the tongue"]
        ] },
        { typ: "grafik", id: "gewinde" },
        { typ: "liste", titel: "Check when buying", punkte: [
          "Material certificate (proof of material) from the manufacturer for the respective batch.",
          "Internally threaded or threadless (push-pin): the bar is smooth and does not scrape through the fresh piercing channel.",
          "Mirror-polished surface without scratches, burrs or casting seams; rounded edges.",
          "Autoclavable; sterile-packed or sterilised before use.",
          "Nickel release under EU law: no more than 0.2 µg per cm² per week for jewellery in fresh piercings (module 11)."
        ] },
        { typ: "ergaenzung", text: "The standards come from the minimum standards of the Association of Professional Piercers (APP) and from manufacturer information. The APP also allows implant steel and gold as initial jewellery; the Academy sticks to its stricter rule: G23 titanium or PTFE." }
      ],
      fragen: [
        ["Which standard applies to titanium G23 (Ti6Al4V ELI)?", ["ASTM F136", "ASTM F138", "ASTM F67", "EN 1811"], "Also ISO 5832-3.", "Ergänzung"],
        ["Which standard applies to implant steel 316LVM?", ["ASTM F138", "ASTM F136", "ASTM F67", "ISO 5832-3"], "It contains nickel; not used as initial jewellery at the Academy.", "Ergänzung"],
        ["Why is an internal thread better for initial jewellery?", ["The bar is smooth and does not scrape the channel", "The ball is easier to lose", "It is cheaper to manufacture", "It allows thicker balls"], "An external thread scrapes during insertion.", "Ergänzung"],
        ["What do you ask the manufacturer for when buying?", ["A material certificate", "A CE marking for fashion jewellery", "A photo of the jewellery on a model", "A return guarantee"], "Only a certificate proves the material.", "Ergänzung"],
        ["Which gold meets the APP minimum standard?", ["Solid, at least 14 carat, nickel- and cadmium-free", "Gold-plated, at least 18 carat plating", "Solid, at least 8 carat", "White gold containing nickel"], "Gold plating can wear off.", "Ergänzung"],
        ["What must the surface of initial jewellery be like?", ["Mirror-polished, without scratches or burrs", "Matt brushed so it does not slip", "Slightly roughened for better grip in the tissue", "With a casting seam, which is normal for titanium"], "Rough spots irritate the piercing channel.", "Ergänzung"]
      ]
    },
    {
      titel: "Jewellery types: bars and studs",
      seite: "S. 61–62",
      inhalt: [
        { typ: "video", id: "schmuck-titan", text: "Titanium initial jewellery: straight barbell, curved barbell, labret and ball closure ring.", schleife: true },
        { typ: "text", text: "Different types of jewellery are used for different areas of the body, both as initial jewellery and as second jewellery." },
        { typ: "tabelle", kopf: ["Jewellery", "Description", "Typical use"], zeilen: [
          ["Curved barbell (banana)", "Slightly curved bar with balls", "Navel, eyebrow, Rook"],
          ["Barbell", "Threaded metal bar with screw-on balls (named after the weightlifting bar)", "Tongue, Industrial, nipple"],
          ["Labret stud", "Bar with a disc on one side and a thread for a ball or decorative top", "Labret, Tragus, Conch, Lobe, Nostril"]
        ] },
        { typ: "grafik", id: "staebe" }
      ],
      fragen: [
        ["What is the slightly curved bar with balls called?", ["Curved barbell (banana)", "Circular barbell", "Labret stud", "Threaded ring"], "Mostly for navel, eyebrow, Rook.", "S. 61"],
        ["What is a barbell?", ["A straight threaded metal bar with screw-on balls", "A curved bar with balls", "A stud with a disc", "An open ring with a thread"], "Named after the weightlifting bar.", "S. 61"],
        ["What does a labret stud have at one end?", ["A disc", "A ball with dimples", "A hinge", "A segment"], "A thread at the other end.", "S. 62"],
        ["In which piercings is a labret stud also worn?", ["For example, Tragus and Conch", "Mainly in the Industrial", "Mainly in the navel", "Mainly in the Septum"], "Not only in the Labret.", "S. 62"]
      ]
    },
    {
      titel: "Jewellery types: rings",
      seite: "S. 62–63",
      inhalt: [
        { typ: "tabelle", kopf: ["Jewellery", "How it closes"], zeilen: [
          ["Segment ring", "Two parts: a segment with pins is inserted into the recesses of the ring with pliers, creating a continuous ring."],
          ["Clicker ring", "Two parts permanently joined by a hinge; opens and closes without tools with a “click”."],
          ["Ball closure ring (BCR)", "Also called a captive bead ring. The ball has two small dimples and snaps into the ring opening. For insertion, the ring is carefully spread with ring opening pliers."],
          ["Threaded ring (horseshoe)", "Open ring with a thread at both ends for balls, spikes and other closures."]
        ] },
        { typ: "grafik", id: "ringe" },
        { typ: "text", text: "Other types include surface bars, dermal anchors and nose studs." }
      ],
      fragen: [
        ["How is a segment ring closed?", ["The segment is inserted into the recesses with pliers", "With a hinge and a click", "A ball snaps into the opening", "With threaded balls at both ends"], "It consists of two parts.", "S. 62"],
        ["How does a clicker ring open and close?", ["With a hinge and a “click”, without tools", "With ring opening pliers", "By unscrewing a ball", "By inserting a segment"], "Two permanently joined parts.", "S. 62"],
        ["What is the ring whose ball snaps into the ring opening called?", ["Ball closure ring (BCR)", "Clicker", "Segment ring", "Threaded ring"], "Also called a captive bead ring.", "S. 63"],
        ["What do you use to open a BCR to insert the ball?", ["Ring opening pliers", "The ball grabber", "The holding pliers", "The side cutter"], "Spread it carefully.", "S. 63"],
        ["What is the threaded ring also called?", ["Horseshoe", "Banana", "Clicker", "Captive ring"], "Open ring with a thread at both ends.", "S. 63"]
      ]
    },
    {
      titel: "Extra length of initial jewellery",
      seite: "S. 74",
      inhalt: [
        { typ: "achtung", text: "Initial jewellery must always have an extra length of about 4 mm. The fresh piercing channel can swell and must never be closed off or constricted by balls or discs during the healing phase." },
        { typ: "grafik", id: "ueberlaenge" },
        { typ: "grafik", id: "lobe3d" },
        { typ: "praxis", text: "Measure the area with the caliper and plan the extra length before you take the initial jewellery out of its sterile packaging. After healing, shorter second jewellery can follow." }
      ],
      fragen: [
        ["How much extra length does initial jewellery need?", ["About 4 mm", "About 1 mm", "About 8 mm", "About 1 cm"], "The fresh piercing channel can swell.", "S. 74"],
        ["Why must initial jewellery not be too short?", ["Because otherwise balls or discs would constrict the swollen channel", "Because otherwise it would fall out more easily", "Because short bars release more nickel", "Because otherwise it would be harder to clean"], "Basic rule from ch. 10.", "S. 74"],
        ["What do you use to measure the area for the jewellery?", ["The caliper", "A ruler on the skin", "The receiving tube", "Your eye and the skin marker"], "See tools in module 7.", "S. 68"]
      ]
    }
  ],
  uebung: [
    "Sort the jewellery from your practice set into barbell, curved barbell (banana), labret, BCR and horseshoe.",
    "Explain to a client in two sentences why you do not use 316L as initial jewellery.",
    "Use the caliper to measure the length of an initial jewellery piece and plan the extra length."
  ]
});
