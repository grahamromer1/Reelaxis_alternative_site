# Reel Axis Alternative Site

Marketing site for Reel Axis focused on **AI implementation and managed AI operations for SMBs**.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)

## Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                     # App Router pages (one folder per route)
    page.tsx               # Home
    what-we-build/
    managed-ai-operations/
    examples/
    reel-axis-vs-diy/
    about/
    contact/
    ai-employee/           # Optional: managed AI operator concept
    layout.tsx             # Nav + footer shell, fonts, metadata
    globals.css            # Tailwind v4 theme tokens + base styles
  components/              # Reusable UI (Hero, CTAButton, ComparisonTable, ...)
  data/                    # Editable content as typed arrays
```

## Content structure

Primary page content and reusable data live in `src/data` so copy can be edited
without touching components:

- `navigation.ts` — nav + footer links and the primary CTA
- `businessFunctions.ts` — the seven business functions and their workflows
- `workflows.ts` — offer-path steps, managed-ops list, platform tools, proof previews
- `caseStudies.ts` — example/anonymized case study cards
- `comparison.ts` — Reel Axis vs DIY comparison rows

## Positioning

The site positions Reel Axis as a practical AI implementation partner for SMBs,
with strength in the Claude / Anthropic ecosystem but platform-agnostic
implementation across modern AI and business tools.

## TODOs left in the code

Search the repo for `TODO:` to find placeholders to revisit:

- **Partner-program language** (`src/app/page.tsx`) — only insert "Official Claude
  Partner"-style wording if/when verified and approved.
- **Contact form submission** (`src/components/ContactForm.tsx`) — currently a
  front-end placeholder; wire to a backend / CRM / form provider.
- **Contact email** (`src/app/contact/page.tsx`) — replace the placeholder address.
- **Social links** (`src/components/Footer.tsx`) — replace placeholders with real URLs.
- **Real case studies** (`src/app/examples/page.tsx`) — replace example cards with
  approved client results when available.
```
