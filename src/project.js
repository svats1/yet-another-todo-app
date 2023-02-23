const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    this.alive = true;
    this.div;
  }
  render() {
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("button");
    const delProject = document.createElement("button");

    projectDiv.className = "project";
    projectName.className = "project-name";
    delProject.className = "project-delete";

    projectName.textContent = this.name;
    delProject.textContent = "X";

    // Deletion handler
    delProject.addEventListener("click", () => {
      projectContainer.removeChild(projectDiv);
      this.alive = false;
    });

    // Selection handler
    projectName.addEventListener("click", () => {
      console.log(this.taskList);
      taskContainer.innerHTML = "";
      this.taskList.forEach((item) => {
        item.render();
      });
    });

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(delProject);

    projectContainer.appendChild(projectDiv);

    this.div = projectDiv;
  }
}
