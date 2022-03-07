const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
var toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function submitForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  console.log(typeof newToDoObj.id);
  paintToDo(newToDoObj);
  saveToDos();
  console.log(toDos);
}

function deleteToDo(event) {
  const button = event.target;
  const li = button.parentNode;

  li.remove();
  toDos = toDos.filter((todo) => todo.id !== Number(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

const savedToDo = localStorage.getItem(TODOS_KEY);

toDoForm.addEventListener("submit", submitForm);

if (savedToDo !== null) {
  const parsedToDos = JSON.parse(savedToDo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// const filterToDos = (todo) => {
//   todo.id != li.id;
// };
