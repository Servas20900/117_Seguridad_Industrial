import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<string>('Este formulario es demostrativo. También puede escribirnos por correo o WhatsApp.')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.currentTarget.reset()
    setStatus('Recibido. Te contactaremos en breve.')
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
        <label>Mensaje
          <textarea name="message" rows={3} placeholder="Curso o equipamiento de interés" required />
        </label>
        <button className="btn primary" type="submit">Enviar</button>
        <p className="form-hint">{status}</p>
      </form>
    </div>
  )
}
