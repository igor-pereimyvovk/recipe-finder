import { Skeleton } from '@/shared/ui/kit/skeleton';

export default function Loading() {
  return (
    <main className="container mx-auto max-w-3xl py-10 px-4 space-y-6">
      <div className="mb-4">
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="h-64 w-full">
        <Skeleton className="h-full w-full rounded-xl" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <div>
        <Skeleton className="h-6 w-40 mb-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </main>
  );
}
