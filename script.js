document.addEventListener("DOMContentLoaded", loadTasks);

function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".task-list li").forEach(task => {
        tasks.push(task.textContent.replace("❌", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.querySelector(".task-list");
    taskList.innerHTML = ""; // Clear existing tasks before loading

    savedTasks.forEach(taskText => {
        let li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">❌</button>`;
        taskList.appendChild(li);
    });

    addDeleteListeners(); // Ensure delete buttons work
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
    addDeleteListeners(); // Ensure delete buttons work
}

function addDeleteListeners() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.onclick = function () {
            this.parentElement.remove();
            saveTasks(); // Save after deleting
        };
    });
}

document.getElementById("addTaskBtn").onclick = addTask;
addDeleteListeners();
