"use client";

import { useState } from "react";
import Link from "next/link";
import type { Recipe } from "@/types";
import { CATEGORY_META, DIETARY_META, categoryLabel } from "@/data/categories";
import { countIngredients } from "@/lib/recipes";
import { scaleAmount } from "@/lib/scaling";

export default function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const baseServings = recipe.servings || 4;
  const [servings, setServings] = useState(baseServings);
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const ratio = servings / baseServings;
  const cat = CATEGORY_META[recipe.category];
  const dietary = DIETARY_META[recipe.dietary];

  const toggleChecked = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div>
      <Link className="back-btn" href="/recipes">
        ← Back to Recipes
      </Link>

      <div className="rte-card">
        {recipe.image && (
          <div className="rte-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={recipe.image} alt={recipe.title} loading="lazy" />
          </div>
        )}

        <div className="rte-card-header">
          <div className="rte-card-title-row">
            <div className="rte-title-block">
              <div className="rte-category">{categoryLabel(recipe.category)}</div>
              <h2 className="rte-title">{recipe.title}</h2>
              <p className="rte-desc">{recipe.description}</p>
              {recipe.yield && (
                <p className="rte-yield">
                  <strong>{recipe.yield}</strong>
                </p>
              )}
            </div>
            <button className="rte-print-btn" onClick={() => window.print()}>
              🖨 Print
            </button>
          </div>

          <div className="rte-meta-bar">
            <div className="rte-meta-item">
              <span className="rte-meta-label">Yields</span>
              <span className="rte-meta-value">{recipe.servings || "—"}</span>
            </div>
            <div className="rte-meta-item">
              <span className="rte-meta-label">Ingredients</span>
              <span className="rte-meta-value">{countIngredients(recipe)}</span>
            </div>
            <div className="rte-meta-item">
              <span className="rte-meta-label">Category</span>
              <span className="rte-meta-value">
                {cat?.emoji ?? ""} {categoryLabel(recipe.category)}
              </span>
            </div>
            <div className="rte-meta-item">
              <span className="rte-meta-label">Dietary</span>
              <span className={`rte-meta-value rte-dietary--${recipe.dietary}`}>
                {dietary?.emoji ?? "—"} {dietary?.label ?? "—"}
              </span>
            </div>
          </div>
        </div>

        <div className="rte-body">
          <div className="rte-ingredients-col">
            <h3 className="rte-section-title">Ingredients</h3>
            <div className="servings-scaler">
              <span className="servings-label">Servings</span>
              <div className="servings-controls">
                <button onClick={() => setServings((s) => Math.max(1, s - 1))}>−</button>
                <span>{servings}</span>
                <button onClick={() => setServings((s) => s + 1)}>+</button>
              </div>
            </div>
            <p className="rte-ing-hint">Tap an ingredient to cross it off</p>
            <ul className="rte-ingredients-list">
              {recipe.ingredients.map((ing, i) =>
                ing.section ? (
                  <li key={i} className="ing-section-header">
                    {ing.section}
                  </li>
                ) : (
                  <li
                    key={i}
                    className={`ing-item${checked.has(i) ? " checked" : ""}`}
                    onClick={() => toggleChecked(i)}
                  >
                    <span className="ing-check">✓</span>
                    <span className="ing-amount">{scaleAmount(ing.amount, ratio)}</span>
                    <span className="ing-name">{ing.item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rte-steps-col">
            <h3 className="rte-section-title">Instructions</h3>
            <ol className="rte-steps-list">
              {recipe.steps.map((s, i) => (
                <li key={i} className="step-item">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-text">
                    {s.text}
                    {s.timer && <span className="step-timer">⏱ {s.timer}</span>}
                  </div>
                </li>
              ))}
            </ol>
            {recipe.notes && (
              <div className="rte-notes">
                <div className="rte-notes-title">Recipe Notes</div>
                <p>{recipe.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
