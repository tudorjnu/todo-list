import "./TaskList.css";
import TaskListHtml from "./TaskList.html";

class TaskList {
  constructor() {
    this._tasks = [];
    this._template = this.getTaskListTemplate();
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

  filterTasks(tasks, priority, project) {
    return tasks.filter((task) => {
      const isPriorityMatch = priority === "all" || task.priority === priority;
      const isProjectMatch = project === "all" || task.project === project;
      console.log(isPriorityMatch && isProjectMatch);
      return isPriorityMatch && isProjectMatch;
    });
  }

  render() {
    const taskListElement = this._template.content
      .cloneNode(true)
      .querySelector(".task-list");

    const taskListContainer = taskListElement.querySelector(
      ".task-list-container",
    );

    this.filterTasks(this._tasks, this._priority, this._project).forEach(
      (task) => {
        taskListContainer.appendChild(task.render());
      },
    );

    return taskListElement;
  }
}

export default TaskList;
