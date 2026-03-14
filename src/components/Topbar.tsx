import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import SafeImage from './SafeImage'

export default function Topbar({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
  const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'
  const navbarLogo = theme === 'dark' ? logoNegroAmarillo : logoNegroBlanco

  const closeMenu = () => setMenuOpen(false)
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

  return (
    <>
      <header className="topbar">
        <button
          type="button"
          className="hamburger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        <div className="brand">
          <Link to="/" className="brand-mark" aria-label="Ir al inicio" onClick={scrollToTop}>
            <SafeImage
              src={navbarLogo}
              alt="117 Seguridad Industrial"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
            />
          </Link>
          <Link to="/" className="brand-text" aria-label="Ir al inicio" onClick={scrollToTop}>
            <span className="brand-name">Seguridad Industrial</span>
          </Link>
        </div>
        <nav className="nav">
          <NavLink to="/" end onClick={scrollToTop}>Home</NavLink>
          <NavLink to="/about">Quiénes Somos</NavLink>
          <NavLink to="/courses">Cursos</NavLink>
          <NavLink to="/health">Salud Ocupacional</NavLink>
          <NavLink to="/equipment">Equipamiento</NavLink>
        </nav>
        <div className="actions">
          <button type="button" className="icon-btn" aria-label="Cambiar tema" onClick={onToggle}>
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <Link className="pill" to="/contact">Contactar</Link>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button type="button" className="icon-btn close" aria-label="Cerrar menú" onClick={closeMenu}>✕</button>
        <NavLink
          to="/"
          end
          onClick={() => {
            closeMenu()
            scrollToTop()
          }}
        >
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>Quiénes somos</NavLink>
        <NavLink to="/courses" onClick={closeMenu}>Cursos</NavLink>
        <NavLink to="/health" onClick={closeMenu}>Salud ocupacional</NavLink>
        <NavLink to="/equipment" onClick={closeMenu}>Equipamiento</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contacto</NavLink>
        <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
          <button type="button" className="btn ghost" style={{ flex: 1 }} onClick={onToggle}>
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
            <span style={{ marginLeft: '8px' }}>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
          </button>
        </div>
      </nav>
    </>
  )
}
