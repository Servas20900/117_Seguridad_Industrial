/**
 * Datos de prueba para el entorno de testing
 * Usa datos simplificados para testing rápido
 */

export const testCourses = [
  {
    id: 'test-course-1',
    title: 'Curso de Seguridad Básica - TEST',
    category: 'Seguridad',
    accreditation: 'ISO 45001',
    duration: '40 horas',
    minimum: '10 personas',
    modality: 'Presencial',
    summary: 'Curso básico de seguridad industrial para entornos peligrosos. DATOS DE PRUEBA.',
    topics: ['Riesgos', 'Prevención', 'Protección Personal'],
    pills: ['Básico', 'Obligatorio'],
    image: 'https://via.placeholder.com/400x300?text=Test+Course+1'
  },
  {
    id: 'test-course-2',
    title: 'Primeros Auxilios Avanzado - TEST',
    category: 'Primeros Auxilios',
    accreditation: 'Cruz Roja',
    duration: '32 horas',
    minimum: '8 personas',
    modality: 'Mixto',
    summary: 'Formación avanzada en primeros auxilios. DATOS DE PRUEBA.',
    topics: ['RCP', 'Vendajes', 'Transporte'],
    pills: ['Avanzado', 'Certificado'],
    image: 'https://via.placeholder.com/400x300?text=Test+Course+2'
  }
]

export const testHealthServices = [
  {
    id: 'test-health-1',
    title: 'Examen Médico Ocupacional - TEST',
    category: 'Evaluación',
    standards: ['OSHA', 'Local'],
    modality: 'Presencial',
    scope: 'Evaluación médica para trabajadores expuestos a riesgos. DATOS DE PRUEBA.',
    includes: ['Examen físico', 'Audiometría', 'Radiografías'],
    benefits: ['Detección temprana', 'Cumplimiento legal'],
    pills: ['Periódico'],
    image: 'https://via.placeholder.com/400x300?text=Test+Health+1'
  },
  {
    id: 'test-health-2',
    title: 'Psicología Ocupacional - TEST',
    category: 'Bienestar',
    standards: ['Mental Health'],
    modality: 'Virtual',
    scope: 'Evaluación de salud mental en entornos laborales. DATOS DE PRUEBA.',
    includes: ['Consultoría', 'Seguimiento'],
    benefits: ['Prevención de estrés'],
    pills: ['Preventivo'],
    image: 'https://via.placeholder.com/400x300?text=Test+Health+2'
  }
]

export const testFirstAidKits = [
  {
    id: 'test-kit-1',
    title: 'Botiquín Básico - TEST',
    category: 'Primeros Auxilios',
    description: 'Botiquín con elementos esenciales para primeros auxilios. DATOS DE PRUEBA.',
    contents: {
      bandages: 20,
      gauze: 10,
      antibiotic: 5,
      painkillers: 10
    },
    benefits: ['Rápida respuesta', 'Portátil'],
    pills: ['Básico'],
    images: [
      'https://via.placeholder.com/400x300?text=Test+Kit+1a',
      'https://via.placeholder.com/400x300?text=Test+Kit+1b'
    ]
  }
]

export const testGalleries = [
  {
    title: 'Material Didáctico - TEST',
    category: 'Educativo',
    images: [
      'https://via.placeholder.com/400x300?text=Test+Gallery+1',
      'https://via.placeholder.com/400x300?text=Test+Gallery+2'
    ]
  }
]
