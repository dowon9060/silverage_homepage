import { Link } from 'react-router-dom'
import { features } from '../data/features.js'

export default function FeatureMenu() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="fm-head scroll-reveal">
          <span className="eyebrow">주요 기능</span>
          <h2 className="section-title">
            실세의 모든 기능을 <br />
            <span className="gradient-text">편안하게 만나보세요</span>
          </h2>
          <p className="section-subtitle">
            동네 친구 만들기, 취미 모임, 커뮤니티, 안부 전하기, 친구 관리, 취미활동, 공동구매까지.
            각 기능을 눌러 실세가 추구하는 방향과 편의성을 확인하세요.
          </p>
        </div>

        <div className="fm-grid scroll-reveal-stagger">
          {features.map((f, i) => (
            <Link
              key={f.slug}
              to={`/features/${f.slug}`}
              className="fm-card"
            >
              <div className="fm-thumb">
                <img src={f.img} alt="" loading="lazy" />
              </div>
              <div className="fm-body">
                <span className="fm-num">0{i + 1}</span>
                <h3>{f.menuLabel}</h3>
                <p>{f.sub}</p>
                <span className="fm-link">자세히 보기</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .fm-head {
          max-width: 760px;
          margin-bottom: 56px;
        }
        .fm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fm-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-xl);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          text-decoration: none;
          color: inherit;
        }
        .fm-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--brand-200);
        }
        .fm-thumb {
          height: 200px;
          background: var(--brand-50);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .fm-thumb img {
          width: 120px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
        }
        .fm-body {
          padding: 24px 28px 28px;
          flex: 1;
        }
        .fm-num {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--brand-600);
        }
        .fm-body h3 {
          font-size: 22px;
          font-weight: 800;
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .fm-body p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
        }
        .fm-link {
          display: inline-block;
          margin-top: 16px;
          font-weight: 700;
          font-size: 15px;
          color: var(--brand-700);
        }

        @media (max-width: 900px) {
          .fm-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .fm-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
