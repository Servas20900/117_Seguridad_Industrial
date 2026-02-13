import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  return (
    <main className="detail-page">
      <section className="panel detail-panel">
        {/* Header con navegación */}
        <button
          onClick={() => navigate(backLink)}
          className="btn-back"
        >
          ← {backText}
        </button>

        {/* Título y descripción */}
        <div className="detail-header">
          <p className="eyebrow">{category}</p>
          <h1>{title}</h1>
          <p className="lede">{subtitle}</p>
        </div>

        {/* Contenido dinámico */}
        <div className="detail-content">
          {children}
        </div>
      </section>
    </main>
  )
}
