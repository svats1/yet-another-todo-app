export function createProject() {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";
  projectDiv.textContent = "New Project";
  //   console.log("test");
  return projectDiv;
}

export function createTask() {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.textContent = "New Task";
  //   console.log("test");
  return taskDiv;
}
