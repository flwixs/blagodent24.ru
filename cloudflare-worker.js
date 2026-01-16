export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return new Response("Not allowed", { status: 405 });
    }
    const data = await request.json();

    const BOT_TOKEN = "BOT_TOKEN_HERE";
    const CHAT_ID = "ADMIN_CHAT_ID_HERE";

    const text = `🦷 Новая заявка
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
📄 Страница: ${data.page}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });

    return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
  }
};
