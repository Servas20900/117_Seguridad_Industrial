export const SUPPORTED_LOCALES = ['es', 'en'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'es'

export function isSupportedLocale(value: string | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

/** Builds a locale-prefixed path, e.g. localizedPath('en', '/courses') -> '/en/courses' */
export function localizedPath(locale: string, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`
}

/** Swaps the locale segment of an already-prefixed pathname, e.g. '/es/courses' + 'en' -> '/en/courses' */
export function swapLocaleInPath(pathname: string, nextLocale: string): string {
  const segments = pathname.split('/')
  if (isSupportedLocale(segments[1])) {
    segments[1] = nextLocale
    return segments.join('/') || '/'
  }
  return localizedPath(nextLocale, pathname)
}
