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
    const delProject = document.createElement("button");

    projectDiv.className = "project";
    projectDiv.textContent = this.name;
    delProject.textContent = "X";

    // Deletion handler
    delProject.addEventListener("click", () => {
      projectContainer.removeChild(projectDiv);
      this.alive = false;
    });
    // Selection handler
    projectDiv.addEventListener("click", () => {
      console.log(this.taskList);
      taskContainer.innerHTML = "";
      this.taskList.forEach((item) => {
        item.render();
      });
    });

    projectDiv.appendChild(delProject);
    projectContainer.appendChild(projectDiv);

    this.div = projectDiv;
  }
}
