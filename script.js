(function(){
 var menu=document.getElementById('menu'),links=document.getElementById('links');
 menu.addEventListener('click',function(){var o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
 links.addEventListener('click',function(e){if(e.target.closest('a')){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
 document.getElementById('yr').textContent=new Date().getFullYear();
 var root=document.documentElement;
 document.getElementById('theme').addEventListener('click',function(){
  var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme=dark?'light':'dark';
 });
 var fb=document.querySelectorAll('.filters button'),items=document.querySelectorAll('.pubs li');
 fb.forEach(function(b){b.addEventListener('click',function(){
  fb.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
  items.forEach(function(li){li.hidden=!(b.dataset.f==='all'||li.dataset.t===b.dataset.f)});
 })});
 var secs=[].slice.call(document.querySelectorAll('main section')),ls=document.querySelectorAll('a.l');
 function spy(){var y=scrollY+120,cur='';secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});
  ls.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur)})}
 addEventListener('scroll',spy,{passive:true});spy();
})();
