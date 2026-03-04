import { useNavigate } from 'react-router-dom'
import { equipmentItems } from '../data/equipment'
import ItemCard from '../components/ItemCard'

export default function EquipmentPage() {
  const navigate = useNavigate()
  const firstAidKits = equipmentItems
  const categories = Array.from(new Set(firstAidKits.map(k => k.category)))

  const handleCardClick = (equipmentId: string) => {
    navigate(`/equipment/${equipmentId}`)
  }

  return (
    <main>
      <section id="equipment" className="panel">
        <div className="panel-head">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow">Equipamiento</p>
              <h2>Botiquines e insumos listos para su operación.</h2>
              <p className="lede">Gestione listas de botiquines, recargas y kits especializados para sus necesidades de emergencia.</p>
            </div>
            <a
              href="/publicidad-botiquin.pdf"
              download="publicidad-botiquin.pdf"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                backgroundColor: 'var(--accent)',
                color: '#0b0c10',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontWeight: '700',
                transition: 'transform var(--transition), box-shadow var(--transition)',
                boxShadow: 'var(--shadow-soft)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-strong)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
              title="Descargar PDF de publicidad de botiquines"
              aria-label="Descargar publicidad de botiquines"
            >
              <i className="fas fa-download"></i>
              <span>Catálogo Botiquín</span>
            </a>
          </div>
        </div>
        {categories.map(category => {
          const items = firstAidKits.filter(k => k.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="panel" style={{ padding: '0 12px', margin: '0 auto 12px', maxWidth: '1200px' }}>
              <h3 style={{ margin: '0 0 12px' }}>{category}</h3>
              <div className="card-grid" aria-live="polite">
                {items.map((kit, idx) => (
                  <div
                    key={kit.id}
                    onClick={() => handleCardClick(kit.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <ItemCard
                      title={kit.title}
                      image={kit.cardImage}
                      summary={kit.description}
                      pills={kit.pills}
                      itemNumber={idx + 1}
                      onOpen={() => handleCardClick(kit.id)}
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
