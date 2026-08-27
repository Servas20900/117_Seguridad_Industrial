import { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useLocalizedPath from '../hooks/useLocalizedPath'
import { eyebrow, lede } from '../styles/classNames'
import { detailPanel, detailBtnBack, detailHeader, detailHeaderTitle, detailHeaderLede, detailContent } from '../styles/classNames'

interface DetailPageLayoutProps {
  category: string
  title: string
  subtitle?: string
  backLink: string
  backText: string
  children: ReactNode
}

export default function DetailPageLayout({
  category,
  title,
  subtitle,
  backLink,
  backText,
  children
}: DetailPageLayoutProps) {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const { path } = useLocalizedPath()

  return (
    <main>
      <section className={detailPanel}>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap items-center gap-1.5 text-sm text-text-subtle">
          <Link to={path('/')} className="transition-colors hover:text-accent-strong">{t('nav.home')}</Link>
          <span aria-hidden="true">/</span>
          <Link to={path(backLink)} className="transition-colors hover:text-accent-strong">{category}</Link>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-text">{title}</span>
        </nav>

        {/* Header con navegación */}
        <button
          onClick={() => navigate(path(backLink))}
          className={detailBtnBack}
        >
          ← {backText}
        </button>

        {/* Título y descripción */}
        <div className={detailHeader}>
          <p className={`${eyebrow} block`}>{category}</p>
          <h1 className={detailHeaderTitle}>{title}</h1>
          <p className={`${lede} ${detailHeaderLede}`}>{subtitle}</p>
        </div>

        {/* Contenido dinámico */}
        <div className={detailContent}>
          {children}
        </div>
      </section>
    </main>
  )
}
