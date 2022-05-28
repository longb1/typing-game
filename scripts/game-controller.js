import inputField from "./input-field.js"
import splitByChar from "./split-by-char.js"
import splitByWord from "./split-by-word.js"

//controls flow of game from when user clikcs button to generating quote
export default function controller(){
    const newQuote= rendernewquote()
    const wordArray = splitByWord(QUOTE)
    const charArray = splitByChar(QUOTE)


    inputField(wordArray)
    return 
}