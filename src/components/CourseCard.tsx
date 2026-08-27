import { useTranslation } from 'react-i18next'
import type { Course } from '../types/entities'
import SafeImage from './SafeImage'
import {
  card, cardImageWrap, cardImage, cardBadge, cardContent, cardTitle, cardSummary,
  cardMetaRow, cardMetaPill, cardFooter, cardAction
} from '../styles/classNames'

export default function CourseCard({ course, onOpen, programNumber }: { course: Course; onOpen: () => void; programNumber: number }) {
  const { t } = useTranslation('common')

  return (
    <article
      className={card}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {/* Imagen del curso */}
      {course.image && (
        <div className={cardImageWrap}>
          <SafeImage
            src={course.image}
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Badge */}
      <span className={cardBadge}>P{programNumber}</span>

      {/* Contenido */}
      <div className={cardContent}>
        <h3 className={cardTitle}>{course.title}</h3>
        <p className={cardSummary}>{course.summary}</p>
        {(course.modality || course.duration || course.price) && (
          <p className={cardMetaRow}>
            {course.modality && <span className={cardMetaPill}>{course.modality}</span>}
            {course.duration && <span className={cardMetaPill}>{course.duration.split(':')[1]?.trim() ?? course.duration}</span>}
            {course.price && <span className={cardMetaPill}>{course.price}</span>}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className={cardFooter}>
        <button className={cardAction} type="button">
          {t('buttons.viewDetails')}
        </button>
      </div>
    </article>
  )
}
