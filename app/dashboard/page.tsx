import JobCard from "@/components/job-card";
import React from "react";

export default function Page() {
  const dummyJob = {
    id: "4105sgggs-4001-4271-9855-fsgsffddsda",
    company: "J-Sprout",
    position: "Software Developer",
    status: "Interviewed",
    jobType: "Internship",
    location: "London",
    date: "2022-12-06",
  };
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <JobCard job={dummyJob} />
    </main>
  );
}
