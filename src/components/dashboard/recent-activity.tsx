"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { recentLogs } from "@/lib/mock-data";
import { StatusBadge } from "@/components/shared/status-badge";
import { colors } from "@/lib/design-tokens";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight } from "lucide-react";

export function RecentActivity() {
  return (
    <Card className="border-border/50 shadow-none">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-semibold">Recent Activity</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">Latest agent actions</p>
          </div>
          <button className="flex items-center gap-1 text-xs font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
            View all
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-border/50">
              <TableHead className="text-xs font-medium text-muted-foreground">Time</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Agent</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Action</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground hidden md:table-cell">Guest</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground hidden sm:table-cell">Channel</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentLogs.map((log, i) => {
              const agentColors = colors.agents[log.agentName] || colors.agents.Sarah;
              const timeAgo = formatDistanceToNow(new Date(log.timestamp), { addSuffix: true });
              return (
                <TableRow
                  key={log.id}
                  className="group border-border/30 transition-colors hover:bg-muted/40"
                >
                  <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                    {timeAgo}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback
                          className="text-[10px] font-bold text-white"
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${
                              log.agentName === "Sarah" ? "#3b82f6" :
                              log.agentName === "Marcus" ? "#8b5cf6" :
                              log.agentName === "Olivia" ? "#10b981" : "#f59e0b"
                            }, ${
                              log.agentName === "Sarah" ? "#6366f1" :
                              log.agentName === "Marcus" ? "#a855f7" :
                              log.agentName === "Olivia" ? "#14b8a6" : "#f97316"
                            })`,
                          }}
                        >
                          {log.agentName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{log.agentName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{log.actionType}</TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                    {log.guestName}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {log.channel}
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={log.status} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
