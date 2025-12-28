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
              <div className="cta-row" style={{ flexWrap: 'wrap' }}>
                <button className="btn primary" type="button" onClick={() => setShowServices(s => !s)}>Ver servicios</button>
              </div>
              {showServices && (
                <div className="contact-inline services-inline" style={{ marginTop: '8px' }}>
                  <Link className="btn ghost" to="/courses">Cursos</Link>
                  <Link className="btn ghost" to="/health">Salud ocupacional</Link>
                  <Link className="btn ghost" to="/equipment">Equipamiento</Link>
                </div>
              )}
              <div className="cta-row" style={{ marginTop: '8px' }}>
                <Link className="btn ghost" to="/logos">Experiencias</Link>
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}
