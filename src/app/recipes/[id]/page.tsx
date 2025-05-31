import RecipePage from '@/features/recipe-page';

interface Props {
  params: {
    id: string;
  };
}

export default function Recipes({ params }: Props) {
  return <RecipePage params={params} />;
}
