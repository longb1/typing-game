//animates the icons racing each other.
const racebutton=document.getElementById('raceBtn')
racebutton.addEventListener('click',()=>{move()})

function move() {
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