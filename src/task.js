const taskContainer = document.querySelector(".task-container");

export default class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.alive = true;
    this.div;
  }
  render() {
    // Create DOM nodes
    const taskDiv = document.createElement("div");
    const inputTask = document.createElement("input");
    const delTask = document.createElement("button");
    const checkTask = document.createElement("input");

    // Qualify DOM nodes
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

    // Checkbox event handler
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

    // Delete task event handler
    delTask.addEventListener("click", () => {
      taskContainer.removeChild(taskDiv);
      this.alive = false;
    });

    // Compose task DOM element
    taskDiv.appendChild(inputTask);
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(checkTask);

    // Add to previous tasks in project
    taskContainer.appendChild(taskDiv);

    // Pass created div as this task object's property
    this.div = taskDiv;
  }
}
