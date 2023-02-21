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
import "./create-dom-elements";
// import { Project, Task } from "./create-dom-elements";

// newProject.addEventListener("click", () => {
//   const projectName = prompt("Project name?");
//   //   taskContainer.innerHTML = "";
//   if (!!projectName) {
//     // Instantiate new Project
//     const project1 = new Project(projectName);
//     // Create project DOM node
//     const projectDiv = project1.createDiv();
//     projectContainer.appendChild(projectDiv);
//     projectList.push(project1);
//     // Allow selection of each project to show its tasks
//     projectDiv.addEventListener("click", () => {
//       // Clear previous contents on page
//       taskContainer.innerHTML = "";
//       // DO: Add task list divs to task container
//       console.log(project1.taskList);

//       // render task list associated with this project
//     });
//   }
// });

// newTask.addEventListener("click", () => {
//   const taskName = prompt("Task Name?");
//   //
//   if (!!taskName) {
//     // Instantiate new task
//     const task1 = new Task(taskName);
//     // Create task DOM node
//     taskContainer.appendChild(task1.createDiv());
//     // taskList.push(task1);
//   }
//   //   createTask(taskName);
// });

// newProject.addEventListener("click", () => {
//   const projectName = prompt("Project name?");
//   taskContainer.innerHTML = "";
//   if (!!projectName) {
//     // Instantiate new Project
//     const project1 = new Project(projectName);
//     projectList.push(project1);
//     // Create project DOM node
//     const projectDiv = project1.createDiv();
//     projectContainer.appendChild(projectDiv);
//     //
//     projectDiv.addEventListener("click", () => {
//       console.log(project1.taskList);
//     });

//     newTask.addEventListener("click", () => {
//       const taskName = prompt("Task Name?");
//       if (!!taskName) {
//         // Instantiate new task
//         const task1 = new Task(taskName);
//         // Create task DOM node
//         const taskDiv = task1.createDiv();
//         taskContainer.appendChild(taskDiv);
//         // Add to project list
//         project1.addTask(task1);
//       }

//       // See if any task has been deleted
//       for (const i in project1.taskList) {
//         if (project1.taskList[i].alive === false) {
//           project1.taskList.splice(i, 1);
//         }
//       }
//     });
//   }
//   //   See if a project has been deleted
//   for (const i in projectList) {
//     if (projectList[i].alive === false) {
//       projectList.splice(i, 1);
//     }
//   }
//   console.log(projectList);
// });

//
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
