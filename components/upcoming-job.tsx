import { FC } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface UpcomingJobProps {}

const UpcomingJob: FC<UpcomingJobProps> = ({}) => {
  return (
    <Card className="p-4 mt-4 ">
      <h4 className="text-sm text-primary">Full Stack Engineer</h4>
      <p className="text-xs text-gray-400">Nigeria</p>
      <Button size="sm" variant="outline" className="w-full mt-3">
        View Job
      </Button>
    </Card>
  );
};

export default UpcomingJob;
