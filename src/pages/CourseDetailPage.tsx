import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { courses } from '../data/courses'
import SafeImage from '../components/SafeImage'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import InfoCard from '../components/InfoCard'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'

export default function CourseDetailPage() {
  const { id } = useParams()
  const course = useMemo(() => courses.find(c => c.id === id) || null, [id])

  if (!course) {
    return <DetailNotFound type="El curso" backLink="/courses" backText="Volver a cursos" />
  }

  const [durationLabel, durationValue] = course.duration.split(':').map(s => s.trim())
  const [minimumLabel, minimumValue] = course.minimum.split(':').map(s => s.trim())

  return (
    <DetailPageLayout
      category={course.category}
      title={course.title}
      subtitle={course.summary}
      backLink="/courses"
      backText="Volver a cursos"
    >
      {/* Imagen del curso */}
      {course.image && (
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '16 / 9' }}>
          <SafeImage
            src={course.image}
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Información del curso */}
      <DetailSection title="Información del Curso">
        <div className="info-cards-grid">
          <InfoCard label="Modalidad" value={course.modality || 'No especificada'} />
          <InfoCard label={durationLabel} value={durationValue} />
          <InfoCard label={minimumLabel} value={minimumValue} />
          <InfoCard label="Acreditación" value={course.accreditation} highlighted />
        </div>
      </DetailSection>

      {/* Temas a cubrir */}
      {course.topics && course.topics.length > 0 && (
        <DetailSection title="Temas a Cubrir">
          <ItemsList items={course.topics} variant="default" />
        </DetailSection>
      )}

      {/* Palabras clave */}
      {course.pills && course.pills.length > 0 && (
        <DetailSection title="Palabras Clave">
          <PillGroup items={course.pills} variant="accent" />
        </DetailSection>
      )}

      {/* CTA */}
      <DetailCTA
        title="¿Interesado en este curso?"
        description="Contáctanos para más información y disponibilidad de fechas."
        buttonText="Solicitar Información"
        buttonHref="/contact"
      />
    </DetailPageLayout>
  )
}
