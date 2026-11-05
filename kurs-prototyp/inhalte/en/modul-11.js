/* Module 11 – Starting a studio (new, no chapter in the course book). Draft; sources and open points see KURS-RECHERCHE.md, sections 3, 4 and 6. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 11,
  titel: "Starting a studio",
  quelle: "Academy note based on the course book (pp. 36–39) and the information sheets of the local public health offices (Gesundheitsämter)",
  entwurf: true,
  ziel: "You know which steps come before you launch your own piercing service: business registration, local public health office (Gesundheitsamt), hygiene plan, documentation, insurance, prices and purchasing.",
  lektionen: [
    {
      titel: "Business registration and authorities",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "In Germany there is no regulated training for piercers and no officially recognized quality seal. Whether, and under which conditions, you may offer piercings is decided by the local authorities. This course shows you what matters; it does not replace clarifying things with the authorities locally." },
        { typ: "foto", id: "pexels-7821682", text: "Registering a business involves filling in several forms." },
        { typ: "schritte", punkte: [
          "Register your business with the responsible trade office (Gewerbeamt).",
          "Contact the local public health office (Gesundheitsamt): ask about the requirements for premises and hygiene, and ask for the framework hygiene plan for piercing studios (course book p. 36).",
          "In Niedersachsen (Lower Saxony), piercing is covered by its own hygiene regulation (Hygieneverordnung); the local public health office monitors studios on this basis. Read the current version and have the requirements confirmed to you."
        ] }
      ],
      fragen: [
        ["Where do you register your business?", ["At the responsible trade office (Gewerbeamt)", "At the local public health office (Gesundheitsamt)", "At the chamber of crafts (Handwerkskammer)", "At the tax office (Finanzamt)"], "The first step before you start.", "Entwurf"],
        ["Whom do you ask about the framework hygiene plan for your studio?", ["The local public health office", "The trade office", "The statutory accident insurance (Berufsgenossenschaft)", "The chamber of commerce and industry (IHK)"], "Recommendation of the course book.", "S. 36"],
        ["Is there state-regulated training for piercers in Germany?", ["No", "Yes, as three-year vocational training", "Yes, through the chamber of crafts", "Only in Niedersachsen"], "The Academy’s certificate is proof of participation and training.", "Entwurf"],
        ["Who monitors piercing studios in Niedersachsen on the basis of the hygiene regulation?", ["The local public health office", "The trade office", "The statutory accident insurance", "The chamber of crafts"], "The hygiene regulation is monitored by the local public health office. The trade office is only responsible for registration.", "Entwurf"]
      ]
    },
    {
      titel: "Planning the premises",
      seite: "S. 25–26, 38",
      inhalt: [
        { typ: "video", id: "studio-raum", text: "Treatment room with a wipeable couch, hand sink and autoclave.", schleife: true },
        { typ: "liste", punkte: [
          "Workstation separated from the waiting area structurally or at least by a partition wall; ideally a separate room.",
          "Hand sink with running water and dispensers for disinfectant, liquid soap and disposable towels, operable without hand contact and without splashes reaching the workstation.",
          "Couch and furniture with smooth, wipeable surfaces.",
          "Separate toilet with hand sink, dispensers, trash can and sanitary disposal bin.",
          "First aid kit and emergency numbers clearly visible."
        ] },
        { typ: "grafik", id: "studio3d" },
        { typ: "praxis", text: "Plan the routes: from the reprocessing area (unclean) to the sterile goods storage (clean), clean and used instruments should never cross paths." }
      ],
      fragen: [
        ["How is the workstation separated from the waiting area?", ["Structurally or at least by a partition wall", "By a curtain", "By a marking on the floor", "By a fabric-covered folding screen"], "According to the information sheets and the course book.", "S. 26"],
        ["What belongs at the hand-washing station?", ["Dispensers for disinfectant, liquid soap and disposable towels", "A bar of soap and a cloth towel", "Only a disinfectant dispenser", "A nail brush and a towel"], "Operable without hand contact.", "S. 25"]
      ]
    },
    {
      titel: "Hygiene plan and documentation",
      seite: "S. 36–39, 46–47",
      entwurf: true,
      inhalt: [
        { typ: "foto", id: "pexels-8376320", text: "Every work step under the hygiene plan is documented in writing." },
        { typ: "liste", titel: "What you keep in writing", punkte: [
          "Framework hygiene plan with cleaning and disinfection plan (examples in the course book pp. 37–39; agree it with the local public health office)",
          "Sterile goods: every batch with sterilization date and batch number",
          "Autoclave test records: daily tests, six-monthly spore tests, annual device inspection",
          "Every client’s consent form, stored securely",
          "Photo consents, before you publish any client pictures"
        ] }
      ],
      fragen: [
        ["What do you document for every batch of sterile goods?", ["Sterilization date and batch number", "Only the sterilization date", "The client’s name", "The temperature of the ultrasonic bath"], "This way every batch can be traced.", "S. 46"],
        ["What belongs in your studio’s documentation?", ["Hygiene plan, sterile goods batches, autoclave tests and consent forms", "Only the consent forms", "Only invoices and the cash book", "Only the autoclave tests"], "If in doubt, the local public health office and the insurer will want to see everything without gaps.", "Entwurf"],
        ["To whom do you present the autoclave tests on request?", ["The local authorities", "The clients", "The manufacturer", "The health insurance fund"], "See module 5.", "S. 47"]
      ]
    },
    {
      titel: "Insurance and prices",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Get advice on business or professional liability insurance for piercing before you pierce your first client." },
        { typ: "foto", id: "pexels-7580852", text: "Insurance costs and prices need to be calculated carefully." },
        { typ: "liste", titel: "What belongs in your price calculation", punkte: [
          "Materials: jewelry, cannula, disposables, aftercare products",
          "Your working time, including consultation, consent form and reprocessing",
          "Running costs: premises, equipment, inspections, insurance"
        ] }
      ],
      fragen: [
        ["What should you sort out before your first client?", ["Business or professional liability insurance", "Legal expenses insurance is enough", "Home contents insurance", "Nothing, the consent form is enough"], "Get advice.", "Entwurf"],
        ["What belongs in the price calculation?", ["Materials, working time including consultation and reprocessing, running costs", "Only jewelry and cannula", "Only the working time with the client", "Only rent and insurance"], "Only then does your price also cover consultation, reprocessing and running costs.", "Entwurf"]
      ]
    },
    {
      titel: "Purchasing",
      seite: "S. 34, 56",
      inhalt: [
        { typ: "foto", id: "pexels-6612276", text: "Consumables and jewelry are mostly ordered online today." },
        { typ: "liste", punkte: [
          "Initial jewelry only made of G23 titanium or PTFE, with the manufacturer’s material certificate. Under EU law, jewelry for fresh piercings may release no more than 0.2 µg of nickel per cm² per week.",
          "Disinfectants from the VAH list (German Association for Applied Hygiene) with proven efficacy.",
          "Cannulas, clamps and consumables from specialist suppliers of medical or studio supplies."
        ] },
        { typ: "ergaenzung", text: "Which suppliers have proven themselves will be added here by the Piercing Akademie from its own experience." }
      ],
      fragen: [
        ["Which initial jewelry do you buy?", ["G23 titanium or PTFE with material certificate", "316L, because it is cheaper", "Zircon gold titanium", "303 steel"], "See module 6.", "S. 56"],
        ["Which disinfectants do you buy?", ["Products from the VAH list with proven efficacy", "Products with the highest possible alcohol content", "Household cleaners with chlorine", "Any products from the drugstore"], "See module 5.", "S. 34"]
      ]
    },
    {
      titel: "Rules for your studio",
      seite: "Modul 2 und 8",
      inhalt: [
        { typ: "foto", id: "pexels-13068359", text: "A tidy, bright studio makes clear rules visible to everyone." },
        { typ: "liste", punkte: [
          "A written consent form before every piercing (module 2).",
          "Check age: under 18 only with the consent of the parents or legal guardians, better not at all.",
          "No health claims, and no advertising based on them.",
          "You turn down piercings you have not safely mastered; you never perform piercings marked “Do not perform” (module 8).",
          "If complications occur, you refer the client to a doctor."
        ] }
      ],
      fragen: [
        ["What do you do with a piercing you have not safely mastered?", ["I turn it down", "I pierce it with a receiving tube", "I pierce it following a video", "I pierce it freehand"], "The client’s safety comes first.", "S. 91–93"],
        ["What do you do with piercings marked “Do not perform”?", ["I never perform them", "I perform them only for regular clients", "I perform them with anesthesia", "I perform them after written consent"], "Risk of serious harm.", "S. 103–110"],
        ["Does the Academy’s certificate replace an official permit?", ["No, it is proof of participation and training", "Yes, in Niedersachsen", "Yes, together with the business registration", "Yes, it is state-recognized"], "The trade office and the local public health office decide.", "Akademie"],
        ["When do you publish photos of clients’ piercings?", ["Only after written consent", "Immediately, if the face can’t be seen", "After verbal agreement", "After the withdrawal period has expired"], "See module 2.", "S. 1"]
      ]
    }
  ],
  uebung: [
    "Write down the contact details of your trade office (Gewerbeamt) and your local public health office (Gesundheitsamt).",
    "Put together a list of the documents you would present to the local public health office.",
    "Calculate the price of a helix piercing including all costs."
  ]
});
