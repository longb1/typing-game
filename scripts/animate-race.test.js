export default function move(progressBar, userInput, charArray) {
  const percentage = parseInt((userInput.length/charArray.length)*100);
  console.log(`percentage is ${percentage}`)
  console.log(`current progress is ${progressBar}`)

  const elem = document.getElementById("racer");
  console.log(`${progressBar} + ${percentage}`)

  progressBar+=percentage
  elem.style.width=`${progressBar}%`
  console.log(`new width ${progressBar}`)
  return progressBar
}
// userInput='John'
// charArray=['j','o','h','n',' ','h','e','l','l','o']


// test('updates css width of racer to move it.', () => {  
//   expect(move(userInput, charArray)).toBe('40%');
// });