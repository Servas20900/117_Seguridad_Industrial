import { useEffect } from 'react'

const SITE_NAME = '117 Seguridad Industrial'

/** Sets document.title as "{pageTitle} · 117 Seguridad Industrial" for the lifetime of the calling page. */
export default function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · ${SITE_NAME}` : SITE_NAME
  }, [pageTitle])
}
