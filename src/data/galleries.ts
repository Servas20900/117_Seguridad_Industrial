export type AboutGallery = {
  id: string
  title: string
  description: string
  images: string[]
}

export const aboutGalleries: AboutGallery[] = [
  {
    id: 'maniquies-rcp',
    title: 'Maniquíes de RCP',
    description: 'Simuladores de alta fidelidad para entrenamiento en técnicas de reanimación cardiopulmonar y compresiones torácicas.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1772604073/Curso_Contenido_Intermedio_1_mj6bvx.png']
  },
  {
    id: 'dea-entrenamiento',
    title: 'DEA de entrenamiento',
    description: 'Desfibriladores Externos Automáticos de práctica con electrodos de entrenamiento para familiarización segura.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1772604070/Curso_Contenido_Intermedio__2_1_t6hzwq.png']
  },
  {
    id: 'kits-suministros',
    title: 'Kits y suministros',
    description: 'Botiquines completos, vendajes, inmovilizadores, equipamiento de trauma y materiales de práctica profesional.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1770941513/logo-landing_sbryhs.jpg']
  },
  {
    id: 'experiencias',
    title: 'Experiencias de capacitación',
    description: 'Galería fotográfica de nuestras sesiones de capacitación, simulacros y entrenamientos realizados con nuestros clientes.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1770941513/logo-landing_sbryhs.jpg']
  }
]
