# 포트폴리오 사이트 개선 기획서 (PRD)

> **작성일**: 2026-02-26
> **대상 사이트**: https://app.jell.kr
> **프로젝트 경로**: `/Users/jellpd/Documents/GitHub/app-promote`
> **목적**: 구직 전환율(지원 → 면접 → 합격) 극대화를 위한 포트폴리오 사이트 전면 개선
> **우선순위 기준**: 채용 담당자/CTO가 보는 관점에서의 임팩트 순

---

## 목차

1. [현재 상태 분석](#1-현재-상태-분석)
2. [핵심 문제점 진단](#2-핵심-문제점-진단)
3. [Phase 1: 긴급 개선 (1-2일)](#3-phase-1-긴급-개선-1-2일)
4. [Phase 2: 전환율 극대화 (3-5일)](#4-phase-2-전환율-극대화-3-5일)
5. [Phase 3: 차별화 기능 (1-2주)](#5-phase-3-차별화-기능-1-2주)
6. [기술적 개선사항](#6-기술적-개선사항)
7. [데이터 개선사항](#7-데이터-개선사항)
8. [SEO 및 퍼포먼스](#8-seo-및-퍼포먼스)
9. [구현 체크리스트](#9-구현-체크리스트)

---

## 1. 현재 상태 분석

### 1-1. 기술 스택

| 항목         | 현재 버전   | 비고            |
| ------------ | ----------- | --------------- |
| Next.js      | 14.2.35     | App Router      |
| React        | ^18         |                 |
| TypeScript   | ^5          |                 |
| Tailwind CSS | ^3.4.12     |                 |
| Radix UI     | ^1.3.0      | Icons, Slot     |
| Lucide React | ^0.446.0    |                 |
| next-themes  | ^0.4.6      | 다크모드        |
| Jest         | ^30.2.0     | 단위 테스트     |
| Playwright   | ^1.57.0     | E2E 테스트      |
| Yarn         | 4.5.0 (PnP) | 패키지 매니저   |
| Vercel       | 배포        | `.vercel/` 존재 |

### 1-2. 파일 구조 (현재)

```
app/
├── page.tsx              # 메인 페이지 (모든 섹션 포함)
├── layout.tsx            # 루트 레이아웃 (SEO 메타데이터)
├── globals.css           # 글로벌 스타일
├── privacy/page.tsx      # 개인정보처리방침
├── projects/[id]/page.tsx # 프로젝트 상세 페이지
├── robots.ts             # robots.txt
├── sitemap.ts            # sitemap.xml
├── icon.tsx              # 동적 아이콘
components/
├── sections/
│   ├── hero-section.tsx      # 히어로 (타이핑 애니메이션)
│   ├── stats-section.tsx     # 숫자 통계 (4개)
│   ├── projects-section.tsx  # 프로젝트 목록 (필터 탭)
│   ├── skills-section.tsx    # 기술 스택 (탭 전환)
│   ├── about-section.tsx     # 소개 + 타임라인 + 성과
│   └── contact-section.tsx   # 연락처 + 폼 (mailto:)
├── ui/                       # shadcn/ui 기반
├── skeletons/                # 로딩 스켈레톤
├── seo/json-ld.tsx          # 구조화 데이터
├── project-card.tsx          # 프로젝트 카드
├── stat-card.tsx             # 통계 카드
├── header.tsx / footer.tsx   # (미사용, page.tsx에 인라인)
data/
└── projects.ts              # 18개 프로젝트 데이터 (1141줄)
```

### 1-3. 현재 잘 되어 있는 점

- "AVAILABLE FOR HIRE" 배지 → 채용 의사 명확
- 18개 프로젝트 목록 및 기술 스택 정리 → 폭넓은 경험 증명
- 숫자 기반 통계 (8년+, 18 프로젝트, 1.6K 테스트, 96.8% 커버리지)
- Brutalist 디자인 → 차별화된 시각적 임팩트
- 다크모드 지원
- JSON-LD 구조화 데이터 → SEO 기본 대응
- sitemap.xml / robots.txt → 검색엔진 크롤링 대응
- 프로젝트 필터 (전체/Active/Archive)
- 기술 스택 탭 전환 (6개 카테고리)
- 타이핑 애니메이션 → 시각적 흥미

### 1-4. 핵심 수치

- 프로젝트: 18개 (회사 7, 개인/외주 11)
- Active: 13개, Archive: 5개 (jell-utils 포함)
- 기술 스택: 6개 카테고리, 38개 기술
- 총 코드: 50,000+ 라인
- 총 테스트: 1,649개

---

## 2. 핵심 문제점 진단

### 2-1. 구직 전환율 관점에서의 치명적 문제

#### P0: "이 사람을 뽑으면 뭐가 좋은가?" 답이 없음

**현상**: 프로젝트 나열은 되어 있으나, **비즈니스 임팩트(성과 수치)**가 전혀 없음.

- projects.ts의 `achievements` 필드: 기술적 설명뿐, 수치적 성과 없음
  - 예: `"마이크로서비스 아키텍처"` (그래서 뭐가 좋아진건데?)
  - 예: `"App Store 출시"` (몇 다운로드인데?)
- 채용 담당자가 원하는 것: "MAU 500명 → 2,000명 성장", "API 응답시간 40% 개선", "테스트 커버리지 0% → 96.8% 달성"

#### P0: "지금 구직 중인가?" 혼란

**현상**: 타임라인 마지막이 `2024: 수석연구원으로 활동 - 리드하고 있습니다`로 끝남.

- `about-section.tsx` 67행: `"애즈플로우에서 AZFlow SaaS 플랫폼 개발을 리드하고 있습니다."` → **현재 재직 중처럼 보임**
- `projects.ts` 134행: AZFlow의 period는 `"2024.12 - 2025.09"`로 이미 종료 → **불일치**
- 히어로에 "AVAILABLE FOR HIRE"가 있지만, About 섹션까지 스크롤하면 **혼란 발생**

#### P1: 소개글이 범용적

**현상**: `about-section.tsx` 137행의 소개글:

> "사용자 중심의 직관적인 인터페이스와 안정적인 백엔드 시스템을 구축하는 것을 좋아합니다."

→ 모든 풀스택 개발자가 쓸 수 있는 문장. **차별점 0%.** LiDAR, WebGL, 하이브리드 앱 등 독보적 경험이 묻힘.

#### P1: 이력서(CV) 다운로드 불가

**현상**: 채용 담당자가 포트폴리오를 봤을 때 → 사내 시스템에 올릴 PDF 이력서 필요 → 없음 → 이탈.

#### P1: 블로그 링크 안 보임

**현상**: 80+개의 기술 블로그 포스트가 있으나, 포트폴리오에서 접근 불가.

- `page.tsx` 109행: 푸터에 `Blog` 링크가 있긴 하지만 → 푸터까지 스크롤하는 사람 거의 없음.
- 네비게이션(`nav`)에 블로그 링크 없음 (32행).

#### P2: 연락 폼이 `mailto:` 기반

**현상**: `contact-section.tsx` 89행: `window.location.href = "mailto:..."` → 이메일 클라이언트가 없으면 동작 안 함.

- 외부 서비스(FormSpree, Resend 등) 미사용
- 연락이 실패하면 → 면접 기회 0%

#### P2: 프로젝트 스크린샷 없음

**현상**: `projects.ts`의 `screenshots` 필드가 모든 프로젝트에서 비어 있음.

- 프로젝트 상세 페이지(`projects/[id]/page.tsx`)에서 시각적 요소 부재
- 채용 담당자는 **코드보다 결과물**을 보고 싶어함

---

## 3. Phase 1: 긴급 개선 (1-2일)

> **목표**: 당장 면접 전환율에 직접 영향을 미치는 항목

### 3-1. [P0] 타임라인 + About 섹션 "구직 중" 명시

**파일**: `components/sections/about-section.tsx`

**수정 1**: 타임라인 데이터에 2025년 항목 추가

```typescript
// 기존 timelineData 배열에 추가
{
  year: "2025",
  title: "프리랜서 & 새로운 도전",
  description:
    "빈자리(캠핑장 앱) Flutter 프리랜서 프로젝트를 완수하고, 새로운 풀타임 기회를 찾고 있습니다.",
  icon: Rocket, // 또는 새 아이콘
},
```

**수정 2**: 2024년 항목의 description 수정 (현재진행형 → 과거형)

```typescript
// 기존
"애즈플로우에서 AZFlow SaaS 플랫폼 개발을 리드하고 있습니다.";
// 수정
"애즈플로우에서 AZFlow SaaS 플랫폼 개발을 리드했습니다.";
```

**수정 3**: 히어로 섹션 설명에 희망 포지션 추가 또는 About 섹션 상단에 구직 상태 배지

```tsx
// hero-section.tsx 또는 about-section.tsx
<div className="px-4 py-2 bg-primary text-foreground font-mono text-sm font-bold">
  🔍 풀스택 / 프론트엔드 시니어 포지션을 찾고 있습니다
</div>
```

**예상 소요**: 30분
**임팩트**: 매우 높음 (혼란 제거 → 채용 담당자가 즉시 "이 사람 구직 중이구나" 인식)

---

### 3-2. [P0] 프로젝트별 비즈니스 임팩트 수치 추가

**파일**: `data/projects.ts`

**수정**: 각 프로젝트의 `achievements` 배열에 **정량적 성과** 추가.

수치가 정확하지 않더라도, 추정 가능한 범위로 작성하는 것이 없는 것보다 훨씬 나음.

**인터페이스 확장** (필요 시):

```typescript
export interface Achievement {
  title: string;
  description: string;
  icon?: string;
  metric?: string; // "MAU 500+", "-3,341 LOC", "96.8% Coverage" 등
}
```

**프로젝트별 추천 성과 수치**:

| 프로젝트        | 추천 성과 수치                                                                      |
| --------------- | ----------------------------------------------------------------------------------- |
| AZFlow          | "마이크로서비스 3개 독립 배포", "Swagger API 문서 100% 자동화"                      |
| finiroom        | "App Store 정식 출시", "LiDAR 기반 공간 정확도 95%+"                                |
| glinda AIMI     | "Unity-Web 양방향 통신 0.1초 이내", "상용 서비스 런칭"                              |
| 러닝포털        | "학생/학부모 대상 3개 서비스 동시 운영", "Web + Android + iOS 멀티플랫폼"           |
| 빈자리(Vinjari) | "1,156개 테스트 작성 (TDD)", "Bridge 코드 -3,341줄 최적화", "Clean Architecture A-" |
| Cookting        | "App Store 출시", "GPT-4 + Gemini Pro 하이브리드 AI"                                |
| Time Letter     | "테스트 커버리지 82%", "Turborepo 모노레포 전환"                                    |
| 커플 플래너     | "PWA 네이티브 수준 경험", "Supabase Realtime 실시간 동기화"                         |

**예상 소요**: 2-3시간
**임팩트**: 매우 높음 (채용 담당자가 "이 사람은 실적이 있다" 인식)

---

### 3-3. [P1] 소개글 차별화 (About 바이오)

**파일**: `components/sections/about-section.tsx` → `about-bio` data-testid 부분

**현재**:

> 저는 풀스택 개발자로서 웹, 모바일, 데스크톱 애플리케이션을 개발합니다. 사용자 중심의 직관적인 인터페이스와 안정적인 백엔드 시스템을 구축하는 것을 좋아합니다. 테스트 주도 개발(TDD)과 클린 코드를 실천하며, 지속적인 학습을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.

**수정 제안**:

> iOS 앱부터 WebGL 3D 쇼룸, 핀테크 SaaS까지 — 플랫폼을 가리지 않고 **사용자가 실제로 쓰는 서비스**를 만들어온 8년차 풀스택 개발자입니다.
>
> LiDAR 기반 공간 스캐닝, 실시간 화이트보드 교육 시스템, 투자 관리 플랫폼 등 **기술적 도전이 있는 프로젝트**에서 가장 빛을 발합니다. 최근에는 Flutter 하이브리드 앱에서 1,156개의 테스트를 작성하며 TDD와 Clean Architecture를 실천하고 있습니다.

**핵심 원칙**:

- 구체적 기술/프로젝트명 언급 → 신뢰도 상승
- "좋아합니다", "노력합니다" 같은 모호한 표현 제거
- 숫자 포함 → 설득력

**예상 소요**: 30분
**임팩트**: 높음

---

### 3-4. [P1] 네비게이션에 블로그 링크 추가

**파일**: `app/page.tsx` (31-59행 nav 영역)

**현재 네비게이션**: 프로젝트, 기술 스택, 소개, 연락하기

**추가**:

```tsx
<Link
  href="https://blog.jell.kr"
  className="text-sm font-medium hover:text-primary transition-colors"
  target="_blank"
  rel="noopener noreferrer"
>
  블로그
</Link>
```

추가로 **히어로 섹션 소셜 링크**에도 블로그 아이콘 추가 (BookOpen 등):

```tsx
// hero-section.tsx 소셜 링크 영역
<a
  href="https://blog.jell.kr"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border-2 border-foreground hover-brutal transition-all"
  aria-label="Blog"
>
  <BookOpen className="w-6 h-6" />
</a>
```

**예상 소요**: 15분
**임팩트**: 높음 (80+개 포스트 → 기술력 간접 증명)

---

### 3-5. [P1] 이력서(CV) PDF 다운로드 버튼 추가

**방법 A**: `public/` 폴더에 PDF 파일 배치 + 다운로드 링크

**파일 추가**: `public/resume-jell-2026.pdf`

**수정 위치**: `components/sections/hero-section.tsx` CTA 버튼 영역 (141행 부근)

```tsx
<Button
  asChild
  variant="outline"
  size="lg"
  className="brutal-shadow-sm hover-lift border-2 border-foreground font-bold text-lg h-14 px-8"
>
  <a href="/resume-jell-2026.pdf" download>
    <FileDown className="mr-2 h-5 w-5" />
    이력서 다운로드
  </a>
</Button>
```

또는 About 섹션 하단에 배치.

**방법 B (고급)**: `/resume` 라우트를 만들어 웹 이력서 페이지 + PDF 다운로드 병행

**예상 소요**: 1시간 (PDF 준비 포함)
**임팩트**: 높음 (채용 프로세스 마찰 제거)

---

## 4. Phase 2: 전환율 극대화 (3-5일)

### 4-1. [P2] 프로젝트 스크린샷/데모 추가

**현재**: `data/projects.ts`의 `screenshots` 필드 = 모든 프로젝트 비어 있음

**수정 계획**:

1. **최소 주요 5개 프로젝트**에 스크린샷 2-3장씩 추가
   - AZFlow, finiroom, 빈자리, Cookting, 러닝포털

2. **이미지 최적화**: `public/screenshots/[project-id]/` 디렉토리 구조

   ```
   public/screenshots/
   ├── azflow/
   │   ├── dashboard.webp
   │   └── deal-management.webp
   ├── vinjari/
   │   ├── main-screen.webp
   │   └── bridge-architecture.webp
   └── ...
   ```

3. **프로젝트 상세 페이지**(`app/projects/[id]/page.tsx`)에 이미지 갤러리 컴포넌트 추가
   - `next/image` 활용
   - Lightbox 기능 (클릭 시 확대)

**예상 소요**: 3-4시간 (스크린샷 캡처 + 최적화 + 갤러리 구현)
**임팩트**: 높음 (시각적 증거 → 신뢰도 대폭 상승)

---

### 4-2. [P2] 연락 폼 개선 (mailto → 실제 전송)

**현재**: `contact-section.tsx` 89행 → `mailto:` 기반 → 이메일 클라이언트 없으면 실패

**추천 방안**: **Resend** 또는 **FormSpree** 연동

**방안 A: Resend (Server Action 활용)**

```
npm install resend
```

1. `app/api/contact/route.ts` API Route 생성
2. Resend SDK로 이메일 발송
3. 폼 제출 시 API 호출 → 성공/실패 피드백 UI

**방안 B: FormSpree (가장 간단)**

```tsx
<form action="https://formspree.io/f/{form-id}" method="POST">
```

- 별도 백엔드 없이 즉시 작동
- 무료 플랜: 월 50회 제출

**추가**: 폼 제출 후 "24시간 내 회신합니다" 안내 메시지 추가

**예상 소요**: 2-3시간
**임팩트**: 중간 (연락 실패 방지)

---

### 4-3. [P2] "Open to Work" 시그널 강화

**수정 내용**:

1. **히어로 섹션 배지 개선**:
   - 현재: `AVAILABLE FOR HIRE` (정적)
   - 개선: 초록색 동그라미 + `Open to Work` 또는 희망 포지션/형태 명시
     - 예: "풀스택 / 프론트엔드 시니어 | 정규직 · 프리랜서"

2. **히어로 설명문 수정** (`hero-section.tsx` 129행):
   - 현재: `"18개의 프로젝트를 통해... 사용자 경험을 혁신해왔습니다."`
   - 수정: 프로젝트 수에 더해 **희망 포지션** 또는 **핵심 가치 제안** 추가

3. **메타데이터 개선** (`app/layout.tsx`):
   - `description`에 "구직 중" 또는 "Hiring" 관련 키워드 추가
   - Open Graph 이미지에 "Available for Hire" 텍스트 포함 (LinkedIn 공유 시 유용)

**예상 소요**: 1시간
**임팩트**: 중간

---

### 4-4. [P2] 프로젝트 카드 개선 - "회사 vs 개인" 시각적 구분

**현재**: 모든 프로젝트가 동일 카드 디자인 → 회사 프로젝트와 개인 프로젝트 구분 불가

**개선안**:

1. `data/projects.ts`에 `category` 필드 추가:

   ```typescript
   export enum ProjectCategory {
     PROFESSIONAL = "professional", // 회사 프로젝트
     FREELANCE = "freelance", // 프리랜서
     PERSONAL = "personal", // 개인 프로젝트
   }
   ```

2. 카드 상단에 카테고리 배지 표시:
   - 💼 회사 → 진한 배경색
   - 🏠 프리랜서 → 다른 배경색
   - 🔧 개인 → 또 다른 배경색

3. 필터 탭에 카테고리 필터 추가 (또는 기존 필터와 결합)

**예상 소요**: 2시간
**임팩트**: 중간 (경력 구조 명확화)

---

### 4-5. 히어로 코드 블록에 최신 정보 반영

**현재** (`hero-section.tsx` 206행~):

```tsx
projects: 18,
skills: ["iOS", "Web", "AR/3D"],
status: "available"
```

**개선안**: 더 구체적이고 인상적인 정보로 교체

```typescript
const developer = {
  name: "Jell",
  experience: "8+ years",
  projects: 18,
  tests: "1,649+",
  coverage: "96.8%",
  status: "open_to_work",
  seeking: ["Senior", "FullStack"],
};
```

**예상 소요**: 30분

---

## 5. Phase 3: 차별화 기능 (1-2주)

### 5-1. 이력서 페이지 (`/resume`)

**새 라우트**: `app/resume/page.tsx`

**내용**:

- 웹 기반 이력서 (인쇄 최적화 CSS 포함)
- 경력사항, 프로젝트 요약, 기술 스택, 학력
- "PDF로 다운로드" 버튼
- `@media print` 스타일로 깔끔한 인쇄 지원

**장점**: 항상 최신 상태 유지 가능 (PDF는 매번 재업로드 필요)

**예상 소요**: 1일

---

### 5-2. 기술 블로그 Featured Posts 섹션

**새 섹션**: `components/sections/blog-section.tsx`

**위치**: Skills 섹션과 About 섹션 사이

**내용**:

- 최신 블로그 포스트 3-5개 카드로 표시
- blog.jell.kr에서 RSS 또는 API로 가져오기 (또는 정적 데이터)
- "더 보기 → blog.jell.kr" 링크

**효과**: 기술 블로그 80+개 포스트 노출 → 기술 깊이 증명

**예상 소요**: 3-4시간

---

### 5-3. 추천사/테스티모니얼 섹션

**새 섹션**: `components/sections/testimonials-section.tsx`

**내용**:

- 이전 동료/상사의 추천 코멘트 2-3개
- LinkedIn 추천 연동 또는 직접 입력
- 카드 형태로 표시 (이름, 직함, 회사, 코멘트)

**효과**: 소셜 프루프 → 신뢰도 상승

**예상 소요**: 2시간 (UI) + 추천사 수집 시간

---

### 5-4. 경력 연봉 수준 또는 희망 조건 (선택적)

**위치**: Contact 섹션 또는 별도 페이지

**내용**:

- 희망 근무 형태 (정규직, 프리랜서, 리모트 등)
- 희망 포지션 레벨
- 가능 시작일
- 주요 관심 산업/도메인

**주의**: 연봉 수준은 직접 명시하지 않는 것이 일반적. 근무 형태/포지션만 표시.

---

### 5-5. 프로젝트 타임라인 뷰

**새 기능**: 프로젝트를 시간순으로 볼 수 있는 타임라인 뷰

**현재**: 카드 그리드 뷰만 존재

**추가**: 연도별 가로 타임라인 + 프로젝트 바 형태

- 각 프로젝트의 `period` 데이터 활용
- 마우스 호버 시 프로젝트 요약 표시
- 경력의 연속성과 깊이를 시각적으로 보여줌

**예상 소요**: 1일

---

## 6. 기술적 개선사항

### 6-1. Header/Footer 컴포넌트 분리

**현재**: `app/page.tsx`에 header와 footer가 인라인으로 포함 (22-143행)

**개선**:

- `components/header.tsx`와 `components/footer.tsx`가 이미 존재하지만 **미사용**
- `app/layout.tsx`로 이동하여 모든 페이지에서 공유
- 프로젝트 상세 페이지(`/projects/[id]`)에서도 동일 헤더/푸터 표시

**예상 소요**: 1시간

---

### 6-2. 프로젝트 데이터 분리

**현재**: `data/projects.ts`가 1141줄 → 단일 파일에 18개 프로젝트 + 타입 + 헬퍼

**개선안**:

```
data/
├── projects/
│   ├── types.ts           # Project 인터페이스, Enum
│   ├── professional.ts    # 회사 프로젝트 7개
│   ├── personal.ts        # 개인 프로젝트 11개
│   ├── index.ts           # 통합 export + 헬퍼 함수
│   └── helpers.ts         # getProjectById 등
```

**장점**: 유지보수성 향상, 프로젝트 추가 시 파일 분리로 관리 용이

**예상 소요**: 1시간

---

### 6-3. Lighthouse / Core Web Vitals 최적화

**확인 필요 항목**:

| 항목                           | 목표    | 확인 방법                 |
| ------------------------------ | ------- | ------------------------- |
| LCP (Largest Contentful Paint) | < 2.5s  | Lighthouse                |
| FID (First Input Delay)        | < 100ms | Lighthouse                |
| CLS (Cumulative Layout Shift)  | < 0.1   | Lighthouse                |
| TTI (Time to Interactive)      | < 3.8s  | Lighthouse                |
| Bundle Size                    | 최소화  | `ANALYZE=true next build` |

**잠재 문제**:

- `hero-section.tsx`의 RotatingRole → Client Component → JS 번들 포함
- `skills-section.tsx`, `projects-section.tsx` → Client Component (useState)
- 모든 섹션 컴포넌트가 "use client" → RSC 활용 여지 있음

**개선안**:

- 인터랙티브 부분만 Client Component, 나머지는 Server Component로 분리
- `next/dynamic`으로 ContactSection 지연 로딩 (below the fold)
- 폰트 최적화 (Manrope, Space_Mono 사용 중 → `display: swap` 이미 적용됨)

**예상 소요**: 2-3시간

---

### 6-4. 접근성(A11y) 개선

**현재 잘 되어 있는 것**:

- `aria-hidden="true"` 데코레이션 요소에 적용
- `aria-label` 소셜 링크에 적용
- `role="tablist"`, `role="tab"` 탭 UI에 적용
- `data-testid` 테스트 ID 일관적 사용

**개선 필요**:

- Skip to content 링크 추가 (키보드 접근성)
- Focus ring 스타일 확인 (Brutalist 디자인과 조화)
- 색상 대비 확인 (WCAG AA 기준)
- 모바일 터치 타겟 크기 확인 (최소 44x44px)

**예상 소요**: 1-2시간

---

## 7. 데이터 개선사항

### 7-1. projects.ts 수치 불일치 수정

**히어로 섹션** vs **프로젝트 데이터**:

| 항목        | 히어로  | 실제               | 확인 필요         |
| ----------- | ------- | ------------------ | ----------------- |
| 프로젝트 수 | "18개"  | 18개 (projects.ts) | OK                |
| 경력        | "8+"    | 2015~현재 (11년)   | "10+"로 업데이트? |
| 테스트      | "1.6K"  | 1,649 (stats)      | OK                |
| 커버리지    | "96.8%" | 96.8% (stats)      | OK                |

**경력 연차 확인**: 2015년 시작 → 2026년 현재 = **약 10-11년**. 현재 "8+"로 표시 중 → 업데이트 필요 여부 사용자 확인.

---

### 7-2. Skills 데이터 정확성

**현재 skills-section.tsx에서 의문점**:

| 스킬       | 현재 Proficiency | 의문                                             |
| ---------- | ---------------- | ------------------------------------------------ |
| Tauri      | intermediate     | → 실제 사용? Dev Utils Hub는 Electron으로 수정됨 |
| WPF        | intermediate     | → 포트폴리오에 WPF 프로젝트 없음                 |
| Kubernetes | intermediate     | → 포트폴리오에 K8s 사용 프로젝트 없음            |
| TensorFlow | intermediate     | → 포트폴리오에 TF 사용 프로젝트 없음             |
| PyTorch    | intermediate     | → 포트폴리오에 PyTorch 사용 프로젝트 없음        |

**권장**: 프로젝트에서 **실제 사용한 기술만** 표시. 포트폴리오에 증거가 없는 스킬은 제거하거나 "학습 중"으로 표시.

**추가 필요**:

- Supabase (다수 프로젝트에서 사용)
- Clean Architecture (빈자리, Cookting, Jellmodoro)
- WebView/Bridge (빈자리)
- Spring Boot / Kotlin (러닝포털) → Backend에 추가
- MSSQL (러닝포털) → Backend에 추가

---

### 7-3. 히어로 코드 블록 오타

**현재 hero-section.tsx 227행**:

```tsx
<span className="text-accent">&quot;8+ years&quot;</span>,
```

→ 실제 경력이 10년이면 수정 필요.

---

## 8. SEO 및 퍼포먼스

### 8-1. 메타데이터 개선

**파일**: `app/layout.tsx`

**현재** (`siteConfig`):

```typescript
description: "8년차 풀스택 개발자 Jell의 포트폴리오. iOS, Flutter, React, Next.js 등...";
```

**개선안**:

```typescript
description: "10년 경력의 풀스택 개발자 Jell | iOS, Flutter, React, Next.js | 18개 프로젝트 | Open to Senior Position";
```

**Open Graph 이미지** (`siteConfig.ogImage`):

- 현재: `/og-image.png` → 실제 파일 존재 여부 확인 필요
- "Available for Hire" + 핵심 스택 + 사진이 포함된 OG 이미지 → LinkedIn/Twitter 공유 시 클릭률 상승

---

### 8-2. JSON-LD 구조화 데이터 강화

**파일**: `components/seo/json-ld.tsx`

**추가 권장 스키마**:

- `ProfilePage` 스키마
- `SoftwareApplication` 스키마 (주요 앱 프로젝트)
- `Article` 스키마 (블로그 포스트 연동 시)
- `JobPosting` 관련 → 본인이 "구직자"임을 명시하는 `Person` 스키마의 `jobTitle`, `seeks` 속성

---

### 8-3. 프로젝트 상세 페이지 SEO

**파일**: `app/projects/[id]/page.tsx`

**확인 필요**:

- `generateMetadata` 함수로 프로젝트별 동적 메타 생성 여부
- 각 프로젝트 페이지의 고유 title/description
- 프로젝트별 OG 이미지 (스크린샷 활용)

---

## 9. 구현 체크리스트

### Phase 1 (긴급, 1-2일)

- [ ] **[P0]** 타임라인에 "2025: 프리랜서 & 새로운 도전" 추가 (`about-section.tsx`)
- [ ] **[P0]** 2024 타임라인 description 현재형 → 과거형 수정
- [ ] **[P0]** 프로젝트별 비즈니스 임팩트 수치 추가 (`data/projects.ts`)
- [ ] **[P1]** 소개글(About bio) 차별화된 문장으로 교체
- [ ] **[P1]** 네비게이션에 블로그 링크 추가 (`app/page.tsx`)
- [ ] **[P1]** 히어로 소셜 링크에 블로그 아이콘 추가
- [ ] **[P1]** 이력서 PDF 준비 + 다운로드 버튼 추가
- [ ] **[검증]** 기존 테스트 통과 확인 (`npm run test:ci`)
- [ ] **[검증]** TypeScript 컴파일 에러 없음 (`npm run type-check`)
- [ ] **[검증]** 배포 후 실제 사이트에서 확인

### Phase 2 (전환율 극대화, 3-5일)

- [ ] **[P2]** 주요 5개 프로젝트 스크린샷 추가
- [ ] **[P2]** 프로젝트 상세 페이지 이미지 갤러리 구현
- [ ] **[P2]** 연락 폼 실제 전송 기능 (Resend 또는 FormSpree)
- [ ] **[P2]** "Open to Work" 시그널 강화 (히어로 배지 개선)
- [ ] **[P2]** 프로젝트 카테고리 구분 (회사/프리랜서/개인)
- [ ] **[P2]** 히어로 코드 블록 최신 정보 반영
- [ ] **[기술]** Header/Footer 컴포넌트 분리 → layout.tsx로 이동
- [ ] **[기술]** 경력 연차 "8+" → 실제 연차 확인 후 수정
- [ ] **[기술]** Skills 데이터 검증 (미사용 기술 제거, 누락 기술 추가)

### Phase 3 (차별화, 1-2주)

- [ ] 이력서 페이지 (`/resume`) 구현
- [ ] 기술 블로그 Featured Posts 섹션 추가
- [ ] 추천사/테스티모니얼 섹션 추가
- [ ] 프로젝트 타임라인 뷰 구현
- [ ] Lighthouse 90+ 달성
- [ ] 접근성(A11y) 개선
- [ ] JSON-LD 구조화 데이터 강화
- [ ] OG 이미지 리디자인 (Available for Hire 포함)

### 데이터 검증

- [ ] projects.ts → 18개 프로젝트 period/status 최종 확인
- [ ] skills-section.tsx → 포트폴리오와 불일치하는 스킬 제거/수정
- [ ] stats-section.tsx → 숫자 최신 데이터로 업데이트
- [ ] hero-section.tsx → 경력 연차, 프로젝트 수 정확성 확인
- [ ] about-section.tsx → timelineData 정확성 확인

---

## 부록: 경쟁력 분석

### 현재 포트폴리오의 강점 (유지해야 할 것)

1. **Brutalist 디자인** → 일반 포트폴리오와 확실히 다름
2. **18개 프로젝트** → 양적 충분함
3. **다양한 플랫폼** (iOS, Web, AR/3D, Desktop, Extension) → 풀스택 증명
4. **테스트 문화** (1,649개, 96.8%) → 품질 의식
5. **기술 블로그 80+ 포스트** → (연결만 하면) 기술 깊이 증명
6. **JSON-LD + sitemap + robots.txt** → SEO 기본기

### 현재 포트폴리오의 약점 (개선해야 할 것)

1. **비즈니스 임팩트 수치 부재** → "그래서 뭘 해냈는데?"에 답 못함
2. **구직 상태 혼란** → 재직 중인지 구직 중인지 모호
3. **소개글 범용성** → 차별점 없음
4. **시각적 증거 부재** → 스크린샷, 데모 영상 없음
5. **연락 폼 불안정** → mailto: 기반
6. **블로그 비연결** → 최대 자산 방치

### 투입 대비 효과 매트릭스

| 작업                 | 투입 시간 | 면접 전환율 영향 | 우선순위 |
| -------------------- | --------- | ---------------- | -------- |
| 비즈니스 임팩트 수치 | 2-3h      | ★★★★★            | P0       |
| 구직 상태 명확화     | 30min     | ★★★★★            | P0       |
| 소개글 차별화        | 30min     | ★★★★☆            | P1       |
| 블로그 링크 연결     | 15min     | ★★★★☆            | P1       |
| 이력서 PDF           | 1h        | ★★★★☆            | P1       |
| 프로젝트 스크린샷    | 3-4h      | ★★★☆☆            | P2       |
| 연락 폼 개선         | 2-3h      | ★★★☆☆            | P2       |
| 이력서 페이지        | 1day      | ★★★☆☆            | P3       |
| 블로그 섹션          | 3-4h      | ★★☆☆☆            | P3       |
| 타임라인 뷰          | 1day      | ★★☆☆☆            | P3       |

---

_작성: PARA+GTD 자동화 에이전트 (2026-02-26)_
_분석 기반: 소스 코드 전체 리뷰, 라이브 사이트 확인, 기존 .internal-docs 분석_
