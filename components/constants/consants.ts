import { User, Briefcase, BriefcaseIcon, GitGraph } from "lucide-react";
export const sidebarLinks = [
  {
    label: "All Jobs",
    icon: Briefcase,
    href: "/dashboard",
  },
  {
    label: "Add Job",
    icon: BriefcaseIcon,
    href: "/dashboard/add-job",
  },
  {
    label: "Stats",
    icon: Briefcase,
    href: "/dashboard/stats",
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
];
