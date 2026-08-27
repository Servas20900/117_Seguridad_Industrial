import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { eyebrow, lede, panel, panelHead, panelHeadTitle, contactGrid, contactCard, contactList, noteText } from '../styles/classNames'

export default function ContactPage() {
  const { t } = useTranslation('contact')
  useDocumentTitle(t('eyebrow'))

  return (
    <main>
      <section id="contact" className={`${panel} pb-12`}>
        <div className={panelHead}>
          <p className={eyebrow}>{t('eyebrow')}</p>
          <h2 className={panelHeadTitle}>{t('title')}</h2>
          <p className={lede}>{t('lede')}</p>
        </div>
        <div className={contactGrid}>
          <div className={contactCard}>
            <h3 className="m-0">{t('directChannels')}</h3>
            <ul className={contactList}>
              <li><a href="mailto:info@117securityindustrial.com">info@117securityindustrial.com</a></li>
              <li><a href="tel:+50672395067">(506) 7239-5067</a> • <a href="https://wa.me/50672395067" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="tel:+50688749761">(506) 8874-9761</a> • <a href="https://wa.me/50688749761" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
            <p className={noteText}>{t('note')}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
