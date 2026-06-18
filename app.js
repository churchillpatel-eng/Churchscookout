// ── Admin Password ──────────────────────────────────────────────────
// Change this to your own password before deploying
const ADMIN_PASSWORD = "Cookout2026!";

// ── Category Config ─────────────────────────────────────────────────
const DIETARY_META = {
  meat:        { label: "Meat",        emoji: "🥩" },
  vegetarian:  { label: "Vegetarian",  emoji: "🥗" },
  vegan:       { label: "Vegan",       emoji: "🌱" },
};

const CATEGORY_META = {
  burgers:  { label: "Burgers",            emoji: "🍔" },
  chicken:  { label: "Chicken",            emoji: "🍗" },
  beef:     { label: "Beef",               emoji: "🥩" },
  seafood:  { label: "Seafood",            emoji: "🦐" },
  sides:    { label: "Sides",              emoji: "🌽" },
  sauces:    { label: "Sauces & Marinades", emoji: "🫙" },
  marinades:  { label: "Marinades",          emoji: "🫙" },
  barbeque:   { label: "Barbeque",           emoji: "🔥" },
  desserts: { label: "Desserts",           emoji: "🍦" },
  other:    { label: "Other",              emoji: "🍽️" },
};

// ── Recipe Data ──────────────────────────────────────────────────────
// To add a permanent recipe: copy the exported object from the admin
// panel and paste it as a new entry in this array.
const RECIPES = [
  {
    id: 1,
    dietary: "meat",
    title: "Green Garlic, Mint & Cilantro Chicken Burgers",
    description: "A bright, herb-forward chicken burger built around mint, cilantro, and green garlic.",
    servings: 1,
    category: "burgers",
    emoji: "🍔",
    ingredients: [
      { amount: "1 lb",      item: "boneless skinless chicken thighs" },
      { amount: "1 stalk",   item: "green garlic (white and light green parts), finely minced" },
      { amount: "2.5 tbsp",  item: "shallot, finely minced" },
      { amount: "2 tbsp",    item: "fresh mint leaves, finely chopped" },
      { amount: "2 tbsp",    item: "fresh cilantro, finely chopped" },
      { amount: "½ thumb",   item: "fresh ginger, grated" },
      { amount: "0.3",       item: "lime, zested and juiced" },
      { amount: "1 tbsp",    item: "plain full-fat yogurt" },
      { amount: "½ large",   item: "egg" },
      { amount: "2.5 tbsp",  item: "panko breadcrumbs" },
      { amount: "½ tsp",     item: "kosher salt" },
      { amount: "¼ tsp",     item: "black pepper, freshly ground" },
      { amount: "¼ tsp",     item: "ground cumin" },
      { amount: "¼ tsp",     item: "ground coriander" },
      { amount: "⅛ tsp",     item: "crushed red pepper flakes" },
      { amount: "½ tbsp",    item: "neutral oil (grapeseed or avocado), for cooking" },
    ],
    steps: [
      {
        text: "Chill the chicken and grinder: Cut chicken thighs into 1–1½ inch strips. Spread on a sheet pan and freeze for 20 minutes. Also place your KitchenAid grinder attachment parts (auger, blade, die) in the freezer to chill.",
        timer: "20 min"
      },
      {
        text: "Grind the chicken: Assemble the chilled grinder with the coarse die. Set mixer to speed 4 and feed chicken strips through steadily, using the pusher tool. Grind directly into a large bowl set in an ice bath.",
        timer: null
      },
      {
        text: "Prep the aromatics: Finely mince the green garlic (white + light green parts only), shallots, mint, and cilantro. Grate the ginger. Zest and juice both limes.",
        timer: null
      },
      {
        text: "Mix the binder: In a small bowl, whisk together the yogurt and eggs until smooth.",
        timer: null
      },
      {
        text: "Combine everything: To the ground chicken, add the green garlic, shallots, mint, cilantro, ginger, and lime zest/juice. Pour in the yogurt-egg mixture, then add the panko, salt, pepper, cumin, coriander, and red pepper flakes. Mix gently by hand just until evenly combined — don't overwork it.",
        timer: null
      },
      {
        text: "Rest the mixture: Cover and refrigerate for at least 30 minutes (up to overnight) so the panko hydrates and flavors meld. This also firms the mix for easier shaping.",
        timer: "30 min (min)"
      },
      {
        text: "Form patties: With lightly oiled hands, form into 4 oz patties about ¾ inch thick. Press a shallow dimple in the center of each so they stay flat while cooking.",
        timer: null
      },
      {
        text: "Cook the burgers: Heat a griddle or skillet over medium heat with the neutral oil. Cook patties 9 minutes per side until golden brown and the internal temperature reaches 165°F, flipping only once.",
        timer: "9 min/side"
      },
    ],
    notes: "Green garlic is milder and grassier than mature garlic — it layers in nicely without overpowering. Yogurt does double duty: it tenderizes the chicken and keeps patties moist as they cook. Use the coarse die for the KitchenAid grinder; the fine die compacts chicken into paste. For some char, finish patties under a hot broiler for 60–90 seconds after griddling."
  },
  {
    id: 2,
    dietary: "vegetarian",
    image: "tandoori.jpg",
    title: "Tandoori Marinade",
    yield: "1 serving is roughly ~2 lbs of chicken",
    description: "A deeply spiced, yogurt-based marinade built for high heat. Authentic tandoori flavor with bloomed spices, ginger-garlic, and the unmistakable depth of kala namak.",
    servings: 1,
    category: "marinades",
    emoji: "🫙",
    ingredients: [
      { amount: "½ cup",    item: "full-fat Greek yogurt" },
      { amount: "2 tbsp",   item: "mustard oil (or neutral oil)" },
      { amount: "2 tbsp",   item: "fresh lemon juice" },
      { amount: "2.5 tbsp", item: "ginger paste" },
      { amount: "2.5 tbsp", item: "garlic paste" },
      { amount: "2 tsp",    item: "Kashmiri red chili powder" },
      { amount: "1 tsp",    item: "cayenne pepper" },
      { amount: "1 tsp",    item: "cumin powder" },
      { amount: "1 tsp",    item: "coriander powder" },
      { amount: "1 tsp",    item: "garam masala" },
      { amount: "½ tsp",    item: "smoked paprika" },
      { amount: "½ tsp",    item: "turmeric" },
      { amount: "½ tsp",    item: "ajwain (carom seeds), lightly crushed" },
      { amount: "½ tsp",    item: "black salt (kala namak)" },
      { amount: "1 tsp",    item: "kosher salt" },
      { amount: "1 tsp",    item: "chaat masala (for finishing)" },
    ],
    steps: [
      {
        text: "Burn the oil: Heat the mustard oil in a small pan until it just begins to smoke. Pour it directly over the dry spices (Kashmiri chili, cayenne, cumin, coriander, garam masala, paprika, turmeric, ajwain) in a bowl and stir immediately — this blooms the spices and removes the raw edge from mustard oil.",
        timer: null
      },
      {
        text: "Build the marinade: Once the spice-oil mixture has cooled slightly, whisk in the Greek yogurt, lemon juice, ginger paste, garlic paste, black salt, and kosher salt until fully combined and smooth.",
        timer: null
      },
      {
        text: "Marinate: Score your protein deeply (paneer, chicken, lamb chops) and coat thoroughly. Cover and refrigerate. For paneer, 2–4 hours is ideal. For chicken or lamb, go overnight.",
        timer: "2–4 hrs (paneer) / overnight (meat)"
      },
      {
        text: "Cook and finish: Cook at the highest heat you have — a very hot grill or 500°F oven broiler works well. Let it char slightly on the edges. Sprinkle chaat masala over right before serving for that authentic tangy finish.",
        timer: null
      },
    ],
    notes: "Heat level: This is genuinely spicy. Dial back the cayenne to ½ tsp for medium heat, or cut it entirely and lean on Kashmiri chili for color and mild warmth.\n\nMustard oil tip: If you can find it at an Indian grocery, use it — the pungency mellows completely when heated and adds an unmistakably authentic flavor.\n\nKala namak: The sulfurous, eggy depth of black salt is what makes restaurant-style tandoori taste \"right.\" Don't skip it if you can find it.\n\nCharcoal smoke trick: For a real tandoor-smoke note, place a small piece of burning charcoal in a foil cup in the marinating bowl, drizzle ghee on it, cover immediately for 5 minutes, then remove before cooking."
  },
  {
    id: 3,
    dietary: "vegetarian",
    title: "Paneer Tikka",
    description: "Deeply marinated paneer with peppers and onion, double-basted in butter and charred in a tandoor. A two-marinade technique and smoked mustard oil take this far beyond the standard version.",
    servings: 4,
    category: "barbeque",
    emoji: "🧀",
    ingredients: [
      { amount: "500g",      item: "paneer, cut into thick 4cm cubes" },
      { amount: "1 large",   item: "green bell pepper, cut into chunks" },
      { amount: "1 large",   item: "red bell pepper, cut into chunks" },
      { amount: "1 large",   item: "red onion, cut into chunks" },
      { amount: "250g",      item: "hung curd (strained overnight in muslin)" },
      { amount: "3 tbsp",    item: "mustard oil" },
      { amount: "2 tbsp",    item: "fresh lemon juice" },
      { amount: "2 tbsp",    item: "fresh ginger-garlic paste" },
      { amount: "2 tsp",     item: "Kashmiri red chili powder" },
      { amount: "1 tsp",     item: "smoked paprika" },
      { amount: "1½ tsp",    item: "cumin powder" },
      { amount: "1½ tsp",    item: "coriander powder" },
      { amount: "1½ tsp",    item: "garam masala" },
      { amount: "2 tsp",     item: "tandoori masala powder" },
      { amount: "½ tsp",     item: "ajwain (carom seeds), crushed" },
      { amount: "¼ tsp",     item: "black cardamom powder" },
      { amount: "½ tsp",     item: "turmeric" },
      { amount: "2 tbsp",    item: "kasuri methi, crushed" },
      { amount: "2",         item: "green chili, finely minced" },
      { amount: "1½ tsp",    item: "salt" },
      { amount: "½ tsp",     item: "black salt (kala namak)" },
      { amount: "3 tbsp",    item: "unsalted butter" },
      { amount: "1½ tsp",    item: "chaat masala" },
      { amount: "3 tbsp",    item: "fresh coriander, finely chopped" },
      { amount: "1 tsp",     item: "amchur (dry mango powder)" },
    ],
    steps: [
      {
        text: "Smoke the mustard oil: Heat mustard oil in a small pan until it reaches smoking point, then take off the heat and let it cool completely. This kills the raw bite and unlocks deep, nutty flavour — the single biggest upgrade you can make.",
        timer: null
      },
      {
        text: "Score and salt the paneer: Make shallow cross-hatch cuts on each face of the paneer cubes. Toss with salt and black salt and let sit 10 minutes. Pat completely dry — this opens the paneer up to absorb maximum marinade.",
        timer: "10 min"
      },
      {
        text: "Build the marinade: In a large bowl, combine the hung curd, cooled smoked mustard oil, lemon juice, ginger-garlic paste, Kashmiri chili, paprika, cumin, coriander, garam masala, tandoori masala, ajwain, black cardamom, turmeric, kasuri methi, green chili, and amchur. Whisk until completely smooth and deeply red.",
        timer: null
      },
      {
        text: "First marinade: Add the paneer, peppers, and onion to the marinade. Coat thoroughly, pressing into the score marks. Rest for 20 minutes at room temperature.",
        timer: "20 min"
      },
      {
        text: "Second marinade & overnight rest: Apply a second generous coat of marinade over everything, ensuring every surface is covered. Cover and refrigerate for a minimum of 4 hours — overnight is ideal. The longer it sits, the deeper the flavour penetrates.",
        timer: "4 hrs minimum (overnight ideal)"
      },
      {
        text: "Skewer and rest: Thread paneer, peppers, and onion alternately onto metal skewers, leaving small gaps between pieces for heat to hit all sides. Rest at room temperature for 30 minutes before cooking.",
        timer: "30 min"
      },
      {
        text: "First cook in the tandoor: Lower skewers into the tandoor at maximum heat (250–300°C / 480–570°F). Cook for 6–7 minutes, rotating every 2 minutes, until the marinade sets and the edges begin to char.",
        timer: "6–7 min"
      },
      {
        text: "Butter baste and final char: Pull skewers out, baste generously with butter, then return to the tandoor for 3–4 minutes for a fierce final char. The butter will sizzle and blacken at the edges — that's the flavour you want.",
        timer: "3–4 min"
      },
      {
        text: "Finish and serve: Slide off the skewers onto a platter. Immediately dust with chaat masala, scatter fresh coriander, and squeeze fresh lemon over the top. Serve within 2 minutes — paneer tikka waits for no one.",
        timer: null
      },
    ],
    notes: "Scored paneer — the cross-hatch cuts let marinade soak deep into each cube, not just the surface.\n\nSmoked mustard oil — heating it to smoking point removes the harsh raw edge and adds a complex, nutty depth regular oil can't touch.\n\nBlack cardamom — adds a camphor-like smokiness that amplifies the tandoor char.\n\nBlack salt (kala namak) — its sulphurous, tangy punch adds a totally different flavour dimension to regular salt.\n\nAmchur — raw mango powder gives a fruity tartness that cuts through the richness.\n\nDouble butter baste — melt more butter at the finish if you want it extra indulgent.\n\nServe with mint-coriander chutney, pickled onions, and green chili on the side."
  },
];

// ── State ────────────────────────────────────────────────────────────
let currentView = "recipes";
let localRecipes = JSON.parse(localStorage.getItem("cc_local_recipes") || "[]");

function allRecipes() {
  return [...RECIPES, ...localRecipes];
}

// ── Navigation ───────────────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  currentView = name;
  if (name === "home")       renderHome();
  if (name === "recipes")    renderRecipes();
  if (name === "categories") renderCategories();
  if (name === "about")      {} // static content
}

function renderHome() {
  // Latest recipes (up to 3)
  const latest = allRecipes().slice(-3).reverse();
  const latestGrid = document.getElementById("home-latest");
  latestGrid.innerHTML = latest.map(r => `
    <div class="recipe-card" onclick="showDetail(${r.id || '"' + r._localId + '"'})">
      <div class="card-thumb">${r.image ? `<img src="${r.image}" alt="${r.title}" style="width:100%;height:100%;object-fit:cover;display:block;" />` : (r.emoji || CATEGORY_META[r.category]?.emoji || "🍽️")}</div>
      <div class="card-body">
        <div class="card-category">${CATEGORY_META[r.category]?.label || r.category}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <span>🍽️ ${r.servings} servings</span>
          <span>📋 ${r.ingredients.length} ingredients</span>
        </div>
        ${r.dietary ? `<div class="card-dietary card-dietary--${r.dietary}">${DIETARY_META[r.dietary]?.emoji} ${DIETARY_META[r.dietary]?.label}</div>` : ""}
      </div>
    </div>
  `).join("");

  // Categories
  const counts = {};
  allRecipes().forEach(r => { counts[r.category] = (counts[r.category] || 0) + 1; });
  document.getElementById("home-categories").innerHTML = Object.entries(counts).map(([cat, count]) => `
    <div class="category-card" onclick="filterByCategory('${cat}')">
      <div class="cat-icon">${CATEGORY_META[cat]?.emoji || "🍽️"}</div>
      <div class="cat-name">${CATEGORY_META[cat]?.label || cat}</div>
      <div class="cat-count">${count} recipe${count !== 1 ? "s" : ""}</div>
    </div>
  `).join("");
}

function showAdminGate() {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-admin-gate").classList.add("active");
  document.getElementById("admin-password").value = "";
  document.getElementById("password-error").style.display = "none";
  setTimeout(() => document.getElementById("admin-password").focus(), 100);
}

function checkPassword() {
  const val = document.getElementById("admin-password").value;
  if (val === ADMIN_PASSWORD) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById("view-admin").classList.add("active");
    document.getElementById("export-box").style.display = "none";
    if (document.querySelectorAll(".ingredient-row").length === 0) {
      addIngredientRow(); addIngredientRow(); addIngredientRow();
    }
    if (document.querySelectorAll(".step-row").length === 0) {
      addStepRow(); addStepRow();
    }
  } else {
    const err = document.getElementById("password-error");
    err.style.display = "block";
    document.getElementById("admin-password").value = "";
    document.getElementById("admin-password").focus();
  }
}

// ── Render Recipes ───────────────────────────────────────────────────
function renderRecipes(filterCategory) {
  const grid = document.getElementById("recipe-grid");
  const search = document.getElementById("search-input").value.toLowerCase().trim();
  const catFilter = filterCategory || document.getElementById("category-filter").value;

  // Populate category filter
  const select = document.getElementById("category-filter");
  const existing = Array.from(select.options).map(o => o.value);
  const usedCats = [...new Set(allRecipes().map(r => r.category))];
  usedCats.forEach(cat => {
    if (!existing.includes(cat)) {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = CATEGORY_META[cat]?.label || cat;
      select.appendChild(opt);
    }
  });

  let filtered = allRecipes().filter(r => {
    const matchSearch = !search || r.title.toLowerCase().includes(search) || r.description.toLowerCase().includes(search);
    const matchCat = !catFilter || r.category === catFilter;
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="es-icon">🍽️</div>
      <h3>No recipes found</h3>
      <p>Try a different search or category.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => `
    <div class="recipe-card" onclick="showDetail(${r.id || '"' + r._localId + '"'})">
      <div class="card-thumb">${r.image ? `<img src="${r.image}" alt="${r.title}" style="width:100%;height:100%;object-fit:cover;display:block;" />` : (r.emoji || CATEGORY_META[r.category]?.emoji || "🍽️")}</div>
      <div class="card-body">
        <div class="card-category">${CATEGORY_META[r.category]?.label || r.category}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <span>🍽️ ${r.servings} servings</span>
          <span>📋 ${r.ingredients.length} ingredients</span>
        </div>
        ${r.dietary ? `<div class="card-dietary card-dietary--${r.dietary}">${DIETARY_META[r.dietary]?.emoji} ${DIETARY_META[r.dietary]?.label}</div>` : ""}
      </div>
    </div>
  `).join("");
}

// ── Render Categories ────────────────────────────────────────────────
function renderCategories() {
  const grid = document.getElementById("categories-grid");
  const counts = {};
  allRecipes().forEach(r => { counts[r.category] = (counts[r.category] || 0) + 1; });

  const cats = Object.entries(counts);
  if (cats.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="es-icon">📂</div><h3>No recipes yet</h3></div>`;
    return;
  }

  grid.innerHTML = cats.map(([cat, count]) => `
    <div class="category-card" onclick="filterByCategory('${cat}')">
      <div class="cat-icon">${CATEGORY_META[cat]?.emoji || "🍽️"}</div>
      <div class="cat-name">${CATEGORY_META[cat]?.label || cat}</div>
      <div class="cat-count">${count} recipe${count !== 1 ? "s" : ""}</div>
    </div>
  `).join("");
}

function filterByCategory(cat) {
  showView("recipes");
  document.getElementById("category-filter").value = cat;
  renderRecipes(cat);
}

// ── Recipe Detail ────────────────────────────────────────────────────
function showDetail(id) {
  const recipe = allRecipes().find(r => r.id === id || r._localId === id);
  if (!recipe) return;

  const cat = CATEGORY_META[recipe.category];

  const ingredientsHtml = recipe.ingredients.map((ing, i) => `
    <li class="ing-item" onclick="this.classList.toggle('checked')">
      <span class="ing-check">✓</span>
      <span class="ing-amount">${ing.amount}</span>
      <span class="ing-name">${ing.item}</span>
    </li>
  `).join("");

  const stepsHtml = recipe.steps.map((s, i) => `
    <li class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">
        ${s.text}
        ${s.timer ? `<span class="step-timer">⏱ ${s.timer}</span>` : ""}
      </div>
    </li>
  `).join("");

  const notesHtml = recipe.notes ? `
    <div class="rte-notes">
      <div class="rte-notes-title">Recipe Notes</div>
      <p>${recipe.notes}</p>
    </div>
  ` : "";

  document.getElementById("recipe-detail").innerHTML = `
    <div class="rte-card">

      ${recipe.image ? `<div class="rte-hero-img"><img src="${recipe.image}" alt="${recipe.title}" /></div>` : ""}
      <div class="rte-card-header">
        <div class="rte-card-title-row">
          <div class="rte-title-block">
            <div class="rte-category">${cat?.label || recipe.category}</div>
            <h2 class="rte-title">${recipe.title}</h2>
            <p class="rte-desc">${recipe.description}</p>
            ${recipe.yield ? `<p class="rte-yield"><strong>${recipe.yield}</strong></p>` : ""}
          </div>
          <button class="rte-print-btn" onclick="window.print()">🖨 Print</button>
        </div>

        <div class="rte-meta-bar">
          <div class="rte-meta-item">
            <span class="rte-meta-label">Servings</span>
            <span class="rte-meta-value">${recipe.servings || "—"}</span>
          </div>
          <div class="rte-meta-item">
            <span class="rte-meta-label">Ingredients</span>
            <span class="rte-meta-value">${recipe.ingredients.length}</span>
          </div>
          <div class="rte-meta-item">
            <span class="rte-meta-label">Steps</span>
            <span class="rte-meta-value">${recipe.steps.length}</span>
          </div>
          <div class="rte-meta-item">
            <span class="rte-meta-label">Category</span>
            <span class="rte-meta-value">${cat?.emoji || ""} ${cat?.label || recipe.category}</span>
          </div>
          <div class="rte-meta-item">
            <span class="rte-meta-label">Dietary</span>
            <span class="rte-meta-value rte-dietary--${recipe.dietary || ""}">${DIETARY_META[recipe.dietary]?.emoji || "—"} ${DIETARY_META[recipe.dietary]?.label || "—"}</span>
          </div>
        </div>
      </div>

      <div class="rte-body">
        <div class="rte-ingredients-col">
          <h3 class="rte-section-title">Ingredients</h3>
          <div class="servings-scaler">
            <span class="servings-label">Servings</span>
            <div class="servings-controls">
              <button onclick="changeServings(${recipe.id || '"' + recipe._localId + '"'}, -1)">−</button>
              <span id="servings-display">${recipe.servings || 4}</span>
              <button onclick="changeServings(${recipe.id || '"' + recipe._localId + '"'}, 1)">+</button>
            </div>
          </div>
          <p class="rte-ing-hint">Tap an ingredient to cross it off</p>
          <ul class="rte-ingredients-list" id="ingredients-display">${ingredientsHtml}</ul>
        </div>

        <div class="rte-steps-col">
          <h3 class="rte-section-title">Instructions</h3>
          <ol class="rte-steps-list">${stepsHtml}</ol>
          ${notesHtml}
        </div>
      </div>

    </div>
  `;

  showView("detail");
}

// ── Admin: Dynamic Rows ──────────────────────────────────────────────
function addIngredientRow() {
  const list = document.getElementById("ingredients-list");
  const div = document.createElement("div");
  div.className = "ingredient-row";
  div.innerHTML = `
    <input type="text" class="ing-amount-input" placeholder="Amount" />
    <input type="text" class="ing-unit-input" placeholder="Unit" />
    <input type="text" class="ing-item-input" placeholder="Ingredient" style="flex:2" />
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
  `;
  list.appendChild(div);
}

function addStepRow() {
  const list = document.getElementById("steps-list");
  const idx = list.children.length + 1;
  const div = document.createElement("div");
  div.className = "step-row";
  div.innerHTML = `
    <div class="step-num" style="margin-top:8px;flex-shrink:0">${idx}</div>
    <textarea rows="3" class="step-text-input" placeholder="Describe this step..."></textarea>
    <input type="text" class="step-timer-input" placeholder="Timer (e.g. 20 min)" />
    <button type="button" class="remove-btn" onclick="this.parentElement.remove();renumberSteps()" style="margin-top:8px">✕</button>
  `;
  list.appendChild(div);
}

function renumberSteps() {
  document.querySelectorAll(".step-row .step-num").forEach((el, i) => { el.textContent = i + 1; });
}

// ── Admin: Save & Export ─────────────────────────────────────────────
function saveRecipe() {
  const title = document.getElementById("f-title").value.trim();
  if (!title) { alert("Please enter a recipe title."); return; }

  const ingredients = [];
  document.querySelectorAll(".ingredient-row").forEach(row => {
    const amount = row.querySelector(".ing-amount-input").value.trim();
    const unit   = row.querySelector(".ing-unit-input").value.trim();
    const item   = row.querySelector(".ing-item-input").value.trim();
    if (item) ingredients.push({ amount: [amount, unit].filter(Boolean).join(" "), item });
  });

  const steps = [];
  document.querySelectorAll(".step-row").forEach(row => {
    const text  = row.querySelector(".step-text-input").value.trim();
    const timer = row.querySelector(".step-timer-input").value.trim() || null;
    if (text) steps.push({ text, timer });
  });

  if (ingredients.length === 0) { alert("Add at least one ingredient."); return; }
  if (steps.length === 0)       { alert("Add at least one step."); return; }

  const recipe = {
    _localId: "local_" + Date.now(),
    title,
    description: document.getElementById("f-desc").value.trim(),
    servings: parseInt(document.getElementById("f-servings").value) || null,
    dietary: document.getElementById("f-dietary").value,
    category: document.getElementById("f-category").value,
    emoji: CATEGORY_META[document.getElementById("f-category").value]?.emoji || "🍽️",
    ingredients,
    steps,
    notes: document.getElementById("f-notes").value.trim(),
  };

  // Save to localStorage so it shows up immediately
  localRecipes.push(recipe);
  localStorage.setItem("cc_local_recipes", JSON.stringify(localRecipes));

  // Generate export code
  const exportObj = { ...recipe };
  delete exportObj._localId;
  exportObj.id = Date.now();

  const code = JSON.stringify(exportObj, null, 2);
  document.getElementById("export-code").value =
    "// Paste this into the RECIPES array in app.js:\n" + code + ",";

  document.getElementById("export-box").style.display = "block";
  document.getElementById("export-box").scrollIntoView({ behavior: "smooth" });
}

function copyExport() {
  const ta = document.getElementById("export-code");
  ta.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}

function clearForm() {
  document.getElementById("recipe-form").reset();
  document.getElementById("ingredients-list").innerHTML = "";
  document.getElementById("steps-list").innerHTML = "";
  document.getElementById("export-box").style.display = "none";
  addIngredientRow(); addIngredientRow(); addIngredientRow();
  addStepRow(); addStepRow();
}

// ── Servings Scaler ──────────────────────────────────────────────────
let currentServings = null;
let baseServings = null;
let activeRecipeId = null;

function changeServings(id, delta) {
  const recipe = allRecipes().find(r => r.id === id || r._localId === id);
  if (!recipe) return;

  if (activeRecipeId !== id) {
    baseServings = recipe.servings || 4;
    currentServings = baseServings;
    activeRecipeId = id;
  }

  currentServings = Math.max(1, currentServings + delta);
  document.getElementById("servings-display").textContent = currentServings;

  const ratio = currentServings / baseServings;
  const list = document.getElementById("ingredients-display");
  list.innerHTML = recipe.ingredients.map(ing => `
    <li class="ing-item" onclick="this.classList.toggle('checked')">
      <span class="ing-check">✓</span>
      <span class="ing-amount">${scaleAmount(ing.amount, ratio)}</span>
      <span class="ing-name">${ing.item}</span>
    </li>
  `).join("");
}

function scaleAmount(amount, ratio) {
  if (ratio === 1) return amount;
  // Match a leading number (integer or decimal or fraction like 1/4)
  return amount.replace(/^(\d+\/\d+|\d+\.?\d*)/, match => {
    let num;
    if (match.includes("/")) {
      const [a, b] = match.split("/");
      num = parseInt(a) / parseInt(b);
    } else {
      num = parseFloat(match);
    }
    const scaled = num * ratio;
    return formatNumber(scaled);
  });
}

function formatNumber(n) {
  if (n === Math.round(n)) return String(Math.round(n));
  // Common fractions
  const fractions = [[1/8,"⅛"],[1/4,"¼"],[1/3,"⅓"],[3/8,"⅜"],[1/2,"½"],[5/8,"⅝"],[2/3,"⅔"],[3/4,"¾"],[7/8,"⅞"]];
  const whole = Math.floor(n);
  const frac = n - whole;
  for (const [val, sym] of fractions) {
    if (Math.abs(frac - val) < 0.07) {
      return whole > 0 ? `${whole} ${sym}` : sym;
    }
  }
  return n.toFixed(1).replace(/\.0$/, "");
}

function toggleMobileNav() {
  document.getElementById("mobile-nav").classList.toggle("open");
}

// ── Init ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
