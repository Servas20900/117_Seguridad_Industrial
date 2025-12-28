import { useMemo, useState } from 'react'
import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import CourseModal from '../components/CourseModal'

export default function CoursesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCourse = useMemo(() => courses.find(c => c.id === selectedId) || null, [selectedId])

  const categories = [
    'Primeros Auxilios',
    'Control de Incendios',
    'Manejo de Materiales Peligrosos',
  ]

  return (
    <main>
      <section id="courses" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Cursos</p>
          <h2>Capacitación con cartas de contenido claras.</h2>
          <p className="lede">Cards con resumen y vista detallada con objetivos, duración y requisitos de cada programa.</p>
        </div>
        {categories.map(category => {
          const items = courses.filter(c => c.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="panel" style={{ padding: '0', marginBottom: '12px' }}>
              <h3 style={{ margin: '0 0 12px' }}>{category}</h3>
              <div className="card-grid" aria-live="polite">
                {items.map((course, idx) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    programNumber={idx + 1}
                    onOpen={() => setSelectedId(course.id)}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </section>

      <CourseModal course={selectedCourse} onClose={() => setSelectedId(null)} />
    </main>
  )
}
