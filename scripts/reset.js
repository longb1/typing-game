export default function reset(arrayIndex,currentWord,wordArray){
    const quoteDisplayElement = document.querySelector('[data-text-display]')
    const quoteInputElement = document.querySelector('[data-text-input]')

    arrayIndex = 0;
    currentWord='';
    wordArray=[];
    quoteDisplayElement.innerHTML=''
    quoteInputElement.value = 'Start typing here...'
    quoteInputElement.disabled="true";
    console.log("noice")
}