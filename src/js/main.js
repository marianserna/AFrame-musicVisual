const scene = document.querySelector('a-scene');

for (let i = 0; i < 15; i++) {
  for (let y = 0; y < 15; y++) {
    const box = document.createElement('a-box');
    box.setAttribute('id', `${i}-${y}`);
    box.setAttribute('shader', 'flat');
    box.setAttribute('color', '#A2FAA3');
    box.setAttribute('depth', 0.025);
    box.setAttribute('width', 0.025);
    box.setAttribute('height', 0.025);
    box.setAttribute('position', `${i - 7} ${y - 4} -3`);
    box.setAttribute('pulse', `frequency: ${i * y}`);
    scene.appendChild(box);
  }
}

window.music = new Music();
window.soundCloud = new SoundCloud('QkOuXLUgMp9Isa6jMqsp0hIgv0NY3BZb', music);
soundCloud.load('https://soundcloud.com/rlgrime/the-hills-rl-grime-remix');
setInterval(() => {
  music.sample();
}, 30);
