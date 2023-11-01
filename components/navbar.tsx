import MobileSidebar from "./mobile-sidbar";
import { ModeToggle } from "./mode-toggle";
import UserAvatar from "./user-avatar";

export function Navbar() {
  return (
    <nav className="bg-accent shadow-sm p-4">
      <div className="flex items-center justify-between">
        <MobileSidebar />
        <h4 className="">Dashboard</h4>
        <div className="flex items-center gap-8">
          <ModeToggle />
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
}
