import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navItems = [
  { to: '/', hash: '#background', label: '실세 소개' },
  { to: '/', hash: '#features', label: '주요 기능' },
  { to: '/accessibility', label: '시니어 편의성' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (item, e) => {
    setOpen(false)

    if (item.hash) {
      e.preventDefault()
      navigate({ pathname: '/', hash: item.hash })
      return
    }

    e.preventDefault()
    window.scrollTo(0, 0)
    navigate(item.to)
  }

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="실세 홈으로" onClick={() => window.scrollTo(0, 0)}>
          <img src="/silverlogo.png" alt="실세 로고" className="brand-logo" />
          <span className="brand-name">실세</span>
        </Link>

        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.hash ? { pathname: item.to, hash: item.hash } : item.to}
              onClick={(e) => handleNavClick(item, e)}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            to={{ pathname: '/', hash: '#cta' }}
            className="btn btn-primary header-cta"
            onClick={(e) => {
              setOpen(false)
              e.preventDefault()
              navigate({ pathname: '/', hash: '#cta' })
            }}
          >
            앱 다운로드
          </Link>
          <button
            className="hamburger"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          backdrop-filter: saturate(180%) blur(14px);
          -webkit-backdrop-filter: saturate(180%) blur(14px);
          background: rgba(255,255,255,0.7);
          border-bottom: 1px solid transparent;
          transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .header.is-scrolled {
          background: rgba(255,255,255,0.92);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 24px rgba(15,23,42,0.06);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 24px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .brand-logo {
          width: 40px; height: 40px;
          border-radius: 10px;
          box-shadow: var(--shadow-sm);
        }
        .brand-name {
          font-weight: 900;
          font-size: 22px;
          color: var(--text-strong);
          letter-spacing: -0.02em;
        }
        .nav {
          display: flex;
          gap: 8px;
        }
        .nav-link {
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          color: var(--text-muted);
          transition: background .15s ease, color .15s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--brand-700);
          background: var(--brand-50);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-cta {
          padding: 12px 22px;
          min-height: 44px;
          font-size: 15px;
          text-decoration: none;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: transparent;
          border: 0;
          padding: 10px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-strong);
          border-radius: 2px;
        }

        @media (max-width: 900px) {
          .nav {
            position: absolute;
            top: 72px; left: 0; right: 0;
            flex-direction: column;
            background: #fff;
            padding: 16px;
            border-bottom: 1px solid var(--border);
            transform: translateY(-200%);
            transition: transform .25s ease;
          }
          .nav-open { transform: translateY(0); }
          .nav-link { padding: 14px; font-size: 17px; }
          .header-cta { display: none; }
          .hamburger { display: inline-flex; }
        }
      `}</style>
    </header>
  )
}
