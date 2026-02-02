# Tab Bar 1

A UI animation project focused on high-fidelity interaction design and motion prototypes.

## Stack

- **Next.js 15** + React + TypeScript
- **Tailwind CSS** — styling
- **Base UI** — unstyled, accessible primitives
- **Motion** (Framer Motion) — primary animation library
- **react-spring** — spring-based interactions

## Design Tokens

Design tokens live in `src/design-tokens/` and are structured to map from Figma styles:

- `index.ts` — Source of truth (colors, typography, spacing, radius, shadows, motion)
- `css-vars.ts` — Flattens tokens to CSS custom properties
- `motion.ts` — Motion/spring presets derived from tokens

Update `src/design-tokens/index.ts` when syncing from Figma variables.

## MCP-Ready Interaction Handlers

Components use `InteractiveElement` and `InteractionHandlers` types so MCP server hooks can be wired to:

- `onClick`
- `onHoverStart` / `onHoverEnd`
- `onScrollIntoView`
- `onDragStart` / `onDrag` / `onDragEnd`
- `onScroll`

See `src/types/interactions.ts` and `src/components/InteractiveElement.tsx`.

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build
```
