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
          <span className="eyebrow">실버세대 생활 슈퍼앱</span>
          <h1 className="hero-title">
            이제는 <span className="gradient-text">우리가 실세</span>
          </h1>
          <p className="hero-lead">
            친구와 안부를 나누고, 좋아하는 주제로 모임을 찾고,<br />
            동년배와 따뜻하게 소통하는 시니어 전용 앱.
          </p>

          <div className="hero-cta">
            <a href="#features" className="btn btn-primary">
              주요 기능 살펴보기
            </a>
            <a href="#cta" className="btn btn-ghost">
              앱 다운로드
            </a>
          </div>

          <ul className="hero-points" aria-label="실세의 핵심 약속">
            <li>
              <strong>친구 안부 전하기</strong>
              <span>오랜만의 친구에게도 한 번의 터치로 따뜻한 인사를 전합니다.</span>
            </li>
            <li>
              <strong>주제별 모임 찾기</strong>
              <span>좋아하는 주제로 가까운 동네 모임을 편안하게 만납니다.</span>
            </li>
            <li>
              <strong>동년배 커뮤니티</strong>
              <span>같은 또래와 일상과 정보를 나누는 안전한 공간.</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone phone-back">
            <div className="phone-screen">
              <img src="/community.png" alt="" />
            </div>
          </div>
          <div className="phone phone-front">
            <div className="phone-screen">
              <img src="/home.png" alt="" />
            </div>
          </div>
          <div className="float-badge badge-1">
            <span className="dot" />
            <div>
              <div className="b-title">음성으로 글쓰기</div>
              <div className="b-sub">말하면 자동으로 입력</div>
            </div>
          </div>
          <div className="float-badge badge-2">
            <div>
              <div className="b-title">친구에게 안부 전하기</div>
              <div className="b-sub">오랜만이에요, 잘 지내시죠?</div>
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
          height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual .phone {
          position: absolute;
        }
        .phone-back {
          transform: translate(80px, 20px) rotate(8deg);
          opacity: 0.95;
        }
        .phone-front {
          transform: translate(-60px, -10px) rotate(-4deg);
          z-index: 2;
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
          50%      { box-shadow: 0 0 0 10px rgba(16,185,129,0.18); }
        }

        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { height: 560px; }
        }
        @media (max-width: 640px) {
          .hero { padding-top: 120px; }
          .hero-visual { height: 480px; }
          .phone { width: 220px; }
          .phone-back { transform: translate(60px, 20px) rotate(8deg); }
          .phone-front { transform: translate(-50px, -10px) rotate(-4deg); }
          .badge-1, .badge-2 { display: none; }
        }
      `}</style>
    </section>
  )
}
