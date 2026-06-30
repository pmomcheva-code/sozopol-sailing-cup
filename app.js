const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20),{passive:true});
document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const reveal=()=>document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.88)el.classList.add('in')});
addEventListener('scroll',reveal,{passive:true});reveal();
document.querySelectorAll('.lang button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.lang button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const lang=btn.dataset.lang;document.querySelectorAll('[data-bg]').forEach(el=>{el.textContent=el.dataset[lang]||el.dataset.bg});document.documentElement.lang=lang;}));

// Set the initial language from the HTML lang attribute when opening en.html
(function(){
  const initial = document.documentElement.lang === 'en' ? 'en' : 'bg';
  if(initial === 'en'){
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active', b.dataset.lang==='en'));
    document.querySelectorAll('[data-bg]').forEach(el=>{el.textContent=el.dataset.en||el.dataset.bg});
  }
})();
