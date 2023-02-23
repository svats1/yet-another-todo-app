const taskContainer = document.querySelector(".task-container");

export default class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
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

    checkTask.addEventListener("click", () => {
      if (inputTask.disabled === false) {
        console.log("disabled");
        inputTask.disabled = true;
        // inputTask.value = "disabled";
        // inputTask.style.textDecorationLine = "line-through";
        this.done = true;
      } else {
        console.log("enabled");
        inputTask.disabled = false;
        // inputTask.value = "enabled";
        // inputTask.textContent = this.name;
        // inputTask.style.textDecoration = "none";
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
