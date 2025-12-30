import { Link } from 'react-router-dom'
import { useState } from 'react'
import SafeImage from '../components/SafeImage'

export default function HomePage({ theme }: { theme: 'light' | 'dark' }) {
  const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
  const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'
  const [showServices, setShowServices] = useState(false)
  return (
    <main>
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
            <br/>
              <div className="cta-row" style={{ flexWrap: 'wrap' }}>
                <button className="btn primary" type="button" onClick={() => setShowServices(s => !s)}>Ver servicios</button>
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
                  aria-label="Descargar perfil de la empresa"
                >
                  <i className="fas fa-download"></i>
                  <span>Perfil de Empresa</span>
                </a>
              </div>
              {showServices && (
                <div className="contact-inline services-inline" style={{ marginTop: '8px' }}>
                  <Link className="btn ghost" to="/courses">Cursos</Link>
                  <Link className="btn ghost" to="/health">Salud ocupacional</Link>
                  <Link className="btn ghost" to="/equipment">Equipamiento</Link>
                </div>
              )}
              {/* Experiencias removido */}
          </div>
        </div>
      </section>
    </main>
  )
}
