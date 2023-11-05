import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface JobStatsCardProps {
  color: string;
  title: string;
  iconColor: string;
}

const JobStatsCard: FC<JobStatsCardProps> = ({ color, title, iconColor }) => {
  return (
    <Card className="flex flex-col gap-2 p-4 h-fit">
      <div
        className={cn(
          `flex items-center justify-center w-6 h-6  rounded-md`,
          color
        )}
      >
        <Briefcase className={iconColor} size={12} />
      </div>
      <p className="text-sm tracking-wider">{title}</p>
      <h4 className="-mt-1 text-xl font-extrabold">0</h4>
    </Card>
  );
};

export default JobStatsCard;
