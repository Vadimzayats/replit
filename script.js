document.addEventListener('DOMContentLoaded', () => {
  const dino = document.createElement('div');
  const gameDisplay = document.querySelector('.game-container');
  let isJumping = false;
  let gravity = 0.9;
  let position = 0;
  function control(e) {
    if (e.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  }

  document.addEventListener('keyup', control);
  function jump() {
    let count = 0;
    let timerId = setInterval(function() {
      if (count === 15) {
        clearInterval(timerId);
        let downTimerId = setInterval(function() {
          if (count === 0) {
            clearInterval(downTimerId);
            isJumping = false;
          }
          position -= 5;
          count--;
          position = position * gravity;
          dino.style.bottom = position + 'px';
        }, 20);
      }
      position += 30;
      count++;
      position = position * gravity;
      dino.style.bottom = position + 'px';
    }, 20) 
  }

  function createDino() {
    gameDisplay.appendChild(dino);
    dino.classList.add('dino');
    position = 10;
    dino.style.bottom = position + 'px';
  }
  createDino();
})