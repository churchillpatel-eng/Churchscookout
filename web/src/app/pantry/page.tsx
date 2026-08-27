import type { Metadata } from "next";
import Pantry from "@/components/Pantry";
import { getAllRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "My Pantry",
  description:
    "Tell Church's Cookout what ingredients you have and see which recipes you can make right now.",
};

export default function PantryPage() {
  return <Pantry recipes={getAllRecipes()} />;
}
