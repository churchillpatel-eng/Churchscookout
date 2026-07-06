"use client";

import { Fragment, useMemo, useState } from "react";
import type { Ingredient, Recipe } from "@/types";
import { categoryEmoji } from "@/data/categories";
import { useLocalStorage } from "@/lib/storage";
import { aggregateIngredients, groupByAisle, type ShoppingAisle } from "@/lib/shopping-list";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEALS = ["Breakfast", "Lunch", "Dinner"];

// A slot stores only the recipe slug — ingredients are resolved live, so
// editing a recipe never leaves a stale copy behind in a saved plan.
type Slot = { slug: string; title: string; emoji: string };
type PlanData = Record<string, Record<string, Slot>>;

export default function MealPlanner({ recipes }: { recipes: Recipe[] }) {
  const [plan, setPlan, hydrated] = useLocalStorage<PlanData>("cc_meal_plan", {});
  const [picker, setPicker] = useState<{ day: string; meal: string } | null>(null);
  const [aisles, setAisles] = useState<ShoppingAisle[] | null>(null);
  const [crossed, setCrossed] = useState<Set<string>>(new Set());

  const bySlug = useMemo(() => new Map(recipes.map((r) => [r.slug, r])), [recipes]);
  const recipeEmoji = (r: Recipe) => r.emoji || categoryEmoji(r.category);

  function assign(slug: string) {
    if (!picker) return;
    const recipe = bySlug.get(slug);
    if (!recipe) return;
    const { day, meal } = picker;
    setPlan((prev) => ({
      ...prev,
      [day]: { ...prev[day], [meal]: { slug, title: recipe.title, emoji: recipeEmoji(recipe) } },
    }));
    setPicker(null);
  }

  function removeSlot(day: string, meal: string) {
    setPlan((prev) => {
      const next = { ...prev, [day]: { ...prev[day] } };
      delete next[day][meal];
      return next;
    });
  }

  function clearPlan() {
    if (!confirm("Clear the entire meal plan?")) return;
    setPlan({});
    setAisles(null);
  }

  function generateShoppingList() {
    const ingredients: Ingredient[] = [];
    for (const meal of MEALS) {
      for (const day of DAYS) {
        const slot = plan[day]?.[meal];
        const recipe = slot && bySlug.get(slot.slug);
        if (recipe) ingredients.push(...recipe.ingredients);
      }
    }
    if (ingredients.length === 0) {
      alert("Add some recipes to your plan first!");
      return;
    }
    setAisles(groupByAisle(aggregateIngredients(ingredients)));
    setCrossed(new Set());
  }

  const toggleCrossed = (key: string) =>
    setCrossed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div>
      <div className="page-header">
        <h2>Weekly Meal Planner</h2>
        <p className="page-sub">Plan your week. Generate your shopping list.</p>
      </div>

      <div className="planner-container">
        <div className="planner-grid-wrap">
          <div className="planner-grid">
            <div className="planner-cell header-cell" />
            {DAYS.map((d) => (
              <div key={d} className="planner-cell header-cell">
                {d}
              </div>
            ))}

            {MEALS.map((meal) => (
              <Fragment key={meal}>
                <div className="planner-cell meal-label">{meal}</div>
                {DAYS.map((day) => {
                  const slot = hydrated ? plan[day]?.[meal] : undefined;
                  return slot ? (
                    <div
                      key={day}
                      className="planner-cell meal-slot has-recipe"
                      onClick={() => setPicker({ day, meal })}
                    >
                      <div className="planner-slot-content">
                        <span className="slot-recipe-name">
                          {slot.emoji} {slot.title}
                        </span>
                      </div>
                      <button
                        className="planner-slot-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSlot(day, meal);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div
                      key={day}
                      className="planner-cell meal-slot"
                      onClick={() => setPicker({ day, meal })}
                    >
                      <div className="planner-add-hint">+</div>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="planner-sidebar">
          <div className="planner-actions">
            <button className="btn-primary" onClick={generateShoppingList} style={{ width: "100%" }}>
              🛒 Generate Shopping List
            </button>
            <button
              className="btn-outline"
              onClick={clearPlan}
              style={{ width: "100%", marginTop: 10 }}
            >
              Clear Plan
            </button>
          </div>

          {aisles && (
            <div className="shopping-list-output" style={{ display: "block" }}>
              <h4>🛒 Shopping List</h4>
              {aisles.map((aisle) => (
                <div key={aisle.label}>
                  <div className="shopping-aisle-header">
                    {aisle.emoji} {aisle.label}
                  </div>
                  <ul className="shopping-aisle-list">
                    {aisle.items.map((it) => {
                      const key = `${aisle.label}|${it.item}`;
                      return (
                        <li
                          key={key}
                          className={crossed.has(key) ? "checked-item" : undefined}
                          onClick={() => toggleCrossed(key)}
                        >
                          {it.amount && <strong>{it.amount}</strong>} {it.item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="planner-recipe-picker">
            <h4>Your Recipes</h4>
            <p className="planner-hint">Click a recipe to add it to a meal slot</p>
            <div className="planner-recipe-list">
              {recipes.map((r) => (
                <div
                  key={r.slug}
                  className="planner-recipe-item"
                  onClick={() => picker && assign(r.slug)}
                  style={{ opacity: picker ? 1 : 0.55 }}
                >
                  <span>{recipeEmoji(r)}</span>
                  <span>{r.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {picker && (
        <div className="slot-picker-overlay" onClick={() => setPicker(null)}>
          <div className="slot-picker-modal" onClick={(e) => e.stopPropagation()}>
            <h3>
              {picker.day} — {picker.meal}
            </h3>
            <p>Pick a recipe for this slot</p>
            <div className="slot-picker-list">
              {recipes.map((r) => (
                <div key={r.slug} className="slot-picker-item" onClick={() => assign(r.slug)}>
                  <span>{recipeEmoji(r)}</span>
                  <span>{r.title}</span>
                </div>
              ))}
            </div>
            <button className="slot-picker-cancel" onClick={() => setPicker(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
