import JobCard from "./job-card";
import { IJob } from "@/types";

const JobCards = ({ jobs }: { jobs: IJob[] }) => {
  return (
    <section>
      <ul className="grid items-center gap-4 md:grid-cols-2">
        {jobs?.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </ul>
    </section>
  );
};

export default JobCards;
