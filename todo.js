const toDoForm = document.querySelector('.js-toDoForm'), //js-toDoForm  폼
    toDoInput = toDoForm.querySelector('input'), //  input 값 받는 폼 부분
    toDoListUP = document.querySelector('.toDoList'), //toDoList    입력값 노출 시키는 ul 부분
    TODO_LS = 'toDos'; //localStorage 기록될 이름

let TODO_ARRAY = []; //입력받은 텍스트 배열로 저장

function deleteToDo(event) {
    //console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    //console.log(li);
    toDoListUP.removeChild(li);

    //TODO_ARRAY 배열값 안에 있는값 지우기
    const cleanToDo = TODO_ARRAY.filter(function (toDo) {
        //console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });

    TODO_ARRAY = cleanToDo;
    saveToDos();
}

//localStorage  toDos 으로 배열값 저장 기록
function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(TODO_ARRAY));
}

function paintToDoList(text) {
    //console.log(text);
    //li 생성
    const li = document.createElement('li');
    //배열 개수 구해서  고유 번호 생성
    const newId = TODO_ARRAY.length + 1;
    //console.log(newId);
    //button 생성  버튼 문구추가
    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    li.appendChild(delBtn);

    //delBtn 클릭이벤트 추가
    delBtn.addEventListener('click', deleteToDo);

    //넘어온값 span 안에 출력
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    li.id = newId; //번호  id로 부여

    //ul  안에  만든 li 집어 넣기
    toDoListUP.appendChild(li);

    toDoObj = {
        text: text,
        id: newId,
    };

    TODO_ARRAY.push(toDoObj); //배열 안에 obj 생성 넣기
    saveToDos(); //저장
}

function toDoSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value; //입력받는 값
    paintToDoList(currentValue);
    toDoInput.value = ''; //폼전송후 입력값 초기화
}

//
function showToDoList() {
    const toDoList = localStorage.getItem(TODO_LS);
    if (toDoList !== null) {
        const parseToDo = JSON.parse(toDoList);
        //console.log(parseToDo);
        parseToDo.forEach(function (toDo) {
            paintToDoList(toDo.text);
        });
    }
}

function init() {
    showToDoList();
    toDoForm.addEventListener('submit', toDoSubmit);
}
init();
