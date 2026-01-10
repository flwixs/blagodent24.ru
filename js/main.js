// раскрытие услуг
function toggleDetails(row) {
  row.classList.toggle('active');

  const detailsRow = row.nextElementSibling;
  const isOpen = detailsRow.style.display === 'table-row';

  detailsRow.style.display = isOpen ? 'none' : 'table-row';
}

// переключение языка
function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  localStorage.setItem('siteLang', lang);
}

// загрузка языка при старте
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLang') || 'ru';
  setLang(savedLang);
});

// placeholder перевод
function updatePlaceholders(lang) {
  document.querySelectorAll('input, textarea').forEach(el => {
    const key = el.getAttribute(`data-${lang}-placeholder`);
    if (key) el.placeholder = key;
  });
}

function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  updatePlaceholders(lang);
  localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('siteLang') || 'ru';
  setLang(lang);

  document.getElementById('appointmentForm')
    .addEventListener('submit', e => {
      e.preventDefault();
      alert(lang === 'ru'
        ? 'Заявка отправлена! Мы свяжемся с вами.'
        : '预约已提交，我们将与您联系。');
      e.target.reset();
    });
});

const BOT_TOKEN = "8594224012:AAHLhbXSZJTFuDbgJfFwTf73nyGTc-dkB4o";
const CHAT_ID = "-1003630823385";

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const service = form.service.value.trim();
  const lang = document.documentElement.lang || "ru";

  if (!name || !phone) {
    alert(lang === "zh"
      ? "请填写姓名和电话"
      : "Пожалуйста, заполните имя и телефон");
    return;
  }

  const message =
    lang === "zh"
      ? `🦷 *新预约*\n\n👤 姓名: ${name}\n📞 电话: ${phone}\n🩺 服务: ${service || "未指定"}`
      : `🦷 *Новая запись*\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🩺 Услуга: ${service || "не указана"}`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown"
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        alert(lang === "zh"
          ? "申请已发送，我们会联系您"
          : "Заявка отправлена, мы с вами свяжемся");
        form.reset();
      } else {
        alert("Ошибка отправки");
        console.error(data);
      }
    })
    .catch(err => {
      alert("Ошибка соединения");
      console.error(err);
    });
});
