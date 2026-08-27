import { useParams } from 'react-router-dom'
import { DEFAULT_LOCALE, isSupportedLocale, localizedPath } from '../config/routes'

/** Returns the current locale and a helper to build locale-prefixed paths for <Link>/navigate. */
export default function useLocalizedPath() {
  const { lng } = useParams()
  const locale = isSupportedLocale(lng) ? lng : DEFAULT_LOCALE

  const path = (target: string) => localizedPath(locale, target)

  return { locale, path }
}
