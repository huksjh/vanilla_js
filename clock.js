const clockContains = document.querySelector(".js-clock"),
  clockTitles = clockContains.querySelector("h1");

function getTimes() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    sec = date.getSeconds();

  clockTitles.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTimes();
  setInterval(getTimes, 1000);
}
init();
