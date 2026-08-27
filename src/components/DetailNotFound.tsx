import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useLocalizedPath from '../hooks/useLocalizedPath'
import { eyebrow, btnPrimary, panel, detailNotFoundWrap, detailNotFoundTitle, detailNotFoundText } from '../styles/classNames'

interface DetailNotFoundProps {
  type: string
  text: string
  backLink: string
  backText: string
}

export default function DetailNotFound({ type, text, backLink, backText }: DetailNotFoundProps) {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const { path } = useLocalizedPath()

  return (
    <main>
      <section className={panel}>
        <div className={detailNotFoundWrap}>
          <p className={`${eyebrow} text-red-600`}>{t('notFound.error', { defaultValue: 'Error' })}</p>
          <h2 className={detailNotFoundTitle}>{t('notFound.title', { defaultValue: '{{type}} not found', type })}</h2>
          <p className={detailNotFoundText}>
            {text}
          </p>
          <button
            onClick={() => navigate(path(backLink))}
            className={btnPrimary}
          >
            ← {backText}
          </button>
        </div>
      </section>
    </main>
  )
}
