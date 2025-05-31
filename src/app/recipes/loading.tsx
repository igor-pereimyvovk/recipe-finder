import { Skeleton } from '@/shared/ui/kit/skeleton';

export default function Loading() {
  return (
    <main className="container mx-auto min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Загрузка рецептов...</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden animate-pulse">
            <div className="relative w-full h-48 bg-gray-200" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
