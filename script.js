document.addEventListener("DOMContentLoaded", loadTasks);

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task-list li").forEach(task => {
        tasks.push(task.firstChild.textContent.trim()); // Store only text
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.querySelector(".task-list");
    taskList.innerHTML = ""; // Clear existing tasks

    savedTasks.forEach(taskText => {
        createTaskElement(taskText);
    });
}

function createTaskElement(taskText) {
    let taskList = document.querySelector(".task-list");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">❌</button>`;
    
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
}

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;

    createTaskElement(taskInput);
    saveTasks();
    document.getElementById("taskInput").value = "";
}

document.getElementById("addTaskBtn").onclick = addTask;
loadTasks();

  
