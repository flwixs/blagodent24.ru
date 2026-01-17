const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    const url = new URL(req.url);

    if (url.pathname === "https://long-water-566b.jobwarce.workers.dev/api/site") {
      if (req.method === "GET") {
        const data = await env.CONTENT.get("site", "json");
        return new Response(JSON.stringify(data || {
          services: [],
          prices: [],
          blog: []
        }), { headers });
      }

      if (req.method === "POST") {
        const body = await req.json();
        await env.CONTENT.put("site", JSON.stringify(body));
        return new Response(JSON.stringify({ ok: true }), { headers });
      }
    }

    return new Response("Not found", { status: 404 });
  }
};