import { Link } from 'react-router-dom'
import SafeImage from '../components/SafeImage'
import { courses } from '../data/courses'
import { equipmentItems } from '../data/equipment'
import { healthServices } from '../data/healthServices'
import CourseCard from '../components/CourseCard'
import ItemCard from '../components/ItemCard'

export default function HomePage({ theme }: { theme: 'light' | 'dark' }) {
  const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
  const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'

  // Get 3 first items from each category
  const featuredCourses = courses.slice(0, 3)
  const featuredEquipment = equipmentItems.slice(0, 3)
  const featuredHealth = healthServices.slice(0, 3)

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="logo-tile" aria-hidden="true" style={{ background: 'transparent' }}>
            <SafeImage
              src={theme === 'dark' ? logoNegroAmarillo : logoNegroBlanco}
              alt="117 Seguridad Industrial"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Acreditación internacional • Respuesta efectiva</p>
            <h1>Centralizamos la seguridad, la capacitación y el equipamiento en un solo lugar.</h1>
            <p className="lede">Programas de Primeros Auxilios, RCP y DEA, brigadas, HAZMAT y equipamiento listo para ser implementado en su operación.</p>
            <p>Especialistas en capacitación y asesoría en seguridad y atención de emergencias, enfocados en preparar brigadas y organizaciones para actuar de forma segura, coordinada y eficiente ante situaciones críticas.</p>
            <br />
            <div className="cta-row" style={{ flexWrap: 'wrap' }}>
              <a
                href="/catalogo-cursos.pdf"
                download="catalogo-cursos.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  backgroundColor: 'var(--accent)',
                  color: '#0b0c10',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '700',
                  transition: 'transform var(--transition), box-shadow var(--transition)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-soft)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-strong)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                }}
                title="Descargar catálogo de cursos"
              >
                <span>Explorar Servicios</span>
              </a>
              <a
                href="/perfil-empresa.pdf"
                download="perfil-empresa.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  backgroundColor: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '700',
                  transition: 'transform var(--transition), border var(--transition), background var(--transition)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.backgroundColor = 'var(--surface-strong)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
                title="Descargar perfil de la empresa"
              >
                <span>Perfil de Empresa</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Preview */}
      <section className="panel home-section">
        <div className="home-section-head">
          <div>
            <p className="eyebrow">Capacitación</p>
            <h2>Programas de Primeros Auxilios y Seguridad</h2>
            <p className="lede">Cursos diseñados para preparar brigadas y personal en técnicas de reanimación y atención de emergencias.</p>
          </div>
          <Link
            to="/courses"
            style={{
              display: 'inline-flex',
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
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-strong)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-soft)'
            }}
          >
            Ver todos →
          </Link>
        </div>
        <div className="card-grid">
          {featuredCourses.map((course, idx) => (
            <CourseCard
              key={course.id}
              course={course}
              programNumber={idx + 1}
              onOpen={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Salud Ocupacional Preview */}
      <section className="panel home-section">
        <div className="home-section-head">
          <div>
            <p className="eyebrow">Salud Ocupacional</p>
            <h2>Capacitaciones y Asesoría Especializada</h2>
            <p className="lede">Soluciones integrales en seguridad y salud ocupacional para organizaciones de todo tamaño.</p>
          </div>
          <Link
            to="/health"
            style={{
              display: 'inline-flex',
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
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-strong)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-soft)'
            }}
          >
            Ver todos →
          </Link>
        </div>
        <div className="card-grid">
          {featuredHealth.map((service, idx) => (
            <ItemCard
              key={service.id}
              title={service.title}
              image={service.image}
              meta={service.modality}
              summary={service.scope}
              pills={service.pills}
              itemNumber={idx + 1}
              onOpen={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Equipamiento Preview */}
    </main>
  )
}
