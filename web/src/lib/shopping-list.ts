import type { Ingredient } from "@/types";
import { formatNumber, parseAmount } from "@/lib/scaling";

export interface ShoppingItem {
  item: string;
  amount: string;
}

export interface ShoppingAisle {
  label: string;
  emoji: string;
  items: ShoppingItem[];
}

// Aisle groups — checked in order, first keyword match wins.
const AISLES: { label: string; emoji: string; keywords: string[] }[] = [
  {
    label: "Produce",
    emoji: "🥬",
    keywords: ["green onion", "green garlic", "shallot", "onion", "garlic", "ginger", "lime", "lemon", "cilantro", "mint", "celery", "cucumber", "bell pepper", "jalapeño", "pepper", "tomato", "lettuce", "herb", "scallion"],
  },
  {
    label: "Meat & Seafood",
    emoji: "🥩",
    keywords: ["chicken", "beef", "lamb", "pork", "shrimp", "fish", "seafood", "paneer"],
  },
  {
    label: "Dairy & Eggs",
    emoji: "🧀",
    keywords: ["cream cheese", "cottage cheese", "cheddar", "cheese", "yogurt", "curd", "egg", "butter", "sour cream", "milk"],
  },
  {
    label: "Condiments & Sauces",
    emoji: "🫙",
    keywords: ["hot sauce", "frank", "mayo", "mustard oil", "soy sauce", "ketchup", "vinegar", "oil"],
  },
  {
    label: "Spices & Seasonings",
    emoji: "🌶️",
    keywords: ["salt", "pepper", "paprika", "cumin", "coriander", "turmeric", "garam masala", "chili", "garlic powder", "onion powder", "ajwain", "chaat masala", "kala namak", "amchur", "cardamom", "masala", "methi", "red pepper", "cayenne", "seasoning"],
  },
  {
    label: "Pantry",
    emoji: "🛒",
    keywords: ["panko", "breadcrumb", "flour", "sugar", "broth", "stock"],
  },
];

/**
 * Deduplicate ingredients by name (case-insensitive) and sum amounts.
 * Quantities are summed per-unit ("2 tbsp" + "1 tbsp" -> "3 tbsp");
 * mismatched units are shown side by side ("1 lb + 16 oz"); amounts with
 * no parseable number ("to taste") are carried through as-is.
 */
export function aggregateIngredients(ingredients: Ingredient[]): ShoppingItem[] {
  const seen = new Map<string, { item: string; units: Map<string, number>; extras: string[] }>();

  for (const ing of ingredients) {
    if (ing.section || !ing.item) continue;
    const key = ing.item.toLowerCase().trim();
    if (!seen.has(key)) seen.set(key, { item: ing.item, units: new Map(), extras: [] });
    const rec = seen.get(key)!;

    const { qty, unit } = parseAmount(ing.amount);
    if (qty === null) {
      const extra = String(ing.amount ?? "").trim();
      if (extra && !rec.extras.includes(extra)) rec.extras.push(extra);
    } else {
      const u = unit.toLowerCase();
      rec.units.set(u, (rec.units.get(u) ?? 0) + qty);
    }
  }

  return Array.from(seen.values()).map((rec) => {
    const parts: string[] = [];
    rec.units.forEach((qty, unit) => parts.push(formatNumber(qty) + (unit ? ` ${unit}` : "")));
    parts.push(...rec.extras);
    return { item: rec.item, amount: parts.join(" + ") };
  });
}

/** Group aggregated items into supermarket aisles for the shopping list. */
export function groupByAisle(items: ShoppingItem[]): ShoppingAisle[] {
  const groups: ShoppingAisle[] = AISLES.map((a) => ({ label: a.label, emoji: a.emoji, items: [] }));
  const other: ShoppingAisle = { label: "Other", emoji: "🍽️", items: [] };

  for (const item of items) {
    const name = item.item.toLowerCase();
    const group = groups.find((_, i) => AISLES[i].keywords.some((kw) => name.includes(kw)));
    (group ?? other).items.push(item);
  }

  return [...groups, other].filter((g) => g.items.length > 0);
}
