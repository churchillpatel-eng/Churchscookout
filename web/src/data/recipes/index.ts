import type { Recipe } from "@/types";
import greenGarlicMintCilantroChickenBurgers from "./green-garlic-mint-cilantro-chicken-burgers";
import tandooriMarinade from "./tandoori-marinade";
import paneerTikka from "./paneer-tikka";
import buffaloChickenDip from "./buffalo-chicken-dip";

// ── Recipe Data ──────────────────────────────────────────────────────
// The source of truth for all published recipes. Each recipe lives in its
// own file in this folder; add one by creating `<slug>.ts` (default-export
// a Recipe) and appending it to the array below.
//
// Order matters: the LAST entry is treated as the newest (see
// getLatestRecipes in lib/recipes.ts), so add new recipes at the end.
//
// Conventions (see CLAUDE.md):
//  - Ingredient `item` names in Title Case ("Fresh Mint Leaves, Finely Chopped").
//  - Prep style goes in the item name after a comma, never in `amount`.
//  - Reuse exact ingredient spelling already used — the shopping list
//    dedupes by name, so one stray variant breaks aggregation.
//  - Amounts use unicode fractions (½, ¼, ⅛), never "1/2".
//  - Long lists use `{ section: "Name" }` divider entries.
//  - `slug` must be unique and URL-safe — it is the recipe's page path.

export const RECIPES: Recipe[] = [
  greenGarlicMintCilantroChickenBurgers,
  tandooriMarinade,
  paneerTikka,
  buffaloChickenDip,
];
