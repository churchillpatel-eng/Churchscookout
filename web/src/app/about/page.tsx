import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Churchill",
  description: "Cook. Creator. Storyteller. The story behind Church's Cookout.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="about-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/churchill.jpg" alt="Churchill" className="about-photo-lg" loading="lazy" />
        <h2>About Churchill</h2>
        <p className="about-hero-sub">Cook. Creator. Storyteller.</p>
      </div>
      <div className="about-content">
        <p>
          Over the years I&apos;ve been creating and cooking for my friends and family. I love to
          make meals for my people — and watching their faces light up is one of the best feelings
          in the world.
        </p>
        <p>
          Many of my recipes are rooted in things I learned from my parents, who were born and
          raised in India. Those bold, layered flavors are still found in everything I cook, just
          with my own spin on them.
        </p>
        <p>
          The other half of my recipes are dishes I&apos;ve created for my wife, who is Vegan. Over
          the last five years I&apos;ve learned that I can make vegetables exciting for everyone at
          the table.
        </p>
      </div>
    </div>
  );
}
