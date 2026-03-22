function addTask() {

  // get what user typed
  var task = document.getElementById("taskInput").value;

  // if empty, show alert
  if (task == "") {
    alert("Please enter a task!");
    return;
  }

  // create a new list item
  var li = document.createElement("li");
  li.innerText = task;

  // create delete button
  var btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "delete-btn";
  btn.onclick = function() {
    li.remove();
  }

  // add button to list item
  li.appendChild(btn);

  // add list item to the list
  document.getElementById("taskList").appendChild(li);

  // clear the input box
  document.getElementById("taskInput").value = "";
}