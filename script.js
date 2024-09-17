function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="task-text">${taskInput.value}</span> 
            <button class="edit-button" onclick="editTask(this)"></button>
            <button onclick="deleteTask(this)"></button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function editTask(button) {
    const taskItem = button.parentNode;
    const taskText = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit task:', taskText.textContent);

    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}

