import { JobCardSSkeleton } from "@/components/skeletons";
import JobCards from "@/components/job-cards";
import React, { Suspense } from "react";
import JobSearch from "@/components/job-search";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || "1";

  console.log(query);
  console.log(page);

  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="grid sm:grid-cols-3 gap-x-4 lg:grid-cols-4">
        <JobSearch placeHolder="Company Name" />
        <JobSearch placeHolder="Location" />
        <JobSearch placeHolder="Job Title" />
        <JobSearch placeHolder="Job Status" />
      </div>
      <Suspense fallback={<JobCardSSkeleton />}>
        <JobCards />
      </Suspense>
    </main>
  );
}
