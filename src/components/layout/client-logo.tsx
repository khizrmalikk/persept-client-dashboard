"use client";

import { siteConfig } from "@/lib/config";

export function ClientLogo({ className = "" }: { className?: string }) {
  if (siteConfig.logoUrl) {
    return (
      <img
        src={siteConfig.logoUrl}
        alt={siteConfig.name}
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <span className={`text-sm font-bold tracking-tight text-white ${className}`}>
      {siteConfig.name}
    </span>
  );
}
