import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function JobCardSkeleton() {
  return (
    <Card>
      <div className="flex p-4">
        <Skeleton className="bg-gray-200 rounded-md w-14 h-14" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-20 h-4 ml-2 text-sm font-medium bg-gray-200 rounded-md" />
          <Skeleton className="w-16 h-4 ml-2 text-sm font-medium bg-gray-200 rounded-md" />
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="grid grid-cols-2 gap-2 p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 bg-gray-200 rounded-md h-7" />
          <Skeleton className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 bg-gray-200 rounded-md h-7" />
          <Skeleton className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 bg-gray-200 rounded-md h-7" />
          <Skeleton className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <Skeleton className="w-20 h-8 bg-gray-200 rounded-md" />
      </div>
      <div className="flex gap-6 p-4">
        <Skeleton className="w-12 h-8 bg-gray-200 rounded-md" />
        <Skeleton className="w-12 h-8 bg-gray-200 rounded-md" />
        <Skeleton className="w-12 h-8 ml-24 bg-gray-200 rounded-md" />
      </div>
    </Card>
  );
}

export function JobCardSSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
      <JobCardSkeleton />
    </div>
  );
}
