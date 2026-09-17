const btn=document.getElementById('langBtn');let en=false;
btn.addEventListener('click',()=>{en=!en;document.body.classList.toggle('en',en);document.documentElement.lang=en?'en':'ar';document.documentElement.dir=en?'ltr':'rtl';btn.textContent=en?'AR':'EN';document.querySelectorAll('[data-ar]').forEach(el=>{el.innerHTML=en?el.dataset.en:el.dataset.ar});});
