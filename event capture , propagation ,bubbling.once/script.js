const divs = document.querySelectorAll('div');

function logClass(e){
    // innermost event bubbles up for all parent divs
    // click on innermost => also click on parent
    
    // capture goes top to down
    // bubble from down to up
    console.log(this.classList.value);
    // stopPropagation halps in stopping the bubbling
    e.stopPropagation();
}
// capture:true is an optional param it means capture events ( top to bottom ) and not bubble it 
// by default bubble is true
// once:true unbinds the event listener after running once 
// subsiquent clicks will not trigger logClass
divs.forEach(div => div.addEventListener('click',logClass,
                                        {
                                            capture:false,
                                            once:true
                                        }
                                        ));