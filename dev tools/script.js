const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p =document.querySelector('p');
// right click on element and select break to check for js modification
p.addEventListener('click',(e)=>{
    p.style.color='#bfda12';
    p.style.fontSize='50px';
});

// regular
console.log('hello');

// interpolated
console.log('hello my name is %s','Kartik');
let name ='kartik';
console.log(`hello my name is ${name}`);

// styled 
// %c flag helps in adding css to the message
console.log('%c I am styled text','font-size:20px;background:red;');

// warning
console.warn('Stop! this is a warning');

// error
console.error('All Systems Shutdown');

// Info
console.info('This is to let you know ...')

// Assert
// assert only logs when assertion fails
console.assert(1===2,'this is wrong');

// clear
// console.clear();

// viewing DOM element
// log only gives the dom element
console.log(p);
// dir gives the properties and methods associated as well
console.dir(p);

// Grouping together
dogs.forEach(dog=>{
    console.group(`${dog.name}`);
    // use console.groupCollapsed() if the default behavior is collaped
    // group all these log statements together for a name
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age *7} in dog years old`);
    console.groupEnd(`${dog.name}`);
});

// count
// count the occurence of a word/obj

console.count('Kartik');
console.count('Kartik');
console.count('Sharma');
console.count('Kartik');
console.count('Sharma');
console.count('Kartik');
console.count('Sharma');
console.count('Sharma');

// time 
// use to check how much time an operation took
console.time('method');
setTimeout(function() {
    console.timeEnd('method');    
}, 2000);

console.table(dogs);