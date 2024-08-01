'use strict';

const panels = document.querySelectorAll('.panel');

const images = [
    'https://png.pngtree.com/thumb_back/fw800/background/20231014/pngtree-beautiful-blue-sky-mobile-phone-wallpaper-background-image_13942383.jpg',
    'https://w0.peakpx.com/wallpaper/330/711/HD-wallpaper-clouds-clouds-sherif-cosmos-green-interesting-light-nice-night-sky-space.jpg',
    'https://w0.peakpx.com/wallpaper/336/926/HD-wallpaper-green-tree-blue-sky-background-greenery-grass-nature.jpg',
    'https://i.pinimg.com/originals/3f/57/77/3f5777a037bcf3b50e968aef1e65b63f.jpg',
    'https://w0.peakpx.com/wallpaper/422/826/HD-wallpaper-waterfall-fall-nature-rock-stone-water.jpg'
];

console.log(panels);

panels.forEach((panel, i) => {
    panel.style.background = `url('${images[i]}')`;
    panel.addEventListener('click', function() {
        resetPanels();
        panel.classList.add('active');
    })
});

function resetPanels() {
    panels.forEach(panel => panel.classList.remove('active'));
}