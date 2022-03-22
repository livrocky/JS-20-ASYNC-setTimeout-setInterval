//pradedam intervalu cikla
const int1 = setInterval(printL, 1000);
//sustabdom intervalu cikla
// clearInterval(int1);
function printL() {
  console.log("hello");
}

setTimeout(clearInterval, 5000, int1);
const h3El = document.querySelector("h3");
function getTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("lt");
  h3El.textContent = time;
}

getTime();
setInterval(getTime, 1000);
