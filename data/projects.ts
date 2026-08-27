/**
 * @fileoverview Project data structure and helper functions
 * Contains TypeScript types/interfaces and data for all 29 portfolio projects
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

/**
 * Project category (work type)
 */
export enum ProjectCategory {
  PROFESSIONAL = "professional", // 회사 프로젝트
  FREELANCE = "freelance", // 프리랜서
  PERSONAL = "personal", // 개인 프로젝트
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
 * Architecture diagram (text-based for Mermaid or plain description)
 */
export interface Architecture {
  /** Short summary of the architecture pattern */
  summary: string;
  /** Mermaid diagram source (graph TD / flowchart) */
  diagram?: string;
  /** Key design decisions */
  decisions?: string[];
}

/**
 * Project links
 */
export interface Links {
  github?: string;
  live?: string;
  appStore?: string;
  playStore?: string;
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
  category: ProjectCategory;
  period: string;
  role: string;
  shortDescription: string;
  description: string;
  features: Feature[];
  techStack: TechStack;
  codeStats?: CodeStats;
  achievements?: Achievement[];
  screenshots?: Screenshot[];
  architecture?: Architecture;
  links: Links;
  /** Source repo is private — UI hides the github button and shows a "Private repo" badge instead. */
  private?: boolean;
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
    category: ProjectCategory.PROFESSIONAL,
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
    category: ProjectCategory.PROFESSIONAL,
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
      appStore:
        "https://apps.apple.com/kr/app/%EA%B8%80%EB%A6%B0%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC/id1601360086",
    },
  },

  // 3. glinda AIMI
  {
    id: "glinda-aimi",
    name: "glinda AIMI",
    emoji: "🎮",
    type: ProjectType.UNITY_WEBGL,
    status: ProjectStatus.ARCHIVE,
    category: ProjectCategory.PROFESSIONAL,
    period: "2023.01 - 2024.08",
    role: "선임연구원 (비주얼신) - 웹 프론트엔드 개발",
    shortDescription: "Unity WebGL 기반 3D 가상 쇼룸",
    description:
      "Unity WebGL과 웹 기술을 결합한 인터랙티브 3D 가상 쇼룸 플랫폼입니다. Unity 팀과 협업하여 Nuxt.js/Vue 3 + TypeScript 기반 웹 프론트엔드를 개발하고, Unity WebGL과의 양방향 JavaScript 통신 인터페이스를 구현했습니다.",
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
      frontend: ["Nuxt.js", "Vue 3", "TypeScript", "Unity WebGL", "Three.js"],
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
    category: ProjectCategory.PROFESSIONAL,
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
    screenshots: [
      {
        filename: "knowrecorder.webp",
        alt: "KnowRecorder iOS app — PDF 슬라이드에 음성·드로잉을 녹화하는 화면",
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
    category: ProjectCategory.PROFESSIONAL,
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
    screenshots: [
      {
        filename: "knowlounge.webp",
        alt: "KnowLounge — 실시간 화상수업 + 동기화 화이트보드 플랫폼 화면",
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
    category: ProjectCategory.PROFESSIONAL,
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
    category: ProjectCategory.PROFESSIONAL,
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
  // FREELANCE PROJECTS (프리랜서 프로젝트)
  // ============================================================================

  // 1. 빈자리 (Vinjari)
  {
    id: "vinjari",
    name: "빈자리 (Vinjari)",
    emoji: "🏕️",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.FREELANCE,
    period: "2025.12 - 2026.02",
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

  // ============================================================================
  // PERSONAL PROJECTS (개인 프로젝트)
  // ============================================================================

  // 1. Cookting
  {
    id: "cookting",
    private: true,
    name: "Cookting",
    emoji: "🍳",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2024.08 - 현재",
    role: "1인 풀스택 개발",
    shortDescription: "AI 기반 냉장고 재료 인식 레시피 추천 앱",
    description:
      "냉장고 속 재료를 AI가 자동으로 인식하고, 보유한 재료로 만들 수 있는 최적의 레시피를 추천해주는 풀스택 앱입니다. Turborepo 모노레포 구조로 Flutter 앱(iOS/Android), NestJS API 서버, Next.js 웹, AI 마이크로서비스 4개 앱을 통합 관리합니다. BullMQ 기반 비동기 AI 처리, Supabase Realtime 동기화, Docker 컨테이너 배포를 갖춘 프로덕션 서비스입니다.",
    features: [
      {
        title: "AI 재료 인식",
        description: "카메라로 냉장고를 촬영하면 AI가 재료를 자동 인식",
      },
      {
        title: "스마트 레시피 추천",
        description:
          "GPT-4 + Gemini Pro 하이브리드 AI가 보유 재료 기반 최적의 레시피를 BullMQ 큐로 비동기 생성",
      },
      {
        title: "Turborepo 모노레포",
        description:
          "Flutter 앱 + NestJS API + Next.js 웹 + AI 마이크로서비스 4개 앱 통합",
      },
      {
        title: "실시간 동기화",
        description: "Supabase Realtime으로 재료·레시피 실시간 동기화",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart", "Riverpod", "Next.js", "TypeScript"],
      backend: [
        "NestJS",
        "BullMQ",
        "Redis",
        "PostgreSQL",
        "Drizzle ORM",
        "OpenAI API",
        "Gemini API",
      ],
      infrastructure: [
        "Turborepo",
        "Docker",
        "Supabase Auth",
        "Supabase Storage",
        "Supabase Realtime",
        "Firebase FCM",
      ],
      desktop: [],
    },
    codeStats: {
      total: 18000,
      frontend: 12000,
      backend: 6000,
    },
    achievements: [
      {
        title: "App Store + Google Play 출시",
        description: "iOS App Store + Android Play Store 정식 출시 및 운영 중",
        icon: "📱",
        metric: "App Store + Google Play 출시",
      },
      {
        title: "Turborepo 모노레포",
        description: "4개 앱(Flutter, NestJS, Next.js, AI 서비스) 통합 관리",
        icon: "📦",
        metric: "4개 앱 통합 모노레포",
      },
      {
        title: "AI 마이크로서비스",
        description: "BullMQ 기반 비동기 AI 처리 마이크로서비스 분리",
        icon: "🤖",
        metric: "BullMQ 비동기 큐 처리",
      },
    ],
    screenshots: [
      {
        filename: "cookting-1.webp",
        alt: "쿡팅 AI 레시피 추천 웹 랜딩",
      },
    ],
    architecture: {
      summary:
        "Turborepo 모노레포 기반 4개 앱 통합: Flutter(모바일) + NestJS API + Next.js 웹 + AI 마이크로서비스. BullMQ 비동기 큐로 AI 처리를 분리하여 API 응답 지연 없이 레시피 생성.",
      diagram: `flowchart TD
    A["Flutter App"] -->|REST API| B["NestJS API Server"]
    C["Next.js Web"] -->|REST API| B
    B -->|BullMQ Queue| D["AI Microservice"]
    D -->|OpenAI GPT-4| E["Recipe Generation"]
    D -->|Gemini Pro| E
    B -->|Drizzle ORM| F[("PostgreSQL")]
    B <-->|Realtime| G["Supabase"]
    G -->|Auth| A
    G -->|Storage| B
    H["Firebase FCM"] -->|Push| A`,
      decisions: [
        "BullMQ 비동기 큐로 AI 처리를 API 서버에서 분리 — 응답 지연 제거",
        "Turborepo로 Flutter/NestJS/Next.js/AI 서비스 빌드 캐시 공유",
        "GPT-4 + Gemini Pro 하이브리드 — 비용 최적화 및 폴백 처리",
        "Supabase Realtime으로 멀티 디바이스 재료 목록 실시간 동기화",
      ],
    },
    links: {
      github: "https://github.com/jellive/cookting",
      live: "https://naengbu.jell.kr",
      appStore: "https://apps.apple.com/kr/app/%EC%BF%A1%ED%8C%85/id6755325967",
      playStore:
        "https://play.google.com/store/apps/details?id=kr.jell.naengbu",
    },
  },

  // 2. JellScan
  {
    id: "jellscan",
    name: "JellScan",
    emoji: "🔍",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.DEVELOPMENT,
    category: ProjectCategory.PERSONAL,
    period: "2025.08 - 현재",
    role: "1인 풀스택 개발",
    shortDescription: "iPhone LiDAR 센서로 공간·객체를 3D 스캔하는 앱",
    description:
      "아이폰 내장 LiDAR 센서로 공간과 객체를 3D 스캔하고, GLB 형식으로 저장·공유할 수 있는 풀스택 앱입니다. React Native(모바일) + Next.js(웹 3D 뷰어)를 NestJS 백엔드 및 Turborepo 모노레포로 통합 관리합니다.",
    features: [
      {
        title: "LiDAR 3D 스캔",
        description: "iPhone LiDAR 센서로 공간과 객체를 3D로 촬영·스캔",
      },
      {
        title: "3D 뷰어",
        description: "웹에서 스캔 결과물을 GLB 형식으로 시각화 및 공유",
      },
      {
        title: "스캔 갤러리",
        description: "촬영한 3D 스캔을 저장·관리하고 쇼룸에 공개",
      },
      {
        title: "Turborepo 모노레포",
        description:
          "React Native(모바일) + Next.js(웹) + NestJS(서버) 통합 관리",
      },
    ],
    techStack: {
      frontend: ["React Native", "Next.js", "TypeScript"],
      backend: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
      infrastructure: ["Turborepo", "Docker", "pnpm"],
      desktop: [],
    },
    achievements: [
      {
        title: "iPhone LiDAR 3D 촬영",
        description:
          "아이폰 내장 LiDAR 센서로 공간과 객체를 3D로 촬영하고 스캔",
        icon: "📱",
      },
      {
        title: "GLB 3D 뷰어",
        description: "스캔 결과물을 GLB 형식으로 저장하고 웹에서 3D로 시각화",
        icon: "🧊",
      },
    ],
    links: {
      github: "https://github.com/jellive/jellscan",
    },
  },

  // 3. Time Letter
  {
    id: "time-letter",
    private: true,
    name: "Time Letter",
    emoji: "💌",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2025.10 - 현재",
    role: "1인 풀스택 개발",
    shortDescription: "타임캡슐 일기 앱 (React Native + Next.js 웹)",
    description:
      "미래의 나에게 편지를 보내는 타임캡슐 일기 앱입니다. React Native(Expo)로 모바일 앱을, Next.js로 웹 앱을 동시에 개발하며 Turborepo 모노레포 구조로 통합 관리합니다. Firebase(Auth/Firestore/Storage) 백엔드, RevenueCat 인앱 구독(모바일)/Stripe 결제(웹), Google/Apple 소셜 로그인, Gemini AI 감정분석·연말 캡슐 요약, Google Mobile Ads를 갖춘 프로덕션 서비스입니다.",
    features: [
      {
        title: "타임캡슐 편지",
        description:
          "미래 날짜를 지정하여 편지를 작성하고 열람 + 공개 편지 게시판",
      },
      {
        title: "소셜 로그인",
        description:
          "Google Sign-In + Apple Sign-In + 이메일 인증 (Firebase Auth)",
      },
      {
        title: "인앱 구독 & 결제",
        description: "RevenueCat 기반 모바일 인앱 구독 + Stripe 기반 웹 결제",
      },
      {
        title: "AI 감정분석 & 연말 캡슐",
        description: "Gemini AI로 일기 감정 분석 + 연말 캡슐 요약 자동 생성",
      },
      {
        title: "감정 통계 & 스트릭",
        description: "일간/주간 감정 통계, 연속 작성 스트릭 추적",
      },
      {
        title: "OTA 업데이트",
        description:
          "EAS Update 기반 development/preview/production 3단계 배포",
      },
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript", "Next.js"],
      backend: ["Firebase Auth", "Firebase Firestore", "Firebase Storage"],
      infrastructure: [
        "Sentry",
        "EAS Update",
        "Turborepo",
        "Fastlane",
        "Vercel",
      ],
      desktop: [],
    },
    codeStats: {
      total: 18000,
      frontend: 16000,
      tests: 656,
    },
    achievements: [
      {
        title: "App Store 출시",
        description: "React Native(Expo) 기반 iOS/Android 앱 출시",
        icon: "🚀",
      },
      {
        title: "수익화 통합",
        description: "RevenueCat 인앱 구독 + Stripe 웹 결제 + Google Ads 연동",
        icon: "💰",
      },
      {
        title: "AI 기능 통합",
        description: "Gemini AI 감정분석 + 연말 캡슐 요약 자동 생성",
        icon: "🤖",
      },
      {
        title: "모노레포 전환",
        description: "React Native + Next.js Turborepo 통합",
        icon: "📦",
      },
    ],
    links: {
      github: "https://github.com/jellive/time-letter",
      appStore:
        "https://apps.apple.com/kr/app/%EC%8B%9C%EA%B0%84%EC%9D%98-%ED%8E%B8%EC%A7%80/id6743721091",
    },
  },

  // 4. 커플 플래너
  {
    id: "couple-planner",
    private: true,
    name: "커플 플래너",
    emoji: "💕",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2025.12 - 현재",
    role: "1인 풀스택 개발",
    shortDescription:
      "커플 일정 및 기념일 공유 웹앱 (PWA) — couple-planner.jell.kr",
    description:
      "커플이 함께 일정과 기념일을 관리하고 공유할 수 있는 PWA 웹 애플리케이션입니다. Next.js 16 App Router (React 19) + Supabase Realtime으로 실시간 동기화, AI SDK 기반 7개 AI 기능(데이트 코스·식사·선물·맛집 추천, 갈등 해결 심판, 궁합 테스트, 기념일 에이전트), @serwist/next PWA, 다국어(next-intl), Google Calendar 연동을 갖춘 프로덕션 서비스입니다.",
    features: [
      {
        title: "7가지 AI 기능",
        description:
          "데이트 코스·식사·선물·맛집 추천, 커플 갈등 해결 심판(judge), 궁합 테스트, 기념일 에이전트 — AI SDK + Google Gemini",
      },
      {
        title: "실시간 동기화",
        description:
          "Supabase Realtime + @tanstack/react-query로 커플 간 충돌 없는 실시간 데이터 동기화",
      },
      {
        title: "PWA + 다국어",
        description:
          "@serwist/next PWA, next-intl 다국어, Google Calendar API 연동",
      },
      {
        title: "기념일 & 캘린더",
        description:
          "react-big-calendar 기반 D-day 카운트다운 및 기념일 자동 알림",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "@tanstack/react-query",
      ],
      backend: ["Supabase", "PostgreSQL", "AI SDK", "Google Gemini"],
      infrastructure: [
        "Vercel",
        "Supabase Auth",
        "Supabase Realtime",
        "@serwist/next PWA",
        "next-intl",
        "Upstash Redis",
      ],
      desktop: [],
    },
    achievements: [
      {
        title: "7개 AI 기능",
        description: "AI SDK + Gemini 기반 추천·심판·궁합·기념일 에이전트 통합",
        icon: "🤖",
        metric: "7가지 AI 기능 통합",
      },
      {
        title: "PWA + 실시간",
        description: "Supabase Realtime + serwist PWA 네이티브 앱 경험",
        icon: "📱",
        metric: "Lighthouse PWA 100점 목표",
      },
    ],
    screenshots: [
      {
        filename: "couple-planner-1.webp",
        alt: "커플 플래너 일정 공유 랜딩",
      },
    ],
    architecture: {
      summary:
        "Next.js 16 App Router + Supabase Realtime으로 커플 간 실시간 동기화, AI SDK/Gemini 기반 7개 AI 기능(데이트·식사·선물·맛집 추천, 갈등 심판, 궁합, 기념일 에이전트), @serwist/next PWA를 단일 Vercel 배포로 제공하는 풀스택 웹앱.",
      diagram: `flowchart TD
    A["Next.js 16 App Router<br/>src/app/(protected)/"] -->|tanstack/react-query| B["Supabase Client"]
    B <-->|Realtime subscription| C[("Supabase PostgreSQL")]
    B -->|Auth| D["Supabase Auth"]
    A -->|AI Route Handler| E["src/lib/gemini-proxy.ts"]
    E -->|AI SDK + Gemini| F["7개 AI 기능<br/>추천·심판·궁합·기념일"]
    A -->|Google Calendar API| G["외부 캘린더 연동"]
    H["Upstash Redis"] -->|rate-limit| E
    I["@serwist/next"] -->|Service Worker| A`,
      decisions: [
        "Supabase Realtime으로 서버 없이 커플 간 실시간 동기화 구현 — 별도 WebSocket 서버 불필요",
        "App Router (protected) 그룹으로 인증 게이트 단일화, 미인증 라우트는 최상위에서 차단",
        "Upstash Redis로 Gemini API rate-limit 처리 — Edge Function 없이 Next.js API Route에서 처리",
      ],
    },
    links: {
      github: "https://github.com/jellive/couple-planner",
      live: "https://couple-planner.jell.kr",
    },
  },

  // 4. Jellmodoro
  {
    id: "jellmodoro",
    private: true,
    name: "Jellmodoro",
    emoji: "🍅",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
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
      infrastructure: ["Docker"],
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
      appStore: "https://apps.apple.com/kr/app/jellmodoro/id6751464594",
      github: "https://github.com/jellive/jellmodoro",
    },
  },

  // 5. Wecanner
  {
    id: "wecanner",
    private: true,
    name: "Wecanner",
    emoji: "📅",
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2024.04 - 현재",
    role: "1인 개발",
    shortDescription:
      "주간 할 일 관리 앱 (iOS Swift v1 → Flutter v2 마이그레이션 완료)",
    description:
      "요일마다 반복되는 할 일을 간편하게 관리하는 크로스플랫폼 앱입니다. v1.x는 Swift + TCA + Tuist 기반 iOS 네이티브로 출시했고, v2.0 (2026-04 출시)에서 Flutter + Riverpod 기반으로 풀 재작성하여 iOS/Android 동시 지원합니다. WidgetKit 기반 홈/잠금화면 위젯, Firebase Auth/Firestore 다기기 동기화, 골든 테스트 자동 스크린샷 파이프라인을 갖췄습니다.",
    features: [
      {
        title: "주간 할 일 그리드",
        description: "7일을 한눈에 보는 위젯/앱 통합 인터페이스",
      },
      {
        title: "iOS 네이티브 위젯",
        description: "WidgetKit으로 홈화면 + 잠금화면 위젯 직접 구현",
      },
      {
        title: "Swift → Flutter 2.0 마이그레이션",
        description:
          "v1.x Swift(TCA + Tuist) → v2.0 Flutter(Riverpod) 풀 재작성, App Store 출시 완료",
      },
      {
        title: "Firebase 다기기 동기화",
        description: "Firebase Auth + Firestore로 iPhone, iPad 자동 동기화",
      },
    ],
    techStack: {
      frontend: [
        "Flutter",
        "Dart",
        "Riverpod",
        "Swift",
        "SwiftUI",
        "TCA",
        "WidgetKit",
      ],
      backend: [],
      infrastructure: [
        "Firebase Auth",
        "Firebase Firestore",
        "Tuist",
        "Fastlane",
      ],
      desktop: [],
    },
    codeStats: {
      total: 18000,
      frontend: 18000,
    },
    achievements: [
      {
        title: "Swift → Flutter 풀 마이그레이션",
        description:
          "iOS 네이티브 v1을 Flutter v2로 전면 재작성하여 App Store 출시",
        icon: "🔄",
        metric: "Flutter v2.0 App Store 출시 (2026-04)",
      },
      {
        title: "iOS WidgetKit 위젯",
        description: "홈화면 + 잠금화면 네이티브 위젯 (Swift v1 유지)",
        icon: "📱",
      },
      {
        title: "골든 스크린샷 자동화",
        description: "golden_screenshot 패키지로 42장 스크린샷 4초 생성",
        icon: "📸",
        metric: "iOS 4 + Android 3 사이즈 = 42장",
      },
    ],
    architecture: {
      summary:
        "Flutter(Riverpod) 앱이 core/data/presentation 레이어로 분리되고, Swift/Tuist WidgetExtension이 Firestore 데이터를 홈·잠금화면 위젯으로 렌더링하는 크로스플랫폼 구조.",
      diagram: `flowchart TD
    A["Flutter App<br/>presentation/screens"] -->|Riverpod Provider| B["data/repositories"]
    B -->|read-write| C[("Firebase Firestore")]
    C -->|Auth| D["Firebase Auth"]
    E["Swift WidgetExtension<br/>WidgetKit"] -->|AppGroup shared data| B
    E --> F["홈화면 위젯<br/>잠금화면 위젯"]
    G["Fastlane + Tuist"] -->|CI 빌드 배포| A
    G -->|CI 빌드 배포| E`,
      decisions: [
        "Flutter v2 풀 재작성 — iOS 전용에서 iOS/Android 동시 지원으로 확장",
        "WidgetKit은 Swift v1 코드 유지 — Flutter plugin으로 bridge하기보다 네이티브 직접 구현",
        "Riverpod + freezed 코드 생성으로 보일러플레이트 최소화",
      ],
    },
    links: {
      appStore: "https://apps.apple.com/kr/app/wecanner/id6711342598",
      github: "https://github.com/jellive/weekly_widget",
    },
  },

  // 6. Dev Utils Hub
  {
    id: "dev-utils-hub",
    name: "Dev Utils Hub",
    emoji: "🛠️",
    type: ProjectType.DESKTOP,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2025.11 - 현재",
    role: "1인 개발",
    shortDescription:
      "개발자를 위한 올인원 유틸리티 — Tauri 데스크톱 앱 + 오프라인 PWA",
    description:
      "개발 작업에서 자주 사용하는 다양한 유틸리티 기능들을 하나의 앱으로 통합했습니다. Rust 기반 Tauri 2 데스크톱 앱과 오프라인 PWA를 동시 제공하며, JSON 포맷터, Base64 인코더/디코더, UUID 생성기, 정규식 테스터, AI 코드 설명기 등 16개 이상의 도구를 갖췄습니다. Vitest 641개 테스트로 품질을 보증합니다.",
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
      frontend: [
        "React 19",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Zustand",
        "react-i18next",
      ],
      backend: [],
      infrastructure: ["Vitest", "Lighthouse CI", "Mutation Testing"],
      desktop: ["Tauri 2.10.1", "Rust"],
    },
    codeStats: {
      total: 8000,
      frontend: 7000,
      tests: 641,
    },
    achievements: [
      {
        title: "16+ 유틸리티",
        description: "JSON/Base64/JWT/Regex/Hash/AI 도구 등 통합",
        icon: "🧰",
      },
      {
        title: "Tauri 2 마이그레이션",
        description: "Electron → Tauri 2로 전환 (메모리/번들 크기 대폭 감소)",
        icon: "🦀",
      },
      {
        title: "641 테스트 + 오프라인 PWA",
        description: "Vitest 641개 테스트, 인터넷 없이도 모든 기능 사용 가능",
        icon: "✅",
        metric: "Vitest 641 tests + Offline PWA",
      },
    ],
    screenshots: [
      {
        filename: "dev-utils-hub-1.webp",
        alt: "Developer Utils 22개 도구 그리드",
      },
    ],
    architecture: {
      summary:
        "React 19 + Vite 프론트엔드가 Tauri 2 Rust 셸에 임베드되어 데스크톱 앱으로 동작하며, 동일 코드베이스가 오프라인 PWA로도 서빙되는 듀얼 타깃 구조.",
      diagram: `flowchart LR
    A["React 19 UI<br/>src/renderer/"] -->|Zustand store| B["useAppStore"]
    A -->|react-i18next| C["i18n / ko·en"]
    A -->|router| D["16+ Tool Pages"]
    D -->|CPU-bound util| E["src/utils/<br/>순수 TS 함수"]
    F["Tauri 2 Rust Shell<br/>src-tauri/"] -->|tauri command| A
    F -->|webview| A
    G["Vite build"] -->|dist| F
    G -->|PWA| H["dev-utils.jell.kr<br/>오프라인 서비스"]`,
      decisions: [
        "Tauri 2 채택 — Electron 대비 메모리·번들 크기 대폭 절감 (Rust 셸)",
        "동일 React 코드베이스로 데스크톱 앱 + 오프라인 PWA 듀얼 타깃 빌드",
        "모든 유틸 로직을 순수 TS 함수로 분리해 Vitest 641개 단위 테스트 가능",
      ],
    },
    links: {
      github: "https://github.com/jellive/dev-utils-hub",
      live: "https://dev-utils.jell.kr",
    },
  },

  // 7. Chzzk OBS Connector
  {
    id: "chzzk-obs",
    name: "Chzzk OBS Connector",
    emoji: "📺",
    type: ProjectType.DESKTOP,
    status: ProjectStatus.DEVELOPMENT,
    category: ProjectCategory.PERSONAL,
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

  // 8. Certificate Sync Manager
  {
    id: "cert-sync-manager",
    name: "Certificate Sync Manager",
    emoji: "🔐",
    type: ProjectType.INFRASTRUCTURE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
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

  // 9. 나무위키 실검 아카라이브 링커
  {
    id: "namu-arca-linker",
    name: "나무위키 실검 아카라이브 링커",
    emoji: "🌳",
    type: ProjectType.CHROME_EXTENSION,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2025.10 - 현재",
    role: "1인 개발",
    shortDescription:
      "나무위키 실시간 검색어 옆에 아카라이브 링크를 자동 추가하는 Chrome 확장",
    description:
      "나무위키 실시간 검색어 페이지에서 각 검색어 옆에 자동으로 아카라이브 검색 링크를 삽입해주는 Chrome 확장 프로그램입니다. Manifest V3 기반에 TypeScript + Vite + Vitest 빌드 파이프라인을 갖췄고, chrome-webstore-upload로 자동 배포됩니다.",
    features: [
      {
        title: "자동 아카라이브 링크 삽입",
        description:
          "나무위키 실검 페이지의 각 검색어 옆에 아카라이브 링크 자동 추가",
      },
      {
        title: "Manifest V3 + TypeScript",
        description: "최신 Chrome Extension 표준 + 풀 타입 안전성",
      },
      {
        title: "Vite + Vitest 파이프라인",
        description: "Vite 빌드 + Vitest 단위 테스트 + ESLint + Prettier",
      },
      {
        title: "Chrome Web Store 자동 배포",
        description:
          "chrome-webstore-upload로 release → upload → publish 한 번에",
      },
    ],
    techStack: {
      frontend: ["TypeScript", "Vite", "Chrome Extension API", "Manifest V3"],
      backend: [],
      infrastructure: ["Vitest", "ESLint", "chrome-webstore-upload"],
      desktop: [],
    },
    codeStats: {
      total: 1500,
      frontend: 1500,
    },
    achievements: [
      {
        title: "Chrome Web Store 출시",
        description:
          "정식 심사를 통과해 스토어에 게시했고 1.5.0까지 업데이트를 이어감",
        icon: "🧩",
        metric: "CWS 1.5.0",
      },
      {
        title: "실검 토론글 직링크",
        description:
          "실시간 검색어를 아카라이브 실검챈 토론글로 바로 연결하고 댓글수·검색 폴백을 제공",
        icon: "🔗",
      },
      {
        title: "UA 위장 백그라운드 fetch",
        description:
          "서비스워커가 declarativeNetRequest로 User-Agent를 위장해 앱 API를 직접 호출",
        icon: "🛡️",
      },
    ],
    links: {
      chromeWebStore:
        "https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl",
      github: "https://github.com/jellive/namu_arca_linker",
    },
  },

  // 10. jell-utils.js
  {
    id: "jell-utils",
    name: "jell-utils.js",
    emoji: "📦",
    type: ProjectType.NPM_PACKAGE,
    status: ProjectStatus.ARCHIVE,
    category: ProjectCategory.PERSONAL,
    period: "2021.04 - 2021.05",
    role: "1인 개발",
    shortDescription:
      "JavaScript/TypeScript 유틸리티 함수 라이브러리 (npm v1.0.0)",
    description:
      "한국어 특화 TypeScript 유틸리티 라이브러리. 날짜·숫자·문자열·배열·검증·비동기·브라우저 유틸을 제공합니다. 2021-04 v0.x 첫 배포 후 2025-12 v1.0.0으로 ESM/CJS 듀얼 빌드 + 모듈 분리 마이그레이션 완료. npm 공개 배포.",
    features: [
      {
        title: "한국어 유틸리티",
        description:
          "isKorean, chosungSearch, isBusinessNumber, getChosung, withEunNeun/withIGa/withEulReul 조사 처리",
      },
      {
        title: "날짜 유틸리티",
        description: "날짜 포맷팅, D-day 계산, timeAgo, 윤년/월별 일수",
      },
      {
        title: "숫자 유틸리티",
        description:
          "formatCurrency, numberToKorean, formatFileSize, parseNumber",
      },
      {
        title: "문자열 유틸리티",
        description: "toCamelCase, toSnakeCase, maskString, extractNumbers 등",
      },
      {
        title: "배열 / 객체 / 검증 / 비동기",
        description:
          "groupBy, sortBy, deepMerge, isEmail, isPhoneNumber, retry(지수 백오프)",
      },
    ],
    techStack: {
      frontend: ["TypeScript", "JavaScript"],
      backend: [],
      infrastructure: ["npm", "GitHub Actions", "Jest", "tsup"],
      desktop: [],
    },
    codeStats: {
      total: 3000,
      tests: 1500,
    },
    achievements: [
      {
        title: "npm 배포",
        description:
          "npm 레지스트리에 v1.0.0 공개 배포 (2021-04 첫 publish → 2025-12 v1.0.0)",
        icon: "📤",
        metric: "npm v1.0.0 published",
      },
      {
        title: "83.16% 테스트 커버리지",
        description: "114 test cases across 8 test files (Jest)",
        icon: "✅",
        metric: "83.16% overall coverage",
      },
    ],
    links: {
      npm: "https://www.npmjs.com/package/jell-utils",
      github: "https://github.com/jellive/jell-utils.js",
    },
  },

  // 11. abroad-crawler
  {
    id: "abroad-crawler",
    private: true,
    name: "abroad-crawler",
    emoji: "🌏",
    type: ProjectType.INFRASTRUCTURE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.04 - 현재",
    role: "1인 개발",
    shortDescription:
      "유학 정보 자동 크롤링 + AI 요약 + 매일 08:00 KST Telegram 브리핑 봇 + 웹 뷰어",
    description:
      "유학 에이전시를 위한 일일 브리핑 봇입니다. 12개 소스(비자/이민 정책, 입학, 환율 등)를 매일 자동 크롤링하고, Gemini로 한국어 요약 + 분류한 뒤 매일 아침 08:00 KST에 Telegram 채널로 자동 발송합니다. FastAPI + Jinja2 + HTMX 기반 공개 웹 뷰어(abroad.jell.kr)도 운영 중입니다. PRD 5편 작성 후 단일 세션에서 MVP를 완성한 케이스입니다.",
    features: [
      {
        title: "12개 소스 자동 크롤링",
        description:
          "httpx + BeautifulSoup4 + feedparser로 미국/캐나다/영국/호주/일본 등 비자·이민·유학 뉴스 RSS/HTML 크롤링",
      },
      {
        title: "Gemini AI 한국어 요약",
        description:
          "google-genai 기반 구조화된 JSON 응답으로 제목/요약 자동 생성",
      },
      {
        title: "Telegram 자동 발송",
        description:
          "APScheduler로 매일 08:00 KST 브리핑 + 6시간마다 헬스체크 DM",
      },
      {
        title: "공개 웹 뷰어",
        description:
          "FastAPI + Jinja2 + HTMX 기반 브라우저 뷰어 (abroad.jell.kr) — 오늘/아카이브 열람",
      },
      {
        title: "긴급 정책 변경 알림",
        description: "비자 정책 등 중대 변경 감지 시 관리자 DM으로 즉시 알림",
      },
    ],
    techStack: {
      frontend: ["HTMX", "Jinja2"],
      backend: [
        "Python 3.12",
        "httpx",
        "BeautifulSoup4",
        "feedparser",
        "google-genai (Gemini)",
        "python-telegram-bot",
        "APScheduler",
        "asyncpg",
      ],
      infrastructure: ["PostgreSQL", "Docker", "uv", "Sentry"],
      desktop: [],
    },
    codeStats: {
      total: 4500,
      backend: 4500,
      tests: 260,
    },
    achievements: [
      {
        title: "MVP 하루 완성",
        description:
          "PRD 5편 작성 후 단일 세션에서 크롤링 + AI 요약 + Telegram 발송 + 스케줄러 완성",
        icon: "⚡",
        metric: "PRD → MVP 1일",
      },
      {
        title: "260+ 테스트 + ruff lint clean",
        description:
          "pipeline + crawler + formatter + web 단위 테스트, ruff 정적 분석",
        icon: "✅",
      },
      {
        title: "프로덕션 자동화 + 웹 뷰어",
        description:
          "jell-server에 Docker 배포, 매일 자동 브리핑 운영 + abroad.jell.kr 웹 뷰어",
        icon: "🤖",
      },
    ],
    architecture: {
      summary:
        "Python 비동기 크롤러 → Gemini AI 요약 → PostgreSQL 저장 → APScheduler 스케줄링 → Telegram 발송 + FastAPI 웹 뷰어. 12개 소스 병렬 크롤 + 6시간 헬스체크 + 긴급 변경 즉시 알림.",
      diagram: `flowchart LR
    A["12개 소스<br/>HTML/RSS 크롤링"] --> B["Gemini AI<br/>한국어 요약 + 분류"]
    B --> C[("PostgreSQL")]
    C --> D["Telegram 봇"]
    D --> E["매일 08:00 KST<br/>채널 자동 발송"]
    C --> F["6시간 헬스체크<br/>관리자 DM"]
    G["긴급 정책 변경"] -.-> H["즉시 Admin DM"]
    C --> I["FastAPI 웹 뷰어<br/>abroad.jell.kr"]`,
      decisions: [
        "Gemini로 한국어 요약 + 구조화된 JSON 응답으로 후처리 단순화",
        "APScheduler로 단일 프로세스 내 스케줄링 + 헬스체크 통합",
        "asyncpg로 비동기 DB I/O — 크롤링과 동시 동작",
        "Docker compose로 jell-server 통합 배포 (공용 postgres 사용)",
      ],
    },
    links: {
      github: "https://github.com/jellive/abroad-crawler",
    },
  },

  // 12. JellHub v2
  {
    id: "jellhub",
    private: true,
    name: "JellHub v2",
    emoji: "🏠",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2025.12 - 현재",
    role: "1인 개발",
    shortDescription: "셀프호스팅 인프라 통합 모니터링 대시보드 (hub.jell.kr)",
    description:
      "자체 호스팅 인프라 jell-server의 통합 운영 대시보드입니다. v2에서 Uptime 모니터링(5분 간격), SSL 인증서 만료 추적, 시스템 리소스(CPU/RAM/Disk) SSH 수집, Nginx 트래픽 로그 시각화, Umami 웹 애널리틱스 통합, 공개 Status Page까지 6개 신규 기능을 추가했습니다. 2,007개 테스트(Vitest)로 품질을 보증하며, Prisma ORM + Cron 기반 자동 수집 파이프라인을 갖춘 프로덕션 서비스입니다.",
    features: [
      {
        title: "Uptime 모니터링",
        description:
          "5분 간격 HTTP 헬스체크 + 응답시간 추적 + 24h/7d/30d 가용률 대시보드",
      },
      {
        title: "SSL 인증서 추적",
        description:
          "16개 도메인 SSL 만료일 자동 수집 + D-day 경고 + Telegram 일일 리포트",
      },
      {
        title: "시스템 리소스 모니터링",
        description:
          "SSH로 CPU/RAM/Disk 사용률 5분 간격 수집 + 실시간 차트 시각화",
      },
      {
        title: "Nginx 트래픽 분석",
        description:
          "access.log 파싱 → 시간대별 요청 수, 상위 경로, 상태 코드 분포 시각화",
      },
      {
        title: "Umami 웹 애널리틱스",
        description:
          "Umami API v3.1.0 연동 — 페이지뷰, 방문자, 세션, 리퍼러 통합 대시보드",
      },
      {
        title: "공개 Status Page",
        description:
          "인증 없이 접근 가능한 서비스 상태 페이지 + 인시던트 타임라인",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript 5.9",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
        "TanStack Query",
        "Zustand",
      ],
      backend: [
        "Next.js API Routes",
        "Prisma ORM",
        "Socket.IO",
        "ssh2",
        "node-cron",
      ],
      infrastructure: [
        "PostgreSQL",
        "Redis",
        "Docker",
        "nginx",
        "Telegram Bot API",
        "Umami API",
      ],
      desktop: [],
    },
    codeStats: {
      total: 35000,
      frontend: 20000,
      backend: 15000,
      tests: 2007,
    },
    achievements: [
      {
        title: "v2 6개 기능 하루 구현",
        description:
          "Uptime/SSL/System/Nginx/Umami/StatusPage 6개 모듈을 25커밋 + 10,000줄로 1일 완성",
        icon: "⚡",
        metric: "PRD → 프로덕션 1일 (25커밋)",
      },
      {
        title: "2,007 테스트 통과",
        description:
          "Vitest 기반 136파일 2,007개 테스트 — API, 훅, 컴포넌트, 유틸 전수 검증",
        icon: "✅",
        metric: "2,007 tests (136 files)",
      },
      {
        title: "Cron 자동 수집 파이프라인",
        description:
          "5분 Uptime + 1시간 SSL/System + 6시간 Nginx — node-cron 기반 무중단 수집",
        icon: "🔄",
        metric: "4단계 Cron 파이프라인",
      },
      {
        title: "Korean DPI 차단 우회",
        description:
          "Node fetch → wget shim + webhook 마이그레이션으로 Telegram 정상화",
        icon: "🔓",
      },
    ],
    architecture: {
      summary:
        "Next.js 16 App Router 풀스택. Prisma ORM으로 Uptime/SSL/System/Nginx/Incident 데이터 영속화, node-cron 4단계 자동 수집(5min/1h/6h), SSH로 서버 메트릭 원격 수집, Umami API v3.1.0 연동, Socket.IO 실시간 로그 스트림, Telegram Bot webhook 알림.",
      diagram: `flowchart TD
    A["node-cron Scheduler"] -->|5min| B["Uptime Checker"]
    A -->|1h| C["SSL Scanner"]
    A -->|5min| D["System Metrics via SSH"]
    A -->|6h| E["Nginx Log Parser"]
    B --> F[("PostgreSQL + Prisma")]
    C --> F
    D --> F
    E --> F
    F --> G["Next.js API Routes"]
    G --> H["React Dashboard"]
    G --> I["Public Status Page"]
    G --> J["Telegram Bot"]
    K["Umami API v3.1.0"] --> G`,
      decisions: [
        "Prisma ORM으로 타입 안전한 DB 레이어 — 8개 마이그레이션 순차 적용",
        "node-cron 4단계 스케줄링으로 수집 주기별 부하 분산",
        "SSH2로 원격 서버 메트릭 수집 — Docker stats/df/free 명령 파싱",
        "Umami API v3.1.0 adaptor — /api/websites/:id/stats 엔드포인트 연동",
        "Public Status Page 인증 분리 — 외부 공개용 별도 라우트",
      ],
    },
    links: {
      github: "https://github.com/jellive/jellhub",
      live: "https://hub.jell.kr",
    },
  },

  // 13. jell-short (Rust URL Shortener)
  {
    id: "jell-short",
    private: true,
    name: "jell-short",
    emoji: "🔗",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.05 - 현재",
    role: "1인 개발",
    shortDescription: "Rust + Axum 기반 셀프호스팅 URL 단축기 (s.jell.kr)",
    description:
      "Rust와 Axum 프레임워크로 구현한 고성능 셀프호스팅 URL 단축기입니다. sqlx + PostgreSQL 기반에 Base62 인코딩 코드 생성, Token Bucket 기반 레이트 리미터, QR 코드 생성, 비밀번호 보호 URL 등의 기능을 갖췄습니다. TDD(21개 테스트)로 개발하고 Docker 멀티스테이지 빌드 + nginx 리버스 프록시로 jell-server에 배포했습니다.",
    features: [
      {
        title: "Base62 URL 단축",
        description:
          "Auto-increment ID → Base62 인코딩으로 짧고 예측 불가능한 코드 생성",
      },
      {
        title: "커스텀 코드 + 비밀번호 보호",
        description:
          "사용자 지정 슬러그 + 선택적 비밀번호 보호 URL (SHA-256 해싱 + 상수시간 비교)",
      },
      {
        title: "QR 코드 자동 생성",
        description: "단축 URL 생성 시 PNG QR 코드 자동 생성 및 다운로드 제공",
      },
      {
        title: "Token Bucket 레이트 리미팅",
        description:
          "IP 기반 Token Bucket 알고리즘 — API 60 req/min, 리다이렉트 120 req/min",
      },
    ],
    techStack: {
      frontend: [],
      backend: [
        "Rust",
        "Axum",
        "sqlx (PostgreSQL)",
        "tokio",
        "sha2",
        "qrcode-rs",
      ],
      infrastructure: ["Docker (multi-stage build)", "nginx", "TeamCity CI"],
      desktop: [],
    },
    codeStats: {
      total: 2500,
      backend: 2500,
      tests: 21,
    },
    achievements: [
      {
        title: "Rust + Axum 프로덕션 배포",
        description: "PRD 작성 → TDD 개발 → Docker 배포까지 단일 세션 완주",
        icon: "🦀",
        metric: "Rust 첫 프로덕션 서비스",
      },
      {
        title: "TDD 21 테스트",
        description:
          "URL 검증, 예약어 차단, 리다이렉션, 만료, QR 등 핵심 로직 전수 테스트",
        icon: "✅",
        metric: "21 tests (TDD)",
      },
      {
        title: "Docker 멀티스테이지 빌드",
        description:
          "빌더 이미지(rust:slim) → 실행 이미지(debian:bookworm-slim) 분리로 경량 컨테이너",
        icon: "🐳",
        metric: "~50MB 최종 이미지",
      },
    ],
    screenshots: [
      {
        filename: "jell-short-1.webp",
        alt: "jell-short URL 단축 대시보드",
      },
    ],
    architecture: {
      summary:
        "Axum HTTP 서버 + sqlx/PostgreSQL. 요청 → Token Bucket 레이트 체크 → Base62 코드 생성/조회 → PostgreSQL 영속화 → 302 리다이렉트. 비밀번호 보호 URL은 SHA-256 해싱 + 상수시간 비교. Docker 멀티스테이지 빌드로 최소 이미지, nginx 리버스 프록시로 TLS 종단.",
      diagram: `flowchart LR
    A["Client"] -->|HTTPS| B["nginx"]
    B -->|reverse proxy| C["Axum Server"]
    C --> D{"Rate Limiter<br/>Token Bucket"}
    D -->|OK| E["Route Handler"]
    D -->|429| F["Too Many Requests"]
    E -->|POST shorten| G["Base62 Encode + PG INSERT"]
    E -->|GET code| H["PG SELECT + 302 Redirect"]
    E -->|GET code qr| I["QR PNG Generate"]
    G --> J[("PostgreSQL")]
    H --> J`,
      decisions: [
        "Rust + Axum 선택 — 메모리 안전성 + 비동기 성능 + 단일 바이너리 배포",
        "sqlx + PostgreSQL — async 네이티브 드라이버, 공용 postgres 컨테이너 재사용",
        "SHA-256 + subtle::ConstantTimeEq — 비밀번호 타이밍 공격 방지",
        "Base62 인코딩 — URL-safe 문자만 사용 (a-z, A-Z, 0-9)",
        "Token Bucket — 고정 윈도우 대비 버스트 허용으로 UX 향상",
      ],
    },
    links: {
      github: "https://github.com/jellive/jell_url_short",
      live: "https://s.jell.kr",
    },
  },

  // 14. threat-crawler
  {
    id: "threat-crawler",
    private: true,
    name: "threat-crawler",
    emoji: "🛡️",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.04 - 현재",
    role: "1인 개발",
    shortDescription:
      "보안 위협 인텔리전스 플랫폼 — 비동기 크롤러 + YARA/Sigma/DGA 탐지 + Next.js 대시보드",
    description:
      "다크웹/뉴스/커뮤니티 등 보안 위협 정보를 자동 수집하고, YARA + Sigma + DGA 룰 기반 탐지 엔진으로 분류한 뒤 대시보드에서 가시화하는 셀프 호스팅 보안 플랫폼입니다. Python 비동기 크롤러 + Next.js 대시보드 + 통합 PostgreSQL의 풀스택 구성입니다.",
    features: [
      {
        title: "비동기 크롤러",
        description: "다크웹(.onion)/뉴스/커뮤니티 등 다중 소스 비동기 크롤링",
      },
      {
        title: "YARA/Sigma/DGA 탐지",
        description:
          "YARA 룰 + Sigma 시그마 + DGA(Domain Generation Algorithm) 분석 엔진",
      },
      {
        title: "Next.js 대시보드",
        description:
          "실시간 위협 통계, 카테고리별 필터링, IOC/Sandbox 결과 가시화",
      },
      {
        title: "Docker 통합 배포",
        description:
          "crawlers + web + 통합 PostgreSQL을 docker-compose로 jell-server 운영",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "asyncio", "YARA", "Sigma", "PostgreSQL"],
      infrastructure: ["Docker", "nginx", "Tor (proxy)"],
      desktop: [],
    },
    achievements: [
      {
        title: "다크웹 크롤링 운영",
        description: "Tor 프록시로 .onion 다크웹 포럼/마켓 데이터 자동 수집",
        icon: "🕸️",
      },
      {
        title: "탐지 엔진 통합",
        description: "YARA + Sigma + DGA 3개 엔진을 단일 파이프라인으로 통합",
        icon: "🔍",
      },
      {
        title: "통합 PostgreSQL",
        description:
          "전용 DB 컨테이너 → 공용 postgres로 마이그레이션, URL unique 인덱스 + 중복 정리",
        icon: "🗄️",
      },
    ],
    links: {
      github: "https://github.com/jellive/threat-crawler",
      live: "https://threat.jell.kr",
    },
  },

  // 14. 한화 스코어 알림
  {
    id: "hanwha-score",
    name: "한화 스코어 알림",
    emoji: "🦅",
    type: ProjectType.CHROME_EXTENSION,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.03 - 현재",
    role: "1인 개발",
    shortDescription:
      "KBO 한화 이글스 실시간 스코어를 Chrome 툴바 뱃지로 알리는 확장",
    description:
      "KBO 한화 이글스 경기 실시간 스코어를 Chrome 확장 뱃지로 표시하고, 점수 변경 시 시스템 알림을 띄워주는 Chrome Extension입니다. Manifest V3 + Service Worker 기반에 alarms/notifications API로 백그라운드 폴링을 구현했습니다.",
    features: [
      {
        title: "실시간 스코어 뱃지",
        description: "Chrome 툴바 뱃지에 현재 경기 스코어 실시간 표시",
      },
      {
        title: "득점 푸시 알림",
        description: "점수 변경 시 시스템 notifications로 즉시 알림",
      },
      {
        title: "Manifest V3 + Service Worker",
        description:
          "최신 Chrome Extension 표준, alarms API 기반 백그라운드 폴링",
      },
      {
        title: "Naver Sports API",
        description:
          "api-gw.sports.naver.com 비공식 API로 KBO 경기 데이터 조회",
      },
    ],
    techStack: {
      frontend: [
        "JavaScript",
        "Chrome Extension API",
        "Manifest V3",
        "Service Worker",
      ],
      backend: [],
      infrastructure: [],
      desktop: [],
    },
    achievements: [
      {
        title: "실시간 경기 중계",
        description:
          "한화 이글스 경기를 브라우저에서 실시간으로 중계하는 크롬 확장",
        icon: "⚾",
      },
      {
        title: "득점 푸시 알림",
        description:
          "득점·경기 시작·종료 시 시스템 알림으로 즉시 안내 (notifications API)",
        icon: "🔔",
      },
    ],
    links: {
      github: "https://github.com/jellive/hanwha-score",
    },
  },

  // sober-streak - 금주 스트릭 트래커 PWA
  {
    id: "sober-streak",
    name: "Sober Streak (금주 스트릭)",
    emoji: "🌱",
    type: ProjectType.WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.07 - 현재",
    role: "1인 개발",
    shortDescription:
      "서버·계정·DB 없이 localStorage 하나로 도는 초경량 금주 트래커 PWA",
    description:
      "음주/금주 여부를 하루 한 번 탭으로 기록하는 설치형 PWA입니다. 서버도 계정도 DB도 없이 브라우저 localStorage 만으로 현재 스트릭·최고 기록·누적 금주일을 추적하며, 오프라인에서 그대로 동작합니다. '마셨음'을 눌러도 경고나 실패 문구를 띄우지 않는 무판단 톤을 설계 원칙으로 삼았습니다.",
    features: [
      {
        title: "한 탭 기록",
        description: "마셨음/안 마셨음 한 번의 탭, 논알콜은 별도 토글로 독립 기록",
      },
      {
        title: "세 가지 숫자",
        description: "현재 스트릭 · 최고 스트릭 · 누적 금주일만 메인에 노출",
      },
      {
        title: "히트맵 + 월 캘린더",
        description: "최근 기록 미니 히트맵과 날짜별 편집이 가능한 월 단위 캘린더",
      },
      {
        title: "오프라인 PWA",
        description: "Serwist 기반 서비스워커로 설치·오프라인 동작, JSON 백업 내보내기/가져오기",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Serwist (PWA)",
        "localStorage",
      ],
      backend: [],
      infrastructure: ["Vercel"],
      desktop: [],
    },
    achievements: [
      {
        title: "무서버 아키텍처",
        description:
          "백엔드·계정·DB 없이 브라우저 저장소만으로 완결되는 구조 — 운영 비용 0",
        icon: "🪶",
      },
      {
        title: "무판단 UX 원칙",
        description:
          "실패를 경고하지 않는 톤을 제품 원칙으로 정의하고 화면 전반에 적용",
        icon: "🌿",
      },
    ],
    links: {
      github: "https://github.com/jellive/sober-streak",
      live: "https://sober.jell.kr",
    },
  },

  // 24. jell-portfolio-3d - 3D 보셀 포트폴리오
  {
    id: "jell-portfolio-3d",
    name: "Jell World (3D 포트폴리오)",
    emoji: "🌐",
    type: ProjectType.WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.05 - 현재",
    role: "1인 개발",
    shortDescription:
      "Three.js + React Three Fiber 기반 3D 보셀 포트폴리오 게임",
    description:
      "Minecraft 스타일 보셀 월드를 WASD로 탐험하며 스킬·경력·프로젝트·연락처를 인터랙티브하게 살펴보는 3D 포트폴리오입니다. 단일 세션에 0→Vercel 라이브 배포까지 완주했고, 데스크톱+모바일(가상 조이스틱) 양쪽을 지원합니다. 평면 파스텔 하늘 + WebAudio 8-bit BGM/SFX로 레트로 게임 분위기를 연출합니다.",
    features: [
      {
        title: "복셀 월드 + 물리 충돌",
        description:
          "InstancedMesh 1,152블록 지형 + Rapier capsule collider + 카메라 상대 WASD 이동",
      },
      {
        title: "4 zone 인터랙션",
        description:
          "Skill Garden / Career Timeline / Projects Park / Contact Station — 근접 탐지 + InfoPanel",
      },
      {
        title: "live minimap + 모바일 컨트롤",
        description:
          "Canvas 미니맵에 17 프로젝트 + 5 경력 + 4 연락처 실시간 마커 + 자체 가상 조이스틱",
      },
      {
        title: "WebAudio 직접 합성",
        description:
          "mp3 의존 없이 32-step 8-bit BGM 루프 + jump/interact/close SFX 합성",
      },
      {
        title: "OG 동적 이미지 + SEO",
        description:
          "Next.js 16 OpenGraph image route + sitemap + structured metadata",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Three.js",
        "@react-three/fiber",
        "@react-three/drei",
        "@react-three/rapier",
        "zustand",
        "TypeScript",
        "Tailwind 4",
      ],
      backend: [],
      infrastructure: ["Vercel", "GitHub Actions"],
      desktop: [],
    },
    achievements: [
      {
        title: "단일 세션 0→배포",
        description: "PRD 파싱부터 라이브까지 한 세션 완주",
        icon: "🚀",
      },
      {
        title: "데스크톱 + 모바일 양면 지원",
        description: "matchMedia 기반 자동 가상 조이스틱 + DPR/그림자 절감",
        icon: "📱",
      },
    ],
    screenshots: [
      {
        filename: "jell-portfolio-3d-1.webp",
        alt: "Jell World 3D 복셀 포트폴리오",
      },
    ],
    links: {
      github: "https://github.com/jellive/jell-portfolio-3d",
      live: "https://jell-portfolio-3d.vercel.app",
    },
  },

  // 25. jell-arcade - Unity 6 WebGL 게임 컬렉션
  {
    id: "jell-arcade",
    private: true,
    name: "Jell Arcade",
    emoji: "🕹️",
    type: ProjectType.UNITY_WEBGL,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.05 - 현재",
    role: "1인 개발",
    shortDescription:
      "Unity 6 WebGL 셀프호스팅 게임 컬렉션 — Vampire Survivors 클론 + Brick Breaker + Endless Runner + Tetris",
    description:
      "Unity 6 (6000.0.75f1) 기반 셀프호스팅 게임 컬렉션입니다. 단일 빌드에 4개 미니게임(Space Survivor, Brick Breaker, Endless Runner, Tetris)을 공유 Lobby에서 제공하고 nginx 컨테이너로 arcade.jell.kr에 배포했습니다. SceneBuilder Editor 스크립트로 전체 Scene/Prefab/Sprite를 코드로 생성해 Unity Editor를 GUI 없이 batchmode만으로 빌드합니다. 온라인 리더보드는 jellhub Prisma DB에 연결되어 있습니다.",
    features: [
      {
        title: "공유 Lobby",
        description:
          "4개 게임에 진입하는 공유 허브 — 가로 1×4 / 세로 2×2 그리드, 카드별 Best·Plays·★ 최근 플레이 마커",
      },
      {
        title: "Space Survivor — Vampire Survivors 클론",
        description:
          "8 enemy + 3 boss + 5 evolved weapon + meta progression (HP/Damage/Speed/Magnet 4종 영구 업그레이드) + Top-5 로컬 + Top-10 온라인 리더보드",
      },
      {
        title: "Brick Breaker — 5단계 아케이드",
        description:
          "Paddle 마우스/터치/키보드 양면 입력 + PhysicsMaterial2D 무한 바운스 + 5 레벨 난이도 (gaps/hp2/boss brick)",
      },
      {
        title: "Endless Runner — 더블 점프 회피",
        description:
          "중력 기반 점프 + double jump + obstacle 60초 difficulty ramp (interval 1.8→0.7s, speed 6→11) + Best Score PlayerPrefs 영속화",
      },
      {
        title: "Tetris — 7-bag + hold + ghost",
        description:
          "7-bag 랜덤화, hold 피스, ghost piece, NES 스코어링 × level, back-to-back TETRIS 1.5× 보너스, 라인 클리어 팝업",
      },
      {
        title: "코드로 생성하는 Scene/Prefab/Sprite",
        description:
          "SpriteGenerator(픽셀 함수) + PrefabFactory + SceneBuilder Editor 스크립트로 GUI 0회 빌드 — Unity Editor는 batchmode만 실행",
      },
      {
        title: "온라인 리더보드 (jellhub 연동)",
        description:
          "POST /api/arcade/leaderboard → jellhub Prisma ArcadeLeaderboard 테이블에 영속화, CORS 허용",
      },
    ],
    techStack: {
      frontend: ["Unity 6 (6000.0.75f1)", "C#", "Unity UI (uGUI)"],
      backend: ["Next.js API Route (jellhub)", "Prisma", "PostgreSQL"],
      infrastructure: [
        "Docker (nginx)",
        "TeamCity CI",
        "Brotli compression",
        "nginx_service",
      ],
      desktop: [],
    },
    codeStats: {
      total: 6500,
      frontend: 6500,
    },
    achievements: [
      {
        title: "Unity batchmode-only 빌드 파이프라인",
        description:
          "setup.sh → build.sh → docker/deploy.sh 3-step. Editor GUI 0회 — 모든 자산(Scene/Prefab/Sprite/Texture/Tag) 코드 생성",
        icon: "🛠️",
        metric: "setup.sh 1회로 27 prefab + 5 scene 자동 생성",
      },
      {
        title: "4 game in 7.1MB Brotli",
        description:
          "전체 빌드 7.1MB Brotli (data.br 1.58MB) — Tetris 포함 4개 게임 풀 컨텐츠를 모바일에서도 즉시 플레이",
        icon: "🎮",
        metric: "Brotli 7.1MB / WebGL.data.br 1.58MB",
      },
      {
        title: "Playwright e2e로 발견·수정한 inactive-clone 버그",
        description:
          "Object.Instantiate가 source의 activeSelf 상속 → obstacle template이 inactive면 클론도 inactive로 spawn → 충돌 없이 score만 증가. 71초 무손상 플레이로 발견",
        icon: "🐛",
        metric: "single SetActive(true) line fix",
      },
    ],
    architecture: {
      summary:
        "Editor 스크립트(SpriteGenerator/PrefabFactory/SceneBuilder/TagsAndLayersSetup/PlayerSettingsConfigurator)가 모든 자산을 코드로 생성 → Unity batchmode가 5개 scene + 27 prefab을 빌드 → WebGL.data/wasm/framework를 Brotli 압축 → nginx 컨테이너로 arcade.jell.kr 서빙. 온라인 리더보드만 jellhub REST API 호출.",
      diagram: `flowchart LR
    A["setup.sh"] -->|JellArcade FULL AUTO SETUP| B["Editor scripts"]
    B -->|generate| C["Sprites + Prefabs + 5 Scenes"]
    D["build.sh"] -->|Builder.BuildWebGL| E["Unity Batchmode"]
    C --> E
    E -->|Brotli| F["build/WebGL/*.br"]
    F -->|rsync + docker compose| G["nginx container"]
    G -->|HTTPS| H["arcade.jell.kr"]
    I["Unity Player"] -->|POST api arcade leaderboard| J["jellhub API"]
    J --> K[("Prisma + Postgres")]`,
      decisions: [
        "Unity 6 WebGL — Three.js 대비 풀-에셋 게임 엔진 + 단일 코드베이스로 4개 미니게임 + 공유 Lobby packaging",
        "Editor 스크립트로 자산 생성 — Unity Editor GUI 의존 0 (마라톤 세션에서 흐름 끊김 방지)",
        "Brotli + WebGL — 7.1MB로 모바일에서도 즉시 플레이",
        "리더보드만 외부 API — 게임 자체는 100% static asset",
      ],
    },
    screenshots: [
      {
        filename: "jell-arcade-1.webp",
        alt: "Jell Arcade 레트로 WebGL 게임 선택",
      },
    ],
    links: {
      github: "https://github.com/jellive/jell-arcade",
      live: "https://arcade.jell.kr",
    },
  },

  // 19. ai-pulse
  {
    id: "ai-pulse",
    private: true,
    name: "ai-pulse",
    emoji: "📡",
    type: ProjectType.INFRASTRUCTURE,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.05 - 현재",
    role: "기획·개발·운영 (1인)",
    shortDescription: "AI 뉴스를 토픽별로 묶어 매일 전하는 다이제스트 봇 + 웹",
    description:
      "AI/LLM 분야 뉴스를 여러 소스에서 자동 수집해 LLM으로 토픽을 클러스터링하고, 출시·툴·트렌딩으로 분류해 매일 아침 텔레그램으로 보내는 자동화 파이프라인. FastAPI 기반 웹 UI에서도 열람할 수 있으며 무중단으로 운영된다.",
    features: [
      {
        title: "다중 소스 수집",
        description:
          "HN·marktechpost·simonwillison 등 여러 소스에서 AI 뉴스를 자동 수집",
      },
      {
        title: "LLM 토픽 클러스터링",
        description: "Gemini로 36시간 배치 아이템을 묶어 핵심 토픽을 추출",
      },
      {
        title: "카테고리 분류",
        description: "출시·툴·트렌딩으로 자동 분류해 몰아보기 제공",
      },
      {
        title: "GitHub 트렌딩 연동",
        description: "트렌딩 레포를 파싱해 다이제스트에 포함",
      },
      {
        title: "텔레그램 일일 다이제스트",
        description: "매일 08:00 KST 자동 발송",
      },
      {
        title: "웹 UI",
        description: "FastAPI + Jinja + HTMX로 오늘·아카이브 열람",
      },
      {
        title: "헬스체크·알림",
        description: "내부 스케줄러 + 외부 cron + 텔레그램 이중 감시",
      },
      {
        title: "재시작 catch-up",
        description: "재시작 시 누락된 cron 작업 보충",
      },
    ],
    techStack: {
      frontend: ["HTMX", "Jinja2"],
      backend: ["Python", "FastAPI", "APScheduler", "PostgreSQL"],
      infrastructure: ["Docker", "Gemini API"],
      desktop: [],
    },
    achievements: [
      {
        title: "테스트 커버리지",
        description: "핵심 로직 전부 테스트로 검증",
        icon: "✅",
        metric: "77 tests",
      },
      {
        title: "무중단 운영",
        description: "매일 08:00 KST 자동 발송 라이브",
        icon: "🔁",
        metric: "08:00 KST daily",
      },
      {
        title: "Rate-limit 관리",
        description: "gemini-proxy 일 950건 한도 내 429 처리",
        icon: "🛡️",
        metric: "950/day quota",
      },
    ],
    screenshots: [
      {
        filename: "ai-pulse-1.webp",
        alt: "ai-pulse 토픽 브리핑 웹 화면",
      },
    ],
    links: {
      github: "https://github.com/jellive/ai-pulse",
      live: "https://ai-pulse.jell.kr",
    },
  },

  // 20. wind-down
  {
    id: "wind-down",
    name: "wind-down",
    emoji: "🌬️",
    type: ProjectType.WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.05 - 현재",
    role: "기획·개발 (1인)",
    shortDescription: "멍때림 비주얼라이저 + 호흡 가이드 PWA",
    description:
      "의존성 0의 단일 HTML로 만든 멍때림·호흡 도구. 캔버스 비주얼과 Web Audio로 생성한 환경음, 호흡 가이드를 제공하며 모바일 설치형 PWA로 확장했다. 평소엔 비주얼만 풀스크린, 화면을 탭하면 컨트롤이 나타나는 미니멀 UX.",
    features: [
      {
        title: "비주얼 씬 12종",
        description: "물결·안개·입자·별·오로라·눈·반딧불 등 캔버스 애니메이션",
      },
      {
        title: "테마 9종",
        description: "밤하늘·노을·심해·설원 등 분위기 팔레트",
      },
      {
        title: "환경음 6종",
        description:
          "드론·비·파도·새소리·모닥불·풀벌레를 Web Audio로 실시간 생성",
      },
      {
        title: "호흡 가이드",
        description: "4·7·8, 박스, 코히어런트(5·5) 패턴 시각 안내",
      },
      {
        title: "프리셋 9종",
        description: "분위기 조합을 원터치로 적용",
      },
      {
        title: "멍타이머",
        description: "오늘 누적 시간과 카운트다운 종료 알림",
      },
      {
        title: "취침 페이드",
        description: "15·30·45분 뒤 화면과 소리가 서서히 꺼짐",
      },
      {
        title: "공유 링크",
        description: "현재 조합을 URL 해시로 복사·복원",
      },
      {
        title: "모바일 PWA",
        description:
          "설치형, 탭하면 컨트롤이 뜨는 미니멀 UX, network-first 오프라인 동작",
      },
    ],
    techStack: {
      frontend: [
        "Vanilla JS",
        "Canvas",
        "Web Audio API",
        "PWA / Service Worker",
      ],
      backend: [],
      infrastructure: ["Docker", "Nginx"],
      desktop: [],
    },
    achievements: [
      {
        title: "무의존 단일 파일",
        description: "외부 라이브러리 0, 단일 HTML로 구현",
        icon: "🪶",
        metric: "0 deps",
      },
      {
        title: "설치형 PWA",
        description: "iOS·Android 홈 화면 설치와 오프라인 동작",
        icon: "📲",
        metric: "PWA installable",
      },
      {
        title: "모바일 검증",
        description: "iOS 시뮬레이터로 탭토글·레이아웃 실측",
        icon: "✅",
        metric: "iOS verified",
      },
    ],
    screenshots: [
      {
        filename: "wind-down-1.webp",
        alt: "wind-down 멍때림 비주얼라이저 화면",
      },
    ],
    links: {
      live: "https://wind-down.jell.kr",
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
 * Get projects filtered by category
 * @param category - Project category to filter by
 * @returns Array of matching projects
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projectsData.filter((project) => project.category === category);
}

/**
 * Get all projects (returns a copy to ensure immutability)
 * @returns Array of all projects
 */
export function getAllProjects(): Project[] {
  return [...projectsData];
}
