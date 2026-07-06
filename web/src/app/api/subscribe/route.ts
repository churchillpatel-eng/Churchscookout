import { NextResponse } from "next/server";

// ── Newsletter subscribe (Phase 2 stub) ──────────────────────────────
// Roadmap: persist to a durable store (Cloudflare KV / D1) or forward to an
// email service (Buttondown / ConvertKit). Kept as a stub so the contract
// and route exist; the live form currently stores signups on-device.
export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: "" }));

  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // TODO(phase-2): write to store / forward to ESP here.
  console.info(`[subscribe] would persist: ${email}`);

  return NextResponse.json({ ok: true, pending: true });
}
