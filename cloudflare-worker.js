export default {
  async fetch(request, env) {

    // ✅ CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders()
      });
    }

    if (request.method !== "POST") {
      return new Response("Not allowed", {
        status: 405,
        headers: corsHeaders()
      });
    }

    try {
      const data = await request.json();

      const text = `🦷 Новая заявка

👤 Имя: ${data.name || "-"}
📞 Телефон: ${data.phone || "-"}
🛠 Услуга: ${data.service || "-"}
📅 Дата: ${data.date || "-"}
⏰ Время: ${data.time || "-"}
🌐 Страница: ${data.page || "-"}`;

      const tgResponse = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: env.CHAT_ID,
            text
          })
        }
      );

      const tgResult = await tgResponse.json();

      if (!tgResult.ok) {
        return new Response(
          JSON.stringify({ ok: false, error: tgResult }),
          {
            status: 500,
            headers: corsHeaders()
          }
        );
      }

      return new Response(
        JSON.stringify({ ok: true }),
        {
          headers: corsHeaders()
        }
      );

    } catch (err) {
      return new Response(
        JSON.stringify({ ok: false, error: err.toString() }),
        {
          status: 500,
          headers: corsHeaders()
        }
      );
    }
  }
};

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}