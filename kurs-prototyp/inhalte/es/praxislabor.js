/* Laboratorio de práctica: ejercicios en el modelo de práctica de silicona con autocontrol.
   Base: procedimiento del módulo 09 (pasos 1–26, libro del curso págs. 111–112), listas de control del módulo 05 y el ejercicio del módulo 08
   («Practica en la oreja de silicona: marcar la zona, colocar la pinza, posicionar la cánula (sin perforar)»).
   Aquí nunca se perfora: eso queda reservado para el día de práctica bajo supervisión.
   Formato: { id, titel, modul (referencia), material: [...], schritte: [...], kontrolle: [...] } */
window.KURS = window.KURS || { module: [] };
window.KURS.labor = {
  einleitung: "Aquí practicas los movimientos que necesitarás el día de práctica. La parte 1 son ejercicios en seco sin perforar: en el modelo de práctica de silicona, en papel y en el puesto de trabajo. En la parte 2, unos clips te muestran cómo se perfora; con el paquete Completo, allí perforas tú mismo la oreja de silicona con el kit de práctica. Cada ejercicio tiene un autocontrol. Marca solo lo que de verdad hayas conseguido. Lleva la plantilla de práctica rellenada al día de práctica.",
  sicherheit: [
    "En los ejercicios en seco no se perfora. Solo perforas la oreja de silicona con el kit de práctica del paquete Completo. Nunca perforas a personas ni a animales; eso lo aprendes el día de práctica bajo supervisión.",
    "Usa las cánulas solo como ejercicio en seco, con el capuchón protector puesto. Las cánulas usadas o destapadas van de inmediato al contenedor para objetos punzantes.",
    "El curso online y el laboratorio de práctica no sustituyen la formación práctica supervisada."
  ],
  material: "Modelo de práctica de silicona (por ejemplo, una oreja de silicona o piel de práctica de un proveedor especializado en material de piercing y tatuaje; el paquete Completo incluye un kit de práctica), marcador cutáneo desechable, regla con escala milimétrica, pinza, cánula con capuchón protector, empapador desechable, guantes y la plantilla de práctica para imprimir.",
  aufgaben: [
    {
      id: "arbeitsplatz",
      titel: "Montar el puesto de trabajo",
      modul: 5,
      material: ["Empapador desechable", "Todo lo de la lista de control «Puesto de trabajo antes de cada cliente» (en la medida en que lo tengas; si no, sustitutos con etiqueta)"],
      schritte: [
        "Lavarse las manos y secarlas por completo; quitarse las joyas de manos y antebrazos.",
        "Cubrir la superficie de trabajo con el empapador desechable.",
        "Preparar todo lo de la lista de control «Puesto de trabajo antes de cada cliente» sin mirar la lista.",
        "En cada envase de material estéril, practicar la revisión: envase intacto, indicador virado, plazo de almacenamiento respetado.",
        "Hacer una foto desde arriba y compararla con la lista de control. Repetir tres veces."
      ],
      kontrolle: [
        "En el tercer montaje no faltaba nada de la lista de control.",
        "El contenedor para objetos punzantes está al alcance.",
        "No hay nada sobre una superficie sin proteger.",
        "De cada envase de material estéril puedo decir en qué me he fijado."
      ]
    },
    {
      id: "haende",
      titel: "Preparar las manos y ponerse los guantes",
      modul: 5,
      material: ["Desinfectante de manos", "Guantes desechables de tu talla"],
      schritte: [
        "Uñas cortas, sin esmalte, ninguna joya en manos y antebrazos.",
        "Desinfectar las manos como se describe en el módulo 05; el tiempo de actuación figura en el desinfectante.",
        "Esperar a que las manos estén completamente secas.",
        "Ponerse los guantes sin tocar el exterior con la mano desnuda más de lo necesario.",
        "Quitarse los guantes sin que el exterior toque la piel y desecharlos. Después, desinfectarse las manos."
      ],
      kontrolle: [
        "Tenía las manos secas antes de ponerme los guantes.",
        "He leído el tiempo de actuación en la etiqueta y lo he respetado.",
        "Al quitármelos, el exterior no me ha tocado la piel.",
        "Puedo explicar por qué no basta con cambiar de guantes sin desinfectarse las manos."
      ]
    },
    {
      id: "anzeichnen-papier",
      titel: "Marcar sobre papel",
      modul: 9,
      material: ["Plantilla de práctica (página 1)", "Marcador cutáneo desechable o rotulador fino", "Regla"],
      schritte: [
        "Imprimir la plantilla de práctica a tamaño original (100 %, no «ajustar a la página»). El segmento de control debe medir exactamente 100 mm.",
        "En cada fila, medir el par de puntos indicado y copiarlo a la derecha sobre la línea.",
        "En el ejercicio de simetría, reflejar los puntos de la izquierda en el lado derecho: misma distancia a la línea central, misma altura.",
        "Solo cuando todo esté dibujado, medir y anotar la desviación en milímetros."
      ],
      kontrolle: [
        "Mis puntos son pequeños y nítidos, no una mancha grande.",
        "En todos los pares me desvío como máximo 1 mm.",
        "En el ejercicio de simetría, todos los puntos reflejados se desvían como máximo 1 mm.",
        "He anotado las desviaciones en la plantilla."
      ]
    },
    {
      id: "anzeichnen-modell",
      titel: "Marcar en el modelo de práctica",
      modul: 8,
      material: ["Modelo de práctica de silicona", "Marcador cutáneo desechable", "Fichas técnicas del módulo 08"],
      schritte: [
        "Leer las fichas técnicas de lobe, helix y tragus en el módulo 08.",
        "Marcar en el modelo los puntos de entrada y de salida de cada uno de estos piercings (procedimiento, paso 9).",
        "En lobe en ambos lados: marcar los lóbulos izquierdo y derecho a la misma altura y comprobarlo de frente, por ejemplo con una foto.",
        "Pedir a alguien que mire la marca como si fuera el cliente (paso 10) y corregirla si hace falta."
      ],
      kontrolle: [
        "Cada marca coincide con la ficha técnica del módulo 08.",
        "En lobe en ambos lados, los dos puntos están a la misma altura en la foto de frente.",
        "He mostrado la marca y he explicado por qué está ahí.",
        "Sé qué hacer si al cliente no le gusta la marca."
      ]
    },
    {
      id: "klemme-kanuele",
      titel: "Colocar la pinza y posicionar la cánula, sin perforar",
      modul: 8,
      material: ["Modelo de práctica de silicona con la marca del ejercicio 4", "Pinza o tubo receptor", "Cánula con el capuchón protector puesto"],
      schritte: [
        "Ponerse los guantes (ejercicio 2).",
        "Colocar la pinza en la marca (procedimiento, paso 11) de modo que los puntos de entrada y de salida queden en la abertura.",
        "Posicionar la cánula con capuchón en el punto de entrada, en dirección al punto de salida, desde el lado visible (paso 12). No perforar.",
        "Decir en voz alta lo que vendría a continuación: pasos 13 a 19 del módulo 09.",
        "Soltar la pinza, dejar la cánula con capuchón. Repetir cinco veces, también en otras zonas."
      ],
      kontrolle: [
        "Cada vez, las marcas quedaban en la abertura de la pinza.",
        "La cánula apuntaba en línea recta al punto de salida desde el lado visible.",
        "El capuchón protector se ha quedado puesto en la cánula todo el tiempo.",
        "He podido decir los pasos 13 a 19 en el orden correcto."
      ]
    },
    {
      id: "ablauf",
      titel: "Todo el procedimiento de memoria",
      modul: 9,
      material: ["Plantilla de práctica (página 2) o una hoja en blanco"],
      schritte: [
        "Escribir de memoria los 26 pasos del procedimiento del módulo 09.",
        "Compararlos con el módulo 09 y completar en rojo lo que falte.",
        "Repetirlo al día siguiente hasta que todo esté bien sin rojo.",
        "Explicar en voz alta las instrucciones de cuidado (pasos 24 y 25) a otra persona como si fuera tu cliente."
      ],
      kontrolle: [
        "Los 26 pasos son correctos y están en el orden correcto.",
        "Puedo explicar por qué la joya se empuja a través del canal de la perforación y no se tira de ella (paso 16).",
        "He explicado las instrucciones de cuidado sin chuleta."
      ]
    },
    {
      id: "notfall",
      titel: "Simular una emergencia",
      modul: 9,
      material: ["Lista de control «Tras un pinchazo con aguja»", "Módulo 09, lección «Problemas circulatorios y emergencias»"],
      schritte: [
        "Simularlo con una segunda persona: durante la preparación, el «cliente» se pone pálido y dice que se marea. ¿Qué haces, paso a paso?",
        "Después, compararlo con la lección «Problemas circulatorios y emergencias» del módulo 09.",
        "Recitar de memoria la lista de control «Tras un pinchazo con aguja» y comparar."
      ],
      kontrolle: [
        "He reaccionado correctamente sin consultar nada.",
        "Sé dónde están el botiquín de primeros auxilios y el teléfono en mi sala de práctica, y conozco el número de emergencias 112.",
        "He podido recitar completa la lista de control tras un pinchazo con aguja."
      ]
    }
  ]
};

/* Praxisaufgaben für die Module 01–04, 06, 10 und 11 (Trockenübungen, ohne Stechen). Grundlage: die jeweiligen Lektionen.
   Die Modulseite zeigt alle Aufgaben mit passendem „modul“; das Praxislabor zeigt sie nach Modulen sortiert. */
window.KURS.labor.aufgaben = window.KURS.labor.aufgaben.concat([
  {
    "id": "werkzeug-sortieren",
    "titel": "Nombrar y clasificar las herramientas: estéril o limpio",
    "modul": 7,
    "material": [
      "tu material de práctica: cánulas con capuchón, pinza, marcador cutáneo, guantes desechables, empapador desechable",
      "una hoja con dos columnas: «tiene que estar estéril» y «tiene que estar limpio y desinfectado»"
    ],
    "schritte": [
      "Coloca todo sobre el empapador desechable y di en voz alta el nombre de cada pieza.",
      "Lee el calibre en cada envase de cánula y asígnale el grosor de joya que corresponde (lección «Calibre de la cánula y grosor de la joya»).",
      "Clasifica cada pieza en una de las dos columnas de tu hoja.",
      "Compara tus columnas con la lección «¿Estéril o solo limpio?» y corrige lo que esté mal."
    ],
    "kontrolle": [
      "He nombrado bien cada pieza.",
      "He asignado a cada cánula el grosor de joya correcto.",
      "Mi clasificación estéril/limpio coincide con la lección."
    ]
  },
  {
    "id": "pistole-kanuele",
    "titel": "Cánula en lugar de pistola: saber explicarlo",
    "modul": 1,
    "material": [
      "Cánula con capuchón protector",
      "una joya de práctica",
      "móvil para grabar",
      "una segunda persona que escuche"
    ],
    "schritte": [
      "Coloca delante de ti la cánula (con el capuchón puesto) y la joya de práctica.",
      "Explica a quien te escucha, en un minuto como máximo, por qué en el estudio se perfora con una cánula estéril de un solo uso y no con la pistola de perforar orejas. Grábate con el móvil.",
      "Escucha la grabación y compárala con las lecciones «Los motivos» y «Pistola o cánula: qué ocurre en el tejido».",
      "Repite la explicación hasta que puedas decirlo todo sin notas."
    ],
    "kontrolle": [
      "He nombrado los cuatro motivos de la lección: el tejido se desgarra, la pistola no se puede esterilizar, los gérmenes se esparcen por la sala, la joya inicial no es adecuada.",
      "He explicado qué cambia en el tejido cuando se perfora con cánula.",
      "La cánula ha tenido el capuchón puesto en todo momento."
    ]
  },
  {
    "id": "einverstaendnis-rollenspiel",
    "titel": "Consentimiento informado en un juego de roles",
    "modul": 2,
    "material": [
      "Consentimiento informado (plantilla, impresa)",
      "bolígrafo",
      "una segunda persona como «cliente»"
    ],
    "schritte": [
      "Imprime el modelo de consentimiento de la sección de plantillas.",
      "Representa la conversación informativa: explica con tus palabras las complicaciones de la lección «Información sobre complicaciones» antes de que tu «cliente» firme nada.",
      "Haz que rellene el formulario. Para el ejercicio, usa datos de documento inventados, no reales.",
      "Al final, revisa campo por campo: ¿está todo rellenado, se ha comprobado la edad, está firmado?"
    ],
    "kontrolle": [
      "He explicado las complicaciones antes de la firma.",
      "He comprobado la edad y sé qué más haría falta con menores.",
      "Todos los campos están rellenados y firmados.",
      "En el formulario de práctica no hay datos de documento reales."
    ]
  },
  {
    "id": "anatomie-ohr",
    "titel": "Anatomía de la oreja en el modelo",
    "modul": 3,
    "material": [
      "Oreja de silicona de práctica (o una oreja impresa)",
      "marcador cutáneo desechable",
      "linterna"
    ],
    "schritte": [
      "Con el marcador, marca en la oreja de silicona los puntos de lobe, helix, tragus, conch, rook y daith, y ponles nombre.",
      "Escribe junto a cada punto el tipo de tejido: tejido blando o cartílago.",
      "Compara tus marcas con los tipos de piercing del módulo 08.",
      "Ilumina tu propia oreja desde atrás con la linterna y busca los vasos sanguíneos."
    ],
    "kontrolle": [
      "Los seis puntos están bien marcados (comparados con el módulo 08).",
      "Lo sé: el lobe es tejido blando; los otros cinco puntos están en cartílago.",
      "He reconocido vasos sanguíneos en mi oreja."
    ]
  },
  {
    "id": "schmerz-gespraech",
    "titel": "Conversación con un cliente nervioso",
    "modul": 4,
    "material": [
      "una segunda persona como «cliente»",
      "tu lista de preguntas sobre la tolerancia a la lidocaína (ejercicio del módulo 04)"
    ],
    "schritte": [
      "Tu «cliente» está nervioso y pregunta: «¿Duele?». Responde con sinceridad y explica con calma lo que va a pasar.",
      "El «cliente» pide anestesia. Haz todas las preguntas de tolerancia antes de ofrecer nada.",
      "Explica qué anestesia no puedes usar como piercer.",
      "Intercambiad los papeles y hablad después de lo que os ha tranquilizado."
    ],
    "kontrolle": [
      "No he prometido nada como «Te garantizo que no duele».",
      "He hecho todas las preguntas de tolerancia.",
      "He explicado bien: los anestésicos con receta y los bloqueos nerviosos no son para piercers; eso solo lo hace un médico."
    ]
  },
  {
    "id": "schmuck-messen",
    "titel": "Identificar y medir joyas",
    "modul": 6,
    "material": [
      "Joyas de práctica (labret, aro de bola cautiva, barbell y, si puedes, una herradura)",
      "pie de rey",
      "albarán o certificado de material de la joya, si lo tienes"
    ],
    "schritte": [
      "Ordena tus joyas de práctica por forma y nombra cada pieza.",
      "Mide con el pie de rey el grosor y la longitud (en los aros, el diámetro interior) y anota los valores.",
      "Revisa la indicación del material: ¿figura una norma para implantes, por ejemplo ASTM F136, y hay un certificado?",
      "Para una barra que vaya a ser joya inicial, calcula una longitud extra de unos 4 mm (lección «Longitud extra de la joya inicial»)."
    ],
    "kontrolle": [
      "Cada pieza tiene el nombre de forma correcto.",
      "Grosor y longitud o diámetro interior están medidos y anotados.",
      "He comprobado si hay un certificado de material en vez de fiarme de «titanio» en la etiqueta."
    ]
  },
  {
    "id": "pflege-gespraech",
    "titel": "Conversación sobre los cuidados tras la perforación",
    "modul": 10,
    "material": [
      "Instrucciones de cuidado (plantilla, impresa)",
      "bolígrafo",
      "una segunda persona como «cliente»"
    ],
    "schritte": [
      "Rellena las instrucciones de cuidado para un helix recién perforado: piercing, fecha, joya, producto de cuidado.",
      "Explica los cuidados a tu «cliente» en tres minutos como máximo.",
      "Pide que te pregunte: «¿Cuándo tengo que ir al médico?». Responde sin mirar la hoja.",
      "Compara tus respuestas con la hoja y con la lección «Explicar los cuidados»."
    ],
    "kontrolle": [
      "He nombrado un producto de cuidado apto para cartílago, y no Octenisept.",
      "He dicho el tiempo de cicatrización de los piercings de cartílago según la tabla.",
      "He nombrado las señales de alarma por las que el cliente debe ir al médico enseguida."
    ]
  },
  {
    "id": "preis-kalkulieren",
    "titel": "Calcular el precio y planificar las compras",
    "modul": 11,
    "material": [
      "Lista de material del laboratorio de práctica",
      "precios actuales de una tienda, por ejemplo de nuestro socio Youlindo",
      "calculadora u hoja de cálculo"
    ],
    "schritte": [
      "Anota todo lo que gastas en un piercing de helix: joya, cánula, material desechable, producto de cuidado.",
      "Busca los precios actuales y calcula el coste de material de un piercing.",
      "Calcula tu tiempo de trabajo con asesoramiento, consentimiento y reprocesamiento, y fija una tarifa por hora.",
      "Suma una parte de los gastos fijos (local, aparatos, revisiones, seguro) y compara el resultado con el precio que tenías pensado."
    ],
    "kontrolle": [
      "Están las tres partidas de la lección: material, tiempo de trabajo, gastos fijos.",
      "Conozco mi coste de material para un piercing de helix.",
      "Sé si el precio que tenía pensado cubre los costes."
    ]
  }
]);

/* Materialliste: Material gibt es nur im Paket Komplett per Post (imSet = im Übungsset enthalten, Inhalt laut CLIPS-PRAXISLABOR.md).
   Basis und Praxis kaufen selbst; Partner-Shop: Youlindo. Gezielte Produktlinks lassen sich je Eintrag mit "link" ergänzen. */
window.KURS.labor.einkauf = {
  "titel": "Lista de material",
  "partner": {
    "name": "Youlindo",
    "url": "https://www.youlindo.de"
  },
  "komplett": "Con el paquete Completo te enviamos el set de práctica por correo. Lo marcado con «en el set de práctica» viene incluido; el resto lo consigues tú.",
  "selbst": "Con los paquetes Básico y Práctica, el material lo consigues tú. Las joyas y los accesorios los encuentras en nuestro socio Youlindo; lo que no tengan, lo consigues en tiendas especializadas en material de piercing y tatuaje o en la farmacia.",
  "prototyp": "Con el paquete Completo te enviamos el set de práctica por correo. Con los paquetes Básico y Práctica, el material lo consigues tú, por ejemplo en nuestro socio Youlindo; lo que no tengan, lo consigues en tiendas especializadas en material de piercing y tatuaje o en la farmacia.",
  "knopf": "Ir a la tienda de Youlindo",
  "liste": [
    {
      "name": "Oreja de silicona de práctica o piel de práctica",
      "wofuer": "Marcar, colocar la pinza, apoyar la cánula",
      "module": [
        3,
        8
      ],
      "imSet": true
    },
    {
      "name": "Cánulas intravenosas 18G y 16G, estériles",
      "wofuer": "Manejar la cánula (ejercicio en seco con el capuchón puesto)",
      "module": [
        1,
        7,
        8
      ],
      "imSet": true
    },
    {
      "name": "Contenedor pequeño para objetos punzantes",
      "wofuer": "Desechar las cánulas con seguridad",
      "module": [
        5,
        7
      ],
      "imSet": true
    },
    {
      "name": "Pinza (Snaptile o pinza de gasa)",
      "wofuer": "Sujetar el tejido en la oreja de práctica",
      "module": [
        7,
        8
      ],
      "imSet": true
    },
    {
      "name": "Marcador cutáneo desechable",
      "wofuer": "Marcar los puntos",
      "module": [
        3,
        8,
        9
      ],
      "imSet": true
    },
    {
      "name": "Guantes desechables (nitrilo) y empapadores desechables",
      "wofuer": "Preparar el puesto de trabajo y ponerse los guantes",
      "module": [
        5
      ],
      "imSet": true
    },
    {
      "name": "Joyas de práctica: labret, BCR (aro de bola cautiva), barbell de 38 mm",
      "wofuer": "Identificar, medir y colocar joyas",
      "module": [
        1,
        6,
        7
      ],
      "imSet": true
    },
    {
      "name": "Desinfectante de manos",
      "wofuer": "Preparar las manos",
      "module": [
        5
      ],
      "imSet": false
    },
    {
      "name": "Regla con milímetros",
      "wofuer": "Marcar distancias y simetría",
      "module": [
        8,
        9
      ],
      "imSet": false
    },
    {
      "name": "Pie de rey",
      "wofuer": "Medir el grosor y la longitud de las joyas",
      "module": [
        6
      ],
      "imSet": false
    },
    {
      "name": "Linterna",
      "wofuer": "Reconocer vasos sanguíneos en la oreja",
      "module": [
        3
      ],
      "imSet": false
    },
    {
      "name": "Impresiones de las plantillas (plantilla de práctica, consentimiento, instrucciones de cuidado)",
      "wofuer": "Juegos de roles y registro de prácticas",
      "module": [
        2,
        9,
        10
      ],
      "imSet": false,
      "vorlage": true
    }
  ]
};

/* Ejercicios de perforación en la oreja de silicona: solo se perfora uno mismo con el paquete Completo (kit de práctica de la Academia).
   Todos los demás ven los mismos ejercicios en modo «solo mirar»: clip y procedimiento, sin autocontrol.
   Se perfora exclusivamente en silicona. Procedimiento según el libro del curso págs. 111–112 (pasos 9–19), valores de las fichas técnicas (módulo 08).
   clip: id de un clip en inhalte/clips.js. Si el clip todavía falta, los participantes no ven nada; en el modo de revisión aparece un aviso.
   Lista de rodaje de los clips: CLIPS-PRAXISLABOR.md en la carpeta principal. */
window.KURS.labor.stich = {
  pakete: ["komplett"],
  einleitung: "Con tu kit de práctica, ahora perforas tú mismo: en la oreja de silicona, siguiendo el procedimiento del módulo 09 y las fichas técnicas del módulo 08. Mira primero el clip y después practica. Lleva tu oreja de silicona perforada y el registro de práctica al día de práctica: allí revisaremos juntos tus canales de perforación.",
  zuschauen: "En estos clips ves cómo se perfora: en la oreja de silicona, paso a paso, siguiendo el procedimiento del módulo 09 y las fichas técnicas del módulo 08. Fíjate bien y repite los pasos en voz alta. A perforar tú mismo aprendes el día de práctica bajo supervisión; con el paquete Completo practicas antes en casa con el kit de práctica.",
  sicherheit: [
    "Solo se perfora en la oreja de silicona. Nunca en ti, en otras personas ni en animales, ni siquiera «solo para probar».",
    "Nunca vuelvas a meter las cánulas en el capuchón protector. La aguja de acero va directamente al contenedor para objetos punzantes después de retirarla; el contenedor lleno se cierra bien y se desecha con los residuos generales.",
    "Trabaja con guantes sobre un empapador desechable, sin distracciones y fuera del alcance de los niños. Guarda las cánulas y el contenedor bajo llave.",
    "Si a pesar de todo te pinchas, se aplica la lista de control «Tras un pinchazo con aguja» del módulo 05."
  ],
  set: ["Oreja de silicona", "Cánulas intravenosas 18G y 16G", "Contenedor pequeño para objetos punzantes", "Pinza (Snaptile o pinza de gasa)", "Marcador cutáneo desechable", "Guantes desechables y empapador desechable", "Joyas de práctica: labret, BCR (aro de bola cautiva), barbell de 38 mm", "Tijeras para la vaina de plástico"],
  aufgaben: [
    {
      id: "stich-kanuele",
      titel: "Manejar la cánula con seguridad",
      modul: 7,
      clip: "labor-kanuele",
      clipText: "Sacar la cánula del envase, quitar el capuchón protector y, después de perforar, llevar la aguja de acero directamente al contenedor.",
      material: ["Cánula 18G", "Contenedor para objetos punzantes", "Guantes"],
      schritte: [
        "Colocar el contenedor de forma que lo alcances con la mano de trabajo sin cambiar el agarre.",
        "Sacar la cánula del envase sin tocar la aguja. Retirar el capuchón protector en línea recta y dejarlo a un lado.",
        "Sujetar la cánula por el mango y perforar la silicona (en cualquier sitio, solo para practicar el movimiento).",
        "Retirar la aguja de acero por el mango; la vaina de plástico se queda en la silicona. La aguja, de inmediato al contenedor.",
        "Repetir tres veces hasta que el movimiento, del envase al desecho, salga con fluidez."
      ],
      kontrolle: [
        "No he vuelto a poner el capuchón protector ni una sola vez.",
        "Al retirarla, la aguja ha ido de inmediato al contenedor, nunca a la mesa.",
        "La vaina de plástico se ha quedado en la silicona cada vez."
      ]
    },
    {
      id: "stich-lobe",
      titel: "Perforar un lobe y colocar un labret",
      modul: 9,
      clip: "labor-lobe",
      clipText: "Lobe en la oreja de silicona: marcar, pinza, perforar con 18G, retirar la aguja, recortar la vaina, empujar el labret, enroscar la bola.",
      material: ["Oreja de silicona", "Cánula 18G", "Pinza", "Marcador cutáneo", "Tijeras", "Labret", "Pinza de sujeción"],
      schritte: [
        "Marcar los puntos de entrada y de salida en el lóbulo (paso 9) y comprobar la marca (paso 10).",
        "Colocar la pinza; la marca queda en la ventana (paso 11).",
        "Perforar con decisión hacia el lado visible, es decir, desde delante, donde después irá la bola (paso 12).",
        "Retirar la aguja de acero y desecharla; la vaina de plástico se queda en el canal de la perforación (paso 13).",
        "Recortar un poco la vaina con las tijeras e introducir el labret en ella (pasos 14 y 15).",
        "Empujar el labret a través del canal de la perforación, no tirar (paso 16). Retirar con cuidado el tubito (paso 17).",
        "Tomar la bola, sujetar la joya con la pinza de sujeción y enroscar la bola firmemente (pasos 18 y 19).",
        "Repetir tres veces en distintos puntos del lóbulo."
      ],
      kontrolle: [
        "La salida está como máximo a 1 mm de mi marca trasera.",
        "La barra atraviesa el lóbulo en línea recta, no inclinada.",
        "He empujado la joya, no he tirado de ella.",
        "La bola está bien firme y la placa queda plana por detrás."
      ]
    },
    {
      id: "stich-upperlobe",
      titel: "Upper lobe: tres perforaciones en fila",
      modul: 8,
      clip: "labor-upper-lobe",
      clipText: "Marcar tres puntos de upper lobe a la misma distancia, medirlos y perforarlos uno tras otro.",
      material: ["Oreja de silicona", "Tres cánulas 18G", "Pinza", "Marcador cutáneo", "Calibre o regla", "Tres labrets"],
      schritte: [
        "Marcar tres puntos en la parte superior del lóbulo a la misma distancia y comprobarlos con el calibre.",
        "Solo cuando las distancias sean correctas: perforar cada punto siguiendo el procedimiento del ejercicio anterior y colocarle un labret.",
        "Hacer una foto de frente y evaluar la fila."
      ],
      kontrolle: [
        "Las tres distancias difieren entre sí como máximo 1 mm.",
        "La fila sigue una línea uniforme; ninguno de los puntos se sale.",
        "Cada salida está como máximo a 1 mm de la marca trasera."
      ]
    },
    {
      id: "stich-helix",
      titel: "Helix con BCR (aro de bola cautiva)",
      modul: 8,
      clip: "labor-helix",
      clipText: "Perforar un helix en la oreja de silicona, colocar un aro de bola cautiva y cerrarlo.",
      material: ["Oreja de silicona", "Cánula 18G", "Pinza", "Marcador cutáneo", "Tijeras", "BCR (aro de bola cautiva)", "Pinza para abrir aros y pinza para cerrar aros"],
      schritte: [
        "Marcar el punto en el borde de la oreja (ficha técnica Helix, módulo 08) y fijarlo con la pinza.",
        "Perforar, retirar la aguja y desecharla, recortar la vaina.",
        "Abrir el aro con cuidado con la pinza para abrir aros, introducir un extremo en la vaina y empujarlo a través del canal de la perforación.",
        "Retirar el tubito, colocar la bola y cerrar el aro con la pinza para cerrar aros de modo que la bola encaje firmemente."
      ],
      kontrolle: [
        "El aro queda redondo y sin dobleces; no lo he abierto de más.",
        "La bola encaja firmemente y no se sale al girar el aro.",
        "El canal de la perforación atraviesa en línea recta el cartílago de la oreja de silicona."
      ]
    },
    {
      id: "stich-industrial",
      titel: "Industrial: dos canales de perforación en una línea",
      modul: 8,
      clip: "labor-industrial",
      clipText: "Industrial en la oreja de silicona: marcar los dos puntos de modo que un barbell de 38 mm pase en línea recta y después perforar con 16G.",
      material: ["Oreja de silicona", "Dos cánulas 16G", "Marcador cutáneo", "Barbell de 38 mm"],
      schritte: [
        "Marcar los dos puntos en el borde superior de la oreja (ficha técnica Industrial): cerca de la cabeza y enfrente, en el borde exterior.",
        "Sostener el barbell de prueba sobre las marcas: debe unir ambos puntos en línea recta sin doblar la oreja.",
        "Perforar ambos puntos con la cánula 16G (a mano alzada, como en la ficha técnica). Desechar cada aguja de inmediato.",
        "Pasar el barbell por las dos vainas y enroscar las bolas."
      ],
      kontrolle: [
        "El barbell queda recto y no comprime el pabellón auricular.",
        "Los dos canales de perforación apuntan en la misma dirección; la barra se desliza sin forzar.",
        "He comprobado antes si las marcas encajan con la longitud de la joya."
      ]
    },
    {
      id: "stich-schmuck",
      titel: "Asegurar y cambiar joyas",
      modul: 7,
      clip: "labor-schmuck",
      clipText: "Enroscar una bola con la pinza para bolas y la pinza de sujeción, abrir y cerrar un aro de bola cautiva, cambiar joyas en la oreja de silicona.",
      material: ["Oreja de silicona con canales perforados", "Pinza para bolas", "Pinza de sujeción", "Pinza para abrir aros y pinza para cerrar aros", "Joyas de práctica"],
      schritte: [
        "Tomar una bola con la pinza para bolas y enroscarla en la barra que sujetas con la pinza de sujeción.",
        "Abrir un aro de bola cautiva, sacar la bola, volver a colocarla y cerrar el aro.",
        "En un canal de perforación ya hecho, cambiar el labret por un BCR y viceversa.",
        "Recuerda: con un cliente real, la joya inicial solo se cambia tras la cicatrización completa (módulo 10)."
      ],
      kontrolle: [
        "No se me ha caído ni ha salido disparada ninguna bola.",
        "El aro vuelve a estar redondo después de cerrarlo.",
        "Puedo explicar por qué con un cliente la joya inicial no se cambia pronto."
      ]
    },
    {
      id: "stich-ablauf",
      titel: "Todo el procedimiento en tiempo real",
      modul: 9,
      clip: "labor-ablauf",
      clipText: "El procedimiento completo en la oreja de silicona, desde el puesto de trabajo hasta las instrucciones de cuidado, a velocidad normal.",
      material: ["Kit de práctica completo", "Una segunda persona como «cliente»", "Formulario de consentimiento e instrucciones de cuidado (plantillas)"],
      schritte: [
        "Recorre el procedimiento del módulo 09 del paso 4 al 25: la segunda persona rellena el formulario de consentimiento y tú preparas el puesto de trabajo.",
        "Se perfora en la oreja de silicona colocada junto a la persona; todo lo demás (conversación, mostrar la marca, instrucciones de cuidado) lo haces con ella.",
        "Pide a la persona que controle el reloj y que al final diga qué le ha llamado la atención."
      ],
      kontrolle: [
        "No me he saltado ningún paso y he respetado el orden.",
        "Entre medias he preguntado cómo se encontraba (circulación).",
        "He explicado las instrucciones de cuidado de palabra y las he entregado por escrito."
      ]
    }
  ]
};
