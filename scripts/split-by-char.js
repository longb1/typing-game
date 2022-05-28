//split by character, for styling purposes
export default function splitByChar(){
    
    let charArray = QUOTE.split('')
    
    charArray.forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    
    return charArray
}