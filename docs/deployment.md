# Cloudflare deployment from a browser

1. Create a GitHub repository and upload the project files.
2. In Cloudflare Workers & Pages, create a Worker connected to the repository.
3. Set the build command to `npm run build`.
4. Create a D1 database only when you are ready to use the public knowledge API.
5. Update the D1 `database_id` in `wrangler.jsonc` with the actual value from Cloudflare.
6. Deploy and inspect the Worker logs and public URL.

Cloudflare's Vite plugin and Wrangler configuration evolve. Confirm the current dashboard build settings and plugin compatibility when setting up the project. No deployment was performed as part of this source delivery.
