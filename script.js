const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const timeInput = document.getElementById("time-input");
const todoList = document.querySelector(".todo-list");
const clearAllBtn = document.getElementById("clear-all");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    li.innerHTML =
      todos[i].task + " — " + todos[i].time +
      ' <button onclick="removeTodo(' + i + ')">Delete</button>';

    todoList.appendChild(li);
  }
}

function removeTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  displayTodos();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const task = taskInput.value;
  const time = timeInput.value;

  todos.push({ task: task, time: time });

  saveTodos();
  displayTodos();
  form.reset();
});

clearAllBtn.addEventListener("click", function () {
  todos = [];
  saveTodos();
  displayTodos();
});

displayTodos();