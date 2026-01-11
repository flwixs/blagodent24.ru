document.querySelectorAll('.main-service-row').forEach(row=>{
  row.addEventListener('click',()=>{
    row.classList.toggle('active');
    const d=row.nextElementSibling;
    if(d && d.classList.contains('details-row')){
      d.style.display=d.style.display==='block'?'none':'block';
    }
  });
});

function setLang(lang){
  document.querySelectorAll('[data-ru]').forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  const search=document.getElementById('priceSearch');
  if(search){
    search.placeholder=search.dataset[lang+'Placeholder'];
  }
}

document.getElementById('priceSearch').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase();
  document.querySelectorAll('.searchable').forEach(row=>{
    const text=row.innerText.toLowerCase();
    row.classList.toggle('hidden',!text.includes(q));
    const details=row.nextElementSibling;
    if(details && details.classList.contains('details-row')){
      details.classList.toggle('hidden',!text.includes(q));
    }
  });
});
