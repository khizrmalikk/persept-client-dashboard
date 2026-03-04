"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Agent } from "@/types";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/design-tokens";
import { MessageSquare } from "lucide-react";

export function AgentStatusCard({ agent }: { agent: Agent }) {
  const agentColors = colors.agents[agent.name] || colors.agents.Sarah;

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.04] dark:hover:shadow-black/20"
    >
      <div className="flex items-start gap-4">
        {/* Avatar with gradient ring */}
        <div className="relative">
          <div className={cn(
            "rounded-full p-[2px] bg-gradient-to-br",
            agentColors.gradient,
          )}>
            <Avatar className="h-11 w-11 border-2 border-card">
              <AvatarFallback
                className="text-base font-bold text-white bg-gradient-to-br"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${agent.color}, ${agent.color}dd)`,
                }}
              >
                {agent.avatar}
              </AvatarFallback>
            </Avatar>
          </div>
          {/* Animated status dot */}
          <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center">
            <span
              className={cn(
                "h-3 w-3 rounded-full border-2 border-card",
                agent.status === "online" ? "bg-emerald-500" : "bg-slate-400"
              )}
            />
            {agent.status === "online" && (
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-40" />
            )}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm">{agent.name}</p>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-medium capitalize",
                agent.status === "online"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {agent.status}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">{agent.role}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MessageSquare className="h-3 w-3" />
          <span className="font-medium tabular-nums">{agent.todayMessages}</span>
          <span>today</span>
        </div>
        <span className="text-border">·</span>
        <span className="text-muted-foreground">{agent.lastActivity}</span>
      </div>
    </motion.div>
  );
}
