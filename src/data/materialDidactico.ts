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
    id: 'Brazo-Control-de-Sangrado',
    title: 'Brazo de control de sangrado',
    description: 'Simulador de alta fidelidad para entrenamiento en técnicas de control de sangrado y manejo de heridas.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773809215/Brazo_ulppmh.jpg']
  },
  {
    id: 'kits-suministros',
    title: 'Kits y suministros',
    description: 'Botiquines completos, vendajes, inmovilizadores, equipamiento de trauma y materiales de práctica profesional.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773449354/aboutbotiquin_ghvzho.jpg']
  }
]
