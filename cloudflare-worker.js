export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    if (url.pathname === '/api/content') {
      if (req.method === 'GET') {
        const data = await env.CONTENT.get('site', 'json');
        return new Response(JSON.stringify(data || {}), {headers:{'Content-Type':'application/json'}});
      }
      if (req.method === 'POST') {
        const body = await req.json();
        await env.CONTENT.put('site', JSON.stringify(body));
        return new Response('OK');
      }
    }

    return fetch(req);
  }
}
