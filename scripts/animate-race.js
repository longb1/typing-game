//animates the icons racing each other.

export default function move(progressBar, userInput, charArray) {
  userInput+=" "
  const percentage = Math.round((userInput.length/charArray.length)*100)

  const elem = document.getElementById("racer");

  progressBar+=percentage
  elem.style.width=`${progressBar}%`
  return progressBar
}