// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".addBtn");
const updateBtn = document.querySelector(".updateBtn");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

let editIndex = null; // track which task is being edited

// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value;
  if (userEnteredValue.trim() != "") {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}

showTasks(); // calling showTask function

// add new task
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value.trim();
  if (userEnteredValue === "") return;

  let getLocalStorageData = localStorage.getItem("New Todo");
  let listArray = [];
  if (getLocalStorageData != null) {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  inputBox.value = "";
  addBtn.classList.remove("active");
}

// show tasks
function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  let listArray = [];
  if (getLocalStorageData != null) {
    listArray = JSON.parse(getLocalStorageData);
  }

  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;

  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}
      <span class="icons">
        <i class="fas fa-edit" onclick="editTask(${index})"></i>
        <i class="fas fa-trash" onclick="deleteTask(${index})"></i>
      </span>
    </li>`;
  });

  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

// delete task function
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  let listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

// delete all tasks
deleteAllBtn.onclick = () => {
  localStorage.setItem("New Todo", JSON.stringify([]));
  showTasks();
}

// edit task function
function editTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  let listArray = JSON.parse(getLocalStorageData);

  inputBox.value = listArray[index];
  editIndex = index;

  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
}

// update task function
updateBtn.onclick = () => {
  let userEnteredValue = inputBox.value.trim();
  if (userEnteredValue === "") return;

  let getLocalStorageData = localStorage.getItem("New Todo");
  let listArray = JSON.parse(getLocalStorageData);

  listArray[editIndex] = userEnteredValue;
  localStorage.setItem("New Todo", JSON.stringify(listArray));

  showTasks();
  inputBox.value = "";
  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  editIndex = null;
}
