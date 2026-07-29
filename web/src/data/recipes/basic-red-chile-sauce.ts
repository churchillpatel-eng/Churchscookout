import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 6,
  slug: "basic-red-chile-sauce",
  dietary: "vegan",
  title: "Basic Red Chile Sauce (Chile Caribe)",
  description:
    "Traditional New Mexico red chile sauce with crushed chile caribe, featuring a secret ingredient of red wine vinegar to make the flavors come alive.",
  servings: 1,
  yield: "4",
  category: "sauces",
  emoji: "🌶️",
  ingredients: [
    { amount: "½ cup", item: "Crushed Red Chile (Chile Caribe)" },
    { amount: "2 cloves", item: "Garlic" },
    { amount: "2 cups", item: "Water" },
    { amount: "1 tsp", item: "Cumin" },
    { amount: "2 tsp", item: "Oregano (Optional)" },
    { amount: "1 dash", item: "Red Wine Vinegar" },
    { amount: "", item: "Salt, To Taste" },
  ],
  steps: [
    {
      text: "Simmer the chile: Simmer the crushed red chile (chile caribe) and garlic in the water in a covered sauce pan.",
      timer: null,
    },
    {
      text: "Cool and blend: Let the mixture cool, then pour into a blender a little at a time. If the mixture is too hot it will blow the top off the blender! Blend until the mixture is thick and smooth. Add more water if necessary.",
      timer: null,
    },
    {
      text: "Add spices and simmer: Pour the blended mixture back into a sauce pan. Add the cumin, oregano (optional), salt to taste, and red wine vinegar. Simmer for 10 minutes.",
      timer: "10 min",
    },
    {
      text: "Serve or slow cook: Serve immediately as a sauce, or pour into a crockpot with your favorite meat and slow cook for a minimum of three hours for deeper flavor.",
      timer: null,
    },
  ],
  notes:
    "The red wine vinegar is the secret ingredient—it makes the flavor come alive!\n\nThis sauce can be frozen and used later.",
};

export default recipe;
