# OneBite Exam - React Study Project

React 19, TypeScript, Vite를 기반으로 한 학습 프로젝트입니다.

## 기술 스택

### Core

- **React 19.1.0** - 최신 React 버전
- **TypeScript 5.8.3** - 타입 안정성
- **Vite 6.3.5** - 빠른 빌드 도구

### Styling

- **Tailwind CSS v4.2.1** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - 재사용 가능한 컴포넌트 라이브러리
- **next-themes** - 다크 모드 지원

### State Management

- **Zustand 5.0.11** - 경량 상태 관리 라이브러리
  - immer 미들웨어 - 불변성 관리
  - persist 미들웨어 - 상태 영속화
  - devtools 미들웨어 - Redux DevTools 통합
  - subscribeWithSelector - 선택적 상태 구독

### Routing

- **React Router v7.13.1** - SPA 라우팅

### UI Components

- **Radix UI** - 접근성 기반 헤드리스 UI 컴포넌트
- **Lucide React** - 아이콘 라이브러리
- **Embla Carousel** - 캐러셀 컴포넌트
- **Sonner** - 토스트 알림

### Development Tools

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포매팅
- **TypeScript ESLint** - TypeScript 린팅

## 프로젝트 구조(계속 변경 예정)

```
onebite-exam/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── store/          # Zustand 상태 관리
│   ├── routes/         # 라우트 설정
│   └── ...
├── public/             # 정적 파일
└── ...
```

## 학습 내용

### ✅ 완료된 학습

1. **Tailwind CSS v4** - 유틸리티 CSS 기본 설정 및 실습
2. **shadcn/ui** - 컴포넌트 라이브러리 통합 및 주요 컴포넌트 실습
3. **React Router v7** - 라우팅 설정 및 구조 구현
4. **Zustand** - 상태 관리 라이브러리 통합 및 카운터 실습
5. **Zustand 미들웨어** - immer, persist, devtools, subscribeWithSelector 적용

📝 학습 블로그
React를 학습하면서 정리한 내용을 블로그에 기록하고 있습니다.

- [[React] 전역 상태 관리와 Zustand](https://velog.io/@melcoding/react-zustand)
- [[React] Zustand 주요 미들웨어 가이드](https://velog.io/@melcoding/react-zustand-middleware)

📌 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Shadcn/ui 공식 문서](https://ui.shadcn.com/)
