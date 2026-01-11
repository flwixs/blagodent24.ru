/* =========================
   АККОРДЕОН УСЛУГ
========================= */
function toggleDetails(row) {
  const detailsRow = row.nextElementSibling;
  const toggle = row.querySelector('.toggle');

  const isOpen = detailsRow.style.display === 'table-row';

  document.querySelectorAll('.details-row').forEach(r => {
    r.style.display = 'none';
  });

  document.querySelectorAll('.toggle').forEach(t => {
    t.textContent = '+';
  });

  if (!isOpen) {
    detailsRow.style.display = 'table-row';
    toggle.textContent = '×';
  }
}

/* =========================
   ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
========================= */
function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
