import { Hono } from 'hono';

type Bindings = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  DB?: D1Database;
};
const app = new Hono<{ Bindings: Bindings }>();

app.get('/api/health', (c) => c.json({ status: 'ok', service: 'RDev Academy API', databaseConfigured: Boolean(c.env.DB) }));
app.get('/api/knowledge', async (c) => {
  if (!c.env.DB) return c.json({ items: [], source: 'local-content', message: 'D1 is not configured yet.' });
  const { results } = await c.env.DB.prepare(
    'SELECT id, title, category, summary, version, status, updated_at FROM knowledge_items WHERE status = ? ORDER BY updated_at DESC LIMIT 50'
  ).bind('published').all();
  return c.json({ items: results, source: 'd1' });
});
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw));
export default app;
