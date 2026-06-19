import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OBSERVER_OPTIONS = {
  threshold: 0.12,
  rootMargin: '0px 0px -6% 0px',
}

export default function ScrollRevealInit() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, OBSERVER_OPTIONS)

    const observeAll = () => {
      document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(observeAll)
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
