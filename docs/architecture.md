# Architecture

The React application is a public client experience. Local learner data lives in IndexedDB with a localStorage fallback. The Worker uses Hono for API routing and serves the Vite-built assets through the Cloudflare asset binding. D1 is reserved for public knowledge metadata and source/version records.

The knowledge pipeline and RLF are architectural direction, not a claim that automated ingestion or internally hosted AI inference is already operational. AI inference is not required for the website.
