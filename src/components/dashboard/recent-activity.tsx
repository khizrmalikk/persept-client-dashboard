"use client";

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
import { recentLogs } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  handled: "bg-green-100 text-green-700 hover:bg-green-100",
  escalated: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  pending: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
        <p className="text-sm text-muted-foreground">Latest agent actions</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Action</TableHead>
              <TableHead className="hidden md:table-cell">Guest</TableHead>
              <TableHead className="hidden sm:table-cell">Channel</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentLogs.map((log) => {
              const time = new Date(log.timestamp).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              });
              return (
                <TableRow key={log.id}>
                  <TableCell className="text-sm text-muted-foreground">
                    {time}
                  </TableCell>
                  <TableCell className="font-medium">{log.agentName}</TableCell>
                  <TableCell className="text-sm">{log.actionType}</TableCell>
                  <TableCell className="hidden text-sm md:table-cell">
                    {log.guestName}
                  </TableCell>
                  <TableCell className="hidden text-sm sm:table-cell">
                    {log.channel}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn("text-xs", statusColors[log.status])}
                    >
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
  );
}
