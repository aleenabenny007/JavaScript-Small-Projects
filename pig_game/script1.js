'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// declaring variables
let currentScore, scores, activePlayer, playing;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

const switchPlayer = function () {
    console.log("Aleena entered Switching Player");
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = (activePlayer === 0) ? 1 : 0;

    if (activePlayer) {
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
    } else {
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active');
    }
}

const resetGame = function () {
    console.log("Aleena entered RESET GAME");
    scores = [0, 0];
    currentScore = 0;
    current0El.textContent = currentScore;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    diceEl.classList.add('hidden');
    document.querySelector('.player--winner').querySelector('.name').textContent = `PLAYER ${activePlayer+1}`;
    activePlayer = 1;
    switchPlayer();
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    btnRoll.disabled = false;
    btnHold.disabled = false;
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {

    // Generating random dice roll
    const dice = Math.trunc((Math.random() * 6) + 1);

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `assets/dice-${dice}.png`;

    // check if dice rolled 1 
    if (dice === 1) {
        currentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        switchPlayer();
    } else {
        currentScore += dice;
    }
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
});

btnHold.addEventListener('click', function () {
    console.log("Aleena pressed button 'HOLD'");
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector('.player--winner').querySelector('.name').textContent = "Winner 🎉🎉";
        btnRoll.disabled = true;
        btnHold.disabled = true;
        diceEl.classList.add('hidden');
    } else {
        switchPlayer();
    }
});

btnNew.addEventListener('click', resetGame);         
