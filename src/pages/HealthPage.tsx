import { useMemo, useState } from 'react'
import { useHealthServices } from '../hooks/useApi'
import ItemCard from '../components/ItemCard'
import ItemModal from '../components/ItemModal'

export default function HealthPage() {
  const { services: occupationalHealthServices, loading } = useHealthServices()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedService = useMemo(
    () => occupationalHealthServices.find(s => s.id === selectedId) || null,
    [selectedId, occupationalHealthServices]
  )

  const categories = Array.from(new Set(occupationalHealthServices.map(s => s.category)))

  return (
    <main>
      <section id="health" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Salud ocupacional</p>
          <h2>Capacitaciones y cumplimiento</h2>
          <p className="lede">Soluciones integrales en salud y seguridad ocupacional adaptadas a las necesidades de tu organización.</p>
        </div>
        {loading ? (
          <div className="loading" style={{ textAlign: 'center', padding: '60px 20px' }}>
            Cargando servicios...
          </div>
        ) : (
        <>
        {categories.map(category => {
          const items = occupationalHealthServices.filter(s => s.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="panel" style={{ padding: '0', marginBottom: '12px' }}>
              <h3 style={{ margin: '0 0 12px' }}>{category}</h3>
              <div className="card-grid" aria-live="polite">
                {items.map((service, idx) => (
                  <ItemCard
                    key={service.id}
                    title={service.title}
                    meta={service.modality}
                    summary={service.scope}
                    pills={service.pills}
                    itemNumber={idx + 1}
                    onOpen={() => setSelectedId(service.id)}
                  />
                ))}
              </div>
            </section>
          )
        })}
        </>
        )}
      </section>

      <ItemModal
        open={!!selectedService}
        onClose={() => setSelectedId(null)}
        title={selectedService?.title}
        subtitle={selectedService?.category}
        meta={selectedService?.modality}
        summary={selectedService?.scope}
        pills={selectedService?.pills}
        image={selectedService?.image}
        sections={
          selectedService
            ? [
                {
                  title: 'Incluye',
                  content: selectedService.includes
                },
                {
                  title: 'Beneficios',
                  content: selectedService.benefits
                },
                {
                  title: 'Estándares y Normativa',
                  content: selectedService.standards
                }
              ]
            : undefined
        }
      />
    </main>
  )
}
