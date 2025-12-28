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
          <article className="info-card">
            <h3>Sello PYME MEIC</h3>
            <p>Somos Sello PYME otorgado por el MEIC, garantizando respaldo y cumplimiento para su organización.</p>
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
    </main>
  )
}
