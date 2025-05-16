const hand = document.querySelector('.em-wave');

let waveCount = 0;
const maxWaves = 4;

function waveHandLimited() {
  let angle = 0;
  let direction = 1;
  const maxAngle = 25;
  const speed = 1.7;
  let lastDirection = direction;

  function animate() {
    angle += direction * speed;
    if (angle > maxAngle || angle < -maxAngle) {
      direction *= -1;

      if (direction !== lastDirection) {
        waveCount++;
        lastDirection = direction;
      }
    }
    if (hand) {
      hand.style.transform = `rotate(${angle}deg)`;
    }
    if (waveCount < maxWaves * 2) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

waveHandLimited();
