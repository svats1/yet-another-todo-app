const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export const projectList = [];
export const taskList = [];

export class Project {
  constructor(name) {
    this.name = name;
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

    projectList.push(this);

    return projectDiv;
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

export function createTask() {
  const taskDiv = document.createElement("div");
  const inputTask = document.createElement("input");
  const delTask = document.createElement("button");
  const checkTask = document.createElement("input");

  inputTask.className = "input-task";
  checkTask.className = "check-task";
  taskDiv.className = "task";

  checkTask.type = "checkbox";
  delTask.textContent = "X";

  delTask.addEventListener("click", () => {
    taskContainer.removeChild(taskDiv);
    taskList.splice(taskList.indexOf(taskDiv), 1);
  });

  taskDiv.appendChild(inputTask);
  taskDiv.appendChild(delTask);
  taskDiv.appendChild(checkTask);

  taskList.push(taskDiv);

  return taskDiv;
}
