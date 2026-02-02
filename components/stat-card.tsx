import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  icon?: LucideIcon;
  prefix?: string;
  suffix?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function StatCard({
  value,
  label,
  icon: Icon,
  prefix,
  suffix,
  gradientFrom,
  gradientTo,
}: StatCardProps) {
  const hasGradient = gradientFrom && gradientTo;

  return (
    <div
      data-testid="stat-card"
      className={cn(
        "rounded-lg border p-6 text-center",
        "transition-all duration-300",
        hasGradient
          ? `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white border-transparent`
          : "bg-card",
      )}
    >
      {Icon && (
        <div className="flex justify-center mb-3">
          <Icon
            className={cn(
              "h-8 w-8",
              hasGradient ? "text-white/80" : "text-muted-foreground",
            )}
          />
        </div>
      )}

      <div className="space-y-1">
        <p
          className={cn(
            "text-4xl font-bold tracking-tight",
            hasGradient ? "text-white" : "text-foreground",
          )}
        >
          {prefix}
          {value}
          {suffix}
        </p>
        <p
          className={cn(
            "text-sm",
            hasGradient ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
