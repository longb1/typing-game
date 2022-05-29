//split by character, for styling purposes
export default function splitByChar(QUOTE){
    const quoteDisplayElement = document.querySelector('[data-text-display]')

    let charArray = QUOTE.split('')
    console.log(charArray)
    charArray.forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        characterSpan.style.color="blue"
        quoteDisplayElement.appendChild(characterSpan)
    })
    
    return charArray
}