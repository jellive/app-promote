# Portfolio Project Status Update Query

아래는 포트폴리오 사이트(app-promote)에 등록된 프로젝트 15개의 현재 데이터입니다.
Obsidian에 저장된 각 프로젝트의 최신 정보와 비교하여, 틀리거나 오래된 내용이 있으면 알려주세요.

특히 다음 항목들을 확인해주세요:

- 프로젝트 상태(status)가 실제와 맞는지
- 기간(period)이 정확한지 (종료 여부, "현재" 표기 등)
- 기술 스택이 최신인지
- 설명이나 기능이 실제 프로젝트와 일치하는지
- 링크가 유효한지
- 누락된 프로젝트가 있는지

---

## PROFESSIONAL PROJECTS (회사 프로젝트) - 모두 ARCHIVE

### 1. AZFlow

- **ID**: azflow
- **Status**: ARCHIVE
- **Type**: Full-Stack Web
- **Period**: 2024.08 - 현재
- **Role**: 수석연구원 (애즈플로우)
- **Description**: 스타트업 투자 관리 플랫폼. 투자사용/스타트업용 대시보드, AI 기반 데이터 검색, 마이크로서비스 아키텍처.
- **Features**:
  - 투자사 대시보드: 포트폴리오 모니터링 및 딜 관리
  - 스타트업 대시보드: 사업 정보, 팀 관리, 재무 시각화, PDF 리포트
  - AI 데이터 검색: RAG 기반 스타트업/투자 정보 지능형 검색
  - 문서 관리: IR 자료, 계약서 등 문서 관리 및 공유
- **Tech Stack**:
  - Frontend: React, Vite, TypeScript, Radix-UI, TailwindCSS, Zustand, Recharts
  - Backend: NestJS, TypeORM, MySQL, FastAPI, Python
  - Infra: AWS S3, AWS SES, JWT, Swagger
- **Links**: https://azflow.net

### 2. finiroom

- **ID**: finiroom
- **Status**: ARCHIVE
- **Type**: iOS
- **Period**: 2021.09 - 2024.08
- **Role**: 선임연구원 (비주얼신) - 웹/앱 개발
- **Description**: LiDAR 기반 3D 공간 스캐닝 및 인테리어 앱. ARKit/RealityKit iOS 네이티브 앱과 Unity 3D 간 브릿지 통신.
- **Features**:
  - LiDAR 3D 스캔: iPhone LiDAR 센서 활용 공간 3D 모델링
  - AR 가구 배치: 증강현실 가구 배치 시뮬레이션
  - 도면 생성: 스캔 데이터 기반 2D/3D 도면 자동 생성
  - 인테리어 추천: AI 기반 인테리어 스타일 추천
- **Tech Stack**:
  - Frontend: Swift, SwiftUI, UIKit, ARKit, RealityKit, SceneKit
  - Backend: Node.js, Express, MongoDB
  - Infra: AWS S3, CloudFront, Firebase
- **Links**: App Store (https://apps.apple.com/app/finiroom)

### 3. glinda AIMI

- **ID**: glinda-aimi
- **Status**: ARCHIVE
- **Type**: Unity WebGL
- **Period**: 2023.01 - 2024.08
- **Role**: 선임연구원 (비주얼신) - 웹 프론트엔드 개발
- **Description**: Unity WebGL + React/TypeScript 인터랙티브 3D 가상 쇼룸 플랫폼. Unity WebGL-JavaScript 양방향 통신.
- **Features**:
  - 3D 가상 공간: Unity WebGL 기반 몰입형 3D 환경
  - 웹 연동: Unity-JavaScript 양방향 통신
  - 제품 인터랙션: 3D 제품 회전, 확대 및 상세 정보
  - 반응형 UI: 데스크톱/모바일 최적화
- **Tech Stack**:
  - Frontend: React, TypeScript, Unity WebGL, Three.js
  - Backend: Node.js, Express
  - Infra: AWS, CloudFront, S3
- **Links**: 없음

### 4. KnowRecorder

- **ID**: knowrecorder
- **Status**: ARCHIVE
- **Type**: iOS
- **Period**: 2016.09 - 2018.07
- **Role**: 연구원 (케이라운지)
- **Description**: 플립러닝용 강의 녹화 iOS 앱. PDF에 음성과 드로잉을 녹화하여 인터랙티브 학습 자료 제작.
- **Features**:
  - PDF 기반 녹화, 실시간 드로잉, 영상 내보내기, LMS 연동
- **Tech Stack**:
  - Frontend: Swift, UIKit, AVFoundation, Core Graphics
  - Infra: AWS S3
- **Links**: 없음

### 5. KnowLounge

- **ID**: knowlounge
- **Status**: ARCHIVE
- **Type**: iOS
- **Period**: 2016.06 - 2018.07
- **Role**: 연구원 (케이라운지)
- **Description**: 실시간 화이트보드 기반 교육 플랫폼. WebSocket 드로잉 동기화, WebRTC 화상 통화.
- **Features**:
  - 실시간 화이트보드, 화상 수업, 수업 녹화, 학습 관리
- **Tech Stack**:
  - Frontend: Swift, UIKit, WebSocket, WebRTC
  - Infra: AWS
- **Links**: 없음

### 6. Gotalk

- **ID**: gotalk
- **Status**: ARCHIVE
- **Type**: WebRTC
- **Period**: 2017.03 - 2018.07
- **Role**: 연구원 (케이라운지)
- **Description**: WebRTC 기반 1:1 화상 영어 교육 웹앱. 교재 공유, 실시간 피드백, 수업 녹화.
- **Features**:
  - 1:1 화상 통화, 교재 공유, 실시간 피드백, 수업 녹화
- **Tech Stack**:
  - Frontend: React, JavaScript, WebRTC, Socket.io
  - Backend: Node.js, Express, MongoDB
  - Infra: AWS EC2, TURN/STUN Server
- **Links**: 없음

### 7. 러닝포털

- **ID**: learning-portal
- **Status**: ARCHIVE
- **Type**: Web
- **Period**: 2018.12 - 2021.07
- **Role**: 선임연구원 (청담러닝)
- **Description**: B2B 교육 관리 시스템(LMS). 강의 관리, 진도 추적, 성적 관리, 리포트 생성.
- **Features**:
  - 강의 관리, 진도 추적, 성적 관리, 리포트 생성
- **Tech Stack**:
  - Frontend: React, TypeScript, Redux, Ant Design
  - Backend: Spring Boot, Java, MySQL
  - Infra: AWS, Docker
- **Links**: 없음

---

## PERSONAL PROJECTS (개인 프로젝트)

### 8. Cookting

- **ID**: cookting
- **Status**: PRODUCTION (LIVE)
- **Type**: Full-Stack Mobile
- **Period**: 2024.03 - 현재
- **Role**: 1인 풀스택 개발
- **Description**: AI 기반 냉장고 재료 인식 레시피 추천 iOS 앱. Claude AI 활용 자연어 레시피 생성.
- **Features**:
  - AI 재료 인식: 카메라로 냉장고 촬영 → AI 자동 인식
  - 스마트 레시피 추천: 보유 재료 기반 AI 레시피 생성
  - 재료 유통기한 관리: 알림 및 관리 시스템
  - 레시피 저장 및 공유
- **Tech Stack**:
  - Frontend: Flutter, Dart, Riverpod, GetIt
  - Backend: Supabase, PostgreSQL, Edge Functions, Claude AI API
  - Infra: Supabase Auth, Supabase Storage, Supabase Realtime
- **Code Stats**: 15,000줄 (Frontend 12,000 / Backend 3,000)
- **Links**: GitHub (https://github.com/jellive/cookting)

### 9. Dev Utils Hub

- **ID**: dev-utils-hub
- **Status**: PRODUCTION (LIVE)
- **Type**: Desktop
- **Period**: 2024.01 - 2024.06
- **Role**: 1인 개발
- **Description**: 개발자용 올인원 유틸리티 데스크톱 앱. JSON 포맷터, Base64, UUID, 정규식 등 20+ 도구.
- **Features**:
  - JSON 포맷터/검증기, Base64 인코더/디코더, UUID/ULID 생성기, 정규식 테스터, 해시 생성기
- **Tech Stack**:
  - Frontend: React, TypeScript, TailwindCSS, Radix UI
  - Desktop: Tauri, Rust
- **Code Stats**: 8,000줄 (Frontend 7,000)
- **Links**: GitHub (https://github.com/jellive/dev-utils-hub)

### 10. Certificate Sync Manager

- **ID**: cert-sync-manager
- **Status**: PRODUCTION (LIVE)
- **Type**: Infrastructure
- **Period**: 2024.02 - 2024.04
- **Role**: 1인 개발
- **Description**: Let's Encrypt 와일드카드 SSL 인증서 자동 동기화. Docker 기반 멀티 서버 배포.
- **Features**:
  - 자동 인증서 발급, 멀티 서버 동기화, 자동 갱신, Docker 기반
- **Tech Stack**:
  - Backend: Node.js, TypeScript
  - Infra: Docker, Let's Encrypt, Certbot, SSH, Cron
- **Code Stats**: 2,500줄 (Backend)
- **Links**: GitHub (https://github.com/jellive/cert-sync-manager)

### 11. Chzzk OBS Connector

- **ID**: chzzk-obs
- **Status**: DEVELOPMENT (DEV)
- **Type**: Desktop
- **Period**: 2024.05 - 현재
- **Role**: 1인 개발
- **Description**: 네이버 치지직(Chzzk) + OBS Studio 연동 데스크톱 앱. 채팅 오버레이, 알림, 방송 정보 표시.
- **Features**:
  - 실시간 채팅 오버레이, 후원 알림/TTS, 방송 정보 위젯, 커스텀 테마
- **Tech Stack**:
  - Frontend: React, TypeScript, TailwindCSS
  - Backend: Node.js, WebSocket
  - Desktop: Electron, OBS WebSocket
- **Code Stats**: 6,000줄 (Frontend 4,500 / Backend 1,500)
- **Links**: GitHub (https://github.com/jellive/chzzk-obs)

### 12. 나무위키 링커

- **ID**: namuwiki-linker
- **Status**: PRODUCTION (LIVE)
- **Type**: Chrome Extension
- **Period**: 2024.06 - 현재
- **Role**: 1인 개발
- **Description**: 웹페이지 텍스트 선택 → 나무위키 연결 Chrome 확장 프로그램.
- **Features**:
  - 컨텍스트 메뉴 연동, 키보드 단축키, 팝업 미리보기, 검색 기록
- **Tech Stack**:
  - Frontend: JavaScript, Chrome Extension API, HTML, CSS
- **Code Stats**: 1,500줄
- **Links**:
  - Chrome Web Store (https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl)
  - GitHub (https://github.com/jellive/namuwiki-linker)

### 13. Jellmodoro

- **ID**: jellmodoro
- **Status**: PRODUCTION (LIVE)
- **Type**: iOS
- **Period**: 2023.08 - 2023.12
- **Role**: 1인 개발
- **Description**: 미니멀 포모도로 타이머 iOS 앱. Apple Watch 연동, 집중 통계.
- **Features**:
  - 포모도로 타이머 (25분+5분), Apple Watch 연동, 집중 통계, 커스텀 타이머
- **Tech Stack**:
  - Frontend: Swift, SwiftUI, WatchKit
  - Infra: CloudKit, WidgetKit
- **Code Stats**: 5,000줄
- **Links**:
  - App Store (https://apps.apple.com/app/jellmodoro)
  - GitHub (https://github.com/jellive/jellmodoro)

### 14. Wecanner

- **ID**: wecanner
- **Status**: PRODUCTION (LIVE)
- **Type**: iOS
- **Period**: 2024.04 - 현재
- **Role**: 1인 개발
- **Description**: 요일별 반복 할 일 관리 iOS 앱. 캘린더, 멀티 기기 동기화, 위젯.
- **Features**:
  - 요일별 할 일, 캘린더 일정 관리, 멀티 기기 동기화, 위젯 지원
- **Tech Stack**:
  - Frontend: Swift, SwiftUI, WidgetKit
  - Infra: CloudKit, Core Data
- **Code Stats**: 4,000줄
- **Links**:
  - App Store (https://apps.apple.com/kr/app/wecanner/id6711342598)
  - GitHub (https://github.com/jellive/wecanner)

### 15. jell-utils.js

- **ID**: jell-utils
- **Status**: PRODUCTION (LIVE)
- **Type**: npm Package
- **Period**: 2022.06 - 2023.02
- **Role**: 1인 개발
- **Description**: JavaScript/TypeScript 유틸리티 함수 npm 패키지. 문자열, 날짜, 배열 처리.
- **Features**:
  - 문자열 유틸리티, 날짜 유틸리티, 배열 유틸리티, TypeScript 지원
- **Tech Stack**:
  - Frontend: TypeScript, JavaScript
  - Infra: npm, GitHub Actions, Jest
- **Code Stats**: 3,000줄 (Tests 1,500)
- **Links**:
  - npm (https://www.npmjs.com/package/jell-utils)
  - GitHub (https://github.com/jellive/jell-utils)

---

## Status Summary

| Status            | Count | Projects                                                                                       |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------- |
| PRODUCTION (LIVE) | 8     | Cookting, Dev Utils Hub, Cert Sync Manager, 나무위키 링커, Jellmodoro, Wecanner, jell-utils.js |
| DEVELOPMENT (DEV) | 1     | Chzzk OBS Connector                                                                            |
| ARCHIVE           | 7     | AZFlow, finiroom, glinda AIMI, KnowRecorder, KnowLounge, Gotalk, 러닝포털                      |

## Questions for Obsidian

1. 위 프로젝트 정보 중 Obsidian에 기록된 내용과 다른 부분이 있나요?
2. 포트폴리오에 빠진 프로젝트가 있나요?
3. 각 프로젝트의 기간(period)이 정확한가요? 특히 "현재"로 표기된 것들 중 실제로 종료된 것은?
4. 기술 스택에 추가하거나 제거해야 할 항목이 있나요?
5. 프로젝트 설명이나 기능 목록에서 업데이트가 필요한 부분이 있나요?
6. 링크(GitHub, App Store, npm 등)가 모두 유효한가요?
7. Cookting의 achievements에 "App Store 심사 중"이라고 되어 있는데, 현재 상태가 PRODUCTION이면 이 부분도 업데이트가 필요합니다. 실제 App Store 출시 상태는?
