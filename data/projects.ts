/**
 * @fileoverview Project data structure and helper functions
 * Contains TypeScript types/interfaces and data for all 18 portfolio projects
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Project type classification
 */
export enum ProjectType {
  FULL_STACK_MOBILE = "full-stack-mobile",
  DESKTOP = "desktop",
  INFRASTRUCTURE = "infrastructure",
  CHROME_EXTENSION = "chrome-extension",
  IOS = "ios",
  NPM_PACKAGE = "npm-package",
  WEB = "web",
  WEBRTC = "webrtc",
  UNITY_WEBGL = "unity-webgl",
  FULL_STACK_WEB = "full-stack-web",
}

/**
 * Project status
 */
export enum ProjectStatus {
  PRODUCTION = "production",
  APP_STORE_REVIEW = "app-store-review",
  ARCHIVE = "archive",
  DEVELOPMENT = "development",
}

// ============================================================================
// INTERFACES
// ============================================================================

/**
 * Technology stack breakdown
 */
export interface TechStack {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  desktop: string[];
}

/**
 * Project feature
 */
export interface Feature {
  title: string;
  description: string;
}

/**
 * Code statistics
 */
export interface CodeStats {
  total: number;
  frontend?: number;
  backend?: number;
  tests?: number;
}

/**
 * Project achievement/highlight
 */
export interface Achievement {
  title: string;
  description: string;
  icon?: string;
  metric?: string; // e.g., "MAU 500+", "-3,341 LOC", "96.8% Coverage"
}

/**
 * Project screenshot
 */
export interface Screenshot {
  filename: string;
  alt: string;
  size?: string;
}

/**
 * Project links
 */
export interface Links {
  github?: string;
  live?: string;
  appStore?: string;
  chromeWebStore?: string;
  npm?: string;
}

/**
 * Complete project interface
 */
export interface Project {
  id: string;
  name: string;
  emoji: string;
  type: ProjectType;
  status: ProjectStatus;
  period: string;
  role: string;
  shortDescription: string;
  description: string;
  features: Feature[];
  techStack: TechStack;
  codeStats?: CodeStats;
  achievements?: Achievement[];
  screenshots?: Screenshot[];
  links: Links;
}

// ============================================================================
// PROJECT DATA
// ============================================================================

export const projectsData: Project[] = [
  // ============================================================================
  // PROFESSIONAL PROJECTS (회사 프로젝트)
  // ============================================================================

  // 1. AZFlow - 스타트업 투자 관리 플랫폼
  {
    id: "azflow",
    name: "AZFlow",
    emoji: "💼",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.ARCHIVE,
    period: "2024.12 - 2025.09",
    role: "수석연구원 (애즈플로우)",
    shortDescription: "스타트업 투자 관리 플랫폼",
    description:
      "스타트업과 투자사를 위한 통합 투자 관리 플랫폼입니다. 투자사용 대시보드, 스타트업용 대시보드, AI 기반 데이터 검색 등 마이크로서비스 아키텍처로 구성되어 있습니다.",
    features: [
      {
        title: "투자사 대시보드",
        description: "포트폴리오 모니터링 및 딜 관리",
      },
      {
        title: "스타트업 대시보드",
        description: "사업 정보, 팀 관리, 재무 시각화, PDF 리포트",
      },
      {
        title: "AI 데이터 검색",
        description: "RAG 기반 스타트업/투자 정보 지능형 검색",
      },
      {
        title: "문서 관리",
        description: "IR 자료, 계약서 등 문서 관리 및 공유",
      },
    ],
    techStack: {
      frontend: [
        "React",
        "Vite",
        "TypeScript",
        "Radix-UI",
        "TailwindCSS",
        "Zustand",
        "Recharts",
      ],
      backend: ["NestJS", "TypeORM", "MySQL", "FastAPI", "Python"],
      infrastructure: ["AWS S3", "AWS SES", "JWT", "Swagger"],
      desktop: [],
    },
    achievements: [
      {
        title: "마이크로서비스 아키텍처",
        description: "투자사/스타트업 분리된 독립 서비스",
        icon: "🏗️",
        metric: "마이크로서비스 3개 독립 배포",
      },
      {
        title: "AI 통합",
        description: "RAG 기반 지능형 검색 시스템 구축",
        icon: "🤖",
        metric: "Swagger API 문서 100% 자동화",
      },
    ],
    links: {
      live: "https://azflow.net",
    },
  },

  // 2. finiroom
  {
    id: "finiroom",
    name: "finiroom",
    emoji: "📐",
    type: ProjectType.IOS,
    status: ProjectStatus.ARCHIVE,
    period: "2021.09 - 2024.08",
    role: "선임연구원 (비주얼신) - 웹/앱 개발",
    shortDescription: "LiDAR 기반 3D 공간 스캐닝 및 인테리어 앱",
    description:
      "iPhone의 LiDAR 센서를 활용하여 실내 공간을 3D로 스캔하고, 가구 배치 시뮬레이션 및 인테리어 디자인을 지원하는 iOS 앱입니다. ARKit/RealityKit 기반의 iOS 네이티브 앱과 Unity 3D 엔진 간의 브릿지 통신을 담당하며, 웹 서비스 및 API 연동 개발을 수행했습니다.",
    features: [
      {
        title: "LiDAR 3D 스캔",
        description: "iPhone LiDAR 센서 활용 공간 3D 모델링",
      },
      {
        title: "AR 가구 배치",
        description: "증강현실로 가구 배치 시뮬레이션",
      },
      {
        title: "도면 생성",
        description: "스캔 데이터 기반 2D/3D 도면 자동 생성",
      },
      {
        title: "인테리어 추천",
        description: "AI 기반 인테리어 스타일 추천",
      },
    ],
    techStack: {
      frontend: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "ARKit",
        "RealityKit",
        "SceneKit",
      ],
      backend: ["Node.js", "Express", "MongoDB"],
      infrastructure: ["AWS S3", "CloudFront", "Firebase"],
      desktop: [],
    },
    achievements: [
      {
        title: "App Store 출시",
        description: "iOS 앱스토어 정식 출시 및 운영",
        icon: "📱",
        metric: "App Store 정식 출시",
      },
      {
        title: "LiDAR 기술 적용",
        description: "iPhone Pro 시리즈 LiDAR 센서 활용",
        icon: "📡",
        metric: "LiDAR 공간 정확도 95%+",
      },
    ],
    links: {
      appStore: "https://apps.apple.com/app/finiroom",
    },
  },

  // 3. glinda AIMI
  {
    id: "glinda-aimi",
    name: "glinda AIMI",
    emoji: "🎮",
    type: ProjectType.UNITY_WEBGL,
    status: ProjectStatus.ARCHIVE,
    period: "2023.01 - 2024.08",
    role: "선임연구원 (비주얼신) - 웹 프론트엔드 개발",
    shortDescription: "Unity WebGL 기반 3D 가상 쇼룸",
    description:
      "Unity WebGL과 웹 기술을 결합한 인터랙티브 3D 가상 쇼룸 플랫폼입니다. Unity 팀과 협업하여 React/TypeScript 기반 웹 프론트엔드를 개발하고, Unity WebGL과의 양방향 JavaScript 통신 인터페이스를 구현했습니다.",
    features: [
      {
        title: "3D 가상 공간",
        description: "Unity WebGL 기반 몰입형 3D 환경",
      },
      {
        title: "웹 연동",
        description: "Unity-JavaScript 양방향 통신",
      },
      {
        title: "제품 인터랙션",
        description: "3D 제품 회전, 확대 및 상세 정보 확인",
      },
      {
        title: "반응형 UI",
        description: "데스크톱/모바일 최적화 인터페이스",
      },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Unity WebGL", "Three.js"],
      backend: ["Node.js", "Express"],
      infrastructure: ["AWS", "CloudFront", "S3"],
      desktop: [],
    },
    achievements: [
      {
        title: "정식 서비스 런칭",
        description: "상용 서비스로 정식 운영",
        icon: "🌐",
        metric: "상용 서비스 런칭 및 B2B 고객 확보",
      },
    ],
    links: {},
  },

  // 4. KnowRecorder
  {
    id: "knowrecorder",
    name: "KnowRecorder",
    emoji: "🎬",
    type: ProjectType.IOS,
    status: ProjectStatus.ARCHIVE,
    period: "2016.09 - 2018.07",
    role: "연구원 (케이라운지)",
    shortDescription: "플립러닝용 강의 녹화 iOS 앱",
    description:
      "교육자가 플립러닝(Flipped Learning) 콘텐츠를 쉽게 제작할 수 있는 iOS 앱입니다. PDF 문서에 음성과 드로잉을 녹화하여 인터랙티브한 학습 자료를 만들 수 있습니다.",
    features: [
      {
        title: "PDF 기반 녹화",
        description: "PDF 슬라이드에 음성과 드로잉 녹화",
      },
      {
        title: "실시간 드로잉",
        description: "다양한 펜 도구로 화면 위에 필기",
      },
      {
        title: "영상 내보내기",
        description: "녹화 콘텐츠를 영상 파일로 변환",
      },
      {
        title: "LMS 연동",
        description: "KnowLounge 플랫폼과 자동 동기화",
      },
    ],
    techStack: {
      frontend: ["Swift", "UIKit", "AVFoundation", "Core Graphics"],
      backend: [],
      infrastructure: ["AWS S3"],
      desktop: [],
    },
    achievements: [
      {
        title: "App Store 출시",
        description: "교육용 앱으로 정식 출시",
        icon: "📱",
      },
      {
        title: "플립러닝 선구자",
        description: "국내 플립러닝 앱 시장 초기 진입",
        icon: "🎓",
      },
    ],
    links: {},
  },

  // 5. KnowLounge
  {
    id: "knowlounge",
    name: "KnowLounge",
    emoji: "📚",
    type: ProjectType.IOS,
    status: ProjectStatus.ARCHIVE,
    period: "2016.06 - 2018.07",
    role: "연구원 (케이라운지)",
    shortDescription: "실시간 화이트보드 기반 교육 플랫폼",
    description:
      "실시간 화이트보드 공유와 양방향 소통이 가능한 온라인 교육 플랫폼의 iOS 앱입니다. WebSocket 기반 실시간 드로잉 동기화와 음성/영상 통화 기능을 제공합니다.",
    features: [
      {
        title: "실시간 화이트보드",
        description: "WebSocket 기반 실시간 드로잉 동기화",
      },
      {
        title: "화상 수업",
        description: "WebRTC 기반 실시간 화상 통화",
      },
      {
        title: "수업 녹화",
        description: "화이트보드와 음성을 함께 녹화",
      },
      {
        title: "학습 관리",
        description: "과제 제출, 성적 관리 기능",
      },
    ],
    techStack: {
      frontend: ["Swift", "UIKit", "WebSocket", "WebRTC"],
      backend: [],
      infrastructure: ["AWS"],
      desktop: [],
    },
    achievements: [
      {
        title: "실시간 동기화",
        description: "수십 명 동시 접속 화이트보드 구현",
        icon: "🔄",
      },
    ],
    links: {},
  },

  // 6. Gotalk
  {
    id: "gotalk",
    name: "Gotalk",
    emoji: "🗣️",
    type: ProjectType.WEBRTC,
    status: ProjectStatus.ARCHIVE,
    period: "2017.03 - 2018.07",
    role: "연구원 (케이라운지)",
    shortDescription: "WebRTC 기반 실시간 화상 교육 웹앱",
    description:
      "WebRTC를 활용한 실시간 1:1 화상 영어 교육 웹 애플리케이션입니다. 화상 통화 중 교재 공유, 실시간 피드백, 수업 녹화 기능을 제공합니다.",
    features: [
      {
        title: "1:1 화상 통화",
        description: "WebRTC 기반 고품질 화상 통화",
      },
      {
        title: "교재 공유",
        description: "수업 중 교재 화면 실시간 공유",
      },
      {
        title: "실시간 피드백",
        description: "수업 중 텍스트/이모지 피드백",
      },
      {
        title: "수업 녹화",
        description: "수업 내용 녹화 및 복습 기능",
      },
    ],
    techStack: {
      frontend: ["React", "JavaScript", "WebRTC", "Socket.io"],
      backend: ["Node.js", "Express", "MongoDB"],
      infrastructure: ["AWS EC2", "TURN/STUN Server"],
      desktop: [],
    },
    achievements: [
      {
        title: "WebRTC 구현",
        description: "브라우저 기반 실시간 화상통화 구현",
        icon: "📹",
      },
    ],
    links: {},
  },

  // 7. 러닝포털 (청담어학원, 현 크레버스)
  {
    id: "learning-portal",
    name: "러닝포털",
    emoji: "🏫",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.ARCHIVE,
    period: "2018.12 - 2021.07",
    role: "대리 (청담어학원, 현 크레버스)",
    shortDescription: "학생 어학 교육 웹서비스 및 모바일 앱",
    description:
      "청담어학원(현 크레버스)의 학생 어학 교육 플랫폼입니다. 러닝포털(학생 숙제/활동 관리 포털), i-Learning(Writing/Listening 등 실전 학습 수행 웹서비스), 청담 올림(학부모 등하원 관리/안내문/교재·학원비 납부) 등 복합 서비스를 Vue 2 웹과 Android/iOS 네이티브 웹앱으로 개발·운영했습니다.",
    features: [
      {
        title: "러닝포털",
        description:
          "학생이 수업 후 숙제 확인 및 활동을 수행하는 포털 웹사이트 및 모바일 앱",
      },
      {
        title: "i-Learning",
        description:
          "Writing, Listening 등 마이크·키보드를 활용한 실전 숙제 수행 웹서비스",
      },
      {
        title: "청담 올림",
        description:
          "학부모 자녀 등하원 관리, 안내문 수신, 교재 및 학원비 납부 서비스",
      },
    ],
    techStack: {
      frontend: ["Vue 2", "JavaScript", "Android (Native)", "iOS (Native)"],
      backend: ["Kotlin", "Spring Boot", "MSSQL"],
      infrastructure: ["AWS"],
      desktop: [],
    },
    achievements: [
      {
        title: "멀티 플랫폼",
        description: "Web + Android + iOS 네이티브 웹앱 동시 운영",
        icon: "📱",
        metric: "Web + Android + iOS 멀티플랫폼",
      },
      {
        title: "어학 교육 서비스",
        description: "청담어학원 학생·학부모 대상 종합 교육 플랫폼",
        icon: "🎓",
        metric: "학생/학부모 대상 3개 서비스 동시 운영",
      },
    ],
    links: {},
  },

  // ============================================================================
  // PERSONAL / FREELANCE PROJECTS (개인 & 외주 프로젝트)
  // ============================================================================

  // 1. 빈자리 (Vinjari)
  {
    id: "vinjari",
    name: "빈자리 (Vinjari)",
    emoji: "🏕️",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    period: "2025.12 - 현재",
    role: "Flutter 모바일 개발자 (프리랜서)",
    shortDescription: "캠핑장 예약 플랫폼 하이브리드 앱",
    description:
      "캠핑장 빈자리 실시간 확인 및 예약이 가능한 모바일 앱입니다. WebView-Native Bridge 아키텍처로 기존 웹 서비스(Next.js)를 Flutter 앱으로 래핑하면서, 네이티브 기능(푸시 알림, 소셜 로그인, 본인인증, 위치 정보)을 Bridge를 통해 통합했습니다. Clean Architecture와 TDD를 적용하여 1,156개 이상의 테스트를 작성했습니다.",
    features: [
      {
        title: "WebView-Native Bridge",
        description: "네이티브 기능과 웹 간 양방향 통신 아키텍처 설계 및 구현",
      },
      {
        title: "소셜 로그인",
        description: "Apple, 카카오, 네이버 소셜 로그인 + PASS 본인인증",
      },
      {
        title: "푸시 알림",
        description: "FCM 기반 전체/개인 푸시 알림 시스템",
      },
      {
        title: "디바이스 자동 등록",
        description: "앱 설치 시 서버에 디바이스 자동 등록 (TDD 기반)",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart", "Clean Architecture", "GetIt"],
      backend: [],
      infrastructure: ["Firebase", "FCM", "WebView Bridge"],
      desktop: [],
    },
    codeStats: {
      total: 25000,
      frontend: 25000,
      tests: 1156,
    },
    achievements: [
      {
        title: "WebView Bridge 아키텍처",
        description: "Native-Web 하이브리드 통신 설계 및 구현",
        icon: "🌉",
        metric: "Bridge 코드 -3,341줄 최적화",
      },
      {
        title: "Clean Architecture A-",
        description: "TDD 기반 체계적 아키텍처 (1,156+ 테스트)",
        icon: "🏗️",
        metric: "Clean Architecture A- 등급",
      },
      {
        title: "대규모 리팩토링",
        description: "Bridge 코드 -3,341줄 최적화",
        icon: "♻️",
        metric: "1,156개 테스트 작성 (TDD)",
      },
    ],
    links: {},
  },

  // 2. Cookting
  {
    id: "cookting",
    name: "Cookting",
    emoji: "🍳",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    period: "2024.08 - 현재",
    role: "1인 풀스택 개발",
    shortDescription: "AI 기반 냉장고 재료 인식 레시피 추천 앱",
    description:
      "냉장고 속 재료를 AI가 자동으로 인식하고, 보유한 재료로 만들 수 있는 최적의 레시피를 추천해주는 iOS 앱입니다. Claude AI를 활용한 자연어 레시피 생성과 실시간 재료 관리 기능을 제공합니다.",
    features: [
      {
        title: "AI 재료 인식",
        description: "카메라로 냉장고를 촬영하면 AI가 재료를 자동 인식",
      },
      {
        title: "스마트 레시피 추천",
        description:
          "GPT-4 + Gemini Pro 하이브리드 AI가 보유 재료 기반 최적의 레시피를 생성",
      },
      {
        title: "재료 유통기한 관리",
        description: "재료별 유통기한 알림 및 관리 시스템",
      },
      {
        title: "레시피 저장 및 공유",
        description: "마음에 드는 레시피 저장 및 소셜 공유",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart", "Riverpod", "GetIt"],
      backend: ["NestJS", "Supabase", "PostgreSQL", "Edge Functions"],
      infrastructure: [
        "Supabase Auth",
        "Supabase Storage",
        "Supabase Realtime",
        "Docker",
      ],
      desktop: [],
    },
    codeStats: {
      total: 15000,
      frontend: 12000,
      backend: 3000,
    },
    achievements: [
      {
        title: "App Store 출시",
        description: "iOS 앱스토어 정식 출시 및 운영 중",
        icon: "📱",
      },
      {
        title: "AI 통합",
        description: "GPT-4 + Gemini Pro 하이브리드 AI 레시피 추천 시스템",
        icon: "🤖",
      },
    ],
    links: {
      github: "https://github.com/jellive/cookting",
    },
  },

  // 3. Time Letter
  {
    id: "time-letter",
    name: "Time Letter",
    emoji: "💌",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.DEVELOPMENT,
    period: "2025.10 - 현재",
    role: "React Native 개발자",
    shortDescription: "타임캡슐 일기 앱 (React Native + Next.js 웹)",
    description:
      "미래의 나에게 편지를 보내는 타임캡슐 일기 앱입니다. React Native(Expo)로 모바일 앱을, Next.js로 웹 앱을 동시에 개발하고 있으며, Turborepo 모노레포 구조로 통합 관리합니다. ESLint 9.x, Sentry 크래시 리포팅, EAS Update OTA 배포 등 품질 인프라를 갖추었습니다.",
    features: [
      {
        title: "타임캡슐 편지",
        description: "미래 날짜를 지정하여 편지를 작성하고 열람",
      },
      {
        title: "OTA 업데이트",
        description:
          "EAS Update 기반 development/preview/production 3단계 배포",
      },
      {
        title: "크래시 리포팅",
        description: "Sentry + Error Boundary 기반 안정성 모니터링",
      },
      {
        title: "모노레포 구조",
        description: "Turborepo + pnpm workspace로 모바일/웹 통합 관리",
      },
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript", "Next.js"],
      backend: ["Supabase", "PostgreSQL"],
      infrastructure: ["Sentry", "EAS Update", "Turborepo", "pnpm"],
      desktop: [],
    },
    codeStats: {
      total: 18000,
      frontend: 16000,
      tests: 656,
    },
    achievements: [
      {
        title: "품질 인프라 100%",
        description: "ESLint 9.x + Sentry + EAS Update + Branch Coverage 82%",
        icon: "✅",
      },
      {
        title: "모노레포 전환",
        description: "React Native + Next.js Turborepo 통합",
        icon: "📦",
      },
    ],
    links: {
      github: "https://github.com/jellive/time-letter",
    },
  },

  // 4. 커플 플래너
  {
    id: "couple-planner",
    name: "커플 플래너",
    emoji: "💕",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.DEVELOPMENT,
    period: "2025.12 - 현재",
    role: "1인 풀스택 개발",
    shortDescription: "커플 일정 및 기념일 공유 웹앱",
    description:
      "커플이 함께 일정과 기념일을 관리하고 공유할 수 있는 PWA 웹 애플리케이션입니다. Next.js 15와 Supabase를 활용하여 실시간 동기화와 Push 알림을 지원하며, 모바일 환경에서도 네이티브 앱처럼 사용할 수 있습니다.",
    features: [
      {
        title: "커플 일정 관리",
        description: "공유 캘린더로 함께 일정 등록 및 관리",
      },
      {
        title: "기념일 알림",
        description: "D-day 카운트다운 및 기념일 자동 알림",
      },
      {
        title: "PWA 지원",
        description: "모바일 홈 화면 추가로 네이티브 앱처럼 사용",
      },
      {
        title: "실시간 동기화",
        description: "Supabase Realtime으로 커플 간 실시간 데이터 동기화",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      backend: ["Supabase", "PostgreSQL", "Edge Functions"],
      infrastructure: ["Vercel", "Supabase Auth", "Web Push"],
      desktop: [],
    },
    achievements: [
      {
        title: "PWA 구현",
        description: "네이티브 앱 수준의 웹 앱 경험 제공",
        icon: "📱",
      },
    ],
    links: {
      github: "https://github.com/jellive/couple-planner",
    },
  },

  // 5. Jellmodoro
  {
    id: "jellmodoro",
    name: "Jellmodoro",
    emoji: "🍅",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.DEVELOPMENT,
    period: "2025.06 - 현재",
    role: "1인 개발",
    shortDescription: "미니멀한 포모도로 타이머 앱 (Flutter 리빌드)",
    description:
      "포모도로 기법을 적용한 미니멀 디자인의 타이머 앱입니다. 기존 Swift/SwiftUI 앱을 Flutter + NestJS 풀스택으로 리빌드 중이며, Clean Architecture와 TDD를 적용하고 있습니다.",
    features: [
      {
        title: "포모도로 타이머",
        description: "25분 집중 + 5분 휴식 사이클 관리",
      },
      {
        title: "집중 통계",
        description: "일간/주간/월간 집중 시간 통계 및 분석",
      },
      {
        title: "커스텀 타이머",
        description: "사용자 정의 시간 설정 가능",
      },
      {
        title: "크로스 플랫폼",
        description: "Flutter 기반 iOS/Android 동시 지원",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart", "Riverpod"],
      backend: ["NestJS", "TypeScript", "PostgreSQL"],
      infrastructure: ["Docker", "Firebase"],
      desktop: [],
    },
    codeStats: {
      total: 5000,
      frontend: 5000,
    },
    achievements: [
      {
        title: "Flutter 리빌드",
        description: "Swift → Flutter + NestJS 풀스택 전환",
        icon: "🔄",
      },
      {
        title: "Clean Architecture",
        description: "TDD 기반 체계적 아키텍처 적용",
        icon: "🏗️",
      },
    ],
    links: {
      github: "https://github.com/jellive/jellmodoro",
    },
  },

  // 7. Wecanner
  {
    id: "wecanner",
    name: "Wecanner",
    emoji: "📅",
    type: ProjectType.IOS,
    status: ProjectStatus.PRODUCTION,
    period: "2024.04 - 현재",
    role: "1인 개발",
    shortDescription: "요일별 할 일 관리 iOS 앱",
    description:
      "요일마다 반복되는 할 일을 간편하게 관리하는 iOS 앱입니다. 요일별 할 일 기록, 캘린더 기반 일정 관리, 여러 기기 간 자동 동기화, 위젯 지원 등의 기능을 제공합니다.",
    features: [
      {
        title: "요일별 할 일",
        description: "Weekly 뷰에서 요일마다 반복되는 할 일을 간단하게 기록",
      },
      {
        title: "캘린더 일정 관리",
        description: "특별한 날짜와 중요한 일정을 캘린더로 관리",
      },
      {
        title: "멀티 기기 동기화",
        description: "iPhone, iPad 등 여러 기기 간 자동 동기화",
      },
      {
        title: "위젯 지원",
        description: "앱을 열지 않고도 위젯에서 할 일 확인",
      },
    ],
    techStack: {
      frontend: ["Swift", "SwiftUI", "WidgetKit"],
      backend: [],
      infrastructure: ["CloudKit", "Core Data"],
      desktop: [],
    },
    codeStats: {
      total: 4000,
      frontend: 4000,
    },
    links: {
      appStore: "https://apps.apple.com/kr/app/wecanner/id6711342598",
      github: "https://github.com/jellive/wecanner",
    },
  },

  // 8. Dev Utils Hub
  {
    id: "dev-utils-hub",
    name: "Dev Utils Hub",
    emoji: "🛠️",
    type: ProjectType.DESKTOP,
    status: ProjectStatus.PRODUCTION,
    period: "2025.11 - 현재",
    role: "1인 개발",
    shortDescription: "개발자를 위한 올인원 유틸리티 데스크톱 앱",
    description:
      "개발 작업에서 자주 사용하는 다양한 유틸리티 기능들을 하나의 앱으로 통합했습니다. JSON 포맷터, Base64 인코더/디코더, UUID 생성기, 정규식 테스터 등 20개 이상의 도구를 제공합니다.",
    features: [
      {
        title: "JSON 포맷터/검증기",
        description: "JSON 데이터 자동 정렬 및 유효성 검사",
      },
      {
        title: "Base64 인코더/디코더",
        description: "텍스트 및 파일의 Base64 변환",
      },
      {
        title: "UUID/ULID 생성기",
        description: "다양한 형식의 고유 ID 생성",
      },
      {
        title: "정규식 테스터",
        description: "실시간 정규식 매칭 테스트 및 하이라이팅",
      },
      {
        title: "해시 생성기",
        description: "MD5, SHA-1, SHA-256 등 다양한 해시 생성",
      },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "TailwindCSS", "Radix UI"],
      backend: [],
      infrastructure: [],
      desktop: ["Electron"],
    },
    codeStats: {
      total: 8000,
      frontend: 7000,
    },
    achievements: [
      {
        title: "20+ 유틸리티",
        description: "개발자에게 필요한 다양한 도구 통합",
        icon: "🧰",
      },
      {
        title: "오프라인 지원",
        description: "인터넷 없이도 모든 기능 사용 가능",
        icon: "📴",
      },
    ],
    links: {
      github: "https://github.com/jellive/dev-utils-hub",
    },
  },

  // 9. Chzzk OBS Connector
  {
    id: "chzzk-obs",
    name: "Chzzk OBS Connector",
    emoji: "📺",
    type: ProjectType.DESKTOP,
    status: ProjectStatus.DEVELOPMENT,
    period: "2025.11 - 현재",
    role: "1인 개발",
    shortDescription: "치지직 스트리밍을 위한 OBS 연동 도구",
    description:
      "네이버 치지직(Chzzk) 플랫폼에서 스트리밍할 때 OBS Studio와 연동하여 채팅 오버레이, 알림 시스템, 방송 정보 표시 등의 기능을 제공하는 데스크톱 애플리케이션입니다.",
    features: [
      {
        title: "실시간 채팅 오버레이",
        description: "치지직 채팅을 OBS에 오버레이로 표시",
      },
      {
        title: "후원 알림",
        description: "치즈 후원 실시간 알림 및 TTS",
      },
      {
        title: "방송 정보 위젯",
        description: "시청자 수, 방송 시간 등 정보 표시",
      },
      {
        title: "커스텀 테마",
        description: "사용자 정의 가능한 오버레이 디자인",
      },
    ],
    techStack: {
      frontend: ["React", "TypeScript", "TailwindCSS"],
      backend: ["Node.js", "WebSocket"],
      infrastructure: [],
      desktop: ["Electron", "OBS WebSocket"],
    },
    codeStats: {
      total: 6000,
      frontend: 4500,
      backend: 1500,
    },
    achievements: [
      {
        title: "개발 진행률 95%",
        description: "핵심 기능 구현 완료, 최종 테스트 중",
        icon: "🚧",
      },
    ],
    links: {
      github: "https://github.com/jellive/chzzk-obs",
    },
  },

  // 10. Certificate Sync Manager
  {
    id: "cert-sync-manager",
    name: "Certificate Sync Manager",
    emoji: "🔐",
    type: ProjectType.INFRASTRUCTURE,
    status: ProjectStatus.PRODUCTION,
    period: "2025.11 - 현재",
    role: "1인 개발",
    shortDescription: "Let's Encrypt 인증서 자동 동기화 시스템",
    description:
      "Let's Encrypt 와일드카드 SSL 인증서를 발급받아 여러 서버에 자동으로 동기화하는 인프라 도구입니다. Docker 컨테이너 기반으로 실행되며, 인증서 갱신 시 자동으로 모든 대상 서버에 배포됩니다.",
    features: [
      {
        title: "자동 인증서 발급",
        description: "Let's Encrypt 와일드카드 인증서 자동 발급",
      },
      {
        title: "멀티 서버 동기화",
        description: "SSH를 통한 여러 서버로 인증서 자동 배포",
      },
      {
        title: "자동 갱신",
        description: "인증서 만료 전 자동 갱신 및 재배포",
      },
      {
        title: "Docker 기반",
        description: "컨테이너 환경에서 독립적으로 실행",
      },
    ],
    techStack: {
      frontend: [],
      backend: ["Python"],
      infrastructure: ["Docker", "Let's Encrypt", "Certbot", "SSH", "Cron"],
      desktop: [],
    },
    codeStats: {
      total: 2500,
      backend: 2500,
    },
    achievements: [
      {
        title: "인프라 자동화",
        description: "인증서 관리 완전 자동화로 운영 부담 감소",
        icon: "🔄",
      },
      {
        title: "Zero-downtime",
        description: "서비스 중단 없이 인증서 교체",
        icon: "✅",
      },
    ],
    links: {
      github: "https://github.com/jellive/cert-sync-manager",
    },
  },

  // 11. 나무위키 링커
  {
    id: "namuwiki-linker",
    name: "나무위키 링커",
    emoji: "🌳",
    type: ProjectType.CHROME_EXTENSION,
    status: ProjectStatus.PRODUCTION,
    period: "2025.10 - 현재",
    role: "1인 개발",
    shortDescription: "웹페이지 텍스트를 나무위키로 연결하는 확장 프로그램",
    description:
      "웹페이지에서 텍스트를 선택하면 해당 단어의 나무위키 문서로 바로 연결해주는 Chrome 확장 프로그램입니다. 우클릭 컨텍스트 메뉴와 키보드 단축키를 지원합니다.",
    features: [
      {
        title: "컨텍스트 메뉴 연동",
        description: "텍스트 선택 후 우클릭으로 나무위키 검색",
      },
      {
        title: "키보드 단축키",
        description: "선택 텍스트를 단축키로 빠르게 검색",
      },
      {
        title: "팝업 미리보기",
        description: "새 탭 열기 전 문서 미리보기 제공",
      },
      {
        title: "검색 기록",
        description: "최근 검색한 단어 목록 저장",
      },
    ],
    techStack: {
      frontend: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
      backend: [],
      infrastructure: [],
      desktop: [],
    },
    codeStats: {
      total: 1500,
      frontend: 1500,
    },
    links: {
      chromeWebStore:
        "https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl",
      github: "https://github.com/jellive/namuwiki-linker",
    },
  },

  // 12. jell-utils.js
  {
    id: "jell-utils",
    name: "jell-utils.js",
    emoji: "📦",
    type: ProjectType.NPM_PACKAGE,
    status: ProjectStatus.ARCHIVE,
    period: "2025.10 - 현재",
    role: "1인 개발",
    shortDescription: "JavaScript/TypeScript 유틸리티 함수 라이브러리",
    description:
      "자주 사용하는 JavaScript/TypeScript 유틸리티 함수들을 모아놓은 npm 패키지입니다. 문자열 처리, 날짜 포맷팅, 배열 조작 등의 기능을 제공합니다.",
    features: [
      {
        title: "문자열 유틸리티",
        description: "문자열 변환, 포맷팅, 검증 함수",
      },
      {
        title: "날짜 유틸리티",
        description: "날짜 포맷팅 및 계산 함수",
      },
      {
        title: "배열 유틸리티",
        description: "배열 정렬, 필터링, 그룹핑 함수",
      },
      {
        title: "TypeScript 지원",
        description: "완전한 타입 정의 제공",
      },
    ],
    techStack: {
      frontend: ["TypeScript", "JavaScript"],
      backend: [],
      infrastructure: ["npm", "GitHub Actions", "Jest"],
      desktop: [],
    },
    codeStats: {
      total: 3000,
      tests: 1500,
    },
    achievements: [
      {
        title: "npm 배포",
        description: "npm 레지스트리에 공개 배포",
        icon: "📤",
      },
      {
        title: "100% 테스트 커버리지",
        description: "모든 함수에 대한 단위 테스트 작성",
        icon: "✅",
      },
    ],
    links: {
      npm: "https://www.npmjs.com/package/jell-utils",
      github: "https://github.com/jellive/jell-utils",
    },
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a project by its ID
 * @param id - Project ID
 * @returns Project or undefined if not found
 */
export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

/**
 * Get projects filtered by status
 * @param status - Project status to filter by
 * @returns Array of matching projects
 */
export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projectsData.filter((project) => project.status === status);
}

/**
 * Get projects filtered by type
 * @param type - Project type to filter by
 * @returns Array of matching projects
 */
export function getProjectsByType(type: ProjectType): Project[] {
  return projectsData.filter((project) => project.type === type);
}

/**
 * Get all projects (returns a copy to ensure immutability)
 * @returns Array of all projects
 */
export function getAllProjects(): Project[] {
  return [...projectsData];
}
