import { useParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import useLocalizedCourses from '../hooks/useLocalizedCourses'
import SafeImage from '../components/SafeImage'
import DetailPageLayout from '../components/DetailPageLayout'
import DetailNotFound from '../components/DetailNotFound'
import DetailSection from '../components/DetailSection'
import InfoCard from '../components/InfoCard'
import ItemsList from '../components/ItemsList'
import PillGroup from '../components/PillGroup'
import DetailCTA from '../components/DetailCTA'
import { trackCourseView } from '../utils/analytics'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { infoCardsGrid } from '../styles/classNames'

export default function CourseDetailPage() {
  const { t } = useTranslation('courses')
  const { id } = useParams()
  const courses = useLocalizedCourses()
  const course = useMemo(() => courses.find(c => c.id === id) || null, [courses, id])
  useDocumentTitle(course?.title)

  useEffect(() => {
    if (course) trackCourseView(course.title)
  }, [course])

  if (!course) {
    return (
      <DetailNotFound
        type={t('detail.notFoundType')}
        text={t('detail.notFoundText')}
        backLink="/courses"
        backText={t('detail.backText')}
      />
    )
  }

  const [durationLabel, durationValue] = course.duration
    ? course.duration.split(':').map(s => s.trim())
    : [undefined, undefined]
  const [minimumLabel, minimumValue] = course.minimum
    ? course.minimum.split(':').map(s => s.trim())
    : [undefined, undefined]

  return (
    <DetailPageLayout
      category={course.category}
      title={course.title}
      subtitle={course.summary}
      backLink="/courses"
      backText={t('detail.backText')}
    >
      {/* Imagen del curso */}
      {course.image && (
        <div className="aspect-video overflow-hidden rounded-lg border border-border">
          <SafeImage
            src={course.image}
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Información del curso */}
      <DetailSection title={t('detail.infoTitle')}>
        <div className={infoCardsGrid}>
          <InfoCard label={t('detail.modality')} value={course.modality || t('detail.notSpecified')} />
          {durationLabel && <InfoCard label={durationLabel} value={durationValue} />}
          {minimumLabel && <InfoCard label={minimumLabel} value={minimumValue} />}
          <InfoCard label={t('detail.accreditation')} value={course.accreditation} highlighted />
          {course.price && <InfoCard label={t('detail.investment')} value={course.price} highlighted />}
        </div>
        {(!course.duration || !course.minimum) && (
          <p className="mt-2.5 text-sm text-text-subtle">
            {t('detail.tbdNote')}
          </p>
        )}
      </DetailSection>

      {/* Temas a cubrir */}
      {course.topics && course.topics.length > 0 && (
        <DetailSection title={t('detail.topicsTitle')}>
          <ItemsList items={course.topics} variant="default" />
        </DetailSection>
      )}

      {/* Palabras clave */}
      {course.pills && course.pills.length > 0 && (
        <DetailSection title={t('detail.keywordsTitle')}>
          <PillGroup items={course.pills} variant="accent" />
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
