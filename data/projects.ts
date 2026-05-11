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
    architecture: {
      summary:
        "Turborepo 모노레포 기반 4개 앱 통합: Flutter(모바일) + NestJS API + Next.js 웹 + AI 마이크로서비스. BullMQ 비동기 큐로 AI 처리를 분리하여 API 응답 지연 없이 레시피 생성.",
      diagram: `flowchart TD
    A[Flutter App] -->|REST API| B[NestJS API Server]
    C[Next.js Web] -->|REST API| B
    B -->|BullMQ Queue| D[AI Microservice]
    D -->|OpenAI GPT-4| E[Recipe Generation]
    D -->|Gemini Pro| E
    B -->|Drizzle ORM| F[(PostgreSQL)]
    B <-->|Realtime| G[Supabase]
    G -->|Auth| A
    G -->|Storage| B
    H[Firebase FCM] -->|Push| A`,
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
    shortDescription: "OCR 기반 문서 스캔 & 텍스트 추출 앱",
    description:
      "카메라로 문서를 촬영하면 OCR 엔진이 텍스트를 자동 추출하고, NestJS 백엔드에서 AI 기반 후처리로 정확도를 높이는 풀스택 앱입니다. Flutter(모바일) + Next.js(웹)을 Turborepo 모노레포로 통합 관리합니다.",
    features: [
      {
        title: "OCR 텍스트 추출",
        description: "카메라/갤러리 이미지에서 텍스트 자동 인식 및 추출",
      },
      {
        title: "AI 후처리",
        description: "LLM 기반 OCR 결과 교정 및 구조화",
      },
      {
        title: "문서 관리",
        description: "추출된 텍스트 저장, 검색, 공유 기능",
      },
      {
        title: "Turborepo 모노레포",
        description: "Flutter(모바일) + Next.js(웹) 통합 관리",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart", "Next.js", "TypeScript"],
      backend: ["NestJS", "TypeScript", "PostgreSQL"],
      infrastructure: ["Turborepo", "Docker", "Supabase"],
      desktop: [],
    },
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
    role: "React Native 개발자",
    shortDescription: "타임캡슐 일기 앱 (React Native + Next.js 웹)",
    description:
      "미래의 나에게 편지를 보내는 타임캡슐 일기 앱입니다. React Native(Expo)로 모바일 앱을, Next.js로 웹 앱을 동시에 개발하고 있으며, Turborepo 모노레포 구조로 통합 관리합니다. ESLint 9.x, Sentry 크래시 리포팅, EAS Update OTA 배포, 이메일 인증, 계정 관리 등 프로덕션 수준의 기능과 품질 인프라를 갖추고 App Store/Play Store에 출시되었습니다.",
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
      {
        title: "이메일 인증 & 계정 관리",
        description: "이메일 기반 회원가입/로그인, 계정 삭제 기능",
      },
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript", "Next.js"],
      backend: ["Supabase", "PostgreSQL"],
      infrastructure: ["Sentry", "EAS Update", "Turborepo", "Fastlane"],
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
      "커플이 함께 일정과 기념일을 관리하고 공유할 수 있는 PWA 웹 애플리케이션입니다. Next.js 16 App Router (React 19) + Supabase Realtime으로 실시간 동기화, AI SDK 기반 4개 AI 기능(일정 추천, 갈등 해결, 날짜 코스 추천, 감정 분석), @serwist/next PWA, 다국어(next-intl), Google Calendar 연동을 갖춘 프로덕션 서비스입니다.",
    features: [
      {
        title: "4가지 AI 기능",
        description:
          "일정 추천, 갈등 해결, 데이트 코스 추천, 감정 분석 — AI SDK + Google Gemini",
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
      backend: [
        "Supabase",
        "PostgreSQL",
        "Edge Functions",
        "AI SDK",
        "Google Gemini",
      ],
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
        title: "4개 AI 기능",
        description: "AI SDK + Gemini 기반 일정·갈등·데이트·감정 분석",
        icon: "🤖",
        metric: "4가지 AI 기능 통합",
      },
      {
        title: "PWA + 실시간",
        description: "Supabase Realtime + serwist PWA 네이티브 앱 경험",
        icon: "📱",
        metric: "Lighthouse PWA 100점 목표",
      },
    ],
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
      "JavaScript/TypeScript 유틸리티 함수 라이브러리 (npm 0.2.0)",
    description:
      "자주 사용하는 JavaScript/TypeScript 유틸리티 함수들을 모아놓은 npm 패키지입니다. 문자열 처리, 날짜 포맷팅, 배열 조작 등의 기능을 제공합니다. npm 레지스트리에 v0.2.0 공개 배포되어 있습니다.",
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
        description: "npm 레지스트리에 v0.2.0 공개 배포 (2021-04 publish)",
        icon: "📤",
        metric: "npm v0.2.0 published",
      },
      {
        title: "100% 테스트 커버리지",
        description: "모든 함수에 대한 단위 테스트 작성",
        icon: "✅",
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
      "유학 정보 자동 크롤링 + AI 요약 + 매일 08:00 KST Telegram 브리핑 봇",
    description:
      "유학 에이전시를 위한 일일 브리핑 봇입니다. 14개 소스(비자/이민 정책, 입학, 커뮤니티 등)를 매일 자동 크롤링하고, Gemini로 한국어 요약 + 분류한 뒤 매일 아침 08:00 KST에 Telegram 채널로 자동 발송합니다. PRD 5편 작성 후 단일 세션에서 MVP를 완성한 케이스입니다.",
    features: [
      {
        title: "14개 소스 자동 크롤링",
        description:
          "httpx + BeautifulSoup4 + feedparser로 RSS/HTML 정적 크롤링",
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
        title: "긴급 정책 변경 알림",
        description: "비자 정책 등 중대 변경 감지 시 관리자 DM으로 즉시 알림",
      },
    ],
    techStack: {
      frontend: [],
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
      infrastructure: ["PostgreSQL", "Docker", "uv"],
      desktop: [],
    },
    codeStats: {
      total: 4500,
      backend: 4500,
      tests: 70,
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
        title: "70 테스트 + ruff lint clean",
        description:
          "pipeline + crawler + formatter 단위 테스트, ruff 정적 분석",
        icon: "✅",
      },
      {
        title: "프로덕션 자동화",
        description: "jell-server에 Docker 배포, 매일 자동 브리핑 운영 중",
        icon: "🤖",
      },
    ],
    architecture: {
      summary:
        "Python 비동기 크롤러 → Gemini AI 요약 → PostgreSQL 저장 → APScheduler 스케줄링 → Telegram 발송. 14개 소스 병렬 크롤 + 6시간 헬스체크 + 긴급 변경 즉시 알림.",
      diagram: `flowchart LR
    A[14개 소스<br/>HTML/RSS 크롤링] --> B[Gemini AI<br/>한국어 요약 + 분류]
    B --> C[(PostgreSQL)]
    C --> D[Telegram 봇]
    D --> E[매일 08:00 KST<br/>채널 자동 발송]
    C --> F[6시간 헬스체크<br/>관리자 DM]
    G[긴급 정책 변경] -.-> H[즉시 Admin DM]`,
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

  // 12. JellHub
  {
    id: "jellhub",
    private: true,
    name: "JellHub",
    emoji: "🏠",
    type: ProjectType.FULL_STACK_WEB,
    status: ProjectStatus.PRODUCTION,
    category: ProjectCategory.PERSONAL,
    period: "2026.04 - 현재",
    role: "1인 개발",
    shortDescription: "jell-server 통합 운영 대시보드 (hub.jell.kr)",
    description:
      "자체 호스팅 인프라 jell-server의 통합 운영 대시보드입니다. SSL 인증서 모니터링 + 일일 텔레그램 리포트, 서버 상태/도메인 헬스체크, 텔레그램 봇을 통한 원격 명령(/ssl, /status, /history) 처리 등 셀프호스팅 운영을 한 곳에서 관리합니다. Korean ISP DPI로 Node.js fetch가 차단되는 문제를 fetch shim + webhook 마이그레이션으로 해결했습니다.",
    features: [
      {
        title: "SSL 일일 리포트",
        description:
          "16개 도메인 SSL 만료 모니터링 + D-14 갱신 권장 알림 자동 발송",
      },
      {
        title: "Telegram 봇 명령",
        description:
          "/ssl, /status, /history, /help 봇 명령을 webhook으로 처리",
      },
      {
        title: "서버 SSH 운영",
        description:
          "ssh2로 jell-server에 원격 명령, Socket.IO로 실시간 로그 스트림",
      },
      {
        title: "Korean DPI 우회",
        description:
          "Node.js fetch가 ISP DPI로 차단되는 문제를 wget shim + webhook으로 해결",
      },
    ],
    techStack: {
      frontend: ["Next.js 16", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Socket.IO", "Prisma", "ssh2"],
      infrastructure: ["PostgreSQL", "Docker", "nginx", "Telegram Bot API"],
      desktop: [],
    },
    achievements: [
      {
        title: "Korean DPI 차단 우회",
        description:
          "Node fetch → wget shim 패치 + 폴링 → webhook 마이그레이션으로 Telegram 정상화",
        icon: "🔓",
        metric: "fetch shim + webhook 패턴 정착",
      },
      {
        title: "16 도메인 SSL 자동 모니터링",
        description: "매일 10:00 KST SSL 만료 현황 + D-14 갱신 권장 알람",
        icon: "🔒",
      },
      {
        title: "통합 Telegram 봇",
        description: "/ssl, /status, /history 등 원격 운영 명령을 봇으로 통합",
        icon: "🤖",
      },
    ],
    links: {
      github: "https://github.com/jellive/jellhub",
      live: "https://hub.jell.kr",
    },
  },

  // 13. threat-crawler
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
    links: {
      github: "https://github.com/jellive/hanwha-score",
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
    links: {
      github: "https://github.com/jellive/jell-portfolio-3d",
      live: "https://jell-portfolio-3d.vercel.app",
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
