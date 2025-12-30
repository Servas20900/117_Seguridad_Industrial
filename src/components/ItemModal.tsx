interface ItemModalProps {
  open: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  meta?: string
  summary?: string
  pills?: string[]
  image?: string
  images?: string[]
  sections?: Array<{ title: string; content: string[] }>
  customContent?: React.ReactNode
}

import SafeImage from './SafeImage'
import ImageCarousel from './ImageCarousel'

export default function ItemModal({
  open,
  onClose,
  title,
  subtitle,
  meta,
  summary,
  pills,
  image,
  images,
  sections,
  customContent,
}: ItemModalProps) {
  return (
    <div className={`modal ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open} onClick={(e) => e.currentTarget === e.target && onClose()}>
      <div className="modal-content">
        <button className="icon-btn close" type="button" aria-label="Cerrar" onClick={onClose}>✕</button>
        {open && (
          <>
            {images && images.length > 0 ? (
              <ImageCarousel images={images} alt={title || 'Item'} />
            ) : image && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <SafeImage
                  src={image.startsWith('/') || image.startsWith('https://') ? image : undefined}
                  publicId={!image.startsWith('/') && !image.startsWith('https://') ? image : undefined}
                  alt={title || 'Item'}
                  width={600}
                  height={280}
                  crop="fill"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: '280px',
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            )}
            {subtitle && <p className="eyebrow">{subtitle}</p>}
            {title && <h3>{title}</h3>}
            {meta && <p className="meta">{meta}</p>}
            {summary && <p className="modal-summary">{summary}</p>}
            {pills && pills.length > 0 && (
              <div className="pill-row">
                {pills.map((p) => <span className="pill" key={p}>{p}</span>)}
              </div>
            )}
            
            {sections && sections.length > 0 && (
              <>
                {sections.map((section, idx) => (
                  <div key={idx} className="modal-list">
                    <h4>{section.title}</h4>
                    <ul>
                      {section.content.map((item, itemIdx) => <li key={itemIdx}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </>
            )}

            {customContent && <div>{customContent}</div>}

            <div className="contact-inline">
              <p>
                Agenda al (506) 8805-3660 / (506) 8874-9761 o <a href="mailto:info@117securityindustrial.com">info@117securityindustrial.com</a>
              </p>
              <div className="pill-row">
                <a className="pill" href="https://wa.me/50688053660" target="_blank" rel="noopener">WhatsApp 8805-3660</a>
                <a className="pill" href="https://wa.me/50688749761" target="_blank" rel="noopener">WhatsApp 8874-9761</a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
