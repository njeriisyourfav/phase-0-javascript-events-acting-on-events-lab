// Your code here
function moveDodgerLeft(){
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);
if (left > 0) {
  dodger.style.left = `${left - 1}px`;
 }
}

function moveDodgerRight() {
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);
if (left < 200) {
  dodger.style.left = `${left + 1}px`;
}
}
document.addEventListener("keydown", function (event) {
console.log(event);
if (event.key === "ArrowLeft") {
  moveDodgerLeft();
}
else if (event.key === "ArrowRight") {
    moveDodgerRight()
  }
});