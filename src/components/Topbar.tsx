import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SafeImage from './SafeImage'
import useLocalizedPath from '../hooks/useLocalizedPath'
import { SUPPORTED_LOCALES, swapLocaleInPath } from '../config/routes'
import { navPill } from '../styles/classNames'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-sm px-3 py-2.5 no-underline transition-colors duration-200 ${
    isActive ? 'bg-accent font-bold text-[#0b0c10]' : 'text-text-subtle hover:bg-surface-strong hover:text-text'
  }`

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-4 py-3.5 text-center font-semibold no-underline transition-colors duration-200 ${
    isActive ? 'bg-accent text-[#0b0c10]' : 'bg-surface-strong text-text hover:bg-accent hover:text-[#0b0c10]'
  }`

export default function Topbar() {
  const { t } = useTranslation()
  const { path, locale: currentLocale } = useLocalizedPath()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navbarLogo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'

  const closeMenu = () => setMenuOpen(false)
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const setNavHeight = () => {
      document.documentElement.style.setProperty('--nav-height', `${header.offsetHeight}px`)
    }

    setNavHeight()
    const observer = new ResizeObserver(setNavHeight)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  const LanguageSwitcher = ({ className }: { className?: string }) => (
    <div
      className={`flex items-center overflow-hidden rounded-sm border border-border ${className ?? ''}`}
      role="group"
      aria-label={t('language.switchTo')}
    >
      {SUPPORTED_LOCALES.map((locale) => (
        <Link
          key={locale}
          to={swapLocaleInPath(location.pathname, locale)}
          className={`px-2.5 py-1.5 text-xs font-bold transition-colors duration-200 ${
            locale === currentLocale ? 'bg-accent text-[#0b0c10]' : 'bg-surface text-text-subtle hover:text-text'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-100 grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-black/6 bg-white/72 px-7 py-3.5 backdrop-blur-[20px] backdrop-saturate-150 max-[900px]:px-5 max-[900px]:py-3"
      >
        <button
          type="button"
          className="hidden cursor-pointer border-none bg-transparent p-2 text-2xl text-text max-[900px]:block"
          aria-label={t('nav.openMenu')}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
        <div className="grid grid-cols-[auto_1fr] items-center gap-3 max-[620px]:gap-2">
          <Link
            to={path('/')}
            className="grid h-[46px] w-[46px] place-items-center overflow-hidden rounded-full max-[620px]:h-10 max-[620px]:w-10"
            aria-label={t('nav.home')}
            onClick={scrollToTop}
          >
            <SafeImage
              src={navbarLogo}
              alt="117 Seguridad Industrial"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
            />
          </Link>
          <Link to={path('/')} className="inline-flex items-center no-underline" aria-label={t('nav.home')} onClick={scrollToTop}>
            <span className="font-bold max-[620px]:text-[0.85rem]">Seguridad Industrial</span>
          </Link>
        </div>
        <nav className="flex justify-center gap-3.5 max-[900px]:hidden">
          <NavLink to={path('/')} end onClick={scrollToTop} className={navLinkClass}>{t('nav.home')}</NavLink>
          <NavLink to={path('/about')} className={navLinkClass}>{t('nav.about')}</NavLink>
          <NavLink to={path('/courses')} className={navLinkClass}>{t('nav.courses')}</NavLink>
          <NavLink to={path('/health')} className={navLinkClass}>{t('nav.health')}</NavLink>
          <NavLink to={path('/equipment')} className={navLinkClass}>{t('nav.equipment')}</NavLink>
          <NavLink to={path('/gallery')} className={navLinkClass}>{t('nav.gallery')}</NavLink>
        </nav>
        <div className="flex items-center gap-2.5 max-[900px]:gap-2">
          <LanguageSwitcher />
          <Link className={`${navPill} max-[900px]:hidden`} to={path('/contact')}>{t('nav.contact')}</Link>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-140 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />
      <nav
        className={`fixed top-0 z-150 flex h-screen w-[280px] flex-col gap-3 overflow-y-auto border-r border-border bg-surface px-5 pt-20 pb-5 shadow-strong transition-[left] duration-300 ${
          menuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <button
          type="button"
          className="absolute top-3.5 right-3.5 z-10 rounded-sm border border-border bg-surface p-2 text-text transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent"
          aria-label={t('nav.closeMenu')}
          onClick={closeMenu}
        >
          ✕
        </button>
        <NavLink
          to={path('/')}
          end
          onClick={() => {
            closeMenu()
            scrollToTop()
          }}
          className={mobileNavLinkClass}
        >
          {t('nav.home')}
        </NavLink>
        <NavLink to={path('/about')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.about')}</NavLink>
        <NavLink to={path('/courses')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.courses')}</NavLink>
        <NavLink to={path('/health')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.health')}</NavLink>
        <NavLink to={path('/equipment')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.equipment')}</NavLink>
        <NavLink to={path('/gallery')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.gallery')}</NavLink>
        <NavLink to={path('/contact')} onClick={closeMenu} className={mobileNavLinkClass}>{t('nav.contactMobile')}</NavLink>
        <LanguageSwitcher className="mt-2 justify-center" />
      </nav>
    </>
  )
}
