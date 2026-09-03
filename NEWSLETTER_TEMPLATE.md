# Church's Cookout — Newsletter Template

A reusable template for the email newsletter that goes out to Kit subscribers.
Fill in the `[[PLACEHOLDERS]]`, then follow **Send via Kit** at the bottom.

Two versions live in the repo:
- **This file** — the copy/content template. Write here first.
- **`newsletter-template.html`** — the same thing, brand-styled, for pasting into
  Kit's **HTML/source** editor when you want the designed look. Copy your filled-in
  copy from here into the matching `[[PLACEHOLDERS]]` there.

Subscriber signup and the unsubscribe/address footer are already handled by Kit —
don't add either.

---

## Voice reminders (don't drift)
- **Hook first, then substance.** Lead with the payoff, not "Hi guys, today…".
- **Short sentences. Confident claims. First person.**
- Sound like the person who made the food, because you are.
- Good: *"This marinade took me 5 years to perfect."*
  Bad: *"In this newsletter I wanted to share a recipe I like."*

---

## Subject line + preview text

The subject earns the open; the preview text (the gray line after it in the inbox)
earns the read. Keep the subject under ~50 characters. Don't repeat the subject
word-for-word in the preview — extend it.

**Formula:** `[the payoff or the intrigue]` → preview `[the reason to keep reading]`

Examples (in voice):
- Subject: `The chicken I marinate overnight, every time`
  Preview: `Yogurt, sumac, and one spice most people skip.`
- Subject: `5 years to get this marinade right`
  Preview: `Here's exactly what changed — and the full recipe.`
- Subject: `Weeknight eggs, but make them a curry`
  Preview: `20 minutes, one pan, pantry spices you already own.`

- **Subject:** `[[SUBJECT_LINE]]`
- **Preview text:** `[[PREVIEW_TEXT]]`

---

## Body

**1. Hook** — one or two lines. The payoff, the claim, or the story's turn.

> `[[HOOK]]`

**2. The substance** — the story or the technique behind the food. This is the
part they can't get from a 30-second video. A short paragraph or two.

> `[[BODY]]`

**3. Featured recipe** — the recipe this issue points to.

- **Recipe:** `[[RECIPE_NAME]]`
- **Why it's worth it (one line):** `[[RECIPE_WHY]]`
- **Teaser:** `[[RECIPE_TEASER]]`
- **Link:** `https://churchscookout.com/recipes/[[RECIPE_SLUG]]`

**4. Call to action** — always send them to the full recipe:

> **Full recipe at churchscookout.com** → `https://churchscookout.com/recipes/[[RECIPE_SLUG]]`

**5. Optional second section** — a tip, a swap, a what's-next. Skip if it doesn't
earn its place.

> `[[OPTIONAL_SECTION]]`

**6. Sign-off** — first person, warm, short.

> — Churchill

---

## Send via Kit

1. Log in to **Kit** → **Broadcasts** (under Send/Grow) → **New Broadcast**.
2. Paste your content. For plain text, paste from the **Body** section above.
   For the designed version, open `newsletter-template.html`, fill its
   `[[PLACEHOLDERS]]`, copy the whole file, and paste it into Kit's
   **source / HTML** view (the `</>` or "Edit HTML" option in the editor).
3. Set the **Subject** and **Preview text** from the section above.
4. Choose **recipients** — all subscribers, or a specific tag/segment.
5. Send a **test email** to yourself and check it on phone + desktop.
6. **Preview**, then **Send** now or **Schedule**.

Kit automatically appends the required unsubscribe link and your mailing address —
you don't need to add them.
