export default function CTA() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="cta-wrap">
          <div className="cta-bg" aria-hidden="true">
            <div className="cta-blob a" />
            <div className="cta-blob b" />
          </div>

          <div className="cta-content">
            <span className="eyebrow">앱 다운로드</span>
            <h2 className="cta-title">
              지금 <span className="gradient-text">친구에게 안부</span>를 전해 보세요.
            </h2>
            <p className="cta-desc">
              오늘의 인사 한마디, 오늘의 모임 한 자리.<br />
              실세에서 시니어의 따뜻한 일상이 시작됩니다.
            </p>
            <div className="cta-actions">
              <a className="store-btn" href="#" aria-label="App Store에서 다운로드">
                <small>Download on the</small>
                <strong>App Store</strong>
              </a>
              <a className="store-btn" href="#" aria-label="Google Play에서 다운로드">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </a>
            </div>

            <a className="cta-secondary" href="#features">
              주요 기능 다시 보기
            </a>
          </div>

          <div className="cta-side" aria-hidden="true">
            <div className="phone">
              <div className="phone-screen">
                <img src="/freand.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-wrap {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #064E3B 0%, #0F172A 100%);
          border-radius: var(--r-2xl);
          padding: 80px 64px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          align-items: center;
          gap: 40px;
          color: #fff;
          box-shadow: var(--shadow-lg);
        }
        .cta-bg { position: absolute; inset: 0; pointer-events: none; }
        .cta-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }
        .cta-blob.a {
          width: 480px; height: 480px;
          background: var(--brand-400);
          top: -100px; right: -100px;
        }
        .cta-blob.b {
          width: 360px; height: 360px;
          background: #FBBF24;
          bottom: -120px; left: -100px;
          opacity: 0.2;
        }

        .cta-content { position: relative; z-index: 1; }
        .cta-title {
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 900;
          color: #fff;
          margin-top: 16px;
          line-height: 1.2;
        }
        .cta-desc {
          margin-top: 18px;
          color: #CBD5E1;
          font-size: 17px;
          line-height: 1.7;
        }
        .cta-actions {
          margin-top: 32px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .store-btn {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          padding: 14px 24px;
          background: #ffffff;
          color: #0F172A;
          border-radius: 14px;
          box-shadow: var(--shadow-md);
          transition: transform .15s ease, box-shadow .2s ease;
          min-height: 58px;
          line-height: 1;
        }
        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .store-btn small {
          font-size: 11px;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .store-btn strong {
          font-size: 18px;
          font-weight: 800;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: var(--brand-300);
          font-weight: 700;
          font-size: 15px;
          padding: 8px 0;
        }
        .cta-secondary:hover { color: #fff; }

        .cta-side {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }
        .cta-side .phone { width: 240px; transform: rotate(6deg); }

        @media (max-width: 900px) {
          .cta-wrap { grid-template-columns: 1fr; padding: 56px 32px; }
          .cta-side { display: none; }
        }
      `}</style>
    </section>
  )
}
