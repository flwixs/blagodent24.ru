function toggleDetails(row) {
  const details = row.nextElementSibling;
  const toggle = row.querySelector('.toggle');

  const opened = details.style.display === 'table-row';

  document.querySelectorAll('.details-row').forEach(r => {
    r.style.display = 'none';
  });
  document.querySelectorAll('.toggle').forEach(t => t.textContent = '+');

  if (!opened) {
    details.style.display = 'table-row';
    toggle.textContent = '×';
  }
}

function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

function openForm() {
  alert('Форма записи будет подключена');
}
