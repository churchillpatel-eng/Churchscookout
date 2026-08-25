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
      // Submit straight to the Kit (ConvertKit) form so Kit handles the
      // subscription and double opt-in confirmation email. Multipart form data
      // with `email_address` mirrors Kit's own embed and needs no preflight.
      const body = new FormData();
      body.append("email_address", value);
      const res = await fetch("https://app.kit.com/forms/9844914/subscriptions", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
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
