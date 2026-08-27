import type { Course } from '../types/entities'

export const courses: Course[] = [
  {
    id: 'rcp-obstruccion',
    title: 'Reanimación cardiopulmonar y obstrucción de vía aérea',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 6 horas',
    minimum: 'Mínimo: 5 personas',
    price: '₡30.000 por persona',
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
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773448563/Curso01_zlatla.jpg'
  },
  {
    id: 'pab',
    title: 'Primeros Auxilios Básicos, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 8 horas',
    minimum: 'Mínimo: 5 personas',
    price: '₡34.000 por persona',
    modality: 'En sitio',
    summary: 'Respuesta inicial ante emergencias con RCP solo manos, uso de DEA y control de sangrados.',
    topics: [
      'Pasos iniciales y activación del sistema de emergencias',
      'Reconocimiento de paro cardiorrespiratorio',
      'RCP solo con manos en adultos y niños',
      'Uso del DEA y manejo de atragantamientos',
      'Control de sangrados exanguinantes',
      'Vendajes, quemaduras y heridas en tórax y abdomen',
      'Inmovilización de extremidades',
      'Reconocimiento de emergencias médicas (infartos, ACV, convulsiones, asma, hipoglicemia)',
      'Entrega segura del paciente a cuerpos de emergencia'
    ],
    pills: ['RCP con manos', 'DEA', 'Sangrados', 'Vendajes'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773448563/Curso02_z0jvwo.jpg'
  },
  {
    id: 'pae',
    title: 'Primeros Auxilios Estándares, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 8 horas',
    minimum: 'Mínimo: 5 personas',
    price: '₡55.000 por persona',
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
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773448563/Curso03_nvy8ms.jpg'
  },
  {
    id: 'sangrados',
    title: 'Sangrados, RCP & DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 4 horas',
    minimum: 'Mínimo: 5 personas',
    price: '₡20.000 por persona',
    modality: 'En sitio',
    summary: 'Entrenamiento breve en RCP solo manos, uso de DEA y control de sangrados críticos.',
    topics: [
      'Activación del sistema de emergencias',
      'Reconocimiento del paro cardiorrespiratorio',
      'RCP solo con manos',
      'Uso del DEA',
      'Reconocimiento y control de sangrados exanguinantes'
    ],
    pills: ['Sesión rápida', 'DEA', 'Sangrados'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773448562/Curso04_qsvcvr.jpg'
  },
  {
    id: 'recert',
    title: 'Recertificación en Primeros Auxilios, RCP y DEA',
    category: 'Primeros Auxilios',
    accreditation: 'Acreditación Internacional',
    duration: 'Duración: 8 horas',
    minimum: 'Mínimo: 5 personas',
    price: '₡40.000 por persona',
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
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773448563/Curso05_jsdmf3.jpg'
  },


  
  {
    id: 'extintores',
    title: 'Manejo Básico de Extintores',
    category: 'Control de Incendios',
    accreditation: 'Teórico-práctico',
    duration: 'Duración: 3 a 4 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    price: '₡14.000 por participante',
    modality: 'Teórico-práctico',
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
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773452865/Curos06_z9ugfw.jpg'
  },
  {
    id: 'mangueras',
    title: 'Uso de Mangueras Contra Incendios',
    category: 'Control de Incendios',
    accreditation: 'Teórico-práctico',
    duration: 'Duración: 3 a 4 horas',
    minimum: 'Grupo sugerido: 10-20 personas',
    price: '₡14.000 por participante',
    modality: 'Teórico-práctico',
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
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773452868/Curos09_v8qn0c.jpg'
  },
  {
    id: 'brigadas',
    title: 'Capacitación para Brigadas de Emergencia',
    category: 'Control de Incendios',
    accreditation: 'Plan a medida',
    duration: 'Duración según diagnóstico',
    minimum: 'Costo según alcance',
    price: 'Cotización personalizada',
    modality: 'Teórico-práctico',
    summary: 'Entrenamiento integral de brigadas: extintores, mangueras, sistemas fijos y entrega de escena.',
    topics: [
      'Manejo básico de extintores',
      'Uso de mangueras contra incendio',
      'Uso de sistemas fijos contra incendios',
      'Guías para la entrega de escena a cuerpos de emergencia'
    ],
    pills: ['Brigadas', 'Plan a medida', 'Incendios'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773452865/Curos07_efdgts.jpg'
  },
  {
    id: 'evaluativo',
    title: 'Programa Evaluativo para Brigadistas',
    category: 'Control de Incendios',
    accreditation: 'Evaluación operativa',
    duration: 'Duración según simulacro',
    minimum: 'Costo según alcance',
    price: 'Cotización personalizada',
    modality: 'Teórico-práctico',
    summary: 'Simulacro con evaluación de desempeño y retroalimentación según hallazgos.',
    topics: [
      'Simulacro o simulación práctica',
      'Evaluación del desempeño del personal',
      'Identificación de áreas de mejora',
      'Charla teórico-práctica según resultados',
      'Medición del nivel real de respuesta operativa'
    ],
    pills: ['Evaluación', 'Simulacro', 'Mejora continua'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773452866/Curos08_mmy6ei.jpg'
  }
  
  ,
  {
    id: 'hazmat',
    title: 'Manejo Inicial de Incidentes con Materiales Peligrosos (HAZMAT)',
    category: 'Manejo de Materiales Peligrosos',
    accreditation: 'Especializado',
    duration: 'Duración ajustable',
    minimum: 'Costo según alcance',
    price: 'Cotización personalizada',
    modality: 'Teórico-operativo',
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
      'Simulaciones teórico-operativas y toma de decisiones bajo presión',
      'Coordinación con protocolos internos y externos'
    ],
    pills: ['HAZMAT', 'EPP', 'Contención', 'Simulación'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773453171/Curso10_r10zp0.jpg'
  },
  {
    id: 'laboratorio-fuego-espumas',
    title: 'Laboratorio de Fuego & Espumas',
    category: 'Control de Incendios',
    accreditation: 'Teórico-práctico',
    price: 'Cotización personalizada',
    modality: 'Teórico-práctico',
    summary: 'Entrenamiento práctico y controlado para reconocer el comportamiento del fuego según el tipo de combustible y dominar el uso correcto de agentes espumantes en la extinción.',
    topics: [
      'Fuego con hidrocarburos',
      'Fuego con alcoholes',
      'Uso de espuma SFFF',
      'Uso de espuma AFFF',
      'Uso de espuma ARFFF'
    ],
    pills: ['Espumas', 'Hidrocarburos', 'Alcoholes', 'Nuevo'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1786243236/Espumas_thcwuv.png'
  },
  {
    id: 'primeros-auxilios-psicologicos',
    title: 'Primeros Auxilios Psicológicos',
    category: 'Primeros Auxilios',
    accreditation: 'Teórico-práctico',
    price: 'Cotización personalizada',
    modality: 'Teórico-práctico',
    summary: 'La atención de una emergencia no es solo física: este programa prepara a la brigada para brindar contención emocional inmediata a víctimas y compañeros durante y después de un incidente crítico.',
    topics: [
      'Fundamentos de los primeros auxilios psicológicos',
      'Reacciones en crisis',
      'Protocolos de intervención',
      'Prácticas guiadas'
    ],
    pills: ['Apoyo psicológico', 'Crisis', 'Nuevo'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1786242016/PrimerosAuxiliosPsicologicos_oarntd.png'
  }
]
