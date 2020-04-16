const clockBox = document.querySelector(".js-clock"),
  clockArea = clockBox.querySelector("h1"),
  allTimeInfo = clockBox.querySelector("h2");

function realTimeShow() {
  const date = new Date();
  const d_h = date.getHours(),
    d_m = date.getMinutes(),
    d_s = date.getSeconds();
  //console.log(d_h);
  allTimeInfo.innerText = date;
  clockArea.innerText = `${d_h < 10 ? `0${d_h}` : d_h}:${
    d_m < 10 ? `0${d_m}` : d_m
  }:${d_s < 10 ? `0${d_s}` : d_s}`;
}
function init() {
  realTimeShow();
  setInterval(realTimeShow, 1000);
}

init();
