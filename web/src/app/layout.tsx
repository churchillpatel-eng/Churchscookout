import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./legacy.css";
import "./globals.css";

export const metadata: Metadata = {
  // Resolves relative OG/Twitter image paths to absolute URLs so social
  // shares render the preview image instead of pointing at localhost.
  metadataBase: new URL("https://churchscookout.com"),
  title: {
    default: "Church's Cookout — Indian-Inspired Recipes & Meal Planning",
    template: "%s — Church's Cookout",
  },
  description:
    "Church's Cookout: bold Indian-inspired recipes with a modern twist. Explore vegan, vegetarian, and meat dishes plus a weekly meal planner.",
  openGraph: {
    title: "Church's Cookout",
    description:
      "Bold Indian-inspired recipes with a modern twist — vegan-friendly, always delicious.",
    images: ["/hero.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
