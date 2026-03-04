import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
}

export function trendIndicator(current: number, previous: number): { direction: "up" | "down" | "neutral"; percentage: number } {
  if (previous === 0) return { direction: "neutral", percentage: 0 };
  const change = ((current - previous) / previous) * 100;
  return {
    direction: change > 0 ? "up" : change < 0 ? "down" : "neutral",
    percentage: Math.abs(Math.round(change)),
  };
}
