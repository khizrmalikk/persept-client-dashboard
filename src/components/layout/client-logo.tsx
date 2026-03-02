"use client";

import { siteConfig } from "@/lib/config";
import { Building2 } from "lucide-react";

export function ClientLogo({ className = "" }: { className?: string }) {
  if (siteConfig.logoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={siteConfig.logoUrl}
        alt={siteConfig.name}
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Building2 className="h-5 w-5" />
      </div>
      <span className="text-lg font-bold">{siteConfig.name}</span>
    </div>
  );
}
