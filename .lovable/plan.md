
## Goal
Introduce a second color palette as an alternative theme. The current blue/purple/pink look stays as the default. A toggle lets the user switch between the two palettes, and the choice applies across every page (sidebar, header, buttons, cards, gradient background, tinted tiles, etc.) and persists across reloads.

## Palette choices
- **Theme A — "Aurora" (default, current)**: blue-purple-pink gradient background, blue-600 brand, existing gray text scale and tints. No visual change.
- **Theme B — "Ember" (new alternative)**: warm palette to contrast Aurora.
  - Background gradient: soft peach → warm rose → amber
  - Brand: deep amber/orange (e.g. `#ea580c`)
  - Accent: teal for balance
  - Same gray text scale, same glass surfaces, same sticky-note colors (kept neutral so bulletin board still reads well)

If you'd prefer a different second palette (e.g. emerald/teal, monochrome dark, navy trust), tell me and I'll swap Ember for that.

## How the switch works
1. A `ThemeProvider` at the root sets `data-theme="aurora"` or `data-theme="ember"` on `<html>`, reading/writing `localStorage` key `dashboard-theme`.
2. All theme-specific values move to CSS custom properties in `src/styles.css`:
   - `--brand`, `--brand-hover`, `--bg-gradient`, `--tile-tint-*`, etc.
   - Two blocks: `[data-theme="aurora"] { … }` and `[data-theme="ember"] { … }`.
3. Components that currently use hardcoded Tailwind color classes (`bg-blue-600`, `from-blue-50 via-purple-50 to-pink-50`, `text-blue-600`, quick-access tile tints) are swapped to reference these CSS vars via small utility classes (e.g. `bg-[var(--brand)]`) or existing semantic classes. No structural/JSX changes.
4. A **Theme Switcher** UI is added:
   - Entry point: inside the user menu (avatar dropdown) as a new item **"Appearance"** with two swatch options (Aurora / Ember). Click applies instantly.
   - Also surfaced on `/design-system` at the top as a live toggle so the reference page previews both palettes.

## Files touched
- `src/styles.css` — add `[data-theme="…"]` variable blocks
- `src/components/ThemeProvider.tsx` — new, provides context + persistence
- `src/components/ThemeSwitcher.tsx` — new, swatch toggle used in UserMenu and design system
- `src/routes/__root.tsx` — wrap app with `ThemeProvider`
- `src/components/dashboard/UserMenu.tsx` — add Appearance entry
- `src/routes/design-system.tsx` — add live theme toggle at top
- Component color swaps (background gradient, brand buttons/links, quick-access tile tints, sidebar active state) in: `src/routes/index.tsx`, `Sidebar.tsx`, `Header.tsx`, `QuickAccess.tsx`, `StatsRow.tsx`, `login.tsx`, and any other spot using the blue/purple/pink literals

## Out of scope
- No dark mode (both palettes are light). Say the word if you want a dark variant too.
- No changes to layout, content, or component structure.
- `DESIGN_SYSTEM.md` will get a short "Theming" section noting the two palettes and the CSS vars.

Confirm the plan (and the Ember choice, or name a different second palette) and I'll implement.
