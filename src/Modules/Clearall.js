import { Display } from './Display.js';
const ClearAllBtn = document.querySelector('.clear-btn-container button');

const ClearAll = (tasks) => {
  tasks = tasks.filter((task) => {
    return !task.completed;
  });
  localStorage.setItem('Tasks', JSON.stringify(tasks));
  Display(tasks);
  // console.log('second', tasks);
};

export { ClearAll, ClearAllBtn };
