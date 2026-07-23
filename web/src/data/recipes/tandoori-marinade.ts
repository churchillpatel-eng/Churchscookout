import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 2,
  slug: "tandoori-marinade",
  dietary: "vegetarian",
  image: "/tandoori.jpg",
  title: "Tandoori Marinade",
  yield: "1 serving is roughly ~2 lbs of chicken",
  description:
    "A deeply spiced, yogurt-based marinade built for high heat. Authentic tandoori flavor with bloomed spices, ginger-garlic, and the unmistakable depth of kala namak.",
  servings: 1,
  category: "marinades",
  emoji: "🫙",
  ingredients: [
    { amount: "½ cup", item: "Full-Fat Greek Yogurt" },
    { amount: "2 tbsp", item: "Mustard Oil" },
    { amount: "2 tbsp", item: "Fresh Lemon Juice" },
    { amount: "2.5 tbsp", item: "Ginger Paste" },
    { amount: "2.5 tbsp", item: "Garlic Paste" },
    { amount: "2 tsp", item: "Kashmiri Red Chili Powder" },
    { amount: "1 tsp", item: "Cayenne Pepper" },
    { amount: "1 tsp", item: "Cumin Powder" },
    { amount: "1 tsp", item: "Coriander Powder" },
    { amount: "1 tsp", item: "Garam Masala" },
    { amount: "½ tsp", item: "Smoked Paprika" },
    { amount: "½ tsp", item: "Turmeric" },
    { amount: "½ tsp", item: "Ajwain (Carom Seeds), Crushed" },
    { amount: "½ tsp", item: "Black Salt (Kala Namak)" },
    { amount: "1 tsp", item: "Kosher Salt" },
    { amount: "1 tsp", item: "Chaat Masala" },
  ],
  steps: [
    {
      text: "Burn the oil: Heat the mustard oil in a small pan until it just begins to smoke. Pour it directly over the dry spices (Kashmiri chili, cayenne, cumin, coriander, garam masala, paprika, turmeric, ajwain) in a bowl and stir immediately — this blooms the spices and removes the raw edge from mustard oil.",
      timer: null,
    },
    {
      text: "Build the marinade: Once the spice-oil mixture has cooled slightly, whisk in the Greek yogurt, lemon juice, ginger paste, garlic paste, black salt, and kosher salt until fully combined and smooth.",
      timer: null,
    },
    {
      text: "Marinate: Score your protein deeply (paneer, chicken, lamb chops) and coat thoroughly. Cover and refrigerate. For paneer, 2–4 hours is ideal. For chicken or lamb, go overnight.",
      timer: "2–4 hrs (paneer) / overnight (meat)",
    },
    {
      text: "Cook and finish: Cook at the highest heat you have — a very hot grill or 500°F oven broiler works well. Let it char slightly on the edges. Sprinkle chaat masala over right before serving for that authentic tangy finish.",
      timer: null,
    },
  ],
  notes:
    'Heat level: This is genuinely spicy. Dial back the cayenne to ½ tsp for medium heat, or cut it entirely and lean on Kashmiri chili for color and mild warmth.\n\nMustard oil tip: If you can find it at an Indian grocery, use it — the pungency mellows completely when heated and adds an unmistakably authentic flavor.\n\nKala namak: The sulfurous, eggy depth of black salt is what makes restaurant-style tandoori taste "right." Don\'t skip it if you can find it.\n\nCharcoal smoke trick: For a real tandoor-smoke note, place a small piece of burning charcoal in a foil cup in the marinating bowl, drizzle ghee on it, cover immediately for 5 minutes, then remove before cooking.',
};

export default recipe;
