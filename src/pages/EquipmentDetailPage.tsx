import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import useLocalizedEquipment from '../hooks/useLocalizedEquipment'
import SafeImage from '../components/SafeImage'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'
import { trackEquipmentView } from '../utils/analytics'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function EquipmentDetailPage() {
  const { t } = useTranslation('equipment')
  const { id } = useParams()
  const equipmentItems = useLocalizedEquipment()
  const equipment = useMemo(() => equipmentItems.find(e => e.id === id) || null, [equipmentItems, id])
  useDocumentTitle(equipment?.title)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (equipment) trackEquipmentView(equipment.title)
  }, [equipment])

  if (!equipment) {
    return (
      <DetailNotFound
        type={t('detail.notFoundType')}
        text={t('detail.notFoundText')}
        backLink="/equipment"
        backText={t('detail.backText')}
      />
    )
  }

  return (
    <DetailPageLayout
      category={equipment.category}
      title={equipment.title}
      subtitle={equipment.description}
      backLink="/equipment"
      backText={t('detail.backText')}
    >
      {/* Imágenes */}
      {equipment.images && equipment.images.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="block aspect-video w-full cursor-pointer overflow-hidden rounded-lg border border-border p-0"
            aria-label={equipment.title}
          >
            <SafeImage
              src={equipment.images[0]}
              alt={equipment.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
          {equipment.images.length > 1 && (
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {equipment.images.map((image, idx) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="h-16 w-[84px] cursor-pointer overflow-hidden rounded-sm border border-border p-0"
                  aria-label={`${equipment.title} ${idx + 1}`}
                >
                  <SafeImage
                    src={image}
                    alt={`${equipment.title} ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}
          <Lightbox
            open={lightboxIndex !== null}
            close={() => setLightboxIndex(null)}
            index={lightboxIndex ?? 0}
            slides={equipment.images.map((src) => ({ src, alt: equipment.title }))}
            plugins={[Zoom, Thumbnails]}
          />
        </>
      )}

      {/* Especificaciones */}
      <DetailSection title={t('detail.specsTitle')}>
        <p className="leading-relaxed text-text-subtle">
          {equipment.description}
        </p>
      </DetailSection>

      {/* Contenido/Componentes */}
      {equipment.contents && equipment.contents.length > 0 && (
        <DetailSection title={t('detail.contentsTitle', { title: equipment.title })}>
          {equipment.contents.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-3 text-[1.1rem] font-semibold text-accent">
                {section.section}
              </h3>
              <ItemsList items={section.items} variant="accent" />
            </div>
          ))}
        </DetailSection>
      )}

      {/* Beneficios */}
      {equipment.benefits && equipment.benefits.length > 0 && (
        <DetailSection title={t('detail.benefitsTitle')}>
          <ItemsList items={equipment.benefits} variant="default" />
        </DetailSection>
      )}

      {/* Características */}
      {equipment.pills && equipment.pills.length > 0 && (
        <DetailSection title={t('detail.featuresTitle')}>
          <PillGroup items={equipment.pills} variant="accent" />
        </DetailSection>
      )}

      {/* CTA */}
      <DetailCTA
        title={t('detail.ctaTitle')}
        description={t('detail.ctaDescription')}
        buttonText={t('buttons.requestInfo', { ns: 'common' })}
        buttonHref="/contact"
      />
    </DetailPageLayout>
  )
}
