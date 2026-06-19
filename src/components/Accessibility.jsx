const a11yItems = [
  {
    title: '음성으로 글쓰기',
    desc: '말로 하면 자동으로 채팅과 게시글이 작성됩니다. 복잡한 타자 없이 목소리만으로 소통하세요.',
  },
  {
    title: '읽어주기 기능',
    desc: '게시글과 화면 내용을 또렷한 음성으로 읽어 드립니다. 눈의 피로를 줄이고 편안하게 들으세요.',
  },
  {
    title: '큰 글자 모드',
    desc: '기본 글자 크기를 한 단계 더 시원하게. 돋보기 없이도 메뉴와 콘텐츠를 명확하게 확인합니다.',
  },
  {
    title: '고대비 모드',
    desc: '시각이 약하신 분들을 위해 배경과 글자의 대비를 강화하여 가독성을 한층 끌어올렸습니다.',
  },
  {
    title: '넉넉한 터치 영역',
    desc: '버튼이 충분히 커서 손이 떨려도 누르기 편안합니다. 잘못 눌릴 걱정 없는 안정적인 조작.',
  },
  {
    title: '음성 명령 제어',
    desc: '"모임 찾기", "커뮤니티 열기" 등 말 한마디로 주요 기능을 바로 실행합니다.',
  },
]

export default function Accessibility() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="a11y-head scroll-reveal">
          <span className="eyebrow dark">시니어 편의성</span>
          <h2 className="section-title">
            누구나 쉽고 편하게 <br />
            <span className="gradient-text">눈, 손, 귀에 다정한 앱</span>
          </h2>
          <p className="section-subtitle">
            실세는 디지털 소외 없이 모든 시니어가 편안하게 사용할 수 있도록
            6가지 접근성 기능을 기본으로 제공합니다.
          </p>
        </div>

        <div className="a11y-grid scroll-reveal-stagger">
          {a11yItems.map((it, i) => (
            <article key={it.title} className="a11y-card">
              <div className="a11y-no">0{i + 1}</div>
              <h4>{it.title}</h4>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .a11y-head { margin-bottom: 56px; max-width: 720px; }
        .a11y-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .a11y-card {
          position: relative;
          padding: 36px 32px;
          border-radius: var(--r-xl);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .a11y-card:hover {
          transform: translateY(-4px);
          background: rgba(135, 206, 235, 0.1);
          border-color: rgba(135, 206, 235, 0.45);
        }
        .a11y-no {
          font-size: 44px;
          font-weight: 900;
          color: var(--brand-300);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 20px;
        }
        .a11y-card h4 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 10px;
          color: #fff;
        }
        .a11y-card p {
          color: #94A3B8;
          font-size: 15px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .a11y-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .a11y-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
