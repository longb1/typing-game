import splitByChar from "./split-by-char.js";
import splitByWord from "./split-by-word.js";
export default function newText(QUOTE) {
    let progressBar = 0;
    let arrayIndex=0;
    const wordArray = splitByWord(QUOTE)
    const charArray = splitByChar(QUOTE)
    return {
      wordArray, 
      charArray,
      arrayIndex,
      progressBar,
      updateProgress(newProgress) {
        this.progressBar = newProgress;
      },
      updateArrayIndex(newIndex){
        this.arrayIndex=newIndex;
      }
    };
}