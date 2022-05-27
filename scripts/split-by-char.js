//split by character, for styling purposes
function splitByWord(){
    
    QUOTE.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    
}