import { Link } from 'react-router-dom'

export default function ServiceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`modal ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="icon-btn close" aria-label="Cerrar" onClick={onClose}>✕</button>
        <p className="eyebrow" id="service-modal-title">Servicios</p>
        <h3>¿Qué necesitas reforzar?</h3>
        <p className="lede">Selecciona el frente que deseas explorar para ver cursos, programas y equipamiento disponible.</p>
        <div className="card-grid" style={{ marginTop: '8px' }}>
          <Link className="card" to="/courses" onClick={onClose}>
            <span className="badge">Capacitación</span>
            <h4>Cursos</h4>
            <p className="meta">Primeros auxilios, RCP & DEA, brigadas, HAZMAT.</p>
          </Link>
          <Link className="card" to="/health" onClick={onClose}>
            <span className="badge">Prevención</span>
            <h4>Salud ocupacional</h4>
            <p className="meta">Protocolos, evaluaciones y programas de bienestar.</p>
          </Link>
          <Link className="card" to="/equipment" onClick={onClose}>
            <span className="badge">Equipamiento</span>
            <h4>Equipamiento</h4>
            <p className="meta">Extintores, kits, DEA y soluciones para brigadas.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
