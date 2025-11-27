'use client';

import * as React from 'react';
import {
  Award,
  Code2,
  Heart,
  Lightbulb,
  Target,
  Zap,
  GraduationCap,
  Briefcase,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
    year: '2018',
    title: '개발 시작',
    description: '첫 프로그래밍 언어를 배우고 개발의 세계에 입문했습니다.',
    icon: GraduationCap,
  },
  {
    year: '2020',
    title: '풀스택 개발자로 성장',
    description: 'React, Node.js를 중심으로 웹 개발 역량을 키웠습니다.',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: '모바일 개발 확장',
    description: 'Flutter를 배우고 크로스 플랫폼 앱 개발을 시작했습니다.',
    icon: Rocket,
  },
  {
    year: '2024',
    title: '8개 프로젝트 완료',
    description: '다양한 플랫폼에서 8개의 프로젝트를 성공적으로 완료했습니다.',
    icon: Award,
  },
];

const achievements: Achievement[] = [
  {
    icon: Award,
    title: '8개 프로젝트',
    description: '모바일, 웹, 데스크톱 등 다양한 플랫폼',
  },
  {
    icon: Code2,
    title: '50,000+ 라인',
    description: '깔끔하고 유지보수 가능한 코드 작성',
  },
  {
    icon: Target,
    title: '96.8% 테스트 커버리지',
    description: '철저한 테스트를 통한 품질 보증',
  },
];

const values: Value[] = [
  {
    icon: Lightbulb,
    title: '문제 해결',
    description: '복잡한 문제를 단순하고 우아한 솔루션으로 풀어냅니다.',
  },
  {
    icon: Heart,
    title: '사용자 중심',
    description: '항상 사용자 경험을 최우선으로 생각합니다.',
  },
  {
    icon: Zap,
    title: '지속적 학습',
    description: '새로운 기술과 트렌드를 끊임없이 학습합니다.',
  },
  {
    icon: Target,
    title: '품질 우선',
    description: '테스트와 코드 리뷰를 통해 높은 품질을 유지합니다.',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            소개
          </h2>
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
                저는 풀스택 개발자로서 웹, 모바일, 데스크톱 애플리케이션을 개발합니다.
                사용자 중심의 직관적인 인터페이스와 안정적인 백엔드 시스템을 구축하는 것을 좋아합니다.
                테스트 주도 개발(TDD)과 클린 코드를 실천하며, 지속적인 학습을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
                다양한 플랫폼에서의 경험을 바탕으로 최적의 기술 스택을 선택하고, 효율적인 솔루션을 제공합니다.
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
                        'flex items-center gap-4 p-4 rounded-lg',
                        'bg-gradient-to-r from-primary/5 to-transparent',
                        'border border-primary/10'
                      )}
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold">{achievement.title}</span>
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
