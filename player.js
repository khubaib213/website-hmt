// player.js — controls play/pause for the hero video with modern, accessible toggling
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('playPauseBtn');
    if (!video || !btn) return;

    // Ensure button is a real button for accessibility (it already is in markup)
    btn.setAttribute('role','button');
    btn.setAttribute('aria-pressed', 'false');

    const playIcon = btn.querySelector('.play-icon');
    const pauseIcon = btn.querySelector('.pause-icon');

    function setIcons(isPlaying){
      if (isPlaying) {
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', 'Pause video');
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = '';
      } else {
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Play video');
        if (playIcon) playIcon.style.display = '';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    }

    // Init state
    setIcons(!video.paused && !video.ended);

    btn.addEventListener('click', function(e){
      if (video.paused || video.ended) {
        video.play().catch(()=>{});
        setIcons(true);
      } else {
        video.pause();
        setIcons(false);
      }
    });

    // Update icons if playback changes programmatically
    video.addEventListener('play', function(){ setIcons(true); });
    video.addEventListener('pause', function(){ setIcons(false); });
    video.addEventListener('ended', function(){ setIcons(false); });

    // Space or Enter on focused button should toggle (button element already handles this, but keep safe)
    btn.addEventListener('keydown', function(e){
      if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
    });

    // Pause on visibility hidden to be polite to CPU/bandwidth
    document.addEventListener('visibilitychange', function(){
      if (document.hidden && !video.paused) {
        video.pause();
      }
    });
  });
})();
