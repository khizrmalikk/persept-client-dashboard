"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { KPICard } from "@/components/dashboard/kpi-card";
import { MessageVolumeChart } from "@/components/dashboard/message-volume-chart";
import { AgentActivityChart } from "@/components/dashboard/agent-activity-chart";
import { AgentStatusCard } from "@/components/dashboard/agent-status-card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/shared/page-transition";
import { kpiData, agents } from "@/lib/mock-data";
import { Activity } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Page header */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Last 24 hours overview · Updated just now
            </p>
          </div>

          {/* KPI Cards */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((kpi) => (
              <StaggerItem key={kpi.label}>
                <KPICard data={kpi} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <MessageVolumeChart />
            <AgentActivityChart />
          </div>

          {/* Agent Status */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Agent Status</h2>
            </div>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {agents.map((agent) => (
                <StaggerItem key={agent.name}>
                  <AgentStatusCard agent={agent} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
