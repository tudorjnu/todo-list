import { TaskItem, Priority } from "./components/TaskItem/TaskItem.js";
import TaskList from "./components/TaskList/TaskList.js";
import UI from "./components/UI/UI.js";
import tasks from "./dummyTasks.js";

import "./styles/global.css";
import "./styles/button.css";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const taskList = new TaskList();
  const main = document.querySelector("main");
  const taskListHtml = document.querySelector(".task-list");

  for (let task of tasks) {
    taskList.addTask(task);
  }

  // taskList.filterPriority(Priority.high);
  taskList.filterProject("Learning");
  taskList.filterPriority(Priority.high);
  // taskList.sortTasks("date");

  taskListHtml.innerHTML = taskList.render().innerHTML;
});
