import { ModeToggle } from "./mode-toggle";
import UserAvatar from "./user-avatar";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-accent shadow-sm p-4">
      <div className=" flex items-center justify-between">
        <Menu />
        <h4>Dashboard</h4>
        <div className="flex items-center gap-8">
          <ModeToggle />
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
}
