import { Link } from 'react-router-dom'

export default function AccessibilityPreview() {
  return (
    <section className="section section-mint" id="accessibility-preview">
      <div className="container">
        <div className="ap-inner">
          <div className="ap-copy scroll-reveal scroll-reveal-left">
            <span className="eyebrow">시니어 편의성</span>
            <h2 className="section-title">
              모든 기능에 담긴 <br />
              <span className="gradient-text">편안한 사용 경험</span>
            </h2>
            <p className="section-subtitle">
              큰 글자, 음성 입력, 읽어주기, 넉넉한 버튼.
              실세는 시니어가 부담 없이 쓸 수 있는 편의성을 기본으로 제공합니다.
            </p>
            <Link to="/accessibility" className="btn btn-primary ap-btn">
              편의성 기능 자세히 보기
            </Link>
          </div>
          <ul className="ap-list scroll-reveal-stagger">
            <li>음성으로 글쓰기 · 읽어주기</li>
            <li>큰 글자 · 고대비 모드</li>
            <li>넉넉한 터치 영역</li>
            <li>음성 명령으로 화면 이동</li>
          </ul>
        </div>
      </div>

      <style>{`
        .ap-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ap-btn { margin-top: 28px; }
        .ap-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ap-list li {
          padding: 18px 22px;
          background: #fff;
          border-radius: 14px;
          border: 1px solid var(--border);
          border-left: 4px solid var(--brand-500);
          font-weight: 700;
          font-size: 16px;
          color: var(--text-strong);
        }
        @media (max-width: 800px) {
          .ap-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
