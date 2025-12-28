import SafeImage from '../components/SafeImage'

export default function AboutPage() {
  return (
    <main>
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
          <p className="lede">Aquí puedes cargar imágenes de muñecos de RCP, DEA de entrenamiento, maniquíes y kits prácticos usados en las sesiones.</p>
        </div>
        <div className="card-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <article className="card placeholder">
            <div>Maniquíes de RCP</div>
            <p className="meta">Sube fotos de los maniquíes y estaciones de RCP.</p>
          </article>
          <article className="card placeholder">
            <div>DEA de entrenamiento</div>
            <p className="meta">Incluye imágenes de los equipos de práctica y electrodos.</p>
          </article>
          <article className="card placeholder">
            <div>Kits y suministros</div>
            <p className="meta">Botiquines, vendajes, inmovilizadores y material de trauma.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
