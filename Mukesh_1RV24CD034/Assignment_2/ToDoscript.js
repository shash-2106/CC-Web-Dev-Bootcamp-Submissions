        const input = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');

        function addTask() {
            const taskText = input.value.trim();

            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            
            deleteBtn.onclick = function() {
                li.remove();
            };

            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

            input.value = "";
            input.focus();
        }

        addBtn.addEventListener('click', addTask);
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });