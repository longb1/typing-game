//applies a span to each character in the text, so it can be styled.
export default function renderQuote(charArray){
    const quoteDisplayElement = document.querySelector('[data-text-display]')

    charArray.forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.classList.add("incomplete")
        characterSpan.innerText = character
        characterSpan.style.color="blue"
        quoteDisplayElement.appendChild(characterSpan)
    })
    
    return charArray
}