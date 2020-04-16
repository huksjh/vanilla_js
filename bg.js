const body = document.querySelector("body");
const IMG_NUMBERS = 3;

function loadBodyImg(imgNumber) {
  const image = new Image();

  image.src = `images/img${imgNumber + 1}.jpg`;
  image.classList.add("bodyimg");
  body.appendChild(image);
}

function imageNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBERS);
  return number;
}

function init() {
  const randomNumber = imageNumber();
  loadBodyImg(randomNumber);
}
init();
