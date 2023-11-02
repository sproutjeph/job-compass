import { IJob } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FC } from "react";
import { Separator } from "./ui/separator";
import { Briefcase, Calendar, Send } from "lucide-react";
import { Button } from "./ui/button";

interface JobCardProps {
  job: IJob;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="max-w-lg">
      <CardHeader className="flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-center text-3xl font-black rounded-md w-14 h-14 bg-primary">
          {job.company.charAt(0)}
        </div>
        <div className="text-sm ">
          <h4>{job.position}</h4>
          <h5 className="font-bold">{job.company}</h5>
        </div>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex gap-2">
          <Send />
          <h4>{job.location}</h4>
        </div>
        <div className="flex gap-2">
          <Calendar />
          <h4>{job.date}</h4>
        </div>
        <div className="flex gap-2">
          <Briefcase />
          <h4>{job.jobType}</h4>
        </div>

        <div className="flex items-center justify-center py-1 text-black bg-white rounded-md w-28">
          {job.status}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm">Edit</Button>
        <Button size="sm">Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
