import { tasks } from './Add.js';
const tasksContainer = document.querySelector('.tasks-container');

const Display = (tasks) => {
  let content = '';
  tasks.forEach((task) => {
    content += `
        <li class="task-container my-2 d-flex justify-content-between align-items-center" id="${task.id}">
          <div class="task-left-side-container">
            <input type="checkbox" name="${task.taskContent}" />
            <span class="task text mx-2">${task.taskContent}</span>
          </div>
          <img
            src="https://img.icons8.com/pastel-glyph/20/null/trash.png"
            class="icon trash-icon" id="${task.id}"/>
        </li>`;
  });
  return (tasksContainer.innerHTML = content);
};

export { Display, tasks };
