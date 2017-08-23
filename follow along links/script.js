const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');

document.body.appendChild(highlight);

function highlightLink(){
    // get the width and height of the link
    // to give the span same width and height
    // get the x and y corrdinates as well
    // getBoundingClientRect gives all the info
    const coords = this.getBoundingClientRect();

    // give the span same width and height
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    // give the top and left value to transform translate property
    // add window.ScrollY and X to compensate for the scrolling of window
    const translateCoords={
        top:coords.top + window.scrollY,
        left:coords.left + window.scrollX
    };

    highlight.style.transform = `translate(${translateCoords.left}px,${translateCoords.top}px)`;
    //console.log(coords);
}

triggers.forEach(trigger=>trigger.addEventListener('mouseenter',highlightLink));