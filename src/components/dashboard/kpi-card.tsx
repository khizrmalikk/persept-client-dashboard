"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Clock,
  AlertTriangle,
  Timer,
} from "lucide-react";
import type { KPIData } from "@/types";
import { cn } from "@/lib/utils";
import { AnimatedNumber } from "@/components/shared/animated-number";

const iconMap: Record<string, React.ElementType> = {
  "message-square": MessageSquare,
  clock: Clock,
  "alert-triangle": AlertTriangle,
  timer: Timer,
};

// Icon colors using agent-like tints
const iconStyles: Record<string, { bg: string; icon: string }> = {
  "message-square": { bg: "bg-[#fef2f2]", icon: "text-[#b91c1c]" },
  clock: { bg: "bg-[#eff6ff]", icon: "text-[#1d4ed8]" },
  "alert-triangle": { bg: "bg-[#fef2f2]", icon: "text-[#b91c1c]" },
  timer: { bg: "bg-[#ecfdf5]", icon: "text-[#047857]" },
};

function parseValue(formatted: string): { num: number; suffix: string } {
  const match = formatted.match(/^(\d+\.?\d*)\s*(.*)$/);
  if (match) return { num: parseFloat(match[1]), suffix: match[2] };
  return { num: 0, suffix: "" };
}

export function KPICard({ data }: { data: KPIData }) {
  const Icon = iconMap[data.icon] || MessageSquare;
  const style = iconStyles[data.icon] || iconStyles["message-square"];
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
      className="group relative overflow-hidden rounded-2xl border border-[#e4e8ef] bg-white p-6 transition-all duration-300 hover:border-[#c7d2e0] hover:shadow-lg hover:shadow-black/[0.03]"
    >
      <div className="relative">
        <div className="flex items-center justify-between">
          {/* Circular icon badge */}
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl",
              style.bg
            )}
          >
            <Icon className={cn("h-[18px] w-[18px]", style.icon)} />
          </div>

          {/* Trend indicator */}
          {data.trend.direction !== "neutral" && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                isGoodTrend
                  ? "bg-emerald-500/10 text-emerald-700"
                  : "bg-[#fef2f2] text-[#b91c1c]"
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
          <p className="text-3xl font-bold tracking-tight text-[#0c1222]">
            <AnimatedNumber value={num} suffix={suffix} duration={1.2} />
          </p>
          <p className="mt-1.5 text-[13px] font-medium text-[#5a6785]">
            {data.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
