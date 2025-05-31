import { getRecipeById } from '@/shared/api/spoonacular';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/shared/ui/kit/card';
import { Badge } from '@/shared/ui/kit/badge';
import { RecipeDetails } from '@/shared/types';

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipeId = await params.id;

  let recipe: RecipeDetails;

  try {
    recipe = await getRecipeById(recipeId);
  } catch {
    notFound();
  }

  return (
    <main className="container mx-auto max-w-3xl py-10 px-4">
      <Card className="shadow-xl rounded-2xl overflow-hidden pt-0">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full">
            <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">{recipe.title}</h1>

          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span>⏱ {recipe.readyInMinutes} min</span>
            <span>🍽 {recipe.servings} servings</span>
          </div>

          {recipe.summary && (
            <p
              className="prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          )}

          <div>
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <div className="flex flex-wrap gap-2">
              {recipe.extendedIngredients?.map((ingredient) => (
                <Badge key={ingredient.id} variant="outline" className="py-2">
                  {ingredient.original}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
