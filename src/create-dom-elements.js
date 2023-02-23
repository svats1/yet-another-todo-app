import Project from "./project";
import Task from "./task";

export let projectList = [];

export const newProject = document.querySelector(".add-new-project");
export const newTask = document.querySelector(".add-new-task");

const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export let currentProject;
export let currentTaskList = [];
export let currentProjectNode;

newProject.addEventListener("click", () => {
  //
  taskContainer.innerHTML = "";
  //
  currentProject = new Project(prompt("Project Name?"));
  currentTaskList = [];
  //
  if (!!currentProject.name) {
    currentProject.render();
    projectList.push(currentProject);
  }
});

newTask.addEventListener("click", () => {
  //
  const task1 = new Task(prompt("Task Name?"));
  //
  if (!!task1.name) {
    task1.render();
    currentTaskList.push(task1);
    currentProject.taskList = currentTaskList;
  }
  console.log(projectList);
});
