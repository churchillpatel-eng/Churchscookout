"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { categoryLabel } from "@/data/categories";
import type { Recipe } from "@/types";

export default function RecipesBrowser({
  recipes,
  initialCategory = "",
}: {
  recipes: Recipe[];
  initialCategory?: string;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const usedCategories = useMemo(
    () => Array.from(new Set(recipes.map((r) => r.category))),
    [recipes],
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return recipes.filter((r) => {
      const matchSearch =
        !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
      const matchCat = !category || r.category === category;
      return matchSearch && matchCat;
    });
  }, [recipes, search, category]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {usedCategories.map((cat) => (
            <option key={cat} value={cat}>
              {categoryLabel(cat)}
            </option>
          ))}
        </select>
      </div>

      <div id="recipe-grid" className="recipe-grid">
        {filtered.length === 0 ? (
          <div className="empty-state" style={{ gridColumn: "1/-1" }}>
            <div className="es-icon">🍽️</div>
            <h3>No recipes found</h3>
            <p>Try a different search or category.</p>
          </div>
        ) : (
          filtered.map((r) => <RecipeCard key={r.slug} recipe={r} />)
        )}
      </div>
    </>
  );
}
