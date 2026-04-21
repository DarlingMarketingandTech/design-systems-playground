# Hero Three.js: “Signal Core / Cursor Orbit” (Design Spec)

Date: 2026-04-21  
Repo: `C:\dev\design-systems-playground`  
Owner: Codex

## Goal

Add a premium, interactive Three.js hero visual that matches the site’s current dark/technical theme (zinc UI, sky accents, grid + grain), with:

- Cursor + scroll responsiveness (noticeable, but not distracting)
- Strong readability (copy always wins)
- Performance-safe defaults (no heavy postprocessing)
- Accessibility-safe behavior (reduced-motion support, does not hijack input)

## Where It Lives

- Primary: Homepage hero (`src/app/page.tsx`)
- Optional follow-on: A smaller/toned-down variant on `/process` hero later (same component with props)

## Visual Language

“Signal core” = a small set of clean primitives that look like a system diagram:

- A wireframe core polyhedron (neutral slate)
- 2–3 orbit paths (thin sky lines)
- A sparse particle shell (sky points, low opacity)
- A subtle radial wash behind it (CSS gradient overlay, not bloom)

No noisy glow gimmicks, no brand-incongruent neon, no logo-wall vibe.

## Interaction Design

### Cursor (desktop / fine pointer)

- Subtle “magnetic” parallax:
  - Orbits precess slightly based on cursor position within the hero container
  - Core rotates with a damped offset (not 1:1 tracking)
- Interaction should not block links or selection:
  - Visual layer is `aria-hidden`
  - Pointer events never prevent UI interaction (no clickable 3D)

### Scroll (all devices)

- Scroll progress biases the core rotation and orbit phase:
  - Adds “we’re moving through a system” feeling
  - Should be stable and deterministic (no jitter)

### Reduced Motion

- If user prefers reduced motion:
  - No continuous animation loop
  - Only minimal static pose + maybe a tiny, non-moving composition

## Performance Constraints

- Limit geometry count and draw calls:
  - No postprocessing
  - Avoid heavy shaders; use `MeshBasicMaterial` / simple line materials
- Adaptive render loop:
  - Full animation only on desktop + no reduced-motion
  - Prefer “event-driven” renders (invalidate on cursor/scroll) where possible
- Constrain DPR:
  - Cap at ~1.5 (already used in existing components)

## Implementation Notes (Planned)

- Build a new component (or upgrade existing) using React Three Fiber + Drei:
  - Container ref measures cursor position without pointer-capturing
  - Scroll progress computed via `window.scrollY / (docHeight - innerHeight)` and smoothed
  - Damped cursor values (simple spring-ish interpolation in `useFrame`)
- Replace current homepage `SystemCore3D` usage with the upgraded version.

## Success Criteria

- Homepage hero feels more “alive” immediately (cursor + scroll)
- Copy stays readable on desktop and mobile
- Respects reduced-motion
- `pnpm lint`, `pnpm typecheck`, `pnpm build` pass

