import { useTranslation } from 'react-i18next'
import {
  card, cardImageWrap, cardImage, cardBadge, cardContent, cardTitle, cardSummary,
  cardMetaRow, cardMetaPill, cardPillsRow, cardPill, cardFooter, cardAction
} from '../styles/classNames'

interface ItemCardProps {
  title: string
  image?: string
  summary?: string
  meta?: string
  pills?: string[]
  onOpen: () => void
  itemNumber?: number
}

export default function ItemCard({
  title,
  image,
  summary,
  meta,
  pills,
  onOpen,
  itemNumber
}: ItemCardProps) {
  const { t } = useTranslation('common')

  return (
    <article
      className={card}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {/* Imagen del item */}
      {image && (
        <div className={cardImageWrap}>
          <img src={image} alt={title} className={cardImage} />
        </div>
      )}

      {/* Badge */}
      {itemNumber && <span className={cardBadge}>#{itemNumber}</span>}

      {/* Contenido */}
      <div className={cardContent}>
        <h3 className={cardTitle}>{title}</h3>
        {summary && <p className={cardSummary}>{summary}</p>}
        {meta && <p className={cardMetaRow}><span className={cardMetaPill}>{meta}</span></p>}

        {/* Pills */}
        {pills && pills.length > 0 && (
          <div className={cardPillsRow}>
            {pills.map((p) => (
              <span key={p} className={cardPill}>{p}</span>
            ))}
          </div>
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
