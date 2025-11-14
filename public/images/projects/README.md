# 프로젝트 이미지 폴더

이 폴더에 프로젝트 관련 이미지를 저장하세요.

## 폴더 구조

```
public/images/projects/
├── today-soonbap/
│   ├── logo.png (또는 logo.svg)
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── architecture.png
├── wedit/
│   ├── logo.png
│   ├── screenshot1.png
│   └── architecture.png
└── climbmate/
    └── ...
```

## 사용 방법

`src/data/projects.ts`에서 이미지 경로를 다음과 같이 설정하세요:

```typescript
images: {
  logo: '/images/projects/today-soonbap/logo.png',
  screenshots: [
    '/images/projects/today-soonbap/screenshot1.png',
    '/images/projects/today-soonbap/screenshot2.png',
  ],
  architecture: '/images/projects/today-soonbap/architecture.png',
}
```

## 이미지 형식

- 로고: PNG, SVG 권장
- 스크린샷: PNG, JPG
- 아키텍처 다이어그램: PNG, SVG

