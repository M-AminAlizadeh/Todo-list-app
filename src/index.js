import _ from 'lodash';
import printMe from './print.js';
import { tasks_container, Tasks } from './Modules/Tasks.js';
import './style.css';

function component() {
  console.log(Tasks);
  Tasks.forEach((task) => {
    console.log(task);
    tasks_container.innerHTML += `
        <li class="task-container my-2 d-flex justify-content-between align-items-center" id="${task.id}">
          <div class="task-left-side-container">
            <input type="checkbox" name="${task.task_name}" />
            <span class="task text mx-2">${task.task_name}</span>
          </div>
          <img
            src="https://img.icons8.com/material-rounded/24/null/menu-2.png"
            class="icon" />
        </li>`;
  });

  return null;
}

document.body.appendChild(component());
