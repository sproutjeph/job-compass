import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { IJob } from "@/types";
import { Briefcase, Calendar, Send } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FC } from "react";

interface JobCardProps {
  job: IJob;
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="">
      <CardHeader className="flex-row items-center gap-4 p-4">
        <div className="flex items-center justify-center text-3xl font-black text-white rounded-md w-14 h-14 bg-primary">
          {job.company.charAt(0)}
        </div>
        <div className="text-sm ">
          <h4>{job.position}</h4>
          <h5 className="font-bold">{job.company}</h5>
        </div>
      </CardHeader>
      <Separator className="mb-3" />
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex gap-2">
          <Send />
          <h4>{job.location}</h4>
        </div>
        <div className="flex gap-2">
          <Calendar />
          <h4>{"date"}</h4>
        </div>
        <div className="flex gap-2">
          <Briefcase />
          <h4>{job.jobType}</h4>
        </div>

        <div className="flex items-center justify-center py-1 text-white bg-black rounded-md dark:bg-white dark:text-black w-28">
          {job.status}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm">Edit</Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
        <a href={job.jobLink} target="_blank">
          <Button size="sm" variant="secondary" className="ml-16">
            Job Link
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
