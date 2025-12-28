interface ItemCardProps {
  title: string
  meta?: string
  summary?: string
  pills?: string[]
  onOpen: () => void
  itemNumber?: number
}

export default function ItemCard({ title, meta, summary, pills, onOpen, itemNumber }: ItemCardProps) {
  return (
    <article
      className="card"
      style={{ height: '100%' }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {itemNumber && <span className="badge">Opción {itemNumber}</span>}
      <h3>{title}</h3>
      {meta && <p className="meta">{meta}</p>}
      {summary && <p>{summary}</p>}
      {pills && pills.length > 0 && (
        <div className="pill-row" style={{ marginTop: '8px', gap: '6px' }}>
          {pills.map((p) => <span className="pill" key={p}>{p}</span>)}
        </div>
      )}
      <button className="text-btn" type="button">Ver detalles</button>
    </article>
  )
}
