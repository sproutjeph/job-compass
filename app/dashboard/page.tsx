import { JobCardSkeleton } from "@/components/skeletons";
import JobCards from "@/components/job-cards";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <Suspense fallback={<JobCardSkeleton />}>
        <JobCards />
      </Suspense>
    </main>
  );
}
