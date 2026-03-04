import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CoursesPage from '../pages/CoursesPage'
import CourseDetailPage from '../pages/CourseDetailPage'
import HealthPage from '../pages/HealthPage'
import HealthServiceDetailPage from '../pages/HealthServiceDetailPage'
import EquipmentPage from '../pages/EquipmentPage'
import EquipmentDetailPage from '../pages/EquipmentDetailPage'
import ContactPage from '../pages/ContactPage'
import GalleryPage from '../pages/Gallery'

export default function AppRoutes({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/health" element={<HealthPage />} />
      <Route path="/health/:id" element={<HealthServiceDetailPage />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/equipment/:id" element={<EquipmentDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
