const projectContainer = document.querySelector(".project-container");

export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    this.div;
  }
  addTask(task) {
    this.taskList.push(task);
  }
  removeTask() {}
  render() {
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
    projectContainer.appendChild(projectDiv);

    this.div = projectDiv;

    // return projectDiv;
  }
}

// Project.prototype = Object.create({ name: "Samarth", age: "32" });
