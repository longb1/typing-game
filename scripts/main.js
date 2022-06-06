import reset from "./reset.js"
import move from "./animate-race.js"
import newText from "./new-object.test.js"
import renderQuote from "./render-quote.js"

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.querySelector('[data-text-display]')
const quoteInputElement = document.querySelector('[data-text-input]')
const timerElement = document.querySelector('[data-timer]')

let currentText;

window.onload = function() {
    reset()
};

async function getRandomQuote(){
    const response = await fetch(RANDOM_QUOTE_API_URL)
    const data = await response.json()
    return data.content
}
const startBtn = document.querySelector('[data-start-btn]')

startBtn.addEventListener('click',async function(){
    reset() //wipes display
    const QUOTE = await getRandomQuote()
    
    currentText = newText(QUOTE)
    renderQuote(currentText.charArray)
    console.log(`array index: ${currentText.arrayIndex}`)

    quoteInputElement.disabled=false;
    quoteInputElement.value = ''
    quoteInputElement.focus()

})

quoteInputElement.addEventListener('keypress',function(e){
    const spanArray = quoteDisplayElement.querySelectorAll('span.incomplete')
    if (e.key==" "){
        let currentWord = currentText.wordArray[currentText.arrayIndex] //get curent word (no spaces)
        const lastWord= currentText.wordArray[currentText.wordArray.length - 1]
        const userInput=quoteInputElement.value

        if(userInput == currentWord && userInput != lastWord){
            currentText.progressBar= move(currentText.progressBar,userInput,currentText.charArray)
            e.preventDefault();
            

            const completedChars= userInput.split("")
            for(let i=0;i<completedChars.length+1;i++){ //add 1 to length so it includes the space as well.
                spanArray[i].classList.remove("incomplete") //removes class off the first # of nodelist.
                spanArray[i].classList.add("correct")
            }

            currentText.arrayIndex++;
            //move to next word in array
            currentWord = currentText.wordArray[currentText.arrayIndex]
            console.log(`array index: ${currentText.arrayIndex}`)
            quoteInputElement.value=""

        }else if(userInput==lastWord){
            const elem = document.getElementById("racer");
            elem.style.width=`100%`
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
