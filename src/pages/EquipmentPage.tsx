import { useMemo, useState } from 'react'
import { firstAidKits } from '../data/FirstAidKid'
import ItemCard from '../components/ItemCard'
import ItemModal from '../components/ItemModal'

export default function EquipmentPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedKit = useMemo(
    () => firstAidKits.find(k => k.id === selectedId) || null,
    [selectedId]
  )

  const categories = Array.from(new Set(firstAidKits.map(k => k.category)))

  return (
    <main>
      <section id="equipment" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Equipamiento</p>
          <h2>Botiquines e insumos listos para su operación.</h2>
          <p className="lede">Gestione listas de botiquines, recargas y kits especializados para sus necesidades de emergencia.</p>
        </div>
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
            ? selectedKit.contents.map(c => ({
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
                {selectedKit.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ) : undefined
        }
      />
    </main>
  )
}
