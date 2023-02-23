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

function cleanupList(list) {
  for (const i in list) {
    if (list[i].alive === false) {
      list.splice(i, 1);
    }
  }
}

newProject.addEventListener("click", () => {
  //
  taskContainer.innerHTML = "";
  //
  currentProject = new Project(prompt("Project Name?"));
  currentTaskList = [];
  //
  if (!!currentProject.name) {
    // Cleanup project list
    cleanupList(projectList);
    // Render and add new one
    currentProject.render();
    projectList.push(currentProject);
  }
});

newTask.addEventListener("click", () => {
  //
  if (projectList.length > 0) {
    const task1 = new Task(prompt("Task Name?"));
    //
    if (!!task1.name) {
      // Cleanup task list
      cleanupList(currentTaskList);
      // Render and add new one
      task1.render();
      currentTaskList.push(task1);
      // Pass this to current project for its selection handler
      currentProject.taskList = currentTaskList;
    }
    console.log(projectList);
  }
});
