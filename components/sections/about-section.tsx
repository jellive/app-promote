"use client";

import * as React from "react";
import {
  Award,
  Code2,
  Heart,
  Lightbulb,
  Target,
  Zap,
  GraduationCap,
  Briefcase,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "개발자 커리어 시작",
    description: "솔로몬비젼에서 첫 개발자로 커리어를 시작했습니다.",
    icon: GraduationCap,
  },
  {
    year: "2016",
    title: "iOS 개발 전문화",
    description:
      "케이라운지에서 KnowLounge, KnowRecorder 등 교육 앱을 개발했습니다.",
    icon: Briefcase,
  },
  {
    year: "2018",
    title: "풀스택 개발자로 성장",
    description:
      "청담어학원(현 크레버스)에서 Vue 2, Kotlin Spring Boot 기반 학생 어학 교육 플랫폼을 구축했습니다.",
    icon: Code2,
  },
  {
    year: "2021",
    title: "AR/3D 기술 전문화",
    description:
      "비주얼신에서 finiroom(LiDAR), glinda AIMI(Unity WebGL) 프로젝트를 리드했습니다.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "수석연구원으로 활동",
    description: "애즈플로우에서 AZFlow SaaS 플랫폼 개발을 리드했습니다.",
    icon: Award,
  },
  {
    year: "2025",
    title: "프리랜서 & 새로운 도전",
    description:
      "빈자리(캠핑장 앱) Flutter 프리랜서 프로젝트를 완수하고, 새로운 풀타임 기회를 찾고 있습니다.",
    icon: Rocket,
  },
];

const achievements: Achievement[] = [
  {
    icon: Award,
    title: "8년+ 경력",
    description: "2015년부터 iOS, Web, 풀스택 개발",
  },
  {
    icon: Code2,
    title: "15개 프로젝트",
    description: "모바일, 웹, AR/3D 등 다양한 플랫폼",
  },
  {
    icon: Target,
    title: "상용 서비스 출시",
    description: "다수의 앱스토어 출시 및 B2B 서비스 운영",
  },
];

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "문제 해결",
    description: "복잡한 문제를 단순하고 우아한 솔루션으로 풀어냅니다.",
  },
  {
    icon: Heart,
    title: "사용자 중심",
    description: "항상 사용자 경험을 최우선으로 생각합니다.",
  },
  {
    icon: Zap,
    title: "지속적 학습",
    description: "새로운 기술과 트렌드를 끊임없이 학습합니다.",
  },
  {
    icon: Target,
    title: "품질 우선",
    description: "테스트와 코드 리뷰를 통해 높은 품질을 유지합니다.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">소개</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            안녕하세요, 풀스택 개발자 Jell입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Bio and Values */}
          <div className="space-y-8">
            {/* Bio */}
            <div>
              <p
                data-testid="about-bio"
                className="text-muted-foreground leading-relaxed"
              >
                iOS 앱부터 WebGL 3D 쇼룸, 핀테크 SaaS까지 — 플랫폼을 가리지 않고
                사용자가 실제로 쓰는 서비스를 만들어온 풀스택 개발자입니다.
                LiDAR 기반 공간 스캐닝(finiroom), 실시간 화이트보드 교육
                시스템(러닝포털), 투자 관리 플랫폼(AZFlow) 등 기술적 도전이 있는
                프로젝트에서 가장 빛을 발합니다. 최근에는 Flutter 하이브리드
                앱에서 1,156개의 테스트를 작성하며 TDD와 Clean Architecture를
                실천하고 있습니다.
              </p>
            </div>

            {/* Values */}
            <div data-testid="values-section">
              <h3 className="text-xl font-semibold mb-4">개발 철학</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      data-testid="value-item"
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{value.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline and Achievements */}
          <div className="space-y-8">
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4">여정</h3>
              <div
                data-testid="timeline"
                role="list"
                className="relative border-l-2 border-muted pl-6 space-y-6"
              >
                {timelineData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      data-testid="timeline-item"
                      role="listitem"
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] p-1.5 rounded-full bg-background border-2 border-primary">
                        <Icon className="w-3 h-3 text-primary" />
                      </div>

                      <div>
                        <span
                          data-testid="timeline-year"
                          className="text-sm font-medium text-primary"
                        >
                          {item.year}
                        </span>
                        <h4
                          data-testid="timeline-title"
                          className="font-semibold mt-1"
                        >
                          {item.title}
                        </h4>
                        <p
                          data-testid="timeline-description"
                          className="text-sm text-muted-foreground mt-1"
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div data-testid="achievements">
              <h3 className="text-xl font-semibold mb-4">성과</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      data-testid="achievement-item"
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-lg",
                        "bg-gradient-to-r from-primary/5 to-transparent",
                        "border border-primary/10",
                      )}
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold">
                          {achievement.title}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
