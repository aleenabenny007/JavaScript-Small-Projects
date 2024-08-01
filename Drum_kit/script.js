'use strict';
const sounds = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key')

document.body.addEventListener('keydown', function(e) {
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    const sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!sound) return;
    stopAllMusic();
    key.classList.add('playing');
    sound.play();
});

function stopAllMusic() {
    keys.forEach(key => key.classList.remove('playing'));
    sounds.forEach(sound => {
        sound.currentTime = 0;
        sound.pause();
    });
}