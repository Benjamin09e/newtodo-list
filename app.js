// selcteur
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);

// functions

function addTodo(e) {
  //console.log("pew pew");
  //prevent form submitting
  e.preventDefault();
  //div todo  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  todoInput.value = "";

  // check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = `<i class="fas fa-check"></i>  `;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // check mark button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = `<i class="fas fa-trash"></i>  `;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  // clear list input
  todoInput.value = "";

}

function deleteTodo(e) {
  //console.log(e.target);

  // delete todo
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }
  // check todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos)
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
	breack;
    }
  });
}
