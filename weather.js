const API_KEY = "9ed38bb97256c2e19be509a39ae675c1";
const COORDS = "coords";

const weather = document.querySelector(".viewWeater");

function getWeather(lat, log) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(jsons) {
      console.log(jsons);
      weather.innerText = `${jsons.main.temp} / ${jsons.name}`;
    });
}

function saveCords(obj) {
  localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSucess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const cordsObj = {
    latitude,
    longitude
  };
  //console.log(cordsObj);
  saveCords(cordsObj);
  getWeather(latitude, longitude);
}
function HandleGeoError(err) {
  console.log(err);
}
function askForCords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucess, HandleGeoError);
}

function loadCoords() {
  const loadedCoOrds = localStorage.getItem(COORDS);
  if (loadedCoOrds == null) {
    askForCords();
  } else {
    const parceCoords = JSON.parse(loadedCoOrds);
    //console.log(parceCoords);
    getWeather(parceCoords.latitude, parceCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
