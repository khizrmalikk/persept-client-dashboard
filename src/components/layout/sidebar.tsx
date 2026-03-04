"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ScrollText,
  BarChart3,
  AlertTriangle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ClientLogo } from "./client-logo";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Activity Logs", href: "/logs", icon: ScrollText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Escalations", href: "/escalations", icon: AlertTriangle, badge: 3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex h-full flex-col bg-white border-r border-[#e4e8ef] shadow-[1px_0_3px_rgba(0,0,0,0.02)]",
          className
        )}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#b91c1c]">
              <span className="text-sm font-bold text-white">P</span>
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <ClientLogo />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex h-6 w-6 items-center justify-center rounded-md text-[#5a6785] hover:bg-[#f7f8fa] hover:text-[#0c1222] transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-3.5 w-3.5" />
            ) : (
              <ChevronLeft className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 pt-4">
          {!collapsed && (
            <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">
              Navigation
            </p>
          )}
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            const linkContent = (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200",
                  collapsed && "justify-center px-0",
                  isActive
                    ? "text-[#b91c1c]"
                    : "text-[#5a6785] hover:text-[#0c1222] hover:bg-[#f7f8fa]"
                )}
              >
                {/* Active left border */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-[#b91c1c]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 rounded-lg bg-[#fef2f2]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <item.icon
                  className={cn(
                    "relative z-10 h-5 w-5 flex-shrink-0 transition-colors duration-200",
                    isActive
                      ? "text-[#b91c1c]"
                      : "text-[#94a3b8] group-hover:text-[#5a6785]"
                  )}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative z-10 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Badge */}
                {item.badge && !collapsed && (
                  <span className="relative z-10 ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b91c1c] px-1.5 text-[11px] font-semibold text-white">
                    {item.badge}
                  </span>
                )}
                {item.badge && collapsed && (
                  <span className="absolute -right-0.5 -top-0.5 z-20 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b91c1c] px-1 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );

            if (collapsed) {
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                  <TooltipContent side="right" className="text-xs">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              );
            }

            return <div key={item.name}>{linkContent}</div>;
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#e4e8ef] px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            {!collapsed && (
              <p className="text-[11px] text-[#94a3b8]">
                Powered by{" "}
                <span className="font-medium text-[#5a6785]">Persept AI</span>
              </p>
            )}
          </div>
        </div>
      </motion.aside>
    </TooltipProvider>
  );
}
