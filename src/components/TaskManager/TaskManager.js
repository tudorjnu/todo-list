import './TaskManager.css';
import taskManagerHtml from './TaskManager.html';
import TaskItem from './TaskItem';

class TaskManager {

  domElements = {
    taskTitle: null,
    taskDescription: null,
    taskDueDate: null,
    taskPriority: null,
    taskProject: null,
    taskSubmit: null,
    taskCancel: null,
  };

  cacheDom() {

  }

  init() {
    document.body.insertAdjacentHTML('beforeend', taskManagerHtml);
  }

  editTask(taskID) {
    var task = this.getTask(taskID);
  }

  constructor() {
    this.tasks = [];
  }

  createTask(id, title, description, dueDate, priority, project) {
    const taskItem = new TaskItem(id, title, description, dueDate, priority, project, {
      onEdit: (task) => this.editTask(task),
      onRemove: (taskId) => this.removeTask(taskId)
    });
    this.tasks.push(taskItem);
    return taskItem;
  }

  editTask(task) {
    // Logic to edit the task
  }

  removeTask(taskId) {
    // Logic to remove the task
  }

  // ... other methods ...
}
