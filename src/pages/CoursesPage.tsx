import { useMemo, useState } from 'react'
import { useCourses } from '../hooks/useApi'
import CourseCard from '../components/CourseCard'
import CourseModal from '../components/CourseModal'

export default function CoursesPage() {
  const { courses, loading } = useCourses()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCourse = useMemo(() => courses.find(c => c.id === selectedId) || null, [selectedId, courses])

  const categories = [
    'Primeros Auxilios',
    'Control de Incendios',
    'Manejo de Materiales Peligrosos',
  ]

  return (
    <main>
      <section id="courses" className="panel">
        <div className="panel-head">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow">Cursos</p>
              <h2>Capacitación con cartas de contenido claras.</h2>
              <p className="lede">Cards con resumen y vista detallada con objetivos, duración y requisitos de cada programa.</p>
            </div>
            <a
              href="/catalogo-cursos.pdf"
              download="catalogo-cursos.pdf"
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
              title="Descargar catálogo de cursos en PDF"
              aria-label="Descargar catálogo de cursos"
            >
              <i className="fas fa-download"></i>
              <span>Descargar Catálogo</span>
            </a>
          </div>
        </div>
        {loading ? (
          <div className="loading" style={{ textAlign: 'center', padding: '60px 20px' }}>
            Cargando cursos...
          </div>
        ) : (
        <>
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
        </>
        )}
      </section>

      <CourseModal course={selectedCourse} onClose={() => setSelectedId(null)} />
    </main>
  )
}
