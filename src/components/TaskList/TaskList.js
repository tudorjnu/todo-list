import "./TaskList.css";
import TaskListHtml from "./TaskList.html";

class TaskList {
  constructor() {
    this._tasks = [];
    this._template = this.getTaskListTemplate();
    this._startDate = null;
    this._endDate = null;
    this._priority = "all";
    this._sortBy = "date";
    this._project = "all";
  }

  addTask(task) {
    this._tasks.push(task);
  }

  removeTask(taskId) {
    this._tasks = this._tasks.filter((task) => task.id !== taskId);
  }

  getTaskListTemplate() {
    if (!this._template) {
      document.body.insertAdjacentHTML("beforeend", TaskListHtml);
      this._template = document.getElementById("task-list-template");
    }
    return this._template;
  }

  sortTasks(sortBy) {
    this._tasks.sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else if (sortBy === "priority") {
        return b.priority - a.priority;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  filterPriority(priority) {
    this._priority = priority;
  }

  filterProject(project) {
    this._project = project;
  }

  setDate(date) {
    this._startDate = date;
    this._endDate = date;
  }

  setToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    this._startDate = today;
    this._endDate = today;

    console.log(this._startDate);
    console.log(this._endDate);
  }

  setUpcoming() {
    const today = new Date();
    this._startDate = today;
    this._endDate = null;
  }

  getTodayTasks() {
    const today = new Date();
    return this._tasks.filter((task) => {
      return (
        task.createdAt.getDate() === today.getDate() &&
        task.createdAt.getMonth() === today.getMonth() &&
        task.createdAt.getFullYear() === today.getFullYear()
      );
    });
  }

  filterTasks(tasks, priority, project, startDate, endDate) {
    return tasks.filter((task) => {
      const isPriorityMatch = priority === "all" || task.priority === priority;
      const isProjectMatch = project === "all" || task.project === project;
      const isDateMatch =
        (!startDate || task.createdAt >= startDate) &&
        (!endDate || task.createdAt <= endDate);
      return isPriorityMatch && isProjectMatch;
    });
  }

  getProjects() {
    const projects = new Set();
    this._tasks.forEach((task) => {
      projects.add(task.project);
    });
    return projects;
  }

  render() {
    const taskListElement = this._template.content
      .cloneNode(true)
      .querySelector(".task-list");

    const taskListContainer = taskListElement.querySelector(
      ".task-list-container",
    );

    this.filterTasks(
      this._tasks,
      this._priority,
      this._project,
      this._startDate,
      this._endDate,
    ).forEach((task) => {
      taskListContainer.appendChild(task.render());
    });

    return taskListElement;
  }
}

export default TaskList;
