document.querySelectorAll('.main-service-row').forEach(row=>{
row.addEventListener('click',()=>{
row.classList.toggle('active');
const details=row.nextElementSibling;
details.style.display = details.style.display === 'table-row' ? 'none' : 'table-row';
});
});
