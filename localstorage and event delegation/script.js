const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// get items from localStorage or initialize as an empty array
const items =JSON.parse(localStorage.getItem('items'))||[];

function addItem(e){
    // by default the page refreshes after a form submit
    // prevent default stops the default action
    e.preventDefault();
    // this here refers to the form , select the input with name = item
    // inner () executes first gives an input tag , get value in text
    const text = (this.querySelector('[name=item]')).value;
    // using es6 syntax where {text:'text'} can be replaced with {text}
    const item ={
        text,
        selected:false
    };
    items.push(item);
    // call to populate list
    populateList(items,itemsList);
    
    // populate data in localStorage , 
    // localStorage.setItem will take a key and a STRING value , 
    // if the value is an object it will call .toString on it 
    localStorage.setItem('items',JSON.stringify(items));

    // reset form 
    this.reset();
}

// plates assigned empty to prevent error
function populateList(plates=[],plateList){
    plateList.innerHTML = plates.map((plate,i)=>{
        return `
                <li>
                <input type="checkbox" id="item${i}" data-index=${i} ${plate.selected?'checked':''}>
                <label for="item${i}">${plate.text}</label>
                </li>
                `;
                // ${plate.selected?'checked':''} is done to get a checked sign

    }).join('');//join helps create a string to populate in html instead of a comma seperated array
}

function toggleSelected(e){
    // each event will have 2 targets , checkbox and the label
    // only listen for input ones else return
    if(!e.target.matches('input')) return; // EVENT DELEGATION
    // get the element
    const element = e.target;
    // get index in items array using the data-index property set
    const index = element.dataset.index;
    // change the selected to its reverse
    items[index].selected = !items[index].selected;
    // update localStorage
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList);
}

addItems.addEventListener('submit',addItem);

// to toggle and persist checkbox
// cannot add event Listeners to inidiviual checkboxes as they are created dynamically and not on page load
// instead add event Listener on parent and ask it to delegate the event to the child
// in this case parent is ul and child is the li added on every form submit
itemsList.addEventListener('click',toggleSelected);

// call on pageLoad
populateList(items,itemsList);