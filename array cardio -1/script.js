 const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 
                    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
                    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
                    'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 
                    'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
                
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // returns a boolean true/false
    const fifteen= inventors.filter(inventor =>
        (inventor.year>=1500 && inventor.year<1600));    

    console.table(fifteen);


    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    // map stamps each item with something ie if you want to perform operations on all items in the array
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // sorting uses a comparator function where we define the values to compare , larger values get 1 and smaller get -1

    const sorted = inventors.sort((a,b)=> a.year>b.year?1:-1 );
    console.table(sorted);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    // reduce helps in performing global operations on all the items 
    //  let totalYears =0;
    //  for(let i=0;i<inventors.length;i++){
    //      totalYears += inventors[i].passed-inventors[i].year;
    //  }

    // here total is the value returned by previous iteration , the 0 at the end initializes total to 0 otherwise it'll be undefined first time
    const totalYears = inventors.reduce((total,inventor)=>{
          return total+(inventor.passed-inventor.year);
    },0);    

    console.log(totalYears);

    // 5. Sort the inventors by years lived

    const oldest = inventors.sort((a,b)=>{
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy >nextGuy?-1:1;
    });
    console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    /*
    // <-- run following code in console on  https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris  -->

    //select the dom element containing all links  
    const names = document.querySelector('.mw-category');

    // get the list of all links inside names
    const links = names.querySelectorAll('a');
    // links is a nodeList which is not an array and does not contain filter sort etc functions but is iterable . We have to covert it into an array

    // There are two ways Array.from() or es6 spread [...]
    const linkA = Array.from(links);
    const linkB = [...links];
    // get inner text from the anchor tags for name and filter it for 'de'
    const de = linkA
                    .map( link=>link.innerText)
                    .filter(streetName => streetName.includes('de'));
    console.log(de);
    
    // <-------------- ends --------------->                
*/
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne,nextOne)=>{
        const aLast = lastOne.split(', ')[0];
        const bLast = nextOne.split(', ')[0];
        return aLast>bLast?1:-1;
    });
    console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // start / initialize obj with a blank object {} 
    // every iteration check whether the new item key is present in the obj
    // if not add a new key of item initialize it with 0 . Increment the item key 
    // return obj to be used in the next iteration
    const transportation = data.reduce((obj,item)=>{
            if(!obj[item]){
                obj[item]=0;
            }
            obj[item]++;
            return obj;
    },{});
    console.log(transportation);
