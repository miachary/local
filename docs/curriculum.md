# Local — Learning Curriculum
### PM → AI-Assisted Full-Stack Builder

**Goal:** Learn to build real, scalable software using AI (Claude Code) as your primary coder, by building one real product end to end.

**The project:** *Local* — a civic transparency site for your own town/county. v1 covers two things: upcoming local election dates/ballot measures, and a budget-execution view (did local government spend what it said it would). A local-media aggregation piece is a deliberate later phase, not part of this build.

**Pace:** ~5–8 hrs/week, roughly one phase per week. Go faster or slower as needed.

**Stack:** React (Vite) frontend · Node.js/Express backend · Supabase (Postgres) · Claude API for document extraction · Vercel + Render/Railway hosting · Claude Code CLI as the AI pair-programmer, run from VS Code.

**Why this scope, not "aggregate every town in America":** local civic data is badly fragmented — every town/county uses different systems (Legistar, Granicus, CivicClerk, PrimeGov, or just a raw PDF dump), and the free Google API a lot of civic tools used to rely on was shut down in April 2025. One locality first, architected so a second is "add a source" not "rebuild," is what makes this achievable in 8 weeks.

**How the teaching works:** each phase pairs a short concept explainer with a hands-on build session. The actual typing — git commands, running Claude Code, editing in VS Code — happens in your real Terminal on your Mac.

---

### Week 0 — Environment & Mental Model
Install VS Code, git, GitHub, Node.js, Claude Code CLI. Learn terminal basics, what git/GitHub actually do, the frontend/backend/database mental model, how Claude Code differs from Cowork. **Done when:** first commit pushed to GitHub. *(Already covered — unaffected by the project swap.)*

### Week 1 — First Real App + AI Workflow
Learn: dev servers, npm/package.json, how to prompt Claude Code and review its diffs before accepting. **Build:** scaffold the React frontend with placeholder sections for Elections and Budget Execution; pick your pilot town/county.

### Week 2 — Data Sourcing 101 + Election Backend
Learn: what a REST API is, environment variables, how to find and vet an authoritative source for local election dates. **Build:** Express API serving hand-researched election data for your locality — proving the model before automating.

### Week 3 — Real Database + First Automated Ingestion
Learn: what a database is, basic SQL, schema design. **Build:** Postgres schema for elections/ballot measures; a script fetches data programmatically instead of hardcoding it.

### Week 4 — Frontend Meets Backend
Learn: React state, calling APIs, loading/error states, showing data freshness. **Build:** full election calendar UI for your locality.

### Week 5 — AI Extraction Pipeline (Budget Data)
Learn: calling the Claude API for structured extraction (document in, JSON out), prompt design, handling uncertainty. **Build:** pull one real budget document and extract budget-vs-actual line items into the DB.

### Week 6 — Git Discipline, Testing, CI (+ Scheduled Automation)
Learn: feature branches, PRs, code review habits, why tests exist, GitHub Actions basics, and scheduling the ingestion pipeline to re-run automatically. **Build:** tests, a CI check, a real branch → PR → merge cycle, a scheduled refresh job.

### Week 7 — Deployment & "Scalable"
Learn: what makes an app scalable — and specifically, what it means for *this* project: adding a second town without rebuilding. **Build:** deploy frontend (Vercel) and backend (Render/Railway) to a public URL.

### Week 8 — Graduation Exercise
Pick one feature and build it fully solo: branch → prompt Claude Code → review diff → test → commit → PR → merge → deploy. Options: polish the budget visualization, add a second town, or add an admin view to review/correct AI-extracted data.

---

### Checkpoints
- **Week 0:** `git`, `node`, `claude` all run from Terminal; first commit pushed to GitHub.
- **Week 1:** app scaffolded and running locally; pilot locality chosen.
- **Each build week:** app runs locally before moving on.
- **Week 3:** election data comes from an automated fetch, not a hardcoded value.
- **Week 5:** at least one real budget document has gone through the AI extraction pipeline.
- **Week 6:** a real PR shows a passing CI check; a scheduled job has successfully re-run at least once.
- **Week 7:** Local is live at a public URL, usable by someone other than you.
- **Week 8:** you complete one full feature cycle without step-by-step hand-holding.
