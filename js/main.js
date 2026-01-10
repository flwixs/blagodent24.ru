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
