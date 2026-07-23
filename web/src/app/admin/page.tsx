"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORY_META, categoryEmoji } from "@/data/categories";
import type { Dietary } from "@/types";

// Backend authoring is a later phase. For now this builds a recipe object
// to paste into src/data/recipes.ts (mirrors the old export-code flow).
interface IngRow {
  amount: string;
  unit: string;
  item: string;
}
interface StepRow {
  text: string;
  timer: string;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState("");
  const [dietary, setDietary] = useState<Dietary>("meat");
  const [category, setCategory] = useState("burgers");
  const [notes, setNotes] = useState("");
  const [ingredients, setIngredients] = useState<IngRow[]>([
    { amount: "", unit: "", item: "" },
    { amount: "", unit: "", item: "" },
    { amount: "", unit: "", item: "" },
  ]);
  const [steps, setSteps] = useState<StepRow[]>([
    { text: "", timer: "" },
    { text: "", timer: "" },
  ]);
  const [exportCode, setExportCode] = useState<string | null>(null);

  const setIng = (i: number, patch: Partial<IngRow>) =>
    setIngredients((rows) => rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const setStep = (i: number, patch: Partial<StepRow>) =>
    setSteps((rows) => rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));

  function save() {
    if (!title.trim()) return alert("Please enter a recipe title.");

    const ings = ingredients
      .filter((r) => r.item.trim())
      .map((r) => ({ amount: [r.amount.trim(), r.unit.trim()].filter(Boolean).join(" "), item: r.item.trim() }));
    const stps = steps
      .filter((r) => r.text.trim())
      .map((r) => ({ text: r.text.trim(), timer: r.timer.trim() || null }));

    if (ings.length === 0) return alert("Add at least one ingredient.");
    if (stps.length === 0) return alert("Add at least one step.");

    const recipe = {
      id: Date.now(),
      slug: slugify(title),
      dietary,
      title: title.trim(),
      description: description.trim(),
      servings: parseInt(servings) || null,
      category,
      emoji: categoryEmoji(category),
      ingredients: ings,
      steps: stps,
      notes: notes.trim(),
    };

    setExportCode(JSON.stringify(recipe, null, 2) + ",");
  }

  function copy() {
    if (exportCode) navigator.clipboard?.writeText(exportCode);
  }

  return (
    <div>
      <div className="admin-header">
        <h2>Add a New Recipe</h2>
        <Link className="btn-outline" href="/recipes">
          ← Back to Site
        </Link>
      </div>

      <div className="admin-form-card">
        <div className="form-section">
          <h3>Basic Info</h3>
          <div className="form-group">
            <label>Recipe Title *</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Smoked Brisket" />
          </div>
          <div className="form-group">
            <label>Short Description</label>
            <textarea rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Servings</label>
              <input type="number" min={1} value={servings} onChange={(e) => setServings(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Dietary</label>
              <select value={dietary} onChange={(e) => setDietary(e.target.value as Dietary)}>
                <option value="meat">🥩 Meat</option>
                <option value="vegetarian">🥗 Vegetarian</option>
                <option value="vegan">🌱 Vegan</option>
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {Object.entries(CATEGORY_META).map(([value, meta]) => (
                  <option key={value} value={value}>
                    {meta.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Ingredients</h3>
          {ingredients.map((row, i) => (
            <div key={i} className="ingredient-row">
              <input placeholder="Amount" value={row.amount} onChange={(e) => setIng(i, { amount: e.target.value })} />
              <input placeholder="Unit" value={row.unit} onChange={(e) => setIng(i, { unit: e.target.value })} />
              <input placeholder="Ingredient" style={{ flex: 2 }} value={row.item} onChange={(e) => setIng(i, { item: e.target.value })} />
              <button type="button" className="remove-btn" onClick={() => setIngredients((r) => r.filter((_, idx) => idx !== i))}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="btn-add" onClick={() => setIngredients((r) => [...r, { amount: "", unit: "", item: "" }])}>
            + Add Ingredient
          </button>
        </div>

        <div className="form-section">
          <h3>Steps</h3>
          {steps.map((row, i) => (
            <div key={i} className="step-row">
              <div className="step-num" style={{ marginTop: 8, flexShrink: 0 }}>
                {i + 1}
              </div>
              <textarea rows={3} placeholder="Describe this step..." value={row.text} onChange={(e) => setStep(i, { text: e.target.value })} />
              <input placeholder="Timer (e.g. 20 min)" value={row.timer} onChange={(e) => setStep(i, { timer: e.target.value })} />
              <button type="button" className="remove-btn" style={{ marginTop: 8 }} onClick={() => setSteps((r) => r.filter((_, idx) => idx !== i))}>
                ✕
              </button>
            </div>
          ))}
          <button type="button" className="btn-add" onClick={() => setSteps((r) => [...r, { text: "", timer: "" }])}>
            + Add Step
          </button>
        </div>

        <div className="form-section">
          <h3>Notes (Optional)</h3>
          <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-primary" onClick={save}>
            Save Recipe
          </button>
        </div>
      </div>

      {exportCode && (
        <div className="export-box">
          <h3>Recipe Saved!</h3>
          <p>
            Copy the object below into a new file{" "}
            <code>src/data/recipes/&lt;slug&gt;.ts</code> (default-export it), then
            add it to the array in <code>src/data/recipes/index.ts</code> to publish.
          </p>
          <textarea rows={20} readOnly value={exportCode} />
          <button className="btn-outline" onClick={copy}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}
