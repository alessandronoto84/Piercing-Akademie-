/* Module 03 – Anatomy, skin and wound healing (new, no chapter of its own in the course book).
   Basics as a draft (to be checked professionally); risk zones from course book pp. 73, 89–92, 104; healing times p. 49; epithelialization p. 50. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 3,
  titel: "Anatomy, skin and wound healing",
  quelle: "Academy note, with parts from the course book (pp. 48–50, 73, 89–92 and 104)",
  entwurf: true,
  ziel: "You understand which tissues a piercing channel passes through, why cartilage heals more slowly than an earlobe and where blood vessels and nerves pose a risk.",
  lektionen: [
    {
      titel: "The structure of the skin",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "video", id: "anatomie-modelle", text: "Ear model and model of the skin layers: epidermis, dermis and subcutis with fatty tissue.", schleife: true },
        { typ: "text", text: "The skin is the largest organ of the human body. It consists of three layers, and a piercing channel passes through all three." },
        { typ: "tabelle", kopf: ["Layer", "Structure", "Relevance for piercing"], zeilen: [
          ["Epidermis (outer skin)", "Outermost, keratinized layer without its own blood vessels", "Protective barrier against germs. It is disinfected before piercing and grows back from the wound edge during healing."],
          ["Dermis (true skin)", "Connective tissue with blood vessels, nerves, hair roots and glands", "This is where the piercing bleeds and hurts. This is where the vessels are that you check for with the flashlight."],
          ["Subcutis (subcutaneous tissue)", "Mainly fatty tissue", "Provides cushioning. In places such as the navel, it determines how long the piercing channel will be."]
        ] },
        { typ: "grafik", id: "haut" },
        { typ: "grafik", id: "haut3d" },
        { typ: "foto", id: "frei-haut-3d", text: "Three-dimensional illustration of the skin layers: epidermis, dermis and hypodermis with hairs, glands and vessels (labeled in English)." },
        { typ: "merke", text: "The more layers and tissues the piercing channel crosses, the longer it takes to heal." }
      ],
      fragen: [
        ["How many layers does the skin consist of?", ["Three: epidermis, dermis, subcutis", "Two: epidermis and dermis", "Four: horny layer, epidermis, dermis, subcutis", "Five, corresponding to the layers of the epidermis"], "Epidermis, dermis, subcutis.", "Entwurf"],
        ["What is the outermost layer of the skin called?", ["Epidermis", "Dermis", "Subcutis", "Perichondrium"], "It is keratinized.", "Entwurf"],
        ["Which skin layer contains blood vessels and nerves?", ["Dermis", "Epidermis", "Only the subcutis", "The horny layer"], "The epidermis has no blood vessels of its own.", "Entwurf"],
        ["What does the subcutis mainly consist of?", ["Fatty tissue", "Cartilage", "Keratinocytes", "Muscle fibers"], "It provides cushioning.", "Entwurf"],
        ["Which layers does a piercing channel pass through?", ["All three layers", "Only the epidermis and dermis", "Only the epidermis", "The dermis and subcutis; the epidermis is pushed aside"], "That is why it heals from the edge.", "Entwurf"],
        ["What often runs together as a bundle in the dermis?", ["Artery, vein and nerve", "Hair root and sweat gland", "Fat lobules and cartilage", "Only capillaries"], "See the 3D skin block.", "Ergänzung"]
      ]
    },
    {
      titel: "Cartilage, soft tissue and mucous membrane",
      seite: "S. 48–49",
      inhalt: [
        { typ: "text", text: "Not every tissue heals equally fast. This explains the big differences in the healing times you give your clients." },
        { typ: "tabelle", kopf: ["Tissue", "Examples", "Healing according to the course book"], zeilen: [
          ["Cartilage", "Auricle, tragus, helix, conch, nostril", "at least 3 months"],
          ["Soft tissue", "Earlobe, eyebrow, navel", "Lobe approx. 2 months, eyebrow approx. 1 month, navel approx. 4 to 6 months"],
          ["Mucous membrane", "Tongue, lip frenulum, intimate area", "Tongue and lip frenulum approx. 1 month, intimate area 2 to 3 months"]
        ] },
        { typ: "grafik", id: "ohr" },
        { typ: "ergaenzung", text: "Cartilage has no blood vessels of its own and is supplied only via the surrounding perichondrium. That is why it heals slowly and is sensitive to irritation." },
        { typ: "achtung", text: "Octenidine, the active ingredient of Octenisept, damages cartilage cells in laboratory studies. You therefore never recommend Octenisept for cartilage piercings. Prontolind (active ingredient polihexanide) is allowed on cartilage." }
      ],
      fragen: [
        ["Why do cartilage piercings heal more slowly than a lobe?", ["Cartilage has no blood vessels of its own", "Cartilage has a particularly large number of nerves", "Cartilage is thinner than the earlobe", "Cartilage does not form granulation tissue"], "It is supplied via the perichondrium.", "Entwurf"],
        ["What healing time does the course book give for cartilage piercings?", ["At least 3 months", "About 4 to 6 weeks", "About 2 months", "1 to 2 months"], "For comparison: lobe approx. 2 months.", "S. 49"],
        ["Which tissue heals fastest?", ["Mucous membrane", "Cartilage", "Soft tissue such as the earlobe", "Fatty tissue at the navel"], "Tongue and lip frenulum approx. 1 month.", "S. 49"],
        ["Which type of tissue does the helix belong to?", ["Cartilage", "Soft tissue", "Mucous membrane", "Fatty tissue"], "The rim of the ear is cartilage.", "S. 78"],
        ["What type of tissue does a tongue piercing go through?", ["Mucous membrane", "Cartilage", "Soft tissue without mucous membrane", "Connective tissue of the skin"], "Mucous membrane heals quickly.", "S. 49"],
        ["Why is octenidine off-limits for cartilage piercings?", ["It damages cartilage cells in laboratory studies", "It discolors the cartilage", "It has no antiseptic effect on cartilage", "It triggers nickel allergies on cartilage"], "Octenidine is in Octenisept; Prontolind contains polihexanide.", "S. 48"],
        ["Which part of the outer ear contains no cartilage?", ["The earlobe", "The tragus", "The anti-tragus", "The conch"], "The earlobe is soft tissue and heals faster.", "S. 49"]
      ]
    },
    {
      titel: "Risk zones on the face",
      seite: "S. 89–92",
      inhalt: [
        { typ: "text", text: "In some places on the face, important vessels and nerves lie just beneath the skin. The course book names these zones explicitly." },
        { typ: "foto", id: "pexels-3861592", text: "In the face, nerves and vessels lie close together, which makes certain zones risk areas." },
        { typ: "tabelle", kopf: ["Piercing", "Risk", "Rule"], zeilen: [
          ["Eyebrow", "On the inner side, nerves and vessels emerge (numbness, bleeding)", "Only pierce in the outer third of the eyebrow"],
          ["Cheek", "Important arteries and nerves, risk of disfigurement; dimples may remain", "Only by professional piercers; refuse as a beginner"],
          ["Bridge", "Too deep: pressure on nerve pathways; too shallow: growing out", "Refuse as a beginner"],
          ["Eskimo", "Tearing or permanent sinking-in of the lip", "Refuse as a beginner; do not pierce into the vermilion"]
        ] },
        { typ: "praxis", text: "Saying no to a risky request is professional. It is better to recommend an experienced colleague to a client than to pierce something you have not safely mastered." }
      ],
      fragen: [
        ["Where may an eyebrow piercing be placed?", ["Only in the outer third", "In the inner third near the nose", "In the middle third above the pupil", "Anywhere, as long as it is pierced shallowly"], "On the inner side, nerves and vessels emerge; an injury can cause numbness of the forehead and upper eyelid.", "S. 89"],
        ["Why should beginners turn down cheek piercings?", ["Important arteries, nerves and the salivary duct run there", "It can only be done with a biopsy punch", "It heals faster than other piercings", "It always requires anesthesia"], "In addition, there is a risk of disfigurement.", "S. 92"],
        ["What can a bridge piercing that is too deep cause?", ["Pressure on nerve pathways", "Growing out", "Perichondritis", "A tear in the lip"], "If too shallow, it grows out.", "S. 91"],
        ["What happens if a bridge is pierced too shallowly?", ["It grows out", "It presses on nerve pathways", "It pierces the nasal bone", "It heals particularly quickly"], "Refuse as a beginner.", "S. 91"],
        ["What can remain permanently after a cheek piercing?", ["Dimples created by the piercing", "Discoloration of the teeth", "Sinking-in of the lip", "Permanent numbness of the tongue"], "Cheek data sheet.", "S. 92"],
        ["Case: A client wants a cheek piercing, and it would be the very first piercing you ever do. What do you do?", ["I refuse and recommend an experienced piercer", "I pierce it with the thinnest cannula", "I pierce it if he signs", "I pierce it freehand so that I stay flexible"], "Refuse as a beginner.", "S. 92"]
      ]
    },
    {
      titel: "Nerves, artery and salivary duct in the face",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "The risk rules from the course book make sense once you know what lies beneath the skin. Two areas are particularly important for piercers: the eyebrow and the cheek." },
        { typ: "grafik", id: "augenbraue" },
        { typ: "liste", titel: "Eyebrow", punkte: [
          "Roughly at the border between the inner and middle third, approximately above the pupil, the supraorbital nerve emerges from a small opening at the upper rim of the eye socket (supraorbital foramen or notch); further in, above the inner corner of the eye, the supratrochlear nerve emerges. Small arteries and veins run with them.",
          "Both are sensory nerves for the forehead and upper eyelid. An injury can cause numbness, tingling or permanent abnormal sensations.",
          "Movement of the forehead, on the other hand, is controlled by a branch of the facial nerve (N. facialis), which runs laterally over the temple. This is another reason why you pierce shallowly and not too deep.",
          "In the outer third there are no major exit points. That is the reason for the course book’s rule."
        ] },
        { typ: "grafik", id: "wange" },
        { typ: "liste", titel: "Cheek", punkte: [
          "The facial nerve (N. facialis) leaves the skull below the ear, runs through the parotid gland and fans out into branches to the forehead, eye, cheek, mouth and chin. It controls facial expression; an injury can paralyze parts of the face.",
          "The duct of the parotid gland (ductus parotideus) runs about two centimeters below the zygomatic arch across the masseter muscle and opens into the mouth opposite the second upper molar.",
          "The facial artery (A. facialis) runs diagonally from the edge of the lower jaw to the corner of the mouth and on to the nose.",
          "A cheek piercing lies right in the middle of this area. That is why you refuse it as a beginner."
        ] },
        { typ: "ergaenzung", text: "On closer inspection, it is mainly sensory nerves that emerge at the inner edge of the eyebrow; an injury is more likely to cause numbness than paralysis. Forehead movement is controlled by a lateral branch of the facial nerve. This does not change the rule: eyebrow only in the outer third." },
        { typ: "merke", text: "The position of nerves and vessels varies from person to person. The drawings show where danger lies, not where it is guaranteed to be safe." }
      ],
      fragen: [
        ["Which sensory nerve emerges at the upper rim of the eye socket, roughly above the pupil?", ["The supraorbital nerve", "The facial nerve", "The trigeminal nerve as a whole at the zygomatic arch", "The optic nerve"], "It emerges through a small opening in the bone and supplies the forehead and upper eyelid. Further in lies the supratrochlear nerve. That is why you only pierce in the outer third.", "Ergänzung"],
        ["What can an injury to the supraorbital nerve cause?", ["Numbness or abnormal sensations in the forehead and upper eyelid", "Paralysis of the facial muscles", "Visual disturbances", "Saliva leaking from the wound"], "It is a sensory nerve.", "Ergänzung"],
        ["What does the facial nerve (N. facialis) control?", ["Facial expression", "Sensation in the facial skin", "The chewing muscles", "Eye movement"], "An injury can paralyze parts of the face.", "Ergänzung"],
        ["Where does the duct of the parotid gland run?", ["About 2 cm below the zygomatic arch, across the cheek", "Directly along the edge of the lower jaw", "Vertically in front of the ear down to the neck", "Below the eye toward the nose"], "It opens opposite the second upper molar.", "Ergänzung"],
        ["Which structures lie in the area of the cheek piercing?", ["Branches of the facial nerve, the salivary duct and the facial artery", "Only fatty tissue and skin", "The supraorbital nerve and the lacrimal gland", "Cartilage and the masseter muscle"], "That is why you refuse the cheek as a beginner.", "S. 92"],
        ["Why do you only pierce the eyebrow in the outer third?", ["Because on the inner side, nerves and vessels emerge from the bone", "Because the outer third has a better blood supply and heals faster", "Because the hair is denser there and hides the jewelry", "Because on the inner side the facial nerve controls facial expression"], "Exit point at the inner rim of the eye socket.", "S. 89"]
      ]
    },
    {
      titel: "Recognizing vessels, avoiding erectile tissue",
      seite: "S. 73, 90, 104",
      inhalt: [
        { typ: "text", text: "With a flashlight with green light, you can, for example, shine through the ear and thus recognize blood vessels. Never pierce through a blood vessel, otherwise the client may bleed heavily." },
        { typ: "foto", id: "pexels-7479547", text: "Superficial blood vessels are often clearly visible and must be avoided when piercing." },
        { typ: "liste", titel: "Other places where you take particular care", punkte: [
          "Tongue: do not injure the frenulum of the tongue (p. 90).",
          "Penis: never pierce through the erectile tissue (corpora cavernosa). There is a risk of serious damage, up to the client bleeding to death (p. 104)."
        ] },
        { typ: "merke", text: "Look first, then mark, then pierce. Checking the spot thoroughly beforehand avoids most complications." }
      ],
      fragen: [
        ["What light does the course book recommend for shining through the ear?", ["Green light", "UV light", "White flash", "Infrared light"], "This lets you recognize blood vessels.", "S. 73"],
        ["Why do you not pierce through a blood vessel?", ["Otherwise the client may bleed heavily", "It makes the cannula blunt", "Blood smudges the marking", "Vessels heal less well than skin"], "Recognize vessels beforehand.", "S. 73"],
        ["What must not be injured during a tongue piercing?", ["The frenulum of the tongue", "The tip of the tongue", "The taste buds at the edge of the tongue", "The lip frenulum"], "Pierce from bottom to top.", "S. 90"],
        ["What can happen when piercing through the erectile tissue of the penis?", ["Serious damage, up to bleeding to death", "Only a longer healing time", "A nickel allergy", "The jewelry growing out"], "Strongly advised against.", "S. 104"]
      ]
    },
    {
      titel: "The phases of wound healing",
      seite: "S. 50",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "A fresh piercing is a wound. It heals in phases that merge into one another." },
        { typ: "schritte", punkte: [
          "Inflammatory or cleansing phase (first few days): redness, slight swelling, warmth and a little clear wound fluid are normal. That is why the initial jewelry needs extra length.",
          "Proliferative or granulation phase: new, delicate, moist tissue (granulation tissue) fills the piercing channel.",
          "Epithelialization (regeneration phase): epithelial cells migrate in from the wound edge and cover the wound; underneath, the granulation tissue matures into dry, firm scar tissue. The wound keeps getting smaller."
        ] },
        { typ: "grafik", id: "wundheilung" },
        { typ: "grafik", id: "lobe3d" },
        { typ: "ergaenzung", text: "Reference values from wound healing science: the inflammatory phase lasts about 1 to 4 days. The granulation phase begins after a few days and lasts until about the third week. Epithelialization and remodelling take weeks to months, and the phases merge smoothly into one another. After about three weeks, a scar has around 20 percent of the tensile strength of healthy skin, and after a few months up to about 80 percent; it never becomes quite as strong as before, and remodelling takes up to a year. A piercing channel is a long, narrow wound that has to heal along its entire length; hence the long healing times in module 10." },
        { typ: "achtung", text: "If epithelialization does not set in, the client should see a doctor after 10 to 14 days." }
      ],
      fragen: [
        ["What is normal in the first few days after piercing?", ["Slight redness, swelling, warmth and a little clear fluid", "Yellow pus and fever", "Redness spreading over the whole outer ear", "Complete absence of pain and no swelling"], "Inflammatory or cleansing phase.", "Entwurf"],
        ["Why does the initial jewelry need extra length?", ["Because the fresh piercing channel can swell", "So that the client can change the jewelry more easily", "So that the piercing channel stretches", "Because short bars grow out faster"], "About 4 mm of extra length.", "S. 74"],
        ["What is the delicate new tissue in the piercing channel called?", ["Granulation tissue", "Epithelial tissue", "Scar tissue", "Cartilage tissue"], "It later becomes scar tissue.", "S. 50"],
        ["What is epithelialization?", ["Cells migrate in from the wound edge and the wound gets smaller", "The inflammatory phase with redness and fluid", "The formation of hypergranulation", "The jewelry growing into the tissue"], "Also called the regeneration phase.", "S. 50"],
        ["When should the client see a doctor if epithelialization does not occur?", ["After 10 to 14 days", "After 3 to 4 days", "After 4 to 6 weeks", "Only after 3 months"], "If epithelialization has not occurred after 10 to 14 days, something is wrong with the healing. This needs to be checked by a doctor.", "S. 50"],
        ["What lines the inside of a healed piercing channel?", ["Epidermis (epithelium)", "Cartilage", "Granulation tissue", "Fatty tissue"], "The epidermis grows into the channel from the edge.", "S. 50"],
        ["Roughly how long does the inflammatory phase last?", ["About 1 to 4 days", "About 2 to 3 weeks", "About 3 months", "Only a few hours"], "After that, the build-up of new tissue predominates.", "Ergänzung"],
        ["At most, how strong does scar tissue become compared with healthy skin?", ["About 80 percent of the original tensile strength", "Twice as strong as healthy skin", "Just as strong after only 2 weeks", "About 20 percent, even after a year"], "Remodelling takes months; that is why the jewelry should only be changed once fully healed.", "Ergänzung"],
        ["Do the phases of wound healing follow one another strictly?", ["No, they merge smoothly into one another", "Yes, each only begins when the previous one ends", "Yes, with a break of about 2 days", "There is only a single phase"], "See the timeline.", "Ergänzung"]
      ]
    },
    {
      titel: "Who heals more slowly",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Smokers, alcoholics and diabetics are among the risk groups: they are more prone to complications during healing." },
        { typ: "foto", id: "pexels-6823478", text: "Conditions such as diabetes can significantly delay wound healing after a piercing." },
        { typ: "text", text: "According to the course book, possible causes of constant re-bleeding are diabetes, connective tissue weakness or a bleeding disorder (hemophilia). In this case, a doctor should be consulted." },
        { typ: "ergaenzung", text: "Prolonged re-bleeding most often occurs when the client takes blood-thinning medication (for example ASA) or has a clotting disorder. Diabetes mainly delays wound healing and increases the risk of infection." },
        { typ: "praxis", text: "The consent form asks about illnesses and medication. Read this information before piercing, not afterwards, and address risk factors openly." }
      ],
      fragen: [
        ["Which groups have a higher risk of healing complications?", ["Smokers, alcoholics and diabetics", "Athletes and people with dry skin", "People with hay fever", "People under 25"], "They are more prone to complications.", "S. 50"],
        ["Which causes of constant re-bleeding does the course book name?", ["Diabetes, connective tissue weakness or a bleeding disorder", "A nickel allergy", "Jewelry that is too short", "Aftercare with saline solution"], "Then see a doctor.", "S. 50"],
        ["Case: A client states that he has diabetes. What is correct?", ["I inform him about the higher healing risk before I pierce", "I only pierce with PTFE, then there is no risk", "Diabetes is irrelevant to piercing", "I double the extra length"], "Diabetics are one of the risk groups.", "S. 50"]
      ]
    }
  ],
  uebung: [
    "Draw a cross-section of the skin with the three layers and a piercing channel.",
    "Sort ten piercings from module 8 by tissue type: cartilage, soft tissue or mucous membrane.",
    "Practice recognizing blood vessels in your own ear with a flashlight."
  ]
});
