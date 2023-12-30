import { TaskItem, Priority } from "./components/TaskItem/TaskItem.js";
import './styles/global.css'; // Adjust the path based on your project structure
import '@material/web/icon/icon.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/checkbox/checkbox.js';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  // Example task
  const task = new TaskItem(1, 'Learn JavaScript', 'Description here', new Date(), Priority.medium, 'Learning');

  // Append the rendered task to the DOM
  body.appendChild(task.render());
});
