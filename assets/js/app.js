/* Michail Sapkas site: small interactive layer (no dependencies) */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) Reveal elements on scroll
  var revealEls = document.querySelectorAll('.sj-reveal, .sj-tl');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  // 2) Typing effect on the hero
  var typed = document.getElementById('sj-typed');
  if (typed) {
    var phrases = [
      'Physicist and PhD researcher',
      'Edge AI on FPGAs and AI Engines',
      'Reinforcement learning for accelerators',
      'Deep learning for particle detectors'
    ];
    if (reduce) {
      typed.textContent = phrases[0];
    } else {
      var p = 0, c = 0, deleting = false;
      var tick = function () {
        var word = phrases[p];
        if (!deleting) {
          c++;
          typed.textContent = word.slice(0, c);
          if (c === word.length) { deleting = true; return setTimeout(tick, 1700); }
        } else {
          c--;
          typed.textContent = word.slice(0, c);
          if (c === 0) { deleting = false; p = (p + 1) % phrases.length; }
        }
        setTimeout(tick, deleting ? 32 : 68);
      };
      tick();
    }
  }

  // 3) Count-up numbers
  var counters = document.querySelectorAll('[data-count]');
  var countUp = function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (reduce || isNaN(target)) { el.textContent = target; return; }
    var start = null, dur = 1100;
    var step = function (ts) {
      if (!start) start = ts;
      var k = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(countUp);
  }

  // 4) Particle network on the hero canvas
  var cv = document.getElementById('sj-particles');
  if (cv && cv.getContext && !reduce) {
    var ctx = cv.getContext('2d'), pts = [], W, H, DPR = window.devicePixelRatio || 1;
    var resize = function () {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    var init = function () {
      pts = [];
      var n = Math.min(70, Math.floor(W * H / 14000));
      for (var i = 0; i < n; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
      }
    };
    var draw = function () {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124,92,255,0.55)'; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = 'rgba(0,194,168,' + (0.22 * (1 - d / 110)) + ')'; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };
    resize(); init(); draw();
    window.addEventListener('resize', function () { resize(); init(); });
  }

  // 5) Page fade-in
  window.addEventListener('load', function () { document.body.classList.add('loaded'); });
})();
