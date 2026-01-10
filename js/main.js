document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  if (!form) {
    console.error("Форма не найдена");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");

    console.log("DEBUG:", name, phone, service);

    const message = `
🦷 Новая запись
👤 Имя: ${name}
📞 Телефон: ${phone}
🛠 Услуга: ${service || "не указана"}
    `;

    fetch("https://api.telegram.org/bot8594224012:AAHLhbXSZJTFuDbgJfFwTf73nyGTc-dkB4o/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: -1003630823385,
        text: message
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log("TG:", data);
      alert("Заявка отправлена");
      form.reset();
    })
    .catch(err => {
      console.error("Ошибка:", err);
    });
  });
});
