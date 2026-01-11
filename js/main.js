/* =====================
   АККОРДЕОН УСЛУГ
===================== */
function toggleDetails(row) {
  const details = row.nextElementSibling;
  const toggle = row.querySelector('.toggle');

  const isOpen = details.style.display === 'table-row';

  document.querySelectorAll('.details-row').forEach(r => {
    r.style.display = 'none';
  });
  document.querySelectorAll('.toggle').forEach(t => {
    t.textContent = '+';
  });

  if (!isOpen) {
    details.style.display = 'table-row';
    toggle.textContent = '×';
  }
}

/* =====================
   ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
===================== */
function setLang(lang) {
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

/* =====================
   КНОПКА ЗАПИСИ
===================== */
function openForm() {
  const form = document.getElementById('booking-form');
  if (form) {
    form.classList.toggle('active');
  }
}
