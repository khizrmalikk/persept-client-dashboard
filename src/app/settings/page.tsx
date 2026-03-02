"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/config";
import { CheckCircle, XCircle } from "lucide-react";

const integrations = [
  { name: "PMS (Opera)", status: "connected" },
  { name: "WhatsApp Business", status: "connected" },
  { name: "Google Reviews", status: "connected" },
  { name: "TripAdvisor", status: "disconnected" },
  { name: "Email (SMTP)", status: "connected" },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Configure your dashboard and agent preferences
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* General */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">General</CardTitle>
              <CardDescription>Basic hotel configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Hotel Name</label>
                <input
                  type="text"
                  defaultValue={siteConfig.name}
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium">Support Email</label>
                <input
                  type="email"
                  defaultValue={siteConfig.supportEmail}
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  readOnly
                />
              </div>
              <Button size="sm" disabled>Save Changes</Button>
              <p className="text-xs text-muted-foreground">Configuration via environment variables (Phase 2)</p>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Integrations</CardTitle>
              <CardDescription>Connected services status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between">
                    <span className="text-sm">{integration.name}</span>
                    <Badge
                      variant="secondary"
                      className={
                        integration.status === "connected"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    >
                      {integration.status === "connected" ? (
                        <CheckCircle className="mr-1 h-3 w-3" />
                      ) : (
                        <XCircle className="mr-1 h-3 w-3" />
                      )}
                      {integration.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Agent Config */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Agent Configuration</CardTitle>
              <CardDescription>Customize agent behavior (coming in Phase 2)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {["Sarah - Guest Communication", "Marcus - Review Management", "Olivia - Scheduling", "Alex - Reporting"].map(
                  (agent) => (
                    <Card key={agent}>
                      <CardContent className="flex h-24 items-center justify-center p-4">
                        <p className="text-center text-sm text-muted-foreground">{agent}</p>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
