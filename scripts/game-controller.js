//controls flow of game from when user clikcs button to generating quote
export default async function start(){
    const QUOTE = await getRandomQuote()
    const wordArray = splitByWord(QUOTE)
    const charArray = splitByChar(QUOTE)
    quoteInputElement.disabled="false";

    inputField(wordArray)
    
    return QUOTE
}