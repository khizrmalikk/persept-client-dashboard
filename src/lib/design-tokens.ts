// Design system tokens for the Persept dashboard
// Inspired by Linear, Vercel, and Stripe aesthetics

export const colors = {
  // Brand gradients
  gradients: {
    primary: "from-indigo-500 to-purple-600",
    secondary: "from-cyan-500 to-blue-600",
    success: "from-emerald-400 to-teal-500",
    warning: "from-amber-400 to-orange-500",
    danger: "from-rose-400 to-red-500",
    sidebar: "from-slate-900 via-slate-900 to-indigo-950",
    card: "from-white/80 to-white/40",
    cardDark: "from-white/[0.08] to-white/[0.03]",
  },
  // Agent brand colors
  agents: {
    Sarah: { bg: "bg-blue-500/10", text: "text-blue-500", ring: "ring-blue-500/30", gradient: "from-blue-400 to-blue-600" },
    Marcus: { bg: "bg-violet-500/10", text: "text-violet-500", ring: "ring-violet-500/30", gradient: "from-violet-400 to-violet-600" },
    Olivia: { bg: "bg-emerald-500/10", text: "text-emerald-500", ring: "ring-emerald-500/30", gradient: "from-emerald-400 to-emerald-600" },
    Alex: { bg: "bg-amber-500/10", text: "text-amber-500", ring: "ring-amber-500/30", gradient: "from-amber-400 to-amber-600" },
  } as Record<string, { bg: string; text: string; ring: string; gradient: string }>,
  // Status
  status: {
    handled: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
    escalated: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", dot: "bg-amber-500" },
    pending: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500" },
  } as Record<string, { bg: string; text: string; dot: string }>,
} as const;

export const animations = {
  duration: {
    fast: 0.15,
    base: 0.25,
    slow: 0.35,
    slower: 0.5,
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as [number, number, number, number],
    inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
    spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  stagger: {
    fast: 0.05,
    base: 0.08,
    slow: 0.12,
  },
} as const;

// Chart colors matching brand
export const chartColors = {
  primary: "#6366f1",   // indigo-500
  secondary: "#8b5cf6", // violet-500
  success: "#10b981",   // emerald-500
  warning: "#f59e0b",   // amber-500
  danger: "#ef4444",    // red-500
  info: "#06b6d4",      // cyan-500
} as const;
