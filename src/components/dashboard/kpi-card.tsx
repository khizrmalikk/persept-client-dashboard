"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, MessageSquare, Clock, AlertTriangle, Timer } from "lucide-react";
import type { KPIData } from "@/types";
import { cn } from "@/lib/utils";
import { AnimatedNumber } from "@/components/shared/animated-number";

const iconMap: Record<string, React.ElementType> = {
  "message-square": MessageSquare,
  clock: Clock,
  "alert-triangle": AlertTriangle,
  timer: Timer,
};

const iconGradients: Record<string, string> = {
  "message-square": "from-blue-500 to-indigo-600",
  clock: "from-cyan-500 to-blue-500",
  "alert-triangle": "from-amber-500 to-orange-500",
  timer: "from-emerald-500 to-teal-500",
};

function parseValue(formatted: string): { num: number; suffix: string } {
  const match = formatted.match(/^(\d+\.?\d*)\s*(.*)$/);
  if (match) return { num: parseFloat(match[1]), suffix: match[2] };
  return { num: 0, suffix: "" };
}

export function KPICard({ data }: { data: KPIData }) {
  const Icon = iconMap[data.icon] || MessageSquare;
  const gradient = iconGradients[data.icon] || "from-indigo-500 to-purple-600";
  const isPositive = data.trend.direction === "up";
  const isDown = data.trend.direction === "down";
  const isGoodTrend =
    data.label === "Escalations" || data.label === "Avg Response Time"
      ? isDown
      : isPositive;

  const { num, suffix } = parseValue(data.formattedValue);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/20"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-indigo-500/[0.02] group-hover:to-purple-500/[0.02]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br shadow-sm",
            gradient
          )}>
            <Icon className="h-[18px] w-[18px] text-white" />
          </div>
          {data.trend.direction !== "neutral" && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                isGoodTrend
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {data.trend.percentage}%
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-3xl font-bold tracking-tight">
            <AnimatedNumber value={num} suffix={suffix} duration={1.2} />
          </p>
          <p className="mt-1.5 text-[13px] font-medium text-muted-foreground">
            {data.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
