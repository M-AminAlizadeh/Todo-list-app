import { Display, tasks } from './Display.js';

const CheckList = (e) => {
  if (e.target.classList.contains('checkbox')) {
    tasks.forEach((task) => {
      if (task.index === Number(e.target.id)) {
        if (e.target.checked) {
          task.completed = true;
        } else {
          task.completed = false;
        }
      }
    });
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    Display(tasks);
  }
};

export default CheckList;