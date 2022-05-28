import reset from "./text-complete.js";

//detects whether the user is right or wrong when typing the word out.

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
