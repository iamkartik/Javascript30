const start = document.querySelector('#start-button');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('.score');
// last hole variable so that same hole does not poop up simultaneously
let lastHole;
// check if time is up
let timeUp =false;
// keep the score
let score =0;

// create random time for the mole to come up
function randomTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
}
// pick a random hole 
function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if(lastHole===hole){
        return randomHole(holes);
    }
    lastHole =hole;
    return hole;
}
// pick a random hole and time and apply css
function peep(){
    const time = randomTime(200,1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    // after the set time remove the class
    setTimeout(()=>{
        hole.classList.remove('up');
        // if total time is not up (10s) then rerun peep ,otherwise exit
        if(!timeUp){
            peep();
        }        
    },time);
}
// reset scoreboard to 0 , timeup to false and score to 0
function startGame(){
    scoreboard.textContent=0;
    timeUp=false;
    score=0;
    peep();
// set a timeout so that the game ends in 10s
    setTimeout(()=>{
        timeUp=true;
    },10000);
}

function hit(e){
    // check if the click is genuine ,or faked
    // isTrusted tells us if the click is genuine
    if(!e.isTrusted) return;
    // update the score , remove the up class aand update the scoreboard
    score++;
    this.parentNode.classList.remove('up');
    scoreboard.textContent=score;
    
}

start.addEventListener('click',startGame);
moles.forEach(mole=>mole.addEventListener('click',hit));