import { Display } from './Display.js';

const ClearAllBtn = document.querySelector('.clear-btn-container button');

const ClearAll = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem('Tasks', JSON.stringify(tasks));
  Display(tasks);
};

export { ClearAll, ClearAllBtn };
