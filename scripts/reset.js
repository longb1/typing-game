export default function reset(){
    arrayIndex = 0;
    currentWord='';
    wordArray=[];
    quoteDisplayElement.innerHTML=''
    quoteInputElement.value = null
    quoteInputElement.disabled="true";
}