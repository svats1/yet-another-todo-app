const projectContainer = document.querySelector(".project-container");
const taskContainer = document.querySelector(".task-container");

export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    this.div;
  }
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
