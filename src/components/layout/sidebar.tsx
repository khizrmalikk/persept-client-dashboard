"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ScrollText,
  BarChart3,
  AlertTriangle,
  Settings,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ClientLogo } from "./client-logo";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Activity Logs", href: "/logs", icon: ScrollText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Escalations", href: "/escalations", icon: AlertTriangle, badge: 3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-[260px] flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-indigo-950/80 text-white",
        className
      )}
    >
      {/* Logo area */}
      <div className="flex h-16 items-center gap-3 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <ClientLogo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 pt-4">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </p>
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg bg-white/[0.08] backdrop-blur-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              {/* Hover glow */}
              {!isActive && (
                <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-white/[0.04]" />
              )}

              <item.icon className={cn(
                "relative z-10 h-[18px] w-[18px] transition-colors duration-200",
                isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
              )} />
              <span className="relative z-10">{item.name}</span>

              {/* Badge */}
              {item.badge && (
                <span className="relative z-10 ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500/20 px-1.5 text-[11px] font-semibold text-rose-400">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
          <p className="text-xs text-slate-500">
            Powered by <span className="font-medium text-slate-400">Persept AI</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
