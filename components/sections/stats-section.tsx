import * as React from "react";
import { Code2, FolderKanban, TestTube2, ShieldCheck } from "lucide-react";
import { StatCard } from "@/components/stat-card";

const stats = [
  {
    value: 24,
    label: "완료된 프로젝트",
    icon: FolderKanban,
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
  },
  {
    value: 50000,
    label: "작성한 코드 라인",
    icon: Code2,
    suffix: "+",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
  },
  {
    value: 1649,
    label: "작성한 테스트",
    icon: TestTube2,
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
  },
  {
    value: 96.8,
    label: "테스트 커버리지",
    icon: ShieldCheck,
    suffix: "%",
    gradientFrom: "from-orange-500",
    gradientTo: "to-yellow-500",
  },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      data-testid="stats-section"
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            숫자로 보는 성과
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            꾸준한 개발과 품질 관리를 통해 달성한 결과입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              suffix={stat.suffix}
              gradientFrom={stat.gradientFrom}
              gradientTo={stat.gradientTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
