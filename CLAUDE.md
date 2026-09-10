# CLAUDE.md

This file is read automatically by Claude Code at the start of every session in this repo. It's how you give Claude Code standing instructions instead of repeating yourself every time — keep it updated as the project evolves.

## Project

Local — a civic transparency site for one town/county. Shows upcoming local election dates/ballot measures, and a budget-execution view (did local government spend what it said it would, on what it said it would).

This is a learning project. The person driving is a product manager, not an engineer — favor clear explanations over terse output, and call out anything that's a meaningful architectural choice rather than just doing it silently.

## Scope discipline

This project is scoped to ONE pilot town/county. Do not generalize to "any US locality" prematurely — that's real scope creep for a learning project and it's what makes civic-data aggregation hard in the first place. When something needs to be locality-specific (a source URL, a document format), it's fine to hardcode it for now; we deliberately refactor toward config-driven multi-locality support later (Week 7), not before.

Pilot locality: **Sandy, Utah.**

## Stack

- Frontend: React + Vite, in `frontend/`
- Backend: Node.js + Express, in `backend/` — also handles ingestion scripts and Claude API calls for document extraction
- Database: Supabase (Postgres)
- AI extraction: Claude API (Anthropic API), called directly from backend code — this is different from Claude Code itself; it's Claude used as a feature inside the product (document in, structured JSON out)
- Hosting (later): Vercel (frontend), Render or Railway (backend)

## Data integrity rules

- Every stored fact (an election date, a budget line item) must record: source URL, the date it was fetched, and — for AI-extracted data — that it came from extraction rather than a structured feed, so it can be flagged for human review if it looks wrong.
- Never silently overwrite a previously-verified fact with a lower-confidence one.
- Prefer official sources (county elections office, state Secretary of State, the town's own published budget) over secondary aggregators.

## Conventions

- Keep commits small and scoped to one logical change.
- Write a plain-English commit message explaining *why*, not just what changed.
- Don't introduce a new library or major dependency without flagging it first — explain what it's for and whether a simpler option exists.
- Prefer readable code over clever code. This project is optimized for the human learning to read and reason about it, not for minimal line count.

## Commands

(Fill these in as they're created — this is intentionally empty at the start.)

- Frontend dev server: `cd frontend && npm install && npm run dev` (Vite, serves at http://localhost:5173)
- Backend dev server: `TBD — added in Week 2`
- Ingestion script(s): `TBD — added in Week 3`
- Extraction pipeline: `TBD — added in Week 5`
- Run tests: `TBD — added in Week 6`

## Current Phase

Week 0 / repo scaffolding. No app code exists yet.
