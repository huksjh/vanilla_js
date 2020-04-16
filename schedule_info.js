const scform = document.getElementById("scForm");
const sctxt = scform.getElementsByTagName("input").item("sctxt", 0);
const scTxtListUp = document.getElementById("scTxtList");

let TXTDATA_ARRAY = [];

const LS_TXT_DATA = "int_datas";

function deleteLITxt(event) {
  const btns = event.target;
  const li = btns.parentNode;
  // console.log(li_id);
  //console.log(typeof li_id.id);
  scTxtListUp.removeChild(li);

  const cleantxtData = TXTDATA_ARRAY.filter(function(data) {
    //console.log(li_id.id, data.id);
    return li.id !== data.id;
  });
  //console.log(cleantxtData);
  TXTDATA_ARRAY = cleantxtData;

  saveInData();
}

function saveInData() {
  localStorage.setItem(LS_TXT_DATA, JSON.stringify(TXTDATA_ARRAY));
}

function showScTxt(text) {
  const li = document.createElement("li");

  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  const idx = TXTDATA_ARRAY.length + 1;
  const in_data = {
    name: text,
    id: "delBtn" + idx
  };
  li.id = "delBtn" + idx;

  span.innerText = text;
  li.appendChild(span);
  delBtn.innerText = "삭제";
  li.appendChild(delBtn);

  scTxtListUp.appendChild(li);
  //console.log(li);

  delBtn.addEventListener("click", deleteLITxt);

  TXTDATA_ARRAY.push(in_data);
  saveInData();
}

function loadScTxt() {
  const scTxt = localStorage.getItem(LS_TXT_DATA);
  if (scTxt !== null) {
    const parseData = JSON.parse(scTxt);
    parseData.forEach(datas => {
      showScTxt(datas.name);
    });
  }
}

function scSubmit(e) {
  e.preventDefault();

  currentValue = sctxt.value;
  if (currentValue) {
    showScTxt(currentValue);
  }
  sctxt.value = "";
}

function init() {
  scform.addEventListener("submit", scSubmit);
  loadScTxt();
  // console.log(TXTDATA_ARRAY);
}
init();
