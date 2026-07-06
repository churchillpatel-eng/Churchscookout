import type { Metadata } from "next";
import Link from "next/link";
import { categoryEmoji, categoryLabel } from "@/data/categories";
import { categoryCounts, getAllRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Church's Cookout recipes by category.",
};

export default function CategoriesPage() {
  const counts = Object.entries(categoryCounts(getAllRecipes()));

  return (
    <div>
      <div className="page-header">
        <h2>Categories</h2>
      </div>
      <div id="categories-grid" className="categories-grid">
        {counts.length === 0 ? (
          <div className="empty-state">
            <div className="es-icon">📂</div>
            <h3>No recipes yet</h3>
          </div>
        ) : (
          counts.map(([cat, count]) => (
            <Link key={cat} href={`/recipes?category=${cat}`} className="category-card">
              <div className="cat-icon">{categoryEmoji(cat)}</div>
              <div className="cat-name">{categoryLabel(cat)}</div>
              <div className="cat-count">
                {count} recipe{count !== 1 ? "s" : ""}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
