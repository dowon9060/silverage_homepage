const items = [
  {
    no: '01',
    title: '친구와 끊기지 않는 안부',
    desc: '오래 연락이 없는 친구를 자동으로 알려 드리고, 한 번의 터치로 따뜻한 안부 메시지를 전합니다.',
    bullets: ['비활성 친구 자동 알림', '원터치 안부 전하기'],
  },
  {
    no: '02',
    title: '주제별로 모이는 우리 동네',
    desc: '산책·서예·바둑·요리 등 내가 좋아하는 주제로 가까운 모임을 찾아 편안하게 참여하세요.',
    bullets: ['지도 기반 동네 모임', '관심사 맞춤 추천'],
  },
  {
    no: '03',
    title: '동년배와 나누는 따뜻한 소통',
    desc: '같은 또래와 일상·정보·취미를 나누는 안전한 커뮤니티. 큰 글자와 음성 기능으로 누구나 쉽게.',
    bullets: ['연령대 표시 카드 피드', '음성 입력 / 읽어주기'],
  },
]

export default function ValueProps() {
  return (
    <section className="section section-mint">
      <div className="container">
        <div className="vp-head">
          <span className="eyebrow">실세가 약속하는 것</span>
          <h2 className="section-title">
            매일의 외로움을 줄이는 <br />
            <span className="gradient-text">3가지 따뜻한 연결</span>
          </h2>
          <p className="section-subtitle">
            친구, 모임, 커뮤니티. 시니어의 하루를 가장 자연스럽게 이어 주는 세 가지 약속입니다.
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
