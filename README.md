# PlastiCore ERP — React/Vite Login-Fixed Demo

Tech Tarn demo for the PlastiCore ERP plastics & polymers solution.

## Login
The demo opens on authentication. Demo credentials are embedded for demonstration only.

- admin / admin123 — Super Administrator — full access
- ceo / ceo123 — CEO / Executive
- planthead / plant123 — Plant Head
- prodmanager / prod123 — Production Manager
- planner / plan123 — Production Planner
- store / store123 — Store Manager
- quality / quality123 — Quality Manager
- maintenance / maint123 — Maintenance Manager
- sales / sales123 — Sales Executive
- finance / finance123 — Finance Manager
- operator / operator123 — Machine Operator

## Important fix
The previous build went blank immediately after login because the embedded ERP script executed `Object.assign(titles, ...)` before the `titles` constant had been initialized. The assignments are now executed only after `titles` and all phase title maps have been declared.

React StrictMode was also removed from the entry point because the compatibility shell mounts a legacy DOM application and registers global event listeners; StrictMode's development effect replay is undesirable for that architecture.

## Vercel
Use the repository root with:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: default

The included `vercel.json` provides the SPA rewrite.

## Demo security
This is a front-end demo. Credentials are not secure production authentication. A production ERP should use a backend/API, hashed passwords, server-side authorization, and secure sessions/tokens.

## Final verification performed
The embedded ERP bundle was executed in a headless Chromium test harness and checked panel-by-panel:
- 144 navigation panels rendered successfully.
- 74 navigation targets exposed by inner module/workflow cards rendered successfully.
- 83 inner module/action buttons were exercised with zero click exceptions.
- Product Specifications, BOM & Formula Versions, and Quality Parameters table argument bugs were corrected.
- Guide Tour was reconnected to the React-executed bundle and smoke-tested.
- Executive/Finance `analytics` role references were corrected to the actual `analyticsHub` panel.
- Responsive smoke checks passed at 390px, 768px and 1440px for representative dashboards/modules with no detected horizontal page overflow.
- React TSX syntax was transpile-checked with zero TypeScript compiler diagnostics.

This verification is source/runtime smoke testing of the prototype bundle. It is not a production security audit.
