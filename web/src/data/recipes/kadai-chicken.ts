import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 8,
  slug: "kadai-chicken",
  dietary: "meat",
  image: "/kadai-chicken.jpg",
  title: "Kadai Chicken",
  description:
    "Bone-in chicken in a rich, aromatic tomato gravy built on a fresh-ground kadai masala and finished with cream. Toasting and grinding your own spices is what puts this a mile past any takeout version.",
  servings: 4,
  category: "chicken",
  emoji: "🍛",
  ingredients: [
    { section: "Marinade" },
    { amount: "2 lbs", item: "Chicken, Bone-In" },
    { amount: "100g", item: "Yogurt" },
    { amount: "2 tbsp", item: "Fresh Ginger-Garlic Paste" },
    { amount: "2 tsp", item: "Kashmiri Red Chili Powder" },
    { amount: "1 tsp", item: "Turmeric" },
    { amount: "1 tsp", item: "Coriander Powder" },
    { amount: "1 tsp", item: "Garam Masala" },
    { amount: "2 tsp", item: "Lemon Juice" },
    { amount: "1 tsp", item: "Mustard Oil" },
    { amount: "", item: "Salt, To Taste" },
    { section: "Kadai Masala" },
    { amount: "2 tbsp", item: "Coriander Seeds" },
    { amount: "1 tsp", item: "Cumin Seeds" },
    { amount: "1 tsp", item: "Fennel Seeds" },
    { amount: "1 tsp", item: "Peppercorns" },
    { amount: "5", item: "Dried Red Chilies" },
    { section: "Gravy" },
    { amount: "1 tbsp", item: "Ghee" },
    { amount: "1", item: "Bay Leaf" },
    { amount: "1", item: "Cinnamon Stick (1 Inch)" },
    { amount: "1", item: "Black Cardamom" },
    { amount: "2", item: "Green Cardamom" },
    { amount: "3", item: "Onions, Chopped" },
    { amount: "1 tbsp", item: "Garlic Paste" },
    { amount: "250g", item: "Tomato Puree" },
    { amount: "", item: "Hot Water, As Needed" },
    { section: "To Finish" },
    { amount: "1 tsp", item: "Ghee" },
    { amount: "50 ml", item: "Cream" },
    { amount: "1 tsp", item: "Kasuri Methi, Crushed" },
    { amount: "2", item: "Green Chilies, Slit" },
    { amount: "", item: "Fresh Coriander, Finely Chopped" },
  ],
  steps: [
    {
      text: "Marinate the chicken: Combine the bone-in chicken with the yogurt, ginger-garlic paste, Kashmiri chili powder, turmeric, coriander powder, garam masala, lemon juice, mustard oil, and salt. Mix well until the chicken is evenly coated. Marinate for at least 1 hour, ideally overnight.",
      timer: "1 hr minimum (overnight ideal)",
    },
    {
      text: "Prepare the kadai masala: Dry roast the coriander seeds, cumin seeds, fennel seeds, peppercorns, and dried red chilies in a pan until fragrant. Transfer to a spice grinder or mortar and pestle and crush to a coarse powder. Set aside.",
      timer: null,
    },
    {
      text: "Build the base: Heat the ghee in a large pot or kadai. Add the bay leaf, cinnamon stick, black cardamom, and green cardamom. Once fragrant, add the chopped onions and garlic paste. Cook until the onions are golden brown.",
      timer: null,
    },
    {
      text: "Toast spices and tomatoes: Add the ground kadai masala, then the tomato puree. Cook until the raw smell disappears.",
      timer: null,
    },
    {
      text: "Cook the chicken: Add the marinated chicken and hot water as needed. Cover and cook until the chicken is fully cooked and the gravy thickens — you'll see the oil begin to separate from the gravy.",
      timer: null,
    },
    {
      text: "Finish the dish: Drizzle with the finishing ghee and stir in the cream. Sprinkle over the kasuri methi and slit green chilies, and top with fresh coriander. Serve hot with naan and rice.",
      timer: null,
    },
  ],
  notes:
    "The overnight marination makes a significant difference in the depth of flavor.\n\nAdjust the green chilies and Kashmiri chili powder to your heat preference.\n\nThe oil separating from the gravy at the end is the mark of a well-executed kadai — don't rush it.",
};

export default recipe;
