import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow hero-enter">시니어의 일상, 새 친구가 필요할 때</span>
          <h1 className="hero-title hero-enter hero-enter-delay-1">
            동네에 새 친구, <span className="gradient-text">함께하는 하루</span>
          </h1>
          <p className="hero-lead hero-enter hero-enter-delay-2">
            새로운 친구를 만나고, 동네에서 취미를 함께 즐기거나<br />
            커피 한잔·술 한잔 하며 소통하고 싶을 때. 실세가 가까운 동네 친구를 연결해 드립니다.
          </p>

          <div className="hero-cta hero-enter hero-enter-delay-3">
            <Link to={{ pathname: '/', hash: '#features' }} className="btn btn-primary">
              주요 기능 살펴보기
            </Link>
            <Link to={{ pathname: '/', hash: '#cta' }} className="btn btn-ghost">
              앱 다운로드
            </Link>
          </div>

          <ul className="hero-points hero-enter hero-enter-delay-4" aria-label="실세의 핵심 약속">
            <li>
              <strong>동네 새 친구 만들기</strong>
              <span>가까운 이웃과 부담 없이 인사하고, 친구로 연결합니다.</span>
            </li>
            <li>
              <strong>함께하는 취미 모임</strong>
              <span>산책, 바둑, 서예 등 좋아하는 활동으로 자연스럽게 만납니다.</span>
            </li>
            <li>
              <strong>커피·식사로 가볍게 소통</strong>
              <span>한잔하면서 편하게 이야기 나누는 동네 만남을 돕습니다.</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual hero-enter hero-enter-delay-2" aria-hidden="true">
          <div className="phone phone-front">
            <div className="phone-screen">
              <img src="/home.png" alt="실세 앱 홈 화면" />
            </div>
          </div>
          <div className="float-badge badge-1">
            <span className="dot" />
            <div>
              <div className="b-title">동네 새 친구</div>
              <div className="b-sub">산책 같이 하실래요?</div>
            </div>
          </div>
          <div className="float-badge badge-2">
            <div>
              <div className="b-title">오늘의 동네 모임</div>
              <div className="b-sub">커피 한잔 하며 안부 나누기</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding-top: 160px;
          padding-bottom: 120px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
        }
        .blob-a {
          width: 520px; height: 520px;
          background: radial-gradient(circle, var(--brand-300), transparent 70%);
          top: -120px; left: -100px;
        }
        .blob-b {
          width: 480px; height: 480px;
          background: radial-gradient(circle, #FDE68A, transparent 70%);
          bottom: -160px; right: -80px;
          opacity: 0.4;
        }
        .blob-c {
          width: 360px; height: 360px;
          background: radial-gradient(circle, #C7D2FE, transparent 70%);
          top: 30%; right: 30%;
          opacity: 0.4;
        }
        .grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 70%);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          gap: 64px;
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 900;
          line-height: 1.05;
          margin-top: 20px;
          letter-spacing: -0.03em;
        }
        .hero-lead {
          margin-top: 24px;
          font-size: clamp(17px, 1.4vw, 20px);
          color: var(--text-muted);
          line-height: 1.7;
        }

        .hero-cta {
          margin-top: 36px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-points {
          margin-top: 44px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .hero-points li {
          padding: 16px 20px;
          background: rgba(255,255,255,0.75);
          border: 1px solid var(--border);
          border-left: 4px solid var(--brand-500);
          border-radius: var(--r-lg);
          backdrop-filter: blur(8px);
        }
        .hero-points strong {
          display: block;
          font-size: 17px;
          font-weight: 800;
          color: var(--text-strong);
          margin-bottom: 4px;
        }
        .hero-points span {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .hero-visual {
          position: relative;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual .phone {
          position: relative;
          z-index: 2;
          width: 280px;
        }
        .hero-visual .phone-screen {
          background: #0F172A;
        }
        .hero-visual .phone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .float-badge {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #fff;
          border-radius: 14px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }
        .float-badge .b-title {
          font-weight: 700;
          font-size: 14px;
          color: var(--text-strong);
        }
        .float-badge .b-sub {
          font-size: 12px;
          color: var(--text-subtle);
        }
        .float-badge .dot {
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--brand-500);
          box-shadow: 0 0 0 4px var(--brand-100);
          animation: pulse 1.8s infinite;
        }
        .badge-1 { top: 8%; left: 4%; }
        .badge-2 {
          bottom: 12%; right: 2%;
          border-left: 4px solid var(--brand-500);
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 4px var(--brand-100); }
          50%      { box-shadow: 0 0 0 10px rgba(135, 206, 235, 0.22); }
        }

        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { height: 480px; }
        }
        @media (max-width: 640px) {
          .hero { padding-top: 120px; }
          .hero-visual { height: 420px; }
          .hero-visual .phone { width: 220px; }
          .badge-1, .badge-2 { display: none; }
        }
      `}</style>
    </section>
  )
}
