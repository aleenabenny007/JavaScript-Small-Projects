'use strict';

const slider = document.querySelector('.items');
let isDown = false;    
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
});              

slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault(); // prevents default behaviours like selecting text, sliding, etc.

    // to get the initial point / position of tap
    const x = e.pageX - slider.offsetLeft;    

    // to get the change in position
    const walk = x - startX;
    
    // to scroll from the initial scroll position to the current mousemoved distance
    slider.scrollLeft = scrollLeft - walk;
});    
