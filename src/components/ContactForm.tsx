import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<string>('Completa el formulario para contactarnos.')
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    
    const form = e.currentTarget
    
    try {
      const formData = new FormData(form)
      
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '')
      formData.append('to_email', 'info@117securityindustrial.com')
      formData.append('from_name', (formData.get('name') as string) || 'Cliente')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('✓ Mensaje enviado. Te contactaremos en breve.')
        form.reset()
      } else {
        setStatus('Error al enviar. Por favor intenta de nuevo.')
      }
    } catch (error) {
      setStatus('Error de conexión. Por favor intenta de nuevo.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
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
  )
}
