import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 7,
  slug: "chile-molido",
  dietary: "vegan",
  title: "Chile Molido",
  description:
    "Traditional New Mexico red chile sauce made with ground chile (chile molido), featuring a savory roux base and the secret ingredient of red wine vinegar.",
  servings: 4,
  category: "sauces",
  emoji: "🌶️",
  ingredients: [
    { amount: "6 tbsp", item: "Ground Red Chile (Chile Molido)" },
    { amount: "2 cloves", item: "Garlic" },
    { amount: "⅓ cup", item: "Onions, Chopped" },
    { amount: "2 cups", item: "Chicken Stock or Water" },
    { amount: "2 tbsp", item: "Cooking Oil" },
    { amount: "1 tsp", item: "Cumin" },
    { amount: "2 tsp", item: "Oregano (Optional)" },
    { amount: "2 tbsp", item: "Flour" },
    { amount: "1 dash", item: "Red Wine Vinegar" },
    { amount: "", item: "Salt, To Taste" },
  ],
  steps: [
    {
      text: "Sauté aromatics: Heat the cooking oil in a skillet over medium heat. Sauté the chopped onions and garlic until softened.",
      timer: null,
    },
    {
      text: "Make the roux: Add the flour and brown by pressing the flour flat in the skillet with a spoon or spatula, stirring occasionally.",
      timer: null,
    },
    {
      text: "Add ingredients: Add the chicken stock or water, ground red chile (chile molido), cumin, oregano (optional), salt to taste, and red wine vinegar. Stir well to combine.",
      timer: null,
    },
    {
      text: "Simmer: Stir and simmer until the sauce reaches your desired consistency and the flavors meld together, about 10–15 minutes.",
      timer: "10–15 min",
    },
  ],
  notes:
    "The red wine vinegar is the secret ingredient—it makes the flavor come alive!\n\nThis sauce can be frozen and used later.\n\nRecipe from El Potrero Trading Post, Chimayo, NM.",
};

export default recipe;
