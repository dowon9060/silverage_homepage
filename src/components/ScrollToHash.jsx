import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const HEADER_OFFSET = 88
const MAX_ATTEMPTS = 20
const RETRY_MS = 50

function scrollToElement(id, smooth) {
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({
    top: Math.max(0, top),
    behavior: smooth ? 'smooth' : 'auto',
  })
  return true
}

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const prevPathnameRef = useRef(pathname)

  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== pathname
    prevPathnameRef.current = pathname

    if (hash) {
      const id = hash.replace('#', '')
      let cancelled = false
      let attempts = 0

      if (pathnameChanged) {
        window.scrollTo(0, 0)
      }

      const tryScroll = () => {
        if (cancelled) return

        const smooth = !pathnameChanged || attempts > 0
        if (scrollToElement(id, smooth)) return

        attempts += 1
        if (attempts < MAX_ATTEMPTS) {
          setTimeout(tryScroll, RETRY_MS)
        }
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(tryScroll)
      })

      return () => {
        cancelled = true
      }
    }

    if (pathnameChanged) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
