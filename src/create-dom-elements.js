const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export function createProject() {
  const projectDiv = document.createElement("div");
  const delProject = document.createElement("button");

  projectDiv.className = "project";
  projectDiv.textContent = "New Project";
  delProject.textContent = "X";

  projectDiv.appendChild(delProject);

  delProject.addEventListener("click", () => {
    projectContainer.removeChild(projectDiv);
  });

  return projectDiv;
}

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

  taskDiv.appendChild(inputTask);
  taskDiv.appendChild(delTask);
  taskDiv.appendChild(checkTask);

  delTask.addEventListener("click", () => {
    taskContainer.removeChild(taskDiv);
  });

  return taskDiv;
}
