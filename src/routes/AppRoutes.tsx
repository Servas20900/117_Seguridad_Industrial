import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LocaleLayout from './LocaleLayout'
import { DEFAULT_LOCALE } from '../config/routes'

const AboutPage = lazy(() => import('../pages/AboutPage'))
const CoursesPage = lazy(() => import('../pages/CoursesPage'))
const CourseDetailPage = lazy(() => import('../pages/CourseDetailPage'))
const HealthPage = lazy(() => import('../pages/HealthPage'))
const HealthServiceDetailPage = lazy(() => import('../pages/HealthServiceDetailPage'))
const EquipmentPage = lazy(() => import('../pages/EquipmentPage'))
const EquipmentDetailPage = lazy(() => import('../pages/EquipmentDetailPage'))
const GalleryPage = lazy(() => import('../pages/Gallery'))
const ContactPage = lazy(() => import('../pages/ContactPage'))

function RouteFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" role="status" aria-label="Cargando" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
        <Route path="/:lng" element={<LocaleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="health/:id" element={<HealthServiceDetailPage />} />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="equipment/:id" element={<EquipmentDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>
    </Suspense>
  )
}
