# PlastiCore ERP — React + Vite

A responsive Plastics & Polymers Industry ERP prototype covering Phases 1–20.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub

Create a repository and push this project:

```bash
git init
git add .
git commit -m "Initial PlastiCore ERP React prototype"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel

Import the GitHub repository into Vercel.

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` already contains these settings.

## Architecture

The original validated ERP renderer is mounted inside a React component so all 20 existing
phases, navigation, responsive behavior and walkthrough interactions are preserved while
the application is packaged as a standard Vite/React project.
## Demo authentication

The React demo now opens on a login screen. No ERP panel is mounted until a valid demo session is created.
Sessions are stored in `sessionStorage` and can be ended with the **Logout** button.

| Role | User ID | Password | Landing panel |
|---|---|---|---|
| Super Administrator | `admin` | `admin123` | Executive Dashboard |
| CEO / Executive | `ceo` | `ceo123` | Executive Dashboard |
| Plant Head | `planthead` | `plant123` | Plant Control Tower |
| Production Manager | `prodmanager` | `prod123` | Production Dashboard |
| Production Planner | `planner` | `plan123` | Planning Dashboard |
| Store Manager | `store` | `store123` | Inventory Dashboard |
| Quality Manager | `quality` | `quality123` | Quality Dashboard |
| Maintenance Manager | `maintenance` | `maint123` | Maintenance Dashboard |
| Sales Executive | `sales` | `sales123` | CRM Dashboard |
| Finance Manager | `finance` | `finance123` | Finance Dashboard |
| Machine Operator | `operator` | `operator123` | Operator Mobile |

The Administrator demo has full prototype access. Other demo users start in their role-specific workspace and receive a role-focused navigation set.

