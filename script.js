document.addEventListener("DOMContentLoaded", loadTasks);

function saveTasks() {
    localStorage.setItem("tasks", document.querySelector(".task-list").innerHTML);
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.querySelector(".task-list").innerHTML = savedTasks;
        addDeleteListeners(); // Reattach event listeners after loading
    }
}

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;

    let taskList = document.querySelector(".task-list");
    let li = document.createElement("li");
    li.innerHTML = `${taskInput} <button class="delete-btn">❌</button>`;
    taskList.appendChild(li);
    
    saveTasks();
    document.getElementById("taskInput").value = "";
    addDeleteListeners(); // Add event listener for delete buttons
}

function addDeleteListeners() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.onclick = function () {
            this.parentElement.remove();
            saveTasks();
        };
    });
}

document.getElementById("addTaskBtn").onclick = addTask;
addDeleteListeners();

