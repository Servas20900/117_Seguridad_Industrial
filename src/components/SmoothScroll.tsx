import { useEffect } from 'react'

const MIN_DESKTOP_WIDTH = 960

function shouldEnableSmoothScroll() {
  if (typeof window === 'undefined') return false
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
  const isWideViewport = window.innerWidth >= MIN_DESKTOP_WIDTH
  return !prefersReducedMotion && hasFinePointer && isWideViewport
}

/**
 * Global smooth scroll (Lenis + GSAP ScrollTrigger), desktop-only.
 * Disabled on touch devices, narrow viewports, and prefers-reduced-motion —
 * mobile/touch users always get native scroll behavior.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!shouldEnableSmoothScroll()) return

    let lenis: import('lenis').default | undefined
    let rafId: number
    let cancelled = false

    const setup = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger')
      ])

      if (cancelled) return

      gsap.registerPlugin(ScrollTrigger)
      lenis = new Lenis({ duration: 1.1, smoothWheel: true })

      lenis.on('scroll', ScrollTrigger.update)

      const raf = (time: number) => {
        lenis?.raf(time * 1000)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    setup()

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return null
}
