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
import { Project, Task } from "./create-dom-elements";

//

const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

const newProject = document.querySelector(".add-new-project");
const newTask = document.querySelector(".add-new-task");

let projectList = [];
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
    projectList.push(project1);
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
        // Add to project list
        project1.addTask(task1);
      }
      // See if any task has been deleted
      for (const i in project1.taskList) {
        if (project1.taskList[i].alive === false) {
          project1.taskList.splice(i, 1);
        }
      }
    });
  }
  //   See if a project has been deleted
  for (const i in projectList) {
    if (projectList[i].alive === false) {
      projectList.splice(i, 1);
    }
  }
  console.log(projectList);
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
