"use client";

import { cn } from "@/lib/utils";
import { colors } from "@/lib/design-tokens";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

const iconMap = {
  handled: CheckCircle2,
  escalated: AlertTriangle,
  pending: Clock,
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const style = colors.status[status] || colors.status.pending;
  const Icon = iconMap[status as keyof typeof iconMap] || Clock;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium capitalize",
        style.bg,
        style.text,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}
