import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useSearchRecipes() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const isFormValid = query || cuisine || prepTime;

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (prepTime) params.append('maxReadyTime', prepTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return {
    query,
    setQuery,
    cuisine,
    setCuisine,
    prepTime,
    setPrepTime,
    isFormValid,
    handleSearch,
  };
}
