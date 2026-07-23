import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 4,
  slug: "buffalo-chicken-dip",
  dietary: "meat",
  title: "Buffalo Chicken Dip",
  description:
    "Bold, tangy buffalo flavor you love — with cream cheese and mayo still in the mix, just made lighter. ~120 calories per serving.",
  servings: 8,
  category: "appetizers",
  emoji: "🫕",
  ingredients: [
    { amount: "16 oz", item: "Chicken thighs" },
    { amount: "8 oz", item: "Reduced-fat cream cheese, softened" },
    { amount: "½ cup", item: "Cottage cheese" },
    { amount: "3 tbsp", item: "Light mayo" },
    { amount: "1 cup", item: "Frank's Red Hot sauce (or similar)" },
    { amount: "½ cup", item: "Reduced-fat shredded cheddar" },
    { amount: "½ tsp", item: "Garlic Powder" },
    { amount: "¼ tsp", item: "Onion Powder" },
    { amount: "2", item: "Green onions, sliced (for topping)" },
    { section: "Chicken Seasoning" },
    { amount: "", item: "Salt" },
    { amount: "", item: "Paprika" },
    { amount: "", item: "Garlic Powder" },
    { amount: "", item: "Onion Powder" },
    { amount: "", item: "Black pepper" },
  ],
  steps: [
    {
      text: "Grind and cook the chicken: Grind the chicken thighs with a meat grinder. Season generously with salt, paprika, garlic powder, onion powder, and black pepper. Brown the seasoned ground chicken in a skillet over medium-high heat, breaking it up as it cooks, until fully cooked through. Drain any excess liquid and let cool slightly.",
      timer: null,
    },
    {
      text: "Preheat oven: Preheat your oven to 375°F. Lightly spray an 8x8 baking dish or similar oven-safe dish with nonstick spray.",
      timer: null,
    },
    {
      text: "Mix the base: In a large bowl, beat the cream cheese until smooth. Stir in cottage cheese and light mayo until fully combined. The cottage cheese replaces a big chunk of the cream cheese and sour cream without sacrificing richness.",
      timer: null,
    },
    {
      text: "Add flavor: Stir in hot sauce, garlic powder, and onion powder. Taste and adjust heat to your liking.",
      timer: null,
    },
    {
      text: "Fold in chicken: Fold in the cooked chicken until evenly coated. Spread mixture into the prepared baking dish.",
      timer: null,
    },
    {
      text: "Top and bake: Sprinkle shredded cheddar evenly over the top. Bake for 20–25 minutes until bubbly and the cheese is lightly golden.",
      timer: "20–25 min",
    },
    {
      text: "Garnish and serve: Top with sliced green onions and serve hot with celery sticks, cucumber rounds, bell pepper strips, or light tortilla chips.",
      timer: null,
    },
  ],
  notes:
    "Saves ~100 cal/serving vs. traditional by using reduced-fat cream cheese, light mayo in a smaller amount, and cottage cheese instead of sour cream.\n\nCottage cheese keeps the dip thick and creamy while adding extra protein.\n\nBest dippers for staying calorie-friendly: Celery, cucumber, bell pepper. Light tortilla chips add ~60–70 cal per small handful.\n\nMake it ahead: Assemble the night before, refrigerate, and bake when ready.",
};

export default recipe;
