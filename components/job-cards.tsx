import { fetchJobs } from "@/lib/actions";
import JobCard from "./job-card";

const JobCards = async () => {
  const jobs = await fetchJobs();

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
