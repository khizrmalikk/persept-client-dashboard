"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus, MessageSquare, Clock, AlertTriangle, Timer } from "lucide-react";
import type { KPIData } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "message-square": MessageSquare,
  clock: Clock,
  "alert-triangle": AlertTriangle,
  timer: Timer,
};

export function KPICard({ data }: { data: KPIData }) {
  const Icon = iconMap[data.icon] || MessageSquare;
  const isPositive = data.trend.direction === "up";
  const isDown = data.trend.direction === "down";

  // For escalations, down is good. For response time, down is good.
  const isGoodTrend =
    (data.label === "Escalations" || data.label === "Avg Response Time") ? isDown : isPositive;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {data.trend.direction !== "neutral" && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                isGoodTrend
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : isDown ? (
                <TrendingDown className="h-3 w-3" />
              ) : (
                <Minus className="h-3 w-3" />
              )}
              {data.trend.percentage}%
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-3xl font-bold">{data.formattedValue}</p>
          <p className="mt-1 text-sm text-muted-foreground">{data.label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
