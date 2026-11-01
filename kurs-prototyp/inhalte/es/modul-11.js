/* Módulo 11 – Abrir un estudio (nuevo, sin capítulo en el libro del curso). Borrador; fuentes y puntos abiertos, ver KURS-RECHERCHE.md, secciones 3, 4 y 6. */
window.KURS = window.KURS || { module: [] };
KURS.module.push({
  nr: 11,
  titel: "Abrir un estudio",
  quelle: "Nota de la Academia basada en el libro del curso (págs. 36–39) y en las hojas informativas de las oficinas locales de salud pública (Gesundheitsämter)",
  entwurf: true,
  ziel: "Sabes qué pasos hay que dar antes de empezar con tu propia oferta de piercing: registro de la actividad comercial, oficina local de salud pública (Gesundheitsamt), plan de higiene, documentación, seguro, precios y compras.",
  lektionen: [
    {
      titel: "Actividad comercial y autoridades",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "En Alemania no existe una formación regulada para piercers ni un sello de calidad reconocido oficialmente. Si puedes ofrecer piercings, y con qué requisitos, lo deciden las autoridades locales. Este curso te muestra lo que importa; no sustituye la consulta con las autoridades de tu localidad." },
        { typ: "schritte", punkte: [
          "Registrar la actividad comercial en la oficina de comercio (Gewerbeamt) competente.",
          "Contactar con la oficina local de salud pública (Gesundheitsamt): preguntar por los requisitos de los locales y de higiene, y pedir el plan marco de higiene para estudios de piercing (libro del curso pág. 36).",
          "En Niedersachsen (Baja Sajonia) rige un reglamento de higiene propio para el piercing (Hygieneverordnung); la oficina local de salud pública supervisa los estudios sobre esta base. Lee la versión vigente y pide que te confirmen los requisitos."
        ] }
      ],
      fragen: [
        ["¿Dónde registras tu actividad comercial?", ["En la oficina de comercio (Gewerbeamt) competente", "En la oficina local de salud pública (Gesundheitsamt)", "En la cámara de artesanía (Handwerkskammer)", "En la oficina de Hacienda (Finanzamt)"], "Primer paso antes de empezar.", "Entwurf"],
        ["¿A quién le pides el plan marco de higiene para tu estudio?", ["A la oficina local de salud pública", "A la oficina de comercio", "A la mutua de accidentes laborales (Berufsgenossenschaft)", "A la cámara de comercio e industria (IHK)"], "Recomendación del libro del curso.", "S. 36"],
        ["¿Existe en Alemania una formación de piercer regulada por el Estado?", ["No", "Sí, como formación profesional de tres años", "Sí, a través de la cámara de artesanía", "Solo en Niedersachsen"], "El certificado de la Academia es un justificante de participación y formación práctica.", "Entwurf"],
        ["¿Quién supervisa los estudios de piercing en Niedersachsen según el reglamento de higiene?", ["La oficina local de salud pública", "La oficina de comercio", "La mutua de accidentes laborales", "La cámara de artesanía"], "El cumplimiento del reglamento de higiene lo supervisa la oficina local de salud pública. La oficina de comercio solo es competente para el registro.", "Entwurf"]
      ]
    },
    {
      titel: "Planificar los locales",
      seite: "S. 25–26, 38",
      inhalt: [
        { typ: "video", id: "studio-raum", text: "Sala de tratamiento con camilla lavable, lavamanos y autoclave.", schleife: true },
        { typ: "liste", punkte: [
          "Puesto de trabajo separado de la sala de espera mediante obra o, como mínimo, con un tabique; lo ideal es una sala propia.",
          "Lavamanos con agua corriente y dispensadores de desinfectante, jabón líquido y toallas desechables, que se pueda usar sin contacto de las manos y sin salpicar el puesto de trabajo.",
          "Camilla y muebles con superficie lisa y lavable.",
          "Aseo independiente con lavamanos, dispensadores, papelera y contenedor higiénico.",
          "Botiquín de primeros auxilios y números de emergencia bien visibles."
        ] },
        { typ: "grafik", id: "studio3d" },
        { typ: "praxis", text: "Planifica los recorridos: desde la zona de reprocesamiento (sucia) hasta el almacén de material estéril (limpio), los instrumentos limpios y los usados no deben cruzarse." }
      ],
      fragen: [
        ["¿Cómo se separa el puesto de trabajo de la sala de espera?", ["Mediante obra o, como mínimo, con un tabique", "Con una cortina", "Con una marca en el suelo", "Con un biombo forrado de tela"], "Según las hojas informativas y el libro del curso.", "S. 26"],
        ["¿Qué debe haber en el lavamanos?", ["Dispensadores de desinfectante, jabón líquido y toallas desechables", "Una pastilla de jabón y una toalla de tela", "Solo un dispensador de desinfectante", "Un cepillo de uñas y una toalla"], "Que se pueda usar sin contacto de las manos.", "S. 25"]
      ]
    },
    {
      titel: "Plan de higiene y documentación",
      seite: "S. 36–39, 46–47",
      entwurf: true,
      inhalt: [
        { typ: "liste", titel: "Lo que llevas por escrito", punkte: [
          "Plan marco de higiene con plan de limpieza y desinfección (ejemplos en el libro del curso págs. 37–39; acordarlo con la oficina local de salud pública)",
          "Material estéril: cada lote con fecha de esterilización y número de lote",
          "Registros de control del autoclave: pruebas diarias, pruebas de esporas semestrales, revisión anual del equipo",
          "Formularios de consentimiento de cada cliente, guardados de forma segura",
          "Consentimientos para fotos, antes de publicar imágenes de clientes"
        ] }
      ],
      fragen: [
        ["¿Qué documentas en cada lote de material estéril?", ["Fecha de esterilización y número de lote", "Solo la fecha de esterilización", "El nombre del cliente", "La temperatura del baño de ultrasonidos"], "Así se puede rastrear cada lote.", "S. 46"],
        ["¿Qué forma parte de la documentación de tu estudio?", ["Plan de higiene, lotes de material estéril, controles del autoclave y formularios de consentimiento", "Solo los formularios de consentimiento", "Solo facturas y libro de caja", "Solo los controles del autoclave"], "En caso de duda, la oficina local de salud pública y la aseguradora querrán verlo todo sin lagunas.", "Entwurf"],
        ["¿A quién presentas los controles del autoclave si te lo piden?", ["A las autoridades locales", "A los clientes", "Al fabricante", "Al seguro médico"], "Ver módulo 5.", "S. 47"]
      ]
    },
    {
      titel: "Seguro y precios",
      seite: "Entwurf",
      entwurf: true,
      inhalt: [
        { typ: "text", text: "Infórmate sobre un seguro de responsabilidad civil empresarial o profesional para piercing antes de perforar a tu primer cliente." },
        { typ: "liste", titel: "Qué incluir en el cálculo del precio", punkte: [
          "Material: joya, cánula, material desechable, productos de cuidado",
          "Tu tiempo de trabajo, incluidos asesoramiento, formulario de consentimiento y reprocesamiento",
          "Costes fijos: local, equipos, controles, seguro"
        ] }
      ],
      fragen: [
        ["¿Qué deberías resolver antes del primer cliente?", ["Un seguro de responsabilidad civil empresarial o profesional", "Basta con un seguro de defensa jurídica", "Un seguro de hogar", "Nada, basta con el formulario de consentimiento"], "Pide asesoramiento.", "Entwurf"],
        ["¿Qué se incluye en el cálculo del precio?", ["Material, tiempo de trabajo con asesoramiento y reprocesamiento, costes fijos", "Solo la joya y la cánula", "Solo el tiempo de trabajo con el cliente", "Solo el alquiler y el seguro"], "Solo así tu precio cubre también el asesoramiento, el reprocesamiento y los costes fijos.", "Entwurf"]
      ]
    },
    {
      titel: "Compras",
      seite: "S. 34, 56",
      inhalt: [
        { typ: "liste", punkte: [
          "Joyas iniciales solo de titanio G23 o PTFE, con certificado de material del fabricante. Según la normativa de la UE, las joyas para piercings recién hechos pueden liberar como máximo 0,2 µg de níquel por cm² y semana.",
          "Desinfectantes de la lista VAH (Asociación alemana de Higiene Aplicada) con eficacia demostrada.",
          "Cánulas, pinzas y material fungible de proveedores especializados en material médico o para estudios."
        ] },
        { typ: "ergaenzung", text: "Qué proveedores han dado buen resultado lo añadirá aquí la Piercing Akademie a partir de su propia experiencia." }
      ],
      fragen: [
        ["¿Qué joyas iniciales compras?", ["Titanio G23 o PTFE con certificado de material", "316L, porque es más barato", "Titanio con oro y circón", "Acero 303"], "Ver módulo 6.", "S. 56"],
        ["¿Qué desinfectantes compras?", ["Productos de la lista VAH con eficacia demostrada", "Productos con el mayor contenido de alcohol posible", "Limpiadores domésticos con cloro", "Cualquier producto de droguería"], "Ver módulo 5.", "S. 34"]
      ]
    },
    {
      titel: "Normas para tu estudio",
      seite: "Modul 2 und 8",
      inhalt: [
        { typ: "liste", punkte: [
          "Antes de cada piercing, un formulario de consentimiento por escrito (módulo 2).",
          "Comprobar la edad: menores de 18 solo con el consentimiento de los padres o tutores legales; mejor, nunca.",
          "Ninguna promesa de curación y ninguna publicidad con ella.",
          "Rechazas los piercings que no dominas con seguridad; los piercings marcados con «No realizar» no los realizas nunca (módulo 8).",
          "Si hay complicaciones, remites al cliente a un médico."
        ] }
      ],
      fragen: [
        ["¿Qué haces con un piercing que no dominas con seguridad?", ["Lo rechazo", "Lo perforo con tubo receptor", "Lo perforo siguiendo un vídeo", "Lo perforo a mano alzada"], "La seguridad del cliente es lo primero.", "S. 91–93"],
        ["¿Qué haces con los piercings marcados con «No realizar»?", ["No los realizo nunca", "Solo los realizo a clientes habituales", "Los realizo con anestesia", "Los realizo tras un consentimiento por escrito"], "Riesgo de daño grave.", "S. 103–110"],
        ["¿El certificado de la Academia sustituye a una autorización oficial?", ["No, es un justificante de participación y formación práctica", "Sí, en Niedersachsen", "Sí, junto con el registro comercial", "Sí, está reconocido por el Estado"], "Deciden la oficina de comercio y la oficina local de salud pública.", "Akademie"],
        ["¿Cuándo publicas fotos de piercings de clientes?", ["Solo tras un consentimiento por escrito", "Enseguida, si no se ve la cara", "Tras un consentimiento verbal", "Al terminar el plazo de desistimiento"], "Ver módulo 2.", "S. 1"]
      ]
    }
  ],
  uebung: [
    "Anota los datos de contacto de tu oficina de comercio (Gewerbeamt) y de tu oficina local de salud pública (Gesundheitsamt).",
    "Elabora una lista de los documentos que presentarías a la oficina local de salud pública.",
    "Calcula el precio de un piercing helix con todos los costes."
  ]
});
