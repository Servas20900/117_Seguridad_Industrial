import { useEffect, useState } from 'react'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

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

  return (
    <>
      <Topbar theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <AppRoutes />

      <Footer />
    </>
  )
}

// ContactForm moved to components/ContactForm and used in ContactPage
