// Year
document.querySelectorAll('#yr').forEach(el => el.textContent = new Date().getFullYear());

// Sticky nav scrolled state
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

// Mobile menu
const burger = document.getElementById('burger');
if (burger) burger.addEventListener('click', () => nav.classList.toggle('open'));

// Animated counters
const ease = t => 1 - Math.pow(1 - t, 3);
const fmt = n => n >= 1_000_000 ? (n/1_000_000).toFixed(1)+'M'
              : n >= 1_000 ? (n/1_000).toFixed(1).replace('.0','')+'K' : n;
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, start = performance.now(), dur = 1600;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = fmt(Math.floor(target * ease(p)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick); io.unobserve(el);
  });
}, { threshold: .4 });
document.querySelectorAll('[data-count]').forEach(el => io.observe(el));

// Reveal-on-scroll for cards
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; revealIO.unobserve(e.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.card, .listing, .price').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .8s ease, transform .8s ease';
  revealIO.observe(el);
});