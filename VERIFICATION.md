# PlastiCore ERP — FINAL MASTER QA Baseline

## Final master basis
This master package is based on the latest consolidated Machine Operator verified React/Vite package and retains the cumulative role-specific updates made through the role-by-role QA cycle.

## Roles audited
- Super Administrator — `admin / admin123`
- CEO / Executive — `ceo / ceo123`
- Plant Head — `planthead / plant123`
- Production Manager — `prodmanager / prod123`
- Production Planner — `planner / plan123`
- Store Manager — `store / store123`
- Quality Manager — `quality / quality123`
- Maintenance Manager — `maintenance / maint123`
- Sales Executive — `sales / sales123`
- Finance Manager — `finance / finance123`
- Machine Operator — `operator / operator123`

## Included capabilities
- Login gate before ERP shell access
- Role-based navigation/access
- Role-specific landing panels
- Role-specific Guide Tours
- Interactive demo action/modal layer
- Existing 20-phase ERP prototype
- Responsive desktop/tablet/mobile layout
- Control Tower, Analytics, AI and workflow modules
- Vercel/Vite configuration

## Role-specific Guide Tours
Dedicated role guides are included for:
- Super Administrator
- CEO / Executive
- Plant Head
- Production Manager
- Production Planner
- Store Manager
- Quality Manager
- Maintenance Manager
- Sales Executive
- Finance Manager
- Machine Operator

Each role guide uses the contextual guided-tour engine with highlighted elements, step counter, Next/Back/Skip/Finish, ESC/Enter/arrow-key navigation and responsive positioning.

## QA status
- Role-by-role source/module/permission audits: completed during the iterative QA cycle.
- JavaScript syntax checks: completed during the iterative QA cycle.
- React source was maintained as the Vite/React application.
- A clean production `npm install`/`npm run build` and exhaustive live-browser click-through could not be certified in the model execution environment because dependency installation/browser automation repeatedly timed out. This is intentionally disclosed rather than represented as a completed test.

## Deployment
For Vercel, use the repository root with Vite:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root
