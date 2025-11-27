/**
 * @fileoverview Project data structure and helper functions
 * Contains TypeScript types/interfaces and data for all 8 portfolio projects
 */

// ============================================================================
// ENUMS
// ============================================================================

/**
 * Project type classification
 */
export enum ProjectType {
  FULL_STACK_MOBILE = 'full-stack-mobile',
  DESKTOP = 'desktop',
  INFRASTRUCTURE = 'infrastructure',
  CHROME_EXTENSION = 'chrome-extension',
  IOS = 'ios',
  NPM_PACKAGE = 'npm-package',
}

/**
 * Project status
 */
export enum ProjectStatus {
  PRODUCTION = 'production',
  APP_STORE_REVIEW = 'app-store-review',
  ARCHIVE = 'archive',
  DEVELOPMENT = 'development',
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
  // 1. Cookting
  {
    id: 'cookting',
    name: 'Cookting',
    emoji: '🍳',
    type: ProjectType.FULL_STACK_MOBILE,
    status: ProjectStatus.APP_STORE_REVIEW,
    period: '2024.03 - 현재',
    role: '1인 풀스택 개발',
    shortDescription: 'AI 기반 냉장고 재료 인식 레시피 추천 앱',
    description:
      '냉장고 속 재료를 AI가 자동으로 인식하고, 보유한 재료로 만들 수 있는 최적의 레시피를 추천해주는 iOS 앱입니다. Claude AI를 활용한 자연어 레시피 생성과 실시간 재료 관리 기능을 제공합니다.',
    features: [
      {
        title: 'AI 재료 인식',
        description: '카메라로 냉장고를 촬영하면 AI가 재료를 자동 인식',
      },
      {
        title: '스마트 레시피 추천',
        description: '보유 재료 기반 최적의 레시피를 AI가 생성',
      },
      {
        title: '재료 유통기한 관리',
        description: '재료별 유통기한 알림 및 관리 시스템',
      },
      {
        title: '레시피 저장 및 공유',
        description: '마음에 드는 레시피 저장 및 소셜 공유',
      },
    ],
    techStack: {
      frontend: ['Flutter', 'Dart', 'Riverpod', 'GetIt'],
      backend: ['Supabase', 'PostgreSQL', 'Edge Functions', 'Claude AI API'],
      infrastructure: ['Supabase Auth', 'Supabase Storage', 'Supabase Realtime'],
      desktop: [],
    },
    codeStats: {
      total: 15000,
      frontend: 12000,
      backend: 3000,
    },
    achievements: [
      {
        title: 'App Store 심사 중',
        description: 'iOS 앱스토어 출시를 위한 심사 진행 중',
        icon: '📱',
      },
      {
        title: 'AI 통합',
        description: 'Claude AI를 활용한 지능형 레시피 추천 시스템',
        icon: '🤖',
      },
    ],
    links: {
      github: 'https://github.com/jellive/cookting',
    },
  },

  // 2. Dev Utils Hub
  {
    id: 'dev-utils-hub',
    name: 'Dev Utils Hub',
    emoji: '🛠️',
    type: ProjectType.DESKTOP,
    status: ProjectStatus.PRODUCTION,
    period: '2024.01 - 2024.06',
    role: '1인 개발',
    shortDescription: '개발자를 위한 올인원 유틸리티 데스크톱 앱',
    description:
      '개발 작업에서 자주 사용하는 다양한 유틸리티 기능들을 하나의 앱으로 통합했습니다. JSON 포맷터, Base64 인코더/디코더, UUID 생성기, 정규식 테스터 등 20개 이상의 도구를 제공합니다.',
    features: [
      {
        title: 'JSON 포맷터/검증기',
        description: 'JSON 데이터 자동 정렬 및 유효성 검사',
      },
      {
        title: 'Base64 인코더/디코더',
        description: '텍스트 및 파일의 Base64 변환',
      },
      {
        title: 'UUID/ULID 생성기',
        description: '다양한 형식의 고유 ID 생성',
      },
      {
        title: '정규식 테스터',
        description: '실시간 정규식 매칭 테스트 및 하이라이팅',
      },
      {
        title: '해시 생성기',
        description: 'MD5, SHA-1, SHA-256 등 다양한 해시 생성',
      },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'TailwindCSS', 'Radix UI'],
      backend: [],
      infrastructure: [],
      desktop: ['Tauri', 'Rust'],
    },
    codeStats: {
      total: 8000,
      frontend: 7000,
    },
    achievements: [
      {
        title: '20+ 유틸리티',
        description: '개발자에게 필요한 다양한 도구 통합',
        icon: '🧰',
      },
      {
        title: '오프라인 지원',
        description: '인터넷 없이도 모든 기능 사용 가능',
        icon: '📴',
      },
    ],
    links: {
      github: 'https://github.com/jellive/dev-utils-hub',
    },
  },

  // 3. Certificate Sync Manager
  {
    id: 'cert-sync-manager',
    name: 'Certificate Sync Manager',
    emoji: '🔐',
    type: ProjectType.INFRASTRUCTURE,
    status: ProjectStatus.PRODUCTION,
    period: '2024.02 - 2024.04',
    role: '1인 개발',
    shortDescription: 'Let\'s Encrypt 인증서 자동 동기화 시스템',
    description:
      'Let\'s Encrypt 와일드카드 SSL 인증서를 발급받아 여러 서버에 자동으로 동기화하는 인프라 도구입니다. Docker 컨테이너 기반으로 실행되며, 인증서 갱신 시 자동으로 모든 대상 서버에 배포됩니다.',
    features: [
      {
        title: '자동 인증서 발급',
        description: 'Let\'s Encrypt 와일드카드 인증서 자동 발급',
      },
      {
        title: '멀티 서버 동기화',
        description: 'SSH를 통한 여러 서버로 인증서 자동 배포',
      },
      {
        title: '자동 갱신',
        description: '인증서 만료 전 자동 갱신 및 재배포',
      },
      {
        title: 'Docker 기반',
        description: '컨테이너 환경에서 독립적으로 실행',
      },
    ],
    techStack: {
      frontend: [],
      backend: ['Node.js', 'TypeScript'],
      infrastructure: ['Docker', 'Let\'s Encrypt', 'Certbot', 'SSH', 'Cron'],
      desktop: [],
    },
    codeStats: {
      total: 2500,
      backend: 2500,
    },
    achievements: [
      {
        title: '인프라 자동화',
        description: '인증서 관리 완전 자동화로 운영 부담 감소',
        icon: '🔄',
      },
      {
        title: 'Zero-downtime',
        description: '서비스 중단 없이 인증서 교체',
        icon: '✅',
      },
    ],
    links: {
      github: 'https://github.com/jellive/cert-sync-manager',
    },
  },

  // 4. Chzzk OBS Connector
  {
    id: 'chzzk-obs',
    name: 'Chzzk OBS Connector',
    emoji: '📺',
    type: ProjectType.DESKTOP,
    status: ProjectStatus.DEVELOPMENT,
    period: '2024.05 - 현재',
    role: '1인 개발',
    shortDescription: '치지직 스트리밍을 위한 OBS 연동 도구',
    description:
      '네이버 치지직(Chzzk) 플랫폼에서 스트리밍할 때 OBS Studio와 연동하여 채팅 오버레이, 알림 시스템, 방송 정보 표시 등의 기능을 제공하는 데스크톱 애플리케이션입니다.',
    features: [
      {
        title: '실시간 채팅 오버레이',
        description: '치지직 채팅을 OBS에 오버레이로 표시',
      },
      {
        title: '후원 알림',
        description: '치즈 후원 실시간 알림 및 TTS',
      },
      {
        title: '방송 정보 위젯',
        description: '시청자 수, 방송 시간 등 정보 표시',
      },
      {
        title: '커스텀 테마',
        description: '사용자 정의 가능한 오버레이 디자인',
      },
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'TailwindCSS'],
      backend: ['Node.js', 'WebSocket'],
      infrastructure: [],
      desktop: ['Electron', 'OBS WebSocket'],
    },
    codeStats: {
      total: 6000,
      frontend: 4500,
      backend: 1500,
    },
    achievements: [
      {
        title: '개발 진행률 95%',
        description: '핵심 기능 구현 완료, 최종 테스트 중',
        icon: '🚧',
      },
    ],
    links: {
      github: 'https://github.com/jellive/chzzk-obs',
    },
  },

  // 5. 나무위키 링커
  {
    id: 'namuwiki-linker',
    name: '나무위키 링커',
    emoji: '🌳',
    type: ProjectType.CHROME_EXTENSION,
    status: ProjectStatus.DEVELOPMENT,
    period: '2024.06 - 현재',
    role: '1인 개발',
    shortDescription: '웹페이지 텍스트를 나무위키로 연결하는 확장 프로그램',
    description:
      '웹페이지에서 텍스트를 선택하면 해당 단어의 나무위키 문서로 바로 연결해주는 Chrome 확장 프로그램입니다. 우클릭 컨텍스트 메뉴와 키보드 단축키를 지원합니다.',
    features: [
      {
        title: '컨텍스트 메뉴 연동',
        description: '텍스트 선택 후 우클릭으로 나무위키 검색',
      },
      {
        title: '키보드 단축키',
        description: '선택 텍스트를 단축키로 빠르게 검색',
      },
      {
        title: '팝업 미리보기',
        description: '새 탭 열기 전 문서 미리보기 제공',
      },
      {
        title: '검색 기록',
        description: '최근 검색한 단어 목록 저장',
      },
    ],
    techStack: {
      frontend: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'],
      backend: [],
      infrastructure: [],
      desktop: [],
    },
    codeStats: {
      total: 1500,
      frontend: 1500,
    },
    links: {
      github: 'https://github.com/jellive/namuwiki-linker',
    },
  },

  // 6. Jellmodoro
  {
    id: 'jellmodoro',
    name: 'Jellmodoro',
    emoji: '🍅',
    type: ProjectType.IOS,
    status: ProjectStatus.PRODUCTION,
    period: '2023.08 - 2023.12',
    role: '1인 개발',
    shortDescription: '미니멀한 포모도로 타이머 iOS 앱',
    description:
      '집중력 향상을 위한 포모도로 기법을 적용한 미니멀 디자인의 iOS 타이머 앱입니다. 직관적인 UI와 Apple Watch 연동을 지원하며, 집중 통계를 제공합니다.',
    features: [
      {
        title: '포모도로 타이머',
        description: '25분 집중 + 5분 휴식 사이클 관리',
      },
      {
        title: 'Apple Watch 연동',
        description: '워치에서 타이머 시작/정지 및 확인',
      },
      {
        title: '집중 통계',
        description: '일간/주간/월간 집중 시간 통계',
      },
      {
        title: '커스텀 타이머',
        description: '사용자 정의 시간 설정 가능',
      },
    ],
    techStack: {
      frontend: ['Swift', 'SwiftUI', 'WatchKit'],
      backend: [],
      infrastructure: ['CloudKit', 'WidgetKit'],
      desktop: [],
    },
    codeStats: {
      total: 5000,
      frontend: 5000,
    },
    achievements: [
      {
        title: 'App Store 출시',
        description: 'iOS 앱스토어 정식 출시',
        icon: '🎉',
      },
      {
        title: 'Apple Watch 지원',
        description: '워치 앱 및 컴플리케이션 제공',
        icon: '⌚',
      },
    ],
    links: {
      appStore: 'https://apps.apple.com/app/jellmodoro',
      github: 'https://github.com/jellive/jellmodoro',
    },
  },

  // 7. Wecanner
  {
    id: 'wecanner',
    name: 'Wecanner',
    emoji: '📷',
    type: ProjectType.IOS,
    status: ProjectStatus.DEVELOPMENT,
    period: '2024.04 - 현재',
    role: '1인 개발',
    shortDescription: '문서 스캔 및 OCR iOS 앱',
    description:
      '문서, 영수증, 명함 등을 스캔하고 OCR로 텍스트를 추출하는 iOS 앱입니다. 스캔한 문서를 PDF로 저장하고, 클라우드에 동기화할 수 있습니다.',
    features: [
      {
        title: '자동 문서 감지',
        description: '카메라로 문서를 자동 인식하고 크롭',
      },
      {
        title: 'OCR 텍스트 추출',
        description: '스캔 이미지에서 텍스트 자동 추출',
      },
      {
        title: 'PDF 내보내기',
        description: '여러 페이지를 하나의 PDF로 병합',
      },
      {
        title: 'iCloud 동기화',
        description: '스캔 문서 클라우드 자동 백업',
      },
    ],
    techStack: {
      frontend: ['Swift', 'SwiftUI', 'Vision Framework'],
      backend: [],
      infrastructure: ['CloudKit', 'Core Data'],
      desktop: [],
    },
    codeStats: {
      total: 4000,
      frontend: 4000,
    },
    links: {
      github: 'https://github.com/jellive/wecanner',
    },
  },

  // 8. jell-utils.js
  {
    id: 'jell-utils',
    name: 'jell-utils.js',
    emoji: '📦',
    type: ProjectType.NPM_PACKAGE,
    status: ProjectStatus.ARCHIVE,
    period: '2022.06 - 2023.02',
    role: '1인 개발',
    shortDescription: 'JavaScript/TypeScript 유틸리티 함수 라이브러리',
    description:
      '자주 사용하는 JavaScript/TypeScript 유틸리티 함수들을 모아놓은 npm 패키지입니다. 문자열 처리, 날짜 포맷팅, 배열 조작 등의 기능을 제공합니다.',
    features: [
      {
        title: '문자열 유틸리티',
        description: '문자열 변환, 포맷팅, 검증 함수',
      },
      {
        title: '날짜 유틸리티',
        description: '날짜 포맷팅 및 계산 함수',
      },
      {
        title: '배열 유틸리티',
        description: '배열 정렬, 필터링, 그룹핑 함수',
      },
      {
        title: 'TypeScript 지원',
        description: '완전한 타입 정의 제공',
      },
    ],
    techStack: {
      frontend: ['TypeScript', 'JavaScript'],
      backend: [],
      infrastructure: ['npm', 'GitHub Actions', 'Jest'],
      desktop: [],
    },
    codeStats: {
      total: 3000,
      tests: 1500,
    },
    achievements: [
      {
        title: 'npm 배포',
        description: 'npm 레지스트리에 공개 배포',
        icon: '📤',
      },
      {
        title: '100% 테스트 커버리지',
        description: '모든 함수에 대한 단위 테스트 작성',
        icon: '✅',
      },
    ],
    links: {
      npm: 'https://www.npmjs.com/package/jell-utils',
      github: 'https://github.com/jellive/jell-utils',
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
