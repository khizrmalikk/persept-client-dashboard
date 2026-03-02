# Persept Client Dashboard

White-label AI agent management dashboard for hotel clients. Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Features

- **Overview Dashboard** — KPI cards, message volume charts, agent activity breakdown
- **Activity Logs** — Filterable table of all agent actions
- **Performance Analytics** — Per-agent metrics with charts (Sarah, Marcus, Olivia, Alex)
- **Escalations** — Queue of messages requiring human attention
- **Settings** — Integration status, agent configuration
- **Authentication** — Email/password login via NextAuth.js
- **White-Label** — Configurable branding via environment variables
- **Responsive** — Mobile, tablet, and desktop layouts

## Quick Start

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Copy environment config
cp .env.example .env

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Demo credentials**: `admin@demo.com` / `admin123`

## White-Label Configuration

Set these environment variables to customize per client:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_CLIENT_NAME` | Hotel/client name | Demo Hotel |
| `NEXT_PUBLIC_CLIENT_LOGO_URL` | Logo image path | (fallback icon) |
| `NEXT_PUBLIC_CLIENT_PRIMARY_COLOR` | Primary brand color | #1E40AF |
| `NEXT_PUBLIC_CLIENT_SECONDARY_COLOR` | Secondary color | #10B981 |

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Charts**: Recharts
- **Auth**: NextAuth.js
- **Database**: PostgreSQL + Prisma 7 (optional for Phase 1)
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx            # Overview dashboard
│   ├── login/              # Login page
│   ├── logs/               # Activity logs
│   ├── analytics/          # Performance analytics
│   ├── escalations/        # Escalation queue
│   ├── settings/           # Configuration
│   └── api/auth/           # NextAuth API routes
├── components/
│   ├── layout/             # Sidebar, Header, DashboardLayout
│   ├── dashboard/          # KPI cards, charts, agent status
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utilities, config, auth, prisma
└── types/                  # TypeScript type definitions
```

## Database Setup (Optional)

Phase 1 uses mock data. To connect a real database:

```bash
# Set DATABASE_URL in .env
npx prisma migrate dev --name init
npx prisma generate
```

## Deployment

```bash
npm run build
npm start
```

For Docker deployment, see the architecture doc.

## Development Phases

- [x] **Phase 1**: MVP Foundation (dashboard, auth, layout, mock data)
- [ ] **Phase 2**: Agent Integration (real API data, webhooks)
- [ ] **Phase 3**: Advanced Features (exports, user management, notifications)
- [ ] **Phase 4**: Polish & Deploy (Docker, documentation, first client)
