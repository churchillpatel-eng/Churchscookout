import type { Metadata } from "next";
import RecipesBrowser from "@/components/RecipesBrowser";
import { getAllRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "All Recipes",
  description: "Browse every Church's Cookout recipe — search and filter by category.",
};

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const recipes = getAllRecipes();

  return (
    <div>
      <div className="page-header">
        <h2>All Recipes</h2>
      </div>
      <RecipesBrowser recipes={recipes} initialCategory={category ?? ""} />
    </div>
  );
}
