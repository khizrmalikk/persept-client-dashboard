"use client";

import { signOut, useSession } from "next-auth/react";
import { Menu, LogOut, User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/lib/config";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { data: session } = useSession();
  const initials =
    session?.user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#e4e8ef] bg-white px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-[#5a6785] hover:text-[#0c1222] hover:bg-[#f7f8fa]"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-sm font-semibold text-[#0c1222]">{siteConfig.name}</h2>
          <p className="text-xs text-[#5a6785]">AI Agent Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search placeholder */}
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-[#e4e8ef] bg-[#f7f8fa] px-3 py-1.5 text-[#94a3b8] transition-colors hover:border-[#c7d2e0]">
          <Search className="h-3.5 w-3.5" />
          <span className="text-xs">Search...</span>
          <kbd className="ml-4 rounded border border-[#e4e8ef] bg-white px-1.5 py-0.5 text-[10px] font-medium text-[#94a3b8]">
            ⌘K
          </kbd>
        </div>

        {/* Notification bell */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-[#5a6785] hover:text-[#0c1222] hover:bg-[#f7f8fa]"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#b91c1c] ring-2 ring-white" />
        </Button>

        {/* Separator */}
        <div className="mx-1 h-6 w-px bg-[#e4e8ef]" />

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 pl-2 pr-3 hover:bg-[#f7f8fa]">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-[#b91c1c] text-[11px] font-semibold text-white">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium text-[#0c1222] sm:inline-block">
                {session?.user?.name || "User"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 border-[#e4e8ef]">
            <DropdownMenuItem className="text-[#3d4b63]">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#e4e8ef]" />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-[#b91c1c]"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
