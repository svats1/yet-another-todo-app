const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export const projectList = [];
export const taskList = [];

export class Project {
  constructor(name) {
    this.name = name;
    projectList.push(this);
  }
  createDiv() {
    const projectDiv = document.createElement("div");
    const delProject = document.createElement("button");

    projectDiv.className = "project";
    projectDiv.textContent = this.name;
    delProject.textContent = "X";

    delProject.addEventListener("click", () => {
      projectContainer.removeChild(projectDiv);
      projectList.splice(projectList.indexOf(projectDiv), 1);
    });

    projectDiv.appendChild(delProject);

    return projectDiv;
  }
}

export class Task {
  constructor(name) {
    this.name = name;
    taskList.push(this);
  }
  createDiv() {
    const taskDiv = document.createElement("div");
    const inputTask = document.createElement("div");
    const delTask = document.createElement("button");
    const checkTask = document.createElement("input");

    inputTask.className = "input-task";
    checkTask.className = "check-task";
    taskDiv.className = "task";

    checkTask.type = "checkbox";
    inputTask.textContent = this.name;
    delTask.textContent = "X";

    delTask.addEventListener("click", () => {
      taskContainer.removeChild(taskDiv);
      taskList.splice(taskList.indexOf(taskDiv), 1);
    });

    checkTask.addEventListener("click", () => {
      if (checkTask.checked === true) {
        inputTask.style.textDecoration = "line-through";
      } else {
        inputTask.style.textDecoration = "none";
      }
    });

    taskDiv.appendChild(inputTask);
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(checkTask);

    return taskDiv;
  }
}

// export function createProject() {
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

//   projectList.push(projectDiv);

//   return projectDiv;
// }

// export function createTask() {
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
