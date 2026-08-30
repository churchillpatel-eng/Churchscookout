import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 9,
  slug: "turkey-burgers",
  dietary: "meat",
  title: "Turkey Burgers",
  description: "A garlic turkey burger with an Indian twist.",
  servings: 1,
  yield: "8",
  category: "burgers",
  emoji: "🍔",
  ingredients: [
    { amount: "2 lb", item: "Ground Turkey" },
    { amount: "1", item: "Red Onion, Diced" },
    { amount: "2", item: "Jalapeños, Diced" },
    { amount: "4 cloves", item: "Garlic, Finely Minced" },
    { amount: "½ thumb", item: "Fresh Ginger, Grated" },
    { amount: "1 handful", item: "Fresh Cilantro, Chopped" },
    { amount: "1", item: "Egg" },
    { amount: "1 tbsp", item: "Plain Full-Fat Yogurt" },
    { amount: "1 tbsp", item: "Neutral Oil, For Cooking" },
    { amount: "", item: "Salt, To Taste" },
    { section: "Spices" },
    { amount: "1 tsp", item: "Black Pepper, Freshly Ground" },
    { amount: "3 tsp", item: "Turmeric" },
    { amount: "2 tbsp", item: "Garam Masala" },
    { amount: "3 tbsp", item: "McCormick Hamburger Seasoning" },
    { amount: "1 tsp", item: "Paprika" },
  ],
  steps: [
    {
      text: "Prep the aromatics: Finely dice the garlic, red onion, jalapeños, and cilantro. Grate the ginger.",
      timer: null,
    },
    {
      text: "Mix the binder: In a small bowl, whisk together the egg and yogurt until smooth.",
      timer: null,
    },
    {
      text: "Combine everything: To the ground turkey, add the garlic, onion, jalapeños, cilantro, and ginger. Pour in the egg mixture, then add the spices and salt. Mix gently by hand just until evenly combined — don't overwork it.",
      timer: null,
    },
    {
      text: "Rest the mixture: Cover and refrigerate for at least 30 minutes (up to overnight) so the flavors meld. This also firms the mix for easier shaping.",
      timer: "30 min minimum",
    },
    {
      text: "Form patties: With lightly oiled hands, form into 4 oz patties about ¾ inch thick. Press a shallow dimple in the center of each so they stay flat while cooking.",
      timer: null,
    },
    {
      text: "Cook the burgers: Heat a griddle or skillet over medium heat with the neutral oil. Cook the patties 9 minutes per side until golden brown and the internal temperature reaches 165°F, flipping only once.",
      timer: "9 min/side",
    },
  ],
};

export default recipe;
