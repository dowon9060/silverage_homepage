const features = [
  {
    tag: '핵심 기능 01',
    title: '친구와 끊기지 않는 안부',
    sub: '오래 연락이 없는 친구에게 한 번에 인사',
    desc: '5일 이상 접속하지 않은 친구를 자동으로 알려 드립니다. 큰 버튼 한 번이면 "잘 지내시죠?"와 같은 따뜻한 안부가 전달되어, 시니어의 외로움을 줄여 줍니다.',
    bullets: [
      { k: '비활성 친구 알림', v: '5일 이상 미접속한 친구를 자동 안내' },
      { k: '원터치 안부 전하기', v: '버튼 한 번으로 부담 없는 인사' },
      { k: '친구 초대 / 추가', v: '쉬운 디스커버리로 인맥 유지' },
    ],
    img: '/freand.png',
    align: 'right',
  },
  {
    tag: '핵심 기능 02',
    title: '내 주제로 모이는 동네 모임',
    sub: '지도 기반 1.5km 내 관심사 모임 찾기',
    desc: '산책·서예·바둑·노래·요리 등 좋아하는 주제로 가까운 모임을 찾을 수 있습니다. 지도 위에서 한눈에 보이고, 큰 버튼으로 편안하게 참여하세요.',
    bullets: [
      { k: '지도 기반 탐색', v: '내 주변 모임을 한눈에' },
      { k: '관심사 추천', v: '내 취향에 맞춘 맞춤 모임' },
      { k: '쉬운 참여 / 대기', v: '원터치 참여와 자리 신청' },
    ],
    img: '/home.png',
    align: 'left',
  },
  {
    tag: '핵심 기능 03',
    title: '동년배와 나누는 따뜻한 커뮤니티',
    sub: '시니어 맞춤 카드 피드 · 음성 입력 / 읽어주기',
    desc: '연령대가 비슷한 이웃들과 일상·정보·취미를 나누는 안전한 공간. 키보드 입력이 어려우면 음성으로 글을 쓰고, 작은 글씨가 부담스러우면 읽어주기 기능을 활용하세요.',
    bullets: [
      { k: '연령대 표시 피드', v: '같은 또래라 더 편안한 소통' },
      { k: '음성으로 글쓰기', v: '말하면 자동으로 받아쓰기' },
      { k: '읽어주기 기능', v: '게시글을 음성으로 청취' },
    ],
    img: '/community.png',
    align: 'right',
  },
  {
    tag: '핵심 기능 04',
    title: '뭉치면 저렴한 공동구매',
    sub: '동년배와 함께하는 알뜰한 소비',
    desc: '식품·생활용품·여행 패키지 등을 동년배들과 함께 구매해 합리적인 가격에 즐기세요. 진행률 바로 모집 현황을 한눈에 볼 수 있어 참여가 쉽습니다.',
    bullets: [
      { k: '진행률 시각화', v: '목표 인원 달성률을 한눈에' },
      { k: '큰 가격 표기', v: '할인율과 가격을 또렷하게' },
      { k: '카테고리 큐레이션', v: '식품·생활·여행 패키지' },
    ],
    img: '/buy.png',
    align: 'left',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="ft-head">
          <span className="eyebrow">주요 기능</span>
          <h2 className="section-title">
            친구와 모임, <br />
            <span className="gradient-text">하나의 앱으로 충분합니다.</span>
          </h2>
          <p className="section-subtitle">
            실세는 시니어의 하루 동선에 맞춰 설계된 기능을 담았습니다.
            친구에게 안부를 전하고, 주제별 모임에 참여하고, 동년배와 일상을 나누는
            모든 과정을 가장 편안한 방식으로 제공합니다.
          </p>
        </div>

        <div className="ft-stack">
          {features.map((f) => (
            <article key={f.title} className={`ft-row ${f.align}`}>
              <div className="ft-visual">
                <div className="phone">
                  <div className="phone-screen">
                    <img src={f.img} alt={`${f.title} 앱 화면`} loading="lazy" />
                  </div>
                </div>
                <div className="ft-glow" aria-hidden="true" />
              </div>

              <div className="ft-copy">
                <span className="ft-tag">{f.tag}</span>
                <h3 className="ft-title">{f.title}</h3>
                <p className="ft-sub">{f.sub}</p>
                <p className="ft-desc">{f.desc}</p>
                <ul className="ft-bullets">
                  {f.bullets.map((b) => (
                    <li key={b.k}>
                      <strong>{b.k}</strong>
                      <span>{b.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ft-head {
          max-width: 760px;
          margin-bottom: 80px;
        }
        .ft-stack {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .ft-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 80px;
        }
        .ft-row.left .ft-visual { order: 2; }

        .ft-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 560px;
        }
        .ft-glow {
          position: absolute;
          inset: 10% 10%;
          background: radial-gradient(circle, var(--brand-100), transparent 70%);
          filter: blur(40px);
          z-index: 0;
        }
        .ft-visual .phone {
          position: relative;
          z-index: 1;
          width: 300px;
        }

        .ft-tag {
          display: inline-block;
          padding: 6px 14px;
          background: var(--brand-50);
          color: var(--brand-700);
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
        }

        .ft-title {
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
          margin-top: 16px;
          letter-spacing: -0.025em;
        }
        .ft-sub {
          margin-top: 12px;
          color: var(--brand-700);
          font-weight: 700;
          font-size: 17px;
        }
        .ft-desc {
          margin-top: 16px;
          color: var(--text-muted);
          font-size: 17px;
          line-height: 1.75;
        }
        .ft-bullets {
          margin-top: 28px;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ft-bullets li {
          padding: 16px 20px;
          background: var(--gray-50);
          border-radius: 14px;
          border-left: 4px solid var(--brand-500);
        }
        .ft-bullets strong {
          display: block;
          font-weight: 800;
          color: var(--text-strong);
          font-size: 16px;
          margin-bottom: 4px;
        }
        .ft-bullets span {
          display: block;
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .ft-stack { gap: 80px; }
          .ft-row,
          .ft-row.left { grid-template-columns: 1fr; gap: 32px; }
          .ft-row.left .ft-visual { order: 0; }
          .ft-visual { min-height: 480px; }
          .ft-visual .phone { width: 260px; }
        }
      `}</style>
    </section>
  )
}
