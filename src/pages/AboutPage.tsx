import SafeImage from '../components/SafeImage'
import ImageCarousel from '../components/ImageCarousel'
import { Link } from 'react-router-dom'
import { materialDidacticoItems } from '../data/materialDidactico'
import galleryItems from '../data/galleryItems'

export default function AboutPage({ theme }: { theme: 'light' | 'dark' }) {
  const logoForDarkBackground = 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773107413/Logoamarillo_nboosr.png'
  const logoForLightBackground = 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773107413/Logoletrasblancas_ciawmi.png'
  const previewGalleryItems = galleryItems.slice(0, 3)

  return (
    <main>
      <section id="who-we-are" className="hero hero--home">
        <div className="hero-banner-frame" role="img" aria-label="Logo 117 Seguridad Industrial en formato hero">
          <SafeImage
            src={theme === 'dark' ? logoForDarkBackground : logoForLightBackground}
            alt="117 Seguridad Industrial"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="hero-content hero-content--home">
          <div className="hero-copy">
            <p className="eyebrow">Quiénes somos</p>
            <h1 className="hero-title">Entrenamos equipos para actuar con seguridad cuando cada segundo cuenta.</h1>
            <p className="lede hero-lede">En 117 Seguridad Industrial preparamos a las empresas para responder con control y eficacia ante cualquier emergencia. Nos especializamos en capacitación y asesoría en Salud, Seguridad Ocupacional y manejo de emergencias, alineados con protocolos de los entes de primera respuesta.</p>
            <p className="lede hero-lede">Transformamos la prevención en acción, fortaleciendo brigadas internas con entrenamiento técnico, práctico y actualizado para proteger vidas, reducir riesgos y garantizar operaciones seguras y confiables.</p>
            <p className="lede hero-lede"><strong>Porque cuando la emergencia ocurre, estar preparados marca la diferencia.</strong></p>
          </div>
        </div>
      </section>

      <section id="about" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Quiénes somos</p>
          <h2>Respaldo institucional, entrenamiento real</h2>
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
              <p>Somos una empresa PYME reconocida por el MEIC, especializada en metodologías prácticas orientadas a la acción. </p>
            </div>
          </article>
          <article className="info-card">
            <h3>Metodología práctica</h3>
            <p>Aprender haciendo. Nuestra metodología práctica permite que cada participante experimente, ejecute y responda como si estuviera ante una emergencia real.</p>
          </article>

          <article className="info-card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '14px', alignItems: 'center' }}>
            <SafeImage
              src="https://res.cloudinary.com/deqpuhfzt/image/upload/v1772603348/aces_zwtmel.jpg"
              alt="Sello PYME MEIC"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', background: 'var(--surface-strong)', padding: '10px' }}
            />
            <div style={{ display: 'grid', gap: '6px' }}>
              <h3 style={{ margin: 0 }}>Acreditación internacional</h3>
              <p>Certificación internacional respaldada por ACES Internacional, estándares reconocidos en América Latina. </p>
            </div>
          </article>
        </div>
      </section>

      <section id="material" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Material didáctico</p>
          <h2>Equipos y simuladores que usamos en los cursos.</h2>
          <p className="lede">Equipamiento profesional para entrenamiento práctico en Primeros Auxilios, RCP, DEA y brigadas de emergencia.</p>
        </div>

        {materialDidacticoItems.map((gallery) => (
          <div
            key={gallery.id}
            style={{ marginBottom: '48px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            <h3 style={{ marginBottom: '12px' }}>{gallery.title}</h3>
            <p style={{ marginBottom: '24px', color: 'var(--text-subtle)' }}>{gallery.description}</p>
            <ImageCarousel images={gallery.images} alt={gallery.title} />
          </div>
        ))}
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
