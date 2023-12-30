import { TaskItem, Priority } from "./components/TaskItem/TaskItem.js";
import "./styles/global.css";
import "./styles/button.css";

import "@material/web/iconbutton/icon-button.js";
// import "@material/web/button/text-button.js";
import "@material/web/checkbox/checkbox.js";

document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector(".task-list");
  console.log(taskList);

  const task = new TaskItem(
    1,
    "Learn JavaScript",
    "Description here",
    new Date(),
    Priority.medium,
    "Learning",
  );

  taskList.appendChild(task.render());
});
