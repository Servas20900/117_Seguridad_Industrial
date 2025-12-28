import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CoursesPage from '../pages/CoursesPage'
import HealthPage from '../pages/HealthPage'
import EquipmentPage from '../pages/EquipmentPage'
import LogosPage from '../pages/LogosPage'
import ContactPage from '../pages/ContactPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/health" element={<HealthPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/logos" element={<LogosPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
