// Video play/pause button controller
(() => {
  const video = document.getElementById('heroVideo');
  const btn = document.getElementById('playPauseBtn');
  const playIcon = btn?.querySelector('.play-icon');
  const pauseIcon = btn?.querySelector('.pause-icon');

  if (!video || !btn) return;

  // Update button display based on video state
  function updateButton() {
    if (video.paused) {
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    } else {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    }
  }

  // Toggle play/pause on button click
  btn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updateButton();
  });

  // Update button when video state changes (e.g., ended)
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('ended', updateButton);

  // Initialize button state
  updateButton();
})();
