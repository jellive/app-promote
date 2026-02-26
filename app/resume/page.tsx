import { Metadata } from "next";
import Link from "next/link";
import { getProjectById } from "@/data/projects";

export const metadata: Metadata = {
  title: "이력서 | Jell - 풀스택 개발자",
  description:
    "유한군(Jell) 풀스택 개발자 이력서. 8년+ 경력, iOS/Flutter/React/Next.js 전문.",
};

const TOP_PROJECT_IDS = [
  "azflow",
  "vinjari",
  "finiroom",
  "glinda-aimi",
  "learning-portal",
];

const EXPERIENCE = [
  {
    id: "azflow",
    company: "애즈플로우 (AZFlow)",
    role: "수석연구원",
    period: "2024.12 - 2025.09",
    description:
      "스타트업 투자 관리 플랫폼 개발. React/Vite 기반 마이크로서비스 아키텍처, NestJS/FastAPI 백엔드, RAG 기반 AI 검색 구현.",
    highlights: [
      "마이크로서비스 3개 독립 배포 아키텍처 설계 및 구현",
      "NestJS + FastAPI 하이브리드 백엔드 개발",
      "RAG 기반 스타트업/투자 정보 지능형 검색 시스템 구축",
      "Swagger API 문서 100% 자동화",
    ],
  },
  {
    id: "visualsyn",
    company: "비주얼신 (VisualSyn)",
    role: "선임연구원",
    period: "2021.09 - 2024.08",
    description:
      "LiDAR 기반 3D 공간 스캐닝 iOS 앱(finiroom) 및 Unity WebGL 가상 쇼룸(glinda AIMI) 웹 프론트엔드 개발.",
    highlights: [
      "finiroom: ARKit/RealityKit 기반 iOS 앱 - App Store 정식 출시",
      "glinda AIMI: Unity-JavaScript 양방향 통신 웹 인터페이스 구현",
      "React/TypeScript 기반 웹 프론트엔드 개발 및 API 연동",
      "Node.js/Express/MongoDB 백엔드 개발",
    ],
  },
  {
    id: "creverse",
    company: "청담어학원 (현 크레버스)",
    role: "대리",
    period: "2018.12 - 2021.07",
    description:
      "학생 어학 교육 플랫폼(러닝포털) Web + Android + iOS 멀티플랫폼 개발 및 운영.",
    highlights: [
      "Vue 2 기반 러닝포털 웹사이트 개발 및 운영",
      "Android/iOS 네이티브 웹앱 개발",
      "Kotlin/Spring Boot 백엔드 개발",
      "학생·학부모 대상 3개 서비스 동시 운영",
    ],
  },
  {
    id: "klounge",
    company: "케이라운지 (K-Lounge)",
    role: "연구원",
    period: "2016.06 - 2018.07",
    description:
      "플립러닝 강의 녹화 iOS 앱(KnowRecorder), 실시간 화이트보드 교육 플랫폼(KnowLounge), WebRTC 화상 교육 웹앱(Gotalk) 개발.",
    highlights: [
      "KnowRecorder: PDF 기반 음성·드로잉 녹화 iOS 앱 개발 및 App Store 출시",
      "KnowLounge: WebSocket 기반 실시간 화이트보드 동기화 iOS 앱 개발",
      "Gotalk: WebRTC 기반 1:1 화상 영어 교육 웹앱 개발",
    ],
  },
  {
    id: "solomon",
    company: "솔로몬비젼",
    role: "연구원",
    period: "2015.06 - 2016.05",
    description: "첫 커리어. iOS 앱 개발 및 웹 서비스 운영.",
    highlights: ["iOS 네이티브 앱 개발", "웹 서비스 유지보수 및 운영"],
  },
];

const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue 2",
      "TailwindCSS",
      "Vite",
      "Zustand",
    ],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Swift", "SwiftUI", "UIKit", "ARKit"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "Express", "FastAPI", "Spring Boot", "Kotlin"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "MSSQL"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Docker", "Firebase", "Vercel", "GitHub Actions"],
  },
];

export default function ResumePage() {
  const topProjects = TOP_PROJECT_IDS.map((id) => getProjectById(id)).filter(
    Boolean,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        @media print {
          body, html { background: white !important; color: black !important; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Navigation bar - hidden on print */}
      <nav className="no-print sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            ← 홈으로
          </Link>
          <a
            href="/이력서_유한군.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-bold border-2 border-foreground text-sm hover:opacity-90 transition-opacity"
          >
            PDF 다운로드
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-10 border-4 border-foreground p-8 bg-card">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-1">
                유한군{" "}
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                  / Jell
                </span>
              </h1>
              <p className="text-xl font-semibold text-primary mt-2">
                풀스택 개발자 (Full-Stack Developer)
              </p>
            </div>
            <div
              data-testid="contact-section"
              className="text-sm font-mono space-y-1"
            >
              <p>
                <a
                  href="mailto:jellive7@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  jellive7@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/jellive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/jellive
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/han-goon-yoo-429980113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </p>
              <p className="no-print">
                <a
                  href="/이력서_유한군.pdf"
                  download
                  className="inline-flex items-center gap-1 px-3 py-1 bg-foreground text-background text-xs font-bold border-2 border-foreground"
                >
                  이력서 PDF 다운로드
                </a>
              </p>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section
          data-testid="summary-section"
          className="mb-8 border-4 border-foreground p-6 bg-card"
        >
          <h2 className="text-lg font-extrabold font-mono mb-3 uppercase tracking-wide border-b-2 border-foreground pb-2">
            Summary
          </h2>
          <p className="text-base leading-relaxed">
            <strong>8년+</strong> 경력의 풀스택 개발자로, iOS/Flutter 모바일부터
            React/Next.js 웹, NestJS/Spring Boot 백엔드까지 전 영역을
            커버합니다. Clean Architecture와 TDD를 적용한 고품질 코드 작성을
            지향하며, 현재 새로운 기회를 찾고 있습니다.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm font-mono">
            {[
              "Flutter / iOS (Swift)",
              "React / Next.js",
              "NestJS / Spring Boot",
            ].map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 border-2 border-foreground bg-background font-bold"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section
          data-testid="skills-section"
          className="mb-8 border-4 border-foreground p-6 bg-card"
        >
          <h2 className="text-lg font-extrabold font-mono mb-4 uppercase tracking-wide border-b-2 border-foreground pb-2">
            Skills
          </h2>
          <div className="space-y-3">
            {SKILLS.map((group) => (
              <div key={group.category} className="flex gap-3 items-start">
                <span className="w-28 shrink-0 text-sm font-bold font-mono text-muted-foreground pt-0.5">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-sm border border-foreground bg-background"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          data-testid="experience-section"
          className="mb-8 border-4 border-foreground p-6 bg-card"
        >
          <h2 className="text-lg font-extrabold font-mono mb-4 uppercase tracking-wide border-b-2 border-foreground pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="border-l-4 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-base">{exp.company}</h3>
                  <span className="text-sm font-mono text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {exp.role}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.description}
                </p>
                <ul className="space-y-0.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="text-primary shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          data-testid="projects-section"
          className="mb-8 border-4 border-foreground p-6 bg-card"
        >
          <h2 className="text-lg font-extrabold font-mono mb-4 uppercase tracking-wide border-b-2 border-foreground pb-2">
            Key Projects
          </h2>
          <div className="space-y-5">
            {topProjects.map((project) => {
              if (!project) return null;
              const allTech = [
                ...project.techStack.frontend,
                ...project.techStack.backend,
                ...project.techStack.infrastructure,
              ].slice(0, 6);
              return (
                <div
                  key={project.id}
                  className="border-l-4 border-secondary pl-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-bold text-base">
                      {project.emoji} {project.name}
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground shrink-0">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    {project.role}
                  </p>
                  <p className="text-sm mb-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-1">
                    {allTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs border border-foreground bg-background font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="no-print text-center text-sm text-muted-foreground mt-12 pt-6 border-t border-foreground/20">
          <p>
            &copy; {new Date().getFullYear()} 유한군 (Jell). All rights
            reserved.
          </p>
          <p className="mt-2">
            <Link href="/" className="hover:text-primary transition-colors">
              포트폴리오로 돌아가기
            </Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
