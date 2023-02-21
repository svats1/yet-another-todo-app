import Project from "./project";
import Task from "./task";

let projectList = [];

const newProject = document.querySelector(".add-new-project");
const newTask = document.querySelector(".add-new-task");

let currentProject;

newProject.addEventListener("click", () => {
  currentProject = new Project(prompt("Project Name?"));
  if (!!currentProject.name) {
    projectList.push(currentProject);
  }
  currentProject.render();
});

newTask.addEventListener("click", () => {
  const task1 = new Task(prompt("Task Name?"));
  if (!!task1.name) {
    currentProject.addTask(task1);
  }
  task1.render();
  // console.log(currentProject.taskList);
  console.log(projectList);
});

// const projectContainer = document.querySelector(".project-container");
// const taskContainer = document.querySelector(".task-container");

// import Task from "./task";
// import Project from "./project";

// export function createProjectDiv() {
//   const projectDiv = document.createElement("div");
//   const delProject = document.createElement("button");

//   projectDiv.className = "project";
//   projectDiv.textContent = "New Project";
//   delProject.textContent = "X";

//   delProject.addEventListener("click", () => {
//     projectContainer.removeChild(projectDiv);
//     projectList.splice(projectList.indexOf(projectDiv), 1);
//   });

//   projectDiv.appendChild(delProject);
//   projectContainer.appendChild(projectDiv);

//   projectList.push(projectDiv);

//   return projectDiv;
// }

// export function createTaskDiv() {
//   const taskDiv = document.createElement("div");
//   const inputTask = document.createElement("input");
//   const delTask = document.createElement("button");
//   const checkTask = document.createElement("input");

//   inputTask.className = "input-task";
//   checkTask.className = "check-task";
//   taskDiv.className = "task";

//   checkTask.type = "checkbox";
//   delTask.textContent = "X";

//   delTask.addEventListener("click", () => {
//     taskContainer.removeChild(taskDiv);
//     taskList.splice(taskList.indexOf(taskDiv), 1);
//   });

//   taskDiv.appendChild(inputTask);
//   taskDiv.appendChild(delTask);
//   taskDiv.appendChild(checkTask);

//   taskList.push(taskDiv);

//   return taskDiv;
// }

// export class Project {
//   constructor(name) {
//     this.name = name;
//     this.alive = true;
//     this.taskList = [];
//   }
//   createDiv() {
//     const projectDiv = document.createElement("div");
//     const delProject = document.createElement("button");

//     projectDiv.className = "project";
//     projectDiv.textContent = this.name;
//     delProject.textContent = "X";

//     delProject.addEventListener("click", () => {
//       projectContainer.removeChild(projectDiv);
//       this.alive = false;
//       //   projectList.splice(projectList.indexOf(projectDiv), 1);
//     });

//     projectDiv.appendChild(delProject);

//     return projectDiv;
//   }
//   addTask(name) {
//     const task = new Task(name);
//     this.taskList.push(task);
//   }
//   //   removeTask() {
//   //     for (const i in taskList) {
//   //       if (taskList[i].alive === false) {
//   //         taskList.splice(i, 1);
//   //       }
//   //     }
//   //   }
// }

// export class Task {
//   constructor(name) {
//     this.name = name;
//     this.alive = true;
//   }
//   createDiv() {
//     const taskDiv = document.createElement("div");
//     const inputTask = document.createElement("div");
//     const delTask = document.createElement("button");
//     const checkTask = document.createElement("input");

//     inputTask.className = "input-task";
//     checkTask.className = "check-task";
//     delTask.className = "delete-task";
//     taskDiv.className = "task";

//     checkTask.type = "checkbox";
//     inputTask.textContent = this.name;
//     delTask.textContent = "X";

//     delTask.addEventListener("click", () => {
//       taskContainer.removeChild(taskDiv);
//       this.alive = false;
//     });

//     checkTask.addEventListener("click", () => {
//       if (checkTask.checked === true) {
//         inputTask.style.textDecoration = "line-through";
//       } else {
//         inputTask.style.textDecoration = "none";
//       }
//     });

//     taskDiv.appendChild(inputTask);
//     taskDiv.appendChild(delTask);
//     taskDiv.appendChild(checkTask);

//     return taskDiv;
//   }
//   deleteTask() {}
// }
