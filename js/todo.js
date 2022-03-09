const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input"); //위 코드와 동일하다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; // 텍스트를 span 내부에 넣기
    const button = document.createElement("button");
    button.innerText = "😊";
    button.addEventListener("click", deleteToDo);

    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = newToDo.text;
    input.name = newToDo.text;
    
    input.addEventListener('click', handleCheck);

    li.appendChild(input);
    li.appendChild(span); // li안에 span 넣기
    li.appendChild(button); // li안에 button 넣기
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value=""; //Enter 치면 입력값 비우기
    const newTodoObj ={
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function handleCheck(event){
    const input_checkbox = event.target;
    const spanText = input_checkbox.nextSibling; //.nextSibling : event의 타겟이 되는 input 태그와 같은 부모의 다음 형제

    //체크 되어있을 때
    if(input_checkbox.checked === true){
        //리스트에 선 긋기
        spanText.className = "line-through";
    } else{
        //체크 되어있지 않을 때 체크 지우고 그어진 선 지우기
        input_checkbox.removeAttribute('checked');
        spanText.className = '';
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// localStorage에 존재하면 (if(savedToDos !== null)과 동일)
if(savedToDos){ 
    const parsedToDos = JSON.parse(savedToDos); //Array 형태로 만들기
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}