# 실세 (Silse) - 실버세대 생활 슈퍼앱 소개 홈페이지

> "이제는 우리가 실세"
>
> 친구와 안부 나누고, 좋아하는 주제로 모이는 시니어 전용 앱.

## 기술 스택

- **React 18** + **Vite 5**
- 순수 CSS (디자인 토큰 기반)
- Pretendard / Noto Sans KR 웹폰트

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 접속

## 빌드

```bash
npm run build
npm run preview
```

## 디렉터리 구조

```
.
├── index.html
├── public/                # 로고 및 앱 스크린샷 자산
│   ├── silverlogo.png
│   ├── home.png
│   ├── community.png
│   ├── buy.png
│   └── freand.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    └── components/
        ├── Icon.jsx          # SVG 아이콘 세트
        ├── Header.jsx
        ├── Hero.jsx
        ├── Background.jsx    # 왜 실세인가요?
        ├── ValueProps.jsx    # 3가지 따뜻한 연결
        ├── Features.jsx      # 친구/모임/커뮤니티/공구
        ├── Accessibility.jsx # 시니어 친화 접근성
        ├── CTA.jsx
        └── Footer.jsx
```

## 디자인 시스템

- **메인 컬러**: `#87CEEB` (하늘색)
- **보조 컬러**: `#F97316` (오렌지), `#EF4444` (강조 빨강)
- **타이포**: 시니어 가독성을 위해 본문 18px 기준, 큰 라인 높이
- **접근성**: 명암비 4.5:1 이상, 큰 터치 영역, 시멘틱 HTML

## 라이선스

내부 기획용 데모.
