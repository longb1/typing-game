import reset from "./text-complete.js";

//detects whether the user is right or wrong when typing the word out.
const textInput = document.getElementById('textInput')
let arrayIndex = 0;
let currentWord;
let wordArray;

textInput.addEventListener('keypress',function(e){
    if (e.key==" "){
        //get value
        
        checkInput(textInput.value)
    }
})

export default function checkInput(userinput){
    //whenuser hits space, run the below

    if(userinput == currentWord){
        arrayIndex++;
        //move to next word in array
        currentWord = wordArray[arrayIndex]
        textInput.textContent=""
       
    }else if(currentWord ==null){
        reset()
    }else{
        textInput.style.backgroundColor="red"
    }
}
