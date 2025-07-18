const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progress-bar');
const progressDot = document.getElementById('progress-dot');
const vinil = document.getElementById('vinil');

function togglePlay() {
  const icon = playBtn.querySelector('i');
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    vinil.style.animationPlayState = 'running';
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    vinil.style.animationPlayState = 'paused';
  }
}

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + '%';
  progressDot.style.left = percent + '%';
});

audio.addEventListener('ended', () => {
  const icon = playBtn.querySelector('i');
  icon.classList.remove('fa-pause');
  icon.classList.add('fa-play');
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
