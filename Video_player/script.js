'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.currentTime = 1;  

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}  

function updateButton() {
    const icon = this.paused ? '►' : '⏸';   
    toggle.textContent = icon;     
}     

function skip(){ 
    if(video.currentTime > video.duration) video.currentTime = video.duration;
    video.currentTime += parseFloat(this.dataset.skip); 
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);      
video.addEventListener('pause', updateButton);  
toggle.addEventListener('click', togglePlay);      
video.addEventListener('timeupdate', handleProgress); // happens as the playback position is changed(automatically happens as the video plays)

skipButtons.forEach(btn => btn.addEventListener('click', skip));  
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));    

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
  