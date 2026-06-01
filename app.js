const antecedentes = [
  {
    tag: "Política nacional",
    title: "México al inicio del Porfiriato",
    body: "Después de décadas de guerras civiles, intervenciones extranjeras, imperios, repúblicas federales y gobiernos inestables, el régimen de Porfirio Díaz prometió orden, paz y progreso. En la práctica, esa pacificación reforzó jefaturas políticas, guardias locales y alianzas con notables regionales. En San Luis Potosí, el gobierno buscó controlar territorios lejanos como la Huasteca mediante jefes políticos, visitadores y fuerzas armadas."
  },
  {
    tag: "Territorio",
    title: "La Huasteca Potosina como región indígena",
    body: "En la segunda mitad del siglo XIX la Huasteca Potosina concentraba una mayoría indígena, principalmente nahua y tének. El partido de Tamazunchale incluía Tamazunchale, Axtla, San Martín Chalchicuautla y Tampacán. La región tenía fertilidad agrícola, ríos, comercio local y comunicaciones terrestres difíciles, lo que fortalecía redes comunitarias pero complicaba la presencia efectiva del gobierno estatal."
  },
  {
    tag: "Economía",
    title: "Haciendas, condueñazgos y tierras comunales",
    body: "Muchas tierras se disfrutaban de forma comunal o mediante condueñazgos, con límites imprecisos y derechos heredados. Las haciendas acumulaban grandes extensiones; en 1878 se calculaba que las haciendas del partido de Tamazunchale concentraban cerca del 42.92% de su extensión territorial. Para los pueblos, la tierra no era solo propiedad: era sustento, autoridad, memoria y continuidad comunitaria."
  },
  {
    tag: "Sociedad",
    title: "Tensiones entre indígenas y 'gente de razón'",
    body: "Las fuentes de época llamaban 'gente de razón' a los no indígenas con mayor poder político y económico. Esa separación social venía de la Colonia y siguió activa en la vida cotidiana: comunidades indígenas con autoridades propias convivían con ayuntamientos, jefes políticos, hacendados, comerciantes, militares y sacerdotes. La desigualdad se expresaba en tributos locales, servicios obligatorios y exclusión electoral."
  },
  {
    tag: "Gobierno local",
    title: "Autoridades indígenas y municipio liberal",
    body: "Las comunidades conservaban gobernador indígena, alcaldes indígenas y formas propias de justicia. El municipio liberal, en cambio, respondía a ayuntamientos y jefes políticos nombrados o controlados desde el estado. La rebelión estalló cuando ese equilibrio se rompió: el gobierno formal exigía obediencia y recursos, pero no reconocía plenamente la representación indígena ni resolvía los litigios de tierras."
  },
  {
    tag: "Antecedente regional",
    title: "La experiencia de 1848",
    body: "Antes de 1879 ya existían rebeliones y planes políticos en las Huastecas. En 1848, Tamazunchale se vinculó con el Plan de San Nicolás y el Plan de Tancanhuitz; el tema de tierras volvió a ser detonante. Esa movilización duró cerca de 50 días y mostró una constante regional: los conflictos agrarios se mezclaban con luchas entre notables, federalistas, pueblos indígenas y autoridades locales."
  },
  {
    tag: "Causa directa",
    title: "La división de tierras de común repartimiento",
    body: "El gobierno estatal intentó dividir terrenos comunales para reducir litigios y ordenar la propiedad. Para las comunidades, esa medida amenazaba la base material de su vida colectiva. La oposición a la división de tierras fue una causa directa del levantamiento, porque se percibió como una vía para legalizar despojos y debilitar la autoridad comunal."
  },
  {
    tag: "Causa indirecta",
    title: "Abusos, trabajos obligatorios y exclusión",
    body: "Los indígenas denunciaban que se les exigían correos sin pago, limpieza de caminos, trabajo público, contribuciones municipales, pagos ligados a colmenas y servicios parroquiales. También reclamaban que se les trataba como ciudadanos para cobrarles recursos, pero se les excluía de elecciones municipales o se les intimidaba para favorecer a grupos dominantes."
  },
  {
    tag: "Ideología",
    title: "Liberalismo, agrarismo y socialismo rural",
    body: "El movimiento no se limitó a una reacción local. Con el tiempo recibió influencias de ideas agrarias y socialistas rurales que circulaban en México, ligadas a demandas de municipio libre, ley agraria y justicia para trabajadores del campo. Esa mezcla produjo una segunda etapa más amplia, donde el reclamo de tierras se enlazó con un lenguaje político de transformación social."
  }
];

const fases = [
  {
    date: "Gestación, 1876-1879",
    title: "Búsqueda legal de títulos y acumulación de tensión",
    body: "Las comunidades intentaron recuperar títulos en archivos y resolver litigios por vías institucionales. Al no obtener resultados, creció la desconfianza hacia autoridades municipales y estatales. La llegada de los tuxtepecanos y la promesa de reforma social alimentaron expectativas de justicia. Juan Santiago apareció como interlocutor comunitario y líder capaz de articular demandas dispersas.",
    consequence: "La falta de solución legal convirtió un problema agrario en crisis política."
  },
  {
    date: "5 de julio de 1879",
    title: "Ocupación de la plaza principal",
    body: "Más de 400 indígenas se apoderaron de la plaza principal de Tamazunchale. El jefe político ordenó dispersarlos y se buscaron representantes para gestionar un arreglo. Juan Santiago llevaba títulos de propiedad y una carta atribuida a Porfirio Díaz que le daba facultades para resolver el conflicto, incluso por la fuerza; las autoridades consideraron apócrifa esa carta.",
    consequence: "La movilización mostró capacidad de organización y puso al gobierno local bajo presión."
  },
  {
    date: "26 de julio de 1879",
    title: "Ataque simultáneo a Tamazunchale",
    body: "Cientos de indígenas tomaron por la fuerza la cabecera del partido. El jefe político Juan José Terrazas escapó; fueron asesinados su secretario y un soldado, y el secretario del ayuntamiento quedó herido. Los sublevados gritaban consignas contra los sectores no indígenas y contra quienes representaban el poder local. Su centro de operaciones se ubicó en Tamán, con acciones en Potilla y el cerro de Mazatetl.",
    consequence: "El conflicto pasó de protesta a rebelión armada y obligó a movilizar guardias regionales."
  },
  {
    date: "Agosto de 1879",
    title: "Expansión del movimiento",
    body: "Los sublevados llegaron a sumar alrededor de 3,000 participantes. Varios pueblos del partido de Tamazunchale y comunidades de Hidalgo se adhirieron. La rebelión se expandió porque combinaba agravios comunes: tierras, abusos de autoridades, hostilidad de hacendados y defensa de la autonomía comunitaria.",
    consequence: "El gobierno estatal y los estados vecinos comenzaron a tratar la rebelión como problema militar regional."
  },
  {
    date: "Finales de 1879",
    title: "Negociaciones y visitadores",
    body: "El gobierno envió visitadores para investigar y buscar acuerdos. Hubo comunicación con Juan Santiago, quien defendió la lucha como lícita y justa. Las negociaciones chocaron con intereses de jefes políticos, hacendados y militares. Santiago pidió condiciones simbólicas y políticas: empleados indígenas en el municipio, reconocimiento público y posibilidad de acudir armado con sus hombres.",
    consequence: "La negociación reveló que la disputa no era solo por parcelas, sino por reconocimiento político."
  },
  {
    date: "Febrero-junio de 1880",
    title: "Reacomodo represivo y tregua frágil",
    body: "Agustín Ugarte sustituyó a Juan José Terrazas como jefe político. Las fuentes lo describen como una autoridad dura, con ejecuciones frecuentes por sospecha de simpatizar con la rebelión. El Ejecutivo estatal concedió indultos y hubo algunos meses de calma, pero las demandas de fondo siguieron sin resolverse.",
    consequence: "La paz fue temporal; la represión redujo acciones visibles, pero no eliminó las causas."
  },
  {
    date: "Mediados de 1880",
    title: "Conexión con municipio libre y Ejército del Pueblo",
    body: "La rebelión empezó a vincularse con ideas del Directorio Socialista y con redes agraristas. Matías Hernández fue nombrado coronel del Ejército del Pueblo y segundo jefe de la Línea Huasteca Potosina. En pueblos como Tampacán, San Antonio, Tanlajás, Tancanhuitz, Aquismón, San Vicente y Tampatz hubo intentos de levantamiento.",
    consequence: "El reclamo comunal se transformó en una causa regional con lenguaje político más amplio."
  },
  {
    date: "Agosto-septiembre de 1881",
    title: "Reactivación en la sierra de San Francisco",
    body: "Juan Santiago se reunió con indígenas de Tamazunchale y aliados de Las Moras, Jacala y Molango. Amenazaron con bajar a tomar la cabecera del partido. También se agruparon peones de la hacienda de Santa Isabel, con intención de moverse contra Tancanhuitz y San Antonio. Los enfrentamientos se multiplicaron en Tamazunchale y zonas de Hidalgo.",
    consequence: "La rebelión alcanzó su fase de mayor ramificación territorial."
  },
  {
    date: "18-19 de octubre de 1881",
    title: "Ataque a Matiapa y asedio de Tamazunchale",
    body: "El 18 de octubre, alrededor de 300 indígenas atacaron Matiapa, en el partido de Tancanhuitz, desalojaron fuerzas nacionales y atacaron fincas. Al día siguiente, unos 500 seguidores asediaron Tamazunchale con la consigna de 'Ley Agraria y Gobierno Municipal'.",
    consequence: "La consigna condensó el programa rebelde: tierra, autoridad local y cambio político."
  },
  {
    date: "Noviembre de 1881-1889",
    title: "Derrota, dispersión y prisión de Juan Santiago",
    body: "Fuerzas potosinas e hidalguenses, reforzadas con armas y apoyos de Ciudad del Maíz, sofocaron el movimiento. A principios de noviembre de 1881 la insurrección estaba desmantelada; varios líderes fueron ejecutados, otros pidieron indulto y muchos se dispersaron hacia Hidalgo. Juan Santiago fue capturado, enviado a Ciudad del Maíz, trasladado a San Luis Potosí, procesado y sentenciado.",
    consequence: "La rebelión terminó militarmente, pero dejó abierta la memoria de un conflicto agrario no resuelto."
  }
];

const personajes = [
  {
    name: "Juan Santiago",
    role: "Gobernador indígena y líder rebelde",
    actions: "Articuló a comunidades del partido de Tamazunchale, defendió títulos de tierras, sostuvo correspondencia con autoridades, negoció condiciones de reconocimiento y encabezó fases armadas del movimiento.",
    impact: "Representa la defensa indígena de tierra comunal, autoridad propia y justicia local frente al Estado liberal."
  },
  {
    name: "Comunidades nahuas y tének",
    role: "Base social del movimiento",
    actions: "Participaron en ocupaciones, asedios, bloqueos de caminos, defensa de títulos y organización comunitaria mediante gobernadores y alcaldes indígenas.",
    impact: "Mostraron que la rebelión fue colectiva y no solo producto de un caudillo."
  },
  {
    name: "Juan José Terrazas",
    role: "Jefe político de Tamazunchale",
    actions: "Representó el poder estatal en el partido; enfrentó la movilización de julio de 1879 y huyó durante el ataque a la cabecera.",
    impact: "Su figura concentra la tensión entre jefatura política, ayuntamiento y comunidades indígenas."
  },
  {
    name: "Agustín Ugarte",
    role: "Jefe político nombrado en 1880",
    actions: "Sustituyó a Terrazas y aplicó una política de control severo; fue señalado por ejecuciones y persecución de simpatizantes.",
    impact: "Su gestión muestra el paso de la negociación limitada a la represión abierta."
  },
  {
    name: "Carlos Díez Gutiérrez",
    role: "Gobernador de San Luis Potosí",
    actions: "Impulsó medidas sobre tierras comunales, coordinó respuestas militares y políticas, rechazó arreglos iniciales y defendió su campaña de pacificación.",
    impact: "Encarnó la lógica estatal porfiriana: orden administrativo, control regional y subordinación de autonomías locales."
  },
  {
    name: "Porfirio Díaz",
    role: "Presidente de México",
    actions: "Su régimen dio el marco nacional del conflicto. Una carta atribuida a él fue usada por Santiago, aunque las autoridades la consideraron falsa.",
    impact: "El episodio revela las contradicciones tempranas del Porfiriato entre promesas de reforma y prácticas de control."
  },
  {
    name: "Familia Santos y notables regionales",
    role: "Red de poder económico y político",
    actions: "Controlaban intereses territoriales y políticos en la Huasteca; eran vistos por comunidades como enemigos vinculados al despojo y la manipulación municipal.",
    impact: "Simbolizan el caciquismo regional que conectaba tierra, cargos y coerción."
  },
  {
    name: "Hacendados y condueños",
    role: "Propietarios y poseedores en disputa",
    actions: "Defendieron fincas, límites, rentas y autoridad sobre trabajadores; presionaron para que el gobierno actuara contra los sublevados.",
    impact: "Su conflicto con comunidades indígenas explica el carácter agrario de la rebelión."
  },
  {
    name: "Visitadores estatales",
    role: "Mediadores e investigadores",
    actions: "Recibieron informes, escucharon quejas, intentaron arreglos y documentaron abusos cometidos por autoridades y terratenientes.",
    impact: "Sus informes muestran que el gobierno conocía la profundidad social del problema."
  },
  {
    name: "Matías Hernández",
    role: "Militante agrarista vinculado al Ejército del Pueblo",
    actions: "Fue nombrado coronel y segundo jefe de la Línea Huasteca Potosina en 1880, dentro de la expansión ideológica del movimiento.",
    impact: "Conecta Tamazunchale con redes políticas que hablaban de municipio libre y transformación agraria."
  },
  {
    name: "Guardias nacionales y fuerzas estatales",
    role: "Fuerzas de pacificación",
    actions: "Intervinieron desde San Luis Potosí, Hidalgo, Querétaro y Ciudad del Maíz para contener, perseguir y desmantelar a los rebeldes.",
    impact: "Definieron el final militar de la rebelión y reforzaron la presencia coercitiva del Estado."
  },
  {
    name: "Peones y campesinos de hacienda",
    role: "Participantes y aliados potenciales",
    actions: "En 1881 se agruparon peones de la hacienda de Santa Isabel y otros trabajadores rurales que veían en la rebelión una oportunidad contra abusos laborales y territoriales.",
    impact: "Ampliaron la rebelión más allá de una disputa étnica: también fue conflicto campesino y laboral."
  }
];

const consecuencias = [
  {
    tag: "Políticas",
    title: "Fortalecimiento del control estatal",
    body: "La derrota reforzó la autoridad de jefes políticos, guardias y gobiernos estatales sobre la Huasteca. El Estado aprendió que debía vigilar con más fuerza los vínculos entre comunidades indígenas, peones y redes agraristas."
  },
  {
    tag: "Sociales",
    title: "Ruptura entre municipio y comunidad",
    body: "El movimiento hizo visible la ruptura entre el municipio constitucional y el mundo comunitario indígena. La autoridad tradicional perdió margen frente al ayuntamiento y al jefe político, pero siguió siendo referencia de identidad y organización."
  },
  {
    tag: "Económicas",
    title: "Continuidad de la concentración territorial",
    body: "La rebelión no resolvió de fondo el problema de la tierra. Haciendas y condueñazgos conservaron poder, mientras las comunidades siguieron enfrentando litigios, pobreza rural y presión sobre sus recursos."
  },
  {
    tag: "Culturales",
    title: "Memoria de agravio y resistencia",
    body: "La rebelión dejó una memoria de defensa territorial. En la historia regional, Tamazunchale aparece como lugar donde las comunidades no aceptaron pasivamente la pérdida de tierras ni la exclusión política."
  },
  {
    tag: "Militares",
    title: "Represión, indultos y desplazamiento",
    body: "Hubo ejecuciones, prisión de líderes, indultos para quienes se sometieron y dispersión de participantes hacia zonas vecinas, especialmente Hidalgo. La pacificación combinó castigo y negociación."
  },
  {
    tag: "Posteriores",
    title: "Continuidad del agrarismo",
    body: "Las demandas reaparecieron en otros movimientos rurales de San Luis Potosí y regiones cercanas. La rebelión anticipó conflictos agrarios que serían centrales en la Revolución Mexicana y en luchas por reparto de tierras."
  }
];

const timeline = [
  ["1848", "Tamazunchale se vincula con la rebelión de San Nicolás y el Plan de Tancanhuitz; la tierra aparece como eje de movilización regional."],
  ["1873", "La Huasteca Potosina mantiene mayoría indígena y una organización territorial donde las tierras comunales siguen siendo fundamentales."],
  ["1878", "Informes estatales señalan una fuerte concentración de tierras en haciendas del partido de Tamazunchale."],
  ["5 jul. 1879", "Más de 400 indígenas ocupan la plaza principal de Tamazunchale."],
  ["26 jul. 1879", "Ataque a la cabecera del partido; la rebelión entra en fase armada."],
  ["ago. 1879", "El movimiento alcanza cerca de 3,000 participantes y se extiende hacia pueblos del partido e Hidalgo."],
  ["feb. 1880", "Agustín Ugarte sustituye a Juan José Terrazas como jefe político; aumenta la represión."],
  ["jun.-jul. 1880", "La rebelión se vincula con discursos de municipio libre, Ejército del Pueblo y socialismo rural."],
  ["ago.-sep. 1881", "Juan Santiago se reúne con aliados de Tamazunchale, Las Moras, Jacala y Molango."],
  ["18 oct. 1881", "Ataque a Matiapa por alrededor de 300 indígenas."],
  ["19 oct. 1881", "Asedio de Tamazunchale al grito de 'Ley Agraria y Gobierno Municipal'."],
  ["nov. 1881-1889", "El movimiento es sofocado; Juan Santiago es capturado, procesado y sentenciado."]
];

const mapDetails = {
  "Tamazunchale": "Cabecera del partido y centro simbólico del conflicto. Fue ocupada en julio de 1879 y asediada de nuevo en octubre de 1881.",
  "Tamán": "Punto señalado como centro de operaciones rebelde durante la primera etapa armada.",
  "Axtla": "Municipalidad del partido con vínculos comunitarios y agrarios en la región de movilización.",
  "Tampacán": "Zona donde la rebelión se reactivó y se extendió hacia otros pueblos en 1880.",
  "San Martín Chalchicuautla": "Municipalidad del partido, conectada con conflictos por reparto de tierras comunales.",
  "Tancanhuitz": "Partido vecino donde la rebelión se ramificó; Matiapa fue atacada en octubre de 1881.",
  "Jacala y Molango": "Distritos hidalguenses conectados con aliados de Juan Santiago y rutas de dispersión.",
  "Ciudad del Maíz": "Zona de apoyo militar para sofocar el movimiento; Juan Santiago fue enviado allí tras su captura."
};

const audioSteps = [
  { id: "presentacion", file: "primero.mp3", sectionId: "inicio", label: "Presentación del proyecto" },
  { id: "datosFundamentales", file: "segundo.mp3", sectionId: "inicio", label: "Datos fundamentales" },
  { id: "introduccionGeneral", file: "tercero.mp3", sectionId: "introduccion", label: "Introducción general" },
  { id: "antecedentes", file: "cuarto.mp3", sectionId: "antecedentes", label: "Antecedentes históricos" },
  { id: "presentacionMapa", file: "quinto.mp3", sectionId: "mapa", label: "Presentación del mapa interactivo" },
  { id: "explicacionLugares", file: "sexto.mp3", sectionId: "mapa", label: "Explicación de los lugares del mapa" },
  { id: "desarrollo", file: "septimo.mp3", sectionId: "desarrollo", label: "Desarrollo de la rebelión" },
  { id: "personajes", file: "octavo.mp3", sectionId: "personajes", label: "Personajes y grupos importantes" },
  { id: "timeline", file: "noveno.mp3", sectionId: "timeline", label: "Línea del tiempo" },
  { id: "consecuencias", file: "decimo.mp3", sectionId: "consecuencias", label: "Consecuencias" },
  { id: "impacto", file: "onceavo.mp3", sectionId: "impacto", label: "Impacto actual y memoria histórica" },
  { id: "despedida", file: "despedida.mp3", sectionId: "fuentes", label: "Cierre del recorrido" }
];

const audios = audioSteps.map(function(s) { return { title: s.label, text: "", file: s.file }; });

const qrItems = [
  ["Introducción general", "#introduccion", "Panorama inicial de la rebelión."],
  ["Antecedentes históricos", "#antecedentes", "Contexto político, social y económico."],
  ["Mapa del conflicto", "#mapa", "Rutas, lugares y centros de operación."],
  ["Desarrollo cronológico", "#desarrollo", "Etapas de 1879 a 1889."],
  ["Personajes", "#personajes", "Líderes, autoridades y grupos involucrados."],
  ["Línea del tiempo", "#timeline", "Fechas principales en formato interactivo."],
  ["Consecuencias", "#consecuencias", "Impactos políticos, sociales y económicos."],
  ["Audioguía", "#audio", "Narraciones con voz del navegador."]
];

const projectIndex = [
  ["Introducción general", ["Definición de la rebelión", "Contexto histórico", "Problemas sociales, políticos y económicos", "Causas de inicio"]],
  ["Antecedentes históricos", ["México al inicio del Porfiriato", "Huasteca Potosina indígena", "Haciendas y condueñazgos", "Tensiones sociales", "Gobierno indígena y municipio liberal", "Antecedente de 1848", "Causas directas e indirectas", "Influencia agrarista y socialista rural"]],
  ["Desarrollo de la rebelión", ["Gestación legal", "Ocupación del 5 de julio de 1879", "Ataque del 26 de julio", "Expansión de agosto", "Negociaciones", "Represión de 1880", "Segunda etapa ideológica", "Reactivación de 1881", "Matiapa y asedio de Tamazunchale", "Derrota y prisión de Juan Santiago"]],
  ["Personajes importantes", ["Juan Santiago", "Comunidades nahuas y tének", "Jefes políticos", "Gobernador estatal", "Porfirio Díaz", "Familia Santos", "Hacendados", "Visitadores", "Matías Hernández", "Fuerzas armadas", "Peones de hacienda"]],
  ["Consecuencias", ["Políticas", "Sociales", "Económicas", "Culturales", "Militares", "Movimientos posteriores"]],
  ["Impacto actual", ["Memoria histórica", "Identidad regional", "Territorio y autonomía", "Importancia para México contemporáneo"]],
  ["Recursos interactivos", ["Línea del tiempo", "Mapa interpretativo", "QR automáticos", "Audioguía narrada", "Sonido ambiental opcional", "Galería histórica"]]
];

const timelineImages = [
  {
    type: "ai",
    caption: "Mapa de la Huasteca Potosina con rutas de la rebelión de 1848",
    date: "1848",
    source: "Representacion basada en cartografia historica del Archivo General de la Nacion",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#f1e6cf" rx="4"/><path d="M30 130 L60 90 L90 110 L120 70 L150 100 L180 60 L210 80 L240 50" stroke="#7f312c" stroke-width="2.5" fill="none" stroke-dasharray="6 4"/><path d="M40 140 L70 100 L100 120 L130 80 L160 110 L190 70" stroke="#a8612c" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><circle cx="60" cy="90" r="5" fill="#7f312c"/><circle cx="120" cy="70" r="5" fill="#7f312c"/><circle cx="180" cy="60" r="5" fill="#7f312c"/><circle cx="240" cy="50" r="4" fill="#a8612c"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">Huasteca 1848</text><rect x="10" y="140" width="80" height="14" fill="#dfc99f" rx="2"/><text x="14" y="151" font-family="system-ui" font-size="7" fill="#7f312c">Rebelion de San Nicolas</text></svg>'
  },
  {
    type: "ai",
    caption: "Paisaje rural de la Huasteca Potosina con campos y vegetacion regional",
    date: "c. 1873",
    source: "Representacion basada en descripciones de viajeros del siglo XIX",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#e8dcc4" rx="4"/><path d="M0 110 Q40 80 80 95 Q120 70 160 85 Q200 65 260 80 L260 160 L0 160 Z" fill="#596b43" opacity="0.5"/><path d="M0 130 Q50 110 100 120 Q150 100 200 115 Q230 105 260 115 L260 160 L0 160 Z" fill="#4a5c36" opacity="0.4"/><circle cx="50" cy="55" r="18" fill="#a8612c" opacity="0.15"/><circle cx="50" cy="55" r="12" fill="#a8612c" opacity="0.2"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">Huasteca Potosina</text><path d="M70 85 Q72 70 80 68 Q88 70 90 85" fill="#596b43" opacity="0.6"/><path d="M140 80 Q142 65 150 63 Q158 65 160 80" fill="#596b43" opacity="0.6"/></svg>'
  },
  {
    type: "ai",
    caption: "Hacienda de la Huasteca Potosina durante el Porfiriato",
    date: "c. 1878",
    source: "Representacion basada en descripciones de la concentracion territorial en San Luis Potosi",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#ede2cc" rx="4"/><rect x="40" y="70" width="60" height="40" fill="#d4b896" stroke="#8b6f47" stroke-width="1.5"/><rect x="48" y="78" width="12" height="12" fill="#a8612c" opacity="0.4"/><rect x="80" y="78" width="12" height="12" fill="#a8612c" opacity="0.4"/><rect x="62" y="92" width="16" height="18" fill="#8b6f47"/><path d="M36 70 L70 52 L104 70" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><rect x="120" y="80" width="100" height="60" fill="#b8a07a" stroke="#7a6548" stroke-width="1" rx="2"/><path d="M120 80 L170 65 L220 80" fill="#c4a67a" stroke="#7a6548" stroke-width="1"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">Hacienda 1878</text><path d="M10 148 L250 148" stroke="#241d18" stroke-width="0.5" opacity="0.3"/></svg>'
  },
  {
    type: "ai",
    caption: "Ocupacion de la plaza principal de Tamazunchale por mas de 400 indigenas",
    date: "5 de julio de 1879",
    source: "Representacion basada en relatos historicos del Archivo Historico de San Luis Potosi",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#e8d5b8" rx="4"/><rect x="80" y="50" width="100" height="70" fill="#d4b896" stroke="#8b6f47" stroke-width="1.5"/><rect x="90" y="60" width="18" height="18" fill="#7f312c" opacity="0.5"/><rect x="152" y="60" width="18" height="18" fill="#7f312c" opacity="0.5"/><path d="M80 50 L130 35 L180 50" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="130" cy="55" r="4" fill="#a8612c"/><circle cx="130" cy="68" r="3" fill="#a8612c"/><circle cx="130" cy="80" r="3" fill="#a8612c"/><circle cx="120" cy="73" r="2.5" fill="#a8612c"/><circle cx="140" cy="73" r="2.5" fill="#a8612c"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">5 jul. 1879</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#7f312c">Ocupacion de plaza</text></svg>'
  },
  {
    type: "ai",
    caption: "Ataque a la cabecera del partido de Tamazunchale",
    date: "26 de julio de 1879",
    source: "Representacion basada en partes militares de la epoca",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#2a211b" rx="4"/><path d="M0 120 Q60 100 130 110 Q200 95 260 110 L260 160 L0 160 Z" fill="#3a2a20"/><rect x="100" y="65" width="60" height="40" fill="#4a3020" stroke="#7f312c" stroke-width="1.5"/><path d="M100 65 L130 50 L160 65" fill="#3a2018"/><circle cx="70" cy="80" r="3" fill="#a8612c"/><circle cx="85" cy="75" r="3" fill="#a8612c"/><circle cx="180" cy="85" r="3" fill="#a8612c"/><circle cx="195" cy="78" r="3" fill="#a8612c"/><path d="M50 95 L70 80 L90 95" stroke="#7f312c" stroke-width="1" fill="none"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#d89548">26 jul. 1879</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#d89548">Ataque armado</text></svg>'
  },
  {
    type: "ai",
    caption: "Mapa de expansion del movimiento con 3,000 participantes",
    date: "Agosto de 1879",
    source: "Representacion basada en datos de la expansion rebelde",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#f1e6cf" rx="4"/><circle cx="100" cy="80" r="25" fill="#7f312c" opacity="0.2"/><circle cx="100" cy="80" r="16" fill="#7f312c" opacity="0.3"/><circle cx="100" cy="80" r="8" fill="#7f312c"/><text x="90" y="84" font-family="system-ui" font-size="7" fill="#fff">3k</text><path d="M100 80 L40 50" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M100 80 L50 120" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M100 80 L160 50" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M100 80 L170 110" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M100 80 L140 130" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="4 3"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">ago. 1879</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#7f312c">Expansion</text></svg>'
  },
  {
    type: "ai",
    caption: "Agustin Ugarte, jefe politico de linea dura",
    date: "Febrero de 1880",
    source: "Representacion basada en descripciones historicas de la represion en la Huasteca",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#2a211b" rx="4"/><circle cx="130" cy="60" r="22" fill="#3a2a20" stroke="#7f312c" stroke-width="1.5"/><circle cx="130" cy="60" r="14" fill="#4a3a2a"/><rect x="115" y="80" width="30" height="45" fill="#3a2a20" stroke="#5a4a3a" stroke-width="1"/><rect x="110" y="125" width="40" height="30" fill="#2a1a10" rx="2"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#d89548">feb. 1880</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#d89548">Represion</text></svg>'
  },
  {
    type: "ai",
    caption: "Documento politico: manifiesto de municipio libre y Ejercito del Pueblo",
    date: "Junio-julio de 1880",
    source: "Representacion basada en las ideas agraristas del Directorio Socialista",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#ede2cc" rx="4"/><rect x="50" y="40" width="160" height="90" fill="#f5edd8" stroke="#8b6f47" stroke-width="1.5" rx="2"/><line x1="70" y1="60" x2="190" y2="60" stroke="#241d18" stroke-width="1.5" opacity="0.6"/><line x1="70" y1="72" x2="170" y2="72" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="70" y1="82" x2="180" y2="82" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="70" y1="92" x2="160" y2="92" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="70" y1="102" x2="175" y2="102" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="70" y1="112" x2="150" y2="112" stroke="#241d18" stroke-width="1" opacity="0.4"/><rect x="55" y="45" width="40" height="12" fill="#7f312c" rx="2"/><text x="58" y="54" font-family="system-ui" font-size="7" fill="#fff">Manifiesto</text><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">jun-jul. 1880</text></svg>'
  },
  {
    type: "ai",
    caption: "Reunion de Juan Santiago con aliados en la Sierra de San Francisco",
    date: "Agosto-septiembre de 1881",
    source: "Representacion basada en expedientes de la rebelion en la sierra",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#2a211b" rx="4"/><path d="M0 100 Q40 60 80 80 Q120 50 160 70 Q200 45 260 65 L260 160 L0 160 Z" fill="#3a4a2a"/><path d="M0 120 Q60 90 130 105 Q200 85 260 100 L260 160 L0 160 Z" fill="#2a3a1a"/><circle cx="60" cy="90" r="3" fill="#a8612c"/><circle cx="80" cy="85" r="3" fill="#a8612c"/><circle cx="100" cy="80" r="3" fill="#a8612c"/><circle cx="120" cy="78" r="3" fill="#a8612c"/><circle cx="140" cy="82" r="3" fill="#a8612c"/><circle cx="100" cy="60" r="10" fill="#a8612c" opacity="0.2"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#d89548">ago-sep. 1881</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#d89548">Reunion en sierra</text></svg>'
  },
  {
    type: "ai",
    caption: "Ataque a Matiapa por 300 indigenas en el partido de Tancanhuitz",
    date: "18 de octubre de 1881",
    source: "Representacion basada en partes militares de la batalla de Matiapa",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#1a1512" rx="4"/><path d="M0 130 Q50 110 100 120 Q150 105 200 115 Q230 108 260 118 L260 160 L0 160 Z" fill="#2a1a15"/><rect x="90" y="75" width="80" height="40" fill="#3a2018" stroke="#7f312c" stroke-width="1"/><path d="M90 75 L130 60 L170 75" fill="#2a1510"/><circle cx="50" cy="90" r="2.5" fill="#a8612c"/><circle cx="65" cy="85" r="2.5" fill="#a8612c"/><circle cx="210" cy="90" r="2.5" fill="#a8612c"/><circle cx="195" cy="95" r="2.5" fill="#a8612c"/><path d="M40 100 L55 85 L70 100" stroke="#7f312c" stroke-width="1" fill="none"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#d89548">18 oct. 1881</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#d89548">Ataque a Matiapa</text></svg>'
  },
  {
    type: "ai",
    caption: "Asedio de Tamazunchale con la consigna Ley Agraria y Gobierno Municipal",
    date: "19 de octubre de 1881",
    source: "Representacion basada en el suceso documentado del asedio",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#2a211b" rx="4"/><rect x="90" y="55" width="80" height="50" fill="#3a2a20" stroke="#7f312c" stroke-width="2"/><rect x="100" y="65" width="16" height="16" fill="#a8612c" opacity="0.4"/><rect x="144" y="65" width="16" height="16" fill="#a8612c" opacity="0.4"/><path d="M90 55 L130 40 L170 55" fill="#2a1a15"/><circle cx="60" cy="80" r="4" fill="#a8612c"/><circle cx="45" cy="85" r="3" fill="#a8612c"/><circle cx="200" cy="80" r="4" fill="#a8612c"/><circle cx="215" cy="85" r="3" fill="#a8612c"/><rect x="70" y="20" width="120" height="14" fill="#7f312c" rx="2"/><text x="74" y="30" font-family="system-ui" font-size="6.5" fill="#fff">Ley Agraria y Gobierno Municipal</text><text x="10" y="150" font-family="Georgia" font-size="9" fill="#d89548">19 oct. 1881</text></svg>'
  },
  {
    type: "ai",
    caption: "Captura y prision de Juan Santiago; el movimiento es sofocado",
    date: "Noviembre 1881-1889",
    source: "Representacion basada en documentos del proceso judicial de Juan Santiago",
    svg: '<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="160" fill="#1a1512" rx="4"/><rect x="60" y="50" width="140" height="60" fill="#2a2520" stroke="#5a4a3a" stroke-width="2" rx="4"/><line x1="80" y1="50" x2="80" y2="110" stroke="#3a3530" stroke-width="2"/><line x1="180" y1="50" x2="180" y2="110" stroke="#3a3530" stroke-width="2"/><line x1="60" y1="75" x2="200" y2="75" stroke="#3a3530" stroke-width="1"/><rect x="105" y="58" width="50" height="14" fill="#5a4a3a" rx="2"/><text x="110" y="68" font-family="system-ui" font-size="7" fill="#d89548">Prisión</text><circle cx="130" cy="92" r="6" fill="#3a2a20" stroke="#5a4a3a" stroke-width="1"/><text x="10" y="20" font-family="Georgia" font-size="9" fill="#d89548">1881-1889</text><text x="10" y="32" font-family="system-ui" font-size="7" fill="#d89548">Derrota y captura</text></svg>'
  }
];

const faseImages = [
  {
    type: "ai",
    caption: "Documentos legales y titulos de propiedad comunal",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#3a2320" rx="3"/><rect x="20" y="25" width="60" height="80" fill="#ede2cc" rx="2" transform="rotate(-3, 50, 65)"/><rect x="40" y="30" width="60" height="80" fill="#f5edd8" rx="2" transform="rotate(2, 70, 70)"/><rect x="60" y="22" width="60" height="80" fill="#ede2cc" rx="2" transform="rotate(-1, 90, 62)"/><line x1="50" y1="45" x2="80" y2="45" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="53" x2="85" y2="53" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="61" x2="75" y2="61" stroke="#241d18" stroke-width="1" opacity="0.4"/><rect x="72" y="72" width="50" height="14" fill="#7f312c" rx="2"/><text x="75" y="82" font-family="system-ui" font-size="6" fill="#fff">Titulos</text></svg>'
  },
  {
    type: "ai",
    caption: "Ocupacion de la plaza por 400 indigenas",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#3a2320" rx="3"/><rect x="50" y="25" width="90" height="60" fill="#4a3530" stroke="#7f312c" stroke-width="1.5" rx="2"/><path d="M50 25 L95 12 L140 25" fill="#5a4530"/><circle cx="65" cy="42" r="3" fill="#a8612c"/><circle cx="80" cy="42" r="3" fill="#a8612c"/><circle cx="95" cy="42" r="3" fill="#a8612c"/><circle cx="110" cy="42" r="3" fill="#a8612c"/><circle cx="125" cy="42" r="3" fill="#a8612c"/><circle cx="95" cy="52" r="2.5" fill="#a8612c"/><circle cx="80" cy="55" r="2.5" fill="#a8612c"/><circle cx="110" cy="55" r="2.5" fill="#a8612c"/><text x="35" y="110" font-family="system-ui" font-size="7" fill="#d89548">5 jul.1879</text></svg>'
  },
  {
    type: "ai",
    caption: "Ataque simultaneo a la cabecera",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#1a1512" rx="3"/><rect x="60" y="35" width="60" height="40" fill="#3a2018" stroke="#7f312c" stroke-width="1.5"/><path d="M60 35 L90 22 L120 35" fill="#2a1510"/><circle cx="30" cy="55" r="3" fill="#a8612c"/><circle cx="45" cy="50" r="3" fill="#a8612c"/><circle cx="155" cy="60" r="3" fill="#a8612c"/><circle cx="145" cy="50" r="3" fill="#a8612c"/><path d="M15 110 Q40 95 95 100 Q150 90 175 100" stroke="#5a4a3a" stroke-width="0.8" fill="none"/><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">26 jul.1879</text></svg>'
  },
  {
    type: "ai",
    caption: "Expansion del movimiento: 3,000 participantes",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#3a2320" rx="3"/><circle cx="95" cy="55" r="28" fill="#7f312c" opacity="0.2"/><circle cx="95" cy="55" r="18" fill="#7f312c" opacity="0.3"/><circle cx="95" cy="55" r="10" fill="#7f312c"/><text x="89" y="59" font-family="system-ui" font-size="8" fill="#fff">3K</text><path d="M95 55 L35 40" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M95 55 L40 80" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M95 55 L155 40" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M95 55 L150 80" stroke="#a8612c" stroke-width="1.5" stroke-dasharray="3 3"/><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">ago.1879</text></svg>'
  },
  {
    type: "ai",
    caption: "Negociaciones con visitadores estatales",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#3a2320" rx="3"/><rect x="40" y="30" width="100" height="50" fill="#4a3a2a" stroke="#8b6f47" stroke-width="1" rx="3"/><circle cx="60" cy="50" r="6" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="90" cy="45" r="6" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><line x1="66" y1="50" x2="84" y2="45" stroke="#241d18" stroke-width="0.8" opacity="0.5"/><rect x="45" y="62" width="90" height="10" fill="#a8612c" rx="2"/><text x="48" y="70" font-family="system-ui" font-size="6" fill="#fff">Negociacion</text><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">fin 1879</text></svg>'
  },
  {
    type: "ai",
    caption: "Agustin Ugarte y la represion",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#1a1512" rx="3"/><circle cx="95" cy="45" r="18" fill="#3a2a20" stroke="#7f312c" stroke-width="1.5"/><circle cx="95" cy="45" r="10" fill="#4a3a2a"/><rect x="82" y="62" width="26" height="35" fill="#3a2a20"/><rect x="78" y="97" width="34" height="20" fill="#2a1a10" rx="2"/><line x1="30" y1="20" x2="50" y2="50" stroke="#7f312c" stroke-width="1.5" opacity="0.6"/><line x1="155" y1="20" x2="140" y2="50" stroke="#7f312c" stroke-width="1.5" opacity="0.6"/><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">feb.1880</text></svg>'
  },
  {
    type: "ai",
    caption: "Manifiesto del municipio libre",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#3a2320" rx="3"/><rect x="30" y="25" width="130" height="75" fill="#f5edd8" stroke="#8b6f47" stroke-width="1.5" rx="2"/><rect x="35" y="30" width="50" height="14" fill="#7f312c" rx="2"/><text x="38" y="40" font-family="system-ui" font-size="7" fill="#fff">Manifiesto</text><line x1="40" y1="52" x2="145" y2="52" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="40" y1="62" x2="130" y2="62" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="40" y1="72" x2="140" y2="72" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="40" y1="82" x2="120" y2="82" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="40" y1="92" x2="135" y2="92" stroke="#241d18" stroke-width="1" opacity="0.4"/><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">jun-jul.1880</text></svg>'
  },
  {
    type: "ai",
    caption: "Reunion en la Sierra de San Francisco",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#1a1512" rx="3"/><path d="M0 85 Q30 55 65 70 Q95 45 130 60 Q160 40 190 55 L190 130 L0 130 Z" fill="#3a4a2a"/><path d="M0 100 Q50 75 95 85 Q145 70 190 80 L190 130 L0 130 Z" fill="#2a3a1a"/><circle cx="60" cy="70" r="3" fill="#a8612c"/><circle cx="80" cy="65" r="3" fill="#a8612c"/><circle cx="100" cy="62" r="3" fill="#a8612c"/><circle cx="120" cy="60" r="3" fill="#a8612c"/><circle cx="95" cy="45" r="10" fill="#a8612c" opacity="0.15"/><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">ago-sep.1881</text></svg>'
  },
  {
    type: "ai",
    caption: "Ataque a Matiapa y asedio de Tamazunchale",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#1a1512" rx="3"/><rect x="55" y="40" width="80" height="40" fill="#3a2018" stroke="#7f312c" stroke-width="1.5"/><path d="M55 40 L95 28 L135 40" fill="#2a1510"/><circle cx="25" cy="55" r="3" fill="#a8612c"/><circle cx="40" cy="50" r="3" fill="#a8612c"/><circle cx="160" cy="60" r="3" fill="#a8612c"/><circle cx="150" cy="50" r="3" fill="#a8612c"/><rect x="35" y="15" width="120" height="10" fill="#7f312c" rx="2"/><text x="38" y="23" font-family="system-ui" font-size="6" fill="#fff">Ley Agraria y Gob. Municipal</text><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">18-19 oct.1881</text></svg>'
  },
  {
    type: "ai",
    caption: "Derrota y prision de Juan Santiago",
    svg: '<svg viewBox="0 0 190 130" xmlns="http://www.w3.org/2000/svg"><rect width="190" height="130" fill="#0e0c0a" rx="3"/><rect x="40" y="35" width="105" height="50" fill="#2a2520" stroke="#5a4a3a" stroke-width="2" rx="4"/><line x1="60" y1="35" x2="60" y2="85" stroke="#3a3530" stroke-width="2"/><line x1="125" y1="35" x2="125" y2="85" stroke="#3a3530" stroke-width="2"/><line x1="40" y1="62" x2="145" y2="62" stroke="#3a3530" stroke-width="1"/><circle cx="92" cy="72" r="6" fill="#3a2a20" stroke="#5a4a3a" stroke-width="1"/><rect x="70" y="45" width="45" height="12" fill="#5a4a3a" rx="2"/><text x="73" y="54" font-family="system-ui" font-size="6" fill="#d89548">Prision</text><text x="35" y="118" font-family="system-ui" font-size="7" fill="#d89548">nov.1881-1889</text></svg>'
  }
];

const personajeImages = [
  {
    type: "historical",
    caption: "Tratado de Paz de Tamazunchale, firmado el 24 de agosto de 1879 entre las comisiones indigenas y el jefe de partido",
    year: "24 de agosto de 1879",
    source: "Archivo Historico de la SEDENA, exp. 481.4/11653, ff.44-45. Disponible en: https://hmpi.historicas.unam.mx/fuentes/planes/tratado-tamazunchale-1879",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="js-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><linearGradient id="js-doc-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7f312c"/><stop offset="100%" stop-color="#5a2018"/></linearGradient></defs><rect width="300" height="220" fill="url(#js-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#a8612c" stroke-width="1" rx="3" opacity="0.4"/><rect x="16" y="14" width="268" height="150" fill="#f5edd8" rx="3" filter="drop-shadow(2px 3px 6px rgba(0,0,0,0.3))"/><rect x="16" y="14" width="268" height="26" fill="url(#js-doc-top)" rx="3"/><text x="24" y="31" font-family="Georgia,serif" font-size="11" fill="#fff" font-weight="bold">TRATADO DE PAZ</text><text x="205" y="31" font-family="system-ui,sans-serif" font-size="8" fill="#f4c47b">24 agosto 1879</text><line x1="28" y1="52" x2="272" y2="52" stroke="#241d18" stroke-width="1.2" opacity="0.45"/><line x1="28" y1="64" x2="258" y2="64" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="28" y1="76" x2="268" y2="76" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="28" y1="88" x2="252" y2="88" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="28" y1="100" x2="262" y2="100" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="28" y1="112" x2="248" y2="112" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="28" y1="124" x2="260" y2="124" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><rect x="22" y="134" width="84" height="18" fill="#a8612c" rx="2"/><text x="26" y="146" font-family="system-ui,sans-serif" font-size="7.5" fill="#fff" font-weight="bold">COMISIONES INDIGENAS</text><text x="114" y="146" font-family="Georgia,serif" font-size="9" fill="#241d18">y Juan José Terrazas</text><rect x="22" y="156" width="110" height="14" fill="#596b43" rx="2"/><text x="26" y="167" font-family="system-ui,sans-serif" font-size="6.5" fill="#fff">SEDENA Exp. 481.4/11653</text><rect x="22" y="174" width="80" height="14" fill="#566a73" rx="2"/><text x="26" y="184" font-family="system-ui,sans-serif" font-size="6.5" fill="#fff">UNAM-IIH Digital</text><text x="150" y="208" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Juan Santiago</text></svg>'
  },
  {
    type: "historical",
    caption: "Fotografia estereoscopica de la Huasteca Potosina con comunidad indigena nahua y tenek",
    year: "1884-1888",
    source: "Basado en fotografias de William Henry Jackson y Justo Ibarra: Repositorio INAH / LOC",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="com-bg" cx="50%" cy="50%" r="75%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><linearGradient id="com-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8a9a7a"/><stop offset="40%" stop-color="#6a7a5a"/><stop offset="100%" stop-color="#4a5a3a"/></linearGradient><linearGradient id="com-earth" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a4a2a"/><stop offset="100%" stop-color="#3a2a1a"/></linearGradient></defs><rect width="300" height="220" fill="url(#com-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#596b43" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><rect x="15" y="14" width="270" height="148" fill="url(#com-sky)" opacity="0.4"/><path d="M0 130 Q40 110 80 118 Q120 100 160 112 Q200 98 240 108 Q260 102 285 110 L285 162 L15 162 Z" fill="url(#com-earth)" opacity="0.5"/><path d="M15 145 Q60 125 120 132 Q180 118 240 128 Q260 122 285 130 L285 162 L15 162 Z" fill="#3a4a2a" opacity="0.4"/><circle cx="75" cy="78" r="16" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="150" cy="72" r="16" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="225" cy="78" r="16" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="110" cy="95" r="14" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="190" cy="95" r="14" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><ellipse cx="150" cy="100" rx="30" ry="6" fill="#a8612c" opacity="0.15"/><circle cx="72" cy="74" r="2" fill="#1a1410"/><circle cx="78" cy="74" r="2" fill="#1a1410"/><circle cx="147" cy="68" r="2" fill="#1a1410"/><circle cx="153" cy="68" r="2" fill="#1a1410"/><circle cx="222" cy="74" r="2" fill="#1a1410"/><circle cx="228" cy="74" r="2" fill="#1a1410"/><rect x="65" y="112" width="170" height="16" fill="#7f312c" rx="2" opacity="0.85"/><text x="75" y="124" font-family="system-ui,sans-serif" font-size="9" fill="#fff">COMUNIDAD NAHUA / TENEK</text><text x="70" y="146" font-family="system-ui,sans-serif" font-size="6" fill="#d89548">W.H. Jackson / J. Ibarra, c. 1884-1888</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Comunidades nahuas y tenek</text></svg>'
  },
  {
    type: "historical",
    caption: "Expediente oficial de la Jefatura Politica de Tamazunchale, documentos administrativos del Partido durante la rebelion",
    year: "1879-1880",
    source: "Archivo Historico de San Luis Potosi / Archivo General de la Nacion, ramo Gobernacion",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="jt-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><filter id="jt-shadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.25"/></filter></defs><rect width="300" height="220" fill="url(#jt-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#a8612c" stroke-width="1" rx="3" opacity="0.4"/><rect x="20" y="14" width="120" height="145" fill="#ede2cc" rx="2" transform="rotate(-1.8,80,85)" filter="url(#jt-shadow)"/><rect x="28" y="18" width="90" height="14" fill="#7f312c" rx="2" transform="rotate(-1.8,80,85)"/><text x="34" y="29" font-family="system-ui,sans-serif" font-size="7" fill="#fff" transform="rotate(-1.8,80,85)" font-weight="bold">JEFATURA POLITICA</text><line x1="30" y1="44" x2="130" y2="43" stroke="#241d18" stroke-width="1" opacity="0.35" transform="rotate(-1.8,80,85)"/><line x1="30" y1="56" x2="126" y2="55" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(-1.8,80,85)"/><line x1="30" y1="68" x2="122" y2="67" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(-1.8,80,85)"/><line x1="30" y1="80" x2="128" y2="79" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(-1.8,80,85)"/><line x1="30" y1="92" x2="118" y2="91" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(-1.8,80,85)"/><line x1="30" y1="104" x2="124" y2="103" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(-1.8,80,85)"/><rect x="28" y="48" width="70" height="10" fill="#a8612c" rx="1" transform="rotate(-1.8,80,85)"/><text x="30" y="56" font-family="system-ui,sans-serif" font-size="5.5" fill="#fff" transform="rotate(-1.8,80,85)">Partido de Tamazunchale</text><rect x="155" y="25" width="125" height="134" fill="#f5edd8" rx="2" transform="rotate(1.2,217,92)" filter="url(#jt-shadow)"/><rect x="160" y="29" width="90" height="16" fill="#596b43" rx="2" transform="rotate(1.2,217,92)"/><text x="166" y="41" font-family="system-ui,sans-serif" font-size="7.5" fill="#fff" transform="rotate(1.2,217,92)" font-weight="bold">JUAN JOSE TERRAZAS</text><line x1="168" y1="55" x2="270" y2="56" stroke="#241d18" stroke-width="1" opacity="0.4" transform="rotate(1.2,217,92)"/><line x1="168" y1="67" x2="262" y2="68" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(1.2,217,92)"/><line x1="168" y1="79" x2="268" y2="80" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(1.2,217,92)"/><line x1="168" y1="91" x2="256" y2="92" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(1.2,217,92)"/><line x1="168" y1="103" x2="264" y2="104" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(1.2,217,92)"/><line x1="168" y1="115" x2="252" y2="116" stroke="#241d18" stroke-width="0.8" opacity="0.3" transform="rotate(1.2,217,92)"/><rect x="155" y="128" width="125" height="12" fill="#a8612c" rx="2" transform="rotate(1.2,217,92)"/><text x="165" y="137" font-family="system-ui,sans-serif" font-size="6.5" fill="#fff" transform="rotate(1.2,217,92)">Jefe Politico de Tamazunchale</text><text x="150" y="208" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Juan Jose Terrazas</text></svg>'
  },
  {
    type: "historical",
    caption: "Periodico de la epoca reportando las medidas represivas del gobierno estatal en la Huasteca Potosina",
    year: "c. 1880",
    source: "Basado en periodicos potosinos del Porfiriato, Hemeroteca Nacional Digital de Mexico",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="au-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#au-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#7f312c" stroke-width="1" rx="3" opacity="0.4"/><rect x="16" y="14" width="268" height="155" fill="#ede2cc" rx="3" filter="drop-shadow(2px 3px 6px rgba(0,0,0,0.25))"/><rect x="20" y="18" width="140" height="22" fill="#7f312c" rx="2"/><text x="26" y="33" font-family="Georgia,serif" font-size="11" fill="#fff" font-weight="bold">LA SOMBRA DE ZARAGOZA</text><line x1="20" y1="45" x2="280" y2="45" stroke="#241d18" stroke-width="2.5"/><rect x="20" y="50" width="130" height="16" fill="#a8612c" rx="2"/><text x="24" y="61" font-family="system-ui,sans-serif" font-size="8" fill="#fff" font-weight="bold">REPRESION EN HUASTECA</text><rect x="160" y="50" width="125" height="16" fill="#596b43" rx="2"/><text x="164" y="61" font-family="system-ui,sans-serif" font-size="8" fill="#fff" font-weight="bold">NUEVO JEFE POLITICO</text><line x1="20" y1="72" x2="280" y2="72" stroke="#241d18" stroke-width="1" opacity="0.3"/><line x1="20" y1="84" x2="270" y2="84" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="96" x2="275" y2="96" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="108" x2="262" y2="108" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="120" x2="268" y2="120" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="132" x2="258" y2="132" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="144" x2="265" y2="144" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="20" y1="156" x2="255" y2="156" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><rect x="20" y="158" width="120" height="14" fill="#7f312c" rx="2"/><text x="24" y="168" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Coronel Agustin Ugarte</text><rect x="148" y="158" width="135" height="14" fill="#566a73" rx="2"/><text x="152" y="168" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Jefe Politico — Febrero 1880</text><text x="150" y="208" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Agustin Ugarte</text></svg>'
  },
  {
    type: "historical",
    caption: "Retrato de Carlos Diez Gutierrez, gobernador de San Luis Potosi",
    year: "c. 1880",
    source: "Basado en retratos oficiales del gobernador Diez Gutierrez. Coleccion: ILCE / Biblioteca Digital",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="cdg-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><linearGradient id="cdg-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8d8c0"/><stop offset="50%" stop-color="#d4c4a4"/><stop offset="100%" stop-color="#b8a888"/></linearGradient><linearGradient id="cdg-jacket" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a2520"/><stop offset="100%" stop-color="#1a1512"/></linearGradient><clipPath id="cdg-oval"><ellipse cx="150" cy="95" rx="62" ry="72"/></clipPath></defs><rect width="300" height="220" fill="url(#cdg-bg)"/><ellipse cx="150" cy="95" rx="70" ry="80" fill="none" stroke="#d4c4a4" stroke-width="2" opacity="0.6"/><g clip-path="url(#cdg-oval)"><ellipse cx="150" cy="95" rx="62" ry="72" fill="#2a1f15"/><ellipse cx="145" cy="88" rx="55" ry="65" fill="#3a2a18"/><ellipse cx="145" cy="88" rx="50" ry="58" fill="url(#cdg-skin)"/><ellipse cx="145" cy="78" rx="26" ry="32" fill="#e8d8c0"/><ellipse cx="140" cy="85" rx="20" ry="22" fill="#d4c4a4"/><ellipse cx="142" cy="72" r="3" fill="#1a1410"/><ellipse cx="156" cy="72" r="3" fill="#1a1410"/><path d="M144 84 Q148 88 152 84" stroke="#1a1410" stroke-width="1.5" fill="none"/><path d="M135 62 Q148 55 160 62" fill="none" stroke="#1a1410" stroke-width="2.5"/><path d="M140 95 L155 95" stroke="#1a1410" stroke-width="1" opacity="0.4"/><ellipse cx="148" cy="96" rx="8" ry="4" stroke="#1a1410" stroke-width="1" fill="none"/><rect x="125" y="105" width="48" height="58" fill="url(#cdg-jacket)" rx="3"/><rect x="128" y="108" width="42" height="12" fill="#d4c4a4" rx="1"/><path d="M130 120 L168 120" stroke="#d4c4a4" stroke-width="0.5" opacity="0.3"/><path d="M130 128 L168 128" stroke="#d4c4a4" stroke-width="0.5" opacity="0.3"/><ellipse cx="148" cy="115" rx="3" ry="4" fill="#a8612c"/><path d="M110 108 Q148 80 186 108" fill="none" stroke="#1a1512" stroke-width="6"/></g><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Carlos Diez Gutierrez</text></svg>'
  },
  {
    type: "historical",
    caption: "Retrato del presidente Porfirio Diaz",
    year: "c. 1880",
    source: "Basado en fotografias historicas de la epoca. Coleccion: SINAFO-Fototeca Nacional / INAH",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="pd-bg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><linearGradient id="pd-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8d8c0"/><stop offset="50%" stop-color="#d4c4a4"/><stop offset="100%" stop-color="#b8a888"/></linearGradient><linearGradient id="pd-uniform" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2a2520"/><stop offset="100%" stop-color="#1a1512"/></linearGradient><clipPath id="pd-oval"><ellipse cx="150" cy="95" rx="62" ry="72"/></clipPath></defs><rect width="300" height="220" fill="url(#pd-bg)"/><ellipse cx="150" cy="95" rx="70" ry="80" fill="none" stroke="#d4c4a4" stroke-width="2" opacity="0.6"/><g clip-path="url(#pd-oval)"><ellipse cx="150" cy="95" rx="62" ry="72" fill="#2a1f15"/><ellipse cx="145" cy="88" rx="55" ry="65" fill="#3a2818"/><ellipse cx="145" cy="88" rx="50" ry="58" fill="url(#pd-skin)"/><ellipse cx="145" cy="76" rx="28" ry="32" fill="#e8d8c0"/><ellipse cx="140" cy="85" rx="20" ry="22" fill="#d4c4a4"/><ellipse cx="142" cy="70" r="3" fill="#1a1410"/><ellipse cx="158" cy="70" r="3" fill="#1a1410"/><path d="M144 82 Q148 86 152 82" stroke="#1a1410" stroke-width="1.5" fill="none"/><path d="M130 58 Q148 48 166 58" fill="none" stroke="#1a1410" stroke-width="3"/><ellipse cx="148" cy="93" rx="9" ry="4" stroke="#1a1410" stroke-width="1.5" fill="none"/><path d="M138 105 Q148 112 158 105" stroke="#1a1410" stroke-width="1.2" fill="none"/><rect x="125" y="108" width="48" height="55" fill="url(#pd-uniform)" rx="3"/><path d="M128 112 L170 112" stroke="#a8612c" stroke-width="1.5"/><rect x="128" y="115" width="8" height="6" fill="#a8612c" rx="1"/><rect x="162" y="115" width="8" height="6" fill="#a8612c" rx="1"/><rect x="140" y="115" width="18" height="4" fill="#7f312c" rx="1"/><path d="M128 118 L170 118" stroke="#a8612c" stroke-width="1"/><path d="M108 108 Q148 76 188 108" fill="none" stroke="#1a1512" stroke-width="6"/></g><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Porfirio Diaz</text></svg>'
  },
  {
    type: "historical",
    caption: "Litografia de notables potosinos del Porfiriato, elite economica y politica de la Huasteca",
    year: "c. 1879",
    source: "Basado en registros de la familia Santos y redes de poder regional documentadas en el AGN",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="fs-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient><linearGradient id="fs-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e8d8c0"/><stop offset="100%" stop-color="#c4b49a"/></linearGradient></defs><rect width="300" height="220" fill="url(#fs-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#8b6f47" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><rect x="15" y="14" width="270" height="148" fill="#2a2015" opacity="0.6"/><ellipse cx="90" cy="68" rx="22" ry="26" fill="url(#fs-skin)" stroke="#8b6f47" stroke-width="1"/><ellipse cx="150" cy="62" rx="24" ry="28" fill="url(#fs-skin)" stroke="#8b6f47" stroke-width="1"/><ellipse cx="210" cy="68" rx="22" ry="26" fill="url(#fs-skin)" stroke="#8b6f47" stroke-width="1"/><rect x="72" y="88" width="36" height="40" fill="#1a1512" rx="2"/><rect x="75" y="90" width="30" height="8" fill="#d4c4a4" rx="1"/><rect x="132" y="86" width="36" height="42" fill="#1a1512" rx="2"/><rect x="135" y="88" width="30" height="8" fill="#d4c4a4" rx="1"/><rect x="192" y="88" width="36" height="40" fill="#1a1512" rx="2"/><rect x="195" y="90" width="30" height="8" fill="#d4c4a4" rx="1"/><path d="M66 96 L90 82 L114 96" stroke="#8b6f47" stroke-width="0.8" fill="none"/><path d="M128 92 L150 80 L172 92" stroke="#8b6f47" stroke-width="0.8" fill="none"/><path d="M188 96 L210 82 L232 96" stroke="#8b6f47" stroke-width="0.8" fill="none"/><rect x="50" y="110" width="200" height="16" fill="#a8612c" rx="2" opacity="0.85"/><text x="58" y="121" font-family="system-ui,sans-serif" font-size="9" fill="#fff">FAMILIA SANTOS Y NOTABLES</text><rect x="55" y="130" width="190" height="12" fill="#566a73" rx="2"/><text x="60" y="139" font-family="system-ui,sans-serif" font-size="7" fill="#fff" opacity="0.8">Red de poder economico y politico</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Familia Santos y notables regionales</text></svg>'
  },
  {
    type: "historical",
    caption: "Documento de propiedad y concentracion territorial: haciendas y condueñazgos en la Huasteca Potosina",
    year: "c. 1878",
    source: "Basado en registros de propiedad del Archivo de San Luis Potosi; 42.92% del partido de Tamazunchale era haciendas (1878)",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="ha-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#ha-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#8b6f47" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><rect x="30" y="30" width="240" height="55" fill="#3a2a18" stroke="#8b6f47" stroke-width="1.5" rx="2"/><text x="55" y="60" font-family="Georgia,serif" font-size="20" fill="#d4c4a4" font-weight="bold">HACIENDA</text><text x="170" y="70" font-family="system-ui,sans-serif" font-size="9" fill="#a8612c">42.92% del partido</text><rect x="30" y="95" width="75" height="12" fill="#596b43" rx="1" opacity="0.6"/><rect x="115" y="95" width="75" height="12" fill="#596b43" rx="1" opacity="0.6"/><rect x="200" y="95" width="70" height="12" fill="#596b43" rx="1" opacity="0.6"/><rect x="30" y="112" width="110" height="12" fill="#596b43" rx="1" opacity="0.45"/><rect x="150" y="112" width="120" height="12" fill="#596b43" rx="1" opacity="0.45"/><rect x="30" y="129" width="160" height="12" fill="#596b43" rx="1" opacity="0.3"/><rect x="200" y="129" width="70" height="12" fill="#596b43" rx="1" opacity="0.3"/><rect x="30" y="146" width="100" height="8" fill="#596b43" rx="1" opacity="0.2"/><text x="30" y="155" font-family="system-ui,sans-serif" font-size="6" fill="#d89548">Condueñazgos y tierras en disputa</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Hacendados y condueños</text></svg>'
  },
  {
    type: "historical",
    caption: "Oficio de visitaduria estatal: documento de mediacion e investigacion de la rebelion",
    year: "c. 1879-1880",
    source: "Basado en documentos de visitaduria del Archivo de San Luis Potosi y AGN",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="vi-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#vi-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#a8612c" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><rect x="30" y="25" width="240" height="95" fill="#3a2a18" stroke="#8b6f47" stroke-width="1" rx="3"/><rect x="35" y="30" width="230" height="16" fill="#7f312c" rx="2"/><text x="40" y="42" font-family="system-ui,sans-serif" font-size="8" fill="#fff" font-weight="bold">VISITADURIA ESTATAL</text><line x1="40" y1="54" x2="260" y2="54" stroke="#8b6f47" stroke-width="0.8" opacity="0.4"/><line x1="40" y1="66" x2="250" y2="66" stroke="#8b6f47" stroke-width="0.8" opacity="0.35"/><line x1="40" y1="78" x2="255" y2="78" stroke="#8b6f47" stroke-width="0.8" opacity="0.35"/><line x1="40" y1="90" x2="245" y2="90" stroke="#8b6f47" stroke-width="0.8" opacity="0.35"/><line x1="40" y1="102" x2="258" y2="102" stroke="#8b6f47" stroke-width="0.8" opacity="0.35"/><circle cx="45" cy="48" r="7" fill="#a8612c"/><text x="41" y="52" font-family="system-ui,sans-serif" font-size="7" fill="#fff" font-weight="bold">V</text><rect x="40" y="114" width="100" height="12" fill="#a8612c" rx="2"/><text x="44" y="123" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Comision investigadora</text><rect x="150" y="114" width="110" height="12" fill="#566a73" rx="2"/><text x="154" y="123" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Gobierno del Estado SLP</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Visitadores estatales</text></svg>'
  },
  {
    type: "historical",
    caption: "Manifiesto del Directorio Socialista y proclama del Ejercito del Pueblo, movimiento agrarista vinculado a la rebelion de Tamazunchale",
    year: "c. 1880",
    source: "Basado en referencias historicas al Directorio Socialista y sus vinculos con la Huasteca Potosina",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="mh-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#mh-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#596b43" stroke-width="1" rx="3" opacity="0.4"/><rect x="16" y="14" width="268" height="150" fill="#f5edd8" rx="3" filter="drop-shadow(2px 3px 6px rgba(0,0,0,0.25))"/><rect x="16" y="14" width="268" height="26" fill="#596b43" rx="3"/><text x="22" y="31" font-family="Georgia,serif" font-size="11" fill="#fff" font-weight="bold">DIRECTORIO SOCIALISTA</text><text x="190" y="31" font-family="system-ui,sans-serif" font-size="7" fill="#c4d4a4">Ejercito del Pueblo</text><rect x="22" y="46" width="100" height="14" fill="#7f312c" rx="2"/><text x="26" y="56" font-family="system-ui,sans-serif" font-size="7" fill="#fff" font-weight="bold">MANIFIESTO AGRARISTA</text><line x1="22" y1="68" x2="278" y2="68" stroke="#241d18" stroke-width="1.2" opacity="0.45"/><line x1="22" y1="80" x2="262" y2="80" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="22" y1="92" x2="270" y2="92" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="22" y1="104" x2="256" y2="104" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="22" y1="116" x2="266" y2="116" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><line x1="22" y1="128" x2="252" y2="128" stroke="#241d18" stroke-width="0.8" opacity="0.3"/><rect x="22" y="136" width="130" height="16" fill="#7f312c" rx="2"/><text x="26" y="147" font-family="system-ui,sans-serif" font-size="7" fill="#fff">LINEA HUASTECA POTOSINA</text><rect x="160" y="136" width="110" height="16" fill="#a8612c" rx="2"/><text x="164" y="147" font-family="system-ui,sans-serif" font-size="7" fill="#fff">2.o JEFE: M. HERNANDEZ</text><text x="150" y="208" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Matias Hernandez</text></svg>'
  },
  {
    type: "historical",
    caption: "Fotografia de guardias nacionales y fuerzas estatales durante el Porfiriato en San Luis Potosi",
    year: "1879-1889",
    source: "Basado en descripciones militares de la pacificacion; referencia visual: Archivo Casasola / Fototeca Nacional INAH",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="gn-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#gn-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#596b43" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><rect x="15" y="14" width="270" height="148" fill="#2a2018" opacity="0.5"/><rect x="30" y="35" width="240" height="75" fill="#2a2520" stroke="#5a4a3a" stroke-width="1.5" rx="3"/><line x1="60" y1="35" x2="60" y2="110" stroke="#3a3530" stroke-width="4"/><line x1="120" y1="35" x2="120" y2="110" stroke="#3a3530" stroke-width="4"/><line x1="180" y1="35" x2="180" y2="110" stroke="#3a3530" stroke-width="4"/><line x1="240" y1="35" x2="240" y2="110" stroke="#3a3530" stroke-width="4"/><ellipse cx="60" cy="55" rx="12" ry="14" fill="#c4a67a"/><ellipse cx="120" cy="52" rx="14" ry="16" fill="#c4a67a"/><ellipse cx="180" cy="55" rx="12" ry="14" fill="#c4a67a"/><ellipse cx="240" cy="53" rx="12" ry="14" fill="#c4a67a"/><rect x="48" y="69" width="24" height="26" fill="#5a4a3a" rx="2"/><rect x="108" y="68" width="24" height="27" fill="#5a4a3a" rx="2"/><rect x="168" y="69" width="24" height="26" fill="#5a4a3a" rx="2"/><rect x="228" y="69" width="24" height="26" fill="#5a4a3a" rx="2"/><rect x="40" y="115" width="220" height="14" fill="#7f312c" rx="2" opacity="0.85"/><text x="48" y="125" font-family="system-ui,sans-serif" font-size="9" fill="#fff">GUARDIAS NACIONALES — FUERZAS ESTATALES</text><rect x="42" y="133" width="216" height="12" fill="#566a73" rx="2"/><text x="48" y="142" font-family="system-ui,sans-serif" font-size="6.5" fill="#fff">Pacificacion: SLP, Hidalgo, Queretaro, Cd. del Maiz</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Guardias nacionales y fuerzas estatales</text></svg>'
  },
  {
    type: "historical",
    caption: "Fotografia de peones y campesinos en hacienda de la Huasteca Potosina durante el Porfiriato",
    year: "c. 1881",
    source: "Basado en descripciones de la participacion campesina; referencia: W.H. Jackson, Hacienda de Tamasopo c.1888",
    svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="pe-bg" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#3a2a1a"/><stop offset="100%" stop-color="#1a1410"/></radialGradient></defs><rect width="300" height="220" fill="url(#pe-bg)"/><rect x="8" y="8" width="284" height="204" fill="none" stroke="#596b43" stroke-width="1" rx="3" opacity="0.4"/><rect x="15" y="14" width="270" height="148" fill="#1a1512" rx="2"/><path d="M0 120 Q40 95 80 105 Q120 88 160 98 Q200 82 240 92 Q260 88 285 98 L285 162 L15 162 Z" fill="#3a4a2a" opacity="0.5"/><ellipse cx="75" cy="68" rx="16" ry="18" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><ellipse cx="150" cy="62" rx="16" ry="18" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><ellipse cx="225" cy="68" rx="16" ry="18" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><ellipse cx="110" cy="88" rx="14" ry="16" fill="#c4a67a" stroke="#8b6f47" stroke-width="0.8"/><ellipse cx="190" cy="88" rx="14" ry="16" fill="#c4a67a" stroke="#8b6f47" stroke-width="0.8"/><rect x="62" y="84" width="26" height="35" fill="#7f312c" rx="1" opacity="0.8"/><rect x="137" y="78" width="26" height="38" fill="#7f312c" rx="1" opacity="0.8"/><rect x="212" y="84" width="26" height="35" fill="#7f312c" rx="1" opacity="0.8"/><rect x="100" y="100" width="20" height="28" fill="#7f312c" rx="1" opacity="0.7"/><rect x="180" y="100" width="20" height="28" fill="#7f312c" rx="1" opacity="0.7"/><rect x="70" y="118" width="160" height="16" fill="#7f312c" rx="2" opacity="0.85"/><text x="78" y="129" font-family="system-ui,sans-serif" font-size="9" fill="#fff">PEONES Y CAMPESINOS DE HACIENDA</text><text x="75" y="148" font-family="system-ui,sans-serif" font-size="6.5" fill="#d89548">Hacienda de Santa Isabel y otras — 1881</text><text x="150" y="206" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8ab4c4" font-weight="bold">Peones y campesinos</text></svg>'
  }
];

const galeria = [
  {
    title: "Mapa del Partido de Tamazunchale",
    type: "historical",
    category: "mapa",
    description: "El partido de Tamazunchale comprendia los municipios de Tamazunchale, Axtla, San Martin Chalchicuautla y Tampacan en la region de la Huasteca Potosina. Este mapa esquematico muestra la distribucion territorial donde ocurrio la rebelion.",
    date: "c. 1879",
    source: "Representacion basada en cartografia del Archivo Historico de San Luis Potosi",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1e6cf" rx="6"/><path d="M50 160 L100 120 L150 140 L200 90 L250 120" stroke="#7f312c" stroke-width="3" fill="none" stroke-dasharray="8 5"/><path d="M60 170 L110 130 L160 150 L210 100" stroke="#a8612c" stroke-width="2" fill="none" stroke-dasharray="5 4"/><circle cx="100" cy="120" r="8" fill="#7f312c"/><text x="115" y="125" font-family="Georgia" font-size="8" fill="#241d18">Tamazunchale</text><circle cx="150" cy="140" r="6" fill="#241d18"/><text x="163" y="144" font-family="Georgia" font-size="7" fill="#241d18">Tampacan</text><circle cx="200" cy="90" r="6" fill="#241d18"/><text x="213" y="94" font-family="Georgia" font-size="7" fill="#241d18">Axtla</text><circle cx="60" cy="170" r="6" fill="#241d18"/><text x="73" y="174" font-family="Georgia" font-size="7" fill="#241d18">Tancanhuitz</text><path d="M20 20 L280 20 L280 180 L20 180 Z" fill="none" stroke="#241d18" stroke-width="0.5" opacity="0.3"/></svg>'
  },
  {
    title: "Retrato conceptual de Juan Santiago",
    type: "ai",
    category: "personaje",
    description: "Juan Santiago fue el gobernador indigena que lidero la rebelion. Originario de Tamazunchale, articulo a las comunidades nahuas y tenek en defensa de sus tierras comunales y su autoridad tradicional frente al gobierno porfirista.",
    date: "c. 1879",
    source: "No existen fotografias conocidas de Juan Santiago. Representacion basada en descripciones de fuentes historicas",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><circle cx="150" cy="75" r="35" fill="#c4a67a" stroke="#8b6f47" stroke-width="2"/><circle cx="140" cy="68" r="3" fill="#241d18"/><circle cx="160" cy="68" r="3" fill="#241d18"/><path d="M145 83 Q150 87 155 83" stroke="#241d18" stroke-width="1.5" fill="none"/><rect x="120" y="110" width="60" height="55" fill="#7f312c" stroke="#5a2018" stroke-width="1.5" rx="3"/><rect x="125" y="115" width="50" height="10" fill="#a8612c" rx="2"/><text x="128" y="123" font-family="system-ui" font-size="7" fill="#241d18">Gobernador</text><text x="10" y="190" font-family="Georgia" font-size="7" fill="#241d18">Juan Santiago</text></svg>'
  },
  {
    title: "Vista de Tamazunchale en el siglo XIX",
    type: "ai",
    category: "lugar",
    description: "Tamazunchale era la cabecera del partido homonimo en la Huasteca Potosina. Pueblo de mayoria nahua, con una plaza principal, iglesia y edificios de gobierno que fueron escenario de los sucesos de 1879-1889.",
    date: "c. 1880",
    source: "Representacion basada en descripciones de viajeros y documentos de la epoca",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e8dcc4" rx="6"/><path d="M0 150 Q50 130 100 140 Q150 120 200 135 Q250 115 300 130 L300 200 L0 200 Z" fill="#596b43" opacity="0.5"/><rect x="100" y="80" width="50" height="50" fill="#d4b896" stroke="#8b6f47" stroke-width="1.5"/><rect x="108" y="90" width="12" height="12" fill="#a8612c" opacity="0.4"/><rect x="130" y="90" width="12" height="12" fill="#a8612c" opacity="0.4"/><path d="M100 80 L125 60 L150 80" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><rect x="180" y="90" width="60" height="40" fill="#b8a07a" stroke="#7a6548" stroke-width="1"/><path d="M180 90 L210 75 L240 90" fill="#c4a67a" stroke="#7a6548" stroke-width="1"/><circle cx="40" cy="60" r="20" fill="#596b43" opacity="0.4"/><text x="10" y="190" font-family="Georgia" font-size="7" fill="#241d18">Tamazunchale, c. 1880</text></svg>'
  },
  {
    title: "Carta atribuida a Porfirio Diaz",
    type: "ai",
    category: "documento",
    description: "Durante la ocupacion de la plaza en julio de 1879, Juan Santiago portaba una carta que decia haber recibido del presidente Porfirio Diaz, donde se le facultaba para resolver el conflicto de tierras. Las autoridades la consideraron apocrifa.",
    date: "c. 1879",
    source: "Representacion basada en referencias de la carta mencionada en fuentes historicas",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f5edd8" rx="6"/><rect x="40" y="35" width="220" height="140" fill="#faf2e0" stroke="#8b6f47" stroke-width="1.5" rx="3"/><rect x="45" y="40" width="50" height="15" fill="#7f312c" rx="2"/><text x="48" y="52" font-family="system-ui" font-size="8" fill="#fff">Carta presidencial</text><line x1="60" y1="70" x2="240" y2="70" stroke="#241d18" stroke-width="1.5" opacity="0.5"/><line x1="60" y1="85" x2="220" y2="85" stroke="#241d18" stroke-width="1" opacity="0.35"/><line x1="60" y1="98" x2="230" y2="98" stroke="#241d18" stroke-width="1" opacity="0.35"/><line x1="60" y1="111" x2="210" y2="111" stroke="#241d18" stroke-width="1" opacity="0.35"/><line x1="60" y1="124" x2="225" y2="124" stroke="#241d18" stroke-width="1" opacity="0.35"/><line x1="60" y1="137" x2="200" y2="137" stroke="#241d18" stroke-width="1" opacity="0.35"/><rect x="55" y="150" width="70" height="15" fill="#a8612c" rx="2"/><text x="58" y="161" font-family="system-ui" font-size="7" fill="#fff">Atribuida a Diaz</text></svg>'
  },
  {
    title: "Carlos Diez Gutierrez, Gobernador de San Luis Potosi",
    type: "ai",
    category: "personaje",
    description: "Gobernador de San Luis Potosi durante el Porfiriato. Impulso la division de tierras comunales y coordino la represion militar de la rebelion, negandose a negociar con Juan Santiago. Represento la logica centralizadora del regimen porfirista.",
    date: "c. 1880",
    source: "Representacion basada en documentacion historica sobre su gobierno",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><circle cx="150" cy="70" r="30" fill="#d4c4a4" stroke="#8b6f47" stroke-width="2"/><circle cx="142" cy="64" r="2.5" fill="#241d18"/><circle cx="158" cy="64" r="2.5" fill="#241d18"/><path d="M145 78 Q150 82 155 78" stroke="#241d18" stroke-width="1.5" fill="none"/><rect x="120" y="100" width="60" height="60" fill="#241d18" stroke="#3a3530" stroke-width="1.5" rx="3"/><rect x="125" y="105" width="50" height="10" fill="#a8612c" rx="2"/><text x="128" y="113" font-family="system-ui" font-size="7" fill="#fff">Gobernador</text><text x="10" y="190" font-family="Georgia" font-size="7" fill="#241d18">Carlos Diez Gutierrez</text></svg>'
  },
  {
    title: "Comunidades nahuas y tenek de la Huasteca",
    type: "ai",
    category: "personaje",
    description: "Las comunidades nahuas y tenek (huastecos) fueron la base social del movimiento. Mantenian autoridades propias, sistemas de trabajo colectivo y una relacion ancestral con la tierra que chocaba con el liberalismo municipal y la expansion hacendaria.",
    date: "1879-1889",
    source: "Representacion basada en la presencia historica de pueblos nahuas y tenek en la Huasteca Potosina",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e8dcc4" rx="6"/><path d="M0 160 Q80 130 150 140 Q220 120 300 140 L300 200 L0 200 Z" fill="#596b43" opacity="0.5"/><circle cx="100" cy="110" r="14" fill="#c4a67a" stroke="#8b6f47" stroke-width="1.5"/><circle cx="150" cy="105" r="14" fill="#c4a67a" stroke="#8b6f47" stroke-width="1.5"/><circle cx="200" cy="110" r="14" fill="#c4a67a" stroke="#8b6f47" stroke-width="1.5"/><circle cx="125" cy="125" r="12" fill="#c4a67a" stroke="#8b6f47" stroke-width="1.5"/><circle cx="175" cy="125" r="12" fill="#c4a67a" stroke="#8b6f47" stroke-width="1.5"/><rect x="100" y="140" width="100" height="15" fill="#7f312c" rx="2"/><text x="108" y="151" font-family="system-ui" font-size="7" fill="#fff">Comunidad nahua / tenek</text></svg>'
  },
  {
    title: "Sierra de San Francisco, centro de reunion rebelde",
    type: "ai",
    category: "lugar",
    description: "La Sierra de San Francisco fue el punto de reunion donde Juan Santiago y sus aliados de Las Moras, Jacala y Molango planearon la reactivacion del movimiento en 1881. Zona montanosa que conectaba San Luis Potosi con Hidalgo.",
    date: "Agosto-septiembre de 1881",
    source: "Representacion basada en referencias geograficas de la rebelion",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#2a211b" rx="6"/><path d="M0 130 Q40 70 80 90 Q120 50 160 80 Q200 40 240 70 Q270 50 300 65 L300 200 L0 200 Z" fill="#3a4a2a"/><path d="M0 155 Q60 110 130 120 Q200 95 260 115 L300 110 L300 200 L0 200 Z" fill="#2a3a1a"/><circle cx="100" cy="90" r="4" fill="#a8612c" opacity="0.8"/><circle cx="120" cy="85" r="4" fill="#a8612c" opacity="0.8"/><circle cx="140" cy="80" r="4" fill="#a8612c" opacity="0.8"/><circle cx="160" cy="78" r="4" fill="#a8612c" opacity="0.8"/><text x="10" y="185" font-family="Georgia" font-size="7" fill="#d89548">Sierra de San Francisco</text></svg>'
  },
  {
    title: "Titulos de tierra comunal del siglo XIX",
    type: "ai",
    category: "documento",
    description: "Las comunidades indigenas conservaban titulos de propiedad de epoca colonial que acreditaban la posesion comunal de la tierra. Estos documentos fueron la base legal de la defensa territorial durante la rebelion y el eje de la disputa con haciendas y condueñazgos.",
    date: "Siglo XVIII-XIX",
    source: "Representacion basada en la tradicion de titulos de tierras comunales en Mexico",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><rect x="50" y="30" width="200" height="145" fill="#f5edd8" stroke="#8b6f47" stroke-width="2" rx="3" transform="rotate(-0.5, 150, 100)"/><rect x="55" y="35" width="45" height="15" fill="#596b43" rx="2"/><text x="58" y="46" font-family="system-ui" font-size="7" fill="#fff">Titulo comunal</text><path d="M70 65 L230 65" stroke="#241d18" stroke-width="1.5" opacity="0.5"/><path d="M70 80 L210 80" stroke="#241d18" stroke-width="1" opacity="0.35"/><path d="M70 93 L220 93" stroke="#241d18" stroke-width="1" opacity="0.35"/><path d="M70 106 L200 106" stroke="#241d18" stroke-width="1" opacity="0.35"/><path d="M70 119 L215 119" stroke="#241d18" stroke-width="1" opacity="0.35"/><path d="M70 132 L190 132" stroke="#241d18" stroke-width="1" opacity="0.35"/><rect x="55" y="150" width="80" height="15" fill="#7f312c" rx="2"/><text x="58" y="161" font-family="system-ui" font-size="7" fill="#fff">Propiedad comunal</text></svg>'
  },
  {
    title: "Huasteca Potosina: rios y vias de comunicacion",
    type: "ai",
    category: "mapa",
    description: "La Huasteca Potosina se caracteriza por sus rios caudalosos (Moctezuma, Tampaon, Axila), su vegetacion exuberante y sus caminos dificiles. Esta geografia influyo en la expansion y contencion del movimiento rebelde.",
    date: "c. 1879",
    source: "Representacion basada en cartografia geografica de la region",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1e6cf" rx="6"/><path d="M30 180 C90 150 120 170 180 130 C220 100 260 120 290 90" stroke="#566a73" stroke-width="8" fill="none" opacity="0.6" stroke-linecap="round"/><path d="M50 160 C100 130 140 150 200 100" stroke="#566a73" stroke-width="5" fill="none" opacity="0.4" stroke-linecap="round"/><path d="M0 80 Q80 60 150 90 Q220 70 300 100" stroke="#596b43" stroke-width="15" fill="none" opacity="0.3" stroke-linecap="round"/><circle cx="180" cy="130" r="7" fill="#7f312c"/><text x="195" y="135" font-family="Georgia" font-size="7" fill="#241d18">Tamazunchale</text><circle cx="100" cy="150" r="5" fill="#241d18"/><text x="112" y="154" font-family="Georgia" font-size="6" fill="#241d18">Tancanhuitz</text><text x="10" y="20" font-family="Georgia" font-size="9" fill="#241d18">Rios de la Huasteca</text></svg>'
  },
  {
    title: "Periódico de la epoca: La Sombra de Zaragoza",
    type: "ai",
    category: "documento",
    description: "Periodico que circulaba en San Luis Potosi y la Huasteca durante el Porfiriato, donde se reportaban los sucesos de la rebelion desde la perspectiva del gobierno estatal y las elites locales.",
    date: "c. 1879-1881",
    source: "Representacion basada en la prensa potosina del Porfiriato",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><rect x="40" y="30" width="220" height="145" fill="#faf2e0" stroke="#8b6f47" stroke-width="1" rx="2"/><rect x="50" y="38" width="200" height="25" fill="#7f312c" rx="1"/><text x="90" y="55" font-family="Georgia" font-size="11" fill="#fff" font-weight="bold">LA SOMBRA</text><line x1="50" y1="70" x2="250" y2="70" stroke="#241d18" stroke-width="2"/><rect x="50" y="75" width="95" height="15" fill="#a8612c" rx="1"/><text x="53" y="86" font-family="system-ui" font-size="7" fill="#fff">REBELION EN TAMAZUNCHALE</text><line x1="50" y1="98" x2="250" y2="98" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="110" x2="240" y2="110" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="122" x2="245" y2="122" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="134" x2="230" y2="134" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="50" y1="146" x2="235" y2="146" stroke="#241d18" stroke-width="1" opacity="0.4"/></svg>'
  },
  {
    title: "Taman, centro de operaciones rebelde",
    type: "ai",
    category: "lugar",
    description: "Taman fue senalado por las autoridades como el principal centro de operaciones de los sublevados durante la primera etapa armada de la rebelion, desde donde coordinaban las acciones contra la cabecera del partido.",
    date: "Julio-agosto de 1879",
    source: "Representacion basada en partes militares y documentos de la epoca",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#e8dcc4" rx="6"/><path d="M0 140 Q60 115 150 125 Q220 110 300 130 L300 200 L0 200 Z" fill="#596b43" opacity="0.4"/><rect x="110" y="70" width="80" height="50" fill="#d4b896" stroke="#8b6f47" stroke-width="1.5"/><rect x="120" y="80" width="15" height="15" fill="#7f312c" opacity="0.5"/><rect x="165" y="80" width="15" height="15" fill="#7f312c" opacity="0.5"/><path d="M110 70 L150 55 L190 70" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="80" cy="90" r="4" fill="#a8612c"/><circle cx="220" cy="85" r="4" fill="#a8612c"/><path d="M90 95 L80 85 L70 95" stroke="#7f312c" stroke-width="1" fill="none"/><text x="10" y="190" font-family="Georgia" font-size="7" fill="#241d18">Taman, centro rebelde</text></svg>'
  },
  {
    title: "Mapa de rutas de movilizacion indigena",
    type: "ai",
    category: "mapa",
    description: "Las rutas de movilizacion conectaban Tamazunchale con Tancanhuitz, Ciudad del Maiz, Jacala y Molango. Este entramado de caminos y veredas permitio la expansion del movimiento y la conexion con comunidades de Hidalgo.",
    date: "1879-1889",
    source: "Representacion basada en la geografia del movimiento descrita en fuentes historicas",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1e6cf" rx="6"/><circle cx="150" cy="100" r="12" fill="#7f312c"/><text x="168" y="105" font-family="Georgia" font-size="8" fill="#241d18">Tamazunchale</text><circle cx="80" cy="50" r="7" fill="#241d18"/><text x="92" y="54" font-family="Georgia" font-size="7" fill="#241d18">Jacala</text><circle cx="60" cy="150" r="7" fill="#241d18"/><text x="72" y="154" font-family="Georgia" font-size="7" fill="#241d18">Tancanhuitz</text><circle cx="240" cy="60" r="7" fill="#241d18"/><text x="252" y="64" font-family="Georgia" font-size="7" fill="#241d18">C. del Maiz</text><circle cx="230" cy="160" r="7" fill="#241d18"/><text x="242" y="164" font-family="Georgia" font-size="7" fill="#241d18">Molango</text><path d="M150 100 L80 50" stroke="#a8612c" stroke-width="2" stroke-dasharray="6 4"/><path d="M150 100 L60 150" stroke="#a8612c" stroke-width="2" stroke-dasharray="6 4"/><path d="M150 100 L240 60" stroke="#a8612c" stroke-width="2" stroke-dasharray="6 4"/><path d="M150 100 L230 160" stroke="#a8612c" stroke-width="2" stroke-dasharray="6 4"/></svg>'
  }
];

const archivoDocumentos = [
  {
    title: "Tratado de Paz de Tamazunchale",
    date: "24 de agosto de 1879",
    type: "documento",
    icon: "📜",
    provenance: "UNAM-IIH / SEDENA",
    reliability: "verified",
    linkStatus: "available",
    description: "Tratado de paz firmado entre 'las comisiones de los indígenas sublevados' y el jefe de partido de Tamazunchale, Juan José Terrazas. El documento establece los términos de pacificación tras los sucesos de julio de 1879. Constituye la fuente principal sobre la negociación directa entre el gobierno local y las comunidades lideradas por Juan Santiago.",
    source: "Archivo Histórico de la Secretaría de la Defensa Nacional (SEDENA), Exp. 481.4/11653, ff. 44-45.",
    link: "https://hmpi.historicas.unam.mx/fuentes/planes/tratado-tamazunchale-1879",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f5edd8" rx="6"/><rect x="20" y="15" width="260" height="170" fill="#faf2e0" stroke="#8b6f47" stroke-width="1.5" rx="3"/><rect x="20" y="15" width="260" height="22" fill="#7f312c" rx="3"/><text x="28" y="31" font-family="Georgia,serif" font-size="11" fill="#fff" font-weight="bold">Tratado de Paz</text><text x="220" y="31" font-family="system-ui,sans-serif" font-size="7" fill="#f4c47b">24 ago. 1879</text><line x1="35" y1="50" x2="270" y2="50" stroke="#241d18" stroke-width="1.5" opacity="0.5"/><line x1="35" y1="63" x2="255" y2="63" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="35" y1="76" x2="265" y2="76" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="35" y1="89" x2="250" y2="89" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="35" y1="102" x2="260" y2="102" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="35" y1="115" x2="245" y2="115" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="35" y1="128" x2="258" y2="128" stroke="#241d18" stroke-width="1" opacity="0.4"/><rect x="30" y="140" width="100" height="14" fill="#a8612c" rx="2"/><text x="34" y="151" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Comisiones indigenas</text><text x="145" y="151" font-family="Georgia,serif" font-size="8" fill="#241d18">y jefe de partido</text><rect x="30" y="158" width="90" height="14" fill="#596b43" rx="2"/><text x="34" y="169" font-family="system-ui,sans-serif" font-size="7" fill="#fff">SEDENA Exp.481.4/11653</text></svg>'
  },
  {
    title: "Mapa de la Huasteca Potosina (siglo XIX)",
    date: "c. 1880",
    type: "mapa",
    icon: "🗺️",
    provenance: "AGN / Mapoteca",
    reliability: "partial",
    linkStatus: "unavailable",
    description: "Representación cartográfica de la región de la Huasteca Potosina que muestra la división territorial del partido de Tamazunchale, los caminos, ríos y poblaciones mencionadas en los expedientes de la rebelión. Los mapas históricos de la región permiten ubicar los corredores de movilización indígena.",
    source: "Cartografía histórica del Archivo General de la Nación, ramo Mapas, Planos e Ilustraciones. Sin copia digital pública verificada a la fecha.",
    link: "",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f1e6cf" rx="6"/><path d="M20 160 L80 100 L150 120 L220 70 L280 110" stroke="#7f312c" stroke-width="3" fill="none" stroke-dasharray="8 5"/><path d="M30 175 L90 115 L160 135 L230 80" stroke="#a8612c" stroke-width="2" fill="none" stroke-dasharray="5 4"/><path d="M50 180 C120 140 180 160 250 120" stroke="#566a73" stroke-width="6" fill="none" opacity="0.5" stroke-linecap="round"/><circle cx="150" cy="120" r="10" fill="#7f312c"/><text x="167" y="125" font-family="Georgia,serif" font-size="9" fill="#241d18">Tamazunchale</text><circle cx="80" cy="100" r="6" fill="#241d18"/><text x="93" y="104" font-family="Georgia,serif" font-size="7" fill="#241d18">Jacala</text><circle cx="220" cy="70" r="6" fill="#241d18"/><text x="233" y="74" font-family="Georgia,serif" font-size="7" fill="#241d18">Cd. del Maiz</text><circle cx="230" cy="80" r="6" fill="#241d18"/><text x="243" y="84" font-family="Georgia,serif" font-size="7" fill="#241d18">Molango</text><path d="M15 20 L285 20 L285 185 L15 185 Z" fill="none" stroke="#241d18" stroke-width="0.5" opacity="0.3"/></svg>'
  },
  {
    title: "Fotografias de William Henry Jackson en San Luis Potosi",
    date: "1884-1888",
    type: "fotografia",
    icon: "📷",
    provenance: "Library of Congress / INAH",
    reliability: "verified",
    linkStatus: "available",
    description: "Serie de fotografías tomadas por William Henry Jackson durante su paso por San Luis Potosí, que documentan haciendas, paisajes y tipos populares de la región huasteca en la época inmediatamente posterior a la rebelión. Incluye el Panorama de San Luis Potosí (LOC 2016797427) y la fotografía 'Aguadores en San Luis Potosí' del repositorio INAH.",
    source: "Library of Congress, Prints & Photographs Division — W.H. Jackson Collection. INAH Mediateca.",
    link: "https://www.loc.gov/item/2016797427/",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><rect x="20" y="15" width="260" height="170" fill="#1a1512" rx="3"/><rect x="25" y="20" width="250" height="130" fill="#3a2a1a" rx="2"/><rect x="30" y="25" width="240" height="120" fill="#4a3520" rx="1"/><path d="M30 120 Q80 70 150 90 Q200 60 270 85 L270 145 L30 145 Z" fill="#596b43" opacity="0.35"/><rect x="40" y="40" width="60" height="40" fill="#d4b896" opacity="0.3" stroke="#8b6f47" stroke-width="0.5"/><rect x="180" y="50" width="50" height="30" fill="#d4b896" opacity="0.3" stroke="#8b6f47" stroke-width="0.5"/><path d="M30 140 Q80 120 150 125 Q200 115 270 125 L270 145 L30 145 Z" fill="#3a4a2a" opacity="0.25"/><text x="35" y="170" font-family="Georgia,serif" font-size="8" fill="#d89548">W.H. Jackson, San Luis Potosi, 1884-1888</text></svg>'
  },
  {
    title: "Tipos Mexicanos: Litografia de la epoca porfiriana",
    date: "1862-1880",
    type: "grabado",
    icon: "🖼️",
    provenance: "Library of Congress",
    reliability: "verified",
    linkStatus: "available",
    description: "Litografia titulada 'Tipos Mexicanos' publicada en 1862 por la Litografía de M. Murguia, que muestra la diversidad social del Mexico decimonónico. Incluye representaciones de pobladores rurales e indígenas de regiones como la Huasteca, documentando la vestimenta y apariencia de la época.",
    source: "Library of Congress, Prints and Photographs Division. LCCN 2006700054.",
    link: "https://lccn.loc.gov/2006700054",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f5edd8" rx="6"/><rect x="20" y="15" width="260" height="170" fill="#ede2cc" stroke="#8b6f47" stroke-width="1.5" rx="3"/><circle cx="90" cy="55" r="20" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="150" cy="50" r="22" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><circle cx="210" cy="55" r="20" fill="#c4a67a" stroke="#8b6f47" stroke-width="1"/><rect x="70" y="75" width="40" height="50" fill="#7f312c" rx="2"/><rect x="130" y="72" width="40" height="53" fill="#596b43" rx="2"/><rect x="190" y="75" width="40" height="50" fill="#a8612c" rx="2"/><rect x="55" y="135" width="190" height="12" fill="#a8612c" rx="2"/><text x="60" y="144" font-family="system-ui,sans-serif" font-size="7" fill="#fff">TIPOS MEXICANOS — Lit. M. Murguia</text><text x="32" y="175" font-family="Georgia,serif" font-size="7" fill="#241d18">Library of Congress, c.1862</text></svg>'
  },
  {
    title: "Expediente de la rebelion indigena en la Huasteca Potosina",
    date: "1879-1889",
    type: "documento",
    icon: "📋",
    provenance: "AGN / BAGN",
    reliability: "partial",
    linkStatus: "partial",
    description: "Expediente completo sobre la rebelión indígena de Tamazunchale, que incluye partes militares, correspondencia entre autoridades, listas de sublevados, indultos y sentencias. Es el registro más completo del conflicto desde la perspectiva del Estado. Referenciado en el Boletín del Archivo General de la Nación.",
    source: "Archivo Histórico de San Luis Potosí / Archivo General de la Nación, ramo Gobernación, Sinaloa y San Luis Potosí.",
    link: "https://bagn.archivos.gob.mx/index.php/legajos/article/view/2428",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#ede2cc" rx="6"/><rect x="25" y="18" width="120" height="155" fill="#f5edd8" stroke="#8b6f47" stroke-width="1.5" rx="2" transform="rotate(-1.5,85,93)"/><rect x="30" y="22" width="100" height="14" fill="#7f312c" rx="2" transform="rotate(-1.5,85,93)"/><text x="34" y="33" font-family="system-ui,sans-serif" font-size="7" fill="#fff" transform="rotate(-1.5,85,93)">EXPEDIENTE</text><line x1="38" y1="46" x2="136" y2="45" stroke="#241d18" stroke-width="1" opacity="0.4" transform="rotate(-1.5,85,93)"/><line x1="38" y1="58" x2="130" y2="57" stroke="#241d18" stroke-width="1" opacity="0.4" transform="rotate(-1.5,85,93)"/><line x1="38" y1="70" x2="134" y2="69" stroke="#241d18" stroke-width="1" opacity="0.4" transform="rotate(-1.5,85,93)"/><rect x="155" y="30" width="125" height="143" fill="#faf2e0" stroke="#8b6f47" stroke-width="1.5" rx="2" transform="rotate(1,217,100)"/><rect x="160" y="34" width="80" height="14" fill="#596b43" rx="2" transform="rotate(1,217,100)"/><text x="163" y="45" font-family="system-ui,sans-serif" font-size="7" fill="#fff" transform="rotate(1,217,100)">Partes militares</text><line x1="168" y1="58" x2="270" y2="59" stroke="#241d18" stroke-width="1" opacity="0.35" transform="rotate(1,217,100)"/><line x1="168" y1="72" x2="262" y2="73" stroke="#241d18" stroke-width="1" opacity="0.35" transform="rotate(1,217,100)"/><line x1="168" y1="86" x2="268" y2="87" stroke="#241d18" stroke-width="1" opacity="0.35" transform="rotate(1,217,100)"/><line x1="168" y1="100" x2="258" y2="101" stroke="#241d18" stroke-width="1" opacity="0.35" transform="rotate(1,217,100)"/></svg>'
  },
  {
    title: "Constitucion y leyes de Reforma en San Luis Potosi",
    date: "1857-1879",
    type: "documento",
    icon: "⚖️",
    provenance: "Camara de Diputados / HathiTrust",
    reliability: "verified",
    linkStatus: "available",
    description: "Marco legal que regia la organización municipal, la propiedad territorial y los derechos civiles en San Luis Potosí al momento de la rebelión. Las Leyes de Reforma y la Constitución de 1857 fueron invocadas tanto por las autoridades para justificar la división de tierras como por las comunidades para reclamar derechos.",
    source: "Biblioteca Virtual de la Cámara de Diputados / HathiTrust Digital Library.",
    link: "http://www.diputados.gob.mx/sedia/biblio/virtual/dip/const_mex.htm",
    svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f5edd8" rx="6"/><rect x="30" y="20" width="240" height="160" fill="#faf2e0" stroke="#8b6f47" stroke-width="2" rx="3"/><rect x="35" y="25" width="230" height="20" fill="#7f312c" rx="2"/><text x="60" y="39" font-family="Georgia,serif" font-size="12" fill="#fff" font-weight="bold">CONSTITUCION 1857</text><line x1="45" y1="55" x2="255" y2="55" stroke="#241d18" stroke-width="1.5" opacity="0.5"/><line x1="45" y1="68" x2="245" y2="68" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="45" y1="81" x2="250" y2="81" stroke="#241d18" stroke-width="1" opacity="0.4"/><line x1="45" y1="94" x2="240" y2="94" stroke="#241d18" stroke-width="1" opacity="0.4"/><rect x="40" y="108" width="100" height="12" fill="#a8612c" rx="2"/><text x="44" y="117" font-family="system-ui,sans-serif" font-size="7" fill="#fff">Leyes de Reforma</text><rect x="40" y="125" width="100" height="12" fill="#596b43" rx="2"/><text x="44" y="134" font-family="system-ui,sans-serif" font-size="7" fill="#fff">San Luis Potosi</text><text x="42" y="160" font-family="Georgia,serif" font-size="8" fill="#241d18">Marco legal de la propiedad territorial</text></svg>'
  }
];

const ambientProfiles = {
  inicio:        { name: "Inicio",              filterType: "lowpass", filterFreq: 1800, filterQ: 0.2, lfoRate: 0.04, lfoDepth: 100, subFreq: 0,    subGain: 0,  lfo2Rate: 0,    lfo2Depth: 0,    tremoloRate: 0,   tremoloDepth: 0,    baseGain: 0.18 },
  introduccion:  { name: "Viento suave",        filterType: "lowpass", filterFreq: 1400, filterQ: 0.4, lfoRate: 0.07, lfoDepth: 300, subFreq: 0,    subGain: 0,  lfo2Rate: 0.025, lfo2Depth: 80,   tremoloRate: 0.12, tremoloDepth: 0.08, baseGain: 0.30 },
  antecedentes:  { name: "Aves y bosque",       filterType: "bandpass", filterFreq: 2000, filterQ: 1.2, lfoRate: 0.15, lfoDepth: 600, subFreq: 0,    subGain: 0,  lfo2Rate: 0.06,  lfo2Depth: 200,  tremoloRate: 0.25, tremoloDepth: 0.06, baseGain: 0.28 },
  mapa:          { name: "Tension creciente",     filterType: "bandpass", filterFreq: 800,  filterQ: 2.0, lfoRate: 0.25, lfoDepth: 400, subFreq: 48,   subGain: 0.025, lfo2Rate: 0.07,  lfo2Depth: 280,  tremoloRate: 1.8,  tremoloDepth: 0.35, baseGain: 0.28 },
  desarrollo:    { name: "Conflicto armado",     filterType: "bandpass", filterFreq: 500,  filterQ: 2.5, lfoRate: 0.32, lfoDepth: 350, subFreq: 55,   subGain: 0.04, lfo2Rate: 0.09,  lfo2Depth: 320,  tremoloRate: 3.2,  tremoloDepth: 0.50, baseGain: 0.32 },
  personajes:    { name: "Instrumental calmado", filterType: "lowpass", filterFreq: 900,  filterQ: 0.5, lfoRate: 0.05, lfoDepth: 180, subFreq: 0,    subGain: 0,  lfo2Rate: 0.02,  lfo2Depth: 60,   tremoloRate: 0.35, tremoloDepth: 0.10, baseGain: 0.25 },
  timeline:      { name: "Ritmo historico",      filterType: "bandpass", filterFreq: 700,  filterQ: 1.8, lfoRate: 0.28, lfoDepth: 450, subFreq: 42,   subGain: 0.02, lfo2Rate: 0.05,  lfo2Depth: 180,  tremoloRate: 2.0,  tremoloDepth: 0.30, baseGain: 0.30 },
  consecuencias: { name: "Tranquilidad",         filterType: "lowpass", filterFreq: 750,  filterQ: 0.3, lfoRate: 0.04, lfoDepth: 150, subFreq: 0,    subGain: 0,  lfo2Rate: 0.015, lfo2Depth: 40,   tremoloRate: 0.08, tremoloDepth: 0.04, baseGain: 0.22 },
  impacto:       { name: "Legado sereno",        filterType: "lowpass", filterFreq: 600,  filterQ: 0.3, lfoRate: 0.03, lfoDepth: 120, subFreq: 0,    subGain: 0,  lfo2Rate: 0.01,  lfo2Depth: 30,   tremoloRate: 0,   tremoloDepth: 0,    baseGain: 0.18 },
  galeria:       { name: "Museografia",          filterType: "bandpass", filterFreq: 1200, filterQ: 0.8, lfoRate: 0.12, lfoDepth: 350, subFreq: 0,    subGain: 0,  lfo2Rate: 0.035, lfo2Depth: 120,  tremoloRate: 0.5,  tremoloDepth: 0.08, baseGain: 0.22 },
  archivo:       { name: "Archivo historico",    filterType: "lowpass", filterFreq: 600,  filterQ: 0.3, lfoRate: 0.03, lfoDepth: 80,  subFreq: 0,    subGain: 0,  lfo2Rate: 0.01,  lfo2Depth: 25,   tremoloRate: 0,   tremoloDepth: 0,    baseGain: 0.14 },
  audio:         { name: "Audioguia",            filterType: "lowpass", filterFreq: 1600, filterQ: 0.3, lfoRate: 0.06, lfoDepth: 150, subFreq: 0,    subGain: 0,  lfo2Rate: 0,     lfo2Depth: 0,    tremoloRate: 0,   tremoloDepth: 0,    baseGain: 0.15 },
  fuentes:       { name: "Documentos",           filterType: "lowpass", filterFreq: 1200, filterQ: 0.3, lfoRate: 0.05, lfoDepth: 100, subFreq: 0,    subGain: 0,  lfo2Rate: 0,     lfo2Depth: 0,    tremoloRate: 0,   tremoloDepth: 0,    baseGain: 0.15 }
};

// == PHOTO MAPPING: real photos replacing SVG placeholders ==
const __photoMap = {
  "Agustín Ugarte": "agustin ugarte.png",
  "Agustin Ugarte": "agustin ugarte.png",
  "Carlos Díez Gutiérrez": "carlos diez gutierrez.png",
  "Carlos Diez Gutierrez": "carlos diez gutierrez.png",
  "Juan José Terrazas": "juan jose terrazas.png",
  "Juan Jose Terrazas": "juan jose terrazas.png",
  "Porfirio Díaz": "porfirio diaz.png",
  "Porfirio Diaz": "porfirio diaz.png",
  "Huasteca Potosina": "huasteca potosina.png",
  "Tamazunchale": "tamazunchale.png",
};
function __photo(name) { return __photoMap[name] || null; }
function __imgTag(src, alt) {
  return '<img class="real-photo" src="' + src.replace(/ /g,"%20") + '" alt="' + (alt||"") + '" loading="lazy">';
}

// Assign photos to personajes
personajes.forEach(function(p,i) {
  var ph = __photo(p.name);
  if (ph) personajeImages[i].photo = ph;
});

// Assign photos to timeline images
timelineImages.forEach(function(img,i) {
  if (img.caption.toLowerCase().indexOf("agustin ugarte") !== -1) img.photo = __photo("Agustin Ugarte");
});

// Assign photos to phase images
faseImages.forEach(function(img,i) {
  if (img.caption.toLowerCase().indexOf("agustin ugarte") !== -1) img.photo = __photo("Agustin Ugarte");
});

// Assign photos to gallery items
galeria.forEach(function(g,i) {
  var t = g.title.toLowerCase();
  if (t.indexOf("vista de tamazunchale") !== -1) g.photo = __photo("Tamazunchale");
  else if (t.indexOf("carlos diez") !== -1) g.photo = __photo("Carlos Diez Gutierrez");
  else if (t.indexOf("comunidades nahuas") !== -1) g.photo = __photo("Huasteca Potosina");
  else if (t.indexOf("rios") !== -1 && t.indexOf("huasteca") !== -1) g.photo = __photo("Huasteca Potosina");
});

// Assign photos to archive documents
archivoDocumentos.forEach(function(doc,i) {
  if (doc.title.toLowerCase().indexOf("mapa de la huasteca") !== -1) doc.photo = __photo("Huasteca Potosina");
});

function createCard(item) {
  return `<article class="info-card reveal"><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.body}</p></article>`;
}

function renderContent() {
  document.querySelector("#antecedentes-grid").innerHTML = antecedentes.map(createCard).join("");
  document.querySelector("#consecuencias-grid").innerHTML = consecuencias.map(createCard).join("");

  document.querySelector("#desarrollo-list").innerHTML = fases.map((phase, index) => `
    <article class="phase-card reveal">
      <div class="phase-date">
        <div class="phase-date-img">${(function(){ var fi = faseImages[index]; return fi ? (fi.photo ? __imgTag(fi.photo, fi.caption) : fi.svg) : ""; })()}</div>
        <span class="phase-date-label">${phase.date}</span>
      </div>
      <div class="phase-body">
        <h3>${phase.title}</h3>
        <p>${phase.body}</p>
        <p><strong>Consecuencia inmediata:</strong> ${phase.consequence}</p>
      </div>
    </article>
  `).join("");

  const personGrid = document.querySelector("#personajes-grid");
  const imgData = personajeImages;

  personGrid.innerHTML = personajes.map((person, index) => {
    const img = imgData[index];
    const photo = img && img.photo;
    const badge = img && img.type === "historical"
      ? '<span class="person-img-badge hist">Fuente historica</span>'
      : '<span class="person-img-badge ai">Representacion IA</span>';
    const imgContent = photo ? __imgTag(photo, person.name) : (img ? img.svg : "");
    return `
    <article class="person-card reveal" data-person-index="${index}">
      <div class="person-img">
        ${imgContent}
        ${img ? badge : ""}
      </div>
      <div class="person-body">
        <h3>${person.name}</h3>
        <p class="person-role">${person.role}</p>
        <p><strong>Acciones:</strong> ${person.actions}</p>
        <p><strong>Impacto:</strong> ${person.impact}</p>
      </div>
    </article>`;
  }).join("");

  personGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".person-card");
    if (!card) return;
    const index = Number(card.dataset.personIndex);
    const person = personajes[index];
    const img = imgData[index];
    if (!person) return;
    const badge = img && img.type === "historical"
      ? '<span class="img-badge hist-badge">Fuente historica</span>'
      : '<span class="img-badge ai-badge">Representacion generada con IA</span>';
    const lightbox = document.querySelector("#lightbox");
    if (!lightbox) return;
    const imgContainer = lightbox.querySelector(".lightbox-image");
    const metaContainer = lightbox.querySelector(".lightbox-meta");
    const imgHtml = img
      ? (img.photo
        ? `<div class="lightbox-img-wrap">${__imgTag(img.photo, person.name)}</div>`
        : `<div class="lightbox-img-wrap">${img.svg}</div>`)
      : "";
    imgContainer.innerHTML = imgHtml;
    metaContainer.innerHTML = `
      <h2>${person.name}</h2>
      <p class="lb-category">${person.role}</p>
      <p class="lb-description"><strong>Acciones:</strong> ${person.actions}</p>
      <p class="lb-description"><strong>Impacto:</strong> ${person.impact}</p>
      ${img && img.year ? `<p class="lb-date"><strong>Fecha:</strong> ${img.year}</p>` : ""}
      ${img && img.source ? `<p class="lb-source"><strong>Fuente:</strong> ${img.source}</p>` : ""}
      ${badge}
    `;
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.classList.add("visible");
    document.body.style.overflow = "hidden";
  });
}

function renderTimeline() {
  const track = document.querySelector("#timeline-track");
  const detail = document.querySelector("#timeline-detail");

  track.innerHTML = timeline.map(([date, text], index) => {
    const ti = timelineImages[index];
    const thumbContent = ti ? (ti.photo ? __imgTag(ti.photo, ti.caption) : ti.svg) : "";
    return `
    <button class="timeline-button" type="button" data-index="${index}" role="listitem">
      <span class="timeline-thumb">${thumbContent}</span>
      <span class="timeline-label">
        <strong>${date}</strong>
        ${text.slice(0, 76)}${text.length > 76 ? "..." : ""}
      </span>
    </button>`;
  }).join("");

  function select(index) {
    const [date, text] = timeline[index];
    const img = timelineImages[index];
    document.querySelectorAll(".timeline-button").forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.index) === index);
    });
    const badge = img && img.type === "ai"
      ? '<span class="img-badge ai-badge">Representacion generada con IA</span>'
      : '<span class="img-badge hist-badge">Fuente historica</span>';
    const imgContent = img ? (img.photo ? __imgTag(img.photo, img.caption) : img.svg) : "";
    const imgHtml = img ? `<div class="timeline-figure">${imgContent}<div class="timeline-figcaption"><p>${img.caption}</p><p class="fig-source">${img.date} — ${img.source}</p>${badge}</div></div>` : "";
    detail.innerHTML = `${imgHtml}<h3>${date}</h3><p>${text}</p>`;
  }

  track.addEventListener("click", (event) => {
    const button = event.target.closest(".timeline-button");
    if (button) select(Number(button.dataset.index));
  });

  select(0);
}

function renderMap() {
  const detail = document.querySelector("#map-detail");
  if (!detail) return;

  let currentPlace = null;

  document.querySelectorAll(".place").forEach((place) => {
    place.addEventListener("click", () => {
      if (currentPlace === place) return;
      document.querySelectorAll(".place").forEach((item) => item.classList.remove("active"));
      place.classList.add("active");
      currentPlace = place;
      const name = place.dataset.place;
      detail.style.opacity = "0";
      requestAnimationFrame(() => {
        detail.textContent = `${name}: ${mapDetails[name]}`;
        detail.style.transition = "opacity 0.35s ease";
        detail.style.opacity = "1";
      });
    });
  });
}

let currentAudioCard = null;

function renderAudio() {
  const grid = document.querySelector("#audio-grid");
  grid.innerHTML = audios.map((a, i) => `
    <article class="audio-card reveal" data-audio-card="${i}">
      <h3>${a.title}</h3>
      <p>${a.text}</p>
      <div class="audio-controls">
        <button class="small-button play-card" type="button" data-index="${i}">▶ Escuchar</button>
        <button class="small-button secondary stop-card" type="button">⏹ Detener</button>
      </div>
    </article>
  `).join("");

  grid.addEventListener("click", (event) => {
    const playBtn = event.target.closest(".play-card");
    const stopBtn = event.target.closest(".stop-card");
    if (stopBtn) {
      if (currentAudioCard) { currentAudioCard.pause(); currentAudioCard.currentTime = 0; }
      document.querySelectorAll(".play-card").forEach(b => b.textContent = "▶ Escuchar");
      currentAudioCard = null;
      return;
    }
    if (playBtn) {
      const idx = Number(playBtn.dataset.index);
      const audio = audios[idx];
      if (currentAudioCard) { currentAudioCard.pause(); currentAudioCard.currentTime = 0; }
      document.querySelectorAll(".play-card").forEach(b => b.textContent = "▶ Escuchar");
      const player = new Audio(audio.file);
      player.volume = parseFloat(document.querySelector("#tour-volume")?.value || 1);
      player.onended = function() {
        playBtn.textContent = "▶ Escuchar";
        if (currentAudioCard === player) currentAudioCard = null;
      };
      player.onerror = function() { console.warn("[AudioCard] Error cargando:", audio.file); playBtn.textContent = "▶ Escuchar"; };
      currentAudioCard = player;
      playBtn.textContent = "⏸ Reproduciendo";
      player.play().catch(function(e) { console.warn("[AudioCard]", e.message); playBtn.textContent = "▶ Escuchar"; });
    }
  });
}

function renderQr() {
  const grid = document.querySelector("#qr-grid");
  const baseUrl = `${window.location.href.split("#")[0]}`;
  grid.innerHTML = qrItems.map(([title, hash, note], index) => `
    <article class="qr-card reveal">
      <h3>${title}</h3>
      <p>${note}</p>
      <div class="qr-box" id="qr-${index}" aria-label="QR para ${title}"></div>
      <small>${baseUrl}${hash}</small>
    </article>
  `).join("");

  qrItems.forEach(([, hash], index) => {
    const qr = qrcode(0, "M");
    qr.addData(`${baseUrl}${hash}`);
    qr.make();
    document.querySelector(`#qr-${index}`).innerHTML = qr.createSvgTag(4, 3);
  });
}

function renderIndex() {
  document.querySelector("#project-index").innerHTML = projectIndex.map(([title, items]) => `
    <h3>${title}</h3>
    <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `).join("");
}

function renderGaleria() {
  const grid = document.querySelector("#galeria-grid");
  if (!grid) return;
  grid.innerHTML = galeria.map((item, index) => `
    <article class="galeria-card reveal" data-index="${index}">
      <div class="galeria-img">${item.photo ? __imgTag(item.photo, item.title) : item.svg}</div>
      <div class="galeria-info">
        <span class="galeria-badge ${item.type === "historical" ? "hist" : "ai"}">${item.type === "historical" ? "Fuente historica" : "Representacion generada con IA"}</span>
        <h3>${item.title}</h3>
        <p class="galeria-cat">${item.category}</p>
        <p class="galeria-date">${item.date}</p>
      </div>
    </article>
  `).join("");
}

function renderArchivo() {
  const grid = document.querySelector("#archivo-grid");
  if (!grid) return;
  grid.innerHTML = archivoDocumentos.map((item, index) => {
    const reliabilityLabel = item.reliability === "verified" ? "Verificada" : item.reliability === "partial" ? "Verificacion parcial" : "No verificada";
    const reliabilityClass = item.reliability === "verified" ? "rel-verified" : item.reliability === "partial" ? "rel-partial" : "rel-unverified";
    const linkLabel = item.linkStatus === "available" ? "Enlace disponible" : item.linkStatus === "partial" ? "Enlace parcial" : "Sin copia digital publica";
    const linkClass = item.linkStatus === "available" ? "link-ok" : item.linkStatus === "partial" ? "link-partial" : "link-na";
    return `
    <article class="archivo-card reveal" data-index="${index}">
      <div class="archivo-img">${item.photo ? __imgTag(item.photo, item.title) : item.svg}</div>
      <div class="archivo-info">
        <div class="archivo-meta-row">
          <span class="archivo-badge">${item.icon} ${item.type}</span>
          <span class="archivo-reliability ${reliabilityClass}" title="Confiabilidad: ${reliabilityLabel}">${reliabilityLabel}</span>
        </div>
        <h3>${item.title}</h3>
        <p class="archivo-date">${item.date}</p>
        <p class="archivo-desc">${item.description}</p>
        <p class="archivo-source"><strong>Procedencia:</strong> ${item.provenance}</p>
        <p class="archivo-source"><strong>Fuente:</strong> ${item.source}</p>
        <div class="archivo-meta-row archivo-link-row">
          <span class="archivo-link-status ${linkClass}">${linkLabel}</span>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="archivo-link">Consultar original →</a>` : '<span class="archivo-link na">No disponible digitalmente</span>'}
        </div>
      </div>
    </article>`;
  }).join("");
}

function setupArchivoLightbox() {
  const grid = document.querySelector("#archivo-grid");
  const lightbox = document.querySelector("#lightbox");
  if (!grid || !lightbox) return;

  const overlay = lightbox;
  const panel = lightbox.querySelector(".lightbox-panel");
  const imgContainer = lightbox.querySelector(".lightbox-image");
  const metaContainer = lightbox.querySelector(".lightbox-meta");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".archivo-card");
    if (!card) return;
    const index = Number(card.dataset.index);
    const item = archivoDocumentos[index];
    if (!item) return;

    const reliabilityLabel = item.reliability === "verified" ? "Fuente verificada" : item.reliability === "partial" ? "Verificacion parcial" : "No verificada";
    const reliabilityClass = item.reliability === "verified" ? "rel-verified" : item.reliability === "partial" ? "rel-partial" : "rel-unverified";
    const linkHtml = item.link
      ? `<p class="lb-link"><strong>Enlace original:</strong> <a href="${item.link}" target="_blank" rel="noopener" class="lb-url">${item.link}</a></p>`
      : '<p class="lb-link"><strong>Enlace original:</strong> <span class="lb-na">Sin copia digital pública disponible</span></p>';

    imgContainer.innerHTML = `<div class="lightbox-img-wrap">${item.photo ? __imgTag(item.photo, item.title) : item.svg}</div>`;
    metaContainer.innerHTML = `
      <div class="lb-header">
        <span class="lb-badge">${item.icon} ${item.type}</span>
        <span class="lb-reliability ${reliabilityClass}">${reliabilityLabel}</span>
      </div>
      <h2>${item.title}</h2>
      <p class="lb-date"><strong>Fecha:</strong> ${item.date}</p>
      <p class="lb-description">${item.description}</p>
      <p class="lb-source"><strong>Procedencia:</strong> ${item.provenance}</p>
      <p class="lb-source"><strong>Fuente:</strong> ${item.source}</p>
      ${linkHtml}
    `;
    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  });

  function close() {
    overlay.setAttribute("aria-hidden", "true");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (!panel.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("visible")) close();
  });
}

function setupGaleriaLightbox() {
  const grid = document.querySelector("#galeria-grid");
  const lightbox = document.querySelector("#lightbox");
  if (!grid || !lightbox) return;

  const overlay = lightbox;
  const panel = lightbox.querySelector(".lightbox-panel");
  const imgContainer = lightbox.querySelector(".lightbox-image");
  const metaContainer = lightbox.querySelector(".lightbox-meta");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".galeria-card");
    if (!card) return;
    const index = Number(card.dataset.index);
    const item = galeria[index];
    if (!item) return;

    const badge = item.type === "historical"
      ? '<span class="img-badge hist-badge">Fuente historica</span>'
      : '<span class="img-badge ai-badge">Representacion generada con IA</span>';

    imgContainer.innerHTML = `<div class="lightbox-img-wrap">${item.photo ? __imgTag(item.photo, item.title) : item.svg}</div>`;
    metaContainer.innerHTML = `
      <h2>${item.title}</h2>
      <p class="lb-category">${item.category}</p>
      <p class="lb-description">${item.description}</p>
      <p class="lb-date"><strong>Fecha:</strong> ${item.date}</p>
      <p class="lb-source"><strong>Fuente:</strong> ${item.source}</p>
      ${badge}
    `;
    overlay.setAttribute("aria-hidden", "false");
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  });

  function close() {
    overlay.setAttribute("aria-hidden", "true");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (!panel.contains(event.target)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("visible")) close();
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay
          ? parseFloat(entry.target.dataset.revealDelay)
          : (Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.06);
        entry.target.style.transitionDelay = `${Math.min(delay, 0.6)}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", () => links.classList.remove("open"));
}

function setupParallax() {
  // Disable parallax on mobile for performance
  if (window.innerWidth < 768) return;

  const layers = document.querySelectorAll(".parallax-layer");
  const overlays = document.querySelectorAll(".parallax-overlay");

  function update() {
    const scrollY = window.scrollY;
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed) || 0.1;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  });

  update();
}

function setupSectionDetection() {
  const sections = document.querySelectorAll("#inicio, .museum-section[id]");
  const overlays = document.querySelectorAll(".parallax-overlay");
  const navLinks = document.querySelectorAll(".section-nav a");
  let currentSectionId = "";

  let isUpdating = false;
  let lastAudioSection = "";

  function getSectionGroup(id) {
    return id.replace(/-\d+$/, "");
  }

  function update() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let mostVisible = "";
    let maxVisible = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      if (visible > maxVisible) {
        maxVisible = visible;
        mostVisible = section.id;
      }
    });

    const sectionGroup = getSectionGroup(mostVisible);
    if (sectionGroup !== currentSectionId) {
      currentSectionId = sectionGroup;
      overlays.forEach((overlay) => {
        overlay.classList.toggle("active", overlay.classList.contains(`po-${sectionGroup}`));
      });
    }

    if (mostVisible && mostVisible !== lastAudioSection && !isUpdating) {
      lastAudioSection = mostVisible;
      updateSectionAudio(mostVisible);
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${mostVisible}`);
    });

    const progressFill = document.querySelector(".progress-fill");
    const progressLabel = document.querySelector(".progress-label");
    if (progressFill) {
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
      progressFill.style.width = `${pct}%`;
      if (progressLabel) progressLabel.textContent = `${Math.round(pct)}%`;
    }
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  });

  update();
}

function setupProgressIndicator() {
  const progressTrack = document.querySelector(".progress-track");
  if (!progressTrack) return;

  const fill = document.createElement("div");
  fill.className = "progress-fill";
  progressTrack.appendChild(fill);

  const label = document.createElement("span");
  label.className = "progress-label";
  label.textContent = "0%";
  progressTrack.appendChild(label);
}

let ambienceContext = null;
let ambienceSource = null;
let ambienceFilter1 = null;
let ambienceFilter2 = null;
let ambienceGain = null;
let ambienceLFO = null;
let ambienceLFOGain = null;
let ambienceLFO2 = null;
let ambienceLFOGain2 = null;
let ambienceSubOsc = null;
let ambienceSubGain = null;
let ambienceTremolo = null;
let ambienceTremoloGain = null;
let ambienceTremoloNode = null;
let ambienceActive = false;
let ambienceCurrentSection = "";

function createAmbienceBuffer(ctx) {
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

function findMatchingProfile(sectionId) {
  const prefix = sectionId.replace(/-\d+$/, "");
  if (ambientProfiles[prefix]) return ambientProfiles[prefix];
  for (const key in ambientProfiles) {
    if (sectionId.includes(key)) return ambientProfiles[key];
  }
  return ambientProfiles.introduccion;
}

function updateSectionAudio(sectionId) {
  if (!ambienceContext) return;
  const profile = findMatchingProfile(sectionId);
  if (!profile) return;
  const now = ambienceContext.currentTime;

  const indicator = document.getElementById("ambient-indicator");
  if (!indicator) return;

  const prev = indicator.getAttribute("data-section");
  if (prev === sectionId) return;
  ambienceCurrentSection = sectionId;
  indicator.setAttribute("data-section", sectionId);

  indicator.querySelector(".ai-name").textContent = profile.name;
  indicator.classList.add("fading");
  clearTimeout(indicator._fadeTimer);
  indicator._fadeTimer = setTimeout(() => indicator.classList.remove("fading"), 400);

  if (!ambienceActive) return;
  if (!ambienceFilter1 || !ambienceFilter2 || !ambienceLFO || !ambienceLFO2) return;

  const rampTime = 4;

  ambienceFilter1.type = profile.filterType;
  ambienceFilter1.Q.setValueAtTime(profile.filterQ, now);
  ambienceFilter1.frequency.cancelScheduledValues(now);
  ambienceFilter1.frequency.setValueAtTime(ambienceFilter1.frequency.value || 800, now);
  ambienceFilter1.frequency.linearRampToValueAtTime(profile.filterFreq, now + rampTime);

  ambienceFilter2.Q.setValueAtTime(profile.filterQ * 0.6, now);
  ambienceFilter2.frequency.cancelScheduledValues(now);
  ambienceFilter2.frequency.setValueAtTime(ambienceFilter2.frequency.value || 800, now);
  ambienceFilter2.frequency.linearRampToValueAtTime(profile.filterFreq * 1.3, now + rampTime);

  ambienceLFOGain.gain.cancelScheduledValues(now);
  ambienceLFOGain.gain.setValueAtTime(ambienceLFOGain.gain.value || 200, now);
  ambienceLFOGain.gain.linearRampToValueAtTime(profile.lfoDepth, now + rampTime);
  ambienceLFO.frequency.cancelScheduledValues(now);
  ambienceLFO.frequency.setValueAtTime(ambienceLFO.frequency.value || 0.1, now);
  ambienceLFO.frequency.linearRampToValueAtTime(profile.lfoRate, now + rampTime);

  if (profile.lfo2Rate > 0) {
    ambienceLFO2.frequency.cancelScheduledValues(now);
    ambienceLFO2.frequency.setValueAtTime(ambienceLFO2.frequency.value || 0.05, now);
    ambienceLFO2.frequency.linearRampToValueAtTime(profile.lfo2Rate, now + rampTime);
    ambienceLFOGain2.gain.cancelScheduledValues(now);
    ambienceLFOGain2.gain.setValueAtTime(ambienceLFOGain2.gain.value || 80, now);
    ambienceLFOGain2.gain.linearRampToValueAtTime(profile.lfo2Depth, now + rampTime);
  } else {
    ambienceLFOGain2.gain.cancelScheduledValues(now);
    ambienceLFOGain2.gain.linearRampToValueAtTime(0, now + rampTime);
  }

  if (profile.subFreq > 0 && ambienceSubOsc && ambienceSubGain) {
    ambienceSubOsc.frequency.cancelScheduledValues(now);
    ambienceSubOsc.frequency.setValueAtTime(ambienceSubOsc.frequency.value || 50, now);
    ambienceSubOsc.frequency.linearRampToValueAtTime(profile.subFreq, now + rampTime);
    ambienceSubGain.gain.cancelScheduledValues(now);
    ambienceSubGain.gain.setValueAtTime(ambienceSubGain.gain.value || 0, now);
    ambienceSubGain.gain.linearRampToValueAtTime(profile.subGain, now + rampTime);
  } else if (ambienceSubGain) {
    ambienceSubGain.gain.cancelScheduledValues(now);
    ambienceSubGain.gain.linearRampToValueAtTime(0, now + rampTime);
  }

  if (ambienceTremolo && ambienceTremoloGain) {
    if (profile.tremoloRate > 0) {
      ambienceTremolo.frequency.cancelScheduledValues(now);
      ambienceTremolo.frequency.setValueAtTime(ambienceTremolo.frequency.value || 0, now);
      ambienceTremolo.frequency.linearRampToValueAtTime(profile.tremoloRate, now + rampTime);
      ambienceTremoloGain.gain.cancelScheduledValues(now);
      ambienceTremoloGain.gain.setValueAtTime(ambienceTremoloGain.gain.value || 0, now);
      ambienceTremoloGain.gain.linearRampToValueAtTime(profile.tremoloDepth, now + rampTime);
    } else {
      ambienceTremoloGain.gain.cancelScheduledValues(now);
      ambienceTremoloGain.gain.linearRampToValueAtTime(0, now + rampTime);
    }
  }
}

function playDiagnosticTone(ctx) {
  try {
    console.log("[Diagnostico] Reproduciendo tono 440Hz (1s) en canal derecho...");
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 440;
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1);
    console.log("[Diagnostico] Tono programado. ¿Lo escuchaste? Si NO, hay problema con AudioContext.");
  } catch (e) {
    console.warn("[Diagnostico] Error reproduciendo tono:", e.message);
  }
}

function setupAmbientSound() {
  const button = document.querySelector("#ambient-toggle");
  const volumeSlider = document.querySelector("#ambient-volume");
  const textSpan = button ? button.querySelector(".ambient-text") : null;
  if (!button) { console.warn("[Ambiente] Boton #ambient-toggle no encontrado"); return; }
  if (!textSpan) console.warn("[Ambiente] .ambient-text no encontrado dentro del boton");

  const indicator = document.createElement("div");
  indicator.id = "ambient-indicator";
  indicator.innerHTML = '<span class="ai-icon">🌀</span><span class="ai-name">Inicio</span>';
  indicator.setAttribute("data-section", "");
  document.body.appendChild(indicator);
  console.log("[Ambiente] Indicador visual creado");

  let userInteracted = false;

  async function ensureContext() {
    if (!ambienceContext) {
      console.log("[Ambiente] Creando AudioContext...");
      ambienceContext = new (window.AudioContext || window.webkitAudioContext)();
      console.log("[Ambiente] AudioContext creado, estado:", ambienceContext.state);
      if (ambienceContext.state === "suspended") {
        console.log("[Ambiente] Reanudando AudioContext...");
        await ambienceContext.resume();
        console.log("[Ambiente] Estado tras resume:", ambienceContext.state);
      }
      playDiagnosticTone(ambienceContext);

      const buffer = createAmbienceBuffer(ambienceContext);
      ambienceSource = ambienceContext.createBufferSource();
      ambienceSource.buffer = buffer;
      ambienceSource.loop = true;

      ambienceFilter1 = ambienceContext.createBiquadFilter();
      ambienceFilter1.type = "bandpass";
      ambienceFilter1.frequency.value = 800;
      ambienceFilter1.Q.value = 0.7;

      ambienceFilter2 = ambienceContext.createBiquadFilter();
      ambienceFilter2.type = "lowpass";
      ambienceFilter2.frequency.value = 2000;
      ambienceFilter2.Q.value = 0.4;

      ambienceLFO = ambienceContext.createOscillator();
      ambienceLFO.type = "sine";
      ambienceLFO.frequency.value = 0.1;
      ambienceLFOGain = ambienceContext.createGain();
      ambienceLFOGain.gain.value = 200;
      ambienceLFO.connect(ambienceLFOGain);
      ambienceLFOGain.connect(ambienceFilter1.frequency);
      ambienceLFO.start();

      ambienceLFO2 = ambienceContext.createOscillator();
      ambienceLFO2.type = "sine";
      ambienceLFO2.frequency.value = 0.05;
      ambienceLFOGain2 = ambienceContext.createGain();
      ambienceLFOGain2.gain.value = 100;
      ambienceLFO2.connect(ambienceLFOGain2);
      ambienceLFOGain2.connect(ambienceFilter2.frequency);
      ambienceLFO2.start();

      ambienceSubOsc = ambienceContext.createOscillator();
      ambienceSubOsc.type = "sine";
      ambienceSubOsc.frequency.value = 50;
      ambienceSubGain = ambienceContext.createGain();
      ambienceSubGain.gain.value = 0;
      ambienceSubOsc.connect(ambienceSubGain);
      ambienceSubOsc.start();

      ambienceTremolo = ambienceContext.createOscillator();
      ambienceTremolo.type = "sine";
      ambienceTremolo.frequency.value = 0;
      ambienceTremoloGain = ambienceContext.createGain();
      ambienceTremoloGain.gain.value = 0;
      ambienceTremolo.connect(ambienceTremoloGain);
      ambienceTremolo.start();

      ambienceTremoloNode = ambienceContext.createGain();
      ambienceTremoloNode.gain.value = 1;

      ambienceGain = ambienceContext.createGain();
      ambienceGain.gain.value = 0;

      ambienceSource.connect(ambienceFilter1);
      ambienceFilter1.connect(ambienceFilter2);
      ambienceFilter2.connect(ambienceTremoloNode);
      ambienceSubGain.connect(ambienceFilter2);
      ambienceTremoloGain.connect(ambienceTremoloNode.gain);
      ambienceTremoloNode.connect(ambienceGain);
      ambienceGain.connect(ambienceContext.destination);
      ambienceSource.start();
      console.log("[Ambiente] Nodos de audio configurados OK (2 filtros + 2 LFOs + sub + tremolo)");
    }
    if (ambienceContext.state === "suspended") {
      await ambienceContext.resume();
    }
  }

  async function toggle() {
    try {
      await ensureContext();

      ambienceActive = !ambienceActive;
      const now = ambienceContext.currentTime;
      const sliderVal = volumeSlider ? parseFloat(volumeSlider.value) : 0.7;
      const profile = findMatchingProfile(ambienceCurrentSection) || ambientProfiles.introduccion;
      const targetGain = sliderVal * profile.baseGain;

      if (ambienceActive) {
        console.log("[Ambiente] ACTIVANDO - gain objetivo:", targetGain.toFixed(3));
        ambienceGain.gain.cancelScheduledValues(now);
        ambienceGain.gain.setValueAtTime(ambienceGain.gain.value || 0, now);
        ambienceGain.gain.linearRampToValueAtTime(targetGain, now + 2);
        if (textSpan) textSpan.textContent = "Silenciar";
        button.classList.add("active");
        button.classList.remove("error");
        indicator.classList.add("visible");
        updateSectionAudio(ambienceCurrentSection);
      } else {
        console.log("[Ambiente] DESACTIVANDO");
        ambienceGain.gain.cancelScheduledValues(now);
        ambienceGain.gain.setValueAtTime(ambienceGain.gain.value || 0, now);
        ambienceGain.gain.linearRampToValueAtTime(0, now + 1.5);
        if (textSpan) textSpan.textContent = "Ambiente";
        button.classList.remove("active");
        indicator.classList.remove("visible");
      }
    } catch (err) {
      console.error("[Ambiente] Error:", err.name, err.message);
      if (err.stack) console.error("[Ambiente] Stack:", err.stack.split("\n").slice(0, 3).join("\n"));
      button.classList.add("error");
      if (textSpan) textSpan.textContent = "Error";
      ambienceActive = false;
    }
  }

  button.addEventListener("click", toggle);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      if (ambienceActive && ambienceContext && ambienceGain) {
        const now = ambienceContext.currentTime;
        const profile = findMatchingProfile(ambienceCurrentSection) || ambientProfiles.introduccion;
        const targetGain = parseFloat(volumeSlider.value) * profile.baseGain;
        ambienceGain.gain.cancelScheduledValues(now);
        ambienceGain.gain.setValueAtTime(ambienceGain.gain.value || 0, now);
        ambienceGain.gain.linearRampToValueAtTime(targetGain, now + 0.4);
      }
    });
  }
}

/* === MAP PLACE HIGHLIGHTING (for explicacion_lugares) === */

function highlightMapPlace(placeName) {
  document.querySelectorAll(".place").forEach(function(el) {
    var match = el.dataset.place === placeName;
    el.classList.toggle("tour-highlight", match);
  });
}

/* === AUDIO GUIDE CONTROLLER === */

// Ambient ducking: 20% durante narracion, restauracion gradual al finalizar
function duckAmbient(active) {
  if (!ambienceContext || !ambienceGain || !ambienceActive) return;
  var now = ambienceContext.currentTime;
  var volSlider = document.querySelector("#ambient-volume");
  var sliderVal = volSlider ? parseFloat(volSlider.value) : 0.7;
  var profile = findMatchingProfile(ambienceCurrentSection) || ambientProfiles.introduccion;
  var targetGain = sliderVal * profile.baseGain;
  ambienceGain.gain.cancelScheduledValues(now);
  ambienceGain.gain.setValueAtTime(ambienceGain.gain.value, now);
  ambienceGain.gain.linearRampToValueAtTime(active ? targetGain * 0.2 : targetGain, now + 0.8);
}

// State
var currentAudio = null;         // audio element being played
var currentStepIndex = -1;       // index in audioSteps
var currentSectionAudio = false; // true if triggered by section button (not entry panel)
var narrationIndicator = null;   // floating "🎙 Reproduciendo explicación..."

// Map locations for sexto.mp3
var mapLocationsOrder = ["Tamazunchale", "Tamán", "Axtla", "Tampacán", "San Martín Chalchicuautla", "Tancanhuitz", "Jacala y Molango", "Ciudad del Maíz"];
var mapAnimTimer = null;         // interval for cycling map highlights
var timelineAnimTimer = null;    // interval for cycling timeline during noveno.mp3

// floating 🎧 button
var floatingGuideBtn = null;

/* ---------- helpers ---------- */

function highlightSection(sectionId) {
  document.querySelectorAll("[data-audio-section]").forEach(function(el) {
    el.classList.toggle("tour-active", el.id === sectionId);
  });
}

function scrollToSection(sectionId) {
  var target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  highlightSection(sectionId);
}

function removeAllHighlights() {
  document.querySelectorAll(".place").forEach(function(el) { el.classList.remove("tour-highlight"); });
}

function stopCurrentAudio() {
  if (miniPlayerTimer) { clearTimeout(miniPlayerTimer); miniPlayerTimer = null; }
  miniPlayerHide();
  if (currentAudio) {
    try { currentAudio.pause(); } catch(e) {}
    currentAudio.currentTime = 0;
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio = null;
  }
  if (narrationIndicator) narrationIndicator.style.display = "none";
  duckAmbient(false);
  removeAllHighlights();
  clearMapAnim();
  clearTimelineAnim();
}

function clearMapAnim() {
  if (mapAnimTimer) { clearInterval(mapAnimTimer); mapAnimTimer = null; }
}

function clearTimelineAnim() {
  if (timelineAnimTimer) { clearInterval(timelineAnimTimer); timelineAnimTimer = null; }
}

/* ---------- mini player ---------- */

var miniPlayer = null;
var miniPlayerTimer = null;
var miniPlayerPos = { x: null, y: null };

function createMiniPlayer() {
  miniPlayer = document.createElement("div");
  miniPlayer.className = "mini-player";
  miniPlayer.innerHTML =
    '<div class="mini-player-inner">' +
      '<div class="mini-player-header mini-player-drag-handle">' +
        '<span class="mini-player-section"></span>' +
        '<button class="mini-btn mini-close-btn" title="Cerrar">✕</button>' +
      '</div>' +
      '<div class="mini-player-progress">' +
        '<input type="range" class="mini-player-bar" min="0" max="100" value="0" step="0.1">' +
        '<div class="mini-player-time">' +
          '<span class="mini-player-current">00:00</span>' +
          '<span class="mini-player-sep"> / </span>' +
          '<span class="mini-player-duration">00:00</span>' +
        '</div>' +
      '</div>' +
      '<div class="mini-player-controls">' +
        '<button class="mini-btn" data-action="rewind" title="Retroceder 10s">⏮</button>' +
        '<button class="mini-btn" data-action="play" title="Reproducir / Pausar">▶</button>' +
        '<button class="mini-btn" data-action="forward" title="Adelantar 10s">⏭</button>' +
        '<button class="mini-btn" data-action="mute" title="Silenciar / Activar sonido">🔊</button>' +
        '<div class="mini-player-volume-wrap">' +
          '<input type="range" class="mini-player-volume" min="0" max="1" step="0.05" value="1">' +
        '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(miniPlayer);

  miniPlayer.querySelector(".mini-close-btn").addEventListener("click", function() {
    stopCurrentAudio();
  });

  miniPlayer.querySelector('[data-action="play"]').addEventListener("click", function() {
    if (!currentAudio) return;
    if (currentAudio.paused) {
      currentAudio.play();
      this.textContent = "⏸";
    } else {
      currentAudio.pause();
      this.textContent = "▶";
    }
  });

  miniPlayer.querySelector('[data-action="rewind"]').addEventListener("click", function() {
    if (!currentAudio) return;
    currentAudio.currentTime = Math.max(0, currentAudio.currentTime - 10);
  });

  miniPlayer.querySelector('[data-action="forward"]').addEventListener("click", function() {
    if (!currentAudio) return;
    currentAudio.currentTime = Math.min(currentAudio.duration || 0, currentAudio.currentTime + 10);
  });

  miniPlayer.querySelector('[data-action="mute"]').addEventListener("click", function() {
    if (!currentAudio) return;
    currentAudio.muted = !currentAudio.muted;
    this.textContent = currentAudio.muted ? "🔇" : "🔊";
  });

  miniPlayer.querySelector(".mini-player-bar").addEventListener("input", function() {
    if (!currentAudio || !currentAudio.duration) return;
    currentAudio.currentTime = (this.value / 100) * currentAudio.duration;
    if (currentAudio.paused) currentAudio.play();
  });

  miniPlayer.querySelector(".mini-player-volume").addEventListener("input", function() {
    if (!currentAudio) return;
    currentAudio.volume = parseFloat(this.value);
    var muteBtn = miniPlayer.querySelector('[data-action="mute"]');
    muteBtn.textContent = currentAudio.volume === 0 ? "🔇" : "🔊";
    if (currentAudio.volume > 0 && currentAudio.muted) {
      currentAudio.muted = false;
      muteBtn.textContent = "🔊";
    }
  });

  makeDraggable(miniPlayer, miniPlayer.querySelector(".mini-player-drag-handle"));
}

function makeDraggable(el, handle) {
  var isDragging = false;
  var startX, startY, origX, origY;
  var target = handle || el;

  function onStart(e) {
    if (e.target.closest("button, input, [data-action]")) return;
    e.preventDefault();
    var rect = el.getBoundingClientRect();
    origX = rect.left;
    origY = rect.top;
    startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    startY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;
    isDragging = true;
    el.style.cursor = "grabbing";
    el.classList.add("dragging");
  }

  function onMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    var cx = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    var cy = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    var dx = cx - startX;
    var dy = cy - startY;
    el.style.left = (origX + dx) + "px";
    el.style.top = (origY + dy) + "px";
    el.style.right = "auto";
    el.style.bottom = "auto";
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    el.style.cursor = "";
    el.classList.remove("dragging");
  }

  target.addEventListener("mousedown", onStart);
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onEnd);
  target.addEventListener("touchstart", onStart, { passive: false });
  document.addEventListener("touchmove", onMove, { passive: false });
  document.addEventListener("touchend", onEnd);
}

function miniPlayerShow(step) {
  if (!miniPlayer) createMiniPlayer();
  miniPlayer.querySelector(".mini-player-section").textContent = "🎧 " + step.label;
  var playBtn = miniPlayer.querySelector('[data-action="play"]');
  playBtn.textContent = "⏸";
  var muteBtn = miniPlayer.querySelector('[data-action="mute"]');
  muteBtn.textContent = "🔊";
  miniPlayer.querySelector(".mini-player-bar").value = 0;
  miniPlayer.querySelector(".mini-player-volume").value = parseFloat(document.querySelector("#tour-volume")?.value || 1);
  miniPlayer.classList.add("active");

  if (miniPlayer._updateTimer) clearInterval(miniPlayer._updateTimer);
  miniPlayer._updateTimer = setInterval(function() {
    if (!currentAudio || !miniPlayer || !miniPlayer.classList.contains("active")) return;
    var current = currentAudio.currentTime || 0;
    var duration = currentAudio.duration || 0;
    miniPlayer.querySelector(".mini-player-current").textContent = formatTime(current);
    miniPlayer.querySelector(".mini-player-duration").textContent = formatTime(duration);
    if (duration) {
      miniPlayer.querySelector(".mini-player-bar").value = (current / duration) * 100;
    }
  }, 250);

  if (!miniPlayer._posSet) {
    miniPlayer.style.left = "";
    miniPlayer.style.right = "1rem";
    miniPlayer.style.bottom = "8rem";
    miniPlayer.style.top = "auto";
    miniPlayer._posSet = true;
  }
}

function miniPlayerHide() {
  if (!miniPlayer) return;
  miniPlayer.classList.remove("active");
  miniPlayer.querySelector('[data-action="play"]').textContent = "▶";
  if (miniPlayer._updateTimer) {
    clearInterval(miniPlayer._updateTimer);
    miniPlayer._updateTimer = null;
  }
  if (miniPlayerTimer) {
    clearTimeout(miniPlayerTimer);
    miniPlayerTimer = null;
  }
}

function miniPlayerShowLabel(text) {
  if (!miniPlayer) return;
  miniPlayer.querySelector(".mini-player-section").textContent = text;
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "00:00";
  var m = Math.floor(seconds / 60);
  var s = Math.floor(seconds % 60);
  return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

/* ---------- indicator "🎙 Reproduciendo explicación..." ---------- */

function showNarrationIndicator(label) {
  if (!narrationIndicator) {
    narrationIndicator = document.createElement("div");
    narrationIndicator.className = "narration-indicator";
    document.body.appendChild(narrationIndicator);
  }
  narrationIndicator.textContent = "🎙 Reproduciendo " + label + "...";
  narrationIndicator.style.display = "flex";
}

/* ---------- end-of-audio panel ---------- */

function dismissEndPanel() {
  var p = document.querySelector(".end-panel");
  if (p) { p.remove(); }
}

function showEndPanel(index) {
  dismissEndPanel();
  // si es el ultimo (despedida), mostrar panel de completado
  if (index >= audioSteps.length - 1) { showCompletionPanel(); return; }

  var panel = document.createElement("div");
  panel.className = "end-panel";
  panel.innerHTML =
    '<div class="end-panel-inner">' +
      '<p class="end-panel-title">¿Qué deseas hacer?</p>' +
      '<div class="end-panel-actions">' +
        '<button class="end-btn continue-btn" data-next="' + (index + 1) + '">➡ Continuar recorrido</button>' +
        '<button class="end-btn explore-btn">📖 Explorar esta sección</button>' +
        '<button class="end-btn menu-btn">🗂 Elegir sección</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(panel);

  panel.querySelector(".continue-btn").addEventListener("click", function() {
    var next = parseInt(this.dataset.next, 10);
    dismissEndPanel();
    scrollToSection(audioSteps[next].sectionId);
    setTimeout(function() { playStep(next, false); }, 600);
  });
  panel.querySelector(".explore-btn").addEventListener("click", function() {
    dismissEndPanel();
  });
  panel.querySelector(".menu-btn").addEventListener("click", function() {
    dismissEndPanel();
    showSectionMenu();
  });
}

/* ---------- completion panel (despues de despedida) ---------- */

function showCompletionPanel() {
  dismissEndPanel();
  var panel = document.createElement("div");
  panel.className = "end-panel completion-panel";
  panel.innerHTML =
    '<div class="end-panel-inner">' +
      '<p class="end-panel-completion-icon">🎉</p>' +
      '<p class="end-panel-title">Recorrido completado</p>' +
      '<p class="end-panel-msg">Gracias por visitar este museo digital sobre la Rebelión de Tamazunchale.</p>' +
      '<div class="end-panel-actions">' +
        '<button class="end-btn archive-btn">📚 Explorar archivo histórico</button>' +
        '<button class="end-btn gallery-btn">🖼 Ver galería histórica</button>' +
        '<button class="end-btn sources-btn">📖 Consultar fuentes</button>' +
        '<button class="end-btn home-btn">🔄 Volver al inicio</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(panel);

  panel.querySelector(".archive-btn").addEventListener("click", function() { dismissEndPanel(); scrollToSection("archivo"); });
  panel.querySelector(".gallery-btn").addEventListener("click", function() { dismissEndPanel(); scrollToSection("galeria"); });
  panel.querySelector(".sources-btn").addEventListener("click", function() { dismissEndPanel(); scrollToSection("fuentes"); });
  panel.querySelector(".home-btn").addEventListener("click", function() { dismissEndPanel(); scrollToSection("inicio"); });
}

/* ---------- section menu ---------- */

function showSectionMenu() {
  dismissEndPanel();
  if (narrationIndicator) narrationIndicator.style.display = "none";
  var overlay = document.createElement("div");
  overlay.className = "section-menu-overlay";
  var list = audioSteps.map(function(s, i) {
    return '<button class="section-menu-item" data-idx="' + i + '">' +
      '<span class="section-menu-num">' + (i + 1) + '.</span> ' + s.label +
      ' <span class="section-menu-play">▶</span></button>';
  }).join("");
  overlay.innerHTML =
    '<div class="section-menu-panel">' +
      '<button class="section-menu-close">✕</button>' +
      '<p class="section-menu-title">🗂 Elegir sección</p>' +
      '<div class="section-menu-list">' + list + '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelector(".section-menu-close").addEventListener("click", function() { overlay.remove(); });

  overlay.querySelectorAll(".section-menu-item").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var idx = parseInt(this.dataset.idx, 10);
      overlay.remove();
      dismissEndPanel();
      scrollToSection(audioSteps[idx].sectionId);
      setTimeout(function() { playStep(idx, false); }, 600);
    });
  });
}

/* ---------- map animation for sexto.mp3 ---------- */

function startMapAnimation() {
  clearMapAnim();
  var idx = 0;
  // highlight first
  triggerMapPlace(0);
  mapAnimTimer = setInterval(function() {
    idx = (idx + 1) % mapLocationsOrder.length;
    triggerMapPlace(idx);
  }, 4000);
}

function triggerMapPlace(idx) {
  var name = mapLocationsOrder[idx];
  removeAllHighlights();
  document.querySelectorAll(".place").forEach(function(el) {
    if (el.dataset.place === name) {
      el.classList.add("tour-highlight");
      el.click(); // trigger the click to open description
    }
  });
}

/* ---------- timeline animation for noveno.mp3 ---------- */

function startTimelineAnimation() {
  clearTimelineAnim();
  var items = document.querySelectorAll(".timeline-button");
  if (!items.length) return;
  var idx = 0;
  items[idx] && items[idx].click();
  idx = (idx + 1) % items.length;
  timelineAnimTimer = setInterval(function() {
    if (idx >= items.length) { clearTimelineAnim(); return; }
    items[idx] && items[idx].click();
    items[idx] && items[idx].scrollIntoView({ behavior: "smooth", block: "nearest" });
    idx++;
  }, 3000);
}

/* ---------- core play function ---------- */

function playStep(index, fromEntry) {
  stopCurrentAudio();
  if (index < 0 || index >= audioSteps.length) {
    if (narrationIndicator) narrationIndicator.style.display = "none";
    return;
  }
  var step = audioSteps[index];
  currentStepIndex = index;
  currentSectionAudio = !fromEntry;

  var audio = new Audio(step.file);
  audio.volume = parseFloat(document.querySelector("#tour-volume")?.value || 1);

  audio.onended = function() {
    duckAmbient(false);
    removeAllHighlights();
    clearMapAnim();
    clearTimelineAnim();
    if (narrationIndicator) narrationIndicator.style.display = "none";
    // mostrar "✓" en mini player 5s, luego end panel
    miniPlayerShowLabel("✓ Explicación finalizada");
    miniPlayer.querySelector('[data-action="play"]').textContent = "▶";
    miniPlayerTimer = setTimeout(function() {
      miniPlayerHide();
      showEndPanel(index);
    }, 5000);
  };
  audio.onerror = function() {
    console.warn("[AudioGuide] Error cargando audio:", step.file);
    duckAmbient(false);
    removeAllHighlights();
    clearMapAnim();
    clearTimelineAnim();
    if (narrationIndicator) narrationIndicator.style.display = "none";
    miniPlayerShowLabel("✗ Error al cargar audio");
    miniPlayerTimer = setTimeout(function() {
      miniPlayerHide();
      showEndPanel(index);
    }, 2000);
  };
  currentAudio = audio;
  miniPlayerShow(step);

  showNarrationIndicator(step.label);
  duckAmbient(true);

  // animaciones especificas
  if (step.id === "explicacionLugares") {
    setTimeout(function() { startMapAnimation(); }, 500);
  } else {
    clearMapAnim();
    removeAllHighlights();
  }
  if (step.id === "timeline") {
    setTimeout(function() { startTimelineAnimation(); }, 500);
  } else {
    clearTimelineAnim();
  }

  audio.play().catch(function(e) {
    console.warn("[AudioGuide] Error reproduciendo:", e.message);
    duckAmbient(false);
    if (narrationIndicator) narrationIndicator.style.display = "none";
    miniPlayerShowLabel("✗ Error al reproducir");
    miniPlayerTimer = setTimeout(function() {
      miniPlayerHide();
      showEndPanel(index);
    }, 2000);
  });
}

/* ---------- section 🎧 button handler ---------- */

function setupSectionButtons() {
  audioSteps.forEach(function(step, i) {
    var section = document.getElementById(step.sectionId);
    if (!section) return;
    var existing = section.querySelector(".section-audio-btn");
    if (existing) return;

    var btn = document.createElement("button");
    btn.className = "section-audio-btn";
    btn.textContent = "🎧 Escuchar explicación";
    btn.addEventListener("click", function() {
      stopCurrentAudio();
      scrollToSection(step.sectionId);
      setTimeout(function() { playStep(i, true); }, 600);
    });

    // insert near the top of the section content
    var target = section.querySelector(".section-audio-target") || section.querySelector("h2, h3, .section-header");
    if (target) {
      target.parentNode.insertBefore(btn, target.nextSibling);
    } else {
      section.insertBefore(btn, section.firstChild);
    }
  });
}

/* ---------- floating 🎧 Audioguia button ---------- */

function setupFloatingGuideButton() {
  if (floatingGuideBtn) return;
  floatingGuideBtn = document.createElement("button");
  floatingGuideBtn.className = "floating-guide-btn";
  floatingGuideBtn.textContent = "🎧 Audioguía";
  floatingGuideBtn.setAttribute("aria-label", "Abrir menú de audioguía");
  floatingGuideBtn.addEventListener("click", function() {
    showSectionMenu();
  });
  document.body.appendChild(floatingGuideBtn);
}

/* ---------- main setup ---------- */

function setupAudioGuide() {
  setupSectionButtons();
  setupFloatingGuideButton();
}

/* === SIDE NAVIGATION === */
function setupSideNav() {
  var nav = document.querySelector(".section-nav");
  if (!nav) return;
  var items = [
    { href: "#inicio", label: "Inicio" },
    { href: "#introduccion", label: "Introduccion" },
    { href: "#antecedentes", label: "Antecedentes" },
    { href: "#mapa", label: "Mapa" },
    { href: "#desarrollo", label: "Desarrollo" },
    { href: "#personajes", label: "Personajes" },
    { href: "#timeline", label: "Cronologia" },
    { href: "#consecuencias", label: "Consecuencias" },
    { href: "#impacto", label: "Impacto" },
    { href: "#galeria", label: "Galeria" },
    { href: "#archivo", label: "Archivo" },
    { href: "#audio", label: "Audio" },
    { href: "#fuentes", label: "Fuentes" }
  ];
  nav.innerHTML = items.map(function(item) {
    return '<a href="' + item.href + '" class="section-nav-link" data-label="' + item.label + '">' + item.label + '</a>';
  }).join("");
}

/* === WELCOME SCREEN === */

function setupWelcomeScreen() {
  var overlay = document.getElementById("welcome-screen");
  if (!overlay) return;

  var startBtn = overlay.querySelector(".welcome-btn");
  var manualBtn = overlay.querySelector(".welcome-btn-secondary");

  function dismiss(playAudio) {
    if (playAudio) {
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
      playStep(0, true);
    } else {
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  if (startBtn) {
    startBtn.addEventListener("click", function(e) { e.preventDefault(); dismiss(true); });
    startBtn.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); dismiss(true); }
    });
  }
  if (manualBtn) {
    manualBtn.addEventListener("click", function(e) { e.preventDefault(); dismiss(false); });
    manualBtn.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); dismiss(false); }
    });
  }
}

function setupAll() {
  renderContent();
  renderTimeline();
  renderMap();
  renderAudio();
  renderQr();
  renderIndex();
  renderGaleria();
  renderArchivo();
  setupGaleriaLightbox();
  setupArchivoLightbox();
  setupReveal();
  setupMenu();
  setupParallax();
  setupProgressIndicator();
  setupSideNav();
  setupSectionDetection();
  setupAudioGuide();
  setupWelcomeScreen();
}
setupAll();
setupAmbientSound();
