// This app needs a few things:
// A project folder, that contains any number of tasks
//      Projects can be navigated on the left, added, deleted
// A task, with name, checkbox, and date
//      A task can be deleted with an X or have strike through on check
// A way to use local storage
// A way to manage user access, multiple users
//

//

import "./style.css";
import { Project, Task, projectList, taskList } from "./create-dom-elements";

//

const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

const newProject = document.querySelector(".add-new-project");
const newTask = document.querySelector(".add-new-task");

//

function createProject() {
  // Instantiate new Project
  const project1 = new Project(prompt("Project name?"));
  // Create project DOM node
  projectContainer.appendChild(project1.createDiv());
}

function createTask() {
  // Instantiate new task
  const task1 = new Task(prompt("Task Name?"));
  // Create task DOM node
  taskContainer.appendChild(task1.createDiv());
}

//

newProject.addEventListener("click", () => {
  createProject();
});

newTask.addEventListener("click", () => {
  createTask();
});

//
