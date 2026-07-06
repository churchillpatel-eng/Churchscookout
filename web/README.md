# Church's Cookout — web

Next.js (App Router) rebuild of the Church's Cookout site. Each recipe is a
statically generated, crawlable page with Recipe JSON-LD — the foundation for
SEO-driven discovery.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (SSG recipe pages)
npm start          # serve the production build
```

## Structure

```
src/
├── app/                     # routes (App Router)
│   ├── layout.tsx           # header, footer, fonts, global metadata
│   ├── page.tsx             # home
│   ├── recipes/
│   │   ├── page.tsx         # all recipes (search + filter)
│   │   └── [slug]/page.tsx  # recipe detail — SSG + JSON-LD
│   ├── categories/page.tsx
│   ├── meal-planner/page.tsx
│   ├── about/page.tsx
│   ├── work-with-me/page.tsx
│   ├── admin/page.tsx       # recipe builder → paste into data/recipes.ts
│   ├── api/subscribe/route.ts  # newsletter endpoint (Phase 2 stub)
│   ├── legacy.css           # ported design system (do not restyle here)
│   └── globals.css          # app-level overrides on top of legacy.css
├── components/              # presentational + interactive UI
├── data/
│   ├── recipes.ts           # ← source of truth for recipes
│   └── categories.ts        # category + dietary metadata
├── lib/                     # domain logic (framework-free, unit-testable)
│   ├── recipes.ts           # accessors
│   ├── scaling.ts           # serving scaler / amount parsing
│   ├── shopping-list.ts     # ingredient aggregation + aisle grouping
│   └── storage.ts           # SSR-safe localStorage hook
└── types.ts
```

## Adding a recipe

Append an object to `RECIPES` in `src/data/recipes.ts`, or use `/admin` to
build one and paste the generated object. Follow the conventions in the file
header (Title Case items, unicode fractions, unique `slug`).

## Roadmap (not in this build)

- **Phase 1** — already here: SSG recipe pages + JSON-LD.
- **Phase 2** — wire `/api/subscribe` to a durable store or email service so
  signups are owned (currently stored on-device).
- **Phase 3** — Git-based CMS (Decap/Sanity) so recipes are authored in a UI
  that commits to the repo.
- **Phase 4** — privacy-friendly analytics + sponsor inquiry pipeline.

Images in `public/` are already hand-optimized; swapping to `next/image` is a
straightforward future enhancement.
