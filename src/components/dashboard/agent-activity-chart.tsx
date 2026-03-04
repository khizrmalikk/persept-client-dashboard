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
import { chartColors } from "@/lib/design-tokens";

// Agent-specific colors matching persept.ai
const COLORS = ["#b91c1c", "#7c3aed", "#047857", "#1d4ed8"];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const data = payload[0];
  return (
    <div className="rounded-lg border border-[#e4e8ef] bg-white px-3.5 py-2.5 shadow-xl">
      <div className="flex items-center gap-2 text-xs">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: data.payload.color }} />
        <span className="font-semibold text-[#0c1222]">{data.name}</span>
        <span className="text-[#5a6785]">{data.value}%</span>
      </div>
    </div>
  );
}

export function AgentActivityChart() {
  return (
    <Card className="border-[#e4e8ef] shadow-none rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-[#0c1222]">Agent Activity</CardTitle>
        <p className="text-xs text-[#5a6785] mt-0.5">Message distribution</p>
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
                <span className="text-sm font-medium flex-1 text-[#3d4b63]">{agent.name}</span>
                <span className="text-sm font-semibold tabular-nums text-[#0c1222]">{agent.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
