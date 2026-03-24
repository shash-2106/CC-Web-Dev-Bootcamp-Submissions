const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const emptyState = document.getElementById('emptyState');

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Oops! Task cannot be empty. Please enter a valid task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.onchange = function() {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  };

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    li.remove();
    updateUI();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  
  updateUI();
}

function clearAllTasks() {
  taskList.innerHTML = "";
  updateUI();
}

function updateUI() {
  const hasTasks = taskList.children.length > 0;
  
  if (hasTasks) {
    emptyState.classList.add("hidden");
    clearBtn.removeAttribute("disabled");
  } else {
    emptyState.classList.remove("hidden");
    clearBtn.setAttribute("disabled", "true");
  }
}
