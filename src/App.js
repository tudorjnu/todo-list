class Sidebar {
  constructor(callbacks) {
    this.callbacks = callbacks;

    this.projects = [];
    this.modal = new AddTaskModal();
    this.domElements = {
      sidebar: null,
      sidebarProjects: null,
      projectHTMLTemplate: null,
      projects: null,
      buttons: {
        addTask: null,
        search: null,
        todayView: null,
        upcomingView: null,
        projectButtons: {},
      },
    };

    this.cacheDOM();
    this.bindEventListeners();
  }

  cacheDOM() {
    this.domElements.sidebar = document.querySelector(".sidebar");
    this.domElements.sidebarProjects =
      document.querySelector(".sidebar-projects");
    this.domElements.buttons.addTask = document.getElementById(
      "sidebar-add-task-button",
    );
    this.domElements.buttons.search = document.getElementById(
      "sidebar-search-button",
    );
    this.domElements.buttons.todayView = document.getElementById(
      "sidebar-today-button",
    );
    this.domElements.buttons.upcomingView = document.getElementById(
      "sidebar-upcoming-button",
    );
    this.domElements.projectHTMLTemplate = document.getElementById(
      "project-button-template",
    );
  }

  addTask() {
    console.log("add task");
    this.modal.showModal();
  }
  search() {
    console.log("search");
  }
  todayView() {
    // console.log("today");
    this.callbacks.setTodayView();
  }
  upcomingView() {
    console.log("upcoming");
  }

  bindEventListeners() {
    this.domElements.buttons.addTask.addEventListener("click", () => {
      this.addTask();
    });

    this.domElements.buttons.search.addEventListener("click", () => {
      this.search();
    });
    this.domElements.buttons.todayView.addEventListener("click", () => {
      this.todayView();
    });
    this.domElements.buttons.upcomingView.addEventListener("click", () => {
      this.upcomingView();
    });
  }

  makeProjectButton(projectName) {
    const template = this.domElements.projectHTMLTemplate;
    const projectButton = template.content
      .cloneNode(true)
      .querySelector(".project-button");
    projectButton.appendChild(document.createTextNode(projectName));
    projectButton.addEventListener("click", () => {
      console.log(`clicked ${projectName} button`);
    });

    this.domElements.buttons.projectButtons[projectName] = projectButton;
    return projectButton;
  }

  render(projects) {
    this.domElements.sidebarProjects.innerHTML = "<h3>Projects</h3>";
    for (let project of projects) {
      const projectButton = this.makeProjectButton(project);
      this.domElements.sidebarProjects.appendChild(projectButton);
    }
    return this.domElements.sidebar;
  }
}

class AddTaskModal {
  constructor() {
    this.domElements = {
      modal: null,
      addTaskButton: null,
      cancelAddTaskButton: null,
    };
    this.cacheDOM();
    this.bindEventListeners();
  }

  cacheDOM() {
    this.domElements.modal = document.getElementById("add-task-modal");
    this.domElements.cancelAddTaskButton = document.getElementById(
      "cancel-add-task-modal-button",
    );
  }

  bindEventListeners() {
    this.domElements.cancelAddTaskButton.addEventListener(
      "click",
      this.hideModal.bind(this),
    );
  }

  showModal() {
    this.domElements.modal.style.display = "block";
  }

  hideModal() {
    this.domElements.modal.style.display = "none";
  }

  render() {
    return this.domElements.modal;
  }
}

class App {
  constructor(taskList) {
    this.view = "inbox";
    this.taskList = taskList;
    this.sidebar = new Sidebar({
      onViewChange: this.changeView.bind(this),
      setTodayView: this.setTodayView.bind(this),
      // onAddTask: this.addTask.bind(this),
    });
    this.domElements = {
      taskList: null,
      sidebar: null,
      main: null,
      sidebarProjects: null,
    };
    this.cacheDOM();
  }

  cacheDOM() {
    this.domElements.sidebar = document.querySelector(".sidebar");
    this.domElements.main = document.querySelector("main");
    this.domElements.taskList = document.querySelector(".task-list");
  }

  bindEventListeners() {}

  setTodayView() {
    console.log("set today view");
    this.taskList.setToday();
    this.render();
  }

  changeView(view) {
    this.view = view;
    switch (view) {
      case "inbox":
        this.taskList.sortTasks("date");
        this.taskList.filterPriority("all");
        this.taskList.filterProject("all");
        break;
      case "today":
        this.taskList.sortTasks("priority");
        this.taskList.filterPriority("today");
        this.taskList.filterProject("all");
        break;
      case "upcoming":
        this.taskList.sortTasks("priority");
        this.taskList.filterPriority("upcoming");
        this.taskList.filterProject("all");
        break;
      default:
        break;
    }
    this.render();
  }

  render() {
    const projects = this.taskList.getProjects();

    this.domElements.taskList.innerHTML = this.taskList.render().innerHTML;
    this.domElements.sidebar = this.sidebar.render(projects);
  }
}

export default App;
