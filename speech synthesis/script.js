const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropDown = document.querySelector('#voices');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const speak = document.querySelector('#speak');
const stop = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    //speechSynthesis.getVoices method gets all the voices available in the system
    voices = this.getVoices();
    // populate the voices dropdown
    voicesDropDown.innerHTML = voices
                                 //   .filter(voice => voice.lang.includes('en'))    // for english language only
                                    .map(voice => 
                                    `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
                                    .join('');
}

function changeVoice(){
    // find the voice name in voices and set it 
    msg.voice = voices.find(voice => (voice.name === this.value));
    console.log(msg.voice);
    toggle();
}

function toggle(startOver =true){
    // cancel the current speech and speak in the upadated voice 
    speechSynthesis.cancel();
    // startOver by default is true i.e start again , if explicitely passed as false it will stop the speech
    if(startOver){
        speechSynthesis.speak(msg);
    }
    
}

function setOption(){
    // change the pitch , rate and text of the msg object
    msg[this.name] = this.value;
    // toggle to run it again
    toggle();
}

// speech synthesis is the actual variable with speak function
// it takes an utterance as a input
// voices should be added first
speechSynthesis.addEventListener('voiceschanged',populateVoices);
// change voice on option change
voicesDropDown.addEventListener('change',changeVoice);
// fire when the text , pitch or rate is changed
options.forEach(option => option.addEventListener('change',setOption));
// speak 
speak.addEventListener('click',toggle);
// stop speaking
stop.addEventListener('click',()=>toggle(false));
