import { Button } from "./ui/button";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-accent">
      <h1 className="text-2xl font-bold text-white">𝔍𝔬𝔟ℭ𝔬𝔪𝔭𝔞𝔰𝔰</h1>
      <Link href="/dashboard">
        <Button
          variant="default"
          className="rounded-full hover:bg-mainColor/90"
        >
          Get Started
        </Button>
      </Link>
    </nav>
  );
}
