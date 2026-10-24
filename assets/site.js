"use strict";
(function(){
  // Smooth in-page navigation that works inside an embedded viewer
  document.querySelectorAll('[data-jump]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.getElementById(a.getAttribute('data-jump'));
      if(!t) return;
      e.preventDefault();
      t.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    });
  });

  var nav = document.querySelector('header.nav');
  addEventListener('scroll', function(){ nav.classList.toggle('scrolled', scrollY > 8); }, {passive:true});

  function setupFilter(attr, items, after){
    var btns = document.querySelectorAll('[' + attr + ']');
    btns.forEach(function(b){
      b.addEventListener('click', function(){
        var f = b.getAttribute(attr);
        btns.forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
        items.forEach(function(el){ el.hidden = !(f === 'all' || el.dataset.cat === f); });
        if(after) after();
      });
    });
  }
  setupFilter('data-skill-filter', document.querySelectorAll('#skills li'));
  var projs = document.querySelectorAll('.proj');
  var count = document.getElementById('proj-count');
  function updateCount(){
    var n = Array.prototype.filter.call(projs, function(p){ return !p.hidden; }).length;
    count.textContent = n + (n === 1 ? ' project' : ' projects');
  }
  setupFilter('data-proj-filter', projs, updateCount);
  updateCount();

  // Theme toggle
  var root = document.documentElement;
  // Only accept the two known values, so a tampered storage value can't inject anything
  try { var saved = localStorage.getItem('theme'); if(saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved); } catch(e){}
  document.getElementById('theme-toggle').addEventListener('click', function(){
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e){}
  });
})();
