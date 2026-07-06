import Link from "next/link";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/SocialIcons";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <Link href="/" className="footer-logo" aria-label="Church's Cookout home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icon.svg" alt="Church's Cookout" className="footer-logo-svg" />
        </Link>
        <p className="footer-tagline">recipes &nbsp;•&nbsp; stories &nbsp;•&nbsp; flavor</p>
        <div className="footer-social">
          <a href="https://instagram.com/churchscookout" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
            <InstagramIcon size={20} />
          </a>
          <a href="https://tiktok.com/@churchscookout" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="TikTok">
            <TikTokIcon size={20} />
          </a>
          <a href="https://youtube.com/@churchscookout" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="YouTube">
            <YouTubeIcon size={20} />
          </a>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/meal-planner">Meal Planner</Link>
          <Link href="/about">About</Link>
        </div>
        <p className="footer-copy">&copy; 2026 Church&apos;s Cookout. Made with love.</p>
      </div>
    </footer>
  );
}
