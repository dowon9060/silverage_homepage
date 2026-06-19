import { Link } from 'react-router-dom'
import { features } from '../data/features.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner scroll-reveal">
        <div className="foot-brand">
          <div className="brand">
            <img src="/silverlogo.png" alt="실세 로고" />
            <div>
              <strong>실세 (Silse)</strong>
              <span>이제는 우리가 실세</span>
            </div>
          </div>
          <p>
            동네 새 친구 · 취미 함께하기 · 커피 한잔 소통.<br />
            실버세대를 위한 따뜻한 일상 슈퍼앱.
          </p>
        </div>

        <div className="foot-links">
          <div>
            <h5>실세 안내</h5>
            <Link to={{ pathname: '/', hash: '#background' }}>실세 소개</Link>
            <Link to={{ pathname: '/', hash: '#features' }}>주요 기능</Link>
            <Link to="/accessibility">시니어 편의성</Link>
          </div>
          <div>
            <h5>주요 기능</h5>
            {features.map((f) => (
              <Link key={f.slug} to={`/features/${f.slug}`}>{f.menuLabel}</Link>
            ))}
          </div>
          <div>
            <h5>고객 지원</h5>
            <Link to={{ pathname: '/', hash: '#cta' }}>앱 다운로드</Link>
            <a href="mailto:contact@silse.app">문의 이메일</a>
            <Link to={{ pathname: '/', hash: '#cta' }}>이용 가이드</Link>
          </div>
        </div>
      </div>

      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} Silse. All rights reserved.</span>
        <span>시니어의 따뜻한 하루를 응원합니다.</span>
      </div>

      <style>{`
        .footer {
          background: #0F172A;
          color: #94A3B8;
          padding: 72px 0 32px;
          margin-top: 0;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .foot-brand .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .foot-brand .brand img {
          width: 48px; height: 48px;
          border-radius: 12px;
        }
        .foot-brand strong {
          display: block;
          font-size: 18px;
          font-weight: 800;
          color: #fff;
        }
        .foot-brand span {
          font-size: 14px;
          color: var(--brand-300);
        }
        .foot-brand p {
          margin-top: 16px;
          color: #94A3B8;
          font-size: 15px;
          line-height: 1.7;
        }

        .foot-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .foot-links h5 {
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .foot-links a {
          display: block;
          padding: 6px 0;
          color: #94A3B8;
          font-size: 15px;
          transition: color .15s ease;
          text-decoration: none;
        }
        .foot-links a:hover { color: var(--brand-300); }

        .foot-bottom {
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 13px;
          color: #64748B;
        }

        @media (max-width: 800px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .foot-links { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </footer>
  )
}
