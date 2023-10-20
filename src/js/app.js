document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
    `
  })
})

const startPlayerBtn = document.querySelector('.button-start');
const playerLayer = document.querySelector('.player-layer');
const collapsePlayer = document.querySelector('.collapse-player');

startPlayerBtn.addEventListener('click', () => {
  playerLayer.classList.add('show');
  startPlayerBtn.classList.add('is-hidden');
  playerLayer.classList.remove('player-layer--pointer');
});

collapsePlayer.addEventListener('click', () => {
  const player = document.querySelector('.player');

  collapsePlayer.classList.remove('show');
  player.classList.remove('player--collapse');
});