import type { Metadata } from "next";
import MealPlanner from "@/components/MealPlanner";
import { getAllRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Weekly Meal Planner",
  description: "Plan your week with Church's Cookout recipes and generate a shopping list.",
};

export default function MealPlannerPage() {
  return <MealPlanner recipes={getAllRecipes()} />;
}
