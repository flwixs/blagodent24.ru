let currentLang = 'ru';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

setLang('ru');

function toggleCard(header) {
  const body = header.nextElementSibling;
  const icon = header.querySelector('.toggle');

  body.style.display = body.style.display === 'block' ? 'none' : 'block';
  icon.textContent = body.style.display === 'block' ? '×' : '+';
}

function openForm() {
  document.getElementById('formModal').style.display = 'block';
}

function closeForm() {
  document.getElementById('formModal').style.display = 'none';
}

function sendForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('datetime').value;

  fetch("https://api.telegram.org/botВАШ_ТОКЕН/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: "-1003630823385",
      text: `🦷 Новая запись\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🕒 Дата: ${time}`
    })
  });

  closeForm();
}
