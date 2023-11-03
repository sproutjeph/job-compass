// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function JobCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100  shadow-sm`}
    >
      <div className="flex p-4">
        <div className="bg-gray-200 rounded-md w-14 h-14" />
        <div className="flex flex-col gap-2">
          <div className="w-20 h-4 ml-2 text-sm font-medium bg-gray-200 rounded-md" />
          <div className="w-16 h-4 ml-2 text-sm font-medium bg-gray-200 rounded-md" />
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="grid grid-cols-2 gap-2 p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 bg-gray-200 rounded-md h-7" />
          <div className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 bg-gray-200 rounded-md h-7" />
          <div className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 bg-gray-200 rounded-md h-7" />
          <div className="w-8 h-4 bg-gray-200 rounded-md" />
        </div>
        <div className="w-20 h-8 bg-gray-200 rounded-md" />
      </div>
      <div className="flex gap-6 p-4">
        <div className="w-12 h-8 bg-gray-200 rounded-md" />
        <div className="w-12 h-8 bg-gray-200 rounded-md" />
        <div className="w-12 h-8 ml-24 bg-gray-200 rounded-md" />
      </div>
    </div>
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
