const ToDoInput = document.querySelector("#ToDoInput");
const AddToDo = document.querySelector("#AddToDo");
const todoList = document.querySelector("#todoList");

const addToDos = function () {
  if (!ToDoInput.value || ToDoInput.value.trim() === "") {
    alert("Please enter a valid to-do item.");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.textContent = ToDoInput.value;
  newDiv.style.cursor = "pointer";

  newDiv.addEventListener("click", function () {
    newDiv.classList.toggle("line-through");
  });

  newDiv.addEventListener("dblclick", function () {
    newDiv.remove();
  });

  todoList.appendChild(newDiv);
  ToDoInput.value = "";
};


AddToDo.addEventListener("click", addToDos);


// const myPara = document.createElement('p');
// myPara.innerText = 'my name is Safeer';
// myPara.setAttribute('id', 'paragraphs');
// todoList.appendChild(myPara);

// this how to create a new item in DOM
// createElement
// innerHTML
// setAttribute (if any)
// appendChild
