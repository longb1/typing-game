const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('textDisplay')
const quoteInputElement = document.getElementById('textInput')

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

async function renderNewQuote(){
    const QUOTE = await getRandomQuote()
    quoteDisplayElement.innerText=QUOTE
    quoteInputElement.value = null
}

renderNewQuote()