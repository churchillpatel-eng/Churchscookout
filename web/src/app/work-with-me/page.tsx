import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Partner with Church's Cookout — authentic Indian-inspired food content for brands reaching an engaged cooking audience.",
};

export default function WorkWithMePage() {
  return (
    <div>
      <div className="wwm-hero">
        <p className="hero-eyebrow">Partner with Church&apos;s Cookout</p>
        <h2>Work With Me</h2>
        <p className="wwm-hero-sub">
          Authentic Indian-inspired food content for brands who want to reach a deeply engaged
          cooking audience.
        </p>
      </div>
      <div className="wwm-body">
        <section className="wwm-section">
          <h3>The Audience</h3>
          <p>
            Church&apos;s Cookout speaks to home cooks who care about bold flavors, quality
            ingredients, and real technique. The audience skews toward food-curious millennials and
            the South Asian diaspora — people who cook seriously and buy the ingredients and tools
            to do it right.
          </p>
          <div className="wwm-stats">
            <div className="wwm-stat">
              <span className="stat-value">Indian-Inspired</span>
              <span className="stat-label">Niche</span>
            </div>
            <div className="wwm-stat">
              <span className="stat-value">4%+</span>
              <span className="stat-label">Engagement Rate</span>
            </div>
            <div className="wwm-stat">
              <span className="stat-value">Multi-Platform</span>
              <span className="stat-label">Instagram · TikTok · YouTube</span>
            </div>
          </div>
        </section>
        <section className="wwm-section">
          <h3>Content Formats</h3>
          <div className="wwm-formats">
            <div className="wwm-format-card">
              <div className="wwm-format-icon">📱</div>
              <h4>Short-Form Video</h4>
              <p>
                Instagram Reels and TikTok videos (30–60 seconds). High reach, authentic
                integration of your product into a real recipe.
              </p>
            </div>
            <div className="wwm-format-card">
              <div className="wwm-format-icon">🎬</div>
              <h4>YouTube Integration</h4>
              <p>
                Dedicated segment or organic mention in long-form recipe videos (8–15 min). Highest
                engagement and purchase intent.
              </p>
            </div>
            <div className="wwm-format-card">
              <div className="wwm-format-icon">📧</div>
              <h4>Newsletter Feature</h4>
              <p>
                Sponsored mention in the weekly Church&apos;s Cookout email to a curated subscriber
                list of home cooking enthusiasts.
              </p>
            </div>
            <div className="wwm-format-card">
              <div className="wwm-format-icon">🌐</div>
              <h4>Recipe Integration</h4>
              <p>
                Your product featured as a key ingredient in a dedicated recipe on
                churchscookout.com, with permanent SEO value.
              </p>
            </div>
          </div>
        </section>
        <section className="wwm-section">
          <h3>Past &amp; Current Partners</h3>
          <p className="wwm-partners-placeholder">
            Sponsorship partnerships launching soon. Reach out to get in at the ground level — early
            partners receive preferred rates and priority placement.
          </p>
        </section>
        <section className="wwm-section wwm-contact-section">
          <h3>Get in Touch</h3>
          <p>
            Send me a message and I&apos;ll get back to you within 48 hours with a media kit and
            partnership options.
          </p>
          <a
            href="mailto:churchill.patel@gmail.com?subject=Partnership%20Inquiry%20—%20Church's%20Cookout"
            className="btn-primary wwm-email-btn"
          >
            📩 Email Me Directly
          </a>
          <p className="wwm-contact-note">
            Or reach out on{" "}
            <a
              href="https://instagram.com/churchscookout"
              target="_blank"
              rel="noreferrer"
              className="wwm-link"
            >
              Instagram DM
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
