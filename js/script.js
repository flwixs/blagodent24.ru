document.querySelectorAll('.main-service-row').forEach(row=>{
row.addEventListener('click',()=>{
row.classList.toggle('active');
const d=row.nextElementSibling;
d.style.display=d.style.display==='table-row'?'none':'table-row';
});
});