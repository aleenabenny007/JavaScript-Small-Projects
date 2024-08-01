'use strict';

const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, i) => {
    cup.addEventListener('click', () => fillCups(i));
});

function fillCups(index) {
    smallCups.forEach((cup,i) => {
        if(i <= index){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full'); 
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCupsNum = document.querySelectorAll('.full').length;

    const litresRemaining = 2 - (fullCupsNum * 250 / 1000);
    const percentageFilled = fullCupsNum / 8 * 100;

    litres.innerText = `${litresRemaining}L`;
    percentage.innerText = `${percentageFilled}%`;

    percentage.style.height = `${percentageFilled}%`;

    if(percentageFilled === 100){
        remained.style.height = 0;
    } else remained.style.height = 'unset';
}
