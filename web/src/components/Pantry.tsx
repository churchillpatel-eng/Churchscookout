"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "@/types";
import RecipeCard from "@/components/RecipeCard";
import { useLocalStorage } from "@/lib/storage";
import { useDialogs } from "@/components/DialogProvider";
import { buildVocabulary, normalizeIngredient, rankByPantry, type PantryMatch } from "@/lib/pantry";

interface PantryState {
  items: string[];
  assumeStaples: boolean;
}
interface ShoppingEntry {
  name: string;
  checked: boolean;
}
const INITIAL: PantryState = { items: [], assumeStaples: true };

// Prettify a normalized core name for display ("ginger garlic paste" -> "Ginger Garlic Paste").
const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

export default function Pantry({ recipes }: { recipes: Recipe[] }) {
  const [pantry, setPantry, hydrated] = useLocalStorage<PantryState>("cc_pantry", INITIAL);
  const [shopping, setShopping] = useLocalStorage<ShoppingEntry[]>("cc_shopping_list", []);
  const [draft, setDraft] = useState("");
  const [maxMissing, setMaxMissing] = useState(99);
  const { confirm, toast } = useDialogs();

  const vocabulary = useMemo(() => buildVocabulary(recipes), [recipes]);

  const items = hydrated ? pantry.items : [];
  const assumeStaples = hydrated ? pantry.assumeStaples : true;

  const matches = useMemo(
    () => (items.length ? rankByPantry(recipes, items, { assumeStaples }) : []),
    [recipes, items, assumeStaples],
  );

  const ready = matches.filter((m) => m.missingCount === 0);
  const almost = matches.filter((m) => m.missingCount > 0 && m.missingCount <= maxMissing);

  function addItem(raw: string) {
    const value = normalizeIngredient(raw);
    if (!value) return;
    setPantry((p) => (p.items.includes(value) ? p : { ...p, items: [...p.items, value] }));
    setDraft("");
  }
  function removeItem(value: string) {
    setPantry((p) => ({ ...p, items: p.items.filter((i) => i !== value) }));
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addItem(draft);
    }
  }

  // ── Shopping list ──
  async function addMissing(missing: string[]) {
    const names = Array.from(new Set(missing.map(titleCase)));
    if (!names.length) return;
    const label = `${names.length} item${names.length === 1 ? "" : "s"}`;
    const ok = await confirm({
      badge: "🛒",
      title: "Add to your shopping list?",
      message: names.join(", "),
      confirmLabel: `Add ${label}`,
      cancelLabel: "Cancel",
    });
    if (!ok) return;
    setShopping((prev) => {
      const have = new Set(prev.map((s) => s.name));
      const merged = [...prev];
      names.forEach((n) => {
        if (!have.has(n)) merged.push({ name: n, checked: false });
      });
      return merged;
    });
    toast(`Added ${label} to your shopping list`);
  }
  const toggleShopping = (name: string) =>
    setShopping((prev) => prev.map((s) => (s.name === name ? { ...s, checked: !s.checked } : s)));
  const removeShopping = (name: string) =>
    setShopping((prev) => prev.filter((s) => s.name !== name));

  return (
    <>
      <div className="page-header">
        <h2>My Pantry</h2>
        <p className="page-sub">
          Add what you have on hand and we&apos;ll show you what you can cook — starting with the
          recipes you can make right now.
        </p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          list="pantry-vocab"
          placeholder="Add an ingredient (e.g. chicken, onion, yogurt)…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Add a pantry ingredient"
        />
        <datalist id="pantry-vocab">
          {vocabulary.map((v) => (
            <option key={v} value={v} />
          ))}
        </datalist>
        <button type="button" className="btn-primary" onClick={() => addItem(draft)}>
          Add
        </button>
      </div>

      <div className="pantry-panel">
        {items.length > 0 ? (
          <div className="pantry-chips">
            {items.map((item) => (
              <button
                type="button"
                key={item}
                className="pantry-chip"
                onClick={() => removeItem(item)}
                aria-label={`Remove ${item}`}
              >
                {titleCase(item)}
                <span className="pantry-chip-x" aria-hidden="true">
                  ✕
                </span>
              </button>
            ))}
            <button
              type="button"
              className="pantry-clear"
              onClick={() => setPantry((p) => ({ ...p, items: [] }))}
            >
              Clear all
            </button>
          </div>
        ) : (
          <p className="pantry-hint">Your pantry is empty. Add a few ingredients to get started.</p>
        )}

        <div className="pantry-controls">
          <label className="pantry-toggle">
            <input
              type="checkbox"
              checked={assumeStaples}
              onChange={(e) => setPantry((p) => ({ ...p, assumeStaples: e.target.checked }))}
            />
            Assume I have staples (salt, pepper, oil, water, sugar)
          </label>
          <label className="pantry-max">
            Show recipes missing up to
            <select value={maxMissing} onChange={(e) => setMaxMissing(Number(e.target.value))}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={99}>any number of</option>
            </select>
            ingredient{maxMissing === 1 ? "" : "s"}
          </label>
        </div>
      </div>

      {shopping.length > 0 && (
        <div className="shopping-panel">
          <div className="shopping-panel-head">
            <h3>🛒 Shopping List ({shopping.length})</h3>
            <button type="button" className="pantry-clear" onClick={() => setShopping([])}>
              Clear list
            </button>
          </div>
          <ul className="shopping-panel-list">
            {shopping.map((s) => (
              <li key={s.name} className={`shopping-item${s.checked ? " checked" : ""}`}>
                <label>
                  <input type="checkbox" checked={s.checked} onChange={() => toggleShopping(s.name)} />
                  {s.name}
                </label>
                <button
                  type="button"
                  className="shopping-remove"
                  onClick={() => removeShopping(s.name)}
                  aria-label={`Remove ${s.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {items.length === 0 ? (
        <div className="empty-state">
          <div className="es-icon">🧑‍🍳</div>
          <h3>What can you make tonight?</h3>
          <p>Add the ingredients you have and we&apos;ll match them to recipes.</p>
        </div>
      ) : ready.length === 0 && almost.length === 0 ? (
        <div className="empty-state">
          <div className="es-icon">🔎</div>
          <h3>Nothing matches yet</h3>
          <p>Add more ingredients, or allow more missing items above.</p>
        </div>
      ) : (
        <div className="pantry-results">
          {ready.length > 0 && (
            <section>
              <h3 className="pantry-group-title">✅ Ready to cook ({ready.length})</h3>
              <div className="recipe-grid">
                {ready.map((m) => (
                  <MatchCard key={m.recipe.slug} match={m} onAddMissing={addMissing} />
                ))}
              </div>
            </section>
          )}
          {almost.length > 0 && (
            <section>
              <h3 className="pantry-group-title">🛒 Almost there ({almost.length})</h3>
              <div className="recipe-grid">
                {almost.map((m) => (
                  <MatchCard key={m.recipe.slug} match={m} onAddMissing={addMissing} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}

function MatchCard({
  match,
  onAddMissing,
}: {
  match: PantryMatch;
  onAddMissing: (missing: string[]) => void;
}) {
  const { recipe, have, total, missing } = match;
  return (
    <div className="pantry-result">
      <RecipeCard recipe={recipe} />
      <p className="pantry-match">
        <strong>
          You have {have} of {total}
        </strong>
        {missing.length > 0 && (
          <span className="pantry-missing">
            {" "}
            · Missing: {Array.from(new Set(missing)).map(titleCase).join(", ")}
          </span>
        )}
      </p>
      {missing.length > 0 && (
        <button type="button" className="pantry-add-btn" onClick={() => onAddMissing(missing)}>
          🛒 Add missing to shopping list
        </button>
      )}
    </div>
  );
}
