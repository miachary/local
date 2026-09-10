// Local — backend API
//
// Civic transparency site for Sandy, Utah. This Express app will eventually serve
// elections and budget-execution data out of Supabase. For now it serves a small,
// hand-verified elections list from data/elections.json so the frontend has a real
// endpoint to talk to.

require("dotenv").config({ quiet: true }); // loads .env into process.env. Nothing
// is required yet, but the wiring is here so adding a secret later (Supabase URL,
// Claude API key) is just a matter of dropping it in .env. quiet:true suppresses
// dotenv's startup promo banner.

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// GET /api/elections
//
// Returns the elections array from data/elections.json as-is.
//
// We read the file on each request rather than require()-ing it once at startup.
// The file is tiny and this is a low-traffic civic site, so the cost is
// irrelevant, and it means you can hand-edit the JSON and see the change on the
// next request without restarting the server.
app.get("/api/elections", (req, res) => {
  const dataPath = path.join(__dirname, "data", "elections.json");
  try {
    const elections = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    res.json(elections);
  } catch (err) {
    console.error("Failed to load elections data:", err);
    res.status(500).json({ error: "Could not load elections data" });
  }
});

app.listen(PORT, () => {
  console.log(`Local backend listening on http://localhost:${PORT}`);
});
