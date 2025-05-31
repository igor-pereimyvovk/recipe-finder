import RecipesPage from '@/features/recipes-page';

interface Props {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
}

export default function Recipes({ searchParams }: Props) {
  return <RecipesPage searchParams={searchParams} />;
}
