export type GalleryItem = {
  id: string
  image: string
  description: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1772604073/Curso_Contenido_Intermedio_1_mj6bvx.png',
    description: 'Práctica de RCP con maniquíes de entrenamiento en sesión guiada.'
  },
  {
    id: 'gal-2',
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1772604070/Curso_Contenido_Intermedio__2_1_t6hzwq.png',
    description: 'Entrenamiento con DEA de práctica y simulación de respuesta inicial.'
  },
  {
    id: 'gal-3',
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1772603348/aces_zwtmel.jpg',
    description: 'Capacitación en protocolos internacionales para brigadas empresariales.'
  },
  {
    id: 'gal-4',
    image: 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766947215/PYME_t20kuv.png',
    description: 'Actividades de fortalecimiento y estandarización de procedimientos internos.'
  },
  {
    id: 'gal-5',
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1770941513/logo-landing_sbryhs.jpg',
    description: 'Ejecución de dinámicas prácticas para control de riesgos y emergencias.'
  },
  {
    id: 'gal-6',
    image: 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1772604073/Curso_Contenido_Intermedio_1_mj6bvx.png',
    description: 'Simulacros aplicados para evaluación de tiempos de respuesta del equipo.'
  }
]

export default galleryItems
