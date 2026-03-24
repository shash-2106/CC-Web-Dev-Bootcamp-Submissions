// my to-do list javascript

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;

    if (taskText == "") {
        alert("Please enter a task!");
        return;
    }

    var list = document.getElementById("taskList");

    var li = document.createElement("li");
    li.innerHTML = taskText + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';

    list.appendChild(li);

    input.value = "";
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}

// also add task when Enter key is pressed
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});