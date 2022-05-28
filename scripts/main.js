import move from "./animate-race.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('textDisplay')
const quoteInputElement = document.getElementById('textInput')
const timerElement = document.getElementById('timer')


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

async function renderNewQuote(){
    quoteDisplayElement.innerHTML=''
    const QUOTE = await getRandomQuote()
    startTimer()
    quoteInputElement.value = null
}

const currentQuote = renderNewQuote;


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

renderNewQuote()