import move from "./animate-race.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"
import inputField from "./input-field.js"
import checkInput from "./input-field.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.querySelector('[data-text-display]')
const quoteInputElement = document.querySelector('[data-text-input]')
const timerElement = document.querySelector('[data-timer]')

let arrayIndex = 0;
let currentWord;
let wordArray;

const textInput = document.getElementById('textInput')

textInput.addEventListener('keypress',function(e){
    if (e.key==" "){
        //get value
        checkInput(textInput.value)
    }
})


const startBtn = document.getElementById('raceBtn')
startBtn.addEventListener('click',start())

quoteInputElement.addEventListener('input', ()=>{
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((characterSpan, index)=>{
        const character = arrayValue[index]
        if(character==null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if(character===characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })

    if(correct) renderNewQuote()
})

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

//timers
let startTime
function startTimer(){
    timerElement.innerText=0
    startTime=new Date()
    setInterval(() =>{
        timer.innerText = getTimerTime()
    },1000)
}

function getTimerTime(){
   return Math.floor(new Date() - startTime)/1000
}
