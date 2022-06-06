// export default 
export default function newText(QUOTE) {
  let progressBar = 0;
  let arrayIndex=0;
  const wordArray = QUOTE.split(' ')
  const charArray = QUOTE.split('')
  return {
    wordArray, 
    charArray,
    arrayIndex,
    progressBar
  };
}
