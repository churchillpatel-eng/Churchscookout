"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/categories", label: "Categories" },
  { href: "/meal-planner", label: "Meal Planner" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // A nav link is active for its exact route, or for any child route
  // (so /recipes/paneer-tikka still highlights "Recipes").
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="top-bar">
        <span>
          Indian-inspired recipes with a modern twist &nbsp;•&nbsp;
          <a
            href="https://instagram.com/churchscookout"
            target="_blank"
            rel="noreferrer"
            className="topbar-link"
          >
            Follow on Instagram
          </a>
        </span>
      </div>

      <header>
        <Link href="/" className="header-logo" aria-label="Church's Cookout home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Church's Cookout" className="header-logo-svg" />
        </Link>

        <nav className="main-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-btn${isActive(link.href) ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="hamburger" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu">
          ☰
        </button>

        <nav className={`mobile-nav${mobileOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
