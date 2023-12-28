import { TaskItem, Priority } from "./components/TaskItem/TaskItem.js";
import 'styles/global.css'; // Adjust the path based on your project structure


document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');

  // Example task
  const task = new TaskItem(1, 'Learn JavaScript', 'Description here', new Date(), Priority.medium, 'Learning');

  // Append the rendered task to the DOM
  main.appendChild(task.render());
});
