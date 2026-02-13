interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type?: 'success' | 'error' | 'info'
}

export default function Modal({ isOpen, onClose, title, message, type = 'info' }: ModalProps) {
  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓'
      case 'error':
        return '✕'
      default:
        return 'ℹ'
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case 'success':
        return 'var(--accent)'
      case 'error':
        return '#dc2626'
      default:
        return 'var(--text-subtle)'
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 200ms ease-out'
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          maxWidth: '90%',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: 'var(--shadow-strong)',
          zIndex: 1001,
          border: `1px solid var(--border)`,
          animation: 'slideUp 300ms cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: type === 'success' ? 'rgba(244, 197, 66, 0.1)' : type === 'error' ? 'rgba(220, 38, 38, 0.1)' : 'rgba(107, 114, 128, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: getTypeColor(),
            marginBottom: '16px',
            fontWeight: 'bold'
          }}
        >
          {getIcon()}
        </div>

        {/* Title */}
        <h2
          style={{
            margin: '0 0 12px 0',
            fontSize: '1.5rem',
            color: 'var(--text)',
            fontFamily: 'var(--font-display)'
          }}
        >
          {title}
        </h2>

        {/* Message */}
        <p
          style={{
            margin: '0 0 24px 0',
            color: 'var(--text-subtle)',
            lineHeight: '1.6',
            fontSize: '1rem'
          }}
        >
          {message}
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--accent)',
            color: '#0b0c10',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'transform var(--transition), box-shadow var(--transition)',
            boxShadow: 'var(--shadow-soft)',
            fontSize: '1rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = 'var(--shadow-strong)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
          }}
        >
          Entendido
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </>
  )
}
