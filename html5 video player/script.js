const player = document.querySelector('.player');
const video = player.querySelector('.video-player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const fullscreen = player.querySelector('.fullscreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

let isSliderClicked = false;
let isProgressBarClicked = false;

function togglePlay(){
    const method = video.paused?'play':'pause';
    video[method]();// method is either pause or play , access the function in video and run it
}

function updateButton(){
    const icon = this.paused?'&#9654':'&#9646 &#9646';
    toggle.innerHTML=icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeValues(){
    if(!isSliderClicked) return;
    // video has the two properties volume and playackRate
    // the sliders are named accordingly
    video[this.name]=this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    // offset X contains the relative value
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}

function toggleFullScreen(){
    document.webkitIsFullScreen?document.webkitExitFullscreen():player.webkitRequestFullscreen();
}

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);

fullscreen.addEventListener('click',toggleFullScreen);

skipButtons.forEach(button=>(button.addEventListener('click',skip)));

progress.addEventListener('click',scrub);
// if isProgressBarClicked is true then only move to tun scrub
progress.addEventListener('mousemove',(e)=> isProgressBarClicked && scrub(e));
progress.addEventListener('mousedown',()=>isProgressBarClicked=true);
progress.addEventListener('mouseup',()=>isProgressBarClicked=false);


ranges.forEach(range=>(range.addEventListener('click',handleRangeValues)));
ranges.forEach(range=>(range.addEventListener('mousemove',handleRangeValues)));
ranges.forEach(range=>(range.addEventListener('mousedown',()=>isSliderClicked=true)));
ranges.forEach(range=>(range.addEventListener('mouseup',()=>isSliderClicked=false)));