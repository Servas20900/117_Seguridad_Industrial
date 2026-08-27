import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { trackContactForm } from '../utils/analytics'
import Modal from './Modal'
import { contactCard, formLabel, formInput, formHint, btnPrimary } from '../styles/classNames'

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
  const { t } = useTranslation('contact')
  const [status, setStatus] = useState<string>(t('form.defaultHint'))
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
        title: t('form.rateLimitTitle'),
        message: t('form.rateLimitMessage', { minutes: minutosRestantes, plural: minutosRestantes !== 1 ? 's' : '' }),
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
          title: t('form.successTitle'),
          message: t('form.successMessage'),
          type: 'success'
        })
        setModalOpen(true)
        form.reset()
        setStatus(t('form.defaultHint'))
      } else {
        setModalData({
          title: t('form.errorTitle'),
          message: t('form.errorMessage'),
          type: 'error'
        })
        setModalOpen(true)
        setStatus(t('form.errorHint'))
      }
    } catch (error) {
      setModalData({
        title: t('form.connectionErrorTitle'),
        message: t('form.connectionErrorMessage'),
        type: 'error'
      })
      setModalOpen(true)
      setStatus(t('form.connectionErrorHint'))
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={contactCard}>
        <h3 className="m-0">{t('form.title')}</h3>
        <form onSubmit={onSubmit} noValidate className="grid gap-2.5">
          <label className={formLabel}>{t('form.name')}
            <input className={formInput} type="text" name="name" placeholder={t('form.namePlaceholder')} required />
          </label>
          <label className={formLabel}>{t('form.email')}
            <input className={formInput} type="email" name="email" placeholder={t('form.emailPlaceholder')} required />
          </label>
          <label className={formLabel}>{t('form.phone')} <span className="font-normal text-text-subtle">{t('form.phoneOptional')}</span>
            <input className={formInput} type="tel" name="phone" />
          </label>
          <label className={formLabel}>{t('form.message')}
            <textarea className={formInput} name="message" rows={3} placeholder={t('form.messagePlaceholder')} required />
          </label>
          <button className={btnPrimary} type="submit" disabled={isLoading}>
            {isLoading ? t('form.sending') : t('form.send')}
          </button>
          <p className={formHint}>{status}</p>
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
