import Link from "next/link";
import { BookOpen } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
  url: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: "Flutter WebView Bridge 최적화: 3,341줄 코드 제거 경험기",
    description:
      "빈자리 앱에서 WebView-Flutter 브릿지 코드를 대폭 줄이며 얻은 Clean Architecture 인사이트",
    tags: ["Flutter", "Clean Architecture", "WebView"],
    date: "2025.01",
    url: "https://blog.jell.kr",
  },
  {
    id: 2,
    title: "LiDAR로 공간을 스캔하다: finiroom iOS 앱 개발기",
    description:
      "ARKit + LiDAR 센서로 실내 공간을 3D 모델링하는 기술적 도전과 해결책",
    tags: ["iOS", "ARKit", "LiDAR", "SwiftUI"],
    date: "2024.06",
    url: "https://blog.jell.kr",
  },
  {
    id: 3,
    title: "TDD로 1,156개 테스트 작성하기: Flutter Clean Architecture 실전",
    description:
      "RED-GREEN-REFACTOR 사이클을 500+ 시간 동안 지켜온 경험과 얻은 것들",
    tags: ["TDD", "Flutter", "Testing"],
    date: "2024.12",
    url: "https://blog.jell.kr",
  },
  {
    id: 4,
    title: "Unity WebGL과 React 간 양방향 통신 구현",
    description:
      "glinda AIMI 3D 쇼룸에서 JavaScript ↔ Unity 간 0.1초 이내 통신을 달성한 방법",
    tags: ["Unity", "WebGL", "React", "JavaScript"],
    date: "2023.08",
    url: "https://blog.jell.kr",
  },
  {
    id: 5,
    title: "Next.js 14 App Router 마이그레이션 완전 가이드",
    description:
      "Pages Router에서 App Router로 전환하며 겪은 모든 것, 함정과 해결책",
    tags: ["Next.js", "React", "TypeScript"],
    date: "2024.03",
    url: "https://blog.jell.kr",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-10"
        aria-hidden="true"
      />

      {/* Decorative Elements */}
      <div
        className="absolute top-10 left-20 w-36 h-36 border-4 border-accent/30 rotate-6 hidden xl:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-28 h-28 bg-secondary/10 -rotate-12 hidden xl:block"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-sm font-bold brutal-shadow-sm">
              <BookOpen className="w-4 h-4" />
              <span>BLOG</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="block">블로그</span>
              <span className="block relative inline-block mt-2">
                <span className="relative z-10">Featured Posts</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent -z-10 block" />
              </span>
            </h2>

            <Link
              href="https://blog.jell.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold font-mono border-2 border-foreground px-4 py-2 hover-lift transition-transform whitespace-nowrap"
            >
              기술 블로그에서 더 보기 →
            </Link>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            개발하며 배운 것들을{" "}
            <span className="font-bold text-foreground">80+ 포스트</span>로
            기록했습니다.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              data-testid="blog-post-card"
              className="group relative border-4 border-foreground bg-card brutal-shadow hover-lift transition-all duration-200 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Date */}
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  {post.date}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border-2 border-foreground font-mono text-xs font-bold bg-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  data-testid="blog-post-title"
                  className="text-lg font-extrabold leading-tight mb-3 group-hover:text-primary transition-colors"
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold font-mono border-2 border-foreground px-4 py-2 bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  읽기 →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 border-4 border-foreground bg-card brutal-shadow-lg">
            <p className="text-lg font-bold mb-4">
              더 많은 개발 이야기가 궁금하신가요?
            </p>
            <Link
              href="https://blog.jell.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-2 border-foreground hover-lift transition-transform"
            >
              <span>80+ 포스트 모두 보기 →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
