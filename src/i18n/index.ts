import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../config/routes'

import esCommon from '../locales/es/common.json'
import esHome from '../locales/es/home.json'
import esAbout from '../locales/es/about.json'
import esContact from '../locales/es/contact.json'
import esGallery from '../locales/es/gallery.json'
import esCourses from '../locales/es/courses.json'
import esHealthServices from '../locales/es/healthServices.json'
import esEquipment from '../locales/es/equipment.json'

import enCommon from '../locales/en/common.json'
import enHome from '../locales/en/home.json'
import enAbout from '../locales/en/about.json'
import enContact from '../locales/en/contact.json'
import enGallery from '../locales/en/gallery.json'
import enCourses from '../locales/en/courses.json'
import enHealthServices from '../locales/en/healthServices.json'
import enEquipment from '../locales/en/equipment.json'

export const defaultNS = 'common'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        common: esCommon,
        home: esHome,
        about: esAbout,
        contact: esContact,
        gallery: esGallery,
        courses: esCourses,
        healthServices: esHealthServices,
        equipment: esEquipment
      },
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        contact: enContact,
        gallery: enGallery,
        courses: enCourses,
        healthServices: enHealthServices,
        equipment: enEquipment
      }
    },
    supportedLngs: [...SUPPORTED_LOCALES],
    fallbackLng: DEFAULT_LOCALE,
    defaultNS,
    ns: ['common', 'home', 'about', 'contact', 'gallery', 'courses', 'healthServices', 'equipment'],
    interpolation: { escapeValue: false },
    detection: { order: ['path'], lookupFromPathIndex: 0 }
  })

export default i18next
