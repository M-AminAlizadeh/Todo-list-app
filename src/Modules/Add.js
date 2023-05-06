const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');
// Get tasks from localstorage
let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
const Add = (task) => {
  // Random number for Id
  const randomNum = Math.floor(Math.random() * 1000);
  tasks.push({
    id: randomNum,
    taskContent: task,
    completed: false,
  });
  // Add task to localstorage
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

const Remove = (id) => {
  tasks = tasks.filter((task) => {
    return Number(task.id) !== Number(id);
  });
  // Add new tasks list to localstorage
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

export { addBtn, taskInput, Add, tasks, Remove };
