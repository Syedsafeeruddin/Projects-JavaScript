// const ToDoInput = document.querySelector("#ToDoInput");
// const AddToDo = document.querySelector("#AddToDo");
// const todoList = document.querySelector("#todoList");

// const addToDos = function () {
//   if (!ToDoInput.value || ToDoInput.value.trim() === "") {
//     alert("Please enter a valid to-do item.");
//     return;
//   }

//   function saveToDos(todoList){
//     localStorage.setItem('todoList', JSON.stringify(todoList))
//   }

//   function loadToDos(){
//     const ToDos = localStorage.getItem('todoList');
//     return ToDos ? JSON.parse(ToDos) : [];
//   }

//   // Create a container for the new to-do item
//   const newDiv = document.createElement("div");
//   newDiv.style.display = "flex";
//   newDiv.style.alignItems = "center";
//   newDiv.style.marginBottom = "10px";
  

//   // Create and append a span for the text
//   const textSpan = document.createElement("span");
//   textSpan.textContent = ToDoInput.value;
//   textSpan.style.marginRight = "10px";
//   newDiv.appendChild(textSpan);
  

//   // Create and append the checkbox
//   const checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.style.marginRight = "10px"; // Add some space between checkbox and text
//   newDiv.appendChild(checkBox);

//   // Create and append the delete button
//   const deleteBut = document.createElement("button");
//   deleteBut.innerText = "Delete";
//   deleteBut.style.marginLeft = "auto"; // Push the button to the end of the div
//   deleteBut.setAttribute("id", "deleteButton");
//   newDiv.appendChild(deleteBut);

//   // Handle checkbox change event
//   checkBox.addEventListener("change", function () {
//     if (checkBox.checked) {
//       textSpan.style.textDecoration = "line-through";
//     } else {
//       textSpan.style.textDecoration = "none";
//     }
//   });

//   // Handle delete button click event
//   deleteBut.addEventListener("click", function () {
//     newDiv.remove();
//   });

//   // Add the new to-do item to the list
//   todoList.appendChild(newDiv);

//   // Clear the input field
//   ToDoInput.value = "";
// };

// AddToDo.addEventListener("click", addToDos);

// const myPara = document.createElement('p');
// myPara.innerText = 'my name is Safeer';
// myPara.setAttribute('id', 'paragraphs');
// todoList.appendChild(myPara);

// this how to create a new item in DOM
// createElement
// innerHTML
// setAttribute (if any)
// appendChild

// ----------------------------------------------------------------------------------------------------------------------------

const ToDoInput = document.querySelector("#ToDoInput");
const AddToDo = document.querySelector("#AddToDo");
const todoList = document.querySelector("#todoList");

// Load to-dos from LocalStorage when the page loads
const loadToDos = function () {
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  
  toDos.forEach(function(todo) {
    createToDoElement(todo.text, todo.checked);
  });
};

// Save to-dos to LocalStorage
const saveToDos = function () {
  const toDos = [];
  document.querySelectorAll("#todoList > div").forEach(function(div) {
    const text = div.querySelector("span").textContent;
    const checked = div.querySelector("input").checked;
    toDos.push({ text, checked });
  });
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

// Create a new to-do element and append it to the list
const createToDoElement = function(text, checked) {
  const newDiv = document.createElement("div");
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.style.marginBottom = "10px";

  const textSpan = document.createElement("span");
  textSpan.textContent = text;
  textSpan.style.marginRight = "10px";
  newDiv.appendChild(textSpan);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.style.marginRight = "10px";
  checkBox.checked = checked;
  newDiv.appendChild(checkBox);

  const deleteBut = document.createElement("button");
  deleteBut.innerText = "Delete";
  deleteBut.style.marginLeft = "auto";
  newDiv.appendChild(deleteBut);

  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      textSpan.style.textDecoration = "line-through";
    } else {
      textSpan.style.textDecoration = "none";
    }
    saveToDos(); // Save changes to LocalStorage
  });

  deleteBut.addEventListener("click", function () {
    newDiv.remove();
    saveToDos(); // Save changes to LocalStorage
  });

  todoList.appendChild(newDiv);
};

// Handle adding a new to-do
const addToDos = function () {
  if (!ToDoInput.value || ToDoInput.value.trim() === "") {
    alert("Please enter a valid to-do item.");
    return;
  }

  createToDoElement(ToDoInput.value, false);
  saveToDos(); // Save the new to-do to LocalStorage

  ToDoInput.value = "";
};

// Add event listener to the Add button
AddToDo.addEventListener("click", addToDos);

// Load to-dos when the page loads
loadToDos();

