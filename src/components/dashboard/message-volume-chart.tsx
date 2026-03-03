"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { messageVolumeData } from "@/lib/mock-data";
import { chartColors } from "@/lib/design-tokens";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border/60 bg-popover/95 px-3.5 py-2.5 shadow-xl backdrop-blur-sm">
      <p className="mb-1.5 text-xs font-semibold text-foreground">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.name} className="flex items-center gap-2 text-xs">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground capitalize">{entry.name}:</span>
          <span className="font-semibold text-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export function MessageVolumeChart() {
  return (
    <Card className="border-border/50 shadow-none">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold">Message Volume</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">Last 7 days</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: chartColors.primary }} />
              Messages
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: chartColors.danger }} />
              Escalations
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={messageVolumeData} margin={{ top: 8, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="msgGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartColors.primary} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={chartColors.primary} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="escGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartColors.danger} stopOpacity={0.15} />
                  <stop offset="100%" stopColor={chartColors.danger} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" strokeOpacity={0.5} vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="messages"
                stroke={chartColors.primary}
                strokeWidth={2}
                fill="url(#msgGradient)"
                dot={false}
                activeDot={{ r: 5, strokeWidth: 2, stroke: "hsl(var(--background))" }}
              />
              <Area
                type="monotone"
                dataKey="escalations"
                stroke={chartColors.danger}
                strokeWidth={2}
                fill="url(#escGradient)"
                dot={false}
                activeDot={{ r: 4, strokeWidth: 2, stroke: "hsl(var(--background))" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
