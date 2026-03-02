"use client";

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { recentLogs } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Download, Filter } from "lucide-react";

const statusColors: Record<string, string> = {
  handled: "bg-green-100 text-green-700 hover:bg-green-100",
  escalated: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  pending: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
};

export default function LogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Activity Logs</h1>
            <p className="text-sm text-muted-foreground">
              Detailed view of all agent actions
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">All Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Guest</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Response Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...recentLogs, ...recentLogs].map((log, i) => {
                  const time = new Date(log.timestamp).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  });
                  return (
                    <TableRow key={`${log.id}-${i}`}>
                      <TableCell className="text-sm text-muted-foreground">{time}</TableCell>
                      <TableCell className="font-medium">{log.agentName}</TableCell>
                      <TableCell className="text-sm">{log.actionType}</TableCell>
                      <TableCell className="text-sm">{log.guestName}</TableCell>
                      <TableCell className="text-sm">{log.channel}</TableCell>
                      <TableCell className="text-sm">{log.responseTimeSeconds}s</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={cn("text-xs", statusColors[log.status])}>
                          {log.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
