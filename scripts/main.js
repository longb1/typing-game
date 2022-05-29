import move from "./animate-race.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"
import checkInput from "./input-field.js"
import start from "./start.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.querySelector('[data-text-display]')
const quoteInputElement = document.querySelector('[data-text-input]')
const timerElement = document.querySelector('[data-timer]')

let currentText;
let arrayIndex = 0;

async function getRandomQuote(){
    const response = await fetch(RANDOM_QUOTE_API_URL)
    const data = await response.json()
    return data.content
}
const startBtn = document.querySelector('[data-start-btn]')
startBtn.addEventListener('click',async function(){
    const QUOTE = await getRandomQuote()
    currentText = splitByWord(QUOTE)
    quoteDisplayElement.textContent=QUOTE;
    quoteInputElement.disabled=false;
    console.log(currentText)

    

})

quoteInputElement.addEventListener('keypress',function(e){
    if (e.key==" "){
        let currentWord = currentText[arrayIndex]
        console.log(currentWord)
        // checkInput(textInput.value)
        const userInput=quoteInputElement.value
        if(userInput == currentWord){
            arrayIndex++;
            //move to next word in array
            currentWord = currentText[arrayIndex]
            quoteInputElement.value=""
           
        }else if(currentWord ==null){
            reset()
        }else{
            quoteInputElement.style.backgroundColor="red"
            console.log(`wrong! type ${currentWord}`)
        }
    }
})



// quoteInputElement.addEventListener('input', ()=>{
//     const arrayQuote = quoteDisplayElement.querySelectorAll('span')
//     const arrayValue = quoteInputElement.value.split('')
//     let correct = true
//     arrayQuote.forEach((characterSpan, index)=>{
//         const character = arrayValue[index]
//         if(character==null){
//             characterSpan.classList.remove('correct')
//             characterSpan.classList.remove('incorrect')
//             correct = false
//         } else if(character===characterSpan.innerText){
//             characterSpan.classList.add('correct')
//             characterSpan.classList.remove('incorrect')
//         }else{
//             characterSpan.classList.remove('correct')
//             characterSpan.classList.add('incorrect')
//             correct = false
//         }
//     })

//     if(correct) renderNewQuote()
// })


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
