const Priority = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
};

class TaskItem {
  constructor(id, title, description, dueDate, priority, project) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._priority = priority;
    this._isDone = false;
    this._project = project;
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
    this._title = title;
  }

  set description(description) {
    this._description = description;
  }

  set dueDate(dueDate) {
    const today = new Date();
    if (dueDate < today) {
      throw new Error('Due date cannot be in the past');
    }
    this._dueDate = new Date(dueDate);
  }

  set priority(priority) {
    if (!Object.values(Priority).includes(priority)) {
      throw new Error('Invalid priority');
    }
    this._priority = priority;
  }

  set project(project) {
    this._project = project;
  }

  markAsDone() {
    this._isDone = true;
  }

  markAsUndone() {
    this._isDone = false;
  }

}

export { TaskItem, Priority };
