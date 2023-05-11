/* eslint-disable import/no-mutable-exports */
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
// Get tasks from localstorage
let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
const Add = (task) => {
  // Random number for Id
  // const randomNum = Math.floor(Math.random() * 1000);
  tasks.push({
    index: tasks.length,
    taskContent: task,
    completed: false,
  });
  // Add task to localstorage
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

const Remove = (index) => {
  tasks = tasks.filter((task) => Number(task.index) !== Number(index));
  // Add new tasks list to localstorage
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

export {
  addBtn, taskInput, Add, tasks, Remove,
};