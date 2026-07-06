import { RECIPES } from "@/data/recipes";
import type { Recipe } from "@/types";

/** All published recipes, in authoring order. */
export function getAllRecipes(): Recipe[] {
  return RECIPES;
}

/** The most recently added recipes, newest first. */
export function getLatestRecipes(limit = 3): Recipe[] {
  return RECIPES.slice(-limit).reverse();
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((r) => r.slug === slug);
}

export function getRecipeSlugs(): string[] {
  return RECIPES.map((r) => r.slug);
}

/** Ingredient count excluding section-divider entries. */
export function countIngredients(recipe: Recipe): number {
  return recipe.ingredients.filter((i) => !i.section).length;
}

/** { category -> number of recipes }, in first-seen order. */
export function categoryCounts(recipes: Recipe[] = RECIPES): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const r of recipes) {
    counts[r.category] = (counts[r.category] ?? 0) + 1;
  }
  return counts;
}
