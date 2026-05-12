const concerns = [
  {
    title: '연락이 뜸해진 친구들',
    desc: '바쁜 일상 속, 가까웠던 친구와의 안부가 점점 멀어집니다.',
  },
  {
    title: '함께 할 사람이 없는 취미',
    desc: '관심사는 있는데, 함께 모일 동년배를 찾기가 쉽지 않습니다.',
  },
  {
    title: '나누고 싶은 일상의 이야기',
    desc: '오늘 다녀온 산책, 좋았던 정보 한마디. 들어 줄 사람이 필요해요.',
  },
]

const promises = [
  {
    title: '한 번의 터치로 안부 전하기',
    desc: '오래 연락이 없던 친구에게도 부담 없이 인사 한마디. 외로움을 줄이는 가장 따뜻한 연결.',
  },
  {
    title: '내 주제로 모이는 동네 모임',
    desc: '산책·서예·바둑·요리 등 내가 좋아하는 활동으로, 가까운 곳에서 편안하게 만나요.',
  },
  {
    title: '같은 또래와의 클린한 소통',
    desc: '연령대가 비슷한 이웃들과 일상을 나눕니다. 안전한 분위기 속에서 마음껏 이야기하세요.',
  },
]

export default function Background() {
  return (
    <section className="section" id="background">
      <div className="container">
        <div className="bg-head">
          <span className="eyebrow">왜 실세인가요?</span>
          <h2 className="section-title">
            오늘 안부 한마디가 <br />
            <span className="gradient-text">하루를 따뜻하게 만듭니다.</span>
          </h2>
          <p className="section-subtitle">
            실세는 친구와의 안부, 동년배와의 소통, 좋아하는 주제의 모임을
            한 앱에 담아 시니어의 외로움을 줄이고 일상을 더 풍요롭게 합니다.
          </p>
        </div>

        <div className="bg-columns">
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

          <div className="bg-col">
            <div className="col-head">
              <span className="badge green">실세가 도와드려요</span>
              <h3>가볍게, 그러나 꾸준하게 이어지는 연결</h3>
            </div>

            <div className="meeting-img-wrap">
              <img
                src="/meeting.png"
                alt="실세 앱으로 동네 모임에 참여하는 시니어들"
                className="meeting-img"
                loading="lazy"
              />
              <div className="meeting-img-caption">
                실세와 함께라면 오늘도 새로운 만남이 시작됩니다.
              </div>
            </div>

            <div className="grid grid-3">
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
          margin-bottom: 20px;
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
        .badge.red { background: #FEE2E2; color: #B91C1C; }
        .badge.green { background: var(--brand-50); color: var(--brand-700); }

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

        .meeting-img-wrap {
          position: relative;
          margin-bottom: 20px;
          border-radius: var(--r-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .meeting-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform .4s ease;
        }
        .meeting-img-wrap:hover .meeting-img {
          transform: scale(1.03);
        }
        .meeting-img-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 24px 18px;
          background: linear-gradient(to top, rgba(6, 78, 59, 0.82) 0%, transparent 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .grid-3 { grid-template-columns: 1fr; }
          .meeting-img { height: 200px; }
        }
      `}</style>
    </section>
  )
}
