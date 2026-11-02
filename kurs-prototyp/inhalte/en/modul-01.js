/* Module 01 – The profession and its history. Source: course book ch. 2 (pp. 3–6), Nostril/Septum pp. 85 and 88.
   Structure of each lesson: inhalt (explanation) and fragen (mandatory questions after the explanation).
   Question format: [question, [correct answer, wrong, wrong], explanation, page]; the correct answer comes first, the course shuffles them.
   Content types: text, liste, merke, achtung, ergaenzung, praxis, schritte, tabelle, datenblatt (see kurs.js). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 1,
  titel: "The profession and its history",
  quelle: "Course book ch. 2, pp. 3–6",
  ziel: "You know what piercing is, where it comes from, how piercings are done professionally today and why the ear-piercing gun has no place in the studio.",
  lektionen: [
    {
      titel: "What piercing is",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "The word “piercing” simply means a hole in the skin. Many people wrongly equate it with the jewelry. What it actually refers to, however, is the act of piercing itself." },
        { typ: "text", text: "Piercing is a form of body modding or body art. Rings, bars and other pieces of jewelry are attached to various parts of the body by passing the jewelry through the skin and the underlying fatty or cartilage tissue." },
        { typ: "merke", text: "Piercings are as old as human civilization itself." },
        { typ: "praxis", text: "Clients often ask for “a piercing” and mean a particular piece of jewelry. Always clarify both in the consultation: the spot that will be pierced and the jewelry that is to go into it." }
      ],
      fragen: [
        ["According to the course book, what does the word “piercing” mean?", ["A hole in the skin (the act of piercing itself)", "The piece of jewelry in the piercing channel", "The healing process after the piercing", "The initial jewelry with extra length"], "It is often wrongly equated with the jewelry.", "S. 3"],
        ["Which form of body art does piercing belong to?", ["Body modding", "Scarification", "Tattooing", "Permanent make-up"], "Piercing is a form of body modding or body art.", "S. 3"],
        ["Through which tissue is the jewelry passed when piercing?", ["Through the skin and the underlying fatty or cartilage tissue", "Only through the epidermis, without deeper layers", "Through skin and muscle tissue", "Only through cartilage, never through fatty tissue"], "Depending on the spot, through skin and fatty tissue (for example the earlobe) or through skin and cartilage (for example the helix).", "S. 3"],
        ["According to the course book, how old are piercings?", ["As old as human civilization", "About as old as the Roman Empire", "They date from the Middle Ages", "They arose with the punk movement of the 1970s"], "Key sentence from ch. 2.1.", "S. 3"]
      ]
    },
    {
      titel: "Early traces: Africa and Egypt",
      seite: "S. 3",
      inhalt: [
        { typ: "text", text: "The earliest traces of piercing lead back to the Neolithic period in Africa. The course book cites Neolithic finds from Algeria: people there are said to have worn pendants made of animal bones and teeth in their earlobes more than 7000 years ago." },
        { typ: "ergaenzung", text: "The oldest direct evidence is described in a 2022 study (journal Antiquity): in graves at Boncuklu Tarla in south-eastern Turkey, jewelry made of stone, obsidian and copper was still in place at the ears and chins of the dead, around 10,000 to 8,000 BC. We have found no independent source for the course book’s statement about Algeria." },
        { typ: "text", text: "Old depictions of pharaohs from Egypt (around 1400 to 1300 BC) also show signs of ear jewelry. The famous gold mask of Tutankhamun shows pierced ears. In addition, magnificent gold earrings were found as grave goods." },
        { typ: "tabelle", kopf: ["Find", "Age", "What it shows"], zeilen: [
          ["Neolithic finds in Algeria", "over 7000 years", "Ear pendants made of animal bones and teeth"],
          ["Depictions of pharaohs in Egypt", "approx. 1400–1300 BC", "Ear jewelry"],
          ["Gold mask of Tutankhamun", "approx. 3300 years", "Pierced ears; gold earrings as grave goods"]
        ] }
      ],
      fragen: [
        ["How old are the oldest finds of ear jewelry mentioned in the course book?", ["Over 7000 years (Algeria)", "About 3300 years (Tutankhamun)", "About 2600 years (Hallstatt culture)", "About 4000 years (Middle East)"], "Neolithic finds from Algeria.", "S. 3"],
        ["What were the oldest ear pendants from Algeria made of?", ["Animal bones and teeth", "Gold", "Bronze", "Shells and wood"], "The Neolithic finds from Algeria were made of animal bones and teeth; metal jewelry came much later.", "S. 3"],
        ["From what period do the oldest known traces of piercing date?", ["The New Stone Age (Neolithic)", "The European Bronze Age", "The age of the pharaohs", "Ancient Greece"], "Neolithic means the New Stone Age.", "S. 3"],
        ["Which famous mask shows pierced ears?", ["The gold mask of Tutankhamun", "The gold mask of Agamemnon", "Napoleon’s death mask", "The mask of Pakal from Palenque"], "In addition, there were gold earrings as grave goods.", "S. 3"],
        ["From what period do the Egyptian depictions of pharaohs with ear jewelry date?", ["About 1400 to 1300 BC", "About 3000 to 2900 BC", "About 500 to 400 BC", "About AD 100 to 200"], "That is how the course book dates them.", "S. 3"]
      ]
    },
    {
      titel: "Europe, antiquity and other cultures",
      seite: "S. 4, 85, 88",
      inhalt: [
        { typ: "text", text: "Europe has comparatively few traces of early piercing. As one of the few pieces of evidence, the course book cites the bronze mask from the Hallstatt culture (Kleinklein, Styria), about 2600 years old, which is said to show several piercings in each ear. In ancient Greece and Rome, by contrast, an unblemished body was the ideal." },
        { typ: "liste", titel: "History of individual piercings", punkte: [
          "Nose piercing (Nostril): first practiced about 4000 years ago in the Middle East, adopted in India in the 16th century. There it is preferably worn on the left side of the nose.",
          "Septum: one of the oldest piercings, traditionally found in many cultures worldwide. The name comes from the Latin “septum nasi”."
        ] },
        { typ: "text", text: "Piercings are a universal phenomenon and are found in almost all cultures, as an initiation rite or as adornment. From the earliest days, people have decorated themselves with them: they wanted to show that they belonged to a group and at the same time stand out from it. Whether with tattoos, piercings, scarifications, hairstyles or clothing, every person has their own way of expressing themselves." }
      ],
      fragen: [
        ["Which European find with pierced ears does the course book mention?", ["A bronze mask from the Hallstatt culture", "A Roman marble bust", "A Roman grave relief", "A Greek vase painting"], "The mask is about 2600 years old.", "S. 4"],
        ["Roughly how old is the bronze mask from the Hallstatt culture?", ["About 2600 years", "About 7000 years", "About 4000 years", "About 1200 years"], "It shows several piercings in each ear.", "S. 4"],
        ["What was the ideal body in ancient Greece and Rome?", ["The unblemished body", "A body adorned as richly as possible", "A body with signs of belonging such as earrings", "A tattooed body as a sign of courage"], "That is why there are hardly any traces of piercing there.", "S. 4"],
        ["Where was nose piercing first practiced?", ["In the Middle East, about 4000 years ago", "In India, about 4000 years ago", "In Egypt, about 7000 years ago", "In India, in the 16th century"], "It came to India in the 16th century.", "S. 85"],
        ["What is true of the septum piercing?", ["It is one of the oldest piercings and is widespread in many cultures", "It only came from India in the 16th century", "It is pierced through the cartilage of the nasal septum", "It is only traditional in Europe"], "The name comes from “septum nasi”.", "S. 88"],
        ["Why did people adorn themselves from early on?", ["To show belonging and stand out at the same time", "Mainly for medical reasons", "Chiefly as protection against disease", "Only to hide their social rank"], "Piercings were an initiation rite or adornment.", "S. 4"]
      ]
    },
    {
      titel: "How piercings are done today",
      seite: "S. 5",
      inhalt: [
        { typ: "text", text: "Today we pierce with a so-called IV cannula (catheter needle, “Braunüle”). The needle sits inside a plastic sheath." },
        { typ: "schritte", punkte: [
          "The needle is pushed through the skin together with the plastic sheath.",
          "The needle is pulled out and immediately disposed of properly in the sharps container.",
          "Only the plastic sheath (the tube) remains in the piercing channel.",
          "The jewelry is inserted into the tube and pushed through the piercing channel."
        ] },
        { typ: "achtung", text: "Push, never pull. When pulling, the risk of the jewelry slipping out during insertion is too great." },
        { typ: "praxis", text: "The tube protects the fresh piercing channel. If you push cleanly, the jewelry slides in without additional pain. Have the client breathe out while you do it (more on this in module 9)." }
      ],
      fragen: [
        ["What are piercings professionally done with today?", ["With an IV cannula (“Braunüle”)", "With an ear-piercing gun with a disposable cartridge", "With a solid piercing needle without a sheath", "With a biopsy punch for every piercing"], "The needle sits inside a plastic sheath.", "S. 5"],
        ["What is a “Braunüle”?", ["An IV cannula: a steel needle in a plastic sheath", "A piercing clamp with a window", "A receiving tube", "A sterile disposable syringe"], "That is what the course book calls the cannula.", "S. 5"],
        ["What happens to the needle after piercing?", ["It is pulled out and immediately disposed of in the sharps container", "It stays in the plastic sheath until the jewelry is in place", "It is put back into its protective cap and disposed of later", "It is disinfected and used for the second piercing"], "Proper disposal in the sharps container.", "S. 5"],
        ["What remains in the piercing channel after piercing?", ["The plastic sheath (the tube)", "The steel needle", "The needle together with the sheath", "The receiving tube"], "The jewelry is inserted into the tube.", "S. 5"],
        ["How do you get the jewelry into the piercing channel?", ["I push it through the tube", "I pull it along behind the tube", "I twist it in without the tube", "I insert it over the steel needle still in place"], "Push, don’t pull.", "S. 5"],
        ["Why is the jewelry not pulled?", ["The risk of it slipping out would be too great", "Pulling creates friction that scratches the jewelry", "When pulling, the tube always gets stuck", "Pulling is only allowed with rings"], "Key sentence from ch. 2.2.", "S. 5"]
      ]
    },
    {
      titel: "Hygiene, aftercare and healing",
      seite: "S. 5–6",
      inhalt: [
        { typ: "text", text: "Adequate hygiene must be ensured during piercing and aftercare, otherwise the piercing can become inflamed. The piercing room must be kept clean and sterile like an operating room in a hospital, and the instruments must be sterile." },
        { typ: "ergaenzung", text: "Strictly speaking, a room cannot be sterilized. What is meant is: the room is cleaned and disinfected to a flawless hygienic standard, and everything that touches the piercing channel is sterile." },
        { typ: "text", text: "You must always inform the client about proper aftercare and healing times. For about two weeks, the client should clean the fresh piercing themselves two to three times a day with a suitable product, for example saline solution, Prontolind or Octenisept." },
        { typ: "achtung", text: "Never recommend Octenisept for cartilage piercings. It contains octenidine, which damages cartilage cells in laboratory studies. Prontolind (active ingredient polihexanide), on the other hand, may also be recommended for cartilage piercings." },
        { typ: "text", text: "The jewelry must not be changed for up to several months after piercing. Changing it too early can disrupt healing and trigger infections." }
      ],
      fragen: [
        ["What does the course book compare the piercing room to?", ["An operating room in a hospital", "A dental practice", "A laboratory", "A beauty salon"], "It must be kept clean and sterile.", "S. 5"],
        ["Roughly how long should a fresh piercing be cleaned?", ["About 2 weeks, 2 to 3 times a day", "About 2 weeks, once a day", "Until fully healed, every hour", "For 3 days, 5 times a day"], "By the client themselves, with a suitable product.", "S. 6"],
        ["Which aftercare product must never be recommended for cartilage piercings?", ["Octenisept", "Prontolind", "Saline solution", "Sterile saline solution from a spray bottle"], "Octenisept contains octenidine, which damages cartilage cells. Prontolind is allowed on cartilage.", "S. 6"],
        ["For how long must the jewelry not be changed after piercing?", ["Up to several months, until fully healed", "About 2 weeks, until aftercare ends", "Until the redness has gone", "Only for the first 3 days"], "An early change can trigger infections.", "S. 6"],
        ["Case: A client with a fresh helix asks whether she can use Octenisept for aftercare. What do you answer?", ["No, not on cartilage; I recommend saline solution or Prontolind", "Yes, diluted it is suitable for cartilage", "Yes, if she only uses it in the evening", "Yes, but only in the first week"], "The helix is cartilage; octenidine is toxic to cartilage. Prontolind is allowed.", "S. 6"]
      ]
    },
    {
      titel: "Why no ear-piercing gun",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "To this day, jewellers offer ear or nose piercings that are shot with an ear-piercing gun. As a matter of principle, this should be avoided." },
        { typ: "liste", titel: "The reasons", punkte: [
          "With this technique, the skin tissue can tear, and cartilage can even shatter.",
          "The guns cannot be fully sterilized.",
          "When the gun is fired, germs are spread through the room.",
          "Depending on the material, the initial jewelry used ranges from unsuitable to dangerous for the client."
        ] },
        { typ: "grafik", id: "pistole", titel: "Gun or cannula: what happens in the tissue" },
        { typ: "ergaenzung", text: "Academy note: The gun’s stud is blunt and is forced through the tissue by spring pressure. The tissue is not cut but displaced and crushed; this means more swelling and slower healing. In addition, the stud is short and the backing sits tight, so there is no room for swelling. The cannula cuts a smooth channel with its sharp bevel, comes sterile-packed and is used only once." },
        { typ: "praxis", text: "If a client comes to you with a gun-pierced earlobe that won’t heal, explain objectively why the method is unsuitable and advise them on aftercare. There is no need to badmouth colleagues; the facts are enough." }
      ],
      fragen: [
        ["Why does the ear-piercing gun have no place in the studio?", ["Tissue can tear, it cannot be fully sterilized and it spreads germs", "It is expressly prohibited in Germany", "It only works on the earlobe", "It can only be loaded with steel jewelry"], "On top of that, the initial jewelry is unsuitable.", "S. 6"],
        ["What can happen to cartilage when a gun is used?", ["It can shatter", "It can deform and become softer", "It calcifies at the piercing site", "It immediately forms hypergranulation"], "Skin tissue can tear, cartilage can shatter.", "S. 6"],
        ["What happens to germs when the gun is fired?", ["They are spread through the room", "They are killed by the frictional heat", "They stay on the disposable cartridge", "They are sealed in by the ear stud"], "In addition, the gun cannot be fully sterilized.", "S. 6"],
        ["What is true of the initial jewelry used in ear-piercing guns?", ["Depending on the material, it ranges from unsuitable to dangerous", "It always meets the ASTM F136 standard", "It always has 4 mm of extra length", "It is made of PTFE"], "Gun studs are often made of unsuitable material and have no extra length; depending on the material, unsuitable to dangerous.", "S. 6"]
      ]
    },
    {
      titel: "Preparing the client",
      seite: "S. 6",
      inhalt: [
        { typ: "text", text: "For 24 hours before the piercing, the client must not consume alcohol, drugs, caffeine or blood-thinning agents (for example aspirin/ASA). These substances can affect circulation and blood clotting." },
        { typ: "ergaenzung", text: "ASA (aspirin) inhibits the platelets permanently: after one tablet, the effect lasts about 7 to 10 days, until new platelets have been formed. So a 24-hour break does not eliminate the effect. Anyone who has taken ASA in the week before the appointment may bleed more heavily." },
        { typ: "ergaenzung", text: "The client must not stop taking prescribed blood thinners (for example Marcumar or Xarelto) on their own. Anyone taking such medication must clear the piercing with their doctor beforehand. If in doubt, do not pierce." },
        { typ: "praxis", text: "Tell clients this when they book the appointment. That way the client arrives prepared and you don’t have to send anyone home again." }
      ],
      fragen: [
        ["What should the client avoid for 24 hours before the piercing?", ["Alcohol, drugs, caffeine and blood-thinning agents", "Alcohol and sport; caffeine is allowed", "Only alcohol and drugs", "Solid food and drinks"], "These substances affect circulation and blood clotting.", "S. 6"],
        ["Which of these is a blood thinner?", ["Aspirin (ASA)", "Paracetamol", "Magnesium", "Vitamin C"], "Blood thinners impair clotting.", "S. 6"],
        ["How long before the piercing should the client avoid caffeine?", ["24 hours", "2 hours", "48 hours", "1 week"], "Likewise alcohol, drugs and blood thinners.", "S. 6"],
        ["Case: A client takes a blood thinner prescribed by his doctor every day. What do you do?", ["He clears the piercing with his doctor first; if in doubt, I don’t pierce", "He stops taking it 24 hours beforehand", "I pierce with a thinner cannula", "I pierce and apply pressure for longer afterwards"], "Never stop prescribed medication on your own.", "Ergänzung"]
      ]
    }
  ],
  uebung: [
    "Explain to a friend in two sentences what the word “piercing” means.",
    "List three reasons why no ear-piercing gun is used in the studio.",
    "Write down what a client should avoid in the 24 hours before the appointment."
  ]
});
