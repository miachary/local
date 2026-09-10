# backend

Node.js + Express API for **Local** — the civic transparency site for Sandy, Utah.

This is also where the data ingestion scripts (Week 3) and the Claude API
extraction pipeline (Week 5) will live.

## Commands

Run these from inside `backend/`:

- `npm install` — install dependencies (run once, and after pulling changes to `package.json`)
- `npm run dev` — start the API with auto-restart on file changes (`node --watch`)
- `npm start` — start the API once, no auto-restart

The server listens on `http://localhost:3001` (override with `PORT` in `.env`).

## Environment

Copy `.env.example` to `.env` if you need to set variables:

```
cp .env.example .env
```

Nothing is required yet — the server runs with no `.env` at all. The `dotenv`
wiring is in place so future secrets (Supabase, Claude API key) just drop in.
`.env` is gitignored; `.env.example` is committed as the template.

## Endpoints

### `GET /api/elections`

Returns an array of upcoming elections relevant to Sandy, read from
`data/elections.json`. Each record carries its own `source_url`, `last_verified`
date, and a `confirmed` flag (per the project's data-integrity rules).

Test it:

```
curl http://localhost:3001/api/elections
```
