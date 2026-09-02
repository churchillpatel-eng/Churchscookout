import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 10,
  slug: "egg-curry",
  dietary: "vegetarian",
  title: "Egg Curry",
  description:
    "A fragrant, creamy egg curry built on toasted fennel seeds, bloomed spices, and coconut milk.",
  servings: 1,
  yield: "1",
  category: "mains",
  emoji: "🍛",
  ingredients: [
    { amount: "3 large", item: "Eggs, Hard-Boiled and Halved" },
    { amount: "2 tbsp", item: "Neutral Oil" },
    { amount: "½ tsp", item: "Fennel Seeds" },
    { amount: "1", item: "Onion, Sliced" },
    { amount: "10", item: "Curry Leaves" },
    { amount: "2", item: "Green Chilies, Slit" },
    { amount: "1 tbsp", item: "Fresh Ginger-Garlic Paste" },
    { amount: "1", item: "Tomato, Pureed or Finely Chopped" },
    { amount: "¼ cup", item: "Coconut Milk" },
    { amount: "½ cup", item: "Water" },
    { amount: "1 tsp", item: "Salt" },
    { section: "Spices" },
    { amount: "1 tsp", item: "Red Chili Powder" },
    { amount: "1 tsp", item: "Turmeric" },
    { amount: "½ tsp", item: "Black Pepper" },
    { amount: "1 tsp", item: "Garam Masala" },
  ],
  steps: [
    {
      text: "Toast the fennel: Heat the neutral oil in a pan over medium heat. Add the fennel seeds and let them pop for about a minute, until fragrant.",
      timer: "1 min",
    },
    {
      text: "Fry the aromatics: Add the sliced onion, curry leaves, and slit green chilies. Fry until the onions turn golden brown, stirring occasionally.",
      timer: "5 min",
    },
    {
      text: "Cook the ginger-garlic: Add the ginger-garlic paste and cook, stirring constantly, until the raw smell disappears — about 1–2 minutes.",
      timer: null,
    },
    {
      text: "Bloom the spices: Add the red chili powder, turmeric, black pepper, and garam masala all at once. Fry for about a minute to bloom the spices.",
      timer: "1 min",
    },
    {
      text: "Add the tomato: Add the pureed tomato and cook on low, stirring occasionally, until the mixture darkens slightly.",
      timer: "5 min",
    },
    {
      text: "Simmer: Pour in the water and add the salt. Stir well, cover, and simmer until the oil separates from the curry.",
      timer: "7 min",
    },
    {
      text: "Add the eggs: Once the oil has separated, gently add the hard-boiled eggs to the curry.",
      timer: null,
    },
    {
      text: "Finish with coconut milk: Pour in the coconut milk, stir gently to combine, and turn off the heat. Serve hot.",
      timer: "30 sec",
    },
  ],
  notes:
    "Hard-boil the eggs before you start the curry so they're ready to fold in.\n\nThe fennel seeds should pop vigorously — don't skip this step; it builds the foundation of flavor.\n\nAdjust the number of green chilies to your heat preference.",
};

export default recipe;
