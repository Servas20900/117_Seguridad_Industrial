import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { trackPageView } from './utils/analytics'
import '@fortawesome/fontawesome-free/css/all.min.css'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title)
  }, [location.pathname])

  return (
    <>
      <Topbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <AppRoutes theme={theme} />

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/50688749761"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
          zIndex: 999,
          color: 'white',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
        aria-label="Contactar por WhatsApp"
        title="Contactar: (506) 8874-9761"
      >
        <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
      </a>
    </>
  )
}

// ContactForm moved to components/ContactForm and used in ContactPage
