import Link from "next/link";
import type { Recipe } from "@/types";
import { CATEGORY_META, DIETARY_META, categoryEmoji, categoryLabel } from "@/data/categories";
import { countIngredients } from "@/lib/recipes";

// Shared card used by the home and recipes grids. React escapes all
// interpolated text by default, so no manual escaping is needed.
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const thumb = recipe.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={recipe.image}
      alt={recipe.title}
      loading="lazy"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  ) : (
    recipe.emoji || categoryEmoji(recipe.category)
  );

  const dietary = DIETARY_META[recipe.dietary];

  return (
    <Link href={`/recipes/${recipe.slug}`} className="recipe-card">
      <div className="card-thumb">{thumb}</div>
      <div className="card-body">
        <div className="card-category">{categoryLabel(recipe.category)}</div>
        <div className="card-title">{recipe.title}</div>
        <div className="card-desc">{recipe.description}</div>
        <div className="card-meta">
          <span>🍽️ {recipe.servings} servings</span>
          <span>📋 {countIngredients(recipe)} ingredients</span>
        </div>
        {dietary && (
          <div className={`card-dietary card-dietary--${recipe.dietary}`}>
            {dietary.emoji} {dietary.label}
          </div>
        )}
      </div>
    </Link>
  );
}
