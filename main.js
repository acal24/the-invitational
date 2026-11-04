/* Personal envelope opening; trip and Chronicle content remain unchanged. */
(()=>{
 const intro=document.getElementById('intro');
 const button=document.getElementById('open-envelope');
 const card=document.getElementById('invitation-card');
 if(!intro||!button||!card)return;
 const trip=document.getElementById('invitation-page');
 const chronicle=document.getElementById('chronicle-page');
 const sync=()=>{const inTrip=location.hash==='#invitation'||location.hash==='#chronicle';intro.inert=inTrip;trip.inert=!inTrip;chronicle.inert=!inTrip;};
 window.addEventListener('hashchange',sync);sync();
 button.addEventListener('click',()=>{
  if(intro.classList.contains('opened'))return;
  intro.classList.add('opened');button.setAttribute('aria-expanded','true');button.disabled=true;
  card.inert=false;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.setTimeout(()=>card.focus({preventScroll:true}),reduced?0:1100);
 });
})();
