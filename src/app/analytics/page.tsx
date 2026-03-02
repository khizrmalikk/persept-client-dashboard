"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sarahData = [
  { day: "Mon", messages: 45, escalations: 2 },
  { day: "Tue", messages: 52, escalations: 1 },
  { day: "Wed", messages: 48, escalations: 3 },
  { day: "Thu", messages: 61, escalations: 1 },
  { day: "Fri", messages: 55, escalations: 2 },
  { day: "Sat", messages: 70, escalations: 4 },
  { day: "Sun", messages: 42, escalations: 1 },
];

const marcusData = [
  { day: "Mon", reviews: 8, responded: 8 },
  { day: "Tue", reviews: 12, responded: 11 },
  { day: "Wed", reviews: 6, responded: 6 },
  { day: "Thu", reviews: 15, responded: 14 },
  { day: "Fri", reviews: 9, responded: 9 },
  { day: "Sat", reviews: 11, responded: 10 },
  { day: "Sun", reviews: 7, responded: 7 },
];

function AgentChart({ data, bars }: { data: Record<string, unknown>[]; bars: { key: string; color: string }[] }) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} fill={bar.color} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Performance Analytics</h1>
          <p className="text-sm text-muted-foreground">
            Deep-dive metrics for each agent
          </p>
        </div>

        <Tabs defaultValue="sarah">
          <TabsList>
            <TabsTrigger value="sarah">Sarah</TabsTrigger>
            <TabsTrigger value="marcus">Marcus</TabsTrigger>
            <TabsTrigger value="olivia">Olivia</TabsTrigger>
            <TabsTrigger value="alex">Alex</TabsTrigger>
          </TabsList>

          <TabsContent value="sarah" className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">187</p>
                  <p className="text-sm text-muted-foreground">Messages Today</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">8s</p>
                  <p className="text-sm text-muted-foreground">Avg Response</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">4.2%</p>
                  <p className="text-sm text-muted-foreground">Escalation Rate</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Weekly Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <AgentChart
                  data={sarahData}
                  bars={[
                    { key: "messages", color: "#3B82F6" },
                    { key: "escalations", color: "#EF4444" },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marcus" className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">42</p>
                  <p className="text-sm text-muted-foreground">Reviews Today</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold">4.6</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Weekly Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <AgentChart
                  data={marcusData}
                  bars={[
                    { key: "reviews", color: "#8B5CF6" },
                    { key: "responded", color: "#10B981" },
                  ]}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="olivia" className="mt-6">
            <Card>
              <CardContent className="flex h-48 items-center justify-center p-6">
                <p className="text-muted-foreground">Olivia analytics coming in Phase 3</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alex" className="mt-6">
            <Card>
              <CardContent className="flex h-48 items-center justify-center p-6">
                <p className="text-muted-foreground">Alex analytics coming in Phase 3</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
