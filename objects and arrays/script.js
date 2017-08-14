// start with strings , numbers and boolean
let age =100;
let age2 =age;
console.log(age,age2);
age=200;
console.log(age,age2);

let name ='Kartik'
let name2=name;
console.log(name,name2);
name='Sharma';
console.log(name,name2);

// Arrays
const players =['kartik','Arpan','savy','gc'];

console.log(players);
const team =players;
console.log(team);

team[3] ='beti';
console.log(team);
// although only team is changed but the original array changes as well
// because team is only only a reference to players and not a new array with all the elements
console.log(players);

// make a copy rather than a reference 
// ways to copy into a new array

// using slice() , without any params it slices the entire array
const team2 = players.slice();
// using concat , concat into an empty array
const team3 = [].concat(players);
// using es6 spread
const team4 =[...players];
// using Array.from
const team5 = Array.from(players);

team2[3]='aasheet';
// here both are seperate arrays and changing one will not affect the other
console.log(team2);
console.log(players);


// same refernce issue is there for objects as well
const person ={
    name:'kartik Sharma',
    age:26
};

const captain = person;
captain.age = 30;
// although changed captain , person also changes
console.log(person);

// way to copy into a new object
// {} , original object and new properties to be added to new object
const cap2 = Object.assign({},person,{age:33,number:90});
console.log(cap2);

// this is only a shallow copy , will not work for nested objects

const kartik ={
    name:'Kartik',
    age:26,
    exercise:{
        cardio:'running',
        weights:'squats'
    }
};

const man = Object.assign({},kartik);
// only changes for man
man.age=40;
console.log(man);
// changes for kartik as well
man.exercise.cardio='hiit';
console.log(kartik);

// either use a function to deep clone or use JSON 
// poor man's deep clone
const man2 = JSON.parse(JSON.stringify(kartik));
man2.exercise.weights='banch press';
console.log(man2.exercise);
// not changed
console.log(kartik.exercise)
