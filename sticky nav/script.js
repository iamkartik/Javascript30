const nav = document.querySelector('#main');
const navTop = nav.offsetTop;


function fixNav(){
    // if window has scrolled  more than the top of nav bar
    if(window.scrollY>=navTop){
        // add nav-fix class in body/nav
        
        // as somethinfg becomes fixed it flots to the top leaving space behind
        // to offset the sudden jump by rest of the elements , add padding top to the body
        // equal to the nav height
        document.body.style.paddingTop=`${nav.offsetHeight}px`;

        document.body.classList.add('nav-fix');
    }else{
        document.body.style.paddingTop=0;
        document.body.classList.remove('nav-fix');
    }
}

window.addEventListener('scroll',fixNav);