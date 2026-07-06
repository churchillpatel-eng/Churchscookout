# Church's Cookout

Churchill's food-creator brand: Indian-inspired recipes with a modern twist,
vegan-friendly. The site is the hub of an audience → sponsorship business
(target: 1 sponsorship/month). Strategy lives in GROWTH_ROADMAP.md; filming
schedule in VIDEO_CONTENT_CALENDAR.md.

## Stack & layout
- Static single-page site, vanilla HTML/CSS/JS — no framework, no build step.
  Views toggle via `showView()` in app.js.
- All recipe data is the `RECIPES` array in app.js. New permanent recipes get
  pasted there (the admin panel export produces the object).
- Local preview: `npx serve -l 4321 .`

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
