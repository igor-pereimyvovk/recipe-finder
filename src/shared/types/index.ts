export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipeDetails extends Recipe {
  summary: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: ExtendedIngredient[];
}

export interface ExtendedIngredient {
  id: number;
  original: string;
}
