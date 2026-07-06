import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/SocialIcons";
import { categoryEmoji, categoryLabel } from "@/data/categories";
import { categoryCounts, getAllRecipes, getLatestRecipes } from "@/lib/recipes";

export default function HomePage() {
  const latest = getLatestRecipes(3);
  const counts = categoryCounts(getAllRecipes());

  return (
    <div>
      <div className="home-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.jpg" alt="Church's Cookout cutting board" className="home-hero-img" />
        <div className="home-hero-overlay">
          <p className="hero-eyebrow">Welcome to</p>
          <h2>Church&apos;s Cookout</h2>
          <p className="hero-sub">
            Made with love, rooted in tradition, and always cooked for the people.
          </p>
          <Link className="btn-primary hero-cta" href="/recipes">
            Browse Recipes
          </Link>
        </div>
      </div>

      <div className="home-intro">
        <div className="divider-ornament">
          <span>✦</span>
        </div>
        <p className="home-intro-text">
          &quot;Cooking is the greatest gift you can give someone — it says I thought about you
          before you even arrived.&quot;
        </p>
      </div>

      <div className="home-body">
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Latest Recipes</h2>
            <Link className="section-link" href="/recipes">
              View All →
            </Link>
          </div>
          <div id="home-latest" className="recipe-grid">
            {latest.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        </section>

        <div className="about-strip">
          <div className="about-strip-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/churchill.jpg" alt="Churchill" className="about-photo" loading="lazy" />
          </div>
          <div className="about-strip-text">
            <p className="about-eyebrow">About Churchill</p>
            <h3>Hi, I&apos;m Churchill.</h3>
            <p>
              Over the years I&apos;ve been creating and cooking for my friends and family. I love
              to make meals for my people — and watching their faces light up is one of the best
              feelings in the world. My recipes are rooted in my Indian heritage, my own
              creativity, and a deep love for making vegan cooking exciting for everyone at the
              table.
            </p>
            <Link className="btn-outline" href="/about">
              Read My Story
            </Link>
          </div>
        </div>

        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Browse by Category</h2>
          </div>
          <div id="home-categories" className="categories-grid">
            {Object.entries(counts).map(([cat, count]) => (
              <Link key={cat} href={`/recipes?category=${cat}`} className="category-card">
                <div className="cat-icon">{categoryEmoji(cat)}</div>
                <div className="cat-name">{categoryLabel(cat)}</div>
                <div className="cat-count">
                  {count} recipe{count !== 1 ? "s" : ""}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <NewsletterSignup />

        <section className="social-follow-section">
          <div
            className="section-header"
            style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", gap: 8 }}
          >
            <h2 className="section-title">Follow Along</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", fontWeight: 300 }}>
              New recipes, techniques, and behind-the-scenes on social
            </p>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/churchscookout" target="_blank" rel="noreferrer" className="social-link social-link--instagram">
              <InstagramIcon /> Instagram
            </a>
            <a href="https://tiktok.com/@churchscookout" target="_blank" rel="noreferrer" className="social-link social-link--tiktok">
              <TikTokIcon /> TikTok
            </a>
            <a href="https://youtube.com/@churchscookout" target="_blank" rel="noreferrer" className="social-link social-link--youtube">
              <YouTubeIcon /> YouTube
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
