import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="logo-tile" aria-hidden="true">117</div>
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
