// ── Admin Password ──────────────────────────────────────────────────
// Change this to your own password before deploying
const ADMIN_PASSWORD = "Cookout2026!";

// ── Category Config ─────────────────────────────────────────────────
const CATEGORY_META = {
  burgers:  { label: "Burgers",            emoji: "🍔" },
  chicken:  { label: "Chicken",            emoji: "🍗" },
  beef:     { label: "Beef",               emoji: "🥩" },
  seafood:  { label: "Seafood",            emoji: "🦐" },
  sides:    { label: "Sides",              emoji: "🌽" },
  sauces:   { label: "Sauces & Marinades", emoji: "🫙" },
  desserts: { label: "Desserts",           emoji: "🍦" },
  other:    { label: "Other",              emoji: "🍽️" },
};

// ── Recipe Data ──────────────────────────────────────────────────────
// To add a permanent recipe: copy the exported object from the admin
// panel and paste it as a new entry in this array.
const RECIPES = [
  {
    id: 1,
    title: "Green Garlic, Mint & Cilantro Chicken Burgers",
    description: "A bright, herb-forward chicken burger built around mint, cilantro, and green garlic, ground fresh with your KitchenAid attachment for the best texture.",
    servings: 36,
    category: "burgers",
    emoji: "🍔",
    ingredients: [
      { amount: "9 lbs",        item: "boneless skinless chicken thighs" },
      { amount: "8 stalks",     item: "green garlic (white and light green parts), finely minced" },
      { amount: "1½ cups",      item: "shallots, finely minced" },
      { amount: "1 cup",        item: "fresh mint leaves, finely chopped" },
      { amount: "1 cup",        item: "fresh cilantro, finely chopped" },
      { amount: "1 thumb",      item: "fresh ginger, grated" },
      { amount: "2",            item: "limes, zested and juiced" },
      { amount: "½ cup",        item: "plain full-fat yogurt" },
      { amount: "4 large",      item: "eggs" },
      { amount: "1½ cups",      item: "panko breadcrumbs" },
      { amount: "1½ tbsp",      item: "kosher salt" },
      { amount: "1 tbsp",       item: "black pepper, freshly ground" },
      { amount: "1 tbsp",       item: "ground cumin" },
      { amount: "1 tbsp",       item: "ground coriander" },
      { amount: "½ tsp",        item: "crushed red pepper flakes" },
      { amount: "3 tbsp",       item: "neutral oil (grapeseed or avocado), for cooking" },
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
}

function renderHome() {
  // Latest recipes (up to 3)
  const latest = allRecipes().slice(-3).reverse();
  const latestGrid = document.getElementById("home-latest");
  latestGrid.innerHTML = latest.map(r => `
    <div class="recipe-card" onclick="showDetail(${r.id || '"' + r._localId + '"'})">
      <div class="card-thumb">${r.emoji || CATEGORY_META[r.category]?.emoji || "🍽️"}</div>
      <div class="card-body">
        <div class="card-category">${CATEGORY_META[r.category]?.label || r.category}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <span>🍽️ ${r.servings} servings</span>
          <span>📋 ${r.ingredients.length} ingredients</span>
        </div>
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
      <div class="card-thumb">${r.emoji || CATEGORY_META[r.category]?.emoji || "🍽️"}</div>
      <div class="card-body">
        <div class="card-category">${CATEGORY_META[r.category]?.label || r.category}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <span>🍽️ ${r.servings} servings</span>
          <span>📋 ${r.ingredients.length} ingredients</span>
        </div>
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

  const ingredientsHtml = recipe.ingredients.map(ing =>
    `<li><span class="ing-amount">${ing.amount}</span>${ing.item}</li>`
  ).join("");

  const stepsHtml = recipe.steps.map((s, i) => `
    <li class="step-item">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">
        ${s.text}
        ${s.timer ? `<br><span class="step-timer">⏱ ${s.timer}</span>` : ""}
      </div>
    </li>
  `).join("");

  const notesHtml = recipe.notes ? `
    <div class="notes-card">
      <div class="section-title">Notes & Tips</div>
      <p>${recipe.notes}</p>
    </div>
  ` : "";

  document.getElementById("recipe-detail").innerHTML = `
    <div class="detail-hero">
      <div class="detail-emoji">${recipe.emoji || cat?.emoji || "🍽️"}</div>
      <div>
        <div class="detail-category-badge">${cat?.label || recipe.category}</div>
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <div class="detail-servings">Makes <strong>${recipe.servings} servings</strong></div>
      </div>
    </div>
    <div class="detail-body">
      <div class="ingredients-card">
        <div class="section-title">Ingredients</div>
        <ul class="ingredients-list">${ingredientsHtml}</ul>
      </div>
      <div class="steps-card">
        <div class="section-title">Steps</div>
        <ol class="steps-list">${stepsHtml}</ol>
      </div>
      ${notesHtml ? `<div style="grid-column:1/-1">${notesHtml}</div>` : ""}
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

// ── Init ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
