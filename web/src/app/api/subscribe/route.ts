import { NextResponse } from "next/server";

// Allow the legacy static site (and the app itself) to call this endpoint
// cross-origin. This is a public newsletter signup — Kit handles verification
// and double opt-in — so a permissive origin is acceptable here.
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
} as const;

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

// ── Newsletter subscribe → Kit (formerly ConvertKit) ─────────────────
// Posts to the form "subscribe" endpoint so Kit applies the form's opt-in
// and welcome-email settings. Configure two values (see web/README →
// "Newsletter"); set them as encrypted Cloudflare secrets for production and
// in web/.env.local for `next dev`:
//   KIT_API_KEY  — Kit → Settings → Advanced → API → "API Key"
//   KIT_FORM_ID  — numeric id of the Kit form subscribers are added to
export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: "" }));

  if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    return NextResponse.json(
      { error: "The newsletter isn’t set up yet — check back soon." },
      { status: 503, headers: CORS_HEADERS },
    );
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again in a moment." },
        { status: 502, headers: CORS_HEADERS },
      );
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 502, headers: CORS_HEADERS },
    );
  }
}
