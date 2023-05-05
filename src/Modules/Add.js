const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
// Get tasks from localstorage
const tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
const Add = (task) => {
  // Random number for Id
  const randomNum = Math.floor(Math.random() * 1000);
  tasks.push({
    id: randomNum,
    taskContent: task,
    taskStatus: false,
  });
  // Add task to localstorage
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

export { addBtn, taskInput, Add , tasks};
