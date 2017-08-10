const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');

let lastChecked;
let inBetween =false;

function handleCheck(e){
    // check if shift key is pressed and the item is checked
    if(e.shiftKey && this.checked){
        // loop over the checkbox list and check if the check box is equal to 
        // current(that triggered the event) or the last checked
        // change the value of inbetween to true on first checkbox
        // and false on the last checkbox 
        checkboxes.forEach(checkbox=>{
            if(checkbox===this||checkbox===lastChecked){
                inBetween=!inBetween;
                console.log(checkbox,'Inbetween these two all will be checked');
            }
            // if a checkbox comes after the first and before last it's value will be checked
            if(inBetween){
                checkbox.checked=true;
            }
        });
    }

    lastChecked =this;
}

checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));