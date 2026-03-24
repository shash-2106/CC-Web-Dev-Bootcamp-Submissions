const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('AddBtn');
const taskList = document.getElementById('taskList');

addBtn.onclick = function() {
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn">Delete</button>
        `;

        li.querySelector('.delete-btn').onclick = function() {
            li.remove();
        };

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please type something first!");
    }
};