# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server at http://localhost:3000 (hot reload)
- `npm run build` — production build into `build/`
- `npm test` — Jest + React Testing Library in interactive watch mode
- `npm test -- --watchAll=false src/components/Foo.test.js` — run a single test file once
- `npm run eject` — one-way; avoid

This is a Create React App project (`react-scripts` 5.0.1). No TypeScript, no custom webpack config, and no linter beyond CRA's built-in `react-app` ESLint config (lint errors surface in the dev console).

## Architecture

Single-page portfolio. `src/index.js` imports the global design system (`src/styles/theme.css`) and mounts `App`. `src/App.js` owns the theme state and composes the page as a fixed vertical stack: `Navbar` → `Hero` → `About` → `Skills` → `Experience` → `Projects` → `Contact` → `Footer`. There is no router — sections have `id`s (`about`, `skills`, `experience`, `work`, `contact`) and are reached via in-page anchor links; the Navbar uses an IntersectionObserver to highlight the active section.

**Design system via CSS custom properties.** `src/styles/theme.css` defines all design tokens (color, spacing, type scale, radii, shadows, glass) plus base styles and shared primitives (`.section`, `.section-eyebrow`, `.section-title`, `.glass`, `.btn`, `.chip`). Components consume `var(--token)` and these primitive classes — they do **not** hand-roll colors. Add or change a color/spacing value in one place here.

**Theming.** `App.js` keeps a `theme` state (`"dark"` | `"light"`, default dark, persisted to `localStorage` under `cw-theme`) and sets `data-theme` on the root `.app-root` div. The two theme blocks in `theme.css` (`[data-theme="dark"]` / `[data-theme="light"]`) swap the token values; components don't take a theme prop for styling. The only prop passed for theming is to `Navbar` (to render the correct toggle icon).

**Content lives in `src/components/data.js`.** Socials, contact info, stats, skill groups, experiences, projects, and the EmailJS config are all exported from this single module. Edit content here, not in the view components. The view components (Hero, About, Skills, Experience, Projects, Contact, Footer) are presentational and map over these arrays.

**One stylesheet per component**, under `src/components/css/`, all referencing the global tokens. Plain CSS, BEM-ish class names (e.g. `.timeline__card`), not CSS modules.

**Animations** use `framer-motion` with a small local `reveal` variant pattern (fade + slide on `whileInView`) defined at the top of each section component. Keep motion subtle and purposeful.

**Contact form** (`Contact.js`) sends via EmailJS (`@emailjs/browser`); config is in `EMAILJS_CONFIG` in `data.js` (the EmailJS public key is client-side by design).

**Projects modal** is a custom lightweight component in `Projects.js` (overlay + image gallery with keyboard nav and scroll lock) — not a third-party modal/carousel.

## Conventions and gotchas

- **Icons:** UI/glyph icons use `lucide-react`; brand/social and devicon glyphs use Font Awesome / devicon classes loaded via CDN in `public/index.html`. Fonts (Inter, JetBrains Mono) are also loaded there.
- **Project images** live in `public/assets/` and are referenced by absolute path (e.g. `/assets/softnova1.PNG`). Filenames are case-sensitive — match the existing casing (`.PNG` vs `.png`) exactly or images 404 in production.
- **Legacy libraries still in `package.json`** (MUI, Ant Design, Bootstrap, react-bootstrap, jQuery, styled-components) are no longer imported by any live component after the rebuild — they're tree-shaken out of the bundle but remain as dependencies. Prefer the design-system primitives over reintroducing them; they can be pruned from `package.json` in a future cleanup.
