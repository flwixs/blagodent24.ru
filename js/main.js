document.addEventListener("DOMContentLoaded", () => {

  /* ---------- ФОРМА ---------- */
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);

      const name = data.get("name");
      const phone = data.get("phone");
      const service = data.get("service");
      const date = data.get("date");
      const time = data.get("time");

      const message = `
🦷 Новая запись
👤 Имя: ${name}
📞 Телефон: ${phone}
🛠 Услуга: ${service}
📅 Дата: ${date}
⏰ Время: ${time}
      `;

      fetch("https://api.telegram.org/bot8594224012:AAHLhbXSZJTFuDbgJfFwTf73nyGTc-dkB4o/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: -1003630823385,
          text: message
        })
      });

      alert("Заявка отправлена / 已发送");
      form.reset();
    });
  }

  /* ---------- РАСКРЫВАЮЩИЕСЯ УСЛУГИ ---------- */
  document.querySelectorAll(".main-service-row").forEach(row => {
    row.addEventListener("click", () => {
      row.classList.toggle("active");

      const details = row.nextElementSibling;
      if (!details) return;

      details.style.display =
        details.style.display === "block" ? "none" : "block";
    });
  });

});
