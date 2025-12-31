import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Topbar({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <Link to="/" className="brand-mark" aria-hidden="true">117</Link>
          <div className="brand-text">
            <span className="brand-name">Seguridad Industrial</span>
            <span className="brand-tag"> Capacitación • Salud • Equipamiento</span>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">Quiénes somos</NavLink>
          <NavLink to="/courses">Cursos</NavLink>
          <NavLink to="/health">Salud ocupacional</NavLink>
          <NavLink to="/equipment">Equipamiento</NavLink>
        </nav>
        <div className="actions">
          <button type="button" className="icon-btn" aria-label="Cambiar tema" onClick={onToggle}>
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
          <Link className="pill" to="/contact">Agendar</Link>
          <button
            type="button"
            className="hamburger"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button type="button" className="icon-btn close" aria-label="Cerrar menú" onClick={closeMenu}>✕</button>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
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
