import {
  User,
  Briefcase,
  LayoutDashboard,
  FileBoxIcon,
  BarChartIcon,
} from "lucide-react";
export const sidebarLinks = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "All Jobs",
    icon: Briefcase,
    href: "/dashboard/jobs",
  },
  {
    label: "Add Job",
    icon: FileBoxIcon,
    href: "/dashboard/add-job",
  },
  {
    label: "Stats",
    icon: BarChartIcon,
    href: "/dashboard/stats",
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
];
