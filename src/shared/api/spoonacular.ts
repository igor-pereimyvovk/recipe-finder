import { Recipe, RecipeDetails } from '@/shared/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!;

interface GetRecipesParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}

const buildQueryString = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, value.toString());
  }

  return searchParams.toString();
};

export const getRecipes = async (params: GetRecipesParams): Promise<Recipe[]> => {
  const queryString = buildQueryString({
    ...params,
    apiKey: API_KEY,
  });

  const res = await fetch(`${BASE_URL}/recipes/complexSearch?${queryString}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: ${res.statusText}`);
  }

  const data = await res.json();
  return data.results;
};

export const getRecipeById = async (id: string | number): Promise<RecipeDetails> => {
  const res = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipe by ID: ${res.statusText}`);
  }

  return res.json();
};
