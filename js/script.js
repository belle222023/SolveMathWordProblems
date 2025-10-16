// site JS: year updater + smooth scroll + small helpers
document.addEventListener('DOMContentLoaded', function () {
  // update years
  const y = new Date().getFullYear();
  ['year','year-2'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const t = document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // small: hide video on mobile (autoplay often blocked) and prefer fallback image
  const vid = document.querySelector('.hero-video');
  if(vid){
    const mq = window.matchMedia('(max-width:768px)');
    function toggleVideo(e){
      if(e.matches){
        vid.style.display = 'none';
        document.querySelector('.hero').style.backgroundImage = "url('images/hero-fallback.jpg')";
        document.querySelector('.hero').style.backgroundSize = 'cover';
      } else {
        vid.style.display = 'block';
        document.querySelector('.hero').style.backgroundImage = '';
      }
    }
    toggleVideo(mq);
    mq.addEventListener('change', toggleVideo);
  }
});
