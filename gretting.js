const form = document.querySelector(".js-form"),
  input = form.querySelector("input"), //form > input area
  gretings = document.querySelector(".js-gretings"), //input value show area
  USER_LS = "currentUser"; //localStorage  key
SHOWING_CN = "showing"; //class  show

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  //console.log(inputValue);
  paintGreating(currentValue);
  saveName(currentValue);
}

// input 폼 불러오기
function askFrom() {
  form.classList.add(SHOWING_CN); //폼 노출
  form.addEventListener("submit", handleSubmit);
}

//이름이 있으면 input 숨기고 text 노출
function paintGreating(text) {
  form.classList.remove(SHOWING_CN);
  gretings.classList.add(SHOWING_CN);
  gretings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  //console.log(currentUser);

  if (currentUser == null) {
    //user 값 없으면
    askFrom();
  } else {
    //user 값 있으면
    paintGreating(currentUser);
  }
}

function init() {
  loadName();
}
init();
