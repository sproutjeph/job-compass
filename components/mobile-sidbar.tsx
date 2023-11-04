"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "../constants/consants";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserAvatar from "./user-avatar";
import { Separator } from "./ui/separator";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0  w-[250px] bg-accent">
        <aside className="relative h-full px-4 bg-accent">
          <div className="mt-6 mr-4 text-3xl font-extrabold text-center lg:mt-4">
            𝔍𝔬𝔟ℭ𝔬𝔪𝔭𝔞𝔰𝔰
          </div>
          <ul className="flex flex-col items-center justify-center gap-8 mt-10">
            {sidebarLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
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
              </SheetClose>
            ))}
          </ul>
          <div className="absolute mt-auto cursor-pointer bottom-12 left-6">
            <div className="flex items-center gap-2">
              <UserAvatar />
              <h6 className="text-sm">Jephthah Mbah</h6>
            </div>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
