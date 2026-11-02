/* Practice lab: exercises on the silicone practice model with self-check.
   Basis: procedure from module 09 (steps 1–26, course book pp. 111–112), checklists from module 05 and the exercise from module 08
   (“Practice on the silicone ear: mark the area, apply the clamp, position the cannula (without piercing)”).
   No piercing is ever done here: that is reserved for the practice day under supervision.
   Format: { id, titel, modul (reference), material: [...], schritte: [...], kontrolle: [...] } */
window.KURS = window.KURS || { module: [] };
window.KURS.labor = {
  einleitung: "Here you practice the hand movements you will need on the practice day. Part 1 consists of dry exercises without piercing: on the silicone practice model, on paper and at the workstation. In part 2, clips show you how piercing is done; with the Complete package, you pierce the silicone ear yourself there using the practice set. Every exercise has a self-check. Only tick off what you have really managed. Bring the completed practice template with you to the practice day.",
  sicherheit: [
    "No piercing is done in the dry exercises. You only pierce the silicone ear with the practice set from the Complete package. You never pierce people or animals; you learn that on the practice day under supervision.",
    "Only use cannulas as a dry exercise with the protective cap on. Used or uncapped cannulas go straight into the sharps container.",
    "The online course and the practice lab do not replace hands-on supervision."
  ],
  material: "Silicone practice model (e.g. a silicone ear or practice skin from a specialist supplier of piercing and tattoo supplies; a practice set is included in the Complete package), single-use skin marker, ruler with millimeter markings, clamp, cannula with protective cap, disposable underpad, gloves, the practice template to print out.",
  aufgaben: [
    {
      id: "arbeitsplatz",
      titel: "Setting up the workstation",
      modul: 5,
      material: ["Disposable underpad", "Everything on the checklist “Workstation before every client” (whatever you have; otherwise use labeled placeholders)"],
      schritte: [
        "Wash your hands and dry them completely; remove jewelry from hands and forearms.",
        "Cover the work surface with the disposable underpad.",
        "Lay out everything on the checklist “Workstation before every client” without looking at the list.",
        "Practice checking each sterile goods package: packaging undamaged, indicator changed color, storage period not exceeded.",
        "Take a photo from above and compare it with the checklist. Repeat three times."
      ],
      kontrolle: [
        "On the third set-up, nothing from the checklist was missing.",
        "The sharps container is within reach.",
        "Nothing is lying on an unprotected surface.",
        "For every sterile goods package, I can say what I checked."
      ]
    },
    {
      id: "haende",
      titel: "Preparing your hands and putting on gloves",
      modul: 5,
      material: ["Hand disinfectant", "Disposable gloves in your size"],
      schritte: [
        "Nails short, no nail polish, no jewelry on hands and forearms.",
        "Disinfect your hands as described in module 05; the contact time is stated on the disinfectant.",
        "Wait until your hands are completely dry.",
        "Put on the gloves without touching the outside with your bare hand more than necessary.",
        "Take off the gloves without the outside touching your skin, and dispose of them. Then disinfect your hands."
      ],
      kontrolle: [
        "My hands were dry before I put on the gloves.",
        "I read the contact time on the label and kept to it.",
        "When taking them off, the outside did not touch my skin.",
        "I can explain why changing gloves without hand disinfection is not enough."
      ]
    },
    {
      id: "anzeichnen-papier",
      titel: "Marking on paper",
      modul: 9,
      material: ["Practice template (page 1)", "Single-use skin marker or fine pen", "Ruler"],
      schritte: [
        "Print the practice template at original size (100%, not “fit to page”). The control line must measure exactly 100 mm.",
        "For each row, measure the given pair of points and copy it onto the line to the right.",
        "In the symmetry exercise, mirror the points on the left onto the right side: same distance from the center line, same height.",
        "Only once everything is drawn, measure and note the deviation in millimeters."
      ],
      kontrolle: [
        "My points are small and clear, not a big blot.",
        "For all pairs, I deviate by no more than 1 mm.",
        "In the symmetry exercise, all mirrored points are no more than 1 mm off.",
        "I have noted the deviations on the template."
      ]
    },
    {
      id: "anzeichnen-modell",
      titel: "Marking on the practice model",
      modul: 8,
      material: ["Silicone practice model", "Single-use skin marker", "Data sheets from module 08"],
      schritte: [
        "Read the data sheets for lobe, helix and tragus in module 08.",
        "Mark the entry and exit points for each of these piercings on the model (procedure step 9).",
        "For lobes on both sides: mark the left and right earlobes at the same height and check from the front, for example with a photo.",
        "Have someone look at the marking as if they were the client (step 10), and correct it if needed."
      ],
      kontrolle: [
        "Every marking matches the data sheet in module 08.",
        "For lobes on both sides, both points are at the same height in the photo from the front.",
        "I showed the marking and explained why it is placed there.",
        "I know what to do if the client doesn’t like the marking."
      ]
    },
    {
      id: "klemme-kanuele",
      titel: "Applying the clamp and positioning the cannula, without piercing",
      modul: 8,
      material: ["Silicone practice model with the marking from exercise 4", "Clamp or receiving tube", "Cannula with protective cap on"],
      schritte: [
        "Put on gloves (exercise 2).",
        "Apply the clamp at the marking (procedure step 11) so that the entry and exit points lie in the opening.",
        "Position the cannula with its protective cap at the entry point, pointing toward the exit point, from the visible side (step 12). Do not pierce.",
        "Say out loud what would come next: steps 13 to 19 from module 09.",
        "Release the clamp, put down the capped cannula. Repeat five times, also at other locations."
      ],
      kontrolle: [
        "Each time, the markings lay in the opening of the clamp.",
        "The cannula pointed straight at the exit point from the visible side.",
        "The protective cap stayed on the cannula the whole time.",
        "I was able to say steps 13 to 19 in the correct order."
      ]
    },
    {
      id: "ablauf",
      titel: "The whole procedure from memory",
      modul: 9,
      material: ["Practice template (page 2) or a blank sheet"],
      schritte: [
        "Write down all 26 steps of the procedure from module 09 from memory.",
        "Compare with module 09 and add anything missing in red.",
        "Repeat the next day until everything is correct without red.",
        "Explain the aftercare instructions (steps 24 and 25) out loud to another person as if they were your client."
      ],
      kontrolle: [
        "All 26 steps are correct, in the right order.",
        "I can explain why the jewelry is pushed, not pulled, through the piercing channel (step 16).",
        "I explained the aftercare instructions without a cheat sheet."
      ]
    },
    {
      id: "notfall",
      titel: "Role-playing an emergency",
      modul: 9,
      material: ["Checklist “After a needlestick injury”", "Module 09, lesson “Circulatory problems and emergencies”"],
      schritte: [
        "Role-play with a second person: during the preparation the “client” turns pale and says they feel dizzy. What do you do, step by step?",
        "Afterwards, compare with the lesson “Circulatory problems and emergencies” in module 09.",
        "Recite the checklist “After a needlestick injury” from memory and compare."
      ],
      kontrolle: [
        "I reacted correctly without looking anything up.",
        "I know where the first aid kit and telephone are in my practice room, and I know the emergency number 112.",
        "I was able to recite the checklist for after a needlestick injury in full."
      ]
    }
  ]
};

/* Piercing exercises on the silicone ear: you only pierce yourself with the Complete package (the Academy’s practice set).
   Everyone else sees the same exercises as “watch only”: clip and procedure, without self-check.
   Piercing is done exclusively into silicone. Procedure according to course book pp. 111–112 (steps 9–19), values from the data sheets (module 08).
   clip: id of a clip in inhalte/clips.js. If the clip is still missing, participants see nothing; in review mode a notice appears.
   Shot list for the clips: CLIPS-PRAXISLABOR.md in the main folder. */
window.KURS.labor.stich = {
  pakete: ["komplett"],
  einleitung: "With your practice set, you now pierce yourself: into the silicone ear, following the procedure from module 09 and the data sheets from module 08. Watch the clip first, then practice. Bring your pierced silicone ear and the practice log with you to the practice day: we’ll look at your piercing channels together there.",
  zuschauen: "In these clips you see how piercing is done: on the silicone ear, step by step, following the procedure from module 09 and the data sheets from module 08. Watch closely and say the steps along with the clip. You learn to pierce yourself on the practice day under supervision; with the Complete package, you practice at home beforehand with the practice set.",
  sicherheit: [
    "Only pierce the silicone ear. Never yourself, other people or animals, not even “just to try it out”.",
    "Never put cannulas back into the protective cap. The steel needle goes straight into the sharps container after you pull it out; the full container is closed tightly and disposed of with regular trash.",
    "Work with gloves on a disposable underpad, without distractions and out of reach of children. Keep cannulas and the sharps container locked away.",
    "If you do prick yourself, the checklist “After a needlestick injury” from module 05 applies."
  ],
  set: ["Silicone ear", "IV cannulas 18G and 16G", "Small sharps container", "Clamp (Snaptile or gauze clamp)", "Single-use skin marker", "Disposable gloves and disposable underpad", "Practice jewelry: labret, ball closure ring (BCR), barbell 38 mm", "Scissors for the plastic sheath"],
  aufgaben: [
    {
      id: "stich-kanuele",
      titel: "Handling the cannula safely",
      modul: 7,
      clip: "labor-kanuele",
      clipText: "Take the cannula out of the packaging, remove the protective cap, put the steel needle straight into the sharps container after piercing.",
      material: ["18G cannula", "Sharps container", "Gloves"],
      schritte: [
        "Place the sharps container so that you can reach it with your working hand without changing your grip.",
        "Take the cannula out of the packaging without touching the needle. Pull the protective cap straight off and put it aside.",
        "Hold the cannula by the hub and pierce the silicone (anywhere, just to practice the movement).",
        "Pull the steel needle out by the hub; the plastic sheath stays in the silicone. Needle straight into the sharps container.",
        "Repeat three times until the movement from packaging to disposal flows smoothly."
      ],
      kontrolle: [
        "I did not put the protective cap back on a single time.",
        "After I pulled it out, the needle went straight into the sharps container, never onto the table.",
        "The plastic sheath stayed in the silicone every time."
      ]
    },
    {
      id: "stich-lobe",
      titel: "Piercing a lobe and inserting a labret",
      modul: 9,
      clip: "labor-lobe",
      clipText: "Lobe on the silicone ear: mark, clamp, pierce with 18G, needle out, trim the sheath, push the labret through, screw on the ball.",
      material: ["Silicone ear", "18G cannula", "Clamp", "Skin marker", "Scissors", "Labret", "Holding pliers"],
      schritte: [
        "Mark the entry and exit points on the earlobe (step 9) and check the marking (step 10).",
        "Apply the clamp, with the marking in the window (step 11).",
        "Pierce swiftly into the visible side, i.e. from the front, where the ball will later sit (step 12).",
        "Pull out the steel needle and dispose of it; the plastic sheath stays in the piercing channel (step 13).",
        "Trim the sheath slightly with the scissors and insert the labret into it (steps 14 and 15).",
        "Push the labret through the piercing channel, don’t pull (step 16). Carefully pull off the tube (step 17).",
        "Pick up the ball, hold the jewelry with the holding pliers and screw the ball on firmly (steps 18 and 19).",
        "Repeat three times at different points on the earlobe."
      ],
      kontrolle: [
        "The exit is no more than 1 mm from my rear marking.",
        "The bar goes straight through the earlobe, not at an angle.",
        "I pushed the jewelry, I didn’t pull it.",
        "The ball is firmly in place, and the disc lies flat at the back."
      ]
    },
    {
      id: "stich-upperlobe",
      titel: "Upper lobe: three piercings in a row",
      modul: 8,
      clip: "labor-upper-lobe",
      clipText: "Mark three upper lobe points at equal distances, measure them and pierce them one after the other.",
      material: ["Silicone ear", "Three 18G cannulas", "Clamp", "Skin marker", "Caliper or ruler", "Three labrets"],
      schritte: [
        "Mark three points in the upper earlobe at equal distances and check them with the caliper.",
        "Only once the distances are right: pierce each point following the procedure from the previous exercise and fit it with a labret.",
        "Take a photo from the front and assess the row."
      ],
      kontrolle: [
        "The three distances differ from each other by no more than 1 mm.",
        "The row follows an even line; none of the points sticks out.",
        "Each exit is no more than 1 mm from the rear marking."
      ]
    },
    {
      id: "stich-helix",
      titel: "Helix with a ball closure ring (BCR)",
      modul: 8,
      clip: "labor-helix",
      clipText: "Pierce a helix on the silicone ear, insert a ball closure ring and close it.",
      material: ["Silicone ear", "18G cannula", "Clamp", "Skin marker", "Scissors", "Ball closure ring (BCR)", "Ring opening pliers and ring closing pliers"],
      schritte: [
        "Mark the spot on the rim of the ear (helix data sheet, module 08) and fix it with the clamp.",
        "Pierce, take the needle out and dispose of it, trim the sheath.",
        "Carefully open the ring with the ring opening pliers, insert one end into the sheath and push it through the piercing channel.",
        "Pull off the tube, insert the ball and close the ring with the ring closing pliers so that the ball snaps firmly into place."
      ],
      kontrolle: [
        "The ring is round and has no kink; I did not overstretch it.",
        "The ball snaps firmly into place and doesn’t fall out when the ring is turned.",
        "The piercing channel runs straight through the cartilage of the silicone ear."
      ]
    },
    {
      id: "stich-industrial",
      titel: "Industrial: two piercing channels on one line",
      modul: 8,
      clip: "labor-industrial",
      clipText: "Industrial on the silicone ear: mark both points so that a 38 mm barbell fits straight through, then pierce with 16G.",
      material: ["Silicone ear", "Two 16G cannulas", "Skin marker", "Barbell 38 mm"],
      schritte: [
        "Mark both points on the upper rim of the ear (industrial data sheet): close to the head and opposite on the outer rim.",
        "Hold the barbell over the markings as a test: it must connect both points in a straight line without bending the ear.",
        "Pierce both spots with the 16G cannula (freehand, as in the data sheet). Dispose of each needle immediately.",
        "Pass the barbell through both sheaths and screw on the balls."
      ],
      kontrolle: [
        "The barbell sits straight and does not squeeze the auricle together.",
        "Both piercing channels point in the same direction; the bar slides through without force.",
        "I checked beforehand whether the markings match the length of the jewelry."
      ]
    },
    {
      id: "stich-schmuck",
      titel: "Securing and changing jewelry",
      modul: 7,
      clip: "labor-schmuck",
      clipText: "Screw on a ball with the ball grabber and holding pliers, open and close a ball closure ring, change jewelry on the silicone ear.",
      material: ["Silicone ear with pierced channels", "Ball grabber", "Holding pliers", "Ring opening pliers and ring closing pliers", "Practice jewelry"],
      schritte: [
        "Pick up a ball with the ball grabber and screw it onto the bar you are holding with the holding pliers.",
        "Open a ball closure ring, take out the ball, put it back in and close the ring.",
        "In a finished piercing channel, swap the labret for a BCR and back again.",
        "Remember: with a real client, the initial jewelry is only changed after complete healing (module 10)."
      ],
      kontrolle: [
        "I didn’t drop a single ball or let one spring away.",
        "The ring is round again after closing.",
        "I can explain why the initial jewelry is not changed early on a client."
      ]
    },
    {
      id: "stich-ablauf",
      titel: "The whole procedure in real time",
      modul: 9,
      clip: "labor-ablauf",
      clipText: "The complete procedure on the silicone ear, from the workstation to the aftercare instructions, at normal speed.",
      material: ["Complete practice set", "A second person as the “client”", "Consent form and aftercare instructions (templates)"],
      schritte: [
        "Go through the procedure from module 09 from step 4 to 25: the second person fills in the consent form while you prepare the workstation.",
        "The piercing is done into the silicone ear lying next to the person; you do everything else with them (conversation, showing the marking, aftercare instructions).",
        "Have the person keep an eye on the clock and say at the end what they noticed."
      ],
      kontrolle: [
        "I didn’t leave out a single step and kept to the order.",
        "I asked how the person was feeling along the way (circulation).",
        "I explained the aftercare instructions verbally and handed them over in writing."
      ]
    }
  ]
};
