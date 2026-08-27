import { useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useLocalizedHealthServices from '../hooks/useLocalizedHealthServices'
import SafeImage from '../components/SafeImage'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'
import { trackHealthServiceView } from '../utils/analytics'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function HealthServiceDetailPage() {
  const { t } = useTranslation('healthServices')
  const { id } = useParams()
  const healthServices = useLocalizedHealthServices()
  const service = useMemo(() => healthServices.find(s => s.id === id) || null, [healthServices, id])
  useDocumentTitle(service?.title)

  useEffect(() => {
    if (service) trackHealthServiceView(service.title)
  }, [service])

  if (!service) {
    return (
      <DetailNotFound
        type={t('detail.notFoundType')}
        text={t('detail.notFoundText')}
        backLink="/health"
        backText={t('detail.backText')}
      />
    )
  }

  return (
    <DetailPageLayout
      category={service.category}
      title={service.title}
      subtitle={service.scope || ''}
      backLink="/health"
      backText={t('detail.backText')}
    >
      {/* Imagen del servicio */}
      {service.image && (
        <div className="aspect-video overflow-hidden rounded-lg border border-border">
          <SafeImage
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Detalles del servicio */}
      <DetailSection title={t('detail.detailsTitle')}>
        <p className="leading-relaxed text-text-subtle">
          {service.scope}
        </p>
        {service.modality && (
          <p className="text-text-subtle">
            <strong>{t('detail.modality')}:</strong> {service.modality}
          </p>
        )}
      </DetailSection>

      {/* ¿Qué incluye? */}
      {service.includes && service.includes.length > 0 && (
        <DetailSection title={t('detail.includesTitle')}>
          <ItemsList items={service.includes} variant="accent" />
        </DetailSection>
      )}

      {/* Beneficios */}
      {service.benefits && service.benefits.length > 0 && (
        <DetailSection title={t('detail.benefitsTitle')}>
          <ItemsList items={service.benefits} variant="default" />
        </DetailSection>
      )}

      {/* Estándares y Normativa */}
      {service.standards && service.standards.length > 0 && (
        <DetailSection title={t('detail.standardsTitle')}>
          <PillGroup items={service.standards} variant="standard" />
        </DetailSection>
      )}

      {/* Palabras clave */}
      {service.pills && service.pills.length > 0 && (
        <DetailSection title={t('detail.keywordsTitle')}>
          <PillGroup items={service.pills} variant="accent" />
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
