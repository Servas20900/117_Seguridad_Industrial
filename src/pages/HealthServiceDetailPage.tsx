import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { healthServices } from '../data/healthServices'
import SafeImage from '../components/SafeImage'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'

export default function HealthServiceDetailPage() {
  const { id } = useParams()
  const service = useMemo(() => healthServices.find(s => s.id === id) || null, [id])

  if (!service) {
    return <DetailNotFound type="El servicio" backLink="/health" backText="Volver a salud ocupacional" />
  }

  return (
    <DetailPageLayout
      category={service.category}
      title={service.title}
      subtitle={service.scope || ''}
      backLink="/health"
      backText="Volver a salud ocupacional"
    >
      {/* Imagen del servicio */}
      {service.image && (
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '16 / 9' }}>
          <SafeImage
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Detalles del servicio */}
      <DetailSection title="Detalles del Servicio">
        <p style={{ color: 'var(--text-subtle)', lineHeight: '1.6' }}>
          {service.scope}
        </p>
        {service.modality && (
          <p style={{ color: 'var(--text-subtle)' }}>
            <strong>Modalidad:</strong> {service.modality}
          </p>
        )}
      </DetailSection>

      {/* ¿Qué incluye? */}
      {service.includes && service.includes.length > 0 && (
        <DetailSection title="¿Qué Incluye?">
          <ItemsList items={service.includes} variant="accent" />
        </DetailSection>
      )}

      {/* Beneficios */}
      {service.benefits && service.benefits.length > 0 && (
        <DetailSection title="Beneficios">
          <ItemsList items={service.benefits} variant="default" />
        </DetailSection>
      )}

      {/* Estándares y Normativa */}
      {service.standards && service.standards.length > 0 && (
        <DetailSection title="Estándares y Normativa">
          <PillGroup items={service.standards} variant="standard" />
        </DetailSection>
      )}

      {/* Palabras clave */}
      {service.pills && service.pills.length > 0 && (
        <DetailSection title="Palabras Clave">
          <PillGroup items={service.pills} variant="accent" />
        </DetailSection>
      )}

      {/* CTA */}
      <DetailCTA
        title="¿Interesado en este servicio?"
        description="Contáctanos para conocer cómo podemos ayudarte a implementar este servicio en tu organización."
        buttonText="Solicitar Información"
        buttonHref="/contact"
      />
    </DetailPageLayout>
  )
}
