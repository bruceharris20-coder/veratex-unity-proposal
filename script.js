const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>observer.observe(s));
const topBtn=document.querySelector('.back-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('show',window.scrollY>650));topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
