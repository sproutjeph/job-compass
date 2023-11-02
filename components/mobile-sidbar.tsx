"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0  w-[250px] bg-accent">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
