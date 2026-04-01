import type { EquipmentItem } from '../types/entities'

export const equipmentItems: EquipmentItem[] = [
  {
    id: 'botiquin-primeros-auxilios',
    title: 'Botiquín de Primeros Auxilios',
    category: 'Equipamiento de Emergencias',
    description:
      'Botiquín diseñado para la atención inicial de emergencias, permitiendo una respuesta rápida, segura y organizada ante incidentes laborales.',
    contents: [
      {
        section: 'Equipo de Protección',
        items: ['Guantes de protección', 'Cubrebocas', 'Botella de alcohol en gel']
      },
      {
        section: 'Control de Sangrados',
        items: [
          'Torniquete de trauma',
          'Apósitos estériles',
          'Gasas en rollo',
          'Apósito abdominal',
          'Tijeras punta roma',
          'Solución salina',
          'Curitas',
          'Vendas elásticas',
          'Esparadrapo'
        ]
      },
      {
        section: 'Equipos Varios',
        items: [
          'Manta térmica',
          'Bajalenguas',
          'Aplicadores',
          'Algodón',
          'Bolsa plástica para desechos'
        ]
      }
    ],
    benefits: [
      'Atención inmediata de lesiones y sangrados',
      'Reducción de riesgos durante la intervención inicial',
      'Apoyo fundamental para brigadas y primeros respondedores',
      'Organización eficiente de insumos de emergencia'
    ],
    pills: ['Botiquín', 'Primeros Auxilios', 'Emergencias', 'Sangrados'],
    cardImage: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836249/AidKit_p9tgdz.jpg',
    images: [
      'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836249/AidKit_p9tgdz.jpg',
      'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836248/AidKit2_y6euys.jpg',
      'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836249/AidKit3_ke6tlg.jpg',
      'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836248/AidKit4_w4gua3.jpg'
    ]
  }
]
