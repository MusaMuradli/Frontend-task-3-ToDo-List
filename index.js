
var addButton = document.getElementsByClassName('input-container')[0].getElementsByTagName('button')[0];
addButton.onclick = function() {
    var taskInput = document.getElementById('taskInput').value;
        var taskItem = document.createElement('div');
        taskItem.className = 'inputJS';

        var taskText = document.createElement('p');
        taskText.textContent = taskInput;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = 'yellow';

        deleteButton.onclick = function() {
            taskItem.remove();
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        document.querySelector('.container').appendChild(taskItem);

        document.getElementById('taskInput').value = "";
    }

