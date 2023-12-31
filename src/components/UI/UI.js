class UI {
  constructor() {
    this.view = "inbox";
    this.taskList = null;
    this.domElements = {
      sidebar: null,
      main: null,
      taskList: null,
    };
    this.cacheDOM();
  }

  cacheDOM() {
    this.domElements.sidebar = document.querySelector(".sidebar");
    this.domElements.main = document.querySelector("main");
    this.domElements.taskList = document.querySelector(".task-list");
  }

  bindEventListeners() {
    const addTaskButton = document.getElementById("add-task-button");
    const searchButton = document.getElementById("search-button");
    const todayViewButton = document.getElementById("today-view-button");
    const upcomingViewButton = document.getElementById("upcoming-view-button");

    addTaskButton.addEventListener("click", this.addTask);
    todayViewButton.addEventListener("click", this.changeView("today"));
    upcomingViewButton.addEventListener("click", this.changeView("upcoming"));
  }

  addTask() {}
  changeView(view) {
    return () => {
      this.view = view;
    };
  }

  render() {
    this.taskList.innerHTML = "";
    this.taskList.appendChild(taskList.render());
  }
}

export default UI;
