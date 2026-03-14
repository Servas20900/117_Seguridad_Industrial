export type MaterialDidacticoItem = {
  id: string
  title: string
  description: string
  images: string[]
}

export const materialDidacticoItems: MaterialDidacticoItem[] = [
  {
    id: 'maniquies-rcp',
    title: 'Maniquíes de RCP',
    description: 'Simuladores de alta fidelidad para entrenamiento en técnicas de reanimación cardiopulmonar y compresiones torácicas.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773449352/aboutequipo_zqquws.jpg']
  },
  {
    id: 'dea-entrenamiento',
    title: 'DEA de entrenamiento',
    description: 'Desfibriladores Externos Automáticos de práctica con electrodos de entrenamiento para familiarización segura.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773449351/aboutdea_jw8fqx.jpg']
  },
  {
    id: 'kits-suministros',
    title: 'Kits y suministros',
    description: 'Botiquines completos, vendajes, inmovilizadores, equipamiento de trauma y materiales de práctica profesional.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773449354/aboutbotiquin_ghvzho.jpg']
  }
]
