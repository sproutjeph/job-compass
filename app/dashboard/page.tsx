import JobCard from "@/components/job-card";
import JobStatsCard from "@/components/job-stats-card";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import UpcomingJob from "@/components/upcoming-job";
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
      <ul className="grid gap-3 mt-8 sm:grid-cols-2 md:grid-cols-3">
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
        <Card className="p-4 sm:col-span-3 md:col-span-3">
          <h4>Upcoming Job Interviews</h4>
          <ul className="grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <li className="w-full">
              <UpcomingJob />
            </li>
            <li className="w-full">
              <UpcomingJob />
            </li>
            <li className="w-full">
              <UpcomingJob />
            </li>
            <li className="w-full">
              <UpcomingJob />
            </li>
          </ul>
        </Card>
      </ul>
    </main>
  );
}
