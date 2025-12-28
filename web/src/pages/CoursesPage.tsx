import { useMemo, useState } from 'react'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import CourseModal from '../components/CourseModal'

export default function CoursesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCourse = useMemo(() => courses.find(c => c.id === selectedId) || null, [selectedId])

  return (
    <main>
      <section id="courses" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Cursos</p>
          <h2>Capacitación con cartas de contenido claras.</h2>
          <p className="lede">Cards con resumen y vista detallada con objetivos, duración y requisitos de cada programa.</p>
        </div>
        <div className="card-grid" aria-live="polite">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} onOpen={() => setSelectedId(course.id)} />
          ))}
        </div>
      </section>

      <CourseModal course={selectedCourse} onClose={() => setSelectedId(null)} />
    </main>
  )
}
