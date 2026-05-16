const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const count = document.getElementById("count");

let taskCount = 0;

function addTask() {
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");

    li.innerHTML = `${taskText} 
    <button class="delete">X</button>`;

    list.appendChild(li);

    taskCount++;
    count.innerText = taskCount;

    input.value = "";
}

// ✅ delete button event (only once, outside function)
list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        taskCount--;
        count.innerText = taskCount;
    }
});

// ✅ add button click
addBtn.addEventListener("click", addTask);

// ✅ enter key support
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});