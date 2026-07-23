import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 1,
  slug: "green-garlic-mint-cilantro-chicken-burgers",
  dietary: "meat",
  title: "Green Garlic, Mint & Cilantro Chicken Burgers",
  description:
    "A bright, herb-forward chicken burger built around mint, cilantro, and green garlic.",
  servings: 1,
  category: "burgers",
  emoji: "🍔",
  ingredients: [
    { amount: "1 lb", item: "Chicken thighs" },
    { amount: "1 stalk", item: "Green Garlic, Finely Minced" },
    { amount: "2.5 tbsp", item: "Shallot, Finely Minced" },
    { amount: "2 tbsp", item: "Fresh Mint Leaves, Finely Chopped" },
    { amount: "2 tbsp", item: "Fresh Cilantro, Finely Chopped" },
    { amount: "½ thumb", item: "Fresh Ginger, Grated" },
    { amount: "0.3", item: "Lime, Zested and Juiced" },
    { amount: "1 tbsp", item: "Plain Full-Fat Yogurt" },
    { amount: "½ large", item: "Egg" },
    { amount: "2.5 tbsp", item: "Panko Breadcrumbs" },
    { amount: "½ tsp", item: "Kosher Salt" },
    { amount: "¼ tsp", item: "Black Pepper, Freshly Ground" },
    { amount: "¼ tsp", item: "Cumin Powder" },
    { amount: "¼ tsp", item: "Coriander Powder" },
    { amount: "⅛ tsp", item: "Crushed Red Pepper Flakes" },
    { amount: "1 tsp", item: "Paprika" },
    { amount: "½ tbsp", item: "Neutral Oil (Grapeseed or Avocado)" },
  ],
  steps: [
    {
      text: "Chill the chicken and grinder: Cut chicken thighs into 1–1½ inch strips. Spread on a sheet pan and freeze for 20 minutes. Also place your KitchenAid grinder attachment parts (auger, blade, die) in the freezer to chill.",
      timer: "20 min",
    },
    {
      text: "Grind the chicken: Assemble the chilled grinder with the coarse die. Set mixer to speed 4 and feed chicken strips through steadily, using the pusher tool. Grind directly into a large bowl set in an ice bath.",
      timer: null,
    },
    {
      text: "Prep the aromatics: Finely mince the green garlic (white + light green parts only), shallots, mint, and cilantro. Grate the ginger. Zest and juice both limes.",
      timer: null,
    },
    {
      text: "Mix the binder: In a small bowl, whisk together the yogurt and eggs until smooth.",
      timer: null,
    },
    {
      text: "Combine everything: To the ground chicken, add the green garlic, shallots, mint, cilantro, ginger, and lime zest/juice. Pour in the yogurt-egg mixture, then add the panko, salt, pepper, cumin, coriander, and red pepper flakes. Mix gently by hand just until evenly combined — don't overwork it.",
      timer: null,
    },
    {
      text: "Rest the mixture: Cover and refrigerate for at least 30 minutes (up to overnight) so the panko hydrates and flavors meld. This also firms the mix for easier shaping.",
      timer: "30 min (min)",
    },
    {
      text: "Form patties: With lightly oiled hands, form into 4 oz patties about ¾ inch thick. Press a shallow dimple in the center of each so they stay flat while cooking.",
      timer: null,
    },
    {
      text: "Cook the burgers: Heat a griddle or skillet over medium heat with the neutral oil. Cook patties 9 minutes per side until golden brown and the internal temperature reaches 165°F, flipping only once.",
      timer: "9 min/side",
    },
  ],
  notes:
    "Green garlic is milder and grassier than mature garlic — it layers in nicely without overpowering. Yogurt does double duty: it tenderizes the chicken and keeps patties moist as they cook. Use the coarse die for the KitchenAid grinder; the fine die compacts chicken into paste. For some char, finish patties under a hot broiler for 60–90 seconds after griddling.",
};

export default recipe;
