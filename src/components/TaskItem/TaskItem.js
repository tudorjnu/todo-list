import "./TaskItem.css";
import taskItemHtml from "./TaskItem.html";

const Priority = {
  low: 0,
  medium: 1,
  high: 2,
};

class TaskItem {
  constructor(id, title, description, dueDate, priority, project) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._isDone = false;
    this._project = project;
    this._template = null;
  }

  // Getters
  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get isDone() {
    return this._isDone;
  }

  get project() {
    return this._project;
  }

  // Setters
  set title(title) {
    if (title === "") {
      throw new Error("Title cannot be empty");
    }
    if (title.length > 30) {
      throw new Error("Title cannot be longer than 30 characters");
    }
    if (title.length < 3) {
      throw new Error("Title cannot be shorter than 3 characters");
    }
    if (typeof title !== "string") {
      throw new Error("Title must be a string");
    }
    this._title = title;
  }

  set description(description) {
    if (typeof description !== "string") {
      throw new Error("Description must be a string");
    }
    this._description = description;
  }

  set dueDate(dueDate) {
    const isInvalidDate =
      typeof dueDate !== "object" || dueDate.constructor !== Date;
    if (isInvalidDate) {
      throw new Error("Due date must be a date");
    }

    const hasTime =
      dueDate.getHours() !== 0 ||
      dueDate.getMinutes() !== 0 ||
      dueDate.getSeconds() !== 0 ||
      dueDate.getMilliseconds() !== 0;
    if (!hasTime) {
      dueDate.setHours(0, 0, 0, 0);
    }
    this._dueDate = new Date(dueDate);
  }

  set priority(priority) {
    if (!Object.values(Priority).includes(priority)) {
      throw new Error("Invalid priority");
    }
    this._priority = priority;
  }

  set project(project) {
    if (typeof project !== "string") {
      throw new Error("Project must be a string");
    }
    this._project = project;
  }

  markAsDone() {
    this._isDone = true;
  }

  markAsUndone() {
    this._isDone = false;
  }

  getTaskTemplate() {
    if (!this._template) {
      document.body.insertAdjacentHTML("beforeend", taskItemHtml);
      this._template = document.getElementById("task-template");
    }
    return this._template;
  }

  render() {
    let template = this.getTaskTemplate();
    const taskElement = template.content.cloneNode(true).querySelector(".task");

    taskElement.querySelector(".task__title").textContent = this.title;
    taskElement.querySelector(".task__description").textContent =
      this.description;
    taskElement.querySelector(".task__due-date").textContent =
      `${this.dueDate.toLocaleDateString()}`;

    const checkbox = taskElement.querySelector(".task__checkbox");
    checkbox.checked = this.isDone;

    return taskElement;
  }
}

export { TaskItem, Priority };
