import SafeImage from '../components/SafeImage'
import ImageCarousel from '../components/ImageCarousel'
import { aboutGalleries } from '../data/galleries'

export default function AboutPage() {
  const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
  const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'
  const materialGalleries = aboutGalleries.filter(gallery => gallery.id !== 'experiencias')
  const experienceGallery = aboutGalleries.find(gallery => gallery.id === 'experiencias')

  return (
    <main>
      <section id="who-we-are" className="hero">
        <div className="hero-content">
          <div className="logo-tile" aria-hidden="true" style={{ background: 'transparent' }}>
            <SafeImage
              src={logoNegroAmarillo}
              alt="117 Seguridad Industrial"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
            />
          </div>
          <div className="hero-copy">
            <h2>¿Quiénes Somos?</h2>
            <p>En 117 Seguridad Industrial preparamos a las empresas para responder con seguridad, control y eficacia ante cualquier emergencia. Nos especializamos en capacitación y asesoría en Salud, Seguridad Ocupacional y manejo de emergencias, alineados con los protocolos de los entes de primera respuesta.</p>
            <p>Transformamos la prevención en acción, fortaleciendo brigadas internas con entrenamiento técnico, práctico y actualizado. Nuestro compromiso es proteger vidas, reducir riesgos y garantizar operaciones seguras y confiables.</p>
            <p><strong>Porque cuando la emergencia ocurre, estar preparados marca la diferencia.</strong></p>
          </div>
        </div>
      </section>

      <section id="about" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Quiénes somos</p>
          <h2>Expertos en seguridad industrial con sello PYME MEIC.</h2>
          <p className="lede">Fortalecemos brigadas, estandarizamos protocolos y dotamos a su equipo del equipamiento correcto para responder ante emergencias.</p>
        </div>
        <div className="about-grid">
          <article className="info-card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '14px', alignItems: 'center' }}>
            <SafeImage
              src="https://res.cloudinary.com/dcwxslhjf/image/upload/v1766947215/PYME_t20kuv.png"
              alt="Sello PYME MEIC"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', background: 'var(--surface-strong)', padding: '10px' }}
            />
            <div style={{ display: 'grid', gap: '6px' }}>
              <h3 style={{ margin: 0 }}>Sello PYME MEIC</h3>
              <p>Somos Sello PYME otorgado por el MEIC, garantizando respaldo y cumplimiento para su organización.</p>
            </div>
          </article>
          <article className="info-card">
            <h3>Metodología práctica</h3>
            <p>Entrenamos con simulaciones, estaciones teórico–prácticas y escenarios reales adaptados a su operación.</p>
          </article>
          <article className="info-card">
            <h3>Acreditación internacional</h3>
            <p>Programas de Primeros Auxilios, RCP & DEA y brigadas alineados a estándares internacionales.</p>
          </article>
        </div>
      </section>

      <section id="material" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Material didáctico</p>
          <h2>Equipos y simuladores que usamos en los cursos.</h2>
          <p className="lede">Equipamiento profesional para entrenamiento práctico en Primeros Auxilios, RCP, DEA y brigadas de emergencia.</p>
        </div>

        {materialGalleries.map((gallery) => (
          <div
            key={gallery.id}
            style={{ marginBottom: '48px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            <h3 style={{ marginBottom: '12px' }}>{gallery.title}</h3>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>{gallery.description}</p>
            <ImageCarousel images={gallery.images} alt={gallery.title} />
          </div>
        ))}
      </section>

      <section id="experiences" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Experiencias</p>
          <h2>Momentos de capacitación y entrenamiento en acción.</h2>
          <p className="lede">Galería de fotos de nuestras sesiones de capacitación, simulacros y entrenamientos realizados con nuestros clientes.</p>
        </div>

        {experienceGallery && (
          <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <ImageCarousel images={experienceGallery.images} alt={experienceGallery.title} />
          </div>
        )}
      </section>
    </main>
  )
}
