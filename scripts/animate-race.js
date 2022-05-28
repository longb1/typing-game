//animates the icons racing each other.

export default function move(word, charArray) {
  percentage = word.length/charArray.length;

  console.log("hello")
  let i = 0;
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("racer");
    let width = 1;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = `${width}%`;
      }
    }
  }
}