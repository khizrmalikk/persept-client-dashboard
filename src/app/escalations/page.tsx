"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { escalations } from "@/lib/mock-data";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const priorityColors: Record<string, string> = {
  high: "bg-red-100 text-red-700 hover:bg-red-100",
  medium: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  low: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
};

export default function EscalationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Escalations</h1>
            <p className="text-sm text-muted-foreground">
              Messages requiring human attention
            </p>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <span>{escalations.filter((e) => e.status === "pending").length} Pending</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {escalations.map((esc) => {
            const time = new Date(esc.createdAt).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            });
            return (
              <Card key={esc.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <AlertTriangle
                        className={cn(
                          "h-5 w-5",
                          esc.priority === "high" ? "text-red-500" : esc.priority === "medium" ? "text-orange-500" : "text-yellow-500"
                        )}
                      />
                      <div>
                        <CardTitle className="text-base">
                          {esc.guestName}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Agent: {esc.agentName} · {time}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={cn("text-xs", priorityColors[esc.priority])}>
                      {esc.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">{esc.message}</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Reason:</strong> {esc.reason}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Resolve
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact Guest
                    </Button>
                    <Button size="sm" variant="ghost">
                      Archive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
