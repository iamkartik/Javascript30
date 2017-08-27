let countdown;
const timerDisplay = document.querySelector('.display-remaining-time');
const endTime = document.querySelector('.display-end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds){
    // clear previous timer , otherwise both will run simultaneously
    clearInterval(countdown);
    
    const now = Date.now();
    const then = now + seconds*1000 // now in milliseconds
    // call display endTime with the then timestamp
    displayEndTime(then);

    // decrement then , run every second
    // setInterval runs first time after 1 interval has elapsed
    // to show the seconds from start display Time before running the interval 
    displayTime(seconds);
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft < 0){
            // clear interval and return
            clearInterval(countdown);
            return;
        }
        displayTime(secondsLeft);
    },1000);
}

function displayTime(seconds){
    const minutes = Math.floor(seconds/60);
    const remainder = seconds%60;
    // add a 0 in case the seconds are less than 10
    const display = `${minutes}:${remainder<10?'0':''}${remainder}`;
    timerDisplay.innerHTML = display;
    // update the title as well
    document.title = display;
}

function displayEndTime(timestamp){
    // create a new Date from then timestamp
    const date = new Date(timestamp);
    const hours = date.getHours();
    const min = date.getMinutes();
    const amPmHour = hours>12?hours-12:hours; // use amPm to get time in 12 hour instead of 24 hr
    endTime.innerHTML = `Be Back By ${amPmHour}:${min<10?'0':''}${min}`;
}

function startTimer(){
    // parse and make the data-time an int and pass to the timer fn
    timer(parseInt(this.dataset.time));
}

buttons.forEach(button=>button.addEventListener('click',startTimer));
// if a element has a name then instead of using selector
// call it directly by document.name
// using (e)=>{} causes this to become global scope
// so using function(e){}
document.timeForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();
});