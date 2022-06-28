let block = document.getElementById("one");
function randint(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let a = 0;
block.onmousemove = function () {
  this.style.left = 10 + a + "px";
  a++;

  this.style.background = `rgb(${randint(0, 255)},  ${randint(
    0,
    255
  )}, ${randint(0, 255)})`;
};
