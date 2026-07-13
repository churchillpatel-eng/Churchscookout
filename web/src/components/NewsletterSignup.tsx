"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "done" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value || status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <p className="newsletter-eyebrow">New recipes every two months</p>
          <h3>Join the Cookout</h3>
          <p>
            Get a new recipe every two months — plus tips, techniques, and the stories behind the
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
            disabled={status === "loading"}
          />
          <button type="submit" className="btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Joining…" : "Subscribe"}
          </button>
        </form>
        {status === "done" && (
          <p className="newsletter-success" style={{ display: "block" }}>
            🎉 You&apos;re in! Check your inbox to confirm your subscription.
          </p>
        )}
        {status === "error" && (
          <p className="newsletter-success" style={{ display: "block", color: "var(--accent)" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
