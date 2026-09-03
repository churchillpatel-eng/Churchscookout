import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 11,
  slug: "shish-tawook",
  dietary: "meat",
  title: "Shish Tawook (Middle Eastern Grilled Chicken)",
  description:
    "Yogurt-marinated grilled chicken with a smoky, tangy Levantine spice blend — great for skewers or straight off the grill.",
  servings: 1,
  yield: "6",
  category: "barbeque",
  emoji: "🍢",
  ingredients: [
    { amount: "2 lb", item: "Boneless Skinless Chicken Thighs" },
    { amount: "1 large", item: "Roma Tomato, Roughly Chopped" },
    { amount: "½", item: "Yellow Onion, Roughly Chopped" },
    { amount: "5 cloves", item: "Garlic" },
    { amount: "1", item: "Jalapeño (To Taste)" },
    { amount: "⅓ bunch", item: "Fresh Parsley, Chopped" },
    { amount: "⅓ cup", item: "Extra Virgin Olive Oil" },
    { amount: "3 tbsp", item: "Yogurt" },
    { amount: "⅓ cup", item: "Pepper Paste or Tomato Paste" },
    { amount: "2 tbsp", item: "Fresh Lemon Juice" },
    { section: "Spices" },
    { amount: "1 tsp", item: "Paprika" },
    { amount: "1 tsp", item: "Aleppo Pepper" },
    { amount: "1 tsp", item: "Garlic Powder" },
    { amount: "1 tsp", item: "Onion Powder" },
    { amount: "1 tsp", item: "Seven Spice (Baharat)" },
    { amount: "1 tsp", item: "Coriander Powder" },
    { amount: "½ tsp", item: "Turmeric" },
    { amount: "1½ tsp", item: "Sumac" },
    { amount: "1 tsp", item: "Salt" },
  ],
  steps: [
    {
      text: "Prep the aromatics: Roughly chop the roma tomato, yellow onion, garlic, jalapeño, and parsley so they blend smoothly.",
      timer: null,
    },
    {
      text: "Blend the marinade: In a blender or food processor, combine the chopped aromatics with the olive oil, yogurt, pepper paste, lemon juice, and all the spices. Blend until smooth and pourable.",
      timer: null,
    },
    {
      text: "Marinate the chicken: Place the chicken thighs in a large bowl or zip-top bag and pour the marinade over, coating evenly. Cover and refrigerate — 4 hours minimum, overnight is best.",
      timer: "4 hrs minimum",
    },
    {
      text: "Skewer (optional): If grilling as kebabs, thread the marinated chicken onto skewers, leaving small gaps between pieces for even cooking.",
      timer: null,
    },
    {
      text: "Grill: Grill over medium-high heat, turning occasionally, until charred on the outside and cooked through to 165°F internal.",
      timer: null,
    },
    {
      text: "Rest and serve: Let the chicken rest before serving with rice, flatbread, and a fresh salad or garlic sauce.",
      timer: null,
    },
  ],
  notes:
    "Adjust the jalapeño up or down for heat.\n\nNo Aleppo pepper? Sub in extra paprika plus a pinch of cayenne.\n\nNo grill? Broil on high, turning once, until charred.",
};

export default recipe;
