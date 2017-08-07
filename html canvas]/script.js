const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA33';
// Create a rounded corner when the two lines meet
ctx.lineJoin = 'round';
// end of the line how it should look 
ctx.lineCap ='round';
// line width
ctx.lineWidth = 100;
// effects
//ctx.globalCompositeOperation='lighter';


let isDrawing = false;
let lastX=0;
let lastY=0;
let hue=0;
let direction = true;

function draw(e){
    // if not drawing then return and don't run on mousemove
    if(!isDrawing) return;
    // getting the rainbow effect with hsl (hue saturation and lightness)
    // update the hue on every draw call and set stroke Style with it
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY);
    // go to
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    // update last x and y
    // es6 syntax to assign
    [lastX,lastY]=[e.offsetX,e.offsetY];
    /*lastX = e.offsetX;
    lastY = e.offsetY;*/

    // update hue [ 0,360] after 360 reset to 0
    hue++;
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth>=100||ctx.lineWidth<=1){
        direction=!direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
    console.log(e);
}

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);