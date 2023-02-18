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
import {
  createTask,
  projectList,
  taskList,
  Project,
} from "./create-dom-elements";

// import Project from "./project";
// import Task from "./task";

// const task1 = new Task();

// task1.title = "Get shit doness";
// task1.date = "02-14-2023";
// task1.done = false;

// console.log(task1);

//

const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

const newProject = document.querySelector(".add-new-project");
const newTask = document.querySelector(".add-new-task");

newProject.addEventListener("click", () => {
  //   const name = prompt("Project name?");
  const project1 = new Project(prompt("Project name?"));
  console.log(project1);

  projectContainer.appendChild(project1.createDiv());
  console.log(projectList);
});

// newTask.addEventListener("click", () => {
//   taskContainer.appendChild(createTask());
//   console.log(taskList);
// });

//
