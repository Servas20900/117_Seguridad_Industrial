import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { initializeGA } from './utils/analytics'
import './styles.css'

// Inicializar Google Analytics 4
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
if (GA_MEASUREMENT_ID) {
  initializeGA(GA_MEASUREMENT_ID)
}

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
