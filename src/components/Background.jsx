const concerns = [
  {
    title: '새로운 친구를 만나고 싶은 마음',
    desc: '나이 들수록 만남의 기회가 줄어, 새 친구를 사귀고 싶은 마음이 커집니다.',
  },
  {
    title: '동네 친구를 만들고 싶은데',
    desc: '가까이 살지만 아직 친해지지 못한 이웃. 어떻게 시작해야 할지 막막합니다.',
  },
  {
    title: '함께 취미를 즐기고 싶은데',
    desc: '동네서 취미를 함께하거나, 커피 한잔·술 한잔 하며 수다 떨 친구가 필요합니다.',
  },
]

const promises = [
  {
    title: '동네 새 친구 연결',
    desc: '가까운 이웃과 친구를 맺고, 편하게 연락하고 만날 수 있도록 돕습니다.',
  },
  {
    title: '취미 모임으로 자연스럽게 만남',
    desc: '산책·바둑·요리 등 좋아하는 활동을 함께하며 친구가 되는 만남을 추구합니다.',
  },
  {
    title: '가볍게 모이는 커피·식사 자리',
    desc: '부담 없이 한잔하면서 이야기 나누는 동네 소통. 외로움을 줄이는 가장 편한 연결.',
  },
]

export default function Background() {
  return (
    <section className="section" id="background">
      <div className="container">
        <div className="bg-head">
          <span className="eyebrow">왜 실세인가요?</span>
          <h2 className="section-title">
            동네 친구 한 명이 <br />
            <span className="gradient-text">하루를 바꿉니다.</span>
          </h2>
          <p className="section-subtitle">
            새 친구를 만나고, 동네에서 취미를 함께하고, 커피 한잔·술 한잔 하며
            소통하고 싶을 때. 실세는 시니어의 그 마음을 동네 연결로 돕습니다.
          </p>
        </div>

        <div className="bg-columns">
          {/* 시니어의 일상 고민 */}
          <div className="bg-col">
            <div className="col-head">
              <span className="badge red">시니어의 일상 고민</span>
              <h3>혹시 이런 마음, 있으셨나요?</h3>
            </div>
            <div className="grid grid-3">
              {concerns.map((it, i) => (
                <article key={it.title} className="card mini concern">
                  <span className="mini-num">0{i + 1}</span>
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 실세가 도와드려요 */}
          <div className="bg-col">
            <div className="col-head">
              <span className="badge green">실세가 도와드려요</span>
              <h3>가볍게, 그러나 꾸준하게 이어지는 동네 만남</h3>
            </div>

            {/* 폰 + 카드 좌우 레이아웃 */}
            <div className="promise-layout">
              {/* 폰 목업 */}
              <div className="promise-phone-wrap">
                <div className="bg-glow" aria-hidden="true" />
                <div className="phone">
                  <div className="phone-screen">
                    <img
                      src="/meeting.png"
                      alt="실세 모임 화면"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* 카드 목록 */}
              <div className="promise-cards">
                {promises.map((it, i) => (
                  <article key={it.title} className="card mini accent">
                    <span className="mini-num accent">0{i + 1}</span>
                    <h4>{it.title}</h4>
                    <p>{it.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-head {
          max-width: 880px;
          margin-bottom: 64px;
        }
        .bg-columns {
          display: grid;
          gap: 56px;
        }
        .col-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .col-head h3 {
          font-size: 22px;
          font-weight: 800;
        }
        .badge {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
        }
        .badge.red  { background: #FEE2E2; color: #B91C1C; }
        .badge.green { background: var(--brand-50); color: var(--brand-700); }

        /* 고민 카드 */
        .grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .card.mini {
          padding: 28px;
          border-left: 4px solid var(--gray-300);
        }
        .card.mini.accent {
          background: linear-gradient(180deg, #fff 0%, var(--brand-50) 100%);
          border-color: var(--brand-100);
          border-left-color: var(--brand-500);
        }
        .mini-num {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--gray-500);
          margin-bottom: 14px;
        }
        .mini-num.accent { color: var(--brand-600); }
        .card.mini h4 {
          font-size: 19px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .card.mini p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.65;
        }

        /* 폰 + 카드 레이아웃 */
        .promise-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
          align-items: center;
        }

        .promise-phone-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, var(--brand-100), transparent 70%);
          filter: blur(32px);
          z-index: 0;
        }
        .promise-phone-wrap .phone {
          position: relative;
          z-index: 1;
          width: 240px;
        }

        .promise-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: 1fr; }
          .promise-layout {
            grid-template-columns: 1fr;
          }
          .promise-phone-wrap .phone { width: 200px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
