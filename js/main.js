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


      fetch("https://long-water-566b.jobwarce.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          service,
          date,
          time,
          page: window.location.href
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.ok === true) {
            alert("Спасибо! Мы скоро свяжемся с вами.");
            form.reset();
          } else {
            alert("Ошибка отправки заявки");
          }
        })
        .catch(err => {
          console.error(err);
          alert("Ошибка соединения");
        });
    });
  }

  fetch("https://long-water-566b.jobwarce.workers.dev/api/site")
    .then(r => r.json())
    .then(data => {
      // data.services
      // data.prices
      // data.blog
    });

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
