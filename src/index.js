import TaskList from "./components/TaskList/TaskList.js";
import App from "./App.js";
import tasks from "./dummyTasks.js";

import "normalize.css";
import "./styles/global.css";
import "./styles/button.css";

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskListHtml = document.querySelector(".task-list");

  for (let task of tasks) {
    taskList.addTask(task);
  }

  // taskList.filterPriority(Priority.high);
  // taskList.filterProject("Learning");
  // taskList.filterPriority(Priority.high);
  // taskList.sortTasks("date");

  const app = new App(taskList);
  app.render();
});
