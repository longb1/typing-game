import move from "./animate-race.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"
import checkInput from "./input-field.js"
import start from "./start.js"
import reset from "./reset.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.querySelector('[data-text-display]')
const quoteInputElement = document.querySelector('[data-text-input]')
const timerElement = document.querySelector('[data-timer]')

let wordArray;
let arrayIndex = 0;
let charArray

window.onload = function() {
    reset(arrayIndex,wordArray)
};

async function getRandomQuote(){
    const response = await fetch(RANDOM_QUOTE_API_URL)
    const data = await response.json()
    return data.content
}
const startBtn = document.querySelector('[data-start-btn]')

startBtn.addEventListener('click',async function(){
    const QUOTE = await getRandomQuote()
    wordArray = splitByWord(QUOTE)
    charArray = splitByChar(QUOTE)
    quoteInputElement.disabled=false;
    quoteInputElement.value = ''
    quoteInputElement.focus()

    console.log(wordArray)
})

quoteInputElement.addEventListener('keypress',function(e){
    const spanArray = quoteDisplayElement.querySelectorAll('span.incomplete')
    if (e.key==" "){
        
        let currentWord = wordArray[arrayIndex] //get curent word (no spaces)
        const lastWord= wordArray[wordArray.length - 1]
        const userInput=quoteInputElement.value

        if(userInput == currentWord && userInput != lastWord){
            e.preventDefault();

            const completedChars= userInput.split("")
            for(let i=0;i<completedChars.length+1;i++){ //add 1 to length so it includes the space as well.
                spanArray[i].classList.remove("incomplete") //removes class off the first # of nodelist.
                spanArray[i].classList.add("correct")
            }

            arrayIndex++;
            //move to next word in array
            currentWord = wordArray[arrayIndex]
            
            quoteInputElement.value=""
        }else if(userInput==lastWord){
            // reset function
            reset(arrayIndex,currentWord,wordArray)
        }
    }
})



quoteInputElement.addEventListener('input', ()=>{
    //if current input matches current word, start highlighting from next word onwards
    const spanArray = quoteDisplayElement.querySelectorAll('span.incomplete')
    
    const arrayValue = quoteInputElement.value.split('')
    spanArray.forEach((characterSpan, index)=>{
        const character = arrayValue[index]

        if(character==null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        } else if(character===characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            quoteInputElement.style.backgroundColor=""
        }else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')

            quoteInputElement.style.backgroundColor="red"
            
        }
    })
})


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
