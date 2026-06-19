import { Link } from 'react-router-dom'
import CTA from './CTA.jsx'

export default function FeatureDetailLayout({ feature }) {
  return (
    <>
      <section className="fd-hero section">
        <div className="container scroll-reveal">
          <Link to={{ pathname: '/', hash: '#features' }} className="fd-back">← 주요 기능 목록</Link>
          <span className="eyebrow">{feature.tag}</span>
          <h1 className="fd-title">{feature.title}</h1>
          <p className="fd-lead">{feature.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className={`fd-row ${feature.align}`}>
            <div className="fd-visual scroll-reveal scroll-reveal-left">
              <div className="fd-glow" aria-hidden="true" />
              <div className="phone">
                <div className="phone-screen">
                  <img src={feature.img} alt={`${feature.title} 앱 화면`} />
                </div>
              </div>
            </div>
            <div className="fd-copy scroll-reveal scroll-reveal-right">
              <h2 className="fd-sub">{feature.sub}</h2>
              <p className="fd-desc">{feature.desc}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="fd-block-head scroll-reveal">
            <span className="eyebrow">실세가 추구하는 방향</span>
            <h2 className="section-title">
              <span className="gradient-text">{feature.menuLabel}</span>가 지향하는 것
            </h2>
          </div>
          <div className="fd-pursuit-grid scroll-reveal-stagger">
            {feature.pursuits.map((p, i) => (
              <article key={p.title} className="card mini accent">
                <span className="fd-p-num">0{i + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="fd-block-head scroll-reveal">
            <span className="eyebrow">시니어 편의성</span>
            <h2 className="section-title">
              더 편안하게 쓰실 수 있도록 <br />
              <span className="gradient-text">이렇게 설계했습니다</span>
            </h2>
            <p className="section-subtitle">
              복잡한 조작 없이, 눈과 손에 편안한 화면으로 일상을 이어 갈 수 있습니다.
            </p>
          </div>
          <ul className="fd-convenience scroll-reveal-stagger">
            {feature.convenience.map((c) => (
              <li key={c.k}>
                <strong>{c.k}</strong>
                <span>{c.v}</span>
              </li>
            ))}
          </ul>
          <p className="fd-a11y-link scroll-reveal scroll-reveal-delay-2">
            더 많은 편의 기능은{' '}
            <Link to="/accessibility">시니어 편의성 페이지</Link>에서 확인하세요.
          </p>
        </div>
      </section>

      <CTA />

      <style>{`
        .fd-hero {
          padding-top: 140px;
          padding-bottom: 48px;
        }
        .fd-back {
          display: inline-block;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 15px;
          color: var(--text-muted);
        }
        .fd-back:hover { color: var(--brand-700); }
        .fd-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          margin-top: 12px;
          letter-spacing: -0.03em;
        }
        .fd-lead {
          margin-top: 20px;
          font-size: 18px;
          color: var(--text-muted);
          max-width: 720px;
          line-height: 1.75;
        }

        .fd-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }
        .fd-row.left .fd-visual { order: 2; }

        .fd-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 520px;
        }
        .fd-glow {
          position: absolute;
          inset: 10%;
          background: radial-gradient(circle, var(--brand-100), transparent 70%);
          filter: blur(40px);
        }
        .fd-visual .phone {
          position: relative;
          z-index: 1;
          width: 300px;
        }

        .fd-sub {
          font-size: 22px;
          font-weight: 800;
          color: var(--brand-700);
          margin-bottom: 16px;
        }
        .fd-desc {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        .fd-block-head {
          margin-bottom: 40px;
          max-width: 720px;
        }

        .fd-pursuit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fd-pursuit-grid .card.mini {
          padding: 28px;
          border-left: 4px solid var(--brand-500);
          background: linear-gradient(180deg, #fff 0%, var(--brand-50) 100%);
          border-color: var(--brand-100);
        }
        .fd-p-num {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--brand-600);
          margin-bottom: 14px;
        }
        .fd-pursuit-grid h4 {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .fd-pursuit-grid p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .fd-convenience {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .fd-convenience li {
          padding: 18px 22px;
          background: var(--gray-50);
          border-radius: 14px;
          border-left: 4px solid var(--brand-500);
        }
        .fd-convenience strong {
          display: block;
          font-weight: 800;
          font-size: 16px;
          color: var(--text-strong);
          margin-bottom: 6px;
        }
        .fd-convenience span {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .fd-a11y-link {
          margin-top: 28px;
          font-size: 15px;
          color: var(--text-muted);
        }
        .fd-a11y-link a {
          color: var(--brand-700);
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .fd-row,
          .fd-row.left { grid-template-columns: 1fr; gap: 32px; }
          .fd-row.left .fd-visual { order: 0; }
          .fd-visual { min-height: 440px; }
          .fd-pursuit-grid { grid-template-columns: 1fr; }
          .fd-convenience { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
