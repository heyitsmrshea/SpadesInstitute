# Spades Institute Facelift

This Astro + Tailwind mockup mirrors the current Spades Institute site architecture while applying a clean "modern tech nonprofit" look and feel. The code keeps content in JSON data files, reusable components, and a consistent spacing/typography system.

## Getting started

```bash
cd SpadesInstitute
npm install
npm run dev
```

The site runs at `http://localhost:3000` (Astro dev server). Tailwind is configured via the official integration and styling lives inside the `src/components`/`src/pages` folder structure.

## Structure

- `src/components`: navigation, hero, layout, cards, grids, and footer.
- `src/data`: engagement and people data so copy can be updated without touching the layout.
- `src/pages`: `index`, `about`, `engagements`, `people`, and `connect` pages match the existing navigation.
- `src/styles/global.css`: shared Tailwind layers and base theme overrides.

Feel free to iterate on the tokens in `tailwind.config.cjs` or add new components for additional sections.
