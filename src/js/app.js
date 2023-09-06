document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
    `
  })
})

const startPlayerBtn = document.querySelector('.button-start');
const playerLayer = document.querySelector('.layer-6');
const player = document.querySelector('.player');

startPlayerBtn.addEventListener('click', () => {
  playerLayer.classList.add('show');
  startPlayerBtn.classList.add('is-hidden');
})
