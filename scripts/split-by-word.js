//split by word, so the animation can track when user has completed a word
export default function splitByWord(){
    
    QUOTE.split(' ').forEach(character =>{
        console.log(character.length)
        percentage = character.length/entirequote;
    })
    
}