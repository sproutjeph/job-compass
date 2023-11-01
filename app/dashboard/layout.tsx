import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-full">
      <div className="hidden h-full lg:flex md:w-[200px] md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar />
      </div>
      <main>
        <Navbar />
        {children}
      </main>
    </section>
  );
}
