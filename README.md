# Local

A civic transparency site for one town/county: upcoming local election dates and ballot measures, plus a budget-execution view (did local government spend what it said it would).

This repo is the learning project for a PM → AI-assisted full-stack builder curriculum. See `docs/curriculum.md` for the full plan.

## Status

🚧 Just scaffolded — Week 1 hasn't started yet. Structure only, no app code yet. Real code gets built week by week, with Claude Code as the pair-programmer and a human reviewing every diff before it's committed.

## Scope (v1)

- One pilot town/county (not a nationwide aggregator — see `docs/curriculum.md` for why).
- Two data types: local election dates/ballot measures, and budget execution (spent-vs-planned).
- A local-media aggregation component is a deliberate later phase — not part of this build.

## Planned Stack

- **Frontend:** React (Vite) — `frontend/`
- **Backend:** Node.js + Express — `backend/` — also handles data ingestion and calls to the Claude API for document extraction
- **Database:** Supabase (Postgres) — election events, budget line items, and source/extraction metadata
- **AI extraction:** Claude API, called from the backend, to turn budget PDFs into structured data
- **Hosting:** Vercel (frontend) + Render/Railway (backend)

## Getting Started

Nothing to run yet. Once Week 1 scaffolds the frontend, this section will be replaced with real setup instructions (`npm install`, `npm run dev`, etc.).

## Working Agreement

- Every change goes through a feature branch and a pull request once we reach Week 6 — no direct pushes to `main` after that point.
- Claude Code proposes changes; a human reviews the diff before accepting. See `CLAUDE.md` for project-specific instructions given to Claude Code.
- Every fact the site shows should be traceable to a source and a fetch date — this is a transparency tool, so its own data provenance has to be trustworthy.
