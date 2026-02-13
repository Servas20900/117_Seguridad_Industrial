import { useState } from 'react'
import { trackContactForm } from '../utils/analytics'
import Modal from './Modal'

const RATE_LIMIT_MINUTES = 15
const RATE_LIMIT_KEY = 'contact_form_rate_limit'

// Utilidades para rate limiting
function getRateLimitData() {
  const stored = localStorage.getItem(RATE_LIMIT_KEY)
  return stored ? JSON.parse(stored) : {}
}

function setRateLimitData(data: Record<string, number>) {
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data))
}

function isEmailRateLimited(email: string): boolean {
  const data = getRateLimitData()
  const lastSent = data[email]
  if (!lastSent) return false
  
  const timeDiff = Date.now() - lastSent
  const minutes = timeDiff / (1000 * 60)
  return minutes < RATE_LIMIT_MINUTES
}

function getTimeUntilCanSend(email: string): number {
  const data = getRateLimitData()
  const lastSent = data[email]
  if (!lastSent) return 0
  
  const timeDiff = Date.now() - lastSent
  const minutes = timeDiff / (1000 * 60)
  return Math.ceil(RATE_LIMIT_MINUTES - minutes)
}

function recordEmailSent(email: string) {
  const data = getRateLimitData()
  data[email] = Date.now()
  setRateLimitData(data)
}

export default function ContactForm() {
  const [status, setStatus] = useState<string>('Completa el formulario para contactarnos.')
  const [isLoading, setIsLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState({ title: '', message: '', type: 'info' as 'success' | 'error' | 'info' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    
    const form = e.currentTarget
    const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value || ''

    // Verificar rate limiting
    if (isEmailRateLimited(email)) {
      const minutosRestantes = getTimeUntilCanSend(email)
      setModalData({
        title: 'Espera un momento',
        message: `Ya enviaste un correo desde esta dirección. Por favor intenta nuevamente en ${minutosRestantes} minuto${minutosRestantes !== 1 ? 's' : ''}.`,
        type: 'info'
      })
      setModalOpen(true)
      setIsLoading(false)
      return
    }
    
    try {
      const formData = new FormData(form)
      
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS || '')
      formData.append('to_email', 'info@117securityindustrial.com')
      formData.append('from_name', (formData.get('name') as string) || 'Cliente')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Registrar el envío en rate limiting
        recordEmailSent(email)
        trackContactForm()
        
        setModalData({
          title: '¡Mensaje enviado!',
          message: 'Gracias por contactarte. Recibiremos tu mensaje y nos pondremos en contacto pronto.',
          type: 'success'
        })
        setModalOpen(true)
        form.reset()
        setStatus('Completa el formulario para contactarnos.')
      } else {
        setModalData({
          title: 'Error al enviar',
          message: 'Hubo un problema enviando tu mensaje. Por favor intenta de nuevo.',
          type: 'error'
        })
        setModalOpen(true)
        setStatus('Error al enviar. Por favor intenta de nuevo.')
      }
    } catch (error) {
      setModalData({
        title: 'Error de conexión',
        message: 'No pudimos conectar con el servidor. Por favor intenta de nuevo.',
        type: 'error'
      })
      setModalOpen(true)
      setStatus('Error de conexión. Por favor intenta de nuevo.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="contact-card">
        <h3>Formulario breve</h3>
        <form onSubmit={onSubmit} noValidate>
          <label>Nombre
            <input type="text" name="name" placeholder="Nombre completo" required />
          </label>
          <label>Correo
            <input type="email" name="email" placeholder="correo@empresa.com" required />
          </label>
          <label>Teléfono <span style={{ color: 'var(--text-subtle)', fontWeight: 'normal' }}>(opcional)</span>
            <input type="tel" name="phone"  />
          </label>
          <label>Mensaje
            <textarea name="message" rows={3} placeholder="Curso o equipamiento de interés" required />
          </label>
          <button className="btn primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
          <p className="form-hint">{status}</p>
        </form>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        message={modalData.message}
        type={modalData.type as 'success' | 'error' | 'info'}
      />
    </>
  )
}
