# app-promote — Claude Code workflow guide

## Stack

- **Next.js 15** (Pages → App Router migrated)
- **Yarn 4.5.0 with PnP** (`nodeLinker: pnp`)
- **TypeScript 5.x**
- **Tailwind CSS + shadcn/ui** components
- **Vercel** auto-deploy on main push (~30s TTFB after push)

## ⚠️ Scope-leak prevention (verified twice in commit history)

`git add <file>` 전에 반드시:

```bash
git diff --stat              # unstaged 전체 변경 라인 수
git diff path/to/file        # 의도한 파일의 unstaged 부분
git add path/to/file
git diff --cached --stat     # staged 라인 수
git diff --cached            # staged 실제 diff
```

**왜**: `data/projects.ts`, `tsconfig.json`, `.pnp.cjs` 등 큰 파일은 이전 세션의 unstaged 변경을 보유하기 쉬움. `git add data/projects.ts` 해도 그 파일의 모든 unstaged hunk가 함께 staged됨. commit 메시지가 의도와 불일치하는 history가 만들어진다.

**과거 사례**:

- `d50637e` (jell-arcade #25 추가) — JellHub v1→v2 description rewrite 함께 묶임 (+307/-27)
- `a108df4` (arcade-embed component) — `.pnp.cjs` mode change + `tsconfig.json` reformat 함께 묶임 (4 files / 894+847)

## Yarn PnP — 직접 tsc 호출 금지

Yarn 4 PnP는 `node node_modules/typescript/bin/tsc` 호출 시 PnP loader가 .pnp.cjs를 touch할 수 있음. 항상 `yarn` 래퍼 사용:

```bash
yarn type-check    # not: ./node_modules/typescript/bin/tsc --noEmit
yarn lint          # not: ./node_modules/.bin/eslint
yarn test          # not: ./node_modules/.bin/vitest
```

## 주요 패턴

- **Project data**: `data/projects.ts` (single source of truth, 25 entries)
- **Project detail page**: `app/projects/[id]/page.tsx` — SSG로 빌드, `[id]`별 static path 생성
- **Client components**: 명시적 `"use client"`. 예: `components/arcade-embed.tsx`
- **screenshot 추가 시**: `public/screenshots/`에 PNG 저장 + 데이터 entry의 `screenshots` 필드 활용

## 배포

- `git push origin main` → Vercel auto-deploy
- 1-2분 후 https://app.jell.kr 갱신
- Vercel cache stale 시 empty commit으로 cache bust
