const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const emptyState = document.getElementById('emptyState');

// Handle Enter keypress for adding a task
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  // Input validation
  if (taskText === "") {
    alert("Oops! Task cannot be empty. Please enter a valid task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Create Checkbox
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

  // Create Task Text
  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  // Create Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    li.remove();
    updateUI();
  };

  // Assemble the item
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add to the list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  
  // Update visibility of empty state and clear button
  updateUI();
}

function clearAllTasks() {
  // Clear the HTML inside the list
  taskList.innerHTML = "";
  updateUI();
}

function updateUI() {
  // Check if list has elements
  const hasTasks = taskList.children.length > 0;
  
  // Toggle empty state
  if (hasTasks) {
    emptyState.classList.add("hidden");
    clearBtn.removeAttribute("disabled");
  } else {
    emptyState.classList.remove("hidden");
    clearBtn.setAttribute("disabled", "true");
  }
}
