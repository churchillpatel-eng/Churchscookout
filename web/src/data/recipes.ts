import type { Recipe } from "@/types";

// ── Recipe Data ──────────────────────────────────────────────────────
// The source of truth for all published recipes. To add a permanent
// recipe, append an object here (the admin panel generates one to paste).
//
// Conventions (see CLAUDE.md):
//  - Ingredient `item` names in Title Case ("Fresh Mint Leaves, Finely Chopped").
//  - Prep style goes in the item name after a comma, never in `amount`.
//  - Reuse exact ingredient spelling already used — the shopping list
//    dedupes by name, so one stray variant breaks aggregation.
//  - Amounts use unicode fractions (½, ¼, ⅛), never "1/2".
//  - Long lists use `{ section: "Name" }` divider entries.
//  - `slug` must be unique and URL-safe — it is the recipe's page path.

export const RECIPES: Recipe[] = [
  {
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
  },
  {
    id: 2,
    slug: "tandoori-marinade",
    dietary: "vegetarian",
    image: "/tandoori.jpg",
    title: "Tandoori Marinade",
    yield: "1 serving is roughly ~2 lbs of chicken",
    description:
      "A deeply spiced, yogurt-based marinade built for high heat. Authentic tandoori flavor with bloomed spices, ginger-garlic, and the unmistakable depth of kala namak.",
    servings: 1,
    category: "marinades",
    emoji: "🫙",
    ingredients: [
      { amount: "½ cup", item: "Full-Fat Greek Yogurt" },
      { amount: "2 tbsp", item: "Mustard Oil" },
      { amount: "2 tbsp", item: "Fresh Lemon Juice" },
      { amount: "2.5 tbsp", item: "Ginger Paste" },
      { amount: "2.5 tbsp", item: "Garlic Paste" },
      { amount: "2 tsp", item: "Kashmiri Red Chili Powder" },
      { amount: "1 tsp", item: "Cayenne Pepper" },
      { amount: "1 tsp", item: "Cumin Powder" },
      { amount: "1 tsp", item: "Coriander Powder" },
      { amount: "1 tsp", item: "Garam Masala" },
      { amount: "½ tsp", item: "Smoked Paprika" },
      { amount: "½ tsp", item: "Turmeric" },
      { amount: "½ tsp", item: "Ajwain (Carom Seeds), Crushed" },
      { amount: "½ tsp", item: "Black Salt (Kala Namak)" },
      { amount: "1 tsp", item: "Kosher Salt" },
      { amount: "1 tsp", item: "Chaat Masala" },
    ],
    steps: [
      {
        text: "Burn the oil: Heat the mustard oil in a small pan until it just begins to smoke. Pour it directly over the dry spices (Kashmiri chili, cayenne, cumin, coriander, garam masala, paprika, turmeric, ajwain) in a bowl and stir immediately — this blooms the spices and removes the raw edge from mustard oil.",
        timer: null,
      },
      {
        text: "Build the marinade: Once the spice-oil mixture has cooled slightly, whisk in the Greek yogurt, lemon juice, ginger paste, garlic paste, black salt, and kosher salt until fully combined and smooth.",
        timer: null,
      },
      {
        text: "Marinate: Score your protein deeply (paneer, chicken, lamb chops) and coat thoroughly. Cover and refrigerate. For paneer, 2–4 hours is ideal. For chicken or lamb, go overnight.",
        timer: "2–4 hrs (paneer) / overnight (meat)",
      },
      {
        text: "Cook and finish: Cook at the highest heat you have — a very hot grill or 500°F oven broiler works well. Let it char slightly on the edges. Sprinkle chaat masala over right before serving for that authentic tangy finish.",
        timer: null,
      },
    ],
    notes:
      'Heat level: This is genuinely spicy. Dial back the cayenne to ½ tsp for medium heat, or cut it entirely and lean on Kashmiri chili for color and mild warmth.\n\nMustard oil tip: If you can find it at an Indian grocery, use it — the pungency mellows completely when heated and adds an unmistakably authentic flavor.\n\nKala namak: The sulfurous, eggy depth of black salt is what makes restaurant-style tandoori taste "right." Don\'t skip it if you can find it.\n\nCharcoal smoke trick: For a real tandoor-smoke note, place a small piece of burning charcoal in a foil cup in the marinating bowl, drizzle ghee on it, cover immediately for 5 minutes, then remove before cooking.',
  },
  {
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
  },
  {
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
  },
];
