import { tasks } from './Add.js';

const tasksContainer = document.querySelector('.tasks-container');

const Display = (tasks) => {
  let content = '';
  tasks.forEach((task) => {
    content += `
        <li class="task-container my-2 d-flex justify-content-between align-items-center" id="${
          task.index
        }">
          <div class="task-left-side-container">
            <input type="checkbox" name="${task.taskContent}" id="${
      task.index
    }" class="checkbox" ${task.completed ? 'checked' : null}/>
            <input type="text" class="task text mx-2 border-0  ${
              task.completed ? 'delete' : null
            }" value="${task.taskContent}" readonly />
          </div>
          <div class="task-right-side-container">
          <button class="btn btn-success edit-btn" id="${
            task.index
          }">Edit</button>
          <img
            src="https://img.icons8.com/pastel-glyph/25/ff0000/trash.png"
            class="icon trash-icon" id="${task.index}"/>
          </div>
        </li>`;
  });
  tasksContainer.innerHTML = content;
};

export { Display, tasks };
