import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SmoothScroll from './components/SmoothScroll'
import AppRoutes from './routes/AppRoutes'
import { trackPageView } from './utils/analytics'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    // El sitio usa un único tema claro con los colores de marca
    document.body.classList.add('theme-light')
  }, [])

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, document.title)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <SmoothScroll />

      <Topbar />

      <AppRoutes />

      <Footer />

      <WhatsAppButton />
    </>
  )
}
