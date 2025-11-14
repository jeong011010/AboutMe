export interface Troubleshooting {
  problem: string
  solution: string
  beforeCode?: string
  afterCode?: string
  comparison?: string
  learnings: string[]
  images?: {
    before?: string
    after?: string
  }
}

export interface KeyFeature {
  title: string
  description: string
  troubleshooting?: Troubleshooting
  images?: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  overview: string
  tech: string[]
  github: string
  demo?: string
  color: string
  achievements?: string[]
  role?: string
  period?: string
  team?: string
  contributions?: string[] // 내가 기여한 부분 / 개발 주요사항
  keyFeatures?: KeyFeature[] // 핵심 기능 개발 부분 (1-2개)
  architecture?: {
    description: string
    diagram?: string
  }
  images?: {
    logo?: string
    thumbnail?: string // 프로젝트 카드용 대표 이미지
    heroSlides?: string[] // 상단 슬라이드 이미지
    screenshots?: string[] // 서비스 화면 이미지
    architecture?: string
  }
}

export const projects: Project[] = [
  {
    id: 'today-soonbap',
    name: '오늘 순밥',
    description: '순천향대학교 "천원의 아침밥" 실시간 재고, 메뉴 정보 제공 플랫폼',
    overview: '순천향대학교에서 매일 오전 한정 수량의 "천원의 아침밥"을 판매하지만, 실시간 재고를 확인할 수 없어 학생들이 헛걸음을 하는 경우가 많았습니다. 이를 해결하기 위해 학생들이 실시간 잔여 수량과 메뉴를 한눈에 확인할 수 있는 웹 서비스를 기획하고 개발했습니다.',
    tech: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind', 'zustand'],
    github: 'https://github.com/jeong011010',
    demo: 'https://1000meal.store',
    color: 'from-green-500 to-emerald-500',
    period: '2025.05 - 2025.09',
    team: 'FE 1 / BE 2 / PM 1 / DE 1',
    role: '프론트엔드 리더 / 팀 리더',
    contributions: [
      'App Router 기반 기능 모듈화 및 공통 UI·API 레이어 구축',
      '실시간 재고 데이터 업데이트를 위한 `fetch + no-store` 전략 설계',
      '관리자용 재고/메뉴 조정 UI 및 에러 핸들링 플로우 개발',
      'GA 기반 피크 타임 분석으로 서버 인스턴스 타입 변경 및 자동 정지 스케줄링 구현',
      'PWA 도입으로 모바일 앱처럼 사용 가능하도록 구현',
    ],
    achievements: [
      '첫 주 신규 방문자 600명',
      '주중 평균 200명 이상 재방문',
      '교내 언론·방송 인터뷰 진행',
      'GA 기반 트래픽 분석으로 서버 비용 최적화',
    ],
    keyFeatures: [
      {
        title: '실시간 재고 정보 제공 및 성능 최적화',
        description: '아침 시간대의 집중적인 트래픽을 고려하여 완전한 실시간성보다는 가볍고 빠른 사용자 경험이 중요하다고 판단했습니다. 단발 fetch + no-store 전략을 적용해 불필요한 리소스 사용을 줄이고, 사용자 행동을 통해 자연스럽게 최신 데이터를 갱신하도록 설계했습니다.',
        troubleshooting: {
          problem: '초기 구현 시 스크롤 애니메이션 구현 중 `scrollTop` 위치가 스크롤할 때마다 수정되어 빈번한 렌더링이 발생하는 문제가 발생했습니다.',
          solution: '빈번한 함수 호출을 방지하고 이벤트 호출을 제어하는 방법을 찾던 중 `throttle` 개념을 발견했습니다. 블로그를 참고하여 스크롤 시 0.3초마다 이벤트 함수를 호출하도록 `throttle`을 적용하여 빈번한 렌더링을 방지했습니다. 또한 이벤트 리스너 함수에 대한 조사 중 `passive option`에 대해 학습하고 이벤트 성능 개선에 대한 역할을 알게 되었습니다.',
          comparison: '이전 코드는 스크롤이 발생할 때마다 `state` 값이 변경되어 빈번한 렌더링이 발생했습니다. 하지만 `throttle` 적용 후에는 스크롤 시 0.3초마다만 함수가 호출되어 빈번한 렌더링이 방지되었습니다. throttle 적용 전 3초 동안 콘솔 메시지 약 60개 → throttle 적용 후 2초 동안 콘솔 메시지 약 20개로 대폭 감소했습니다.',
          learnings: [
            '이벤트 리스너 옵션 중 `passive option`에 대해 학습',
            '`throttle`과 `debounce`의 개념과 각각을 사용해야 하는 상황에 대해 이해',
            '성능 최적화를 위한 이벤트 핸들링 기법 습득',
          ],
        },
      },
      {
        title: 'Google Analytics 기반 서버 비용 최적화',
        description: 'Google Analytics를 도입하여 웹사이트 방문 데이터를 수집한 결과, 첫 주간 600명의 신규 유입을 얻었습니다. 트래픽 패턴을 분석하여 서버 인스턴스 타입을 t2.micro에서 t4g.nano로 변경하고, 낮 시간대의 사용량이 적은 시간을 파악하여 자동 정지 스케줄링을 구현했습니다.',
        images: [
          '/images/projects/오늘순밥/오늘순밥 GA보고서.png',
        ],
      },
    ],
    images: {
      heroSlides: [
        '/images/projects/오늘순밥/오늘순밥 카드뉴스-1.jpeg',
        '/images/projects/오늘순밥/오늘순밥 카드뉴스-2.jpeg',
        '/images/projects/오늘순밥/오늘순밥 카드뉴스-3.jpeg',
        '/images/projects/오늘순밥/오늘순밥 카드뉴스-4.jpeg',
        '/images/projects/오늘순밥/오늘순밥 카드뉴스-5.jpeg',
      ],
      screenshots: [
        '/images/projects/오늘순밥/오늘순밥 묵업.png',
        '/images/projects/오늘순밥/오늘순밥 묵업2.png',
      ],
    },
  },
  {
    id: 'wedit',
    name: 'Wedit',
    description: '결혼 준비를 내 마음대로 편집하다 — 예비부부를 위한 웨딩 통합 비교 플랫폼',
    overview: '결혼을 앞둔 예비부부들은 웨딩홀, 드레스, 메이크업, 스튜디오(일명 "스드메")를 각각 다른 플랫폼에서 검색해야 하며, 가격이 비공개이거나 상담을 받아야만 알 수 있는 구조 때문에 큰 피로감을 느끼고 있었습니다. "한 곳에서 가격을 비교하고, 상담·예약까지 한 번에 가능한 플랫폼"을 만들자는 목표로 Wedit 프로젝트를 시작했습니다.',
    tech: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind', 'zustand'],
    github: 'https://github.com/SEASONTHON/Wedit',
    demo: 'https://wedit.me',
    color: 'from-pink-500 to-rose-500',
    period: '2025.08 - 2025.09',
    team: 'FE 2 / BE 2 / PM 1 / DE 1',
    role: '프론트엔드 리더',
    contributions: [
      '전체 FE 아키텍처 설계 (App Router 기반 도메인 주도 구조, 글로벌 API/토큰 레이어 구축)',
      '커플 → 업체 → 계약 → 결제까지의 복잡한 도메인 UI/상태 플로우 구현',
      '통합 상태 관리 전략 수립 (zustand + Tanstack Query로 서버 상태 분리)',
      'AT/RT 토큰 및 재발급 로직(reissueOnce) 기반 하이브리드 CSR/SSR 아키텍처 개발',
      '업체 리스트, 계약 캘린더, 후기 시스템 등 실제 결제 및 운영 플로우에 맞춘 핵심 UI 기능 개발',
      'RN(Expo Router) 환경으로 동일 구조 포팅하여 모바일 앱 개발 진행',
    ],
    keyFeatures: [
      {
        title: '토큰 재발급 로직(reissueOnce) 구현',
        description: '다중 요청 상황에서도 하나의 refresh 요청만 발생하도록 토큰 재발급 로직을 직접 구현했습니다. 모든 API 요청은 글로벌 http client에서 가로채어 토큰 만료 감지 → 재발급 → 요청 재시도 과정을 거치도록 표준화했습니다.',
        troubleshooting: {
          problem: '초기 구현 시 로그인, 예약, 후기 작성 등에서 토큰 만료 시 여러 개의 refresh 요청이 동시에 발생하여 에러가 빈번하게 발생했습니다.',
          solution: '토큰 재발급 요청을 단일화하기 위해 `reissueOnce` 패턴을 구현했습니다. 첫 번째 요청이 토큰 만료를 감지하면 재발급 요청을 시작하고, 동시에 들어온 다른 요청들은 재발급이 완료될 때까지 대기하도록 처리했습니다.',
          comparison: '이전에는 각 API 요청이 독립적으로 토큰 만료를 처리하여 동시에 여러 refresh 요청이 발생했습니다. reissueOnce 적용 후에는 하나의 refresh 요청만 발생하고 나머지 요청은 완료를 기다린 후 재시도하도록 개선되어 에러율이 대폭 감소했습니다.',
          learnings: [
            '동시성 제어를 통한 API 요청 최적화 방법 학습',
            '토큰 기반 인증 시스템의 안정성 향상 기법 습득',
            '글로벌 인터셉터를 통한 공통 에러 핸들링 패턴 이해',
          ],
        },
      },
      {
        title: '사용자 테스트 기반 UX 개선',
        description: '디자이너와 함께 4개의 핵심 사용자 플로우(예약, 가격조회, 후기, 리뷰)를 선정해 6명의 실제 사용자를 대상으로 테스트를 진행했습니다. 테스트 결과를 바탕으로 날짜 선택의 인지 어려움, 가격 정보의 위계 문제, 후기 섹션의 시선 흐름 불명확 등의 개선점을 발견하고 해결했습니다.',
        images: [
          '/images/projects/wedit/UT기반 개선 내용 - 1.png',
          '/images/projects/wedit/UT기반 개선 내용 - 2.png',
          '/images/projects/wedit/UT기반 개선 내용 - 3.png',
          '/images/projects/wedit/UT기반 개선 내용 - 4.png',
          '/images/projects/wedit/UT기반 개선 내용 - 5.png',
        ],
      },
    ],
    achievements: [
      'Seasonthon 우수상 수상',
      '5일 만에 MVP 완성',
      '사용자 조사 기반 UX 설계',
      'FE 리팩토링으로 개발 시간 60% 단축',
      '표준화된 API 요청 플로우로 에러율 대폭 감소',
    ],
    architecture: {
      description: 'Next.js 15 (App Router) 기반 구조 위에 SSR + CSR 혼합 아키텍처를 설계하여, 초기 로딩 시간을 약 40% 개선했습니다. 각 섹션의 API를 services/ 계층에서 일관성 있게 관리하고, zustand와 tanstack-query를 조합해 서버 상태와 UI 상태를 분리했습니다.',
      diagram: '/images/projects/wedit/wedit-fe 아키텍쳐.png',
    },
    images: {
      heroSlides: [
        '/images/projects/wedit/wedit프로젝트배경.png',
        '/images/projects/wedit/wedit 핵심기능 소개.png',
      ],
      architecture: '/images/projects/wedit/wedit-fe 아키텍쳐.png',
    },
  },
  {
    id: 'wenixia',
    name: 'WeNixia',
    description: '순천향대학교 축제 정보 웹앱 플랫폼',
    overview: '순천향대학교 축제(2025 위닉시아)의 전반적인 부스, 타임테이블, 공지사항 등의 정보를 한곳에 모은 모바일 기반 웹앱입니다. 에브리타임 등에서 흩어져 있던 정보들을 모아 누구나 빠르게 확인하고, 탐색하고, 경험할 수 있도록 설계되었습니다.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit', 'Spring Boot'],
    github: 'https://github.com/jeong011010/WeNixia',
    demo: '',
    color: 'from-purple-500 to-indigo-500',
    period: '2025.04 - 2025.05',
    team: 'FE 1 / BE 1',
    role: '프론트엔드 개발',
    contributions: [
      'Next.js 14 App Router 기반 전체 페이지 및 기능 설계 및 구현',
      '모바일 우선 설계(Mobile-first) 기준 UI/UX 디자인 고도화',
      '타임테이블 페이지 DAY 1~3별 전체 공연 타임 블록 뷰 구현',
      '부스 페이지 동아리 부스, 푸드트럭, 플리마켓 필터링 및 상세 보기 기능',
      '"지금 이 시간" 기능: 현재 시간 기준 이전, 현재, 다음 공연 표시',
      'Google Analytics 기반 데이터 분석 및 실사용 성과 분석',
    ],
    keyFeatures: [
      {
        title: '모바일 최적화 및 사용자 경험 설계',
        description: '모든 UI는 모바일 우선 설계 기준으로 구성되었습니다. 최대 폭 480px 기준에 맞춰 손쉬운 터치, 스크롤, 시인성을 고려하였고, 각 컴포넌트는 반응형으로 제작되었습니다. 직관적인 타임블록과 카테고리 필터링으로 사용자 흐름을 유지하여 평균 6페이지 이상 탐색을 유도했습니다.',
      },
      {
        title: '실서비스 운영 및 성과 분석',
        description: '축제 기간 동안 실제 운영된 서비스로, 총 2,888명의 사용자와 17,637회의 페이지뷰를 기록했습니다. Google Analytics를 활용하여 사용자 행동을 분석하고, 평균 참여 시간 1분 12초, 이탈률 약 39%의 우수한 성과를 달성했습니다. 이를 통해 기획-개발-배포 전과정 역량을 입증했습니다.',
        images: [
          '/images/projects/wenixia/weNixia GA보고서.png',
        ],
      },
    ],
    achievements: [
      '총 사용자 수 2,888명',
      '총 페이지뷰 17,637회',
      '평균 참여 시간 1분 12초',
      '이탈률 약 39% (우수한 수준)',
      '실제 축제 기간 동안 운영된 실서비스',
    ],
    images: {
      screenshots: [
        '/images/projects/wenixia/weNixia 서비스화면 - 1.png',
        '/images/projects/wenixia/weNixia 서비스화면 - 2.jpg',
        '/images/projects/wenixia/weNixia 서비스화면 - 3.jpg',
      ],
    },
  },
  {
    id: 'climbmate',
    name: 'ClimbMate',
    description: 'AI 기반 클라이밍 문제 분석 웹서비스',
    overview: '볼더링 벽 사진만 찍으면 AI가 홀드를 감지하고, 문제를 분류하고, 난이도와 유형을 분석하는 웹서비스입니다. YOLOv8-seg로 홀드를 자동 감지하고, CLIP AI로 색상을 분류하며, GPT-4 Vision으로 한국어 분석 결과를 제공합니다. FastAPI + Celery + Redis를 활용한 비동기 처리와 실시간 진행률 표시를 구현했습니다.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Celery', 'Redis', 'YOLOv8', 'CLIP', 'GPT-4'],
    github: 'https://github.com/jeong011010/climbmate-ai',
    demo: 'https://climbmate.store',
    color: 'from-blue-500 to-cyan-500',
    period: '2025.01 - 2025.11',
    team: '개인 프로젝트',
    role: '풀스택 개발',
    contributions: [
      'React + TypeScript 기반 프론트엔드 개발 및 PWA 모바일 최적화',
      'FastAPI 백엔드 아키텍처 설계 및 API 엔드포인트 구현',
      'Celery + Redis를 활용한 비동기 작업 큐 시스템 구축',
      'YOLOv8-seg 모델을 활용한 홀드 자동 감지 기능 구현',
      'CLIP AI 모델을 활용한 10가지 색상 자동 분류 기능 구현',
      'GPT-4 Vision API 통합 및 한국어 분석 결과 생성',
      '실시간 진행률 표시를 위한 폴링 시스템 구현',
      'SQLite 데이터베이스 설계 및 피드백 시스템 구현',
    ],
    keyFeatures: [
      {
        title: 'AI 기반 홀드 감지 및 색상 분석',
        description: 'YOLOv8-seg 모델을 활용하여 볼더링 벽 사진에서 홀드를 자동으로 감지하고, CLIP AI 모델로 10가지 색상(red, blue, green, yellow, purple, pink, gray, brown, white, black)을 정확하게 분류합니다. 같은 색상 홀드끼리 자동 그룹화하여 최소 3개 이상의 홀드로 구성된 문제를 인식합니다.',
      },
      {
        title: '비동기 처리 및 실시간 진행률 표시',
        description: 'FastAPI + Celery + Redis를 활용한 비동기 작업 큐 시스템을 구축하여 AI 모델 처리 시간이 오래 걸리는 작업을 백그라운드에서 처리합니다. 폴링 방식을 통해 사용자에게 세분화된 진행률(0% → 10% → 30% → 50% → 70% → 95% → 100%)을 실시간으로 표시하여 사용자 경험을 개선했습니다.',
      },
      {
        title: 'GPT-4 Vision 기반 문제 분석',
        description: 'GPT-4 Vision API를 통합하여 각 문제별로 난이도(V0-V10), 유형(dynamic, static, crimp, sloper, balance 등), 상세 분석, 실용적 팁을 한국어로 제공합니다. 홀드 간격, 크기, 배치를 기반으로 기술적 분석과 코어 활용, 모멘텀 사용 등 구체적인 조언을 제공합니다.',
      },
    ],
    achievements: [
      '학술제 출품',
      'YOLO + CLIP + GPT-4 통합 AI 시스템 구축',
      '비동기 작업 큐 시스템으로 안정적인 백그라운드 처리',
      'PWA 모바일 최적화 및 오프라인 캐싱',
      '실시간 진행률 표시로 사용자 경험 개선',
    ],
    architecture: {
      description: '브라우저에서 이미지를 업로드하면 FastAPI 서버가 작업을 Celery 큐에 등록하고, Celery Worker가 YOLO + CLIP + GPT-4를 순차적으로 실행하여 분석 결과를 생성합니다. Redis를 브로커로 사용하여 작업 상태를 관리하고, 프론트엔드는 폴링 방식으로 진행률을 확인합니다. SQLite 데이터베이스에 분석 결과와 사용자 피드백을 저장합니다.',
      diagram: '/images/projects/climbmate/climbmate 아키텍처.png',
    },
    images: {
      screenshots: [
        '/images/projects/climbmate/climbmate 서비스화면 - 1.png',
        '/images/projects/climbmate/climbmate 서비스화면 - 2.png',
        '/images/projects/climbmate/climbmate 서비스화면 - 3.png',
      ],
      architecture: '/images/projects/climbmate/climbmate 아키텍처.png',
    },
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
