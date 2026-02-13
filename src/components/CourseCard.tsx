import type { Course } from '../types/entities'
import SafeImage from './SafeImage'

export default function CourseCard({ course, onOpen, programNumber }: { course: Course; onOpen: () => void; programNumber: number }) {
  return (
    <article
      className="card"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {/* Imagen del curso */}
      {course.image && (
        <div className="card-image">
          <SafeImage
            src={course.image}
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Badge */}
      <span className="badge">P{programNumber}</span>

      {/* Contenido */}
      <div className="card-content">
        <h3>{course.title}</h3>
        <p className="card-summary">{course.summary}</p>
        {course.modality && (
          <p className="card-meta">
            <span>{course.modality}</span>
            <span>{course.duration.split(':')[1]?.trim()}</span>
          </p>
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
