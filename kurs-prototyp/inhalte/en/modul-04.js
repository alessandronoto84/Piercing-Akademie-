/* Module 04 – Pain and anaesthesia. Source: course book ch. 3 (pp. 7–10) and ch. 4 (pp. 11–15). */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 4,
  titel: "Pain and anaesthesia",
  quelle: "Course book ch. 3 and 4, pp. 7–15",
  ziel: "You understand how pain arises and is transmitted, which anaesthesia you may use as a piercer and what you have to watch out for when doing so.",
  lektionen: [
    {
      titel: "“Does it hurt?”",
      seite: "S. 7",
      inhalt: [
        { typ: "text", text: "You will be asked this question a lot in the future. There is no clear answer to it: everyone perceives pain differently, and nobody knows exactly how the nerve pathways and nerve endings run. Experience shows that some piercings are more painful than others, but there is no rule of thumb." },
        { typ: "text", text: "Pain is a complex sensory perception, often with a strong psychological component. The technical term is algesia." },
        { typ: "praxis", text: "Answer honestly and calmly: “It's a short, distinct moment, and everyone feels it differently.” Clients who don't hear false promises trust you more." }
      ],
      fragen: [
        ["Is there a rule of thumb for how much a given piercing hurts?", ["No, everyone perceives it differently", "Yes: cartilage always hurts the most", "Yes: the thicker the cannula, the more it hurts", "Yes: mucous membrane never hurts"], "Experience shows some are more painful, but there is no rule.", "S. 7"],
        ["What is pain according to the course book?", ["A complex sensory perception, often with a strong psychological component", "A purely reflex reaction of the spinal cord", "An inflammatory reaction of the skin", "The result of a circulatory disorder"], "This is how ch. 3 defines it.", "S. 7"],
        ["What is the technical term for pain?", ["Algesia", "Anaesthesia", "Analgesia", "Asepsis"], "Anaesthesia means numbing.", "S. 7"],
        ["Case: A client asks whether his tragus piercing will hurt. Which answer fits?", ["Honestly: everyone feels it differently, it's a short moment", "“You won't feel a thing.”", "“Cartilage always hurts the most.”", "“With lidocaine it's guaranteed not to hurt.”"], "There is no rule of thumb; no false promises.", "S. 7"]
      ]
    },
    {
      titel: "Pain receptors and stimuli",
      seite: "S. 7–8",
      inhalt: [
        { typ: "text", text: "The prerequisites for perceiving pain are pain receptors (nociceptors) and undisturbed transmission to the brain (central nervous system). Pain receptors are mostly free nerve endings." },
        { typ: "tabelle", kopf: ["Stimulus", "Examples"], zeilen: [["Thermal", "Heat, cold"], ["Mechanical", "Blows, cuts, punctures, strong pressure"], ["Chemical", "Acids, alkalis"]] },
        { typ: "merke", text: "Since 2020, the International Association for the Study of Pain (IASP) has defined pain as “an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage”. The course book quotes the older version, under which pain also counts if those affected describe it as though tissue damage were the cause." },
        { typ: "text", text: "In rare cases, clients feel pain even before the actual piercing, just from the skin being touched. So pain can also be felt without any physical damage, for example as anticipatory pain caused by fear." }
      ],
      fragen: [
        ["What are pain receptors called?", ["Nociceptors", "Mechanoreceptors", "Thermoreceptors", "Mast cells"], "Mostly free nerve endings.", "S. 7–8"],
        ["What is the prerequisite for perceiving pain?", ["Pain receptors and undisturbed transmission to the brain", "Only an open wound", "Inflammation in the tissue", "Released endorphins"], "Nociceptors and central nervous system.", "S. 7"],
        ["What kind of stimulus is a puncture?", ["Mechanical", "Thermal", "Chemical", "Electrical"], "Like blows, cuts and strong pressure.", "S. 8"],
        ["Which organisation provides the quoted definition of pain?", ["International Association for the Study of Pain (IASP)", "World Health Organization (WHO)", "Robert Koch Institute (RKI)", "German Pain Society"], "The IASP definition.", "S. 7"],
        ["Can pain be felt without physical damage?", ["Yes, some clients feel pain just from being touched", "No, pain always requires tissue damage", "Only in children", "Only after anaesthesia"], "For example as anticipatory pain caused by fear.", "S. 7"]
      ]
    },
    {
      titel: "How pain arises in the tissue",
      seite: "S. 8–9",
      inhalt: [
        { typ: "schritte", punkte: [
          "The tissue injury releases ATP, protons, oxygen radicals, potassium and arachidonic acid.",
          "The enzyme cyclooxygenase (COX-1 in the endothelial cells, COX-2 in migrating leukocytes) converts the arachidonic acid into prostaglandin E2. Kinins from the injured endothelium become bradykinin.",
          "Mast cells release their granules (degranulation), including histamine.",
          "Bradykinin and serotonin dilate the blood vessels. A local oedema forms, through which leukocytes reach the damaged tissue more easily.",
          "All pain mediators excite the nociceptors. In the neurogenic reflex, these release nerve growth factor (NGF) and calcitonin gene-related peptide (CGRP)."
        ] },
        { typ: "text", text: "This has two consequences: the nociceptors become more sensitive and wake up dormant pain receptors in the surrounding area, resulting in neurogenic inflammation. And NGF makes nerve fibres sprout into the surrounding tissue. As a result, the tissue around the injury also becomes sensitive to pain." },
        { typ: "merke", text: "Pain receptors need a comparatively strong stimulus to be excited." }
      ],
      fragen: [
        ["What is released, among other things, when tissue is injured?", ["ATP, protons, potassium and arachidonic acid", "Insulin and glucose", "Endorphins and adrenaline", "Lidocaine and histamine"], "Plus oxygen radicals.", "S. 8"],
        ["Which enzyme converts arachidonic acid into prostaglandin E2?", ["Cyclooxygenase (COX)", "Amylase", "Lipase", "Acetylcholinesterase"], "COX-1 and COX-2.", "S. 8"],
        ["What do mast cells release, among other things?", ["Histamine", "Insulin", "Adrenaline", "Endorphins"], "Degranulation.", "S. 8"],
        ["What do bradykinin and serotonin do?", ["They dilate the blood vessels, causing local oedema", "They constrict the blood vessels", "They numb the nerve endings", "They release endorphins"], "A local oedema forms.", "S. 8"],
        ["Which substances do excited nociceptors release?", ["NGF and CGRP", "Endorphins and enkephalins", "Histamine and potassium", "Prostaglandin E2 and ATP"], "Neurogenic reflex.", "S. 9"],
        ["What is the effect of nociceptor sensitisation?", ["The surrounding tissue also becomes sensitive to pain", "The pain subsides more quickly", "Transmission to the brain is blocked", "The wound closes faster"], "Dormant receptors are woken up.", "S. 9"]
      ]
    },
    {
      titel: "How pain reaches the brain",
      seite: "S. 10",
      inhalt: [
        { typ: "tabelle", kopf: ["Nerve fibres", "Speed", "Characteristic"], zeilen: [
          ["A-delta fibres", "about 20 m/s", "fast, easy to localise"],
          ["C fibres", "up to 2.5 m/s", "older in evolutionary terms, slow, poorly localised (“somewhere on the thigh”)"]
        ] },
        { typ: "grafik", id: "schmerzleitung" },
        { typ: "text", text: "In the spinal cord, reflexes trigger an escape movement before the pain is consciously perceived, for example pulling your hand back before you realise the hotplate is hot." },
        { typ: "text", text: "The information reaches the brain via the anterolateral tract (spinothalamic tract). In the cerebral cortex the pain becomes conscious; in the limbic system it is evaluated emotionally. For every area of skin there is a corresponding area in the sensory cortex (sensory homunculus). Precise localisation is a learning process." },
        { typ: "praxis", text: "If a client flinches during the piercing, this is often the spinal reflex, which is faster than any intention. That's why the clamp holds the spot in place and you pierce swiftly." }
      ],
      fragen: [
        ["Which nerve fibres conduct pain quickly (about 20 m/s)?", ["A-delta fibres", "C fibres", "Motor fibres", "Autonomic fibres"], "C fibres conduct at up to about 2.5 m/s.", "S. 10"],
        ["Which fibres are responsible for poor localisation?", ["C fibres", "A-delta fibres", "Motor fibres", "The fibres of the anterolateral tract"], "They are slow and older.", "S. 10"],
        ["What does the reflex in the spinal cord trigger?", ["An escape movement before the pain becomes conscious", "The conscious evaluation of the pain", "Local anaesthesia", "The release of histamine"], "As with the hot hotplate.", "S. 10"],
        ["Which pathway carries pain information to the brain?", ["The anterolateral tract (spinothalamic tract)", "The pyramidal tract", "The blood, as a messenger substance", "The optic nerve"], "See ch. 3.2.", "S. 10"],
        ["Where is pain evaluated emotionally?", ["In the limbic system", "In the spinal cord", "In the thalamus alone", "In the cerebellum"], "It becomes conscious in the cerebral cortex.", "S. 10"],
        ["What is the sensory homunculus?", ["The mapping of every skin area in the sensory cortex", "A reflex arc in the spinal cord", "A pain receptor in the skin", "A part of the limbic system"], "Localisation is a learning process.", "S. 10"],
        ["Where is pain information relayed on its way to the cerebral cortex?", ["In the thalamus", "In the cerebellum", "In the nociceptor", "In the pituitary gland"], "Addition to the course book, see graphic.", "Ergänzung"]
      ]
    },
    {
      titel: "Local anaesthesia and its limits",
      seite: "S. 11–12",
      inhalt: [
        { typ: "text", text: "While signals are being relayed in the spinal cord, the body can dampen the perception of pain with its own substances (endorphins). Some painkillers, for example opiates, act at this point." },
        { typ: "achtung", text: "In piercing it is unusual, and in Germany prohibited, to use prescription anaesthetics, for example opiate-based ones. Regional anaesthesia of the spinal cord, nerve plexuses or individual nerves may only be performed by a doctor." },
        { typ: "tabelle", kopf: ["Procedure", "Effect", "Who"], zeilen: [
          ["General anaesthesia", "Affects the brain", "Only a specialist doctor (anaesthetist)"],
          ["Regional anaesthesia", "Inhibits parts of the spinal cord, nerve plexuses or individual nerves for a limited time", "Only a doctor"],
          ["Local anaesthesia in the broadest sense", "Blocks transmission from a small area directly at the nerve endings", "Piercer, with permitted products"]
        ] },
        { typ: "text", text: "In addition to relieving pain, an anaesthetist makes sure that the vital functions are maintained and that the body is protected from stress factors, such as people coming and going, the telephone or the doorbell." },
        { typ: "merke", text: "This is another reason, not just hygiene, why you only ever work in a separate, quiet room that only the client and you have access to. At this moment there is nothing more important that may disturb this calm." }
      ],
      fragen: [
        ["Which of the body's own substances dampen pain in the spinal cord?", ["Endorphins", "Histamines", "Prostaglandins", "Bradykinins"], "Opiates act here.", "S. 11"],
        ["May piercers use opiate-based prescription anaesthetics?", ["No", "Yes, with written consent", "Only for intimate piercings", "Yes, if a doctor has prescribed them"], "Unusual and prohibited in Germany.", "S. 11"],
        ["Which anaesthesia may only be performed by a doctor?", ["Regional anaesthesia of nerves, nerve plexuses or spinal cord", "Cooling with ice spray", "Applying an over-the-counter ointment", "Cooling with ice cubes"], "See ch. 4.", "S. 11"],
        ["What is local anaesthesia based on?", ["On acting on the peripheral nervous system", "On acting on the brain", "On blocking the spinal cord", "On constricting the blood vessels"], "It blocks transmission at the nerve endings.", "S. 11–12"],
        ["Why do you work in a separate, quiet room?", ["For hygiene and to protect against stress factors", "Because the trade office (Gewerbeamt) requires it", "So that you can work faster", "Only because of how loud the autoclave is"], "Telephone, doorbell and people coming and going are disruptive.", "S. 12"],
        ["Case: The studio phone rings during the piercing. What do you do?", ["I let it ring and stay with the client", "I answer briefly and disinfect my hands afterwards", "I ask the client to wait a moment", "I answer it with my gloves on"], "Nothing may disturb the calm at this moment.", "S. 12"]
      ]
    },
    {
      titel: "Ice spray and lidocaine ointment",
      seite: "S. 13",
      inhalt: [
        { typ: "text", text: "First and foremost, the experienced piercer tries to take away the client's fear and create a calm, harmonious environment. Ideally, the client is then free of fear and can be pierced without anaesthesia." },
        { typ: "tabelle", kopf: ["Product", "Effect", "Note"], zeilen: [
          ["Ice spray (e.g. chloroethane)", "The intense, brief cold numbs the nerve endings for a short time", "Acts directly"],
          ["Lidocaine ointment (Xylocain)", "From the pharmacy, available over the counter or on prescription depending on the product; well absorbed through mucous membranes (mouth, intimate area), also available as a spray", "Permitted according to the Academy, but not recommended"]
        ] },
        { typ: "achtung", text: "When using lidocaine, always observe the exposure time, point out side effects and rule out interactions with other medicines (for example beta blockers), especially in the mouth. You must ask the client about tolerance beforehand: in writing and once again verbally." }
      ],
      fragen: [
        ["What is the ideal case according to the course book?", ["Taking away the client's fear and piercing without anaesthesia", "Cooling every client with ice spray", "Lidocaine ointment for every mucous membrane piercing", "Piercing as slowly as possible"], "Calm, harmonious environment.", "S. 13"],
        ["How does ice spray work?", ["Intense, brief cold numbs the nerve endings", "It numbs the spot for about an hour", "It disinfects and numbs at the same time", "It constricts the vessels so the spot doesn't bleed"], "Acts directly and briefly.", "S. 13"],
        ["Which cold spray does the course book give as an example?", ["Chloroethane", "Lidocaine", "Benzocaine", "Menthol"], "Many sports cold sprays now contain other propellants; the principle is the same intense cold.", "S. 13"],
        ["Where can you get lidocaine ointment (Xylocain)?", ["At the pharmacy", "Only from wholesalers for doctors", "At the drugstore", "From specialist piercing suppliers"], "Lidocaine ointment is a medicinal product and only available at the pharmacy.", "S. 13"],
        ["What is the Piercing Akademie's position on lidocaine ointment?", ["Permitted, but not recommended", "Recommended for all cartilage piercings", "Prohibited", "Mandatory for intimate piercings"], "The Academy relies on a calm atmosphere instead of anaesthesia, because lidocaine comes with side effects and interactions.", "Akademie"],
        ["What must you do before using lidocaine?", ["Ask the client about tolerance in writing and verbally", "Just wait for the exposure time", "Cool the spot with ice spray first", "Call the client's family doctor"], "Also consider side effects and interactions.", "S. 13"]
      ]
    },
    {
      titel: "Side effects of lidocaine",
      seite: "S. 14",
      inhalt: [
        { typ: "tabelle", kopf: ["Situation", "Possible side effects"], zeilen: [
          ["If ingested", "Dizziness, restlessness, gastrointestinal disorders, allergic reactions, rise in temperature"],
          ["On the skin", "in rare cases hypersensitivity reactions"],
          ["On mucous membranes", "occasionally swelling in the throat and larynx area, very rarely hoarseness"],
          ["Moderate overdose", "Tingling and numbness, metallic taste, dizziness, slight drowsiness, increased sensitivity to noise, ringing in the ears"],
          ["Severe overdose", "Effects on brain activity and circulation"]
        ] }
      ],
      fragen: [
        ["Which side effects occur with a moderate overdose?", ["Tingling, numbness, metallic taste, dizziness, ringing in the ears", "A rash all over the body", "High blood pressure and racing heart", "Severe tiredness lasting several days"], "With a severe overdose, effects on brain and circulation.", "S. 14"],
        ["What can lidocaine occasionally cause on mucous membranes?", ["Swelling in the throat and larynx area", "Discolouration of the mucous membrane", "Bleeding", "A nickel allergy"], "Very rarely hoarseness.", "S. 14"],
        ["What does a severe overdose cause?", ["Effects on brain activity and circulation", "Only slight tingling", "Longer numbness without risk", "Faster wound healing"], "That's why the dose must be exact.", "S. 14"],
        ["Which reaction is rarely possible when applied to the skin?", ["Hypersensitivity reactions", "Ringing in the ears", "Swelling of the larynx", "Rise in temperature"], "In rare cases.", "S. 14"]
      ]
    },
    {
      titel: "Interactions of lidocaine",
      seite: "S. 14",
      inhalt: [
        { typ: "liste", punkte: [
          "With active substances that affect heart rhythm or heart rate (antiarrhythmics, beta blockers, calcium channel blockers), the effect of lidocaine on the heart can be increased or reduced.",
          "Other anaesthetics, blood-pressure-lowering beta blockers (propranolol, metoprolol, nadolol), diltiazem, verapamil, cimetidine, amiodarone, fluvoxamine and vasoconstricting substances such as adrenaline or noradrenaline increase the effect. This raises the risk of side effects.",
          "Together with ergot alkaloids or epinephrine, blood pressure can drop dangerously.",
          "Sedatives (benzodiazepines) and aprindine increase the side effects.",
          "Antiepileptics reduce the effect; muscle relaxants are enhanced by lidocaine."
        ] },
        { typ: "praxis", text: "You don't have to know this list by heart. But you do have to know that it exists, and for every client who reports taking medication, you must do without lidocaine if you cannot reliably clarify tolerance." }
      ],
      fragen: [
        ["Which medicines can lidocaine interact with dangerously?", ["With products that affect heart rhythm, e.g. beta blockers", "With antibiotics such as penicillin", "With vitamin supplements", "With the contraceptive pill"], "Especially when used in the mouth.", "S. 14"],
        ["What can lidocaine cause together with ergot alkaloids or epinephrine?", ["A dangerous drop in blood pressure", "Stronger numbing without risk", "An allergic skin reaction", "A nickel allergy"], "This is the course book's warning.", "S. 14"],
        ["What do antiepileptics do to lidocaine?", ["They reduce the effect", "They greatly increase the effect", "They only increase the side effects", "They have no influence"], "Muscle relaxants, on the other hand, are enhanced.", "S. 14"],
        ["What do sedatives (benzodiazepines) do together with lidocaine?", ["They increase the side effects", "They reduce the effect", "They cancel the numbing", "They have no influence"], "The same goes for aprindine.", "S. 14"],
        ["Case: A client takes beta blockers and wants lidocaine ointment for a tongue piercing. What is correct?", ["I do without lidocaine because an interaction is possible", "I only use half the amount", "I apply it, because ointment isn't absorbed in the mouth", "Beta blockers don't matter with ointments"], "Interactions must be ruled out, especially in the mouth.", "S. 13–14"]
      ]
    },
    {
      titel: "Using lidocaine safely",
      seite: "S. 15",
      inhalt: [
        { typ: "schritte", punkte: [
          "The product must not get into the eyes or onto injured skin. If it does: rinse immediately with running water.",
          "Apply the ointment with a cotton bud before the procedure.",
          "Wait a few minutes until it takes full effect.",
          "When used in the mouth and throat, swallowing is impaired and the risk of bite injuries increases. Food can also be inhaled accidentally."
        ] },
        { typ: "achtung", text: "When used in the mouth, the product must not be swallowed." }
      ],
      fragen: [
        ["What do you do if lidocaine gets into the eye?", ["Rinse immediately with running water", "Dab with saline solution and wait", "Neutralise with disinfectant", "Cover the eye and keep working"], "Not into the eyes or onto injured skin.", "S. 15"],
        ["What do you use to apply lidocaine ointment?", ["A cotton bud", "Your gloved finger", "An alcohol swab", "Straight from the tube onto the spot"], "Then wait a few minutes.", "S. 15"],
        ["What is the danger of lidocaine in the mouth?", ["Bite injuries and accidental inhalation of food", "Discolouration of the teeth", "Permanent loss of the sense of taste", "Hypergranulation (“proud flesh”) on the tongue piercing"], "Swallowing is impaired.", "S. 15"],
        ["May lidocaine be swallowed when used in the mouth?", ["No", "Yes, in small amounts", "Yes, if you drink water afterwards", "Only with sprays"], "That's what the warning says.", "S. 15"]
      ]
    }
  ],
  uebung: [
    "Write three sentences you can use to calm an anxious client before the piercing.",
    "Write down the questions you use to check tolerance before using lidocaine.",
    "Explain the difference between A-delta and C fibres in your own words."
  ]
});
