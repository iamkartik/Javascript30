const triggers = document.querySelectorAll('.navbar >li');
const background = document.querySelector('.dropdownBack');
const nav = document.querySelector('.top');

function hoverEnter(){
    // add a trigger enter class for display block
    this.classList.add('trigger-enter');
    //after 150ms add trigger enter active class for opacity
    // using function() syntax changes the scope of this from li to window
    //setTimeout(function(){console.log(this)},150);
    // instead using an => notation keeps the value of this same 
    setTimeout(()=>{
        // only add active if enter is present otherwise enter may get removed on mouseleave
        // and active will get applied after 150ms
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active')
        }
    },150);
    background.classList.add('open');
    // get the actual dropdown from the list item
    const dropdown = this.querySelector('.dropdown');
    // get coordinates for the background to be applied
    const dropdownCords = dropdown.getBoundingClientRect();
    // get nav element coordinates 
    const navCords =nav.getBoundingClientRect();

    const coords = {
        width:dropdownCords.width,
        height:dropdownCords.height,
        top:dropdownCords.top - navCords.top,
        left:dropdownCords.left - navCords.left
    };

    // set the background width and height equal to dropdown
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    //background.style.transform = `translate(${coords.left}px,${coords.top}px)`;
    background.style.transform =`translate(${coords.left}px,${coords.top}px)`;

    
}

function hoverExit(){
    // remove the class
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}


triggers.forEach(trigger=>trigger.addEventListener('mouseenter',hoverEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave',hoverExit));
