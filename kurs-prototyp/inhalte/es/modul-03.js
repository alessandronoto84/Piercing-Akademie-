/* Módulo 03 – Anatomía, piel y cicatrización de heridas (nuevo, sin capítulo propio en el libro del curso).
   Fundamentos como borrador (pendiente de revisión técnica); zonas de riesgo del libro del curso págs. 73, 89–92, 104; tiempos de cicatrización pág. 49; epitelización pág. 50. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 3,
  titel: "Anatomía, piel y cicatrización de heridas",
  quelle: "Nota de la Academia, con partes del libro del curso (págs. 48–50, 73, 89–92 y 104)",
  entwurf: true,
  ziel: "Entiendes qué tejidos atraviesa un canal de perforación, por qué el cartílago cicatriza más despacio que un lóbulo y dónde los vasos y los nervios suponen un riesgo.",
  lektionen: [
    {
      titel: "La estructura de la piel",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "video", id: "anatomie-modelle", text: "Modelo de oreja y modelo de las capas de la piel: epidermis, dermis e hipodermis con tejido graso.", schleife: true },
        { typ: "text", text: "La piel es el órgano más grande del ser humano. Está formada por tres capas, y un canal de perforación atraviesa las tres." },
        { typ: "tabelle", kopf: ["Capa", "Estructura", "Importancia al perforar"], zeilen: [
          ["Epidermis", "Capa más externa, queratinizada, sin vasos sanguíneos propios", "Barrera protectora frente a los gérmenes. Se desinfecta antes de perforar y, durante la cicatrización, vuelve a crecer desde el borde de la herida."],
          ["Dermis", "Tejido conjuntivo con vasos sanguíneos, nervios, raíces del pelo y glándulas", "Aquí sangra y duele la perforación. Aquí están los vasos que buscas con la linterna."],
          ["Hipodermis (tejido subcutáneo)", "Sobre todo tejido graso", "Amortigua. En zonas como el ombligo determina la longitud del canal de la perforación."]
        ] },
        { typ: "grafik", id: "haut" },
        { typ: "grafik", id: "haut3d" },
        { typ: "foto", id: "frei-haut-3d", text: "Representación tridimensional de las capas de la piel: epidermis, dermis e hipodermis con pelos, glándulas y vasos (rotulado en inglés)." },
        { typ: "merke", text: "Cuantas más capas y tejidos atraviese el canal de la perforación, más tiempo necesitará para cicatrizar." }
      ],
      fragen: [
        ["¿De cuántas capas está formada la piel?", ["Tres: epidermis, dermis, hipodermis", "Dos: epidermis y dermis", "Cuatro: capa córnea, epidermis, dermis, hipodermis", "Cinco, según los estratos de la epidermis"], "Epidermis, dermis, hipodermis.", "Entwurf"],
        ["¿Cómo se llama la capa más externa de la piel?", ["Epidermis", "Dermis", "Hipodermis", "Pericondrio"], "Está queratinizada.", "Entwurf"],
        ["¿Qué capa de la piel contiene vasos sanguíneos y nervios?", ["La dermis", "La epidermis", "Solo la hipodermis", "La capa córnea"], "La epidermis no tiene vasos sanguíneos propios.", "Entwurf"],
        ["¿De qué está formada principalmente la hipodermis?", ["De tejido graso", "De cartílago", "De células córneas", "De fibras musculares"], "Amortigua.", "Entwurf"],
        ["¿Qué capas atraviesa un canal de perforación?", ["Las tres capas", "Solo la epidermis y la dermis", "Solo la epidermis", "La dermis y la hipodermis; la epidermis se desplaza"], "Por eso cicatriza desde el borde.", "Entwurf"],
        ["¿Qué suele encontrarse agrupado en un haz en la dermis?", ["Arteria, vena y nervio", "Raíz del pelo y glándula sudorípara", "Lóbulos de grasa y cartílago", "Solo capilares"], "Ver el bloque de piel en 3D.", "Ergänzung"]
      ]
    },
    {
      titel: "Cartílago, tejido blando y mucosa",
      seite: "S. 48–49",
      inhalt: [
        { typ: "text", text: "No todos los tejidos cicatrizan igual de rápido. Eso explica las grandes diferencias en los tiempos de cicatrización que indicas a tus clientes." },
        { typ: "tabelle", kopf: ["Tejido", "Ejemplos", "Cicatrización según el libro del curso"], zeilen: [
          ["Cartílago", "Pabellón auricular, tragus, helix, conch, aleta de la nariz", "al menos 3 meses"],
          ["Tejido blando", "Lóbulo, ceja, ombligo", "Lobe aprox. 2 meses, ceja aprox. 1 mes, ombligo aprox. 4 a 6 meses"],
          ["Mucosa", "Lengua, frenillo labial, zona íntima", "Lengua y frenillo labial aprox. 1 mes, zona íntima 2 a 3 meses"]
        ] },
        { typ: "grafik", id: "ohr" },
        { typ: "ergaenzung", text: "El cartílago no tiene vasos sanguíneos propios y solo se nutre a través del pericondrio que lo rodea. Por eso cicatriza despacio y es sensible a la irritación." },
        { typ: "achtung", text: "La octenidina, el principio activo de Octenisept, daña las células del cartílago en estudios de laboratorio. Por eso nunca recomiendas Octenisept en piercings de cartílago. Prontolind (principio activo polihexanida) está permitido en cartílago." }
      ],
      fragen: [
        ["¿Por qué los piercings de cartílago cicatrizan más despacio que un lobe?", ["El cartílago no tiene vasos sanguíneos propios", "El cartílago tiene una cantidad especialmente alta de nervios", "El cartílago es más fino que el lóbulo", "El cartílago no forma tejido de granulación"], "Se nutre a través del pericondrio.", "Entwurf"],
        ["¿Qué tiempo de cicatrización indica el libro del curso para los piercings de cartílago?", ["Al menos 3 meses", "Unas 4 a 6 semanas", "Unos 2 meses", "De 1 a 2 meses"], "Para comparar: lobe aprox. 2 meses.", "S. 49"],
        ["¿Qué tejido cicatriza más rápido?", ["La mucosa", "El cartílago", "El tejido blando, como el lóbulo", "El tejido graso del ombligo"], "Lengua y frenillo labial aprox. 1 mes.", "S. 49"],
        ["¿A qué tipo de tejido pertenece el helix?", ["Cartílago", "Tejido blando", "Mucosa", "Tejido graso"], "El borde de la oreja es cartílago.", "S. 78"],
        ["¿A qué tipo de tejido pertenece el piercing de lengua?", ["Mucosa", "Cartílago", "Tejido blando sin mucosa", "Tejido conjuntivo de la piel"], "La mucosa cicatriza rápido.", "S. 49"],
        ["¿Por qué la octenidina está prohibida en piercings de cartílago?", ["Daña las células del cartílago en estudios de laboratorio", "Decolora el cartílago", "No tiene efecto antiséptico sobre el cartílago", "Provoca alergias al níquel en el cartílago"], "La octenidina está en Octenisept; Prontolind contiene polihexanida.", "S. 48"],
        ["¿Qué parte del pabellón auricular no contiene cartílago?", ["El lóbulo", "El tragus", "El anti-tragus", "El conch"], "El lóbulo es tejido blando y cicatriza más rápido.", "S. 49"]
      ]
    },
    {
      titel: "Zonas de riesgo en la cara",
      seite: "S. 89–92",
      inhalt: [
        { typ: "text", text: "En algunas zonas de la cara hay vasos y nervios importantes justo debajo de la piel. El libro del curso menciona expresamente estas zonas." },
        { typ: "foto", id: "pexels-3861592", text: "En la cara, nervios y vasos están muy juntos, lo que convierte ciertas zonas en zonas de riesgo." },
        { typ: "tabelle", kopf: ["Piercing", "Riesgo", "Regla"], zeilen: [
          ["Ceja", "En la parte interna salen nervios y vasos (entumecimiento, sangrado)", "Perforar solo en el tercio externo de la ceja"],
          ["Cheek (mejilla)", "Arterias y nervios importantes, riesgo de desfiguración; pueden quedar hoyuelos", "Solo por piercers profesionales; recházalo si eres principiante"],
          ["Bridge", "Demasiado profundo: presión sobre vías nerviosas; demasiado superficial: expulsión", "Recházalo si eres principiante"],
          ["Eskimo", "Desgarro o hundimiento permanente del labio", "Recházalo si eres principiante; no perforar en el bermellón del labio"]
        ] },
        { typ: "praxis", text: "Decir que no a una petición arriesgada es profesional. Es mejor recomendar a un cliente un colega con experiencia que perforar algo que no dominas con seguridad." }
      ],
      fragen: [
        ["¿Dónde se puede perforar un piercing de ceja?", ["Solo en el tercio externo", "En el tercio interno, cerca de la nariz", "En el tercio medio, sobre la pupila", "En cualquier sitio, si se perfora superficialmente"], "En la parte interna salen nervios y vasos; una lesión puede causar entumecimiento en la frente y el párpado superior.", "S. 89"],
        ["¿Por qué los principiantes rechazan el piercing de cheek?", ["Por ahí pasan arterias y nervios importantes y el conducto salival", "Solo se puede hacer con punch de biopsia", "Cicatriza más rápido que otros piercings", "Siempre requiere anestesia"], "Además, hay riesgo de desfiguración.", "S. 92"],
        ["¿Qué puede causar un bridge perforado demasiado profundo?", ["Presión sobre vías nerviosas", "Expulsión", "Una pericondritis", "Un desgarro del labio"], "Si es demasiado superficial, se expulsa.", "S. 91"],
        ["¿Qué ocurre si un bridge se perfora con demasiado poca profundidad?", ["Se expulsa", "Presiona sobre vías nerviosas", "Atraviesa el hueso nasal", "Cicatriza especialmente rápido"], "Recházalo si eres principiante.", "S. 91"],
        ["¿Qué puede quedar de forma permanente tras un piercing de cheek?", ["Hoyuelos causados por la perforación", "Una decoloración de los dientes", "Un hundimiento del labio", "Un entumecimiento permanente de la lengua"], "Ficha técnica Cheek.", "S. 92"],
        ["Caso: Un cliente quiere un cheek y sería el primer piercing que haces en tu vida. ¿Qué haces?", ["Lo rechazo y le recomiendo un piercer con experiencia", "Lo perforo con la cánula más fina", "Lo perforo si firma", "Lo perforo a mano alzada para ser flexible"], "Recházalo si eres principiante.", "S. 92"]
      ]
    },
    {
      titel: "Nervios, arteria y conducto salival en la cara",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Las reglas de riesgo del libro del curso se entienden cuando sabes qué hay debajo de la piel. Hay dos zonas especialmente importantes para los piercers: la ceja y la mejilla." },
        { typ: "grafik", id: "augenbraue" },
        { typ: "liste", titel: "Ceja", punkte: [
          "Aproximadamente en el límite entre el tercio interno y el medio, más o menos sobre la pupila, el nervio supraorbitario sale por una pequeña abertura en el borde superior de la órbita (agujero o escotadura supraorbitaria); más hacia dentro, sobre el ángulo interno del ojo, sale el nervio supratroclear. Con ellos discurren pequeñas arterias y venas.",
          "Ambos son nervios sensitivos de la frente y el párpado superior. Una lesión puede causar entumecimiento, hormigueo o sensaciones anómalas permanentes.",
          "El movimiento de la frente, en cambio, lo controla una rama del nervio facial (N. facialis), que pasa lateralmente por la sien. También por eso perforas de forma superficial y no demasiado profunda.",
          "En el tercio externo no hay puntos de salida importantes. Ese es el motivo de la regla del libro del curso."
        ] },
        { typ: "grafik", id: "wange" },
        { typ: "liste", titel: "Mejilla", punkte: [
          "El nervio facial (N. facialis) sale del cráneo por debajo de la oreja, atraviesa la glándula parótida y se abre en abanico en ramas hacia la frente, el ojo, la mejilla, la boca y el mentón. Controla la mímica; una lesión puede paralizar partes de la cara.",
          "El conducto salival de la glándula parótida (ductus parotideus) discurre unos dos centímetros por debajo del arco cigomático, transversalmente sobre el músculo masetero, y desemboca en la boca frente al segundo molar superior.",
          "La arteria facial (A. facialis) va en diagonal desde el borde de la mandíbula hasta la comisura de la boca y sigue hacia la nariz.",
          "Un piercing de cheek se sitúa justo en medio de esta zona. Por eso lo rechazas si eres principiante."
        ] },
        { typ: "ergaenzung", text: "Si se mira con más detalle, en el borde interno de la ceja salen sobre todo nervios sensitivos; una lesión provoca más bien entumecimiento que parálisis. El movimiento de la frente depende de una rama lateral del nervio facial. Eso no cambia la regla: ceja solo en el tercio externo." },
        { typ: "merke", text: "La posición de nervios y vasos varía de una persona a otra. Los dibujos muestran dónde hay peligro, no dónde hay seguridad garantizada." }
      ],
      fragen: [
        ["¿Qué nervio sensitivo sale por el borde superior de la órbita, más o menos sobre la pupila?", ["El nervio supraorbitario", "El nervio facial", "El nervio trigémino en conjunto, en el arco cigomático", "El nervio óptico"], "Sale por una pequeña abertura del hueso e inerva la frente y el párpado superior. Más hacia dentro está el N. supratroclear. Por eso solo perforas en el tercio externo.", "Ergänzung"],
        ["¿Qué puede causar una lesión del nervio supraorbitario?", ["Entumecimiento o sensaciones anómalas en la frente y el párpado superior", "Una parálisis de los músculos faciales", "Trastornos de la visión", "Salida de saliva por la herida"], "Es un nervio sensitivo.", "Ergänzung"],
        ["¿Qué controla el nervio facial (N. facialis)?", ["La mímica", "La sensibilidad de la piel de la cara", "Los músculos de la masticación", "El movimiento de los ojos"], "Una lesión puede paralizar partes de la cara.", "Ergänzung"],
        ["¿Por dónde discurre el conducto salival de la glándula parótida?", ["Unos 2 cm por debajo del arco cigomático, atravesando la mejilla", "Justo por el borde de la mandíbula", "En vertical por delante de la oreja hacia el cuello", "Por debajo del ojo hacia la nariz"], "Desemboca frente al segundo molar superior.", "Ergänzung"],
        ["¿Qué estructuras se encuentran en la zona del piercing de cheek?", ["Ramas del nervio facial, el conducto salival y la arteria facial", "Solo tejido graso y piel", "El nervio supraorbitario y la glándula lagrimal", "Cartílago y el músculo masetero"], "Por eso rechazas el cheek si eres principiante.", "S. 92"],
        ["¿Por qué solo perforas la ceja en el tercio externo?", ["Porque en la parte interna salen nervios y vasos del hueso", "Porque el tercio externo está mejor irrigado y cicatriza antes", "Porque allí el pelo es más denso y tapa la joya", "Porque en la parte interna el nervio facial controla la mímica"], "Punto de salida en el borde interno de la órbita.", "S. 89"]
      ]
    },
    {
      titel: "Reconocer vasos, evitar los cuerpos cavernosos",
      seite: "S. 73, 90, 104",
      inhalt: [
        { typ: "text", text: "Con una linterna de luz verde puedes, por ejemplo, iluminar la oreja por transparencia y así reconocer los vasos sanguíneos. Nunca perfores a través de un vaso sanguíneo; de lo contrario, el cliente puede sangrar mucho." },
        { typ: "foto", id: "pexels-7479547", text: "Los vasos sanguíneos superficiales suelen verse bien y hay que evitarlos al perforar." },
        { typ: "liste", titel: "Otras zonas en las que debes tener especial cuidado", punkte: [
          "Lengua: no lesionar el frenillo lingual (pág. 90).",
          "Pene: nunca perforar a través de los cuerpos cavernosos. Hay riesgo de daños graves, incluso de que el cliente muera desangrado (pág. 104)."
        ] },
        { typ: "merke", text: "Primero mirar, luego marcar, luego perforar. Quien revisa a fondo la zona antes evita la mayoría de las complicaciones." }
      ],
      fragen: [
        ["¿Qué luz recomienda el libro del curso para iluminar la oreja por transparencia?", ["Luz verde", "Luz UV", "Flash blanco", "Luz infrarroja"], "Así reconoces los vasos sanguíneos.", "S. 73"],
        ["¿Por qué no perforas a través de un vaso sanguíneo?", ["De lo contrario, el cliente puede sangrar mucho", "La cánula se desafila", "La sangre emborrona la marca", "Los vasos cicatrizan peor que la piel"], "Reconocer los vasos antes.", "S. 73"],
        ["¿Qué no se debe lesionar en un piercing de lengua?", ["El frenillo lingual", "La punta de la lengua", "Las papilas gustativas del borde de la lengua", "El frenillo labial"], "Perforar de abajo hacia arriba.", "S. 90"],
        ["¿Qué puede ocurrir al perforar a través de los cuerpos cavernosos del pene?", ["Daños graves, incluso morir desangrado", "Solo un tiempo de cicatrización más largo", "Una alergia al níquel", "La expulsión de la joya"], "Totalmente desaconsejado.", "S. 104"]
      ]
    },
    {
      titel: "Las fases de la cicatrización de heridas",
      seite: "S. 50",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Un piercing nuevo es una herida. Cicatriza en fases que se solapan entre sí." },
        { typ: "schritte", punkte: [
          "Fase inflamatoria o de limpieza (primeros días): enrojecimiento, ligera hinchazón, calor y algo de secreción clara son normales. Por eso la joya inicial necesita longitud extra.",
          "Fase proliferativa o de granulación: un tejido nuevo, delicado y húmedo (tejido de granulación) rellena el canal de la perforación.",
          "Epitelización (fase de regeneración): desde el borde de la herida migran células epiteliales que cubren la herida; debajo, el tejido de granulación madura hasta convertirse en tejido cicatricial seco y firme. La herida se hace cada vez más pequeña."
        ] },
        { typ: "grafik", id: "wundheilung" },
        { typ: "grafik", id: "lobe3d" },
        { typ: "ergaenzung", text: "Valores orientativos de la ciencia de la cicatrización: la fase inflamatoria dura aproximadamente de 1 a 4 días. La fase de granulación empieza a los pocos días y se extiende hasta aproximadamente la tercera semana. La epitelización y la remodelación duran de semanas a meses, y las fases se solapan de forma gradual. Al cabo de unas tres semanas, una cicatriz tiene alrededor del 20 por ciento de la resistencia a la tracción de la piel sana, y al cabo de unos meses hasta aproximadamente el 80 por ciento; nunca llega a ser tan resistente como antes, y la remodelación dura hasta un año. Un canal de perforación es una herida larga y estrecha que tiene que cicatrizar en toda su longitud; de ahí los largos tiempos de cicatrización del módulo 10." },
        { typ: "achtung", text: "Si la epitelización no comienza, el cliente debe acudir al médico pasados entre 10 y 14 días." }
      ],
      fragen: [
        ["¿Qué es normal en los primeros días tras la perforación?", ["Ligero enrojecimiento, hinchazón, calor y algo de secreción clara", "Pus amarillo y fiebre", "Un enrojecimiento que se extiende por todo el pabellón auricular", "Ausencia total de dolor y nada de hinchazón"], "Fase inflamatoria o de limpieza.", "Entwurf"],
        ["¿Por qué la joya inicial necesita longitud extra?", ["Porque el canal recién perforado puede hincharse", "Para que el cliente pueda cambiar la joya más fácilmente", "Para que el canal de la perforación se dilate", "Porque las barras cortas se expulsan antes"], "Unos 4 mm de longitud extra.", "S. 74"],
        ["¿Cómo se llama el tejido nuevo y delicado del canal de la perforación?", ["Tejido de granulación", "Tejido epitelial", "Tejido cicatricial", "Tejido cartilaginoso"], "Más tarde se convierte en tejido cicatricial.", "S. 50"],
        ["¿Qué es la epitelización?", ["Las células migran desde el borde de la herida y esta se hace más pequeña", "La fase inflamatoria con enrojecimiento y secreción", "La formación de hipergranulación", "La joya incrustándose en el tejido"], "También se llama fase de regeneración.", "S. 50"],
        ["¿Cuándo debe ir el cliente al médico si no hay epitelización?", ["Pasados entre 10 y 14 días", "Pasados entre 3 y 4 días", "Pasadas entre 4 y 6 semanas", "No antes de 3 meses"], "Si pasados entre 10 y 14 días no hay epitelización, algo va mal en la cicatrización. Debe valorarlo un médico.", "S. 50"],
        ["¿De qué está revestido por dentro un canal de perforación ya cicatrizado?", ["De epidermis (epitelio)", "De cartílago", "De tejido de granulación", "De tejido graso"], "La epidermis crece desde el borde hacia el interior del canal.", "S. 50"],
        ["¿Cuánto dura aproximadamente la fase inflamatoria?", ["Aproximadamente de 1 a 4 días", "Unas 2 a 3 semanas", "Unos 3 meses", "Solo unas horas"], "Después predomina la formación de tejido nuevo.", "Ergänzung"],
        ["Como máximo, ¿qué resistencia alcanza el tejido cicatricial en comparación con la piel sana?", ["Alrededor del 80 por ciento de la resistencia original a la tracción", "El doble de resistencia que la piel sana", "La misma resistencia ya a las 2 semanas", "Alrededor del 20 por ciento, incluso al cabo de un año"], "La remodelación dura meses; por eso la joya solo se cambia tras la cicatrización completa.", "Ergänzung"],
        ["¿Las fases de la cicatrización se suceden de forma estrictamente consecutiva?", ["No, se solapan de forma gradual", "Sí, cada una empieza solo cuando acaba la anterior", "Sí, con una pausa de unos 2 días", "Solo hay una única fase"], "Ver la línea de tiempo.", "Ergänzung"]
      ]
    },
    {
      titel: "Quién cicatriza peor",
      seite: "S. 50",
      inhalt: [
        { typ: "text", text: "Los fumadores, las personas con alcoholismo y los diabéticos forman parte de los grupos de riesgo: en ellos, las complicaciones en el proceso de cicatrización aparecen antes." },
        { typ: "foto", id: "pexels-6823478", text: "Enfermedades como la diabetes pueden retrasar notablemente la cicatrización tras un piercing." },
        { typ: "text", text: "Según el libro del curso, las posibles causas de un sangrado persistente son la diabetes, la debilidad del tejido conjuntivo o una enfermedad hemorrágica (hemofilia). En ese caso, hay que acudir al médico." },
        { typ: "ergaenzung", text: "Lo más frecuente es que el sangrado se prolongue cuando el cliente toma medicamentos anticoagulantes (por ejemplo, AAS) o tiene un trastorno de la coagulación. La diabetes, sobre todo, retrasa la cicatrización y aumenta el riesgo de infección." },
        { typ: "praxis", text: "El formulario de consentimiento pregunta por enfermedades y medicamentos. Lee esos datos antes de perforar, no después, y habla abiertamente de los factores de riesgo." }
      ],
      fragen: [
        ["¿Qué grupos tienen un mayor riesgo de complicaciones en la cicatrización?", ["Fumadores, personas con alcoholismo y diabéticos", "Deportistas y personas con piel seca", "Personas con fiebre del heno", "Menores de 25 años"], "En ellos, las complicaciones aparecen antes.", "S. 50"],
        ["¿Qué causas de sangrado persistente menciona el libro del curso?", ["Diabetes, debilidad del tejido conjuntivo o una enfermedad hemorrágica", "Una alergia al níquel", "Una joya demasiado corta", "El cuidado con solución salina"], "En ese caso, acudir al médico.", "S. 50"],
        ["Caso: Un cliente indica que tiene diabetes. ¿Qué es lo correcto?", ["Le informo del mayor riesgo en la cicatrización antes de perforar", "Solo perforo con PTFE; así no hay riesgo", "La diabetes no influye en el piercing", "Duplico la longitud extra"], "Los diabéticos forman parte de los grupos de riesgo.", "S. 50"]
      ]
    }
  ],
  uebung: [
    "Dibuja un corte transversal de la piel con las tres capas y un canal de perforación.",
    "Clasifica diez piercings del módulo 8 según el tipo de tejido: cartílago, tejido blando o mucosa.",
    "Practica con una linterna a reconocer los vasos sanguíneos de tu propia oreja."
  ]
});
