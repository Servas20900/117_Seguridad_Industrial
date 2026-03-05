import { Link, useNavigate } from 'react-router-dom'
import SafeImage from '../components/SafeImage'
import { courses } from '../data/courses'
import { equipmentItems } from '../data/equipment'
import { healthServices } from '../data/healthServices'
import CourseCard from '../components/CourseCard'
import ItemCard from '../components/ItemCard'
import { aboutGalleries } from '../data/galleries'
import galleryItems from '../data/galleryItems'

export default function HomePage({ theme }: { theme: 'light' | 'dark' }) {
  const navigate = useNavigate()
  const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
  const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'
  const companyProfilePdf = '/perfil-empresa.pdf'

  // Get 3 first items from each category
  const featuredCourses = courses.slice(0, 3)
  const featuredEquipment = equipmentItems.slice(0, 3)
  const featuredHealth = healthServices.slice(0, 3)

  // galleryItems
  const materialGalleries = aboutGalleries.filter(gallery => gallery.id !== 'experiencias')
  const previewGalleryItems = galleryItems.slice(0, 3)

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
            <p className="eyebrow"> Capacitación certificada • Simulacros • Respuesta coordinada</p>
            <h1>Entrenamiento real para emergencias reales.</h1>
            <p className="lede">Preparamos brigadas y organizaciones para responder de forma segura y eficiente ante emergencias, con capacitación práctica en primeros auxilios, control de incendios, materiales peligrosos y administración de emergencias.</p>
            <br />
            <div className="cta-row" style={{ flexWrap: 'wrap' }}>
              <a
                href={companyProfilePdf}
                download="perfil-empresa.pdf"
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
                title="Descargar perfil de empresa"
                aria-label="Descargar perfil de empresa"
              >
                <i className="fas fa-download" aria-hidden="true"></i>
                <span>Perfil de Empresa</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="home-section">
          <div className="home-section-head">
            <div>
              <p className="eyebrow">Cursos</p>
              <h2>Programas destacados</h2>
              <p className="lede">Una muestra de nuestros cursos más solicitados para respuesta ante emergencias.</p>
            </div>
            <Link className="pill home-view-all" to="/courses">Ver todos</Link>
          </div>
          <div className="card-grid" aria-live="polite">
            {featuredCourses.map((course, idx) => (
              <div key={course.id} style={{ width: '100%', cursor: 'pointer' }}>
                <CourseCard
                  course={course}
                  programNumber={idx + 1}
                  onOpen={() => navigate(`/courses/${course.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="home-section">
          <div className="home-section-head">
            <div>
              <p className="eyebrow">Salud ocupacional</p>
              <h2>Servicios destacados</h2>
              <p className="lede">Soluciones de cumplimiento y bienestar ocupacional para su organización.</p>
            </div>
            <Link className="pill home-view-all" to="/health">Ver todos</Link>
          </div>
          <div className="card-grid" aria-live="polite">
            {featuredHealth.map((service, idx) => (
              <div key={service.id} style={{ width: '100%', cursor: 'pointer' }}>
                <ItemCard
                  title={service.title}
                  image={service.image}
                  meta={service.modality}
                  summary={service.scope}
                  pills={service.pills}
                  itemNumber={idx + 1}
                  onOpen={() => navigate(`/health/${service.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="home-section">
          <div className="home-section-head">
            <div>
              <p className="eyebrow">Equipamiento</p>
              <h2>Botiquines e insumos destacados</h2>
              <p className="lede">Elementos esenciales para fortalecer su capacidad de respuesta.</p>
            </div>
            <Link className="pill home-view-all" to="/equipment">Ver todos</Link>
          </div>
          <div className="card-grid" aria-live="polite">
            {featuredEquipment.map((item, idx) => (
              <div key={item.id} style={{ width: '100%', cursor: 'pointer' }}>
                <ItemCard
                  title={item.title}
                  image={item.cardImage}
                  summary={item.description}
                  pills={item.pills}
                  itemNumber={idx + 1}
                  onOpen={() => navigate(`/equipment/${item.id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery-preview" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Galería</p>
          <h2>Evidencia de entrenamientos y acompañamiento en campo.</h2>
          <p className="lede">Mostramos una vista previa de actividades reales para que conozca cómo trabajamos con cada empresa.</p>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 12px' }}>
          <div className="card-grid" aria-live="polite">
            {previewGalleryItems.map((item) => (
              <article key={item.id} className="info-card" style={{ width: '100%' }}>
                <SafeImage
                  src={item.image}
                  alt={item.description}
                  style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                />
              </article>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link
              to="/gallery"
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
            >
              <span>Ver más</span>
            </Link>
          </div>
        </div>
      </section> 

    </main>
  )
}
