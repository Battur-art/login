 // THEME
 const themeBtn=document.getElementById('themeBtn');
 const saved=localStorage.getItem('sl-theme')||'dark';
 if(saved==='light') document.documentElement.classList.add('light');
 themeBtn.addEventListener('click',()=>{document.documentElement.classList.toggle('light');localStorage.setItem('sl-theme',document.documentElement.classList.contains('light')?'light':'dark')});

 // Helpers
 const $=s=>document.querySelector(s); const $$=s=>document.querySelectorAll(s);

 // Smooth goto buttons
 $$('[data-goto]').forEach(b=>b.addEventListener('click',()=>{document.querySelector(b.dataset.goto).scrollIntoView({behavior:'smooth'})}))


 // BUDGET
 const fields=['income','rent','food','transport','net','other'];
 function calcBudget(){
   const vals=fields.map(id=>Number(document.getElementById(id).value)||0);
   const [income,...exps]=vals; const totalExp=exps.reduce((a,b)=>a+b,0);
   const left=income-totalExp; const rate= income? Math.round(totalExp/income*100):0;
   $('#totalExp').textContent=totalExp.toLocaleString();
   $('#leftover').textContent=left.toLocaleString();
   $('#expRate').textContent=rate;
   localStorage.setItem('sl-budget',JSON.stringify({income,totalExp,left,rate,raw:vals}));
   updateKPIs();
 }
 $('#calcBudget').addEventListener('click',()=>{calcBudget(); $('#budgetMsg').textContent='Тооцооллоо.'});
 $('#saveBudget').addEventListener('click',()=>{$('#budgetMsg').textContent='Хадгаллаа. Дараа нээхэд хэвээр.';});
 const savedBudget=JSON.parse(localStorage.getItem('sl-budget')||'null');
 if(savedBudget?.raw){fields.forEach((id,i)=>document.getElementById(id).value=savedBudget.raw[i]);calcBudget();}
