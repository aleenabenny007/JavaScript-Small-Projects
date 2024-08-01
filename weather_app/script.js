'use strict';

const searchButton = document.getElementById('search');
const userInput = document.getElementById('input');
const temperature = document.getElementById('temperature');
const city = document.getElementById('city');

const tempArr = [10,20,40,12,16];

console.log(temperature);         

searchButton.addEventListener('click',function() {
    console.log("Clicked search button");

    userInput.value = "";
});     

