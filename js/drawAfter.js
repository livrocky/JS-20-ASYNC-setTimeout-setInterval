const things = ["red", "green", "blue"];
const ulEl = document.getElementById("ul");
let readyColors = [];

function getThings(callback) {
  setTimeout(() => {
    readyColors = things;
    callback();
  }, 2000);
}

function drawThings() {
  const stringElements = readyColors
    .map((col) => {
      return ` <li>${col}</li>`;
    })
    .join("");
  //   console.log("stringElements===", stringElements);
  ulEl.innerHTML = stringElements;
}

getThings(drawThings);
// drawThings();
console.log("readyColors===", readyColors);
