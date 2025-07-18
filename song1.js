const audio = document.getElementById('audio');
const progressDot = document.getElementById('progress-dot');
  const playBtn = document.getElementById('playBtn');
  const progressBar = document.getElementById('progress-bar');
  const vinil = document.getElementById('vinil');

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
      vinil.style.animationPlayState = 'running';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
      vinil.style.animationPlayState = 'paused';
    }
  }

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + '%';
    progressDot.style.left = percent + '%';

  });

  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    vinil.style.animationPlayState = 'paused';
    progressBar.style.width = '0%';
  });
  progressBar.parentElement.addEventListener('click', (e) => {
  const bar = progressBar.parentElement;
  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percent = clickX / rect.width;
  audio.currentTime = percent * audio.duration;
});
