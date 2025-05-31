import Image from 'next/image';
import Link from 'next/link';
import { getRecipes } from '@/shared/api/spoonacular';
import { Recipe } from '@/shared/types';

interface RecipesPageProps {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const params = await searchParams;

  let recipes: Recipe[] = [];
  let error = '';

  try {
    recipes = await getRecipes(params);
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = 'Unknown error occurred';
    }
  }

  return (
    <main className="container mx-auto min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Recipe Results</h2>

      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {!error && recipes.length === 0 && (
        <p className="text-2xl text-gray-500 text-center">No recipes found</p>
      )}

      {!error && recipes.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="relative w-full h-48">
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{recipe.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
