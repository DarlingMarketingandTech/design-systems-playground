# FIGMA_ASSETS

## Connector status
The current Figma connector in this workspace requires a `fileKey` (or an interactive plan selection for generation) and does not expose direct global community search/export in this session.  
Attempted call: Figma `generate_asset` for dark SaaS bento references returned `Plan key is missing`.

To keep momentum, assets below were extracted from production-grade open-source libraries and normalized for the Darling MarTech v2 aesthetic (`zinc-950`, technical, restrained).

## 1) High-End SaaS UI / Bento Grid References

### Reference A: Untitled-style dark bento shell (mapped)
- Creator/source: Pattern mapping inspired by Untitled UI dashboard conventions.
- Local implementation target:
  - `rounded-xl` (`12px`) for primary bento cards
  - `border border-white/10` (`1px`) for technical panel edges
  - `p-6 md:p-8` for card rhythm
  - `bg-zinc-900/60 backdrop-blur-xl` for dark glass panel
  - `shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_40px_-24px_rgba(2,6,23,0.9)]`

### Reference B: Shadcn-style data card (mapped)
- Creator/source: Shadcn UI card patterns and dashboard block language.
- Local implementation target:
  - `rounded-lg` (`8px`) for dense data cards
  - `px-4 py-3` header/body compact spacing
  - `text-xs uppercase tracking-[0.14em]` for metadata labels
  - `ring-1 ring-inset ring-white/10`

### Reference C: Premium SaaS metric rail (mapped)
- Creator/source: Modern SaaS telemetry dashboard patterns.
- Local implementation target:
  - `grid gap-4 md:grid-cols-2 xl:grid-cols-3`
  - `min-h-[18rem]` for visual balance in masonry-like layouts
  - `hover:border-sky-300/30 hover:bg-zinc-900/70 transition-colors duration-300`

## 2) Technical Iconography

### Extracted icons
- `public/assets/icons/terminal.svg`
- `public/assets/icons/circuitry.svg`
- `public/assets/icons/database.svg`
- `public/assets/icons/server.svg`
- `public/assets/icons/node-network.svg`
- `public/assets/icons/revenue-chart.svg`

### Attribution
- Creator: Lucide (`lucide-static` v1.8.0, ISC License)
- Source:
  - `https://unpkg.com/lucide-static/icons/terminal.svg`
  - `https://unpkg.com/lucide-static/icons/cpu.svg`
  - `https://unpkg.com/lucide-static/icons/database.svg`
  - `https://unpkg.com/lucide-static/icons/server.svg`
  - `https://unpkg.com/lucide-static/icons/network.svg`
  - `https://unpkg.com/lucide-static/icons/chart-no-axes-combined.svg`

### Tailwind mapping
- Stroke weight normalized in files: `stroke-width="1.5"`
- Recommended display classes:
  - `h-4 w-4 text-zinc-300`
  - `group-hover:text-sky-300 transition-colors`

## 3) Textures, Overlays, Patterns

### Extracted/created textures
- `public/assets/textures/noise-film.svg`
- `public/assets/textures/dot-grid-8.svg`
- `public/assets/textures/dot-grid-16.svg`
- `public/assets/textures/blueprint-grid.svg`
- `public/assets/textures/measurement-callouts.svg`

### Attribution
- Creator: Darling MarTech v2 local asset pack (this repository run)
- Use notes:
  - `noise-film.svg`: full-resolution grain layer (2048x2048), transparent alpha
  - `dot-grid-8.svg` / `dot-grid-16.svg`: tileable matrix patterns
  - `blueprint-grid.svg`: 16px major/minor technical grid
  - `measurement-callouts.svg`: HUD/callout overlay motif

### Tailwind mapping
- `bg-[url('/assets/textures/dot-grid-8.svg')] bg-[length:16px_16px]`
- `bg-[url('/assets/textures/dot-grid-16.svg')] bg-[length:32px_32px]`
- `bg-[url('/assets/textures/blueprint-grid.svg')] bg-[length:128px_128px]`
- Overlay layer: `absolute inset-0 pointer-events-none opacity-20 mix-blend-screen`

## 4) 3D Primitives & Glassmorphism

### Extracted/created 3D primitives
- `public/assets/3d/wireframe-sphere.svg`
- `public/assets/3d/glass-cube.svg`
- `public/assets/3d/glowing-conduit-node.svg`

### Attribution
- Creator: Darling MarTech v2 local asset pack (this repository run)

### Tailwind mapping
- Placement:
  - `absolute -z-10 opacity-60`
  - `max-w-[38rem] w-[min(72vw,38rem)]`
- Glassmorphism panels to pair with assets:
  - `bg-zinc-900/45 backdrop-blur-2xl`
  - `border border-white/10`
  - `shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_24px_56px_-32px_rgba(14,165,233,0.35)]`

## Suggested Tailwind token presets for this repo

Use these as consistent utilities/tokens across `/proof` and `/projects`:

```css
/* app globals / @theme */
--radius-card: 12px;
--radius-dense: 8px;
--stroke-thin: 1px;
--stroke-icon: 1.5px;
--panel-border: rgb(255 255 255 / 0.10);
--panel-bg: rgb(24 24 27 / 0.52);
--shadow-panel: 0 1px 0 0 rgb(255 255 255 / 0.06) inset, 0 20px 40px -24px rgb(2 6 23 / 0.9);
```

Mapped utilities:
- `rounded-[var(--radius-card)]`
- `rounded-[var(--radius-dense)]`
- `border-[var(--stroke-thin)] border-[var(--panel-border)]`
- `bg-[var(--panel-bg)]`
- `shadow-[var(--shadow-panel)]`
