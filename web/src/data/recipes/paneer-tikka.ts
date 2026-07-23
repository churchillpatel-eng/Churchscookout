import type { Recipe } from "@/types";

const recipe: Recipe = {
  id: 3,
  slug: "paneer-tikka",
  dietary: "vegetarian",
  title: "Paneer Tikka",
  description:
    "Deeply marinated paneer with peppers and onion, double-basted in butter and charred in a tandoor. A two-marinade technique and smoked mustard oil take this far beyond the standard version.",
  servings: 4,
  category: "barbeque",
  emoji: "🧀",
  ingredients: [
    { amount: "500g", item: "Paneer, Cut Into Thick 4cm Cubes" },
    { amount: "1 large", item: "Green Bell Pepper, Cut Into Chunks" },
    { amount: "1 large", item: "Red Bell Pepper, Cut Into Chunks" },
    { amount: "1 large", item: "Red Onion, Cut Into Chunks" },
    { amount: "250g", item: "Hung Curd (Strained Overnight in Muslin)" },
    { amount: "3 tbsp", item: "Mustard Oil" },
    { amount: "2 tbsp", item: "Fresh Lemon Juice" },
    { amount: "2 tbsp", item: "Fresh Ginger-Garlic Paste" },
    { amount: "2 tsp", item: "Kashmiri Red Chili Powder" },
    { amount: "1 tsp", item: "Smoked Paprika" },
    { amount: "1½ tsp", item: "Cumin Powder" },
    { amount: "1½ tsp", item: "Coriander Powder" },
    { amount: "1½ tsp", item: "Garam Masala" },
    { amount: "2 tsp", item: "Tandoori Masala Powder" },
    { amount: "½ tsp", item: "Ajwain (Carom Seeds), Crushed" },
    { amount: "¼ tsp", item: "Black Cardamom Powder" },
    { amount: "½ tsp", item: "Turmeric" },
    { amount: "2 tbsp", item: "Kasuri Methi, Crushed" },
    { amount: "2", item: "Green Chili, Finely Minced" },
    { amount: "1½ tsp", item: "Kosher Salt" },
    { amount: "½ tsp", item: "Black Salt (Kala Namak)" },
    { amount: "3 tbsp", item: "Unsalted Butter" },
    { amount: "1½ tsp", item: "Chaat Masala" },
    { amount: "3 tbsp", item: "Fresh Coriander, Finely Chopped" },
    { amount: "1 tsp", item: "Amchur (Dry Mango Powder)" },
  ],
  steps: [
    {
      text: "Smoke the mustard oil: Heat mustard oil in a small pan until it reaches smoking point, then take off the heat and let it cool completely. This kills the raw bite and unlocks deep, nutty flavour — the single biggest upgrade you can make.",
      timer: null,
    },
    {
      text: "Score and salt the paneer: Make shallow cross-hatch cuts on each face of the paneer cubes. Toss with salt and black salt and let sit 10 minutes. Pat completely dry — this opens the paneer up to absorb maximum marinade.",
      timer: "10 min",
    },
    {
      text: "Build the marinade: In a large bowl, combine the hung curd, cooled smoked mustard oil, lemon juice, ginger-garlic paste, Kashmiri chili, paprika, cumin, coriander, garam masala, tandoori masala, ajwain, black cardamom, turmeric, kasuri methi, green chili, and amchur. Whisk until completely smooth and deeply red.",
      timer: null,
    },
    {
      text: "First marinade: Add the paneer, peppers, and onion to the marinade. Coat thoroughly, pressing into the score marks. Rest for 20 minutes at room temperature.",
      timer: "20 min",
    },
    {
      text: "Second marinade & overnight rest: Apply a second generous coat of marinade over everything, ensuring every surface is covered. Cover and refrigerate for a minimum of 4 hours — overnight is ideal. The longer it sits, the deeper the flavour penetrates.",
      timer: "4 hrs minimum (overnight ideal)",
    },
    {
      text: "Skewer and rest: Thread paneer, peppers, and onion alternately onto metal skewers, leaving small gaps between pieces for heat to hit all sides. Rest at room temperature for 30 minutes before cooking.",
      timer: "30 min",
    },
    {
      text: "First cook in the tandoor: Lower skewers into the tandoor at maximum heat (250–300°C / 480–570°F). Cook for 6–7 minutes, rotating every 2 minutes, until the marinade sets and the edges begin to char.",
      timer: "6–7 min",
    },
    {
      text: "Butter baste and final char: Pull skewers out, baste generously with butter, then return to the tandoor for 3–4 minutes for a fierce final char. The butter will sizzle and blacken at the edges — that's the flavour you want.",
      timer: "3–4 min",
    },
    {
      text: "Finish and serve: Slide off the skewers onto a platter. Immediately dust with chaat masala, scatter fresh coriander, and squeeze fresh lemon over the top. Serve within 2 minutes — paneer tikka waits for no one.",
      timer: null,
    },
  ],
  notes:
    "Scored paneer — the cross-hatch cuts let marinade soak deep into each cube, not just the surface.\n\nSmoked mustard oil — heating it to smoking point removes the harsh raw edge and adds a complex, nutty depth regular oil can't touch.\n\nBlack cardamom — adds a camphor-like smokiness that amplifies the tandoor char.\n\nBlack salt (kala namak) — its sulphurous, tangy punch adds a totally different flavour dimension to regular salt.\n\nAmchur — raw mango powder gives a fruity tartness that cuts through the richness.\n\nDouble butter baste — melt more butter at the finish if you want it extra indulgent.\n\nServe with mint-coriander chutney, pickled onions, and green chili on the side.",
};

export default recipe;
