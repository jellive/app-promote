# Portfolio Data Large-Scale Update Report

> **Date**: 2026-02-12
> **Scope**: `data/projects.ts` + UI components + test files (10 files modified)
> **Source**: Obsidian PARA system cross-reference analysis
> **Result**: All checks passed (tsc, jest 385/385, build success)

---

## 1. Overview

Obsidian PARA system records were compared against the portfolio data file (`data/projects.ts`). The audit revealed:

- **8 existing projects** with outdated information (periods, tech stacks, statuses)
- **3 new projects** missing entirely (Vinjari, Time Letter, Couple Planner)
- **UI hardcoded values** referencing old project count (15 -> 18)

Total project count: **15 -> 18** (7 professional + 11 personal/freelance)

---

## 2. Existing Project Modifications (8 projects)

### 2-1. AZFlow (`azflow`)

| Field    | Before                | After                 |
| -------- | --------------------- | --------------------- |
| `period` | `"2024.08 - present"` | `"2024.12 - 2025.09"` |

### 2-2. Cookting (`cookting`)

| Field                         | Before                                                  | After                                              |
| ----------------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `period`                      | `"2024.03 - present"`                                   | `"2024.08 - present"`                              |
| `techStack.backend`           | Supabase, PostgreSQL, Edge Functions, **Claude AI API** | **NestJS**, Supabase, PostgreSQL, Edge Functions   |
| `techStack.infrastructure`    | Supabase Auth, Storage, Realtime                        | Supabase Auth, Storage, Realtime, **Docker**       |
| `achievements[0]`             | "App Store review in progress"                          | **"App Store launched"**                           |
| `achievements[1].description` | Claude AI recipe recommendation                         | **GPT-4 + Gemini Pro hybrid AI**                   |
| `features[1].description`     | AI-based recipe generation                              | **GPT-4 + Gemini Pro hybrid AI** recipe generation |

### 2-3. Jellmodoro (`jellmodoro`) - Full Replacement

| Field                      | Before                   | After                                          |
| -------------------------- | ------------------------ | ---------------------------------------------- |
| `type`                     | `IOS`                    | **`FULL_STACK_MOBILE`**                        |
| `status`                   | `PRODUCTION`             | **`DEVELOPMENT`**                              |
| `period`                   | `"2023.08 - 2023.12"`    | **`"2025.06 - present"`**                      |
| `shortDescription`         | Minimal pomodoro iOS app | **Flutter rebuild version**                    |
| `techStack.frontend`       | Swift, SwiftUI, WatchKit | **Flutter, Dart, Riverpod**                    |
| `techStack.backend`        | (empty)                  | **NestJS, TypeScript, PostgreSQL**             |
| `techStack.infrastructure` | CloudKit, WidgetKit      | **Docker, Firebase**                           |
| `links.appStore`           | Present                  | **Removed** (Flutter version not yet released) |

### 2-4. Namuwiki Linker (`namuwiki-linker`)

| Field    | Before                | After                 |
| -------- | --------------------- | --------------------- |
| `period` | `"2024.06 - present"` | `"2025.10 - present"` |

### 2-5. Dev Utils Hub (`dev-utils-hub`)

| Field               | Before                | After                 |
| ------------------- | --------------------- | --------------------- |
| `period`            | `"2024.01 - 2024.06"` | `"2025.11 - present"` |
| `techStack.desktop` | Tauri, Rust           | **Electron**          |

### 2-6. Certificate Sync Manager (`cert-sync-manager`)

| Field               | Before                | After                 |
| ------------------- | --------------------- | --------------------- |
| `period`            | `"2024.02 - 2024.04"` | `"2025.11 - present"` |
| `techStack.backend` | Node.js, TypeScript   | **Python**            |

### 2-7. Chzzk OBS Connector (`chzzk-obs`)

| Field    | Before                | After                 |
| -------- | --------------------- | --------------------- |
| `period` | `"2024.05 - present"` | `"2025.11 - present"` |

### 2-8. jell-utils.js (`jell-utils`)

| Field    | Before                | After                 |
| -------- | --------------------- | --------------------- |
| `period` | `"2022.06 - 2023.02"` | `"2025.10 - present"` |
| `status` | `PRODUCTION`          | **`ARCHIVE`**         |

---

## 3. New Projects Added (3 projects)

### 3-1. Vinjari (id: `vinjari`)

| Field       | Value                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Name        | Vinjari                                                                  |
| Type        | `FULL_STACK_MOBILE`                                                      |
| Status      | `PRODUCTION`                                                             |
| Period      | 2025.12 - present                                                        |
| Role        | Flutter mobile developer (freelance)                                     |
| Tech Stack  | Flutter, Dart, Clean Architecture, GetIt / Firebase, FCM, WebView Bridge |
| Key Feature | WebView-Native Bridge hybrid architecture                                |
| Tests       | 1,156+                                                                   |
| Code        | ~25,000 lines                                                            |

### 3-2. Time Letter (id: `time-letter`)

| Field       | Value                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Name        | Time Letter                                                                                    |
| Type        | `FULL_STACK_MOBILE`                                                                            |
| Status      | `DEVELOPMENT`                                                                                  |
| Period      | 2025.10 - present                                                                              |
| Role        | React Native developer                                                                         |
| Tech Stack  | React Native, Expo, TypeScript, Next.js / Supabase, PostgreSQL / Sentry, EAS Update, Turborepo |
| Key Feature | Turborepo monorepo (mobile + web)                                                              |
| Tests       | 656                                                                                            |
| Code        | ~18,000 lines                                                                                  |

### 3-3. Couple Planner (id: `couple-planner`)

| Field       | Value                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| Name        | Couple Planner                                                                                                |
| Type        | `FULL_STACK_WEB`                                                                                              |
| Status      | `DEVELOPMENT`                                                                                                 |
| Period      | 2025.12 - present                                                                                             |
| Role        | Solo full-stack developer                                                                                     |
| Tech Stack  | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui / Supabase, PostgreSQL, Edge Functions / Vercel, Web Push |
| Key Feature | PWA with Supabase Realtime sync                                                                               |

---

## 4. Project Order (Final)

### Professional (7)

| #   | Project         | Status  |
| --- | --------------- | ------- |
| 1   | AZFlow          | Archive |
| 2   | finiroom        | Archive |
| 3   | glinda AIMI     | Archive |
| 4   | Learning Portal | Archive |
| 5   | KnowRecorder    | Archive |
| 6   | KnowLounge      | Archive |
| 7   | Gotalk          | Archive |

### Personal / Freelance (11)

| #   | Project           | Status          | Type              |
| --- | ----------------- | --------------- | ----------------- |
| 1   | Vinjari           | **Production**  | Full-Stack Mobile |
| 2   | Cookting          | Production      | Full-Stack Mobile |
| 3   | Time Letter       | **Development** | Full-Stack Mobile |
| 4   | Couple Planner    | **Development** | Full-Stack Web    |
| 5   | Jellmodoro        | Development     | Full-Stack Mobile |
| 6   | Wecanner          | Production      | iOS               |
| 7   | Dev Utils Hub     | Production      | Desktop           |
| 8   | Chzzk OBS         | Development     | Desktop           |
| 9   | Cert Sync Manager | Production      | Infrastructure    |
| 10  | Namuwiki Linker   | Production      | Chrome Extension  |
| 11  | jell-utils.js     | **Archive**     | NPM Package       |

---

## 5. Files Modified (10 files)

### Data Layer (1 file)

- `data/projects.ts` - 8 project updates + 3 new projects + reorder + header comment

### UI Layer (3 files)

- `components/sections/hero-section.tsx` - "15" -> "18" (3 locations)
- `components/sections/stats-section.tsx` - `value: 15` -> `value: 18`
- `app/page.tsx` - metadata description "15" -> "18"

### Test Layer (5 files)

- `__tests__/data/projects.test.ts` - count 15->18, Jellmodoro type/status, jell-utils status
- `__tests__/app/projects/project-detail-page.test.tsx` - count 15->18, Cookting period
- `__tests__/seo/sitemap.test.ts` - count 15->18, total 17->20
- `__tests__/components/sections/hero-section.test.tsx` - "15" -> "18"
- `__tests__/components/sections/stats-section.test.tsx` - "15" -> "18"

---

## 6. Verification Results

| Check                 | Result                                       |
| --------------------- | -------------------------------------------- |
| `npx tsc --noEmit`    | PASS (exit code 0)                           |
| `npx jest --no-cache` | PASS (25 suites, 385 passed, 0 failed)       |
| `npm run build`       | PASS (exit code 0, 8 static pages generated) |

---

## 7. Status Distribution (Final)

| Status          | Count  | Projects                                                                                        |
| --------------- | ------ | ----------------------------------------------------------------------------------------------- |
| **Production**  | 6      | Vinjari, Cookting, Wecanner, Dev Utils Hub, Cert Sync Manager, Namuwiki Linker                  |
| **Development** | 4      | Time Letter, Couple Planner, Jellmodoro, Chzzk OBS                                              |
| **Archive**     | 8      | AZFlow, finiroom, glinda AIMI, Learning Portal, KnowRecorder, KnowLounge, Gotalk, jell-utils.js |
| **Total**       | **18** |                                                                                                 |

---

_Generated: 2026-02-12_
_Source: Obsidian PARA system cross-reference audit_
