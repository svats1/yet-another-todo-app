export function createProject() {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.textContent = "New Project";
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

  return taskDiv;
}
