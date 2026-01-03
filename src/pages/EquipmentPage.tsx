import { useMemo, useState } from 'react'
import { useEquipment } from '../hooks/useApi'
import ItemCard from '../components/ItemCard'
import ItemModal from '../components/ItemModal'

export default function EquipmentPage() {
  const { equipment: firstAidKits, loading } = useEquipment()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedKit = useMemo(
    () => firstAidKits.find(k => k.id === selectedId) || null,
    [selectedId, firstAidKits]
  )

  const categories = Array.from(new Set(firstAidKits.map(k => k.category)))

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
        {loading ? (
          <div className="loading" style={{ textAlign: 'center', padding: '60px 20px' }}>
            Cargando equipamiento...
          </div>
        ) : (
        <>
        {categories.map(category => {
          const items = firstAidKits.filter(k => k.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="panel" style={{ padding: '0', marginBottom: '12px' }}>
              <h3 style={{ margin: '0 0 12px' }}>{category}</h3>
              <div className="card-grid" aria-live="polite">
                {items.map((kit, idx) => (
                  <ItemCard
                    key={kit.id}
                    title={kit.title}
                    summary={kit.description}
                    pills={kit.pills}
                    itemNumber={idx + 1}
                    onOpen={() => setSelectedId(kit.id)}
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
        open={!!selectedKit}
        onClose={() => setSelectedId(null)}
        title={selectedKit?.title}
        subtitle={selectedKit?.category}
        summary={selectedKit?.description}
        pills={selectedKit?.pills}
        images={selectedKit?.images}
        sections={
          selectedKit
            ? selectedKit.contents.map((c: any) => ({
                title: c.section,
                content: c.items
              }))
            : undefined
        }
        customContent={
          selectedKit?.benefits && selectedKit.benefits.length > 0 ? (
            <div className="modal-list">
              <h4>Beneficios</h4>
              <ul>
                {selectedKit.benefits.map((b: string, idx: number) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ) : undefined
        }
      />
    </main>
  )
}
