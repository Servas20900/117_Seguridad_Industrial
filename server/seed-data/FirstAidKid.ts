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
    title: 'Botiqu├¡n de Primeros Auxilios',
    category: 'Equipamiento de Emergencias',
    description:
      'Botiqu├¡n dise├▒ado para la atenci├│n inicial de emergencias, permitiendo una respuesta r├ípida, segura y organizada ante incidentes laborales.',
    contents: [
      {
        section: 'Equipo de Protecci├│n',
        items: [
          'Guantes de protecci├│n',
          'Cubre bocas',
          'Botella de alcohol en gel'
        ]
      },
      {
        section: 'Control de Sangrados',
        items: [
          'Torniquete de trauma',
          'Ap├│sitos est├⌐riles',
          'Gasas en rollo',
          'Ap├│sito abdominal',
          'Tijeras punta roma',
          'Soluci├│n salina',
          'Curitas',
          'Vendas el├ísticas',
          'Esparadrapo'
        ]
      },
      {
        section: 'Equipos Varios',
        items: [
          'Manta t├⌐rmica',
          'Baja lenguas',
          'Aplicadores',
          'Algod├│n',
          'Bolsa pl├ística para desechos'
        ]
      }
    ],
    benefits: [
      'Atenci├│n inmediata de lesiones y sangrados',
      'Reducci├│n de riesgos durante la intervenci├│n inicial',
      'Apoyo fundamental para brigadas y primeros respondedores',
      'Organizaci├│n eficiente de insumos de emergencia'
    ],
    pills: ['Botiqu├¡n', 'Primeros Auxilios', 'Emergencias', 'Sangrados'],
    images: [
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961430/B01_dptnyy.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961316/B02_skj3i9.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961900/B03_n1dg4a.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961746/B04_cb9axy.png",
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1766961745/B05_qe1ufp.png"
    ]
  }
]
