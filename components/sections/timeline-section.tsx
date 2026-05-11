import * as React from "react";
import { getAllProjects, ProjectCategory } from "@/data/projects";

interface ParsedPeriod {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

function parsePeriod(period: string): ParsedPeriod {
  const CURRENT_YEAR = 2026;
  const CURRENT_MONTH = 2;

  const parts = period.split(" - ");
  const [startStr, endStr] = parts;

  const parseYearMonth = (
    s: string,
  ): { year: number; month: number } | null => {
    if (!s || s.trim() === "현재") {
      return { year: CURRENT_YEAR, month: CURRENT_MONTH };
    }
    const m = s.trim().match(/^(\d{4})\.(\d{2})$/);
    if (!m) return null;
    return { year: parseInt(m[1]), month: parseInt(m[2]) };
  };

  const start = parseYearMonth(startStr) ?? {
    year: CURRENT_YEAR,
    month: CURRENT_MONTH,
  };
  const end = parseYearMonth(endStr) ?? {
    year: CURRENT_YEAR,
    month: CURRENT_MONTH,
  };

  return {
    startYear: start.year,
    startMonth: start.month,
    endYear: end.year,
    endMonth: end.month,
  };
}

const categoryConfig: Record<
  ProjectCategory,
  { label: string; borderColor: string; bgColor: string; textColor: string }
> = {
  [ProjectCategory.PROFESSIONAL]: {
    label: "💼 회사",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
  },
  [ProjectCategory.FREELANCE]: {
    label: "🏢 프리랜서",
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-400",
  },
  [ProjectCategory.PERSONAL]: {
    label: "🔧 개인",
    borderColor: "border-zinc-500",
    bgColor: "bg-zinc-500/10",
    textColor: "text-zinc-400",
  },
};

export function TimelineSection() {
  const projects = getAllProjects();

  // 각 프로젝트에 파싱된 period 추가
  const projectsWithParsed = projects.map((p) => ({
    ...p,
    parsed: parsePeriod(p.period),
  }));

  const MIN_YEAR = 2016;
  const MAX_YEAR = 2026;
  const years = Array.from(
    { length: MAX_YEAR - MIN_YEAR + 1 },
    (_, i) => MAX_YEAR - i, // 최신 연도가 위
  );

  return (
    <section
      id="timeline"
      data-testid="timeline-section"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프로젝트 타임라인
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2016년부터 현재까지의 개발 여정
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {years.map((year) => {
            const yearProjects = projectsWithParsed.filter(
              (p) => p.parsed.startYear <= year && p.parsed.endYear >= year,
            );

            if (yearProjects.length === 0) return null;

            return (
              <div
                key={year}
                data-testid="timeline-year-group"
                className="flex gap-6 mb-8"
              >
                {/* 연도 레이블 */}
                <div className="flex-shrink-0 w-20 pt-1">
                  <span className="font-mono font-bold text-lg text-primary">
                    {year}
                  </span>
                </div>

                {/* 세로선 */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background mt-1.5" />
                  <div className="w-0.5 bg-border flex-1 mt-1" />
                </div>

                {/* 프로젝트 카드들 */}
                <div className="flex-1 flex flex-col gap-3 pb-4">
                  {yearProjects.map((project) => {
                    const config = categoryConfig[project.category];
                    return (
                      <div
                        key={project.id}
                        data-testid="timeline-project-card"
                        className={`p-4 border-2 border-foreground/20 hover:border-foreground/60 transition-colors ${config.bgColor}`}
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{project.emoji}</span>
                            <div>
                              <p className="font-mono font-bold text-sm">
                                {project.name}
                              </p>
                              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                                {project.period}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-xs font-mono font-bold px-2 py-1 border ${config.borderColor} ${config.textColor}`}
                          >
                            {config.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
