import JobStatsCard from "@/components/job-stats-card";
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

  return (
    <main className="p-4">
      <h1 className="text-lg">Good evening JEPHTHAH! </h1>
      <h6 className="text-xs text-gray-500">
        {"Here's your job finding summary for today"}
      </h6>
      <ul className="grid max-w-2xl grid-cols-2 gap-3 mt-8 sm:grid-cols-3">
        <JobStatsCard
          color="bg-green-100"
          title="Total Interviews"
          iconColor="text-green-800"
        />
        <JobStatsCard
          color="bg-red-100"
          title="Total Rejected"
          iconColor="text-red-800"
        />
        <JobStatsCard
          color="bg-blue-100"
          title="Total Pending"
          iconColor="text-blue-800"
        />
      </ul>
    </main>
  );
}
