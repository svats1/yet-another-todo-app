// This app needs a few things:
// A project folder, that contains any number of tasks
//      Projects can be navigated on the left, added, deleted
// A task, with name, checkbox, and date
//      A task can be deleted with an X or have strike through on check
// A way to use local storage
// A way to manage user access, multiple users
//

// Approach
// Write a task object class
// Write a project object class
// Make task a child of project

//
import "./style.css";
// import Project from "./project";
// import Task from "./task";

// import Task from "./task.js";

class Task {
  constructor(title, date, done) {
    this.title = title;
    this.date = date;
    this.done = done;
  }
}

const task1 = new Task();

task1.title = "Get shit doness";
task1.date = "02-14-2023";
task1.done = false;

console.log(task1);

// const newProject = document.querySelector(".add-new");
// newProject.addEventListener("click", () => {
//   console.log("test");
// });

// const project1 = new Project();

// project1.name = "Project 1";

// Object.assign(Task.prototype, Project);

// console.log(project1.prototype);

// Project.prototype = Object.create(task1);

// console.log(project1.title);
