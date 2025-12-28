import type { Course } from '../data/courses'

export default function CourseCard({ course, onOpen, programNumber }: { course: Course; onOpen: () => void; programNumber: number }) {
  return (
    <article
      className="card"
      style={{ height: '100%' }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      <span className="badge">Programa {programNumber}</span>
      <h3>{course.title}</h3>
      <p className="meta">{course.duration} • {course.minimum}{course.modality ? ` • ${course.modality}` : ''}</p>
      <p>{course.summary}</p>
      <button className="text-btn" type="button">Ver detalles</button>
    </article>
  )
}
