// var topEl = document.getElementById("topLine");
// console.log(
//   // "[~] topLine offset: " + document.getElementById("topLine").offsetHeight,
//   "[~] topLine offset: " + topEl.getBoundingClientRect().top,
// );
//
// var bottomEl = document.getElementById("bottomLine");
// console.log(
//   // "[~] bottomLine offset: " + document.getElementById("bottomLine").offsetHeight,
//   "[~] bottomLine offset: " + bottomEl.getBoundingClientRect().top,
// );
//
var textPara = document.getElementsByTagName("p");

console.log(
  "[~] fontsize: " +
    parseInt(window.getComputedStyle(textPara[1]).fontSize, 10) +
    ", textContent: " +
    textPara[1].textContent,
);
