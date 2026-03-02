"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KPICard } from "@/components/dashboard/kpi-card";
import { MessageVolumeChart } from "@/components/dashboard/message-volume-chart";
import { AgentActivityChart } from "@/components/dashboard/agent-activity-chart";
import { AgentStatusCard } from "@/components/dashboard/agent-status-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { kpiData, agents } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Last 24 hours overview · Updated just now
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi) => (
            <KPICard key={kpi.label} data={kpi} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <MessageVolumeChart />
          <AgentActivityChart />
        </div>

        {/* Agent Status */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Agent Status</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <AgentStatusCard key={agent.name} agent={agent} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}
