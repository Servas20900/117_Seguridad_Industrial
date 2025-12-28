import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      <section id="contact" className="panel contact">
        <div className="panel-head">
          <p className="eyebrow">Contacto</p>
          <h2>Conversemos y agendemos su capacitación.</h2>
          <p className="lede">info@117securityindustrial.com • (506) 8805-3660 • (506) 8874-9761</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Canales directos</h3>
            <ul className="contact-list">
              <li><a href="mailto:info@117securityindustrial.com">info@117securityindustrial.com</a></li>
              <li><a href="tel:+50688053660">(506) 8805-3660</a> • <a href="https://wa.me/50688053660" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="tel:+50688749761">(506) 8874-9761</a> • <a href="https://wa.me/50688749761" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
            <p className="note">Atendemos en español. Incluya fecha tentativa, sede y cantidad de personas.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
