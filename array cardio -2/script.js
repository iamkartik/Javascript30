const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const isAdult = people.some(person=>{
        const curYear = (new Date).getFullYear();
        return curYear-person.year>=19;
    });
    console.log({isAdult}); // {} inside an object notation    
    
    // Array.prototype.every() // is everyone 19 or older?
    const isEveryAdult = people.every(person=>
         ((new Date).getFullYear())-person.year>=19 //implicit return statement
    );
    console.log({isEveryAdult});       
    
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // returns the first one it finds
    const comment = comments.find(comment=>comment.id===823423);
    console.log(comment);
    
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    // use findIndex inplace of indexOf when searching object arrays 
    // it expects a callback as a parameter whereas indexOf expects a value
    const index = comments.findIndex(comment=>comment.id ===823423);
    console.log(index);

    // comments.splice(index,1);
    // console.table(comments);

    // create a new array with one comment removed
    // use es6 spread ... to populate it    

    const newComments = [
        ...comments.slice(0,index),
        ...comments.slice(index+1)
    ];
    console.table(comments);
    console.table(newComments);
    