export default function reset(){
    arrayIndex = 0;
    currentWord='';
    wordArray=[];
    quoteDisplayElement.innerHTML=''
    quoteInputElement.value = null
    //textInput no pointer (blank it out cant access)
    //textdisplat empty
}