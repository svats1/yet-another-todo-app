const taskContainer = document.querySelector(".task-container");

export default class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.div;
  }
  render() {
    const taskDiv = document.createElement("div");
    const inputTask = document.createElement("div");
    const delTask = document.createElement("button");
    const checkTask = document.createElement("input");

    inputTask.className = "input-task";
    checkTask.className = "check-task";
    taskDiv.className = "task";

    checkTask.type = "checkbox";
    inputTask.textContent = this.name;
    delTask.textContent = "X";

    checkTask.addEventListener("click", () => {
      if (checkTask.disabled === false) {
        // inputTask.disabled = true;
        inputTask.style.textDecoration = "line-through";
        this.done = true;
      } else {
        // inputTask.disabled = false;
        inputTask.style.textDecoration = "none";
        this.done = false;
      }
    });

    // delTask.addEventListener("click", () => {
    //   taskContainer.removeChild(taskDiv);
    // });

    taskDiv.appendChild(inputTask);
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(checkTask);

    taskContainer.appendChild(taskDiv);

    this.div = taskDiv;
  }
}
