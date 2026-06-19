import { Link } from 'react-router-dom'
import Accessibility from '../components/Accessibility.jsx'
import CTA from '../components/CTA.jsx'

export default function AccessibilityPage() {
  return (
    <>
      <section className="a11y-page-hero section">
        <div className="container">
          <Link to="/" className="a11y-back">← 홈으로</Link>
          <span className="eyebrow">시니어 편의성</span>
          <h1 className="a11y-page-title">
            누구나 쉽고 편하게, <br />
            <span className="gradient-text">실세와 함께하는 일상</span>
          </h1>
          <p className="a11y-page-lead">
            실세는 시니어가 디지털에서 소외되지 않도록
            눈·손·귀에 편안한 사용 경험을 기본으로 제공합니다.
            복잡한 조작 없이, 익숙한 방식으로 앱을 이용하세요.
          </p>
        </div>
      </section>

      <Accessibility />

      <section className="section section-soft">
        <div className="container">
          <div className="a11y-extra">
            <h2 className="section-title">
              편의성은 <span className="gradient-text">모든 기능의 기본</span>입니다
            </h2>
            <p className="section-subtitle">
              모임, 커뮤니티, 안부 전하기, 친구 관리, 취미활동, 공동구매까지.
              실세의 모든 기능은 큰 글자, 큰 버튼, 음성 지원을 바탕으로 설계되었습니다.
            </p>
            <ul className="a11y-principles">
              <li>
                <strong>읽기 편하게</strong>
                <span>큰 글자와 고대비로 화면을 또렷하게</span>
              </li>
              <li>
                <strong>누르기 편하게</strong>
                <span>넉넉한 터치 영역과 단순한 버튼 배치</span>
              </li>
              <li>
                <strong>말하기 편하게</strong>
                <span>음성 입력과 읽어주기로 소통 부담 감소</span>
              </li>
              <li>
                <strong>이동하기 편하게</strong>
                <span>음성 명령으로 원하는 화면에 바로 접근</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />

      <style>{`
        .a11y-page-hero {
          padding-top: 140px;
          padding-bottom: 48px;
        }
        .a11y-back {
          display: inline-block;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 15px;
          color: var(--text-muted);
        }
        .a11y-back:hover { color: var(--brand-700); }
        .a11y-page-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 900;
          margin-top: 12px;
          letter-spacing: -0.03em;
        }
        .a11y-page-lead {
          margin-top: 20px;
          font-size: 18px;
          color: var(--text-muted);
          max-width: 720px;
          line-height: 1.75;
        }
        .a11y-extra {
          max-width: 800px;
        }
        .a11y-principles {
          margin-top: 32px;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .a11y-principles li {
          padding: 20px 24px;
          background: #fff;
          border-radius: 14px;
          border: 1px solid var(--border);
          border-left: 4px solid var(--brand-500);
        }
        .a11y-principles strong {
          display: block;
          font-weight: 800;
          font-size: 17px;
          margin-bottom: 6px;
        }
        .a11y-principles span {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.55;
        }
        @media (max-width: 600px) {
          .a11y-principles { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
