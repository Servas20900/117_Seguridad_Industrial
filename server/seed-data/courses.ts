export type Course = {
  id: string
  title: string
  category: string
  accreditation: string
  duration: string
  minimum: string
  modality?: string
  summary: string
  topics: string[]
  pills: string[]
  image?: string // Cloudinary Public ID (ej: '117/courses/primeros-auxilios-basicos')
}

export const courses: Course[] = [
  {
    id: 'rcp-obstruccion',
    title: 'Reanimaci├│n cardiopulmonar y obstrucci├│n de v├¡a a├⌐rea',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditaci├│n Internacional',
    duration: 'Duraci├│n: 6 horas',
    minimum: 'M├¡nimo: 5 personas',
    modality: 'En sitio',
    summary: 'Entrenamiento en RCP, uso del DEA y manejo de atragantamientos en adultos y ni├▒os.',
    topics: [
      'Pasos iniciales ante una emergencia',
      'Reconocimiento del paciente en parada cardiorrespiratoria y atragantamiento',
      'Activaci├│n del sistema de emergencias',
      'Compresiones tor├ícicas en adulto y ni├▒o',
      'Uso del desfibrilador externo autom├ítico (DEA)',
      'Uso del dispositivo de ventilaci├│n',
      'Manejo del atragantamiento en adulto y ni├▒o'
    ],
    pills: ['RCP', 'DEA', 'Atragantamiento', 'Ventilaci├│n'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766947121/PPA01_ziecsl.png'
  },
  {
    id: 'pab',
    title: 'Primeros Auxilios B├ísicos, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditaci├│n Internacional',
    duration: 'Duraci├│n: 8 horas',
    minimum: 'M├¡nimo: 5 personas',
    modality: 'En sitio',
    summary: 'Respuesta inicial ante emergencias con RCP solo manos, uso de DEA y control de sangrados.',
    topics: [
      'Pasos iniciales y activaci├│n del sistema de emergencias',
      'Reconocimiento de paro cardiorrespiratorio',
      'RCP solo con manos en adultos y ni├▒os',
      'Uso del DEA y manejo de atragantamientos',
      'Control de sangrados exanguinantes',
      'Vendajes, quemaduras, heridas en t├│rax y abdomen',
      'Inmovilizaci├│n de extremidades',
      'Reconocimiento de emergencias m├⌐dicas (infartos, ACV, convulsiones)',
      'Entrega segura del paciente a cuerpos de emergencia'
    ],
    pills: ['RCP con manos', 'DEA', 'Sangrados', 'Vendajes'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766959153/PPA02_hx490l.png'
    
  },
  {
    id: 'pae',
    title: 'Primeros Auxilios Est├índares, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditaci├│n Internacional',
    duration: 'Duraci├│n: 24 horas',
    minimum: 'M├¡nimo: 5 personas',
    modality: 'En sitio',
    summary: 'Cobertura completa de primeros auxilios con RCP, DEA, trauma, emergencias m├⌐dicas y ambientales.',
    topics: [
      'Anatom├¡a y fisiolog├¡a b├ísica',
      'Evaluaci├│n de la escena y del paciente',
      'Aspectos ├⌐ticos y legales',
      'RCP en adultos y ni├▒os con compresiones y ventilaciones',
      'Uso del DEA y manejo de atragantamientos',
      'Control de sangrados, vendajes y lesiones en t├│rax y abdomen',
      'Manejo de quemaduras y traumas contusos',
      'Restricci├│n de movimiento espinal y signos vitales',
      'Emergencias m├⌐dicas (ACV, infartos, convulsiones, asma, hipoglicemia)',
      'Emergencias ambientales y atenci├│n de partos',
      'Entrega del paciente a personal de emergencia'
    ],
    pills: ['RCP con ventilaci├│n', 'Trauma', 'Emergencias m├⌐dicas', 'Ambientales'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766960081/PPA03_z0hfyq.png'
  },
  {
    id: 'sangrados',
    title: 'Sangrados, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditaci├│n Internacional',
    duration: 'Duraci├│n: 4 horas',
    minimum: 'M├¡nimo: 5 personas',
    modality: 'En sitio',
    summary: 'Entrenamiento breve para RCP con manos, uso de DEA y control de sangrados cr├¡ticos.',
    topics: [
      'Activaci├│n del sistema de emergencias',
      'Reconocimiento del paro cardiorrespiratorio',
      'RCP solo con manos',
      'Uso del DEA',
      'Reconocimiento y control de sangrados exanguinantes'
    ],
    pills: ['Sesi├│n r├ípida', 'DEA', 'Sangrados'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766947121/PPA02_cfvxky.png'
  },
  {
    id: 'recert',
    title: 'Recertificaci├│n en Primeros Auxilios, RCP y DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditaci├│n Internacional',
    duration: 'Duraci├│n: 8 horas',
    minimum: 'M├¡nimo: 5 personas',
    modality: 'En sitio',
    summary: 'Simulaciones y estaciones pr├ícticas para brigadas que requieren recertificaci├│n.',
    topics: [
      'Simulacro y evaluaci├│n del personal de brigada',
      'RCP y DEA',
      'Obstrucci├│n de v├¡a a├⌐rea',
      'Control de sangrados',
      'Vendajes en trauma de t├│rax y abdomen',
      'Inmovilizaci├│n y manejo de trauma',
      'Restricci├│n de movimiento espinal',
      'Emergencias m├⌐dicas',
      'Simulaci├│n integral para brigadas'
    ],
    pills: ['Recertificaci├│n', 'Simulacro', 'Brigadas'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766959821/PPA05_mhjlsu.jpg'
  },
  {
    id: 'extintores',
    title: 'Manejo B├ísico de Extintores',
    category: 'Control de Incendios',
    accreditation: 'Te├│ricoΓÇôpr├íctico',
    duration: 'Duraci├│n: 3 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    modality: 'Te├│ricoΓÇôpr├íctico',
    summary: 'Uso seguro de extintores, tipos de combustibles y m├⌐todos de extinci├│n.',
    topics: [
      'Qu├¡mica del fuego y tipos de combustibles',
      'Tipos de extintores',
      'M├⌐todos de extinci├│n',
      'Normas de seguridad',
      'Inspecci├│n, mantenimiento y recarga',
      'Valoraci├│n del equipo existente en la empresa'
    ],
    pills: ['Fuego', 'Extintores', 'Seguridad'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767034099/PCI01_myd02t.jpg'
  },
  {
    id: 'mangueras',
    title: 'Uso de Mangueras Contra Incendios',
    category: 'Control de Incendios',
    accreditation: 'Te├│ricoΓÇôpr├íctico',
    duration: 'Duraci├│n: 3 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    modality: 'Te├│ricoΓÇôpr├íctico',
    summary: 'Pr├íctica guiada sobre despliegue, conexi├│n y avance con mangueras contra incendio.',
    topics: [
      'Tipos de mangueras y sus caracter├¡sticas',
      'Componentes del sistema',
      'Inspecci├│n y mantenimiento',
      'Despliegue y conexi├│n',
      'T├⌐cnicas de avance y ataque',
      'Trabajo en equipo y comunicaci├│n',
      'Seguridad durante la operaci├│n',
      'Almacenamiento y recogida'
    ],
    pills: ['Mangueras', 'Operaci├│n', 'Seguridad'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767034096/PCI02_kd7paf.jpg'
  },
  {
    id: 'brigadas',
    title: 'Capacitaci├│n para Brigadas de Emergencia',
    category: 'Control de Incendios',
    accreditation: 'Plan a medida',
    duration: 'Duraci├│n seg├║n diagn├│stico',
    minimum: 'Costo seg├║n alcance',
    modality: 'Te├│ricoΓÇôpr├íctico',
    summary: 'Entrenamiento integral de brigadas: extintores, mangueras, sistemas fijos y entrega de escena.',
    topics: [
      'Manejo b├ísico de extintores',
      'Uso de mangueras contra incendio',
      'Uso de sistemas fijos contra incendios',
      'Gu├¡as para la entrega de escena a cuerpos de emergencia'
    ],
    pills: ['Brigadas', 'Plan a medida', 'Incendios'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767034092/PCI03_ap8x87.png'
  },
  {
    id: 'evaluativo',
    title: 'Programa Evaluativo para Brigadistas',
    category: 'Control de Incendios',
    accreditation: 'Evaluaci├│n operativa',
    duration: 'Duraci├│n seg├║n simulacro',
    minimum: 'Costo seg├║n alcance',
    modality: 'Te├│ricoΓÇôpr├íctico',
    summary: 'Simulacro con evaluaci├│n de desempe├▒o y charla seg├║n hallazgos para brigadas.',
    topics: [
      'Simulacro o simulaci├│n pr├íctica',
      'Evaluaci├│n del desempe├▒o del personal',
      'Identificaci├│n de ├íreas de mejora',
      'Charla te├│ricoΓÇôpr├íctica seg├║n resultados',
      'Medici├│n del nivel real de respuesta operativa'
    ],
    pills: ['Evaluaci├│n', 'Simulacro', 'Mejora continua'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767060702/PCI04_d7zgr3.png'
  },
  {
    id: 'hazmat',
    title: 'Manejo Inicial de Incidentes con Materiales Peligrosos (HAZMAT)',
    category: 'Manejo de Materiales Peligrosos',
    accreditation: 'Especializado',
    duration: 'Duraci├│n ajustable',
    minimum: 'Costo seg├║n alcance',
    modality: 'Te├│ricoΓÇôoperativo',
    summary: 'Atenci├│n inicial de incidentes con materiales peligrosos para brigadas empresariales.',
    topics: [
      'Introducci├│n y clasificaci├│n de materiales peligrosos (GHS y ONU)',
      'Identificaci├│n de riesgos qu├¡micos, f├¡sicos y biol├│gicos',
      'Legislaci├│n y normativa aplicable',
      'Identificaci├│n y etiquetado (SDS y pictogramas)',
      'Uso adecuado del Equipo de Protecci├│n Personal (EPP)',
      'M├⌐todos de contenci├│n y absorci├│n de derrames',
      'Procedimientos de descontaminaci├│n',
      'Rol de la brigada dentro del plan de respuesta',
      'Simulaciones te├│ricoΓÇôoperativas y toma de decisiones bajo presi├│n',
      'Coordinaci├│n con protocolos internos y externos'
    ],
    pills: ['HAZMAT', 'EPP', 'Contenci├│n', 'Simulaci├│n'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767058103/MP01_tmraqq.png'
  }
]
