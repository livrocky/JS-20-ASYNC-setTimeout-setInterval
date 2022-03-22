//setTimeout be argumento

const h1El = document.querySelector("h1");
function changeH1() {
  h1El.textContent = "It was changed";
}
//setTimeout (kokia fn vykdisim, uz kiek laiko ms)
setTimeout(changeH1, 3000);
//___________________________________//
//
//setTimeout su argumentu
const h2El = document.querySelector("h2");
function changeH2(newTitle) {
  h2El.textContent = newTitle;
}
//setTimeout (kokia fn vykdisim, uz kiek laiko ms)
setTimeout(() => changeH2("hello"), 4000);
setTimeout(changeH1, 4000, "Hello");
