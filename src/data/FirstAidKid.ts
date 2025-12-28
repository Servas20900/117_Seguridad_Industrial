export type FirstAidKit = {
  id: string
  title: string
  category: string
  description: string
  contents: {
    section: string
    items: string[]
  }[]
  benefits: string[]
  pills: string[]
  images: string[]
}
export const firstAidKits: FirstAidKit[] = [
  {
    id: 'botiquin-primeros-auxilios',
    title: 'Botiquín de Primeros Auxilios',
    category: 'Equipamiento de Emergencias',
    description:
      'Botiquín diseñado para la atención inicial de emergencias, permitiendo una respuesta rápida, segura y organizada ante incidentes laborales.',
    contents: [
      {
        section: 'Equipo de Protección',
        items: [
          'Guantes de protección',
          'Cubre bocas',
          'Botella de alcohol en gel'
        ]
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
          'Baja lenguas',
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
    images: [
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961430/B01_dptnyy.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961316/B02_skj3i9.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961569/B03_c6kman.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961746/B04_cb9axy.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961745/B05_qe1ufp.png"
    ]
  }
]
