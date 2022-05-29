import move from "./animate-race.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"
import checkInput from "./input-field.js"
import start from "./start.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.querySelector('[data-text-display]')
const quoteInputElement = document.querySelector('[data-text-input]')
const timerElement = document.querySelector('[data-timer]')

let wordArray;
let arrayIndex = 0;

async function getRandomQuote(){
    const response = await fetch(RANDOM_QUOTE_API_URL)
    const data = await response.json()
    return data.content
}
const startBtn = document.querySelector('[data-start-btn]')
startBtn.addEventListener('click',async function(){
    const QUOTE = await getRandomQuote()
    wordArray = splitByWord(QUOTE)
    quoteDisplayElement.textContent=QUOTE;
    quoteInputElement.disabled=false;
    console.log(wordArray)

    

})

quoteInputElement.addEventListener('keypress',function(e){
    
    if (e.key==" "){
        e.preventDefault();
        let currentWord = wordArray[arrayIndex]
        const lastWord= wordArray[wordArray.length - 1]

        const userInput=quoteInputElement.value
        if(userInput == currentWord && userInput != lastWord){
            arrayIndex++;
            //move to next word in array
            currentWord = wordArray[arrayIndex]
            
            quoteInputElement.value=""
        }else if(userInput==lastWord){
            // reset function
            arrayIndex = 0;
            currentWord='';
            wordArray=[];
            quoteDisplayElement.innerHTML=''
            quoteInputElement.value = 'Start typing here...'
            quoteInputElement.disabled="true";
            console.log("noice")
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
