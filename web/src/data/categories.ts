import type { Dietary } from "@/types";

export interface CategoryMeta {
  label: string;
  emoji: string;
}

// Dietary badges shown on cards and recipe detail.
export const DIETARY_META: Record<Dietary, CategoryMeta> = {
  meat: { label: "Meat", emoji: "🥩" },
  vegetarian: { label: "Vegetarian", emoji: "🥗" },
  vegan: { label: "Vegan", emoji: "🌱" },
};

// The single source of truth for recipe categories. The admin category
// dropdown and every category label/emoji on the site derive from this —
// add a category here and it appears everywhere automatically.
export const CATEGORY_META: Record<string, CategoryMeta> = {
  burgers: { label: "Burgers", emoji: "🍔" },
  chicken: { label: "Chicken", emoji: "🍗" },
  beef: { label: "Beef", emoji: "🥩" },
  seafood: { label: "Seafood", emoji: "🦐" },
  sides: { label: "Sides", emoji: "🌽" },
  sauces: { label: "Sauces & Marinades", emoji: "🫙" },
  marinades: { label: "Marinades", emoji: "🫙" },
  barbeque: { label: "Barbeque", emoji: "🔥" },
  appetizers: { label: "Appetizers", emoji: "🫕" },
  desserts: { label: "Desserts", emoji: "🍦" },
  other: { label: "Other", emoji: "🍽️" },
};

export function categoryLabel(category: string): string {
  return CATEGORY_META[category]?.label ?? category;
}

export function categoryEmoji(category: string): string {
  return CATEGORY_META[category]?.emoji ?? "🍽️";
}
