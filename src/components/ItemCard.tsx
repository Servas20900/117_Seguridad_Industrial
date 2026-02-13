interface ItemCardProps {
  title: string
  image?: string
  summary?: string
  meta?: string
  pills?: string[]
  onOpen: () => void
  itemNumber?: number
  icon?: string
}

export default function ItemCard({ 
  title, 
  image, 
  summary, 
  meta, 
  pills, 
  onOpen, 
  itemNumber,
  icon 
}: ItemCardProps) {
  return (
    <article
      className="card"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {/* Imagen del item */}
      {image && (
        <div className="card-image">
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      {/* Badge */}
      {itemNumber && <span className="badge">#{itemNumber}</span>}

      {/* Contenido */}
      <div className="card-content">
        <h3>{title}</h3>
        {summary && <p className="card-summary">{summary}</p>}
        {meta && <p className="card-meta">{meta}</p>}
        
        {/* Pills */}
        {pills && pills.length > 0 && (
          <div className="card-pills">
            {pills.map((p) => (
              <span key={p} className="card-pill">{p}</span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="card-footer">
        <button className="card-action" type="button">
          Ver detalles
        </button>
      </div>
    </article>
  )
}
