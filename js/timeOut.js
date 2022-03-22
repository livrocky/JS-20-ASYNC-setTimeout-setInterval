const h1El = document.querySelector("h1");
function changeH1() {
  h1El.textContent = "It was changed";
}

// changeH1();

//setTimeout (kokia fn vykdisim, uz kiek laiko ms)
setTimeout(changeH1, 3000);

//____________________//

const h2El = document.querySelector("h2");
function changeH2(newTitle) {
  h1El.textContent = newTitle;
}

// changeH1();

//setTimeout (kokia fn vykdisim, uz kiek laiko ms)
setTimeout(() => changeH2("hello"));
