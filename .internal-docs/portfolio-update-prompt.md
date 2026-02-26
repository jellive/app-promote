# Portfolio `data/projects.ts` 업데이트 프롬프트

> **작성일**: 2026-02-12
> **목적**: Obsidian PARA 시스템 기록과 비교하여 확인된 불일치 사항 수정 + 신규 프로젝트 3개 추가
> **대상 파일**: `data/projects.ts`

---

## 1. 기존 프로젝트 수정사항

### 1-1. AZFlow (`id: "azflow"`)

| 항목     | 현재 (잘못됨)           | 수정값                |
| -------- | ----------------------- | --------------------- |
| `period` | `"2024.08 - 현재"`      | `"2024.12 - 2025.09"` |
| `status` | `ProjectStatus.ARCHIVE` | 그대로 (Archive 맞음) |

---

### 1-2. Cookting (`id: "cookting"`)

| 항목                | 현재 (잘못됨)                                                   | 수정값                                                   |
| ------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| `period`            | `"2024.03 - 현재"`                                              | `"2024.08 - 현재"`                                       |
| `status`            | `ProjectStatus.PRODUCTION`                                      | 그대로 (실제 출시했으므로 PRODUCTION 유지)               |
| `techStack.backend` | `["Supabase", "PostgreSQL", "Edge Functions", "Claude AI API"]` | `["NestJS", "Supabase", "PostgreSQL", "Edge Functions"]` |

추가로 `achievements` 수정:

- `"App Store 심사 중"` → `"App Store 출시"` (description: `"iOS 앱스토어 정식 출시 및 운영 중"`)
- AI 관련 achievement의 description을 `"GPT-4 + Gemini Pro 하이브리드 AI 레시피 추천 시스템"` 으로 수정

`features`에 AI 설명도 업데이트:

- "스마트 레시피 추천" description → `"GPT-4 + Gemini Pro 하이브리드 AI가 보유 재료 기반 최적의 레시피를 생성"`

`techStack.infrastructure`에 `"Docker"` 추가:

```typescript
infrastructure: ["Supabase Auth", "Supabase Storage", "Supabase Realtime", "Docker"],
```

---

### 1-3. Jellmodoro (`id: "jellmodoro"`)

| 항목               | 현재 (잘못됨)                       | 수정값                                           |
| ------------------ | ----------------------------------- | ------------------------------------------------ |
| `period`           | `"2023.08 - 2023.12"`               | `"2025.06 - 현재"`                               |
| `status`           | `ProjectStatus.PRODUCTION`          | `ProjectStatus.DEVELOPMENT`                      |
| `type`             | `ProjectType.IOS`                   | `ProjectType.FULL_STACK_MOBILE`                  |
| `shortDescription` | `"미니멀한 포모도로 타이머 iOS 앱"` | `"미니멀한 포모도로 타이머 앱 (Flutter 리빌드)"` |

> **참고**: 사용자 확인 - "a가 맞아" (Flutter 리빌드 버전으로 표시). 기존 Swift/SwiftUI App Store 버전(2023)은 별도 추가하지 않음. Flutter 버전이 출시되면 status를 PRODUCTION으로 변경 예정.

`description` 수정:

```
"포모도로 기법을 적용한 미니멀 디자인의 타이머 앱입니다. 기존 Swift/SwiftUI 앱을 Flutter + NestJS 풀스택으로 리빌드 중이며, Clean Architecture와 TDD를 적용하고 있습니다."
```

`techStack` 수정:

```typescript
techStack: {
  frontend: ["Flutter", "Dart", "Riverpod"],
  backend: ["NestJS", "TypeScript", "PostgreSQL"],
  infrastructure: ["Docker", "Firebase"],
  desktop: [],
},
```

`features` 수정:

```typescript
features: [
  { title: "포모도로 타이머", description: "25분 집중 + 5분 휴식 사이클 관리" },
  { title: "집중 통계", description: "일간/주간/월간 집중 시간 통계 및 분석" },
  { title: "커스텀 타이머", description: "사용자 정의 시간 설정 가능" },
  { title: "크로스 플랫폼", description: "Flutter 기반 iOS/Android 동시 지원" },
],
```

`achievements` 수정:

```typescript
achievements: [
  { title: "Flutter 리빌드", description: "Swift → Flutter + NestJS 풀스택 전환", icon: "🔄" },
  { title: "Clean Architecture", description: "TDD 기반 체계적 아키텍처 적용", icon: "🏗️" },
],
```

`links` - `appStore` 제거 (아직 Flutter 버전 미출시):

```typescript
links: {
  github: "https://github.com/jellive/jellmodoro",
},
```

---

### 1-4. 나무위키 링커 (`id: "namuwiki-linker"`)

| 항목     | 현재 (잘못됨)      | 수정값             |
| -------- | ------------------ | ------------------ |
| `period` | `"2024.06 - 현재"` | `"2025.10 - 현재"` |

---

### 1-5. Dev Utils Hub (`id: "dev-utils-hub"`)

| 항목     | 현재 (잘못됨)         | 수정값             |
| -------- | --------------------- | ------------------ |
| `period` | `"2024.01 - 2024.06"` | `"2025.11 - 현재"` |

`techStack.desktop` 수정:

```typescript
desktop: ["Electron"],  // Tauri → Electron (Rust 제거)
```

> **참고**: Obsidian 개발자 대시보드에 `Electron, React`로 기록됨. Tauri/Rust는 잘못된 정보.

---

### 1-6. Certificate Sync Manager (`id: "cert-sync-manager"`)

| 항목     | 현재 (잘못됨)         | 수정값             |
| -------- | --------------------- | ------------------ |
| `period` | `"2024.02 - 2024.04"` | `"2025.11 - 현재"` |

`techStack.backend` 수정:

```typescript
backend: ["Python"],  // Node.js/TypeScript → Python
```

> **참고**: Obsidian 개발자 대시보드에 `Python, Docker, Cron`으로 기록됨.

---

### 1-7. Chzzk OBS Connector (`id: "chzzk-obs"`)

| 항목     | 현재 (잘못됨)      | 수정값             |
| -------- | ------------------ | ------------------ |
| `period` | `"2024.05 - 현재"` | `"2025.11 - 현재"` |

---

### 1-8. jell-utils.js (`id: "jell-utils"`)

| 항목     | 현재 (잘못됨)              | 수정값                  |
| -------- | -------------------------- | ----------------------- |
| `period` | `"2022.06 - 2023.02"`      | `"2025.10 - 현재"`      |
| `status` | `ProjectStatus.PRODUCTION` | `ProjectStatus.ARCHIVE` |

> **참고**: Obsidian Archive MOC에 `2025-10-08 ~ 2025-10-11`로 기록, 유지보수 모드.

---

### 1-9. 러닝포털 (`id: "learning-portal"`) - **대규모 수정**

> **수정일**: 2026-02-13
> **사유**: 프로젝트 정보 전면 부정확 (B2B LMS → 학생 어학 교육 플랫폼, React → Vue 2, Java → Kotlin, MySQL → MSSQL)

| 항목               | 현재 (잘못됨)                  | 수정값                                   |
| ------------------ | ------------------------------ | ---------------------------------------- |
| `type`             | `ProjectType.WEB`              | `ProjectType.FULL_STACK_MOBILE`          |
| `role`             | `"선임연구원 (청담러닝)"`      | `"대리 (청담어학원, 현 크레버스)"`       |
| `shortDescription` | `"B2B 교육 관리 시스템 (LMS)"` | `"학생 어학 교육 웹서비스 및 모바일 앱"` |

`description` 전체 교체:

```typescript
description:
  "청담어학원(현 크레버스)의 학생 어학 교육 플랫폼입니다. 러닝포털(학생 숙제/활동 관리 포털), i-Learning(Writing/Listening 등 실전 학습 수행 웹서비스), 청담 올림(학부모 등하원 관리/안내문/교재·학원비 납부) 등 복합 서비스를 Vue 2 웹과 Android/iOS 네이티브 웹앱으로 개발·운영했습니다.",
```

`features` 전체 교체:

```typescript
features: [
  {
    title: "러닝포털",
    description: "학생이 수업 후 숙제 확인 및 활동을 수행하는 포털 웹사이트 및 모바일 앱",
  },
  {
    title: "i-Learning",
    description: "Writing, Listening 등 마이크·키보드를 활용한 실전 숙제 수행 웹서비스",
  },
  {
    title: "청담 올림",
    description: "학부모 자녀 등하원 관리, 안내문 수신, 교재 및 학원비 납부 서비스",
  },
],
```

`techStack` 전체 교체:

```typescript
techStack: {
  frontend: ["Vue 2", "JavaScript", "Android (Native)", "iOS (Native)"],
  backend: ["Kotlin", "Spring Boot", "MSSQL"],
  infrastructure: ["AWS"],
  desktop: [],
},
```

`achievements` 전체 교체:

```typescript
achievements: [
  {
    title: "멀티 플랫폼",
    description: "Web + Android + iOS 네이티브 웹앱 동시 운영",
    icon: "📱",
  },
  {
    title: "어학 교육 서비스",
    description: "청담어학원 학생·학부모 대상 종합 교육 플랫폼",
    icon: "🎓",
  },
],
```

**추가로 `about-section.tsx` 수정**:

```typescript
// "청담러닝에서 React, Spring Boot 기반 LMS 시스템을 구축했습니다." →
"청담어학원(현 크레버스)에서 Vue 2, Kotlin Spring Boot 기반 학생 어학 교육 플랫폼을 구축했습니다.";
```

---

## 2. 신규 프로젝트 추가 (3개)

### 2-1. 빈자리 (Vinjari) - 캠핑장 예약 플랫폼 Flutter 앱

> **위치**: `PERSONAL PROJECTS` 섹션 최상단 (또는 별도 외주 프로젝트 섹션)

```typescript
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
    },
    {
      title: "Clean Architecture A-",
      description: "TDD 기반 체계적 아키텍처 (1,156+ 테스트)",
      icon: "🏗️",
    },
    {
      title: "대규모 리팩토링",
      description: "Bridge 코드 -3,341줄 최적화",
      icon: "♻️",
    },
  ],
  links: {},
},
```

---

### 2-2. Time Letter - 타임캡슐 일기 앱

> **위치**: `PERSONAL PROJECTS` 섹션

```typescript
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
      description: "EAS Update 기반 development/preview/production 3단계 배포",
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
```

---

### 2-3. 커플 플래너 (Couple Planner) - 커플 일정/기념일 공유 앱

> **위치**: `PERSONAL PROJECTS` 섹션

```typescript
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
```

---

## 3. Enum 추가 필요 여부

현재 `ProjectType` enum에 신규 프로젝트에 필요한 타입이 모두 존재합니다:

- Vinjari: `FULL_STACK_MOBILE` ✅
- Time Letter: `FULL_STACK_MOBILE` ✅
- Couple Planner: `FULL_STACK_WEB` ✅

별도 enum 추가 불필요.

---

## 4. 프로젝트 순서 권장

### PROFESSIONAL PROJECTS (회사 프로젝트)

1. AZFlow (archive)
2. finiroom (archive)
3. glinda AIMI (archive)
4. 러닝포털 / i-Learning / 청담 올림 (archive) - **대규모 수정 (1-9 참조)**
5. KnowRecorder (archive)
6. KnowLounge (archive)
7. Gotalk (archive)

### PERSONAL / FREELANCE PROJECTS (개인 & 외주 프로젝트)

1. **🆕 빈자리 (Vinjari)** - production, 프리랜서
2. Cookting - production
3. **🆕 Time Letter** - development
4. **🆕 커플 플래너** - development
5. Jellmodoro - development (Flutter 리빌드)
6. Wecanner - production (Swift 현행 유지)
7. Dev Utils Hub - production
8. Chzzk OBS Connector - development
9. Certificate Sync Manager - production
10. 나무위키 링커 - production
11. jell-utils.js - archive

---

## 5. 파일 상단 주석 업데이트

```typescript
/**
 * @fileoverview Project data structure and helper functions
 * Contains TypeScript types/interfaces and data for all 18 portfolio projects
 */
```

> 기존 "8 portfolio projects" → "18 portfolio projects" (회사 7 + 개인/외주 11)

---

## 6. 검증 체크리스트

수정 완료 후 다음 항목을 확인해주세요:

- [ ] AZFlow period: `"2024.12 - 2025.09"` ✅
- [ ] Cookting period: `"2024.08 - 현재"`, backend: NestJS 포함 ✅
- [ ] Jellmodoro: Flutter 리빌드 버전으로 전환 ✅
- [ ] 나무위키 링커 period: `"2025.10 - 현재"` ✅
- [ ] Dev Utils Hub: Electron (not Tauri), period `"2025.11 - 현재"` ✅
- [ ] Cert Sync Manager: Python (not Node.js), period `"2025.11 - 현재"` ✅
- [ ] Chzzk OBS: period `"2025.11 - 현재"` ✅
- [ ] jell-utils.js: period `"2025.10 - 현재"`, status ARCHIVE ✅
- [ ] 신규: Vinjari 추가 ✅
- [ ] 신규: Time Letter 추가 ✅
- [ ] 신규: Couple Planner 추가 ✅
- [ ] 파일 상단 주석 프로젝트 수 업데이트 ✅
- [ ] TypeScript 컴파일 에러 없음 ✅
- [ ] 기존 helper functions 정상 동작 ✅

---

_작성: PARA+GTD 자동화 에이전트 (2026-02-12)_
_출처: Obsidian 개발자 대시보드, Projects MOC, Archive MOC, project-status-query.md 비교 분석_
