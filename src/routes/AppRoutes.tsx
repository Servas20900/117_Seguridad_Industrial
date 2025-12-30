import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CoursesPage from '../pages/CoursesPage'
import HealthPage from '../pages/HealthPage'
import EquipmentPage from '../pages/EquipmentPage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAuth } from '../stores/authStore'

export default function AppRoutes({ theme }: { theme: 'light' | 'dark' }) {
  const loadToken = useAuth((state) => state.loadToken)

  useEffect(() => {
    loadToken()
  }, [loadToken])

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/health" element={<HealthPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/admin-login" element={<LoginPage />} />
      <Route 
        path="/admin-117" 
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        } 
      />
      {/* Ruta de logos removida */}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
