import { JobCardSSkeleton } from "@/components/skeletons";
import Pagination from "@/components/pagination";
import JobSearch from "@/components/job-search";
import JobCards from "@/components/job-cards";
import { fetchJobs } from "@/lib/actions";
import React, { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const page = searchParams?.page || "1";
  const query = searchParams?.query || "";

  const jobs = await fetchJobs(Number(page), query);

  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="grid sm:grid-cols-3 gap-x-4 lg:grid-cols-4">
        <JobSearch placeHolder="Company Name" />
      </div>
      <Suspense fallback={<JobCardSSkeleton />}>
        <JobCards jobs={jobs?.jobs!} />
      </Suspense>
      <Pagination totalPages={jobs?.pages!} />
    </main>
  );
}
