import * as ReactGAModule from 'react-ga4'

// react-ga4 ships a CJS build whose default-export interop is unreliable across
// bundlers/versions — resolve explicitly instead of trusting `import ReactGA from ...`.
type ReactGAInstance = {
  initialize: (measurementId: string) => void
  send: (params: Record<string, unknown>) => void
  event: (name: string, params?: Record<string, string | number | boolean>) => void
}
const ReactGA = ((ReactGAModule as unknown as { default?: ReactGAInstance }).default ??
  (ReactGAModule as unknown as ReactGAInstance))

// Inicializar GA4 con tu ID
export const initializeGA = (measurementId: string) => {
  ReactGA.initialize(measurementId)
}

// Rastrear pageview
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title
  })
}

// Rastrear eventos personalizados
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) => {
  ReactGA.event(eventName, eventParams)
}

// Ejemplos de eventos útiles
export const trackCourseView = (courseTitle: string) => {
  trackEvent('view_course', { course_title: courseTitle })
}

export const trackHealthServiceView = (serviceTitle: string) => {
  trackEvent('view_health_service', { service_title: serviceTitle })
}

export const trackEquipmentView = (equipmentTitle: string) => {
  trackEvent('view_equipment', { equipment_title: equipmentTitle })
}

export const trackContactForm = () => {
  trackEvent('contact_form_click')
}

export const trackDownloadCatalog = () => {
  trackEvent('download_catalog')
}

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click')
}
