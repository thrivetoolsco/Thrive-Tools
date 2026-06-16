---
name: Vite SSR entry — inline all imports
description: Vite's SSR bundler silently drops re-exported modules imported via a separate file; all route imports must be inlined directly in entry-server.tsx.
---

## Rule
All page component imports in `client/src/entry-server.tsx` must be **inlined directly** in that file. Do NOT split them into a separate `ssr-routes.tsx` (or similar) that entry-server.tsx re-imports.

## Why
Vite's SSR build (`vite build --ssr`) uses a different module graph than the client build. When entry-server.tsx imports from `./ssr-routes`, Vite silently fails to include those re-exported components in the SSR bundle — the module transform count stays the same, the bundle size stays the same, and the compiled `SSR_ROUTE_COMPONENTS` object contains only the routes from the *previous* cached build. Clearing `node_modules/.vite`, `client/.vite`, and `dist` does NOT help; the root cause is the SSR bundler's module resolution, not caching.

## How to apply
- Keep one authoritative file: `client/src/entry-server.tsx`.
- Every new page component must be `import`-ed and added to `SSR_ROUTE_COMPONENTS` **in that file directly**.
- After any change to entry-server.tsx, run `npm run build` to regenerate `dist/entry-server.cjs`.
- Verify: `node -e "const m=require('./dist/entry-server.cjs'); console.log(Object.keys(m.SSR_ROUTE_COMPONENTS).length)"` — count should match the number of entries in the map.

## Also fixed alongside this
`express.static(distPath, { index: false })` — needed in `server/static.ts` so the `/` route is NOT intercepted by static file serving and instead falls through to the SSR middleware. Without `index: false`, Express serves `dist/public/index.html` directly for `/`, bypassing SSR entirely.
