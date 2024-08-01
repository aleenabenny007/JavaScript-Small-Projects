'use strict';

const hourNeedle = document.querySelector('.hour');
const minsNeedle = document.querySelector('.mins');
const secsNeedle = document.querySelector('.secs');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerText = 'Light mode';
    } else {
        html.classList.add('dark');
        e.target.innerText = 'Dark mode';
    }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

function setTime() {
    const locale = navigator.language;
    const today = new Date();
    const now = {
        day: today.toLocaleString(locale, { weekday: 'long' }),
        month: today.toLocaleString(locale, { month: 'short' }),
        date: today.getDate(),
        hours: today.getHours(),
        mins: today.toLocaleString(locale, { minute: '2-digit' }),
        secs: today.getSeconds(),
    }
    const hoursforClock = now.hours % 12;
    date.innerHTML = `${now.day}, ${now.month} <span class="circle">${now.date}</span>`;
    time.innerText = `${now.hours.toString().padStart(2, 0)}:${now.mins} ${now.hours >= 12 ? "PM" : "AM"}`;

    hourNeedle.style.transform = `rotate(${scale(hoursforClock, 0, 11, 0, 360) - 90}deg)`;
    minsNeedle.style.transform = `rotate(${(scale(now.mins, 0, 59, 0, 360)) - 90}deg)`;
    secsNeedle.style.transform = `rotate(${scale(now.secs, 0, 59, 0, 360) - 90}deg)`;          

}
setInterval(setTime,1000);     

     

