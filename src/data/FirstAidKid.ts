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
      '/logo-landing.jpeg', '/logo-landing.jpeg', '/logo-landing.jpeg'
    ]
  }
]
