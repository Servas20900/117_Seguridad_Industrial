import type { HealthService } from '../types/entities'

export const healthServices: HealthService[] = [
  {
    id: 'capacitacion-salud-ocupacional',
    title: 'Capacitación en Salud Ocupacional',
    category: 'Salud y Seguridad Ocupacional',
    standards: ['ISO', 'OSHA', 'INTE'],
    modality: 'En sitio',
    scope:
      'Ofrecemos programas de formación orientados a la prevención, donde los colaboradores junto con sus superiores se capacitan para identificar, controlar y eliminar riesgos, fortaleciendo una cultura organizacional de seguridad y bienestar.',
    includes: [
      'Identificación de riesgos laborales',
      'Control y eliminación de riesgos',
      'Capacitación a colaboradores y supervisores',
      'Enfoque preventivo ante enfermedades y accidentes laborales'
    ],
    benefits: [
      'Reducción de accidentes laborales',
      'Cumplimiento normativo',
      'Mejora del bienestar del personal',
      'Fortalecimiento de la cultura organizacional'
    ],
    pills: ['Prevención', 'Riesgos laborales', 'Capacitación', 'Normativa'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773880476/SO01_xb7vjc.jpg'
  },
  {
    id: 'asesoria-tecnica-sso',
    title: 'Asesoría Técnica Especializada en Salud Ocupacional',
    category: 'Consultoría Técnica',
    standards: ['Legislación Nacional', 'ISO'],
    modality: 'Consultoría',
    scope:
      'Asesoría profesional brindada por Ingenieros en Salud y Seguridad Ocupacional, Prevencionistas y Gestores Ambientales.',
    includes: [
      'Diseño de planes estratégicos',
      'Elaboración y ejecución de programas de salud ocupacional',
      'Acompañamiento técnico continuo',
      'Alineación con legislación vigente'
    ],
    benefits: [
      'Prevención de sanciones legales',
      'Planes adaptados a la empresa',
      'Soporte técnico especializado',
      'Mejor toma de decisiones'
    ],
    pills: ['SSO', 'Consultoría', 'Cumplimiento', 'Prevención'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773880476/SO04_ywdnwv.jpg'
  },
  {
    id: 'planes-sso-emergencias',
    title: 'Elaboración y Ejecución de Planes de Salud Ocupacional',
    category: 'Planes y Gestión',
    standards: ['ISO', 'NFPA', 'OSHA', 'INTE'],
    modality: 'En sitio',
    scope:
      'Desarrollo de planes integrales ajustados a las necesidades reales de cada organización.',
    includes: [
      'Planes de Salud Ocupacional',
      'Planes de Preparativos y Respuesta ante Emergencias',
      'Planes de Gestión Integral de Residuos',
      'Planes Básicos de Protección Contra Incendios',
      'Planes de Manejo de Derrames Químicos'
    ],
    benefits: [
      'Cumplimiento legal',
      'Mejor organización ante emergencias',
      'Reducción de riesgos humanos y materiales',
      'Continuidad operativa'
    ],
    pills: ['Planes', 'Emergencias', 'Incendios', 'Residuos'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773880476/SO02_kmfyfi.jpg'
  },
  {
    id: 'estudios-higiene-industrial',
    title: 'Estudios de Higiene Industrial',
    category: 'Evaluación de Riesgos',
    standards: ['Normativa Nacional', 'Buenas Prácticas Internacionales'],
    modality: 'En sitio',
    scope:
      'Evaluación técnica de las condiciones laborales para identificar factores que afectan la salud del trabajador.',
    includes: [
      'Medición de ruido ocupacional y ambiental',
      'Análisis de niveles de iluminación',
      'Estudios de riesgos ocupacionales',
      'Informes técnicos para toma de decisiones'
    ],
    benefits: [
      'Identificación temprana de riesgos',
      'Mejora de condiciones laborales',
      'Datos técnicos confiables',
      'Prevención de enfermedades profesionales'
    ],
    pills: ['Ruido', 'Iluminación', 'Higiene industrial', 'Evaluación'],
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773880476/SO03_v3ka9v.jpg'
  }
]
