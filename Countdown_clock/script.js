'use strict';

const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const timerControls = document.querySelector('.timer__controls');
const formInput = document.getElementById('custom');

let countdown;

timerControls.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') return;
    clearInterval(countdown);
    timer(+e.target.dataset.time);
});

// formInput.addEventListener('keydown', function(e) {
//     if(e.key !== 'Enter') return;
//     e.preventDefault();
//     clearInterval(countdown);
//     timer(+e.target.value * 60);
//     e.target.value = '';
// });
   
//                      OR

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    clearInterval(countdown);
    timer(minutes * 60);
    this.reset();
});

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // checking if we should stop it
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        // display it 
        displayTimeLeft(secondsLeft);
        displayEndTime(then);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, 0);
    seconds = (seconds % 60).toString().padStart(2, 0);
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours().toString().padStart(2, 0);
    const minutes = end.getMinutes().toString().padStart(2, 0);
    endTimeDisplay.textContent = `Be Back At ${hour}:${minutes}`;
}

timer(100);

