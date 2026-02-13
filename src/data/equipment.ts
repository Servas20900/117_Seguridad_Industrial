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
    cardImage: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1770941513/logo-landing_sbryhs.jpg',
    images: [
      'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961430/B01_dptnyy.png',
      'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961316/B02_skj3i9.png',
      'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961900/B03_n1dg4a.png',
      'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961746/B04_cb9axy.png',
      'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961745/B05_qe1ufp.png'
    ]
  }
]
