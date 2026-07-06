"use client";

import { useState } from "react";
import { readStore } from "@/lib/storage";

// Phase 0: signups are stored on-device so the form works end to end.
// Phase 2 (roadmap): POST to /api/subscribe backed by a real email service.
export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;

    const subs = readStore<string[]>("cc_subscribers", []);
    if (!subs.includes(value)) {
      subs.push(value);
      try {
        window.localStorage.setItem("cc_subscribers", JSON.stringify(subs));
      } catch {
        /* non-fatal */
      }
    }

    setEmail("");
    setDone(true);
    setTimeout(() => setDone(false), 5000);
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <p className="newsletter-eyebrow">Free weekly recipes</p>
          <h3>Join the Cookout</h3>
          <p>
            Get one new recipe every week — plus tips, techniques, and the stories behind the
            food. No spam, ever.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
        {done && (
          <p className="newsletter-success" style={{ display: "block" }}>
            🎉 You&apos;re in! First recipe lands in your inbox this week.
          </p>
        )}
      </div>
    </section>
  );
}
