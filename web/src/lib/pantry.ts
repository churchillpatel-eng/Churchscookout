import type { Ingredient, Recipe } from "@/types";

// ── Pantry matching ──────────────────────────────────────────────────
// Framework-free logic for the My Pantry tab: normalize ingredient names,
// treat common staples as always on-hand, and rank recipes by how many of
// their ingredients the user already has. Pure + unit-testable.

// Common staples assumed to be in every kitchen (togglable in the UI). Matched
// as whole tokens against a normalized ingredient's words, so "oil" hits
// "Neutral Oil" but not "boil", and "black pepper"/"peppercorn" hit without
// "bell pepper" sneaking through on a bare "pepper".
export const STAPLES = ["salt", "black pepper", "peppercorn", "oil", "water", "sugar"];

/**
 * Reduce an ingredient name to a comparable "core" name: lowercase, drop the
 * prep phrase after the first comma, strip parentheticals, turn punctuation
 * into spaces, collapse whitespace.
 *   "Onion, Finely Chopped"              -> "onion"
 *   "Fresh Ginger-Garlic Paste"          -> "fresh ginger garlic paste"
 *   "Neutral Oil (Grapeseed or Avocado)" -> "neutral oil"
 */
export function normalizeIngredient(name: string): string {
  return name
    .toLowerCase()
    .split(",")[0] // drop prep after the first comma
    .replace(/\([^)]*\)/g, " ") // remove parentheticals
    .replace(/['’]/g, "") // drop apostrophes (Frank's -> franks)
    .replace(/[^a-z0-9\s]/g, " ") // other punctuation/hyphens -> space
    .replace(/\s+/g, " ")
    .trim();
}

// Naive singularizer so "onion" matches "Onions", "cumin seeds" matches "Seeds",
// etc. Good enough for the recipe vocabulary; keeps display names untouched.
function stem(token: string): string {
  if (token.length > 3) {
    if (token.endsWith("es")) return token.slice(0, -2);
    if (token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  }
  return token;
}

/** Stemmed match tokens for a name (used for comparison, not display). */
const matchTokens = (s: string): string[] =>
  normalizeIngredient(s)
    .split(" ")
    .filter(Boolean)
    .map(stem);

/** Does a normalized ingredient contain one of the staple terms as whole tokens? */
export function isStaple(coreName: string): boolean {
  const tokens = coreName.split(" ").filter(Boolean).map(stem);
  return STAPLES.some((staple) => staple.split(" ").map(stem).every((t) => tokens.includes(t)));
}

/** True when every token of a (a ⊆ b) — used both directions for a loose match. */
const isSubset = (a: string[], b: string[]) => a.length > 0 && a.every((t) => b.includes(t));

/**
 * A recipe ingredient is "had" if a pantry term's tokens are a subset of the
 * ingredient's tokens (or vice-versa): pantry "chicken" matches "Chicken
 * Thighs"; pantry "ginger garlic paste" matches "Fresh Ginger-Garlic Paste".
 */
function pantryHasIngredient(coreName: string, pantryTokenSets: string[][]): boolean {
  const ingTokens = coreName.split(" ").filter(Boolean).map(stem);
  return pantryTokenSets.some((p) => isSubset(p, ingTokens) || isSubset(ingTokens, p));
}

/** The real (non-divider) ingredients of a recipe. */
const realIngredients = (recipe: Recipe): Ingredient[] =>
  recipe.ingredients.filter((i) => !i.section && i.item);

export interface PantryMatch {
  recipe: Recipe;
  have: number;
  total: number;
  /** Core names of the ingredients the user is missing (excludes staples when assumed). */
  missing: string[];
  missingCount: number;
}

export interface PantryOptions {
  assumeStaples: boolean;
}

/** Rank every recipe by how few ingredients the user is missing. */
export function rankByPantry(
  recipes: Recipe[],
  items: string[],
  { assumeStaples }: PantryOptions,
): PantryMatch[] {
  const pantryTokenSets = items.map(matchTokens).filter((t) => t.length > 0);

  return recipes
    .map((recipe): PantryMatch => {
      const reals = realIngredients(recipe);
      let have = 0;
      const missing: string[] = [];

      for (const ing of reals) {
        const core = normalizeIngredient(ing.item ?? "");
        if (assumeStaples && isStaple(core)) {
          have += 1;
        } else if (pantryHasIngredient(core, pantryTokenSets)) {
          have += 1;
        } else {
          missing.push(core);
        }
      }

      return { recipe, have, total: reals.length, missing, missingCount: missing.length };
    })
    .sort(
      (a, b) =>
        a.missingCount - b.missingCount ||
        a.total - b.total ||
        a.recipe.title.localeCompare(b.recipe.title),
    );
}

/**
 * Deduplicated, sorted list of core ingredient names across all recipes — used
 * to power the input's autocomplete so user terms line up with real ingredients.
 */
export function buildVocabulary(recipes: Recipe[]): string[] {
  const set = new Set<string>();
  for (const recipe of recipes) {
    for (const ing of realIngredients(recipe)) {
      const core = normalizeIngredient(ing.item ?? "");
      if (core) set.add(core);
    }
  }
  return Array.from(set).sort();
}
