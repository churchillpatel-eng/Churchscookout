// ── Domain types ─────────────────────────────────────────────────────
// The shape of a recipe. `section` entries act as dividers inside the
// ingredient list (they carry no amount/item).

export type Dietary = "meat" | "vegetarian" | "vegan";

export interface Ingredient {
  amount?: string;
  item?: string;
  /** When set, this entry is a section header, not an ingredient. */
  section?: string;
}

export interface Step {
  text: string;
  /** Human-readable timer label, e.g. "20 min". */
  timer: string | null;
}

export interface Recipe {
  id: number;
  /** URL-safe identifier used for the recipe's own page. */
  slug: string;
  dietary: Dietary;
  title: string;
  description: string;
  servings: number;
  category: string;
  emoji: string;
  image?: string;
  yield?: string;
  ingredients: Ingredient[];
  steps: Step[];
  notes?: string;
}
