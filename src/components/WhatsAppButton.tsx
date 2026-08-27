import { useTranslation } from 'react-i18next'

export default function WhatsAppButton() {
  const { t } = useTranslation('common')

  return (
    <a
      href="https://wa.me/50688749761"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.ariaLabel')}
      title={t('whatsapp.title')}
      className="fixed bottom-6 right-6 z-[999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)]"
    >
      <i className="fab fa-whatsapp text-2xl" aria-hidden="true"></i>
    </a>
  )
}
