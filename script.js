const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const toggleDarkMode = document.getElementById("toggleDarkMode");

// Function to add a task
addTask.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">❌</button>`;
    
    // Smooth fade-in effect
    li.style.opacity = "0";
    li.style.transform = "translateY(10px)";
    setTimeout(() => {
        li.style.opacity = "1";
        li.style.transform = "translateY(0)";
    }, 100);

    // Delete button functionality
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.style.opacity = "0";
        li.style.transform = "translateX(20px)";
        setTimeout(() => li.remove(), 300);
    });

    taskList.appendChild(li);
    taskInput.value = "";
});

// Dark Mode Toggle
toggleDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
