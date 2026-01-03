export type OccupationalHealthService = {
  id: string
  title: string
  category: string
  standards: string[]
  modality?: string     
  scope: string              
  includes: string[]        
  benefits: string[]        
  pills: string[]            
  image?: string            
}

export const occupationalHealthServices: OccupationalHealthService[] = [
  {
    id: 'capacitacion-salud-ocupacional',
    title: 'Capacitaci├│n en Salud Ocupacional',
    category: 'Salud y Seguridad Ocupacional',
    standards: ['ISO', 'OSHA', 'INTE'],
    modality: 'En sitio',
    scope:
      'Programas de formaci├│n orientados a la prevenci├│n de riesgos laborales, fortaleciendo la cultura de seguridad y bienestar dentro de la organizaci├│n.',
    includes: [
      'Identificaci├│n de riesgos laborales',
      'Control y eliminaci├│n de riesgos',
      'Capacitaci├│n a colaboradores y supervisores',
      'Enfoque preventivo ante enfermedades y accidentes laborales'
    ],
    benefits: [
      'Reducci├│n de accidentes laborales',
      'Cumplimiento normativo',
      'Mejora del bienestar del personal',
      'Fortalecimiento de la cultura organizacional'
    ],
    pills: ['Prevenci├│n', 'Riesgos laborales', 'Capacitaci├│n', 'Normativa'],
    image: '/logo-landing.jpeg'
  },
  {
    id: 'asesoria-tecnica-isso',
    title: 'Asesor├¡a T├⌐cnica Especializada en Salud Ocupacional',
    category: 'Consultor├¡a T├⌐cnica',
    standards: ['Legislaci├│n Nacional', 'ISO'],
    modality: 'Consultor├¡a',
    scope:
      'Asesor├¡a profesional brindada por Ingenieros en Salud y Seguridad Ocupacional, Prevencionistas y Gestores Ambientales.',
    includes: [
      'Dise├▒o de planes estrat├⌐gicos',
      'Elaboraci├│n y ejecuci├│n de programas de salud ocupacional',
      'Acompa├▒amiento t├⌐cnico continuo',
      'Alineaci├│n con legislaci├│n vigente'
    ],
    benefits: [
      'Prevenci├│n de sanciones legales',
      'Planes adaptados a la empresa',
      'Soporte t├⌐cnico especializado',
      'Mejor toma de decisiones'
    ],
    pills: ['ISSO', 'Consultor├¡a', 'Cumplimiento', 'Prevenci├│n'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767060702/PCI04_d7zgr3.png'
  },
  {
    id: 'planes-sso-emergencias',
    title: 'Elaboraci├│n y Ejecuci├│n de Planes de Salud Ocupacional',
    category: 'Planes y Gesti├│n',
    standards: ['ISO', 'NFPA', 'OSHA', 'INTE'],
    modality: 'En sitio',
    scope:
      'Desarrollo de planes integrales ajustados a las necesidades reales de cada organizaci├│n.',
    includes: [
      'Planes de Salud Ocupacional',
      'Planes de Preparativos y Respuesta ante Emergencias',
      'Planes de Gesti├│n Integral de Residuos',
      'Planes B├ísicos de Protecci├│n Contra Incendios',
      'Planes de Manejo de Derrames Qu├¡micos'
    ],
    benefits: [
      'Cumplimiento legal',
      'Mejor organizaci├│n ante emergencias',
      'Reducci├│n de riesgos humanos y materiales',
      'Continuidad operativa'
    ],
    pills: ['Planes', 'Emergencias', 'Incendios', 'Residuos'],
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1767059635/SO03_xtcl8d.jpg'
  },
  {
    id: 'estudios-higiene-industrial',
    title: 'Estudios de Higiene Industrial',
    category: 'Evaluaci├│n de Riesgos',
    standards: ['Normativa Nacional', 'Buenas Pr├ícticas Internacionales'],
    modality: 'En sitio',
    scope:
      'Evaluaci├│n t├⌐cnica de las condiciones laborales para identificar factores que afectan la salud del trabajador.',
    includes: [
      'Medici├│n de ruido ocupacional y ambiental',
      'An├ílisis de niveles de iluminaci├│n',
      'Estudios de riesgos ocupacionales',
      'Informes t├⌐cnicos para toma de decisiones'
    ],
    benefits: [
      'Identificaci├│n temprana de riesgos',
      'Mejora de condiciones laborales',
      'Datos t├⌐cnicos confiables',
      'Prevenci├│n de enfermedades profesionales'
    ],
    pills: ['Ruido', 'Iluminaci├│n', 'Higiene industrial', 'Evaluaci├│n'],
    image: '/logo-landing.jpeg'
  }
]
