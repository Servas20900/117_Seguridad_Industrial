import { useNavigate } from 'react-router-dom'
import { healthServices } from '../data/healthServices'
import ItemCard from '../components/ItemCard'

export default function HealthPage() {
  const navigate = useNavigate()
  const occupationalHealthServices = healthServices
  const categories = Array.from(new Set(occupationalHealthServices.map(s => s.category)))

  const handleCardClick = (serviceId: string) => {
    navigate(`/health/${serviceId}`)
  }

  return (
    <main>
      <section id="health" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Salud ocupacional</p>
          <h2>Capacitaciones y cumplimiento</h2>
          <p className="lede">Soluciones integrales en salud y seguridad ocupacional adaptadas a las necesidades de tu organización.</p>
        </div>
        {categories.map(category => {
          const items = occupationalHealthServices.filter(s => s.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="panel" style={{ padding: '0', marginBottom: '12px' }}>
              <h3 style={{ margin: '0 0 12px' }}>{category}</h3>
              <div className="card-grid" aria-live="polite">
                {items.map((service, idx) => (
                  <div
                    key={service.id}
                    onClick={() => handleCardClick(service.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <ItemCard
                      title={service.title}
                      image={service.image}
                      meta={service.modality}
                      summary={service.scope}
                      pills={service.pills}
                      itemNumber={idx + 1}
                      onOpen={() => handleCardClick(service.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}
