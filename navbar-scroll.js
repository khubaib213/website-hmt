// Navbar transparency on scroll
(() => {
  const nav = document.querySelector('nav');
  const heroSection = document.querySelector('.hero');
  if (!nav || !heroSection) return;

  function updateNavbar() {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPos = window.scrollY;

    if (scrollPos < heroBottom) {
      nav.classList.add('transparent');
    } else {
      nav.classList.remove('transparent');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar();
})();
