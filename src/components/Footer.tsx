import { trackWhatsAppClick } from '../utils/analytics'

export default function Footer() {
  return (
    <>
      <div className="caution-divider" aria-hidden="true" />
      <footer className="footer">
        <span>117 Seguridad Industrial • Sello PYME MEIC</span>
        <span>
          info@117securityindustrial.com • 
          <a href="https://wa.me/50688053660" target="_blank" rel="noopener" onClick={() => trackWhatsAppClick()}>
            (506) 8805-3660
          </a>
          {' '}• 
          <a href="https://wa.me/50688749761" target="_blank" rel="noopener" onClick={() => trackWhatsAppClick()}>
            (506) 8874-9761
          </a>
        </span>
      </footer>
    </>
  )
}
