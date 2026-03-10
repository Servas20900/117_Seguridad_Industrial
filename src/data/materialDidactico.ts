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
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773106269/Mu%C3%B1ecosRCP_h2h6te.jpg']
  },
  {
    id: 'dea-entrenamiento',
    title: 'DEA de entrenamiento',
    description: 'Desfibriladores Externos Automáticos de práctica con electrodos de entrenamiento para familiarización segura.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773106269/DEA_s1ppkv.jpg']
  },
  {
    id: 'kits-suministros',
    title: 'Kits y suministros',
    description: 'Botiquines completos, vendajes, inmovilizadores, equipamiento de trauma y materiales de práctica profesional.',
    images: ['https://res.cloudinary.com/deqpuhfzt/image/upload/v1773106269/botiquines_gskfay.jpg']
  }
]
