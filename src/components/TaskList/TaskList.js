class TaskList {
  constructor() {
    this.tasks = [];
    this.listTemplate = `
      < div class="task-list" >
        <div class="task-list__header">
          <h2 class="task-list__title">Task List</h2>
        </div>
        <div class="task-list__body">
          <ul class="task-list__list">
          </ul>
        </div>
`;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  render() {
  }
}
