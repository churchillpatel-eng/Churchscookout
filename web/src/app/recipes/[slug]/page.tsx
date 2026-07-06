import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RecipeDetail from "@/components/RecipeDetail";
import { categoryLabel } from "@/data/categories";
import { getRecipeBySlug, getRecipeSlugs } from "@/lib/recipes";

// Pre-render one static page per recipe at build time (SSG).
export function generateStaticParams() {
  return getRecipeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: "Recipe not found" };

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: "article",
      images: recipe.image ? [recipe.image] : ["/hero.jpg"],
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  // Recipe structured data, rendered into the server HTML for rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    author: { "@type": "Person", name: "Churchill" },
    recipeCategory: categoryLabel(recipe.category),
    recipeYield: recipe.servings ? `${recipe.servings} servings` : undefined,
    image: recipe.image ? [recipe.image] : undefined,
    recipeIngredient: recipe.ingredients
      .filter((i) => !i.section)
      .map((i) => `${i.amount ?? ""} ${i.item ?? ""}`.trim()),
    recipeInstructions: recipe.steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      text: s.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecipeDetail recipe={recipe} />
    </>
  );
}
