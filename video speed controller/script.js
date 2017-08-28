const video =document.querySelector('.align');
const speed =document.querySelector('.speed');
const bar =document.querySelector('.speed-controls');

function speedControl(e){
    // page Y gives us the the pixel on page, to calculate the height from
    // 0 to div height , subtract the offset top of div from it
    // y ranges from [0-divHeight]
    const y = e.pageY - this.offsetTop;
    // covert y to percent
    const percentY = Math.round((y/this.offsetHeight)*100);
    // min speed of playback
    const min=0.5;
    // max speed of playback
    const max=4;
    // set the height of speed bar
    bar.style.height=`${percentY}%`;
    // calculte the playback rate in terms of max and min
    const playbackRate =(percentY/100)*(max-min) + min;
    // set the inner text equal to playback rate
    bar.innerText = `${playbackRate.toFixed(1)}x`;
    // set the actual video playback
    video.playbackRate =playbackRate;
}

speed.addEventListener('mousemove',speedControl);