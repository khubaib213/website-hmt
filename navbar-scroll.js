// Video play/pause button controller
(() => {
  const video = document.getElementById('heroVideo');
  const btn = document.getElementById('playPauseBtn');
  const playIcon = btn?.querySelector('.play-icon');
  const pauseIcon = btn?.querySelector('.pause-icon');

  if (video && btn) {
    function updateButton() {
      if (video.paused) {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
      } else {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
      }
    }

    btn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      updateButton();
    });

    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('ended', updateButton);
    updateButton();
  }
})();

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
