/* Module 08 – Types of piercing. Source: course book ch. 10 (pp. 74–110). Data sheets as in the book; intimate area without images.
   For each data sheet, werkzeuge/fragen-erzeugen.js also generates questions on initial jewelry, cannula and clamp (fragen-generiert.js). */
window.KURS = window.KURS || { module: [] };
(function () {
  function db(name, beschreibung, ersteinsatz, kanuele, klemme, hinweis, seite) {
    return { typ: "datenblatt", name: name, beschreibung: beschreibung, ersteinsatz: ersteinsatz, kanuele: kanuele, klemme: klemme, hinweis: hinweis || "", seite: seite };
  }
  var NICHT = "DO NOT PERFORM. Risk of serious harm.";
  KURS.module.push({
    nr: 8,
    titel: "Types of piercing",
    quelle: "Course book ch. 10, pp. 74–110",
    ziel: "For every piercing you know the placement, initial jewelry, cannula and clamp, and you know which piercings you turn down as a beginner or never perform at all.",
    lektionen: [
      {
        titel: "How to read a data sheet",
        seite: "S. 74",
        inhalt: [
          { typ: "text", text: "Every piercing has a data sheet with four details: where it is placed, which initial jewelry fits, which cannula size (or punch) you use and what you hold the area with (clamp, receiving tube or freehand)." },
        { typ: "foto", id: "pexels-7651554", text: "Notes and checklists on a clipboard record the key details of a piercing." },
          { typ: "achtung", text: "Initial jewelry always needs an extra length of about 4 mm, because the fresh piercing channel can swell. During healing it must never be constricted by balls or discs." },
          { typ: "merke", text: "In the following lessons you learn each piercing individually. After each lesson, the course tests you on the data sheets: initial jewelry, cannula and clamp." }
        ],
        fragen: [
          ["What information does every data sheet contain?", ["Placement, initial jewelry, cannula and clamp", "Placement, price and healing time", "Initial jewelry, aftercare product and price", "Only cannula and clamp"], "All data sheets are structured this way.", "S. 74"],
          ["How much extra length does initial jewelry need?", ["About 4 mm", "About 2 mm", "About 6 mm", "About 1 cm"], "The fresh piercing channel can swell.", "S. 74"],
          ["What does “freehand” mean in the data sheet?", ["You pierce without a clamp or receiving tube", "The client holds the area themselves", "You pierce without gloves", "You pierce without marking"], "Instead of a clamp or receiving tube.", "S. 74–110"]
        ]
      },
      {
        titel: "Lobe and Upper Lobe",
        seite: "S. 74–75",
        inhalt: [
          { typ: "grafik", id: "ohr" },
          db("Lobe", "Earlobe. Can be punched into a tunnel or stretched: using lubricating gel and a taper or spiral stretcher, stretch the healed piercing channel by 1 to 2 mm per month.", "labret", "18G", "Snaptile, gauze clamp", "Academy standard: 18G. Only if a tunnel is wanted: 14G or biopsy punch (course book: 18G, 16G, 14G, punch).", "S. 74"),
          db("Upper Lobe", "Through the upper earlobe. Alongside the conventional ear piercing, several Upper Lobes are often worn in a row.", "labret", "18G, 16G", "Snaptile, gauze clamp", "", "S. 75")
        ],
        fragen: [
          ["How do you stretch a healed Lobe?", ["With lubricating gel and a taper, by 1 to 2 mm per month", "With a taper, by 1 to 2 mm per week", "With 14G straight after piercing", "By 5 mm per month"], "Or punch it into a tunnel.", "S. 74"],
          ["Where is the Upper Lobe placed?", ["In the upper earlobe", "At the transition to the Helix", "In the Anti-Tragus", "In the cartilage above the earlobe"], "Often several in a row.", "S. 75"]
        ]
      },
      {
        titel: "Tragus and Anti-Tragus",
        seite: "S. 76–77",
        inhalt: [
          db("Tragus", "Cartilage projection at the entrance to the ear canal.", "labret, BCR, barbell", "biopsy punch, 18G, 16G", "tragus forceps, receiving tube", "", "S. 76"),
          db("Anti-Tragus", "The cartilage projection opposite the Tragus.", "horseshoe (circular barbell), curved barbell (banana), BCR", "18G", "receiving tube", "", "S. 77")
        ],
        fragen: [
          ["What is the Tragus?", ["The cartilage projection at the ear canal entrance", "The cartilage projection opposite the ear canal entrance", "The inner concha", "The root of the helix"], "Tragus data sheet.", "S. 76"],
          ["Where is the Anti-Tragus?", ["Opposite the Tragus, above the earlobe", "On the upper rim of the ear", "In front of the ear canal entrance", "In the inner concha"], "Also a cartilage projection.", "S. 77"]
        ]
      },
      {
        titel: "Helix, Industrial and allergy piercing",
        seite: "S. 78, 83–84",
        inhalt: [
          db("Helix", "Possible anywhere along the rim of the ear, from just above the earlobe up and around the curve of the outer ear.", "labret, BCR, horseshoe (circular barbell)", "18G", "Snaptile, gauze clamp, freehand", "", "S. 78"),
          db("Industrial", "Also called Scaffold. The upper rim of the outer ear is pierced close to the head and opposite on the outer rim, so that a long barbell runs through both piercing channels. Anatomically, these are two Helix piercings.", "barbell 38 mm", "16G", "freehand, receiving tube", "", "S. 84"),
          db("Allergy piercing", "At the top center through the curve of the Helix, at the “antihistamine” acupuncture point. The permanent stimulation is said to relieve allergies.", "horseshoe (circular barbell), curved barbell (banana), BCR", "18G", "freehand, receiving tube", "Do not make health claims or use them in advertising.", "S. 83")
        ],
        fragen: [
          ["Where can a Helix be pierced?", ["Anywhere along the rim of the ear", "Only on the upper rim of the ear", "Only in the antihelix", "Only at the root of the helix"], "From above the earlobe around the curve.", "S. 78"],
          ["Anatomically, how many Helix piercings is an Industrial?", ["Two", "One", "Three", "One Helix and one Rook"], "A long barbell runs through both.", "S. 84"],
        ]
      },
      {
        titel: "Conch and Snug",
        seite: "S. 79, 82",
        inhalt: [
          db("Conch", "Through the inner or outer concha.", "labret, barbell, BCR", "18G, 16G, biopsy punch", "Snaptile, gauze clamp", "", "S. 79"),
          db("Snug", "Through the ear cartilage in the inner cartilage ridge, parallel to the rim of the ear. Only possible if this area of the ear is sufficiently pronounced.", "curved barbell (banana), barbell, BCR, horseshoe (circular barbell)", "18G", "freehand, receiving tube", "", "S. 82")
        ],
        fragen: [
          ["Where is the Conch placed?", ["In the inner or outer concha", "In the root of the helix", "In the cartilage ridge of the antihelix", "At the ear canal entrance"], "Conch data sheet.", "S. 79"],
          ["When is a Snug possible?", ["Only if this area of the ear is sufficiently pronounced", "On every ear", "Only for clients without a Helix piercing", "Only with a biopsy punch"], "Snug data sheet.", "S. 82"]
        ]
      },
      {
        titel: "Rook and Daith",
        seite: "S. 80–81",
        inhalt: [
          db("Rook", "Vertically in the antihelix, the cartilage ridge that borders the cavum conchae at the back.", "horseshoe (circular barbell), curved barbell (banana), BCR", "18G", "receiving tube", "", "S. 80"),
          db("Daith", "Through the root of the helix (crus helicis), the cartilage fold directly above the ear canal. There is no scientific evidence that it helps against migraine.", "curved barbell (banana), BCR", "18G (bend if necessary)", "receiving tube", "Do not make health claims or use them in advertising.", "S. 81")
        ],
        fragen: [
          ["Where is the Rook placed?", ["Vertically in the antihelix", "Horizontally in the root of the helix", "In the Tragus", "In the inner Conch"], "Cartilage ridge around the cavum conchae.", "S. 80"],
          ["Why are Rook and Daith pierced with a receiving tube?", ["No clamp fits inside the ear there", "Because they bleed particularly heavily", "Because they are pierced with a punch", "Because they need especially thick cannulas"], "The tube protects the surrounding tissue.", "S. 68"],
          ["Are you allowed to advertise the Daith as a remedy for migraine?", ["No", "Yes, with “may help”", "Yes, if studies are cited", "Only verbally, not in writing"], "No health claims.", "S. 81"]
        ]
      },
      {
        titel: "Nose: Nostril and Septum",
        seite: "S. 85, 88",
        inhalt: [
          db("Nose (Nostril)", "Through the side of the nose (nasal ala). First practiced about 4000 years ago in the Middle East; in India preferably worn on the left side of the nose.", "labret", "18G", "gauze clamp, Snaptile", "", "S. 85"),
          db("Septum", "Through the connective tissue below the cartilage of the nasal septum (Latin septum nasi). One of the oldest piercings. Can be stretched for larger jewelry.", "horseshoe (circular barbell)", "18G, 16G", "septum forceps", "", "S. 88")
        ],
        fragen: [
          ["What is the Nostril pierced through?", ["The side of the nose (nasal ala)", "The nasal septum", "The bridge of the nose", "The tip of the nose"], "Nostril data sheet.", "S. 85"],
          ["Through which tissue is the Septum pierced?", ["The connective tissue below the septal cartilage", "The septal cartilage", "The nasal bone", "The side of the nose"], "Can be stretched for larger jewelry.", "S. 88"]
        ]
      },
      {
        titel: "Eyebrow and Bridge",
        seite: "S. 89, 91",
        inhalt: [
          { typ: "grafik", id: "augenbraue" },
          db("Eyebrow", "Usually vertically through the eyebrow, piercing channel about 8 mm.", "curved barbell (banana), horseshoe (circular barbell)", "18G", "Snaptile, gauze clamp", "Only pierce in the outer third of the eyebrow: nerves and vessels emerge on the inner side (see module 3).", "S. 89"),
          db("Bridge", "Also called Erl. At the top of the bridge of the nose, horizontally on the nasal bone between the eyes. If it is too deep, it can press on nerve pathways; if it is too shallow, it grows out.", "barbell, curved barbell (banana)", "18G", "Snaptile, gauze clamp", "Turn it down if you are a beginner.", "S. 91")
        ],
        fragen: [
          ["About how long is the piercing channel in an eyebrow piercing?", ["8 mm", "4 mm", "12 mm", "2 cm"], "Eyebrow data sheet.", "S. 89"],
          ["Where can the eyebrow piercing be placed?", ["Only in the outer third", "In the inner third", "In the middle third", "Anywhere, if pierced shallowly"], "Nerves and vessels emerge on the inner side; injuring them can cause numbness of the forehead and upper eyelid.", "S. 89"],
          ["As a beginner, how do you respond to a request for a Bridge?", ["I turn it down", "I pierce it especially shallowly", "I pierce it especially deep", "I pierce it with 14G"], "Turn it down as a beginner.", "S. 91"]
        ]
      },
      {
        titel: "Lip: Labret, Medusa and Eskimo",
        seite: "S. 86, 93",
        inhalt: [
          db("Labret", "Strictly speaking, a piercing of the lower lip; on the upper lip it is called Medusa (centered in the philtrum, the groove below the nose) or Madonna or Monroe (offset to the side). More than 3 mm away from the vermilion border.", "labret, horseshoe (circular barbell)", "18G", "Snaptile, gauze clamp", "", "S. 86"),
          db("Eskimo", "Vertically through the lip to below the lip. If pierced incorrectly, the lip can tear or sink in permanently.", "barbell, curved barbell (banana)", "18G", "Snaptile, gauze clamp, freehand", "Turn it down as a beginner. Do not pierce into the vermilion.", "S. 93")
        ],
        fragen: [
          ["How far from the vermilion border is a Labret piercing placed?", ["More than 3 mm", "Exactly 1 mm", "No distance, right on the vermilion", "More than 1 cm"], "Labret data sheet.", "S. 86"],
          ["What is a piercing centered in the upper lip, in the philtrum, called?", ["Medusa", "Monroe", "Smiley", "Eskimo"], "Strictly speaking, a Labret is in the lower lip.", "S. 86"],
          ["What can an incorrectly pierced Eskimo cause?", ["Tearing or permanent sinking of the lip", "Pressure on nerve pathways of the forehead", "Damage to the tongue frenulum", "Perichondritis"], "Turn it down as a beginner.", "S. 93"]
        ]
      },
      {
        titel: "Lip frenulum and tongue",
        seite: "S. 87, 90",
        inhalt: [
          db("Lip frenulum (Smiley)", "Through the frenulum that connects the middle of the upper lip to the gum; only visible when smiling.", "horseshoe (circular barbell), BCR", "18G", "septum forceps, freehand", "", "S. 87"),
          db("Tongue", "Vertically in the middle of the tongue. Do not injure the tongue frenulum, pierce from below upwards, cool with ice cubes immediately (recommend ice cubes made from chamomile tea), do not use PTFE, point out possible dental damage.", "20 mm barbell (shorter after 10 days if needed)", "16G", "Snaptile, gauze clamp, tongue forceps", "", "S. 90")
        ],
        fragen: [
          ["Why is the lip frenulum piercing also called Smiley?", ["Because it is only visible when smiling", "Because it forms a smile", "Because it goes through the corners of the mouth", "Because it is a labret with a smiley ball"], "Through the frenulum.", "S. 87"],
          ["In which direction is the tongue pierced?", ["From below upwards", "From above downwards", "Sideways from the left", "Diagonally from the front"], "Tongue data sheet.", "S. 90"],
          ["What does the client use to cool the area after a tongue piercing?", ["Ice cubes, ideally made from chamomile tea", "Cold spray", "Cold milk", "Lidocaine spray"], "Immediately after piercing.", "S. 90"],
          ["When can the barbell in a tongue piercing be shortened?", ["After about 10 days", "After 2 days", "After 3 months", "Never, the length stays the same"], "Initial jewelry 20 mm barbell.", "S. 90"]
        ]
      },
      {
        titel: "Cheek",
        seite: "S. 92",
        inhalt: [
          { typ: "grafik", id: "wange" },
          db("Cheek", "Cheek piercing, often at the site of a dimple. Important arteries and nerves run here; there is a risk of disfigurement, and dimples created by the piercing can remain permanently.", "barbell, labret", "18G", "Snaptile, gauze clamp", "Only by professional piercers. Turn it down as a beginner.", "S. 92")
        ],
        fragen: [
          ["Why do beginners turn down the Cheek?", ["Important arteries and nerves run there", "Because it can only be done with a punch", "Because it is pierced with 14G", "Because there is no clamp for it"], "Risk of disfigurement.", "S. 92"],
          ["What can remain permanently after a Cheek?", ["Dimples created by the piercing", "Sinking of the lip", "Numbness of the tongue", "The labret growing out"], "Cheek data sheet.", "S. 92"]
        ]
      },
      {
        titel: "Navel",
        seite: "S. 94",
        inhalt: [
          db("Navel", "Vertically above or below the navel, piercing channel about 1 cm long. Pierce with the client lying down: this makes the work easier and prevents circulatory problems. Cover with a sterile bandage and recommend bandages for the next 3 days.", "curved barbell (banana), BCR", "16G", "Snaptile, freehand", "", "S. 94")
        ],
        fragen: [
          ["How is a navel piercing done?", ["Lying down, to prevent circulatory problems", "Standing, so the navel is positioned correctly", "Sitting", "Standing, then checked lying down"], "It also makes the work easier.", "S. 94"],
          ["About how long is the piercing channel in a navel piercing?", ["1 cm", "5 mm", "2 cm", "3 cm"], "Navel data sheet.", "S. 94"],
          ["How long should the client wear a bandage?", ["For the next 3 days", "Only on the first day", "2 weeks", "Until completely healed"], "Sterile bandage.", "S. 94"]
        ]
      },
      {
        titel: "Nipple",
        seite: "S. 95",
        inhalt: [
          db("Nipple", "Through the nipple or areola, usually horizontally or vertically, in women and men. Several piercings one above the other are possible. For marking, the upper body must be completely uncovered; cover with a sterile bandage and recommend bandages for 3 days.", "barbell, BCR", "16G", "Snaptile, gauze clamp", "", "S. 95")
        ],
        fragen: [
          ["What has to happen before marking a nipple piercing?", ["The upper body must be completely uncovered", "Only the one side is uncovered", "The client lies down", "The nipple is cooled beforehand"], "Nipple data sheet.", "S. 95"],
          ["According to the course book, how long does a nipple piercing take to heal?", ["3 to 12 months", "1 to 2 months", "4 to 6 months", "At least 3 months, like cartilage"], "See healing times.", "S. 49"]
        ]
      },
      {
        titel: "Surface",
        seite: "S. 96",
        inhalt: [
          db("Surface", "Surface piercing in areas that are neither convex nor concave; entry and exit points lie on one plane. It is rejected and grows out more often, and healing takes considerably longer. Suitable jewelry and precise placement reduce the risk.", "surface bar, curved barbell (banana), Dermal Anchor", "16G, 18G, biopsy punch", "freehand, Snaptile, gauze clamp", "", "S. 96")
        ],
        fragen: [
          ["What is typical of surface piercings?", ["They are rejected more often and take much longer to heal", "They heal faster than a Lobe", "They are always on curved areas", "They are only pierced with a receiving tube"], "Entry and exit on one plane.", "S. 96"],
          ["What reduces the risk of a surface piercing growing out?", ["Suitable jewelry and precise placement", "A particularly thin ring", "An early change of jewelry", "A particularly short bar"], "Surface data sheet.", "S. 96"]
        ]
      },
      {
        titel: "Male intimate area (adults only)",
        seite: "S. 97–102",
        inhalt: [
          { typ: "text", text: "This lesson covers the male intimate piercings from the course book, without images." },
          db("Frenulum", "Slightly below the frenulum of the foreskin, so the frenulum does not tear. Usually heals in four to eight weeks; in circumcised men only possible if there is enough frenulum left.", "curved barbell (banana), barbell", "16G, 18G", "receiving tube, freehand, gauze clamp", "", "S. 97"),
          db("Prince Albert", "From the urethra to the underside of the penis. First pull the needle back slightly into the cannula, position correctly, then pierce by pushing the needle forward. The plastic cannula must not kink.", "BCR", "14G", "freehand", "Academy standard: 14G cannula (course book: 14G or 16G).", "S. 98"),
          db("Dydoe", "Through the rim of the glans, mostly in circumcised men.", "curved barbell (banana), barbell", "16G, 18G", "freehand", "", "S. 99"),
          db("Pubic", "At the base of the penis, usually horizontally, exactly at the transition. Surface piercing, tends to grow out; remove pubic hair beforehand.", "BCR, barbell, surface bar, curved barbell (banana)", "16G, 18G", "freehand, gauze clamp", "", "S. 100"),
          db("Hafada", "Also called scrotal. In the skin of the scrotum, not very deep; low risk of growing out.", "BCR, curved barbell (banana)", "16G, 18G", "freehand, Snaptile, gauze clamp", "", "S. 101"),
          db("Guiche", "Through the raphe (perineum), across the seam; also possible in women.", "BCR, barbell", "16G, 18G", "freehand", "", "S. 102")
        ],
        fragen: [
          ["What do you need to pay particular attention to with a Prince Albert?", ["The plastic cannula must not kink when pushed forward", "It is pierced with 18G and a clamp", "It is pierced with a barbell", "It is pierced through the erectile tissue"], "Otherwise the needle can pierce through the cannula.", "S. 98"],
          ["What needs to be done before a Pubic piercing?", ["Remove pubic hair from the area", "Cool the area with cold spray", "Apply lidocaine", "Prepare a biopsy punch"], "Surface piercing at the base of the penis.", "S. 100"],
          ["How quickly does a Frenulum piercing usually heal?", ["In four to eight weeks", "In 3 to 6 months", "In one week", "In 6 to 12 months"], "Frenulum data sheet.", "S. 97"]
        ]
      },
      {
        titel: "Female intimate area (adults only)",
        seite: "S. 105–107",
        inhalt: [
          { typ: "text", text: "This lesson covers the female intimate piercings from the course book, without images." },
          db("Christina", "Vertically into the fold where the outer labia meet at the top, exiting at the mons pubis. Not anatomically possible in every woman.", "curved barbell (banana), barbell, BCR", "16G, 18G", "freehand, Snaptile, gauze clamp", "", "S. 105"),
          db("Clitoral hood", "Through the clitoral hood, vertically or horizontally; the clitoris itself is not pierced.", "BCR, curved barbell (banana), barbell", "16G, 18G", "freehand", "", "S. 106"),
          db("Labia", "In the inner or outer labia.", "BCR", "16G, 18G", "freehand, Snaptile, gauze clamp", "", "S. 107")
        ],
        fragen: [
          ["What is true of the Christina piercing?", ["It is not anatomically possible in every woman", "It is pierced through the clitoral hood", "It is marked “Do not perform”", "It heals in 2 weeks"], "Christina data sheet.", "S. 105"],
          ["Is the clitoris pierced in a clitoral hood piercing?", ["No, only the hood", "Yes, vertically", "Yes, horizontally", "Yes, if requested"], "Only the hood.", "S. 106"]
        ]
      },
      {
        titel: "Piercings you do not perform",
        seite: "S. 103–110",
        inhalt: [
          { typ: "text", text: "Some intimate piercings are explicitly marked “Do not perform” in the course book. You never pierce them, not even at the client’s explicit request." },
          db("Ampallang", "Horizontally through the glans.", "–", "–", "–", NICHT, "S. 103"),
          db("Apadravya", "Vertically through the glans.", "–", "–", "–", NICHT + " Never pierce through the erectile tissue: there is a risk of serious damage, even bleeding to death.", "S. 104"),
          db("Clitoris (direct)", "Through the clitoris itself.", "–", "–", "–", "DO NOT PERFORM. Risk of damage to the libido.", "S. 108"),
          db("Princess Albertina", "Vertically from the urethral opening to the vaginal opening.", "–", "–", "–", "DO NOT PERFORM. Risk of harm.", "S. 109"),
          db("Fourchette", "Vertically at the lower point where the inner labia meet; highly dependent on anatomy.", "–", "–", "–", "DO NOT PERFORM. Risk of harm.", "S. 110")
        ],
        fragen: [
          ["Which piercing do you never perform?", ["Ampallang", "Christina", "Frenulum", "Hafada"], "Risk of serious harm.", "S. 103"],
          ["Why do you never pierce through the erectile tissue of the penis?", ["There is a risk of serious damage, even bleeding to death", "It only heals more slowly", "It causes a nickel allergy", "It grows out immediately"], "Note on the Apadravya.", "S. 104"],
          ["According to the course book, what is the risk of piercing the clitoris directly?", ["Damage to the libido", "Growing out", "Perichondritis", "Only longer healing"], "Do not perform.", "S. 108"],
          ["Case: A client offers you a lot of money for an Ampallang. What do you do?", ["I turn it down", "I pierce it under anesthetic", "I pierce it if he signs a liability waiver", "I pierce it with a thinner cannula"], "Do not perform, not even on request.", "S. 103"]
        ]
      }
    ],
    uebung: [
      "Write down the data sheets for Lobe, Helix, Tragus and Nostril from memory.",
      "Practice on the silicone ear: mark the area, position the clamp, place the cannula (without piercing).",
      "List all piercings you turn down as a beginner and all piercings you never perform."
    ]
  });
})();
