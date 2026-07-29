import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 5,
  slug: "egg-burji",
  dietary: "vegetarian",
  title: "Egg Burji",
  description:
    "The 10-minute masala scramble that turns eggs into a full meal. Tempered cumin and mustard seeds, curry leaves, and a punchy spice base — this is how eggs are meant to eat.",
  servings: 2,
  category: "other",
  emoji: "🍳",
  ingredients: [
    { amount: "2 tbsp", item: "Neutral Oil" },
    { amount: "1 tsp", item: "Cumin Seeds" },
    { amount: "1 tsp", item: "Mustard Seeds" },
    { amount: "1 sprig", item: "Curry Leaves" },
    { amount: "2 cloves", item: "Garlic, Minced" },
    { amount: "1", item: "Onion, Finely Chopped" },
    { amount: "½", item: "Tomato, Chopped" },
    { amount: "2", item: "Thai Chilies, Slit" },
    { amount: "4", item: "Eggs, Beaten" },
    { amount: "Handful", item: "Fresh Cilantro, Chopped" },
    { amount: "", item: "Salt, To Taste" },
    { section: "Spices" },
    { amount: "1 tbsp", item: "Garam Masala" },
    { amount: "1 tsp", item: "Red Chili Powder" },
    { amount: "½ tsp", item: "Black Pepper" },
    { amount: "1 tsp", item: "Coriander-Cumin Powder" },
  ],
  steps: [
    {
      text: "Temper the spices: Heat the neutral oil in a pan over medium heat. Add the cumin seeds, mustard seeds, curry leaves, and minced garlic. Let them sizzle and pop until fragrant.",
      timer: null,
    },
    {
      text: "Soften the onions: Add the chopped onion and cook until translucent, about 3–4 minutes.",
      timer: "3–4 min",
    },
    {
      text: "Build the masala: Add the tomato, Thai chilies, and all the spices — garam masala, red chili powder, black pepper, and coriander-cumin powder. Season with salt and let it simmer for 3–4 minutes until the tomato breaks down.",
      timer: "3–4 min",
    },
    {
      text: "Scramble the eggs: Pour in the beaten eggs and mix continuously, folding them through the masala until just cooked and no longer runny.",
      timer: null,
    },
    {
      text: "Finish and serve: Fold through the fresh cilantro and serve hot with roti, toast, or pav.",
      timer: null,
    },
  ],
  notes:
    "Keep the heat medium while tempering — burnt cumin or mustard seeds turn the whole dish bitter.\n\nDon't over-scramble at the end. Pull the eggs off while they're still soft and glossy; they keep cooking off the heat.\n\nScale the Thai chilies up or down — two brings real heat.\n\nGreat make-ahead breakfast: the masala base holds in the fridge, so you can scramble in fresh eggs in under two minutes.",
};

export default recipe;
