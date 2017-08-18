const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.photo-strip');
const snap = document.querySelector('.snap');
const takePic = document.querySelector('#takepic');

function getVideo(){
    // to access the cam use navigator.mediaDevices
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
                .then(localMediaStream =>{
                    //console.log(localMediaStream);
                    // localMediaStream contains the local media 
                    // video tkes a url not a stream convert to stream using window.URL.createObjectURL
                    video.src = window.URL.createObjectURL(localMediaStream);
                    // play video for continuous stream
                    video.play();
                }).catch(err =>{
                    console.error('Error --',err);
                });
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    //console.log(width,height);
    // set the canvas width and height to webcam 
    canvas.width = width;
    canvas.height = height;
    /*
    requestAnimationFrame(()=>{
        ctx.drawImage(video,0,0,width,height);
    });*/
    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);

        // get pixels from the canvas
        let pixels = ctx.getImageData(0,0,width,height);
        // add the red effect
        // pixels=redEffect(pixels);
      
        // rgb Split effect
        //pixels=rgbSplit(pixels);
        // for ghosting effect    
        //ctx.globalAlpha=0.1;
        // put them back

        // green screen
       // pixels =greenScreen(pixels);       
        ctx.putImageData(pixels,0,0);

    },16);
}

function takePhoto(){
    // play sound
    snap.curentTime=0;
    snap.play();

    // get data from canvas
    const data = canvas.toDataURL('image/jpeg');
    // create a link to download Image
    const link = document.createElement('a');
    link.href =data;
    // name of the file
    link.setAttribute('download','me');
    // add to a image tag
    link.innerHTML = `<img src="${data}" alt="me"/>`;
    // insert inside the photo strip , add as the first child
    strip.insertBefore(link,strip.firstChild);

}

function redEffect(pixels){
    // pixels is an array of values from 0-255 in rgba format
    // pixels[0] is  for red
    // pixels[1] is  for green
    // pixels[2] is  for blue
    // pixels[3] is  for alpha
    // then the pattern repeats after every 4 values
    for(let i=0;i<pixels.data.length;i+=4){
        pixels.data[i + 0]=pixels.data[i + 0]+100;//red
        pixels.data[i + 1]=pixels.data[i + 1]-50;// grenn
        pixels.data[i + 2]=pixels.data[i + 2]*0.5;// blue
    }
    return pixels;
}
// change prev and forward pixels to current value
function rgbSplit(pixels){
    for(let i=0;i<pixels.data.length;i+=4){
        pixels.data[i - 150]=pixels.data[i + 0]+100;//red
        pixels.data[i + 100]=pixels.data[i + 1]-50;// grenn
        pixels.data[i - 150]=pixels.data[i + 2]*0.5;// blue
    }
    return pixels;
}

// create a green screen
// take a particular range and pixels having those color are set to trnsaparent ie alpha =0
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });
    console.log(levels.rmin,levels.rmax);

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];
    

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}


takePic.addEventListener('click',takePhoto);

getVideo();

// video emits event can play , once it is done paint to canvas
video.addEventListener('canplay',paintToCanvas);