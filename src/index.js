import './style.css';
import {
  addBtn, taskInput, Add, Remove,
} from './Modules/Add.js';
import { Display, tasks } from './Modules/Display.js';
import Reset from './Modules/Reset.js';

// Initial state
Display(tasks);

// Add task
addBtn.addEventListener('click', () => {
  if (taskInput.value) {
    Add(taskInput.value);
    Display(tasks);
    Reset();
  }
});

// Remove task
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-icon')) {
    Remove(e.target.id);
    Display(tasks);
  }
});

// Edit task
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const taskInput = e.target.parentElement.parentElement.firstElementChild.lastElementChild;
    if (e.target.innerText.toLowerCase() === 'edit') {
      e.target.innerText = 'Save';
      taskInput.removeAttribute('readonly');
      taskInput.classList.remove('border-0');
    } else {
      e.target.innerText = 'Edit';
      taskInput.setAttribute('readonly', 'readonly');
      taskInput.classList.add('border-0');
      // Change value
      tasks.forEach((task) => {
        // console.log('test');
        if (Number(task.index) === Number(e.target.id)) {
          task.taskContent = taskInput.value;
        }
      });
      // Set to localstorage
      localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
  }
});
