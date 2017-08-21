
window.SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
// new instance of SpeechRecognition
const recognition = new SpeechRecognition();
// otherwise the results will come after we have stopped speaking
recognition.interimResults = true;


let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

function extractAudio(e){
    
    // results is a nested list so map and just get the first element to get transcript
    // console.log(e); 
    const transcript = Array.from(e.results)
                                .map(result => result[0])
                                .map(result => result.transcript)
                                .join('');

    // append the text in the p tag
    p.textContent = transcript;

    // check if speaker has stopped , then create a new paragraph
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }                            
    console.log(transcript);                            
}
// add event listener to listen for result event and start extracting
recognition.addEventListener('result',extractAudio);
// the recognition ends after you stop talking 
// make it run again on end event
recognition.addEventListener('end',recognition.start);
// start recognition
recognition.start();