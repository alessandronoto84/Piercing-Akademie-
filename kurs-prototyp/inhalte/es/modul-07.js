/* Módulo 07 – Herramientas e instrumental. Fuente: libro del curso cap. 9 (págs. 64–73), estéril/limpio pág. 35.
   Medidas de las cánulas según el fabricante B. Braun (1,3 / 1,7 / 2,2 mm); el libro indica 1,2 / 1,6 / 2,1 mm (ver KURS-RECHERCHE.md).
   Estándar de la Academia (confirmado el 24.10.2026): cánula 18G para joyas de 1,2 mm, cánula 16G para joyas de 1,6 mm. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 7,
  titel: "Herramientas e instrumental",
  quelle: "Libro del curso cap. 9, págs. 64–73",
  ziel: "Conoces las herramientas del piercer, sabes para qué se usa cada una y distingues lo que debe ser estéril de lo que solo debe estar limpio.",
  lektionen: [
    {
      titel: "Cánulas",
      seite: "S. 64",
      inhalt: [
        { typ: "text", text: "Se perfora con cánulas intravenosas (catéteres, «Braunüle»), principalmente en tres calibres. El color del conector indica el calibre. Cuanto mayor es el número gauge (G), más fina es la cánula." },
        { typ: "grafik", id: "kanuele" },
        { typ: "tabelle", kopf: ["Calibre", "Diámetro exterior", "Color"], zeilen: [["18G", "1,3 mm", "Verde"], ["16G", "1,7 mm", "Gris"], ["14G", "2,2 mm", "Naranja"]] },
        { typ: "foto", id: "kanuelen", text: "Cánulas intravenosas en sus colores de identificación. Libro del curso pág. 64." },
        { typ: "ergaenzung", text: "Los diámetros corresponden a los datos del fabricante para cánulas intravenosas. En el libro del curso figuran 1,2 / 1,6 / 2,1 mm; 1,2 y 1,6 mm son los grosores de joya que la Academia perfora con 18G y 16G respectivamente (siguiente lección)." }
      ],
      fragen: [
        ["¿Con cuántos calibres se trabaja principalmente al perforar?", ["Con tres", "Con dos", "Con cinco", "Con uno"], "18G, 16G y 14G.", "S. 64"],
        ["¿Qué significa un número gauge mayor?", ["Una cánula más fina", "Una cánula más gruesa", "Una cánula más larga", "Una cánula más corta"], "18G 1,3 mm, 14G 2,2 mm.", "S. 64"],
        ["¿Cómo reconoces rápidamente el calibre?", ["Por el color del conector", "Por la longitud de la aguja", "Por el color del envase", "Por el bisel de la punta"], "Verde, gris, naranja.", "S. 64"],
        ["¿Qué parte de la cánula intravenosa queda en el canal tras la perforación?", ["La vaina de plástico", "La aguja de acero", "El mango con el conector", "La aguja y la vaina juntas"], "Guía la joya.", "S. 112"]
      ]
    },
    {
      titel: "Calibre de la cánula y grosor de la joya",
      seite: "Ergänzung",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Tanto las cánulas como las joyas se indican en gauge, pero el mismo número no significa los mismos milímetros. Quien los confunde pide joyas equivocadas." },
        { typ: "tabelle", kopf: ["Gauge", "Cánula (diámetro exterior)", "Joya (grosor de la barra)"], zeilen: [
          ["20G", "–", "0,8 mm"], ["18G", "1,3 mm", "1,0 mm"], ["16G", "1,7 mm", "1,2 mm"], ["14G", "2,2 mm", "1,6 mm"], ["12G", "–", "2,0 mm"]
        ] },
        { typ: "tabelle", kopf: ["Grosor de la joya", "Cánula de la Academia", "Diámetro exterior de la cánula"], zeilen: [
          ["1,2 mm (en el comercio, 16G)", "18G (verde)", "1,3 mm"],
          ["1,6 mm (en el comercio, 14G)", "16G (gris)", "1,7 mm"],
          ["Príncipe Alberto (BCR)", "14G (naranja)", "2,2 mm"],
          ["Lobe, solo si se desea un túnel", "14G (naranja)", "2,2 mm"]
        ] },
        { typ: "grafik", id: "gauge" },
        { typ: "merke", text: "Estándar de la Academia: cánula 18G para joyas de 1,2 mm, cánula 16G para joyas de 1,6 mm. La Academia usa la cánula 14G solo para el Príncipe Alberto (ficha técnica pág. 98) y para el Lobe cuando se desea un túnel; en los demás casos, el Lobe se perfora con 18G. Es decir, la cánula lleva un número gauge que corresponde a un calibre más fino que el de la joya, pero su diámetro es algo mayor." },
        { typ: "liste", punkte: [
          "Cuanto mayor es el número gauge, más fino: esto vale tanto para cánulas como para joyas.",
          "La joya se introduce en la vaina de plástico de la cánula. Por eso la cánula es algo más gruesa que la joya que pasa por ella.",
          "Riesgo de confusión al hacer pedidos: una joya de 1,2 mm se vende como 16G, pero se perfora con la cánula 18G."
        ] },
        { typ: "praxis", text: "Prueba cada combinación de cánula y joya inicial antes en el modelo de práctica, no directamente en el cliente." },
        { typ: "ergaenzung", text: "Grosores de joya según tablas habituales de distribuidores, medidas de cánulas según datos del fabricante. Las combinaciones son el estándar de la Piercing Akademie." }
      ],
      fragen: [
        ["¿Qué grosor de barra tiene una joya de 16G?", ["1,2 mm", "1,7 mm", "1,6 mm", "1,0 mm"], "En cambio, una cánula 16G mide 1,7 mm.", "Ergänzung"],
        ["¿Qué grosor de barra tiene una joya de 14G?", ["1,6 mm", "2,2 mm", "1,2 mm", "2,0 mm"], "Una cánula 14G mide 2,2 mm.", "Ergänzung"],
        ["¿Qué cánula usa la Academia para joyas de 1,2 mm?", ["18G", "16G", "14G", "20G"], "Cánula 18G con 1,3 mm de diámetro exterior.", "Akademie"],
        ["¿Qué cánula usa la Academia para joyas de 1,6 mm?", ["16G", "18G", "14G", "12G"], "Cánula 16G con 1,7 mm de diámetro exterior.", "Akademie"],
        ["Caso: pides joyas iniciales de 16G. ¿Con qué cánula las perforas?", ["Con la cánula 18G, porque la joya 16G mide 1,2 mm", "Con la cánula 16G, mismo número", "Con la cánula 14G, un calibre más gruesa", "Con la cánula 20G"], "El gauge de la joya y el de la cánula no corresponden a los mismos milímetros.", "Akademie"],
        ["¿Con qué cánula perfora la Academia un Lobe normal?", ["18G", "16G", "14G", "Punch de biopsia"], "14G solo si se desea un túnel.", "S. 74"],
        ["¿Cuándo usas la cánula 14G en el Lobe?", ["Solo si se desea un túnel", "En todos los Lobe", "En clientes con lóbulo grueso", "En un Upper Lobe"], "En los demás casos, la Academia perfora el Lobe con 18G.", "S. 74"],
        ["¿Con qué cánula perfora la Academia el Príncipe Alberto?", ["14G", "16G", "18G", "12G"], "Según la ficha técnica; la joya inicial es un BCR.", "S. 98"],
        ["¿Corresponde 16G a los mismos milímetros en cánula y en joya?", ["No, la cánula 16G (1,7 mm) es más gruesa que la joya 16G (1,2 mm)", "Sí, ambas miden 1,6 mm", "No, la cánula 16G es más fina que la joya 16G", "Sí, el gauge es una norma uniforme"], "Las cánulas y las joyas se miden de forma distinta.", "Ergänzung"],
        ["¿Por qué la cánula es más gruesa que la joya?", ["Porque la joya se introduce en la vaina de plástico", "Para que el canal sea más grande que la joya y cicatrice antes", "Para que salga menos sangre", "Porque las cánulas gruesas duelen menos"], "Ver módulo 9, La perforación.", "Ergänzung"],
        ["En las joyas: cuanto mayor es el número gauge …", ["… más fina es la barra", "… más gruesa es la barra", "… más larga es la barra", "… más grande es la bola"], "Igual que en las cánulas.", "Ergänzung"],
        ["¿Dónde pruebas una nueva combinación de cánula y joya?", ["Antes, en el modelo de práctica", "Directamente en el primer cliente", "En tu propia oreja", "En ningún sitio, bastan las tablas"], "No directamente en el cliente.", "Ergänzung"]
      ]
    },
    {
      titel: "Punches de biopsia",
      seite: "S. 65",
      inhalt: [
        { typ: "text", text: "Los punches de biopsia (biopsy punch) para la piel están diseñados para un solo uso y se ofrecen en distintos tamaños o diámetros. Al perforar con el punch, el tejido cutáneo sufre solo un traumatismo leve, lo que permite una cicatrización rápida de la herida." },
        { typ: "text", text: "Se utilizan principalmente para dermal anchors, túneles y Conch." },
        { typ: "foto", id: "biopsiestanze", text: "Punch de biopsia (biopsy punch). Libro del curso pág. 65." }
      ],
      fragen: [
        ["¿Para qué están diseñados los punches de biopsia?", ["Para perforar la piel una sola vez", "Para varios usos tras el autoclave", "Para dilatar canales ya cicatrizados", "Para acortar la vaina de plástico"], "Disponibles en distintos diámetros.", "S. 65"],
        ["¿Para qué se usan principalmente los punches de biopsia?", ["Dermal anchor, túnel y Conch", "Lobe, Helix y Tragus", "Lengua y frenillo labial", "Ombligo y pezón"], "Perforan la piel una sola vez.", "S. 65"],
        ["¿Cuánto se traumatiza el tejido con el punch?", ["Solo levemente", "Más que con una cánula", "Nada, porque no se extrae tejido", "Tanto que siempre hay que suturar"], "Así es posible una cicatrización rápida.", "S. 65"]
      ]
    },
    {
      titel: "Pinzas y tubo receptor",
      seite: "S. 65, 68",
      inhalt: [
        { typ: "video", id: "instrumente", text: "Pinza de piercing, cánula intravenosa («Braunüle»), tubo receptor y pinza para bolas sobre un campo estéril.", schleife: true },
        { typ: "text", text: "Las pinzas de piercing sujetan la zona que se va a perforar para que la piel se mantenga en posición durante la perforación. Hay distintas pinzas para distintos piercings, por ejemplo Snaptile, pinza de gasa, pinza para septum, pinza para tragus o pinza para lengua. Cuál es la adecuada lo indica la ficha técnica correspondiente (módulo 8)." },
        { typ: "text", text: "Algunos piercings no se pueden hacer con pinza. En los piercings del interior de la oreja, por ejemplo Rook y Daith, se utiliza el tubo receptor (receiving tube). Evita que la cánula lesione el tejido circundante." },
        { typ: "galerie", titel: "Del libro del curso", bilder: [["piercingzange", "Pinzas de piercing"], ["nadelauffangrohr", "Tubo receptor"]], text: "Libro del curso págs. 65 y 68." },
        { typ: "praxis", text: "Algunos piercings, como el Helix o el ombligo, también pueden hacerse a mano alzada. Eso requiere una mano segura; como principiante, es mejor que trabajes con pinza." }
      ],
      fragen: [
        ["¿Para qué sirve una pinza de piercing?", ["Sujeta la zona para que la piel se mantenga en posición al perforar", "Sujeta la joya mientras se enrosca la bola", "Recibe la cánula en Rook y Daith", "Abre los aros de bola cautiva"], "Hay muchas pinzas para distintos piercings.", "S. 65"],
        ["¿Para qué usas un tubo receptor?", ["Para zonas como Rook y Daith, donde no cabe una pinza", "Para acortar la cánula", "Para dilatar el canal de la perforación", "Para guardar agujas usadas"], "Protege el tejido circundante.", "S. 68"],
        ["¿Dónde se indica qué pinza corresponde a un piercing?", ["En la ficha técnica del piercing", "En el envase de la cánula", "En el plan marco de higiene", "En el formulario de consentimiento"], "Ver módulo 8.", "S. 74–110"]
      ]
    },
    {
      titel: "Herramientas auxiliares",
      seite: "S. 66–69, 73",
      inhalt: [
        { typ: "tabelle", kopf: ["Herramienta", "Para qué"], zeilen: [
          ["Cónico de inserción", "Barra puntiaguda que se ensancha poco a poco; dilatar con cuidado canales ya cicatrizados o abrir canales que se han cerrado"],
          ["Pinza de sujeción", "Sujeta la joya colocada mientras se enrosca la bola"],
          ["Tijeras", "Acortan el tubito de plástico de la cánula tras la perforación para que la joya entre con más facilidad"],
          ["Pinza para bolas", "Sujeta las bolas del piercing y facilita enroscarlas"],
          ["Calibre", "Mide las joyas y ajusta la posición del piercing"],
          ["Pinza para abrir aros y pinza para cerrar aros", "Abren o cierran los aros de bola cautiva (BCR) para retirar o colocar la bola"],
          ["Linterna (luz verde)", "Ilumina por transparencia, por ejemplo, la oreja para ver los vasos sanguíneos"],
          ["Alicate de corte mini", "Corta la joya cuando una bola ya no se puede desenroscar"]
        ] },
        { typ: "achtung", text: "Con el cónico de inserción, procede siempre con mucho cuidado para evitar lesiones." },
        { typ: "galerie", titel: "Las herramientas auxiliares", bilder: [["einfuehrhilfe", "Cónico de inserción"], ["klemmzange", "Pinza de sujeción"], ["schere", "Tijeras"], ["kugelgreifer", "Pinza para bolas"], ["messschieber", "Calibre"], ["ringoeffnungszange", "Pinza para abrir aros"], ["ringschliesszange", "Pinza para cerrar aros"], ["taschenlampe", "Linterna (luz verde)"], ["seitenschneider", "Alicate de corte mini"]], text: "Libro del curso págs. 66–69 y 73." }
      ],
      fragen: [
        ["¿Para qué sirven las tijeras al perforar?", ["Para acortar el tubito de plástico tras la perforación", "Para acortar la joya inicial", "Para cortar el vello en la zona de perforación", "Para abrir el envase estéril"], "Así la joya entra con más facilidad.", "S. 67"],
        ["¿Qué tienes en cuenta con el cónico de inserción?", ["Proceder con mucho cuidado para evitar lesiones", "Usarlo solo en canales recién hechos", "Girarlo con presión hasta que pase", "Usarlo sin lubricante"], "Dilatar con cuidado canales cicatrizados.", "S. 66"],
        ["¿Con qué cortas una joya cuya bola no se suelta?", ["Con el alicate de corte mini", "Con la pinza para abrir aros", "Con la pinza para bolas", "Con las tijeras"], "La joya queda inutilizada.", "S. 73"],
      ]
    },
    {
      titel: "Material desechable",
      seite: "S. 69–72",
      inhalt: [
        { typ: "liste", titel: "Nuevo para cada cliente", punkte: [
          "Marcador cutáneo desechable (rotulador quirúrgico): marcar los puntos de entrada y salida antes de perforar",
          "Toallita con alcohol: desinfectar la zona que se va a perforar",
          "Maquinilla de afeitar desechable: eliminar en lo posible el vello de la zona, porque el vello siempre contiene gérmenes y puede perjudicar la cicatrización",
          "Guantes desechables: trabajar siempre con el cliente con las manos desinfectadas y guantes desechables (estériles)",
          "Mascarilla: por tu propia seguridad y la del cliente",
          "Empapadores desechables: protectores de un solo uso como base en el puesto de trabajo"
        ] },
        { typ: "text", text: "En la bandeja de instrumental preparas tus herramientas e instrumentos." },
        { typ: "galerie", titel: "Material desechable y puesto de trabajo", bilder: [["hautmarker", "Marcador cutáneo desechable"], ["alkoholtupfer", "Toallita con alcohol"], ["einmalrasierer", "Maquinilla desechable"], ["handschuhe", "Guantes desechables"], ["mundschutz", "Mascarilla"], ["einmalunterlage", "Empapador desechable"], ["instrumentenschale", "Bandeja de instrumental"]], text: "Libro del curso págs. 69–72." },
        { typ: "text", text: "Existen innumerables herramientas, accesorios y modelos; el libro del curso muestra una selección de los más importantes." }
      ],
      fragen: [
        ["¿Por qué se elimina el vello de la zona de perforación?", ["El vello contiene gérmenes y puede perjudicar la cicatrización", "Para que el marcador se adhiera mejor", "Para que el cliente sienta menos dolor", "Porque si no la pinza resbala"], "Para eso están las maquinillas desechables.", "S. 70"],
        ["¿Con qué marcas los puntos de entrada y salida?", ["Con un marcador cutáneo desechable", "Con un bolígrafo desinfectado", "Con un lápiz kohl", "Con solución yodada"], "Rotulador quirúrgico.", "S. 69"],
        ["¿Con qué desinfectas la zona que se va a perforar?", ["Con una toallita con alcohol", "Con solución salina", "Con Octenisept en cada piercing", "Con desinfectante de superficies"], "Ver material desechable.", "S. 70"],
        ["¿Cómo trabajas con el cliente?", ["Siempre con manos desinfectadas y guantes desechables (estériles)", "Con guantes desechables, sin necesidad de desinfectar las manos", "Con manos desinfectadas, sin guantes", "Con guantes reutilizables desinfectados"], "Los guantes no sustituyen la desinfección de manos: primero desinfectar, luego ponerse los guantes.", "S. 71"]
      ]
    },
    {
      titel: "¿Estéril o solo limpio?",
      seite: "S. 35",
      inhalt: [
        { typ: "merke", text: "Todo lo que lesiona la piel o entra en contacto con sangre (agujas, portaagujas, pinzas) debe ser estéril: como material estéril de un solo uso o esterilizado en el autoclave." },
        { typ: "foto", id: "pexels-305566", text: "Los instrumentos en una bandeja abierta están limpios, pero no estériles." },
        { typ: "text", text: "Las herramientas sin contacto directo con la piel, como la pinza para bolas o las tijeras, se limpian en el baño de ultrasonidos y se desinfectan en un baño desinfectante. Las agujas de cánula usadas van de inmediato al contenedor para objetos punzantes." }
      ],
      fragen: [
        ["¿Qué debe ser estéril?", ["Todo lo que lesiona la piel o toca sangre, p. ej. agujas y pinzas", "Solo las cánulas", "También la pinza para bolas y las tijeras", "Solo las joyas iniciales"], "Las herramientas sin contacto con la piel se desinfectan.", "S. 35"],
        ["¿Cómo se reprocesa una pinza para bolas?", ["Se limpia en el baño de ultrasonidos y se desinfecta", "Es material desechable", "Solo se limpia con alcohol", "No necesita reprocesamiento"], "Sin contacto directo con la piel.", "S. 35"],
        ["¿Adónde va una aguja de cánula usada?", ["Al contenedor para objetos punzantes", "A la bandeja de instrumental para reprocesarla", "Al cubo de basura con pedal", "A su capuchón y luego a la basura"], "Justo después de la perforación.", "S. 27"]
      ]
    }
  ],
  uebung: [
    "Prepara tu set de instrumental en la bandeja de instrumental y nombra cada pieza.",
    "Asigna a cada calibre de cánula su color sin mirar.",
    "Clasifica tus herramientas en dos grupos: debe ser estéril / debe estar limpia y desinfectada."
  ]
});
