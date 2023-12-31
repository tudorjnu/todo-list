import "./UI.css";
import UIHtml from "./UI.html";

class UI {
  constructor(taskList) {
    this.view = "inbox";
    this.taskList = taskList;
    this.domElements = {
      taskList: null,
      sidebar: null,
      main: null,
      sidebarProjects: null,
      projectHTMLTemplate: null,
    };
    this.cacheDOM();
  }

  cacheDOM() {
    this.domElements.sidebar = document.querySelector(".sidebar");
    this.domElements.main = document.querySelector("main");
    this.domElements.taskList = document.querySelector(".task-list");
    this.domElements.sidebarProjects =
      document.querySelector(".sidebar-projects");
    this.getProjectTemplate();
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

  getProjectTemplate() {
    if (!this.domElements.projectHTMLTemplate) {
      document.body.insertAdjacentHTML("beforeend", UIHtml);
      this.domElements.projectHTMLTemplate = document.getElementById(
        "project-button-template",
      );
    }
    return this.domElements.projectHTMLTemplate;
  }

  addTask() {}

  changeView(view) {
    return () => {
      this.view = view;
    };
  }

  makeProjectButton(projectName) {
    const template = this.getProjectTemplate();
    const projectButton = template.content
      .cloneNode(true)
      .querySelector(".project-button");

    projectButton.appendChild(document.createTextNode(projectName));
    return projectButton;
  }

  render() {
    this.domElements.taskList.innerHTML = this.taskList.render().innerHTML;

    const projects = this.taskList.getProjects();
    for (let project of projects) {
      const projectButton = this.makeProjectButton(project);
      this.domElements.sidebarProjects.appendChild(projectButton);
    }
  }
}

export default UI;
