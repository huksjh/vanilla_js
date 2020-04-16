const clockArea = document.getElementById("jsClockArea");
const clockView = clockArea.querySelector("h1");

function loadClock() {
  const date = new Date(),
    Year = date.getFullYear(),
    Month = date.getMonth(),
    days = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  clockView.innerText = `${Year}년${Month + 1}월${days}일 / ${
    hour < 10 ? `0${hour}` : hour
  }:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

//console.dir(date);
function init() {
  loadClock();
  setInterval(loadClock, 1000);
}
init();
