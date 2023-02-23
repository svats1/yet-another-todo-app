const taskContainer = document.querySelector(".task-container");

export default class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.alive = true;
    this.div;
  }
  render() {
    const taskDiv = document.createElement("div");
    const inputTask = document.createElement("input");
    const delTask = document.createElement("button");
    const checkTask = document.createElement("input");

    inputTask.className = "input-task";
    checkTask.className = "check-task";
    taskDiv.className = "task";

    checkTask.type = "checkbox";
    inputTask.value = this.name;
    delTask.textContent = "X";

    // State persistence if previously marked Done
    if (this.done === true) {
      inputTask.disabled = true;
      checkTask.checked = true;
    }

    checkTask.addEventListener("click", () => {
      if (this.done === false) {
        // console.log("disabled");
        console.log(checkTask.checked);
        inputTask.disabled = true;
        this.done = true;
      } else {
        // console.log("enabled");
        console.log(checkTask.checked);
        inputTask.disabled = false;
        this.done = false;
      }
    });

    delTask.addEventListener("click", () => {
      taskContainer.removeChild(taskDiv);
      this.alive = false;
    });

    taskDiv.appendChild(inputTask);
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(checkTask);

    taskContainer.appendChild(taskDiv);

    this.div = taskDiv;
  }
}
