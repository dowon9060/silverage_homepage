import { useEffect, useState } from 'react'

const navItems = [
  { href: '#background', label: '실세 소개' },
  { href: '#features', label: '주요 기능' },
  { href: '#accessibility', label: '시니어 접근성' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="실세 홈으로">
          <img src="/silverlogo.png" alt="실세 로고" className="brand-logo" />
          <span className="brand-name">실세</span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#cta" className="btn btn-primary header-cta">
            앱 다운로드
          </a>
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
