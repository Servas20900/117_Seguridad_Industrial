import { useEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DEFAULT_LOCALE, isSupportedLocale } from '../config/routes'

export default function LocaleLayout() {
  const { lng } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (isSupportedLocale(lng) && i18n.language !== lng) {
      i18n.changeLanguage(lng)
    }
    if (isSupportedLocale(lng)) {
      document.documentElement.lang = lng
    }
  }, [lng, i18n])

  if (!isSupportedLocale(lng)) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />
  }

  return <Outlet />
}
