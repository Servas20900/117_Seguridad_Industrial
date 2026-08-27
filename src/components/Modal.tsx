import { AnimatePresence, motion } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type?: 'success' | 'error' | 'info'
}

const iconByType = { success: '✓', error: '✕', info: 'ℹ' }
const iconWrapClassByType = {
  success: 'bg-accent/10 text-accent-strong',
  error: 'bg-red-600/10 text-red-600',
  info: 'bg-text-subtle/10 text-text-subtle'
}

export default function Modal({ isOpen, onClose, title, message, type = 'info' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-1000 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-1001 grid w-full max-w-[720px] gap-3 rounded-lg border border-border bg-surface p-8 shadow-strong"
            style={{ maxHeight: '90vh', overflow: 'auto' }}
            initial={{ opacity: 0, x: '-50%', y: '-45%' }}
            animate={{ opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, x: '-50%', y: '-45%' }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`grid h-[60px] w-[60px] place-items-center rounded-full text-[28px] font-bold ${iconWrapClassByType[type]}`}>
              {iconByType[type]}
            </div>

            <h2 className="m-0 font-display text-2xl text-text">{title}</h2>

            <p className="m-0 text-base leading-relaxed text-text-subtle">{message}</p>

            <button
              onClick={onClose}
              className="w-fit cursor-pointer rounded-md border-none bg-accent px-6 py-3 text-base font-bold text-[#0b0c10] shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-strong"
            >
              Entendido
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
