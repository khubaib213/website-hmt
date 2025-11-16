// Animate elements on scroll using IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
  const nodes = Array.from(document.querySelectorAll('.animate-on-scroll'));
  if (!nodes.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  nodes.forEach((el, i) => {
    // apply a small stagger based on order
    el.style.transitionDelay = (i * 80) + 'ms';
    io.observe(el);
  });
});
