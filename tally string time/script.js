const timeNodes = document.querySelectorAll('[data-time]');
// convert nodeList to array
const timeNodesArray =[...timeNodes];

const seconds = timeNodesArray.map(node=>node.dataset.time)     // get the time data from li element
                // from the time data map to seperate into mmin and sec
                // booth values are string , parse it and return toal seconds (min*60+sec)
                .map(node=>{
                    // es6 syntax
                    [min,sec]=node.split(':').map(parseFloat); 
                    // total time in seconds
                    return min*60+sec; 
                })// reduce the total array to get total time in sec
                .reduce((total,sec)=>{ return total+sec; },0); 

let secLeft = seconds;
// calculate hours from total seconds
const hours = Math.floor(secLeft/3600);
// calculate remaining seconds
secLeft = secLeft%3600;

// calculate the min
const minutes = Math.floor(secLeft/60);
// claculate remaining sec
secLeft = secLeft%60;

console.log(hours,minutes,secLeft);

