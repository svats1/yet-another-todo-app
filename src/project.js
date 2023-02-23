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
    // Create DOM nodes
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("button");
    const delProject = document.createElement("button");

    // Qualify DOM nodes
    projectDiv.className = "project";
    projectName.className = "project-name";
    delProject.className = "project-delete";
    projectName.textContent = this.name;
    delProject.textContent = "X";

    // Select project event handler
    projectName.addEventListener("click", () => {
      console.log(this.taskList);
      taskContainer.innerHTML = "";
      this.taskList.forEach((item) => {
        if (item.alive === true) {
          item.render();
        }
      });
    });

    // Delete project event handler
    delProject.addEventListener("click", () => {
      projectContainer.removeChild(projectDiv);
      this.alive = false;
    });

    // Compose project DOM node
    projectDiv.appendChild(projectName);
    projectDiv.appendChild(delProject);

    // Add to previous projects
    projectContainer.appendChild(projectDiv);

    // Pass project div as this object's property
    this.div = projectDiv;
  }
}
