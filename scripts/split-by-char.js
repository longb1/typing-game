//split by character, for styling purposes
export default function splitByChar(){
    
    QUOTE.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    
}