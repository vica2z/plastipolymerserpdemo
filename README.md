# PlastiCore ERP — React Super Administrator FINAL

Tech Tarn · ERP Solution for Plastics & Polymers Industry

## What's included
- React 18 + Vite demo app
- Login-first authentication with role-based demo users
- Super Administrator full access
- 20 ERP phases / 144 panels
- Interactive Super Admin action layer
- Demo CRUD/action modal for add/create/edit/save/approve/issue/transfer/review/export and workflow actions
- SessionStorage demo record persistence
- Responsive desktop/tablet/mobile UI
- Guide Tour
- Vercel SPA rewrite configuration

## Super Administrator demo login
- User ID: `admin`
- Password: `admin123`

## Verification performed
- 144 / 144 ERP panels rendered successfully in a headless Chromium smoke test
- 275 / 275 actionable inner-module buttons opened and completed their demo action flow
- 0 action failures
- 0 JavaScript page errors during the smoke test
- Role/workflow/configuration/AI/control-tower/mobile modules included in the verification

## Vercel
Framework: Vite
Build Command: `npm run build`
Output Directory: `dist`
Root Directory: repository root

This is a prototype/demo authentication layer. Production ERP security should use a backend, hashed passwords, server-side authorization and secure sessions/tokens.

CEO verification note: CEO / Executive access includes Orders because the Executive Dashboard's View Orders action routes to the Orders module.
