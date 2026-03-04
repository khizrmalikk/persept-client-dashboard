"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { agentActivityData } from "@/lib/mock-data";

const COLORS = ["#6366f1", "#8b5cf6", "#10b981", "#f59e0b"];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const data = payload[0];
  return (
    <div className="rounded-lg border border-border/60 bg-popover/95 px-3.5 py-2.5 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: data.payload.color }} />
        <span className="font-semibold text-foreground">{data.name}</span>
        <span className="text-muted-foreground">{data.value}%</span>
      </div>
    </div>
  );
}

export function AgentActivityChart() {
  return (
    <Card className="border-border/50 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Agent Activity</CardTitle>
        <p className="text-xs text-muted-foreground mt-0.5">Message distribution</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-6">
          <div className="h-[260px] w-[260px] flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={agentActivityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={3}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {agentActivityData.map((entry, i) => (
                    <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="space-y-3 flex-1">
            {agentActivityData.map((agent, i) => (
              <div key={agent.name} className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <span className="text-sm font-medium flex-1">{agent.name}</span>
                <span className="text-sm font-semibold tabular-nums">{agent.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
