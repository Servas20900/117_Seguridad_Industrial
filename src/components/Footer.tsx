import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { trackWhatsAppClick, trackDownloadCatalog } from '../utils/analytics'
import useLocalizedPath from '../hooks/useLocalizedPath'
import HazardDivider from './HazardDivider'

const footerLinkClass = 'text-sm text-text-subtle no-underline transition-colors duration-200 hover:text-accent hover:underline'
const contactLinkClass = 'text-accent no-underline transition-colors duration-200 hover:text-accent-strong hover:underline'

export default function Footer() {
  const { t } = useTranslation()
  const { path } = useLocalizedPath()
  const currentYear = new Date().getFullYear()

  return (
    <>
      <HazardDivider />
      <footer className="border-t border-border bg-bg/90 px-6 pt-12 pb-8">
        <div className="mx-auto mb-8 grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
          {/* Brand & About */}
          <div className="grid gap-3">
            <h3 className="m-0 border-b-2 border-accent pb-2 text-lg font-bold text-text">117 Seguridad Industrial</h3>
            <p className="m-0 text-sm leading-relaxed text-text-subtle">
              {t('footer.brandDescription')}
            </p>
            <p className="mt-2 text-[0.85rem] text-text-subtle">
              {t('footer.credentials')}
            </p>
          </div>

          {/* Servicios */}
          <div className="grid gap-3">
            <h4 className="m-0 text-sm font-bold tracking-wide text-text uppercase">{t('footer.servicesTitle')}</h4>
            <nav className="grid gap-2">
              <Link className={footerLinkClass} to={path('/about')}>{t('footer.aboutLink')}</Link>
              <Link className={footerLinkClass} to={path('/courses')}>{t('footer.trainingLink')}</Link>
              <Link className={footerLinkClass} to={path('/equipment')}>{t('footer.equipmentLink')}</Link>
              <Link className={footerLinkClass} to={path('/health')}>{t('footer.healthLink')}</Link>
              <Link className={footerLinkClass} to={path('/gallery')}>{t('footer.galleryLink')}</Link>
            </nav>
          </div>

          {/* Recursos */}
          <div className="grid gap-3">
            <h4 className="m-0 text-sm font-bold tracking-wide text-text uppercase">{t('footer.resourcesTitle')}</h4>
            <nav className="grid gap-2">
              <a className={footerLinkClass} href="/perfil-empresa.pdf" download="perfil-empresa.pdf" onClick={() => trackDownloadCatalog()}>{t('footer.companyProfile')}</a>
              <a className={footerLinkClass} href="/catalogo-cursos.pdf" download="catalogo-cursos.pdf" onClick={() => trackDownloadCatalog()}>{t('footer.coursesCatalog')}</a>
              <a className={footerLinkClass} href="/publicidad-botiquin.pdf" download="publicidad-botiquin.pdf" onClick={() => trackDownloadCatalog()}>{t('footer.firstAidKitCatalog')}</a>
            </nav>
          </div>

          {/* Contacto */}
          <div className="grid gap-3">
            <h4 className="m-0 text-sm font-bold tracking-wide text-text uppercase">{t('footer.contactTitle')}</h4>
            <div className="text-sm">
              <p className="m-0 mb-2 text-text-subtle">
                <a href="mailto:info@117securityindustrial.com" className={contactLinkClass}>
                  info@117securityindustrial.com
                </a>
              </p>
              <p className="m-0 mb-2 text-text-subtle">
                <a
                  href="https://wa.me/50688053660"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick()}
                  className={contactLinkClass}
                >
                  (506) 8805-3660
                </a>
              </p>
              <p className="m-0 text-text-subtle">
                <a
                  href="https://wa.me/50688749761"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick()}
                  className={contactLinkClass}
                >
                  (506) 8874-9761
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-border"></div>

        {/* Bottom */}
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-[0.85rem] text-text-subtle">
          <p className="m-0">
            © {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </>
  )
}
