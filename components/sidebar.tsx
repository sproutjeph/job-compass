"use client";

import Link from "next/link";
import { sidebarLinks } from "../constants/consants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import UserAvatar from "./user-avatar";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative h-full px-4 bg-accent">
      <div className="mt-6 mr-4 text-3xl font-extrabold text-center lg:mt-4">
        𝔍𝔬𝔟ℭ𝔬𝔪𝔭𝔞𝔰𝔰
      </div>
      <ul className="flex flex-col items-center justify-center gap-8 mt-10">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm group flex items-center gap-2 p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === link.href
                ? "text-white bg-white/10"
                : "text-zinc-400"
            )}
          >
            <div className="">
              <link.icon />
            </div>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="absolute mt-auto cursor-pointer bottom-8">
        <div className="flex items-center gap-2">
          <UserAvatar />
          <h6 className="text-sm">Jephthah Mbah</h6>
        </div>
      </div>
    </aside>
  );
}
