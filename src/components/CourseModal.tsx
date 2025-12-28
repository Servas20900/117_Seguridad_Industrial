import type { Course } from '../data/courses'
import SafeImage from './SafeImage'

export default function CourseModal({ course, onClose }: { course: Course | null; onClose: () => void }) {
  const open = Boolean(course)
  return (
    <div className={`modal ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open} onClick={(e) => e.currentTarget === e.target && onClose()}>
      <div className="modal-content">
        <button className="icon-btn close" type="button" aria-label="Cerrar" onClick={onClose}>✕</button>
        {course && (
          <>
            {course.image && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <SafeImage
                  src={course.image.startsWith('/') ? course.image : undefined}
                  publicId={!course.image.startsWith('/') ? course.image : undefined}
                  alt={course.title}
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
            <p className="eyebrow">{course.accreditation}</p>
            <h3>{course.title}</h3>
            <p className="meta">{course.duration} • {course.minimum}{course.modality ? ` • ${course.modality}` : ''}</p>
            <p className="modal-summary">{course.summary}</p>
            <div className="pill-row">
              {course.pills.map((p) => <span className="pill" key={p}>{p}</span>)}
            </div>
            <div className="modal-list">
              <h4>Contenido</h4>
              <ul>
                {course.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
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
