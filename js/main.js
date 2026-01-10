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
