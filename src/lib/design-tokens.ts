// Design system tokens for the Persept dashboard
// EXACT colors extracted from persept.ai website

// ── Brand Colors (extracted from persept.ai) ──────────────────────────
export const brand = {
  red: "#b91c1c",       // Primary CTA buttons, accents
  redHover: "#991b1b",  // Button hover state
  redLight: "#fef2f2",  // Light red backgrounds (icon badges)
  redMuted: "#b91c1c1a", // 10% opacity red for subtle backgrounds
} as const;

export const palette = {
  background: {
    primary: "#ffffff",
    secondary: "#f7f8fa",  // Section backgrounds
    tertiary: "#f3f4f6",   // Large watermark numbers
  },
  text: {
    primary: "#0c1222",    // Headings, bold text
    secondary: "#3d4b63",  // Body text
    muted: "#5a6785",      // Secondary/muted text
    caption: "#94a3b8",    // Footer, timestamps
  },
  border: {
    light: "#e4e8ef",      // Default borders
    hover: "#c7d2e0",      // Hover borders
  },
} as const;

// ── Agent Colors (from persept.ai agent section) ──────────────────────
export const colors = {
  agents: {
    Sarah: {
      color: "#b91c1c",
      bg: "bg-[#fef2f2]",
      text: "text-[#b91c1c]",
      ring: "ring-[#b91c1c]/30",
      gradient: "from-[#b91c1c] to-[#991b1b]",
    },
    Marcus: {
      color: "#7c3aed",
      bg: "bg-[#f5f3ff]",
      text: "text-[#7c3aed]",
      ring: "ring-[#7c3aed]/30",
      gradient: "from-[#7c3aed] to-[#6d28d9]",
    },
    Olivia: {
      color: "#047857",
      bg: "bg-[#ecfdf5]",
      text: "text-[#047857]",
      ring: "ring-[#047857]/30",
      gradient: "from-[#047857] to-[#065f46]",
    },
    Alex: {
      color: "#1d4ed8",
      bg: "bg-[#eff6ff]",
      text: "text-[#1d4ed8]",
      ring: "ring-[#1d4ed8]/30",
      gradient: "from-[#1d4ed8] to-[#1e40af]",
    },
  } as Record<string, { color: string; bg: string; text: string; ring: string; gradient: string }>,

  status: {
    handled: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-700",
      dot: "bg-emerald-500",
    },
    escalated: {
      bg: "bg-[#fef2f2]",
      text: "text-[#b91c1c]",
      dot: "bg-[#b91c1c]",
    },
    pending: {
      bg: "bg-[#eff6ff]",
      text: "text-[#1d4ed8]",
      dot: "bg-[#1d4ed8]",
    },
  } as Record<string, { bg: string; text: string; dot: string }>,
} as const;

// ── Animation Tokens ──────────────────────────────────────────────────
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

// ── Chart Colors (brand-aligned) ──────────────────────────────────────
export const chartColors = {
  primary: "#b91c1c",   // Brand red
  secondary: "#7c3aed", // Marcus purple
  success: "#047857",   // Olivia green
  warning: "#d97706",   // Amber
  info: "#1d4ed8",      // Alex blue
  // Red tints for donut chart segments
  redTints: ["#b91c1c", "#dc2626", "#ef4444", "#f87171", "#fca5a5"],
} as const;
