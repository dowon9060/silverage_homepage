const items = [
  {
    no: '01',
    title: '동네에서 새 친구 만들기',
    desc: '가까운 이웃을 친구로 연결하고, 부담 없이 인사하고 만날 수 있는 동네 친구 사귀기를 돕습니다.',
    bullets: ['동네 친구 초대 · 추가', '가까운 이웃과 연결'],
  },
  {
    no: '02',
    title: '취미를 함께 즐기는 만남',
    desc: '산책·서예·바둑·요리 등 좋아하는 활동으로 모임을 찾고, 함께할 친구를 자연스럽게 만납니다.',
    bullets: ['지도 기반 동네 모임', '관심사 맞춤 추천'],
  },
  {
    no: '03',
    title: '커피·식사로 편하게 소통',
    desc: '커피 한잔, 식사 한 자리로 가볍게 모여 이야기 나누고, 동년배와 따뜻한 일상을 이어 갑니다.',
    bullets: ['카페·식사 모임', '동년배 커뮤니티'],
  },
]

export default function ValueProps() {
  return (
    <section className="section section-mint">
      <div className="container">
        <div className="vp-head">
          <span className="eyebrow">실세가 약속하는 것</span>
          <h2 className="section-title">
            동네 친구를 만나는 <br />
            <span className="gradient-text">3가지 따뜻한 연결</span>
          </h2>
          <p className="section-subtitle">
            새 친구, 취미 모임, 커피 한잔. 시니어가 동네에서 친구를 사귀고
            함께하는 하루를 가장 자연스럽게 이어 주는 세 가지 약속입니다.
          </p>
        </div>

        <div className="vp-grid">
          {items.map((it) => (
            <article key={it.no} className="vp-card">
              <span className="vp-no">{it.no}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <ul>
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .vp-head {
          text-align: center;
          margin-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .vp-head .section-subtitle { margin: 0 auto; }
        .vp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .vp-card {
          position: relative;
          padding: 40px 32px;
          background: #fff;
          border-radius: var(--r-2xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .vp-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }
        .vp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 6px;
          background: var(--brand-500);
        }

        .vp-no {
          display: inline-block;
          font-size: 44px;
          font-weight: 900;
          line-height: 1;
          color: var(--brand-500);
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .vp-card h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .vp-card p {
          color: var(--text-muted);
          line-height: 1.65;
          font-size: 16px;
        }
        .vp-card ul {
          margin-top: 24px;
          padding-top: 20px;
          padding-left: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px dashed var(--border);
        }
        .vp-card li {
          position: relative;
          padding-left: 18px;
          font-weight: 600;
          color: var(--text);
          font-size: 15px;
        }
        .vp-card li::before {
          content: '';
          position: absolute;
          left: 0; top: 9px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--brand-500);
        }

        @media (max-width: 900px) {
          .vp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
