"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Agent } from "@/types";
import { cn } from "@/lib/utils";

export function AgentStatusCard({ agent }: { agent: Agent }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="relative">
          <Avatar className="h-12 w-12">
            <AvatarFallback
              className="text-lg font-bold text-white"
              style={{ backgroundColor: agent.color }}
            >
              {agent.avatar}
            </AvatarFallback>
          </Avatar>
          <span
            className={cn(
              "absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-card",
              agent.status === "online" ? "bg-green-500" : "bg-gray-400"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold">{agent.name}</p>
            <Badge
              variant={agent.status === "online" ? "default" : "secondary"}
              className="text-xs"
            >
              {agent.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{agent.role}</p>
          <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
            <span>{agent.todayMessages} messages today</span>
            <span>·</span>
            <span>{agent.lastActivity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
