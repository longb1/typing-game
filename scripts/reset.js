export default function reset(){
    const quoteDisplayElement = document.querySelector('[data-text-display]')
    const quoteInputElement = document.querySelector('[data-text-input]')

    quoteDisplayElement.innerHTML=''
    quoteInputElement.value = 'Start typing here...'
    quoteInputElement.disabled="true";
    console.log("wiped")
}