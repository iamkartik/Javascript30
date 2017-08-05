const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities =[];

// fetch returns a promise , on success it gives just a readable stream 
// convert the stream to json ( blob has a json coverting method )
// use es6 spread ... to spread the data and push in cities array
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch,cities){
    // for each city check if the function returns true/not
    return cities.filter(place=>{
    // create a new regular expression 'gi' are the flags g - global find in entire string
    // i - case insensitive
    const regex = new RegExp(wordToMatch,'gi');
    return place.city.match(regex) || place.state.match(regex);
    });
}       

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch(){
    const matchArray = findMatches(this.value,cities);
                    
    // for highlighting the typed text 
    const regex = new RegExp(this.value,'gi');
    // map the filtered values and put in html tags 
    const html = matchArray.map(place =>{
        const cityName =place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName =place.state.replace(regex,`<span class="hl">${this.value}</span>`);

        return `<li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
    }).join(''); // .join in the end will convert the array into string

    suggestions.innerHTML =html;                                      
}

const searchInput =document.querySelector('.search');
const suggestions =document.querySelector('.suggestions');

// change event only fires when clicked outside , keyup fires with every new key
searchInput.addEventListener('change',displayMatch);
searchInput.addEventListener('keyup',displayMatch);