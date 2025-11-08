//Makes the area where tasks are displayed accessible by several methods
let taskList = document.querySelector("#taskList");

//Calls domLoaded function once DOM content is fully loaded
document.addEventListener("DOMContentLoaded", domLoaded);

//Registers the on click event listener for the add button and the keyup listener for the input box
function domLoaded() {
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addBtnClick);
    const textBox = document.getElementById("taskInput");
    textBox.addEventListener("keyup", (event) => {
        if (event.code == "Enter") {
            addBtnClick();
        };
    });
}

//Gets the text input and passes it to the addTask method
function addBtnClick() {
    let taskInpt = document.getElementById("taskInput");
    if (taskInpt.value.trim().length === 0) { //Checks for a blank input
        console.log("Empty list input!")
        taskInpt.value = "";
        taskInpt.focus();
    } else {
        addTask(taskInpt.value);
        taskInpt.value = "";
        taskInpt.focus();
    }
}

//Creates a new task li element and appends it to the list
function addTask(taskInpt) {
    let newTask = document.createElement("li");
    newTask.innerHTML = "<span class='task-text'>" + "  " + taskInpt + "  " + "</span><button class='done-btn'>&#10006;</button>"; 
    taskList.appendChild(newTask);
    const doneButtons = document.querySelectorAll(".done-btn");
    doneButtons.forEach(button => {
        button.addEventListener("click", removeTask)
    })
}

//Called when done button is clicked to remove task
function removeTask() {
    let taskToRemove = event.target.parentNode;
    taskList.removeChild(taskToRemove);
}