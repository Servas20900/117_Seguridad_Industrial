import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { equipmentItems } from '../data/equipment'
import ImageCarousel from '../components/ImageCarousel'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'

export default function EquipmentDetailPage() {
  const { id } = useParams()
  const equipment = useMemo(() => equipmentItems.find(e => e.id === id) || null, [id])

  if (!equipment) {
    return <DetailNotFound type="El equipo" backLink="/equipment" backText="Volver a equipamiento" />
  }

  return (
    <DetailPageLayout
      category={equipment.category}
      title={equipment.title}
      subtitle={equipment.description}
      backLink="/equipment"
      backText="Volver a equipamiento"
    >
      {/* Carrusel de imágenes */}
      {equipment.images && equipment.images.length > 0 && (
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '16 / 9' }}>
          <ImageCarousel images={equipment.images} alt={equipment.title} />
        </div>
      )}

      {/* Especificaciones */}
      <DetailSection title="Especificaciones">
        <p style={{ color: 'var(--text-subtle)', lineHeight: '1.6' }}>
          {equipment.description}
        </p>
      </DetailSection>

      {/* Contenido/Componentes */}
      {equipment.contents && equipment.contents.length > 0 && (
        <DetailSection title={`Contenido del ${equipment.title}`}>
          {equipment.contents.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--accent)', fontWeight: '600' }}>
                {section.section}
              </h3>
              <ItemsList items={section.items} variant="accent" />
            </div>
          ))}
        </DetailSection>
      )}

      {/* Beneficios */}
      {equipment.benefits && equipment.benefits.length > 0 && (
        <DetailSection title="Beneficios">
          <ItemsList items={equipment.benefits} variant="default" />
        </DetailSection>
      )}

      {/* Características */}
      {equipment.pills && equipment.pills.length > 0 && (
        <DetailSection title="Características">
          <PillGroup items={equipment.pills} variant="accent" />
        </DetailSection>
      )}

      {/* CTA */}
      <DetailCTA
        title="¿Necesitas este equipo?"
        description="Contáctanos para obtener presupuestos y disponibilidad."
        buttonText="Solicitar Información"
        buttonHref="/contact"
      />
    </DetailPageLayout>
  )
}
