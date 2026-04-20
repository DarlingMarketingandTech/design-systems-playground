# Darling MarTech v2 Design Systems Playground

A Next.js playground for designing high-end Darling MarTech v2 templates and reusable motion components before production merge.

- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- pnpm
- Framer Motion
- React Three Fiber / Drei / Three.js
- Radix UI / shadcn-style headless primitives
- Lucide React

## Initialization Commands

```bash
pnpm create next-app@latest design-systems-playground --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd design-systems-playground
pnpm add framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
pnpm add @react-three/fiber @react-three/drei three
pnpm add -D @eslint/eslintrc
pnpm add -D @types/three
```

## Phase 2 Components

- `GrainOverlay`, `ParticleNetwork`, and `SystemCore3D` provide the global texture and route-scoped immersive visual layers.
- `DataConduit`, `BentoGrid`, `CountUp`, `SystemDiffToggle`, and `GlowingIcon` are the high-interaction primitives for system diagrams, proof metrics, and teardown states.

## Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```
