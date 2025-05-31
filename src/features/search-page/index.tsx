'use client';

import { Card, CardContent } from '@/shared/ui/kit/card';
import { Input } from '@/shared/ui/kit/input';
import { Button } from '@/shared/ui/kit/button';
import { Label } from '@/shared/ui/kit/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/kit/select';
import { useSearchRecipes } from '@/features/search-page/model/use-search-recipes';

export default function SearchPage() {
  const { query, setQuery, cuisine, setCuisine, prepTime, setPrepTime, isFormValid, handleSearch } =
    useSearchRecipes();

  return (
    <main className="flex justify-center mt-12">
      <Card className="w-full max-w-xl shadow-2xl border rounded-2xl p-6">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Search Recipes</h2>

          <div className="space-y-2">
            <Label htmlFor="query">Search Term</Label>
            <Input
              id="query"
              placeholder="e.g. Pasta"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="prepTime">Max Preparation Time (min)</Label>
            <Input
              id="prepTime"
              type="number"
              placeholder="e.g. 30"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cuisine">Cuisine</Label>
            <Select value={cuisine} onValueChange={setCuisine}>
              <SelectTrigger id="cuisine">
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Italian">Italian</SelectItem>
                <SelectItem value="Mexican">Mexican</SelectItem>
                <SelectItem value="Chinese">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full mt-4" onClick={handleSearch} disabled={!isFormValid}>
            Next
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
