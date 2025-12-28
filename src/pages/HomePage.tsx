import { Link } from 'react-router-dom'
import logoNegroBlanco from '../assets/logo-negro-blanco.jpg'
import logoNegroAmarillo from '../assets/logo-negro-amarillo.jpg'

export default function HomePage({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="logo-tile" aria-hidden="true" style={{ background: 'transparent' }}>
            <img
              src={theme === 'dark' ? logoNegroAmarillo : logoNegroBlanco}
              alt="117 Seguridad Industrial"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
            />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Acreditación internacional • Respuesta efectiva</p>
            <h1>Centralizamos la seguridad, la capacitación y el equipamiento en un solo lugar.</h1>
            <p className="lede">Programas de Primeros Auxilios, RCP y DEA, brigadas, HAZMAT y equipamiento listo para ser implementado en su operación.</p>
            <div className="cta-row">
              <Link className="btn primary" to="/contact">Solicitar agenda</Link>
              <Link className="btn ghost" to="/courses">Ver cursos</Link>
            </div>
            <div className="quick-grid">
              <Link className="quick-card" to="/courses">Cursos</Link>
              <Link className="quick-card" to="/health">Salud ocupacional</Link>
              <Link className="quick-card" to="/equipment">Equipamiento</Link>
              <Link className="quick-card" to="/logos">Nuestros logos</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
