import { useNavigate } from 'react-router-dom'

interface DetailNotFoundProps {
  type: string
  backLink: string
  backText: string
}

export default function DetailNotFound({ type, backLink, backText }: DetailNotFoundProps) {
  const navigate = useNavigate()

  return (
    <main>
      <section className="panel">
        <div className="detail-not-found">
          <p className="eyebrow">Error</p>
          <h2>{type} no encontrado</h2>
          <p className="detail-not-found-text">
            {type === 'El curso' ? 'El curso que buscas no existe.' : 
             type === 'El equipo' ? 'El equipo que buscas no existe.' :
             'El servicio que buscas no existe.'}
          </p>
          <button
            onClick={() => navigate(backLink)}
            className="btn primary"
          >
            ← {backText}
          </button>
        </div>
      </section>
    </main>
  )
}
