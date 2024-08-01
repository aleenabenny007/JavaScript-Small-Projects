'use strict';
 
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('button');
let lastHole;
let timeUp = false;
let score = 0;

function randTimes(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomdHole(holes) {
    const hole = holes[randTimes(0, holes.length - 1)];
    if(hole === lastHole){
        return randomdHole(holes);
    }
    lastHole = hole;   
    return hole;
}

function peep() {
    const time = randTimes(200, 1000);
    const hole = randomdHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}

function startGame(){
    startBtn.style.display = 'none';
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peep();
    setTimeout(() => {
        timeUp = true;    
        startBtn.style.display = 'inline-block';
    } ,10000);
}

function bonk(e) {
    if(!e.isTrusted) return; // cheating by programmatically invoking click event
    score ++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));