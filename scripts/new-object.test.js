// export default 
function newText(QUOTE) {
  let progressBar = 0;
  let arrayIndex=0;
  const wordArray = QUOTE.split(' ')
  const charArray = QUOTE.split('')
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

let newQuote = newText("hello sir")
newQuote=newText("john doe")
// exports.newText = newText;


// test('returns an object', ()=>{
//   expect(newText('hello sir')).toBe({})
// })


test('use array index on word array.', ()=>{
  expect(newQuote.wordArray[newQuote.arrayIndex]).toBe("john")
})
