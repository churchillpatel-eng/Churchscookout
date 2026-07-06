# Church's Cookout

Churchill's food-creator brand: Indian-inspired recipes with a modern twist,
vegan-friendly. The site is the hub of an audience → sponsorship business
(target: 1 sponsorship/month). Strategy lives in GROWTH_ROADMAP.md; filming
schedule in VIDEO_CONTENT_CALENDAR.md.

## Stack & layout
Two codebases live here during the migration:
- **`web/` — the production app (Next.js, App Router, TypeScript).** Each recipe
  is an SSG page with Recipe JSON-LD. Recipe data is the `RECIPES` array in
  `web/src/data/recipes.ts`; `/admin` builds an object to paste there. Domain
  logic (scaling, shopping list) lives framework-free in `web/src/lib/`. The
  ported design system is `web/src/app/legacy.css` (don't restyle it there).
  Run: `cd web && npm install && npm run dev`. See `web/README.md`.
- **root (legacy) — the original static single-page site** (vanilla HTML/CSS/JS,
  `index.html` + `app.js`, views toggle via `showView()`). Still live until the
  Next.js app is deployed and cut over. Preview: `npx serve -l 4321 .`.

Design system, voice, and recipe-data conventions below apply to BOTH.

## Done = live
A finished change is committed AND pushed to `origin master` — that publishes
the site. Commit messages: short, imperative, specific, matching history
("Add 1 tsp Paprika to Chicken Burger recipe").

## Recipe data conventions (non-negotiable)
- Ingredient `item` names in Title Case: "Fresh Mint Leaves, Finely Chopped".
- Prep style goes in the item name after a comma ("Shallot, Finely Minced"),
  never in the amount field.
- Reuse the exact ingredient spelling already in RECIPES (search first) —
  the shopping list dedupes by exact name match, so one stray variant breaks it.
- Amounts use unicode fractions (½, ¼, ⅛), never "1/2".
- Long ingredient lists use `{ section: "Name" }` divider entries.
- Steps are `{ text, timer }` objects; timer format "20 min".
- Every recipe needs: `dietary` (meat/vegetarian/vegan), a `category` from
  CATEGORY_META, and an emoji.

## Design system (don't drift)
- Colors only from the `:root` variables in style.css — accent is terracotta
  `#c8703a`. Never introduce a new color, font, or external library.
- Fonts: Playfair Display (headings), Lato (body).
- master_style_guid.md does NOT apply here — this project has its own design.

## Voice — all public copy (site, captions, newsletter)
- Punchy creator voice: hook first, then substance. "This marinade took me
  5 years to perfect." — never "Hi guys, today I'm making...".
- Short sentences. Confident claims. First person.
- Social captions end with "Full recipe at churchscookout.com" + the hashtag
  block from VIDEO_CONTENT_CALENDAR.md.
