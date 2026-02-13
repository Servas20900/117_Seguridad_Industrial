import { Link } from 'react-router-dom'
import { trackWhatsAppClick } from '../utils/analytics'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="caution-divider" aria-hidden="true" />
      <footer className="app-footer">
        <div className="footer-container">
          {/* Brand & About */}
          <div className="footer-section">
            <h3 className="footer-title">117 Seguridad Industrial</h3>
            <p className="footer-description">
              Especialistas en capacitación, asesoría y equipamiento para seguridad ocupacional y atención de emergencias.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '8px' }}>
              Sello PYME MEIC • Acreditación Internacional
            </p>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Servicios</h4>
            <nav className="footer-links">
              <Link to="/courses">Capacitación</Link>
              <Link to="/equipment">Equipamiento</Link>
              <Link to="/health">Salud Ocupacional</Link>
            </nav>
          </div>

          {/* Recursos */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Recursos</h4>
            <nav className="footer-links">
              <a href="/perfil-empresa.pdf" download="perfil-empresa.pdf">Perfil Empresa</a>
              <a href="/catalogo-cursos.pdf" download="catalogo-cursos.pdf">Catálogo Cursos</a>
              <a href="/publicidad-botiquin.pdf" download="publicidad-botiquin.pdf">Catálogo Botiquines</a>
            </nav>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="footer-contact">
              <p style={{ margin: '0 0 8px' }}>
                <a href="mailto:info@117securityindustrial.com" className="footer-link">
                  info@117securityindustrial.com
                </a>
              </p>
              <p style={{ margin: '0 0 8px' }}>
                <a 
                  href="https://wa.me/50688053660" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick()}
                  className="footer-link"
                >
                  (506) 8805-3660
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a 
                  href="https://wa.me/50688749761" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick()}
                  className="footer-link"
                >
                  (506) 8874-9761
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} 117 Seguridad Industrial. Todos los derechos reservados.
          </p>
          <nav className="footer-bottom-links">
            <a href="#privacy">Política de Privacidad</a>
            <span>•</span>
            <a href="#terms">Términos de Servicio</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
