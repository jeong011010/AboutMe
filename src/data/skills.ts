import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiGithub,
  SiGoogleanalytics,
  SiAmazonaws,
  SiFigma,
} from 'react-icons/si'

export interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  capabilities: string[]
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: SiReact,
    color: 'text-blue-400',
    capabilities: [
      '함수형 컴포넌트 & React Hooks',
      'zustand, Tanstack Query 상태 관리',
      '커스텀 훅을 통한 로직 재사용',
      'reissueOnce 패턴 구현',
    ],
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-500',
    capabilities: [
      '유니온/인터섹션 타입 연산자',
      '유틸리티 타입 & 고급 타입',
      '타입 안정성 확보',
    ],
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    capabilities: [
      'ES6+ 문법 활용',
      'async/await 비동기 처리',
      'IntersectionObserver API',
      'localStorage 데이터 관리',
    ],
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'text-gray-100',
    capabilities: [
      'App Router 기반 SSR + CSR',
      'middleware 리다이렉트 & 인증',
      '서비스 레이어 분리',
    ],
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    capabilities: [
      '유틸리티 클래스 기반 개발',
      '반응형 디자인',
      '모바일 우선 설계',
    ],
  },
  {
    name: 'Git & GitHub',
    icon: SiGithub,
    color: 'text-gray-100',
    capabilities: [
      'Git 버전 관리 & 브랜치 전략',
      '코드 리뷰',
      'git-flow',
      'GitHub Actions CI/CD',
    ],
  },
  {
    name: 'zustand',
    icon: SiReact,
    color: 'text-orange-400',
    capabilities: [
      '전역 상태 관리',
      '서버 상태와 UI 상태 분리',
    ],
  },
  {
    name: 'AWS EC2',
    icon: SiAmazonaws,
    color: 'text-orange-400',
    capabilities: [
      'EC2 인스턴스 배포',
      'Nginx 리버스 프록시',
      '트래픽 분석 기반 최적화',
    ],
  },
  {
    name: 'Google Analytics',
    icon: SiGoogleanalytics,
    color: 'text-orange-400',
    capabilities: [
      '사용자 행동 분석',
      '트래픽 패턴 파악',
      '서버 비용 최적화',
    ],
  },
  {
    name: 'Python',
    icon: SiPython,
    color: 'text-blue-300',
    capabilities: [
      'FastAPI 백엔드 개발',
    ],
  },
  {
    name: 'Figma',
    icon: SiFigma,
    color: 'text-purple-400',
    capabilities: [
      'UI/UX 디자인',
      '프로토타이핑',
    ],
  },
]
