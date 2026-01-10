document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  if (!form) return; // если формы нет — сайт НЕ ломаем

  const BOT_TOKEN = "8594224012:AAHLhbXSZJTFuDbgJfFwTf73nyGTc-dkB4o";
  const CHAT_ID = "-1003630823385"; // группа

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");

    const message = `
🦷 *Новая запись*
👤 Имя: ${name}
📞 Телефон: ${phone}
🛠 Услуга: ${service || "не указана"}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 5000); // ⏱ таймаут 5 сек

      const response = await fetch(url, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown"
        })
      });

      if (!response.ok) throw new Error("Telegram error");

      alert("✅ Заявка отправлена");
      form.reset();

    } catch (err) {
      console.error(err);
      alert("⚠️ Не удалось отправить заявку. Попробуйте позже.");
    }
  });
});
