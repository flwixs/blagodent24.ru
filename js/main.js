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
document.querySelectorAll(".service-row").forEach(row => {
  row.addEventListener("click", () => {
    row.classList.toggle("active");

    const details = row.querySelector(".details");
    if (!details) return;

    details.style.display =
      details.style.display === "block" ? "none" : "block";
  });
});

});

// Функция смены языка
function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    // Если есть data-ru и data-cn — заменяем textContent
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });

  // Сохраняем выбор в localStorage
  localStorage.setItem('siteLang', lang);
}

// При загрузке страницы — применяем ранее выбранный язык
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('siteLang') || 'ru';
  setLang(savedLang);
});

// ===== РАСКРЫТИЕ УСЛУГ =====
function toggleDetails(row) {
  // переключаем плюсик
  row.classList.toggle("active");

  // следующая строка таблицы — это details-row
  const detailsRow = row.nextElementSibling;
  if (!detailsRow) return;

  const details = detailsRow.querySelector(".details");
  if (!details) return;

  // показать / скрыть
  details.style.display =
    details.style.display === "block" ? "none" : "block";
}
