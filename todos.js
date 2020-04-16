const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

/*
- localStorage  값 추가   
[
    {
        name:'값', id:'1'
    }
]
- localStorage  저장 변수 생성

1. 값 전송
2. 값 리스트 업
2-1. 값 리스트 삭제버튼 생성
3. 값 리스트 개별 삭제
*/
const TODO_LS = "toDos";
let TODO_INFO = [];

//입력값 저장
function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(TODO_INFO));
  //console.log(TODO_INFO);
}

function toDoSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;

  paintToDoList(currentValue);
  toDoInput.value = "";

  saveToDo();
}

function deleteBtn(event) {
  const btn = event.target,
    li = btn.parentNode;

  toDoList.removeChild(li);

  // console.dir(li);
  const cleanToDo = TODO_INFO.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });

  TODO_INFO = cleanToDo;
  saveToDo();
  //console.log(cleanToDo);
}

//값 리스트업
function paintToDoList(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    newId = TODO_INFO.length + 1;

  delBtn.innerText = `X`;
  delBtn.addEventListener("click", deleteBtn);

  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  //console.log(currentValue);
  const toDoObj = {
    name: text,
    id: newId
  };
  TODO_INFO.push(toDoObj);
  //console.log(TODO_INFO);
}

function showToDoList() {
  const LS_DATA = localStorage.getItem(TODO_LS);
  const li = document.createElement("li");

  if (LS_DATA !== null) {
    //console.log(LS_DATA);
    const parseToDo = JSON.parse(LS_DATA);
    //console.log(parseToDo);

    parseToDo.forEach(function(toDo) {
      paintToDoList(toDo.name);
    });
    //const LS_DATA_PARCE = JSON.parce(LS_DATA);
    //console.log(LS_DATA_PARCE);
  }
}

function init() {
  showToDoList();
  toDoForm.addEventListener("submit", toDoSubmit);
}

init();
