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

// function createProject(projectName) {
//   if (!!projectName) {
//     // Instantiate new Project
//     const project1 = new Project(projectName);
//     // Create project DOM node
//     projectContainer.appendChild(project1.createDiv());
//   }
// }

// function createTask(taskName) {
//   if (!!taskName) {
//     // Instantiate new task
//     const task1 = new Task(taskName);
//     // Create task DOM node
//     taskContainer.appendChild(task1.createDiv());
//   }
// }

//

newProject.addEventListener("click", () => {
  const projectName = prompt("Project name?");
  taskContainer.innerHTML = "";
  if (!!projectName) {
    // Instantiate new Project
    const project1 = new Project(projectName);
    // Create project DOM node
    projectContainer.appendChild(project1.createDiv());
    //
    newTask.addEventListener("click", () => {
      const taskName = prompt("Task Name?");
      if (!!taskName) {
        // Instantiate new task
        const task1 = new Task(taskName);
        // Create task DOM node
        taskContainer.appendChild(task1.createDiv());
        project1.addTask(task1.name);
        //
      }
      console.log(project1.taskList);
    });
  }
});

// newProject.addEventListener("click", () => {
//   const projectName = prompt("Project name?");

//   if (!!projectName) {
//     // Instantiate new Project
//     const project1 = new Project(projectName);
//     // Create project DOM node
//     projectContainer.appendChild(project1.createDiv());
//   }
//   //   createProject(projectName);
//   taskContainer.innerHTML = "";
// });

// newTask.addEventListener("click", () => {
//   const taskName = prompt("Task Name?");

//   if (!!taskName) {
//     // Instantiate new task
//     const task1 = new Task(taskName);
//     // Create task DOM node
//     taskContainer.appendChild(task1.createDiv());
//   }
//   //   createTask(taskName);
// });

//
