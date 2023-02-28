import Project from "./project";
import Task from "./task";

const newProject = document.querySelector(".add-new-project");
const newTask = document.querySelector(".add-new-task");
const taskContainer = document.querySelector(".task-container");

let appState = {
  currentProject: null,
  currentTaskList: [],
  projectList: [],
};

// On load
appState.currentProject = new Project("Project 1");
appState.currentProject.render();
appState.projectList.push(appState.currentProject);

// Function to delete list items marked as dead (on deletion)
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
  appState.currentProject = new Project(prompt("Project Name?"));
  //
  appState.currentTaskList = [];
  //
  if (!!appState.currentProject.name) {
    // Cleanup project list
    cleanupList(appState.projectList);
    // Render and add new one
    appState.currentProject.render();
    //
    // appState.currentProject.div.addEventListener("click", () => {
    //   console.log(appState.currentProject.name);
    // });
    //
    appState.projectList.push(appState.currentProject);
  }
});

newTask.addEventListener("click", () => {
  //
  if (appState.projectList.length > 0) {
    const task1 = new Task(prompt("Task Name?"));
    //
    if (!!task1.name) {
      // Cleanup task list
      cleanupList(appState.currentTaskList);
      // Render and add new one
      task1.render();
      appState.currentTaskList.push(task1);
      // Pass this to current project for its selection handler
      appState.currentProject.taskList = appState.currentTaskList;
    }
    console.log(appState.projectList);
  } else {
    alert("Create a new project");
  }
});

// // On load
// appState.currentProject = new Project("Project 1");
// appState.currentProject.render();
// appState.projectList.push(appState.currentProject);

// // Function to delete list items marked as dead (on deletion)
// function cleanupList(list) {
//   for (const i in list) {
//     if (list[i].alive === false) {
//       list.splice(i, 1);
//     }
//   }
// }

// newProject.addEventListener("click", () => {
//   //
//   taskContainer.innerHTML = "";
//   //
//   appState.currentProject = new Project(prompt("Project Name?"));
//   //
//   appState.currentTaskList = [];
//   //
//   if (!!appState.currentProject.name) {
//     // Cleanup project list
//     cleanupList(appState.projectList);
//     // Render and add new one
//     appState.currentProject.render();
//     //
//     // appState.currentProject.div.addEventListener("click", () => {
//     //   console.log(appState.currentProject.name);
//     // });
//     //
//     appState.projectList.push(appState.currentProject);
//   }
// });

// newTask.addEventListener("click", () => {
//   //
//   if (appState.projectList.length > 0) {
//     const task1 = new Task(prompt("Task Name?"));
//     //
//     if (!!task1.name) {
//       // Cleanup task list
//       cleanupList(appState.currentTaskList);
//       // Render and add new one
//       task1.render();
//       appState.currentTaskList.push(task1);
//       // Pass this to current project for its selection handler
//       appState.currentProject.taskList = appState.currentTaskList;
//     }
//     console.log(appState.projectList);
//   } else {
//     alert("Create a new project");
//   }
// });
