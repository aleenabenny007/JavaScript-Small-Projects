'use strict';

const image = document.getElementById('image');
const text = document.querySelector('h4');
const heart = document.querySelector('.fa-heart');
const container = document.querySelector('.container');

let count = 0;

image.addEventListener('dblclick', function() {
    count ++;
    text.innerText = `You clicked it ${count} times`
    container.classList.add('active');
    setTimeout(() => container.classList.remove('active'),1000);
});

