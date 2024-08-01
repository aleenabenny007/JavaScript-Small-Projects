'use strict';

const secsHand = document.querySelector('.secs');
const minsHand = document.querySelector('.mins');
const hourHand = document.querySelector('.hour');

// console.log(secsHand, minsHand, hourHand);      

function setTime(){
    const now = new Date();
    const secsNow = now.getSeconds();  
    const minsNow = now.getMinutes();
    const hourNow = now.getHours();

    // console.log(secsNow,minsNow,hourNow);

    secsHand.style.transform = `rotate(${((secsNow / 60) * 360) - 90}deg)  translate(-1.5px,-1.5px)`;
    minsHand.style.transform = `rotate(${((minsNow / 60) * 360) + ((secsNow / 60) * 6) - 90}deg)  translate(-3px,-3px)`;
    hourHand.style.transform = `rotate(${((hourNow / 12) * 360) + ((minsNow / 60) * 30) - 90}deg)  translate(-3px,-3px)`;
}
setInterval(setTime,1000);   
setTime();