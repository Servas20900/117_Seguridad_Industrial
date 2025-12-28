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
    title: 'Reanimación cardiopulmonar y obstrucción de vía aérea',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 6 horas',
    minimum: 'Mínimo: 5 personas',
    modality: 'En sitio',
    summary: 'Entrenamiento en RCP, uso del DEA y manejo de atragantamientos en adultos y niños.',
    topics: [
      'Pasos iniciales ante una emergencia',
      'Reconocimiento del paciente en parada cardiorrespiratoria y atragantamiento',
      'Activación del sistema de emergencias',
      'Compresiones torácicas en adulto y niño',
      'Uso del desfibrilador externo automático (DEA)',
      'Uso del dispositivo de ventilación',
      'Manejo del atragantamiento en adulto y niño'
    ],
    pills: ['RCP', 'DEA', 'Atragantamiento', 'Ventilación'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766947121/PPA01_ziecsl.png'
  },
  {
    id: 'pab',
    title: 'Primeros Auxilios Básicos, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 8 horas',
    minimum: 'Mínimo: 5 personas',
    modality: 'En sitio',
    summary: 'Respuesta inicial ante emergencias con RCP solo manos, uso de DEA y control de sangrados.',
    topics: [
      'Pasos iniciales y activación del sistema de emergencias',
      'Reconocimiento de paro cardiorrespiratorio',
      'RCP solo con manos en adultos y niños',
      'Uso del DEA y manejo de atragantamientos',
      'Control de sangrados exanguinantes',
      'Vendajes, quemaduras, heridas en tórax y abdomen',
      'Inmovilización de extremidades',
      'Reconocimiento de emergencias médicas (infartos, ACV, convulsiones)',
      'Entrega segura del paciente a cuerpos de emergencia'
    ],
    pills: ['RCP con manos', 'DEA', 'Sangrados', 'Vendajes'],
    image: 'PPA02_hx490l'
    
  },
  {
    id: 'pae',
    title: 'Primeros Auxilios Estándares, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 24 horas',
    minimum: 'Mínimo: 5 personas',
    modality: 'En sitio',
    summary: 'Cobertura completa de primeros auxilios con RCP, DEA, trauma, emergencias médicas y ambientales.',
    topics: [
      'Anatomía y fisiología básica',
      'Evaluación de la escena y del paciente',
      'Aspectos éticos y legales',
      'RCP en adultos y niños con compresiones y ventilaciones',
      'Uso del DEA y manejo de atragantamientos',
      'Control de sangrados, vendajes y lesiones en tórax y abdomen',
      'Manejo de quemaduras y traumas contusos',
      'Restricción de movimiento espinal y signos vitales',
      'Emergencias médicas (ACV, infartos, convulsiones, asma, hipoglicemia)',
      'Emergencias ambientales y atención de partos',
      'Entrega del paciente a personal de emergencia'
    ],
    pills: ['RCP con ventilación', 'Trauma', 'Emergencias médicas', 'Ambientales'],
    image: 'PPA03_g0ps7i'
  },
  {
    id: 'sangrados',
    title: 'Sangrados, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 4 horas',
    minimum: 'Mínimo: 5 personas',
    modality: 'En sitio',
    summary: 'Entrenamiento breve para RCP con manos, uso de DEA y control de sangrados críticos.',
    topics: [
      'Activación del sistema de emergencias',
      'Reconocimiento del paro cardiorrespiratorio',
      'RCP solo con manos',
      'Uso del DEA',
      'Reconocimiento y control de sangrados exanguinantes'
    ],
    pills: ['Sesión rápida', 'DEA', 'Sangrados'],
    image: 'PPA02_cfvxky'
  },
  {
    id: 'recert',
    title: 'Recertificación en Primeros Auxilios, RCP y DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 8 horas',
    minimum: 'Mínimo: 5 personas',
    modality: 'En sitio',
    summary: 'Simulaciones y estaciones prácticas para brigadas que requieren recertificación.',
    topics: [
      'Simulacro y evaluación del personal de brigada',
      'RCP y DEA',
      'Obstrucción de vía aérea',
      'Control de sangrados',
      'Vendajes en trauma de tórax y abdomen',
      'Inmovilización y manejo de trauma',
      'Restricción de movimiento espinal',
      'Emergencias médicas',
      'Simulación integral para brigadas'
    ],
    pills: ['Recertificación', 'Simulacro', 'Brigadas'],
    image: '/logo-landing.jpeg'
  },
  {
    id: 'extintores',
    title: 'Manejo Básico de Extintores',
    category: 'Control de Incendios',
    accreditation: 'Teórico–práctico',
    duration: 'Duración: 3 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    modality: 'Teórico–práctico',
    summary: 'Uso seguro de extintores, tipos de combustibles y métodos de extinción.',
    topics: [
      'Química del fuego y tipos de combustibles',
      'Tipos de extintores',
      'Métodos de extinción',
      'Normas de seguridad',
      'Inspección, mantenimiento y recarga',
      'Valoración del equipo existente en la empresa'
    ],
    pills: ['Fuego', 'Extintores', 'Seguridad'],
    image: 'PCI01_ex4c6f'
  },
  {
    id: 'mangueras',
    title: 'Uso de Mangueras Contra Incendios',
    category: 'Control de Incendios',
    accreditation: 'Teórico–práctico',
    duration: 'Duración: 3 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    modality: 'Teórico–práctico',
    summary: 'Práctica guiada sobre despliegue, conexión y avance con mangueras contra incendio.',
    topics: [
      'Tipos de mangueras y sus características',
      'Componentes del sistema',
      'Inspección y mantenimiento',
      'Despliegue y conexión',
      'Técnicas de avance y ataque',
      'Trabajo en equipo y comunicación',
      'Seguridad durante la operación',
      'Almacenamiento y recogida'
    ],
    pills: ['Mangueras', 'Operación', 'Seguridad'],
    image: 'PCI02_yxomzz'
  },
  {
    id: 'brigadas',
    title: 'Capacitación para Brigadas de Emergencia',
    category: 'Control de Incendios',
    accreditation: 'Plan a medida',
    duration: 'Duración según diagnóstico',
    minimum: 'Costo según alcance',
    modality: 'Teórico–práctico',
    summary: 'Entrenamiento integral de brigadas: extintores, mangueras, sistemas fijos y entrega de escena.',
    topics: [
      'Manejo básico de extintores',
      'Uso de mangueras contra incendio',
      'Uso de sistemas fijos contra incendios',
      'Guías para la entrega de escena a cuerpos de emergencia'
    ],
    pills: ['Brigadas', 'Plan a medida', 'Incendios'],
    image: 'PCI3_rshyxp'
  },
  {
    id: 'evaluativo',
    title: 'Programa Evaluativo para Brigadistas',
    category: 'Control de Incendios',
    accreditation: 'Evaluación operativa',
    duration: 'Duración según simulacro',
    minimum: 'Costo según alcance',
    modality: 'Teórico–práctico',
    summary: 'Simulacro con evaluación de desempeño y charla según hallazgos para brigadas.',
    topics: [
      'Simulacro o simulación práctica',
      'Evaluación del desempeño del personal',
      'Identificación de áreas de mejora',
      'Charla teórico–práctica según resultados',
      'Medición del nivel real de respuesta operativa'
    ],
    pills: ['Evaluación', 'Simulacro', 'Mejora continua'],
    image: '/logo-landing.jpeg'
  },
  {
    id: 'hazmat',
    title: 'Manejo Inicial de Incidentes con Materiales Peligrosos (HAZMAT)',
    category: 'Manejo de Materiales Peligrosos',
    accreditation: 'Especializado',
    duration: 'Duración ajustable',
    minimum: 'Costo según alcance',
    modality: 'Teórico–operativo',
    summary: 'Atención inicial de incidentes con materiales peligrosos para brigadas empresariales.',
    topics: [
      'Introducción y clasificación de materiales peligrosos (GHS y ONU)',
      'Identificación de riesgos químicos, físicos y biológicos',
      'Legislación y normativa aplicable',
      'Identificación y etiquetado (SDS y pictogramas)',
      'Uso adecuado del Equipo de Protección Personal (EPP)',
      'Métodos de contención y absorción de derrames',
      'Procedimientos de descontaminación',
      'Rol de la brigada dentro del plan de respuesta',
      'Simulaciones teórico–operativas y toma de decisiones bajo presión',
      'Coordinación con protocolos internos y externos'
    ],
    pills: ['HAZMAT', 'EPP', 'Contención', 'Simulación'],
    image: '/logo-landing.jpeg'
  }
]
